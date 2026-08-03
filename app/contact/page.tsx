import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact VOX Digital Agency",
  description:
    "Start a project with VOX. Tell us what you're building and a senior engineer — not a sales rep — will reply within one business day.",
  path: "/contact",
});

const contactPoints = [
  { icon: "Mail", label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "Clock", label: "Response time", value: "Within 1 business day", href: undefined },
  { icon: "MapPin", label: "Based in", value: siteConfig.address, href: undefined },
  { icon: "Calendar", label: "Prefer a call?", value: "Book a free 30-minute consultation", href: "/book-consultation" },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your platform."
        subtitle="A short form, an honest reply. You'll hear from a senior engineer — never a sales pipeline — within one business day."
      />

      <section className="pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
          <Reveal>
            <div className="card-surface rounded-3xl p-7 md:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {contactPoints.map((point, i) => (
              <Reveal key={point.label} delay={i * 0.06}>
                {point.href ? (
                  <a
                    href={point.href}
                    className="card-surface group flex items-start gap-4 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40"
                  >
                    <ContactPointBody {...point} />
                  </a>
                ) : (
                  <div className="card-surface flex items-start gap-4 rounded-3xl p-6">
                    <ContactPointBody {...point} />
                  </div>
                )}
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-accent-400/25 bg-gradient-to-br from-accent-500/10 to-transparent p-7">
                <h2 className="font-display text-xl font-bold text-ink">Prefer email?</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Write to us directly and include as much context as you like — project background, timeline,
                  links. The more we know, the better the first reply.
                </p>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline" className="mt-5">
                  <Icon name="Mail" className="h-4 w-4" />
                  {siteConfig.email}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPointBody({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-500/10 text-primary-300">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">{label}</span>
        <span className="mt-1 block text-sm font-medium text-ink">{value}</span>
      </span>
    </>
  );
}
