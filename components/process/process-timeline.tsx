"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/process";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="absolute left-5 top-0 h-full w-px bg-line-strong md:left-1/2" aria-hidden="true" />
      {!prefersReduced && (
        <motion.div
          className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-primary-400 via-primary-500 to-accent-400 md:left-1/2"
          style={{ scaleY: lineScale }}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col gap-12">
        {processSteps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <div key={step.step} className="relative md:grid md:grid-cols-2 md:gap-16">
              <div className="absolute left-5 top-1 -translate-x-1/2 md:left-1/2" aria-hidden="true">
                <motion.span
                  initial={prefersReduced ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-2xl border shadow-glow-soft",
                    "border-primary-400/40 bg-surface text-primary-300"
                  )}
                >
                  <Icon name={step.icon} className="h-5 w-5" />
                </motion.span>
              </div>

              <div className={cn("pl-14 md:pl-0", left ? "md:pr-14" : "md:col-start-2 md:pl-14")}>
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="card-surface rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-card-hover"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-line-strong">{step.step}</span>
                    <span className="rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-300">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.outcomes.map((outcome) => (
                      <span key={outcome} className="flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-ink-faint">
                        <Icon name="Check" className="h-3 w-3 text-primary-300" strokeWidth={2.5} />
                        {outcome}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
