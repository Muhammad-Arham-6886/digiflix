import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { ButtonLink } from "@/components/ui/button";
import { testimonials } from "@/lib/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Client Testimonials",
  description:
    "What clients say about VOX Digital Agency — 5-star experiences, honest communication and quality delivered every time.",
  path: "/testimonials",
});

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          className={i < count ? "h-4 w-4 fill-accent-400 text-accent-400" : "h-4 w-4 text-neutral-700"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Endorsements, not adjectives."
        subtitle="We let measured outcomes and client words do the talking. Here's what partners say about working with VOX."
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="card-surface flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover">
                  <div className="mb-4 flex items-center justify-between">
                    <Stars count={t.rating} />
                    <Icon name="Quote" className="h-7 w-7 text-primary-400/30" />
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-ink-muted">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="font-display text-base font-semibold text-ink">{t.name}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 flex justify-center">
            <ButtonLink href="/contact" variant="outline" size="lg">
              Become a client story
              <Icon name="ArrowUpRight" className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
