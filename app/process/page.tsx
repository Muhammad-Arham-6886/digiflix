import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProcessTimeline } from "@/components/process/process-timeline";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/home/final-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Process",
  description:
    "The six-phase VOX engagement process — discover, architect, design, build, launch and grow. Defined outcomes at every stage and a fixed budget.",
  path: "/process",
});

const principles = [
  {
    icon: "ListChecks",
    title: "Defined outcomes",
    body: "Every phase ends with a concrete artifact you can hold us to — a strategy doc, an architecture, a working demo.",
  },
  {
    icon: "Calendar",
    title: "Weekly demo cycles",
    body: "You see real, clickable progress on a live preview URL every single week. No big-bang reveals.",
  },
  {
    icon: "CircleDollarSign",
    title: "Fixed budgets",
    body: "Discovery ends in a fixed-price proposal. Scope changes are agreed before they're billed, never after.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A process that removes surprise."
        subtitle="Six phases, defined outcomes, fixed budgets and a weekly live demo. Here's exactly how a VOX engagement runs."
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-5 sm:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.06}>
                <div className="card-surface flex h-full flex-col items-center gap-3 rounded-3xl p-7 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300">
                    <Icon name={principle.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-ink">{principle.title}</h2>
                  <p className="text-sm leading-relaxed text-ink-muted">{principle.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <ProcessTimeline />
        <Reveal className="mt-16 flex justify-center">
          <ButtonLink href="/book-consultation" variant="primary" size="lg">
            Start with Discovery
            <Icon name="ArrowRight" className="h-5 w-5" />
          </ButtonLink>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
