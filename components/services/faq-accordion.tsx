"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/shared/icon";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
              open ? "border-primary-400/40 bg-surface-2" : "border-line-strong bg-surface-2/50"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-ink md:text-base">{item.q}</span>
              <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-primary-300">
                <Icon name="Plus" className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted whitespace-pre-line">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
