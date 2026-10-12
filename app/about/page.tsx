import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { FinalCta } from "@/components/home/final-cta";
import { buildMetadata, organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Worldwide Full-Service Digital Agency",
  description:
    "VOX is a premier worldwide digital agency uniting brand design, modern engineering, and AI automation to build category-defining digital flagships.",
  path: "/about",
});

const values = [
  {
    icon: "Sparkles",
    title: "Craft over shortcuts",
    body: "Every detail matters — typography, fluid motion, architecture, and conversion psychology. We build digital flagships that captivate audiences and deliver measurable growth.",
  },
  {
    icon: "Gauge",
    title: "Flawless performance",
    body: "Speed and responsiveness are core to luxury and credibility. Blazing 95+ performance, instant page transitions, and rock-solid reliability come standard.",
  },
  {
    icon: "Target",
    title: "Measurable commercial impact",
    body: "Conversion rate, average order value, brand prestige — we define key impact targets upfront and align creative execution directly to business growth.",
  },
  {
    icon: "Cpu",
    title: "Next-gen technology & AI",
    body: "We blend high-end design with modern tech stacks and autonomous AI agents to automate real business workflows and outpace competition.",
  },
  {
    icon: "Handshake",
    title: "Radical partnership",
    body: "We act as your dedicated executive digital team. From concept to launch and continuous optimization, your growth is our obsession.",
  },
  {
    icon: "MessageSquare",
    title: "Honest strategic counsel",
    body: "If an off-the-shelf tool solves your problem better than custom code, we will tell you. We champion long-term value and compounded brand equity.",
  },
];

const milestones = [
  { year: "2019", text: "Founded as a boutique creative and digital studio." },
  { year: "2021", text: "Crossed 50 shipped digital platforms, stores, and brand identities worldwide." },
  { year: "2023", text: "Launched dedicated AI & automation practice for enterprise clients." },
  { year: "2025", text: "Expanded global distributed team across key tech and design hubs." },
  { year: "2026", text: "Delivering worldwide full-service agency solutions for clients across the US, UK, Europe, Middle East, and APAC." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="About VOX"
        title="A world-class digital agency built for ambitious brands."
        subtitle="We are a global full-service digital agency delivering world-class brand identity, high-converting digital flagships, and intelligent AI automation for industry leaders worldwide."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-line-strong">
                <Image
                  src="/images/programmer-close-up.jpg"
                  alt="VOX team crafting a high-performance digital flagship"
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
                Started with one belief: extraordinary brands need extraordinary digital execution.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-ink-muted">
                VOX was founded to bridge the gap between high-concept creative agencies and rigid engineering vendors.
                Too often, brands had to choose between beautiful design that loaded slowly, or fast platforms that lacked
                soul and personality. We united world-class visual design, elite modern engineering, and cutting-edge AI into
                a single high-agility agency.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="leading-relaxed text-ink-muted">
                Today, VOX partners with high-growth startups, established enterprises, and global brands across North America,
                Europe, the Middle East, and Asia-Pacific — delivering bespoke digital ecosystems that build brand equity and drive
                revenue.
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
