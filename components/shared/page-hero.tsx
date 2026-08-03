import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20" aria-label="Page intro">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{subtitle}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-faint">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <Icon name="ChevronRight" className="h-3.5 w-3.5" aria-hidden="true" />}
            {item.href ? (
              <a href={item.href} className="transition-colors hover:text-primary-300">
                {item.label}
              </a>
            ) : (
              <span className="text-ink-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
