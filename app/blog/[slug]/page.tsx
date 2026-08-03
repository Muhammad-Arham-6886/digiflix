import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.meta.cover,
    publishedTime: post.meta.date,
    keywords: post.meta.tags,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  const related = getRelatedPosts(post.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post.meta.title, post.meta.description, post.meta.date, post.meta.cover)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Blog", path: "/blog" }, { name: post.meta.title, path: `/blog/${post.slug}` }])) }} />

      <article className="relative pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.meta.category }]} />

          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge tone="accent">{post.meta.category}</Badge>
              {post.meta.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
              {post.meta.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-4 text-sm text-ink-faint">
              <span className="font-medium text-ink-muted">{post.meta.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.meta.readingTime}</span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 text-lg font-medium leading-relaxed text-ink">{post.meta.description}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="my-8 overflow-hidden rounded-3xl border border-line-strong">
              <Image
                src={post.meta.cover}
                alt={post.meta.title}
                width={1200}
                height={675}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <div>{content}</div>

          <Reveal>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent-400/25 bg-accent-500/5 p-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-xl font-bold text-ink">Want this kind of engineering?</h2>
                <p className="mt-1 text-sm text-ink-muted">Let's talk about your platform over a free call.</p>
              </div>
              <ButtonLink href="/book-consultation" variant="accent" size="lg">
                Book a Call
                <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Keep reading
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card-surface group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40"
                  >
                    <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl">
                      <Image
                        src={post.meta.cover}
                        alt={post.meta.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-primary-200">
                      {post.meta.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-faint">{formatDate(post.meta.date)} · {post.meta.readingTime}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
