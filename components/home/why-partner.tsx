import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

const reasons = [
  {
    num: "01",
    icon: "Gauge",
    title: "Lighthouse guarantee",
    body: "A 95+ score is written into the contract — if we miss it, we keep fixing until we don't.",
  },
  {
    num: "02",
    icon: "Sparkles",
    title: "Motion & physics UI",
    body: "Framer Motion springs, layout transitions and micro-interactions that make platforms feel alive.",
  },
  {
    num: "03",
    icon: "Cpu",
    title: "Full-stack + AI backend",
    body: "Frontend, APIs, databases and AI agents in one deployable system — no separate backend to babysit.",
  },
  {
    num: "04",
    icon: "ShieldCheck",
    title: "IP ownership & security",
    body: "You own the code, the infrastructure and the domain. We engineer for auditability from day one.",
  },
  {
    num: "05",
    icon: "SearchCheck",
    title: "Technical SEO",
    body: "Structured data, crawl architecture and Core Web Vitals — search visibility engineered, not hoped for.",
  },
  {
    num: "06",
    icon: "Clock",
    title: "24/7 SLAs",
    body: "Monitoring, alerting and on-call response so a 2am release never becomes a 2am outage.",
  },
];

export function WhyPartner() {
  return (
    <section className="relative border-y border-line bg-surface/40 py-20 md:py-28" aria-label="Why partner with VOX">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Partner"
          title="Engineering partners, not vendors"
          subtitle="Six reasons teams keep choosing VOX — and keep coming back for the next platform."
        />
        <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <StaggerItem key={reason.num} className="group relative bg-surface p-8 md:p-9">
              <span className="absolute right-6 top-6 font-display text-5xl font-bold text-line-strong transition-colors group-hover:text-primary-400/20">
                {reason.num}
              </span>
              <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/25 bg-accent-500/10 text-accent-300">
                <Icon name={reason.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{reason.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
