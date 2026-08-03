import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { getPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Engineering Notes",
  description:
    "Engineering notes from VOX Digital Agency — web performance, AI agents, e-commerce and motion design systems.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering notes from the studio floor."
        subtitle="What we're learning while building high-performance platforms — performance, AI agents, commerce, infrastructure and motion."
      />

      <section className="pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {featured && (
            <Reveal className="mb-12">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Featured
              </span>
              <BlogCard post={featured} large />
            </Reveal>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl border border-primary-400/25 bg-gradient-to-br from-primary-950/70 to-surface p-8 text-center md:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Get the good stuff, monthly
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted">
                One email a month — engineering notes, performance data and AI lessons. No noise.
              </p>
              <div className="w-full max-w-md">
                <NewsletterForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
