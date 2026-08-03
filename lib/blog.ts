import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  cover: string;
  readingTime: string;
};

export type BlogPost = {
  slug: string;
  meta: PostMeta;
  content: string;
};

const contentDir = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString(),
    author: data.author ?? "VOX Digital Agency",
    category: data.category ?? "Engineering",
    tags: data.tags ?? [],
    cover: data.cover ?? "/images/programmer-close-up.jpg",
    readingTime: getReadingTime(content),
  };
  return { slug, meta, content };
}

export function getPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getFeaturedPost(): BlogPost | undefined {
  return getPosts()[0];
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return getPosts().filter((p) => p.slug !== currentSlug).slice(0, count);
}
