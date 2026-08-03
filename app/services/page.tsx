import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/home/capabilities-grid";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/home/final-cta";
import { serviceCategoryMeta } from "@/lib/services";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services & Capabilities",
  description:
    "Web development, e-commerce, AI agents, technical SEO and cloud infrastructure — full IT solutions from one team.",
  path: "/services",
});

export default function ServicesPage() {
  const categories = Object.entries(serviceCategoryMeta);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <PageHero
        eyebrow="Services"
        title="The full stack. One team. Zero extra infrastructure."
        subtitle="Every capability below ships as one deployable platform — frontend, APIs, automation and cloud running on the same infrastructure as your front end."
      />

      <CapabilitiesGrid />

      <section className="border-t border-line py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([key, meta], i) => (
              <Reveal key={key} delay={i * 0.05}>
                <div className="card-surface h-full rounded-3xl p-7">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300">
                    <Icon name={i === 0 ? "Layers" : i === 1 ? "ShoppingBag" : i === 2 ? "Bot" : i === 3 ? "Gauge" : i === 4 ? "Palette" : "Server"} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{meta.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{meta.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-line bg-surface/40 py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Not sure which capability you need?
              </h2>
              <p className="mt-2 max-w-xl text-ink-muted">
                Most of our engagements combine two or three. Tell us the outcome you want and we'll architect the path.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/book-consultation" variant="primary" size="lg">
              Book a Free Consultation
              <Icon name="ArrowRight" className="h-5 w-5" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
