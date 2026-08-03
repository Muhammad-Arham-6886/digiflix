import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { BookingForm } from "@/components/forms/booking-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Book a free 30-minute consultation with a VOX senior engineer. Discuss your platform, get honest architecture advice and a fixed-price path forward.",
  path: "/book-consultation",
});

const expectations = [
  {
    icon: "Users",
    title: "A senior engineer on the call",
    body: "Not an account manager. The person who would build your platform.",
  },
  {
    icon: "Target",
    title: "Honest technical advice",
    body: "If you don't need a rebuild, we'll say so. You'll leave with a clearer head either way.",
  },
  {
    icon: "ClipboardList",
    title: "A clear next step",
    body: "A recommended engagement shape and a fixed-price discovery sprint if you want to proceed.",
  },
  {
    icon: "Handshake",
    title: "Zero pressure",
    body: "No scripts, no closing techniques. If we're not a fit, we'll point you somewhere better.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="30 minutes with an engineer who ships."
        subtitle="Tell us what you're building and when you'd like to start. We'll confirm your slot within one business day."
      />

      <section className="pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
          <Reveal>
            <div className="card-surface rounded-3xl p-7 md:p-9">
              <BookingForm />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="rounded-3xl border border-primary-400/25 bg-primary-500/5 p-7">
                <h2 className="font-display text-xl font-bold text-ink">What to expect</h2>
              </div>
            </Reveal>
            {expectations.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card-surface flex items-start gap-4 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-400/25 bg-accent-500/10 text-accent-300">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
