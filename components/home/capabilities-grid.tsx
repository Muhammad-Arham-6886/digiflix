"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function CapabilitiesGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof serviceCategories)[number]>("All");
  const prefersReduced = useReducedMotion();

  const filtered = services.filter((s) => active === "All" || s.category === active);
  const shown = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="relative py-20 md:py-28" aria-label="Capabilities">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="One team. The full platform stack."
          subtitle="From marketing sites to autonomous AI agents — frontend, APIs, data and cloud all shipped and owned end to end, with zero brittle multi-vendor glue."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter capabilities by category">
          {serviceCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                active === category
                  ? "border-accent-400/50 bg-accent-500/10 text-accent-200"
                  : "border-line-strong bg-surface-2 text-ink-muted hover:border-primary-400/40 hover:text-primary-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((service) => (
              <motion.div
                key={service.slug}
                layout
                initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="card-surface group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover md:p-7"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-400/20 bg-primary-500/10 text-primary-300 transition-colors group-hover:bg-primary-500/20">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                    <Icon
                      name="ArrowUpRight"
                      className="h-5 w-5 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink group-hover:text-primary-200">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{service.short}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-[11px] font-medium text-ink-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-500/10 px-6 py-3 text-sm font-semibold text-primary-200 transition-all hover:-translate-y-0.5 hover:border-primary-400 hover:bg-primary-500/20"
            >
              View all capabilities
              <Icon name="ArrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
