import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, getRelatedServices, getServiceSlugs } from "@/lib/services";
import { Breadcrumb } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/services/faq-accordion";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle.replace(" | VOX Digital Agency", ""),
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service.slug, service.name, service.description)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: service.name, path: `/services/${service.slug}` }])) }} />

      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_10%,black,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="flex flex-col items-start gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/15 text-primary-300">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <Badge tone="primary">{service.category}</Badge>
                </div>
                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                  {service.name}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <ButtonLink href="/book-consultation" variant="primary" size="lg">
                    Book a Consultation
                    <Icon name="ArrowUpRight" className="h-5 w-5" />
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline" size="lg">
                    Start a Project
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-primary-500/10 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-3xl border border-line-strong shadow-card">
                  <Image
                    src={service.image ?? "/images/programmer-close-up.jpg"}
                    alt={`${service.name} — VOX Digital Agency`}
                    width={1000}
                    height={750}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                What's included
              </h2>
            </Reveal>
            <ul className="flex flex-col gap-3">
              {service.features.map((feature, i) => (
                <Reveal key={feature} delay={i * 0.04}>
                  <li className="flex items-start gap-3 rounded-2xl border border-line bg-surface-2/50 px-4 py-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-300">
                      <Icon name="Check" className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-muted">{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                What you receive
              </h2>
            </Reveal>
            <div className="card-surface rounded-3xl p-7">
              <ul className="flex flex-col gap-4">
                {service.deliverables.map((deliverable, i) => (
                  <li key={deliverable} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent-400/25 bg-accent-500/10 font-display text-sm font-bold text-accent-300">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink">{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl border border-primary-400/20 bg-primary-500/5 p-5">
                <p className="text-sm leading-relaxed text-ink-muted">
                  Every engagement ships with source code you own, documentation you can hand to any engineer,
                  and a 30–60 day post-launch care window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <FaqAccordion items={service.faq} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Related capabilities
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="card-surface group flex items-center justify-between gap-4 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-ink group-hover:text-primary-200">
                    {rel.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-faint">{rel.category}</p>
                </div>
                <Icon name="ArrowUpRight" className="h-5 w-5 shrink-0 text-ink-faint transition-colors group-hover:text-accent-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
