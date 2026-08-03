import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Coming Soon",
  description: "VOX Digital Agency is building something new. Sign up to be the first to know.",
  path: "/coming-soon",
});

export default function ComingSoonPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl animate-glow-pulse" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Image
          src="/images/logo/logo.png"
          alt="VOX Digital Agency"
          width={220}
          height={80}
          priority
          className="h-12 w-auto"
        />
        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
          Coming soon
        </span>
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
          Something <span className="text-gradient">exceptional</span> is on the way.
        </h1>
        <p className="max-w-md text-ink-muted">
          We're engineering the next release of the VOX platform. Join the list and be first to know when it lands.
        </p>
        <div className="w-full max-w-sm">
          <NewsletterForm compact />
        </div>
        <ButtonLink href="/" variant="outline" className="mt-2">
          <Icon name="ArrowRight" className="h-4 w-4" />
          Back to the homepage
        </ButtonLink>
      </div>
    </section>
  );
}
