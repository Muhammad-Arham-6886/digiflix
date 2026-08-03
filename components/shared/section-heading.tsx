import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
