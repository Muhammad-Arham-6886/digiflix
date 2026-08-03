import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-label="Final call to action">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">
            <Icon name="Zap" className="h-3.5 w-3.5 text-accent-400" />
            Ready when you are
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Let's build something <span className="text-gradient">exceptional</span> together.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Tell us what you're building. We'll reply within one business day with honest,
            engineering-first thinking — no scripts, no pressure.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <ButtonLink href="/contact" variant="primary" size="lg">
                Start Your Project
                <Icon name="ArrowUpRight" className="h-5 w-5" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/book-consultation" variant="outline" size="lg">
              Book a Free Consultation
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="text-sm text-ink-faint">
            Prefer email? <Link href={`mailto:${siteConfig.email}`} className="text-primary-300 underline-offset-4 hover:underline">{siteConfig.email}</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
