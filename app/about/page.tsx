import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { FinalCta } from "@/components/home/final-cta";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About VOX Digital Agency",
  description:
    "VOX is an IT solutions and digital engineering studio. Learn how we work, what we believe and why clients keep coming back.",
  path: "/about",
});

const values = [
  {
    icon: "Cpu",
    title: "Engineering over opinions",
    body: "Every decision is defensible with data — a benchmark, a test, a Lighthouse budget. If we can't measure it, we don't ship it.",
  },
  {
    icon: "Gauge",
    title: "Performance is a feature",
    body: "Speed is not polish; it's product. A 95+ Lighthouse score is written into our contracts, not our marketing.",
  },
  {
    icon: "Target",
    title: "Ship measurable outcomes",
    body: "Conversion, uptime, resolution rate — we define the metric before we start, and we report against it every week.",
  },
  {
    icon: "Sparkles",
    title: "Motion & craft",
    body: "Interfaces should feel engineered, not decorated. Springs, easing curves and micro-interactions are part of the spec.",
  },
  {
    icon: "Handshake",
    title: "Radical ownership",
    body: "If something breaks at 2am, we're already monitoring it. Your platform's uptime is our problem, not yours.",
  },
  {
    icon: "MessageSquare",
    title: "Honest counsel",
    body: "If you don't need a rewrite, we'll tell you. If a hosted platform is the right call, we'll say so. Trust compounds.",
  },
];

const milestones = [
  { year: "2019", text: "Founded as a two-person digital studio in Riyadh." },
  { year: "2021", text: "Crossed 50 shipped websites, stores and platforms for growing businesses." },
  { year: "2023", text: "Launched the AI automation practice — 60+ agents shipped." },
  { year: "2025", text: "Became a remote-first team across 4 countries with 24/7 SLAs." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <PageHero
        eyebrow="About VOX"
        title="A studio of engineers who build like operators."
        subtitle="We're a remote-first IT solutions and digital engineering studio. Small by design, senior by composition — we take on a handful of platforms at a time and own them end to end."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-line-strong">
                <Image
                  src="/images/programmer-close-up.jpg"
                  alt="VOX engineer at work on a high-performance platform"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-line-strong bg-surface-2/95 px-5 py-4 shadow-card backdrop-blur sm:block">
                <p className="font-display text-3xl font-bold text-gradient">99.8%</p>
                <p className="text-xs text-ink-faint">delivery rate, audited</p>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">Our story</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Started with one belief: the website is the business.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-ink-muted">
                VOX began in 2019 when a founder and an engineer got tired of agencies that designed pretty
                screens and handed over slow, fragile code. We decided to build the agency we wished existed —
                one where performance is contractual, motion is part of the design system, and AI agents
                genuinely run business operations instead of just appearing in slides.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="leading-relaxed text-ink-muted">
                Today we're a remote-first team across four countries, shipping everything from marketing sites
                to investor portals to autonomous AI workstreams — always as one deployable platform with a
                written SLA and full ownership handed to you.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="flex flex-col gap-3">
                {milestones.map((m) => (
                  <li key={m.year} className="flex items-baseline gap-4 rounded-2xl border border-line bg-surface-2/50 px-4 py-3">
                    <span className="font-display text-sm font-bold text-accent-300">{m.year}</span>
                    <span className="text-sm text-ink-muted">{m.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we believe"
            title="The principles we won't compromise"
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-surface group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/30 hover:shadow-card-hover">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/25 bg-accent-500/10 text-accent-300">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
