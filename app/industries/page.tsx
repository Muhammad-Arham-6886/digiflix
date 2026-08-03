import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/home/final-cta";
import { industries, industriesIntro } from "@/lib/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "VOX engineers platforms for e-commerce, SaaS, fintech, healthcare, real estate, manufacturing, media and logistics — with engineering rigor tuned to each industry.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow={industriesIntro.title} title={industriesIntro.title} subtitle={industriesIntro.subtitle} />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <div className="card-surface group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} — VOX Digital Agency`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-500/10 text-primary-300">
                        <Icon name={industry.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{industry.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted">{industry.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {industry.bullets.map((bullet) => (
                        <span key={bullet} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-ink-faint">
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40 py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <SectionHeading
            eyebrow="Your industry"
            title="Don't see your sector?"
            subtitle="The list above is where we've shipped recently — not a ceiling. If your industry has platform problems, we probably speak its language."
            align="left"
            className="mb-0"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/contact" variant="primary" size="lg">
              Talk to Us
              <Icon name="ArrowUpRight" className="h-5 w-5" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
