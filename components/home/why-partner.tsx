import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

const reasons = [
  {
    num: "01",
    icon: "Palette",
    title: "Creative & Design Mastery",
    body: "Bespoke visual identities, fluid motion UI and interfaces crafted to command attention and elevate brand authority.",
  },
  {
    num: "02",
    icon: "Gauge",
    title: "High-Performance Engineering",
    body: "Modern Next.js, Shopify and headless architectures engineered for instant speeds and flawless mobile responsiveness.",
  },
  {
    num: "03",
    icon: "Bot",
    title: "Intelligent AI & Automation",
    body: "Autonomous AI agents, smart workflows and custom integrations that give your operations a decisive competitive edge.",
  },
  {
    num: "04",
    icon: "TrendingUp",
    title: "Measurable Growth & ROI",
    body: "Every page, conversion funnel and customer touchpoint is engineered to turn casual traffic into qualified revenue.",
  },
  {
    num: "05",
    icon: "Globe",
    title: "Global Delivery & 24/7 Care",
    body: "Remote-first agency teams serving clients worldwide with proactive monitoring, rapid turnaround and on-call care.",
  },
  {
    num: "06",
    icon: "ShieldCheck",
    title: "Full Brand & IP Ownership",
    body: "You own 100% of your source code, design systems and digital assets from day one — zero vendor lock-in.",
  },
];

export function WhyPartner() {
  return (
    <section className="relative border-y border-line bg-surface/40 py-20 md:py-28" aria-label="Why partner with VOX">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Agency Advantage"
          title="Strategic design meets world-class technology"
          subtitle="Six reasons high-growth companies and global brands choose VOX as their primary digital agency partner."
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
