"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { caseStudies, portfolioFilters } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/shared/icon";

export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const prefersReduced = useReducedMotion();

  const filtered = caseStudies.filter((c) => active === "All" || c.industry === active || c.services.includes(active));

  return (
    <section className="pb-20 md:pb-28" aria-label="Case studies">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter case studies">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                active === filter
                  ? "border-accent-400/50 bg-accent-500/10 text-accent-200"
                  : "border-line-strong bg-surface-2 text-ink-muted hover:border-primary-400/40 hover:text-primary-200"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.article
                key={study.slug}
                layout
                initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReduced ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="card-surface group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.title} — case study cover`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-line-strong bg-background/70 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">{study.client}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-primary-200">
                      {study.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{study.summary}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {study.services.slice(0, 2).map((service) => (
                          <span key={service} className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-[11px] text-ink-faint">
                            {service}
                          </span>
                        ))}
                      </div>
                      <Icon name="ArrowUpRight" className="h-5 w-5 text-ink-faint transition-colors group-hover:text-accent-300" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
