import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/services/faq-accordion";
import { pricingTiers, servicePrices, carePlans, pricingFaq } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
export const metadata: Metadata = buildMetadata({
  title: "Pricing & Plans",
  description:
    "Transparent pricing for websites, e-commerce, AI automation and more — fixed-price project plans, per-service starting prices and EasyNest care plans.",
  path: "/pricing",
});

const toneDot = {
  emerald: "bg-emerald-400",
  blue: "bg-sky-400",
  violet: "bg-violet-400",
};

const toneBorder = {
  emerald: "border-emerald-400/40",
  blue: "border-sky-400/40",
  violet: "border-violet-400/40",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear pricing. No surprises."
        subtitle="Fixed-price project plans, transparent per-service pricing and EasyNest care plans — you always know what you're paying for, and you own the result."
      />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Plans"
            title="Pick a plan that fits where you are"
            subtitle="Every plan is fixed-price after a short discovery call. All builds include code ownership and documentation."
          />

          <Stagger className="grid items-stretch gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                    tier.featured
                      ? "border-primary-400/50 bg-gradient-to-b from-primary-950/80 to-surface shadow-glow-primary"
                      : "card-surface"
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  )}
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl",
                        tier.featured ? "bg-primary-500/20 text-primary-300" : "bg-accent-500/10 text-accent-300"
                      )}
                    >
                      <Icon name={tier.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-ink">{tier.name}</h2>
                      <p className="text-xs text-ink-faint">{tier.tagline}</p>
                    </div>
                  </div>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold tracking-tight text-ink">{tier.price}</span>
                  </div>
                  <p className="mb-6 text-xs text-ink-faint">{tier.priceNote}</p>
                  <p className="mb-7 text-sm leading-relaxed text-ink-muted">{tier.description}</p>
                  <ul className="mb-7 flex flex-1 flex-col gap-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-8 flex flex-wrap gap-1.5">
                    {tier.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-[11px] font-medium text-ink-faint"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <ButtonLink href={tier.href} variant={tier.featured ? "primary" : "outline"} className="w-full">
                    {tier.cta}
                    <Icon name="ArrowRight" className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Pricing"
            title="Need just one service? Pay for exactly that."
            subtitle="Standalone starting prices for every service — no bundles, no hidden add-ons."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePrices.map((sp) => (
              <StaggerItem key={sp.href}>
                <a
                  href={sp.href}
                  className="card-surface group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300 transition-colors group-hover:bg-primary-500/20">
                      <Icon name={sp.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink transition-colors group-hover:text-primary-200">
                        {sp.name}
                      </p>
                      <p className="text-xs font-medium text-accent-300">{sp.price}</p>
                    </div>
                  </div>
                  <Icon name="ArrowUpRight" className="h-4 w-4 text-ink-faint transition-colors group-hover:text-accent-300" />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EasyNest"
            title="Care plans that keep your site fast and safe"
            subtitle="Recurring monthly plans for the work that never stops — updates, backups, monitoring and support."
          />
          <Stagger className="grid items-stretch gap-6 md:grid-cols-3">
            {carePlans.map((plan) => (
              <StaggerItem key={plan.name} className="h-full">
                <div className={cn("card-surface flex h-full flex-col rounded-3xl border p-8", toneBorder[plan.tone])}>
                  <div className="flex items-center gap-2.5">
                    <span className={cn("h-2.5 w-2.5 rounded-full", toneDot[plan.tone])} aria-hidden="true" />
                    <h3 className="font-display text-xl font-semibold text-ink">{plan.name}</h3>
                  </div>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-bold tracking-tight text-ink">{plan.price}</span>
                    <span className="text-xs text-ink-faint">/month</span>
                  </div>
                  {plan.includes && <p className="mt-4 text-xs font-medium text-accent-300">{plan.includes}</p>}
                  <ul className="mt-5 mb-8 flex flex-1 flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/contact" variant="outline" className="w-full">
                    Choose {plan.name}
                    <Icon name="ArrowRight" className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Pricing FAQ" title="Questions about how we charge" />
          <FaqAccordion items={pricingFaq} />
        </div>
      </section>
    </>
  );
}
