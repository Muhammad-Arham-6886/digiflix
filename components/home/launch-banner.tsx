import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/ui/button";

export function LaunchBanner() {
  return (
    <section className="relative py-20 md:py-24" aria-label="Featured case study call to action">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary-400/25 bg-gradient-to-br from-primary-950 via-surface to-surface p-10 shadow-card md:p-14">
            <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_60%)]" aria-hidden="true" />
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  <Icon name="Gem" className="h-3.5 w-3.5" />
                  Limited launch partner slots
                </span>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                  Be our next <span className="text-gradient-gold">featured case study</span>
                </h2>
                <p className="mt-4 text-ink-muted md:text-lg">
                  We partner with 2–3 ambitious teams per quarter on flagship builds — with priority
                  engineering, below-market early pricing and a guaranteed spotlight.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Magnetic>
                  <ButtonLink href="/contact" variant="accent" size="lg">
                    Claim a Slot
                    <Icon name="ArrowUpRight" className="h-5 w-5" />
                  </ButtonLink>
                </Magnetic>
                <ButtonLink href="/portfolio" variant="outline" size="lg">
                  See the Work
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
