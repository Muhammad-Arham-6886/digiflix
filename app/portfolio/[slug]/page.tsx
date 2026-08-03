import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/portfolio";
import { Breadcrumb } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/portfolio/${study.slug}`,
    type: "article",
    image: study.image,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Portfolio", path: "/portfolio" }, { name: study.title, path: `/portfolio/${study.slug}` }])) }} />

      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-16">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_10%,black,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Portfolio", href: "/portfolio" }, { label: study.client }]} />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <div className="max-w-2xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Badge tone="primary">{study.industry}</Badge>
                  {study.services.map((service) => (
                    <Badge key={service} tone="accent">
                      {service}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">{study.client}</p>
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink md:text-5xl">
                  {study.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">{study.summary}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-line-strong bg-surface-2/60 px-4 py-5 text-center">
                    <p className="font-display text-2xl font-bold text-gradient">{metric.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-faint">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line-strong shadow-card">
              <Image
                src={study.image}
                alt={`${study.title} — project overview`}
                width={1600}
                height={900}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink">
                  <Icon name="Target" className="h-6 w-6 text-accent-300" />
                  The challenge
                </h2>
                <p className="leading-relaxed text-ink-muted">{study.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h2 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink">
                  <Icon name="Route" className="h-6 w-6 text-primary-300" />
                  Our approach
                </h2>
                <p className="leading-relaxed text-ink-muted">{study.approach}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40 py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink">Built with</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-primary-400/25 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-200">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent-400/25 bg-accent-500/5 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-xl font-bold text-ink">Want results like these?</h3>
                <p className="mt-1 text-sm text-ink-muted">Book a consultation and let's talk about your platform.</p>
              </div>
              <ButtonLink href="/book-consultation" variant="accent" size="lg">
                Book a Call
                <Icon name="ArrowUpRight" className="h-5 w-5" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-medium text-primary-300 hover:text-primary-200">
                <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to all case studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
