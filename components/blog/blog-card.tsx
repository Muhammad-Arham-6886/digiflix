import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`card-surface group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover ${
        large ? "lg:flex-row lg:items-stretch" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[16/10]"}`}>
        <Image
          src={post.meta.cover}
          alt={post.meta.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <Badge tone="accent">{post.meta.category}</Badge>
        </div>
      </div>
      <div className={`flex flex-1 flex-col p-6 ${large ? "lg:w-1/2 lg:p-8" : ""}`}>
        <div className="mb-3 flex items-center gap-3 text-xs text-ink-faint">
          <span>{formatDate(post.meta.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.meta.readingTime}</span>
        </div>
        <h2
          className={`font-display font-semibold tracking-tight text-ink transition-colors group-hover:text-primary-200 ${
            large ? "text-2xl leading-snug md:text-3xl" : "text-lg leading-snug"
          }`}
        >
          {post.meta.title}
        </h2>
        <p className={`mt-3 flex-1 leading-relaxed text-ink-muted ${large ? "text-base" : "text-sm"}`}>
          {post.meta.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-medium text-ink-faint">{post.meta.author}</span>
          <span className="text-xs font-semibold text-primary-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Read article →
          </span>
        </div>
      </div>
    </Link>
  );
}
