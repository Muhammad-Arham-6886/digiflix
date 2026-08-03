import { platformLogos } from "@/lib/portfolio";
import { Marquee } from "@/components/shared/marquee";
import { Reveal } from "@/components/shared/reveal";

export function TrustMarquee() {
  return (
    <section className="border-y border-line bg-surface/60 py-12" aria-label="Built on">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
            Built on the platforms your customers already trust
          </p>
        </Reveal>
      </div>
      <Marquee>
        {platformLogos.map((logo) => (
          <span
            key={logo}
            className="select-none font-display text-2xl font-bold tracking-tight text-ink-faint transition-colors hover:text-primary-200"
          >
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
