import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { FaqExplorer } from "@/components/faqs/faq-explorer";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description: `Answers to the most common questions about ${siteConfig.name} — services, process, pricing, support, maintenance, AI solutions and more.`,
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Answers, before you ask."
        subtitle="The most common questions about our services, development process, pricing, support and AI solutions — all in one place."
      />

      <section className="pb-16 md:pb-24">
        <Reveal>
          <p className="mx-auto mb-12 max-w-2xl px-4 text-center text-sm leading-relaxed text-ink-muted sm:px-6 lg:px-8">
            Welcome to the VOX Digital Agency FAQ page. Search a topic or pick a category to get straight to the
            answer. Can't find what you're looking for?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-primary-300 underline-offset-4 hover:text-primary-200 hover:underline"
            >
              Contact us
            </a>{" "}
            and we'll help.
          </p>
        </Reveal>
        <FaqExplorer />
      </section>

      <section className="border-t border-line bg-surface/40 py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Still have questions?
              </h2>
              <p className="mt-2 max-w-xl text-ink-muted">
                If your question wasn't answered here, we'd love to hear from you. Reach out and our team will be
                happy to assist with your project, pricing, or technical requirements.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Contact Us
                <Icon name="ArrowUpRight" className="h-5 w-5" />
              </ButtonLink>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-300 transition-colors hover:text-primary-200"
              >
                <Icon name="Mail" className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
