"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqCategories, faqItems } from "@/lib/faq";
import { FaqAccordion } from "@/components/services/faq-accordion";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(faqCategories[0].id);
  const prefersReduced = useReducedMotion();

  const searching = query.trim().length > 0;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      if (searching) {
        return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
      }
      return item.category === active;
    });
  }, [query, active, searching]);

  const activeCategory = faqCategories.find((c) => c.id === active);
  const resultLabel = searching
    ? `${results.length} ${results.length === 1 ? "result" : "results"} for "${query.trim()}"`
    : `${results.length} questions in ${activeCategory?.label ?? ""}`;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="relative mb-8">
        <Icon
          name="Search"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, e.g. Shopify, SEO, pricing..."
          aria-label="Search frequently asked questions"
          className="h-14 w-full rounded-2xl border border-line-strong bg-surface-2 pl-12 pr-12 text-sm text-ink placeholder:text-ink-faint focus:border-primary-400/60 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-surface-3 hover:text-ink"
          >
            <Icon name="X" className="h-4 w-4" />
          </button>
        )}
      </div>

      {!searching && (
        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter FAQs by category"
        >
          {faqCategories.map((cat) => {
            const count = faqItems.filter((item) => item.category === cat.id).length;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "border-accent-400/50 bg-accent-500/10 text-accent-200"
                    : "border-line-strong bg-surface-2 text-ink-muted hover:border-primary-400/40 hover:text-primary-200"
                )}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <p className="mb-4 text-xs font-medium text-ink-faint" aria-live="polite">
        {resultLabel}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${searching ? "search" : active}-${query}`}
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {results.length > 0 ? (
            <FaqAccordion items={results} />
          ) : (
            <div className="rounded-3xl border border-line-strong bg-surface-2/50 p-10 text-center">
              <Icon name="Search" className="mx-auto mb-4 h-8 w-8 text-ink-faint" />
              <p className="font-display text-lg font-semibold text-ink">No results found</p>
              <p className="mt-1 text-sm text-ink-muted">
                Try a different keyword, or contact us and we'll answer directly.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
