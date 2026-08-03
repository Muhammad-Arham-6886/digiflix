import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

const blueprints = [
  {
    icon: "Layers",
    title: "Client Hub Platform",
    tag: "Web Platform",
    description:
      "A secure portal built on Next.js — server-rendered, role-gated and fast — that replaces spreadsheets and email with one source of truth.",
    stats: [
      { value: "55%", label: "Less admin time" },
      { value: "1.9x", label: "Client retention" },
      { value: "4.9★", label: "Google rating" },
    ],
    href: "/portfolio/harbor-main-accounting",
  },
  {
    icon: "Bot",
    title: "Autonomous Lead Agent",
    tag: "AI & Automation",
    description:
      "An AI assistant grounded in your services that qualifies leads, answers questions and books jobs — with a human only at confirmation.",
    stats: [
      { value: "68%", label: "Leads auto-qualified" },
      { value: "+30%", label: "Booked jobs" },
      { value: "4.8★", label: "Customer rating" },
    ],
    href: "/portfolio/atlas-home-cleaning",
  },
  {
    icon: "Sparkles",
    title: "Brand-Led Storefront",
    tag: "Design & E-commerce",
    description:
      "A custom Shopify theme with an editorial product experience and motion that makes a small brand feel unmistakably itself.",
    stats: [
      { value: "+38%", label: "Online sales" },
      { value: "1.9s", label: "LCP" },
      { value: "94", label: "Lighthouse mobile" },
    ],
    href: "/portfolio/juniper-and-pine-boutique",
  },
];

export function Blueprints() {
  return (
    <section className="relative py-20 md:py-28" aria-label="Flagship blueprints">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Flagship Blueprints"
          title="Patterns we've proven in production"
          subtitle="Three blueprints we re-use and refine for every client — each one battle-tested, measurable and repeatable."
        />

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {blueprints.map((bp) => (
            <StaggerItem key={bp.title}>
              <Link
                href={bp.href}
                className="card-surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover md:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-500/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                    <Icon name={bp.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-line-strong bg-surface-2 px-3 py-1 text-xs font-medium text-ink-faint">
                    {bp.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-primary-200">
                  {bp.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{bp.description}</p>

                <div className="mt-7 grid grid-cols-3 divide-x divide-line-strong rounded-2xl border border-line-strong bg-surface-2/60">
                  {bp.stats.map((stat) => (
                    <div key={stat.label} className="px-3 py-4 text-center">
                      <p className="font-display text-lg font-bold text-gradient">{stat.value}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-faint">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
