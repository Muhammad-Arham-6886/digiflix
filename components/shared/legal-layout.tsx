import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  lists?: string[][];
};

export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  updated: string;
  intro?: string[];
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="pb-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-10 text-sm text-ink-faint">Last updated: {updated}</p>
          </Reveal>
          {intro && intro.length > 0 ? (
            <Reveal>
              <div className="mb-10 flex flex-col gap-3">
                {intro.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-ink-muted md:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ) : null}
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.04}>
                <section>
                  <h2 className="mb-3 font-display text-2xl font-bold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="mb-3 text-sm leading-relaxed text-ink-muted md:text-base">
                      {p}
                    </p>
                  ))}
                  {section.lists?.map((list, k) => (
                    <ul
                      key={k}
                      className="mb-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-muted md:text-base"
                    >
                      {list.map((item, l) => (
                        <li key={l}>{item}</li>
                      ))}
                    </ul>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
