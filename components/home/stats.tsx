import { Counter } from "@/components/shared/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";

type Stat = {
  to?: number;
  value?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

const stats: Stat[] = [
  { to: 99.8, decimals: 1, suffix: "%", label: "Delivery rate across all engagements" },
  { to: 95, suffix: "+", label: "Lighthouse score, guaranteed in writing" },
  { value: "$40M+", label: "Client revenue influenced" },
  { to: 24, suffix: "/7", label: "Uptime SLA with on-call response" },
];

export function Stats() {
  return (
    <section className="relative py-20 md:py-28" aria-label="Results in numbers">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line-strong bg-line-strong lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-surface p-8 md:p-10">
              <p className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {stat.value ? (
                  <span className="text-gradient">{stat.value}</span>
                ) : (
                  <Counter to={stat.to ?? 0} suffix={stat.suffix} decimals={stat.decimals ?? 0} className="text-gradient" />
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-6 text-center">
          <p className="text-xs text-ink-faint">
            Figures reflect client-reported outcomes across shipped engagements in the last 24 months.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
