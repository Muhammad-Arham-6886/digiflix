"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

type Row = {
  label: string;
  legacy: { display: string; value: number };
  lift: { display: string; value: number };
};

const rows: Row[] = [
  { label: "Avg page load", legacy: { display: "6.4s", value: 26 }, lift: { display: "0.42s", value: 100 } },
  { label: "Lighthouse performance", legacy: { display: "58 / 100", value: 58 }, lift: { display: "98 / 100", value: 98 } },
  { label: "Time to interactive", legacy: { display: "9.1s", value: 18 }, lift: { display: "0.9s", value: 96 } },
  { label: "Conversion uplift", legacy: { display: "baseline", value: 30 }, lift: { display: "+184%", value: 92 } },
  { label: "SLA / uptime", legacy: { display: "best effort", value: 40 }, lift: { display: "42ms · 99.99%", value: 99 } },
];

type Mode = "legacy" | "lift";

export function LiftCompare() {
  const [mode, setMode] = useState<Mode>("lift");
  const prefersReduced = useReducedMotion();
  const data = rows.map((r) => (mode === "lift" ? r.lift : r.legacy));

  return (
    <section className="relative py-20 md:py-28" aria-label="Legacy versus VOX Lift comparison">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">
            <IconDot />
            The VOX Lift
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            What happens when engineering <span className="text-gradient">takes performance personally</span>
          </h2>
          <p className="max-w-2xl text-ink-muted md:text-lg">
            Flip the toggle. Same business, same traffic — one platform engineered to its full potential.
          </p>

          <div
            className="relative grid grid-cols-2 rounded-full border border-line-strong bg-surface-2 p-1.5"
            role="tablist"
            aria-label="Comparison mode"
          >
            {(["legacy", "lift"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={cn(
                  "relative z-10 cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-colors",
                  mode === m ? "text-white" : "text-ink-muted hover:text-ink"
                )}
              >
                {m === "legacy" ? "Legacy Stack" : "VOX Lift"}
                {mode === m && (
                  <motion.span
                    layoutId="lift-pill"
                    transition={prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      m === "lift"
                        ? "bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow-primary"
                        : "bg-surface-3 border border-line-strong"
                    )}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-strong overflow-hidden rounded-3xl shadow-card">
            <div className="flex items-center justify-between border-b border-line px-6 py-4 md:px-8">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mode}
                  initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReduced ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint"
                >
                  {mode === "lift" ? "VOX Lift" : "Legacy Stack"}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="grid gap-6 px-6 py-8 md:px-8 md:py-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mode}
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReduced ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  {data.map((row, i) => {
                    const isLift = mode === "lift";
                    return (
                      <div key={rows[i].label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-ink-muted">{rows[i].label}</span>
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                              key={row.display}
                              initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={prefersReduced ? undefined : { opacity: 0, y: -6 }}
                              transition={{ duration: 0.18 }}
                              className={cn(
                                "font-display text-lg font-bold",
                                isLift ? "text-primary-200" : "text-ink-faint"
                              )}
                            >
                              {row.display}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-surface-3">
                          <motion.div
                            key={`${mode}-${i}`}
                            className={cn(
                              "h-full rounded-full",
                              isLift
                                ? "bg-gradient-to-r from-primary-600 via-primary-400 to-accent-400"
                                : "bg-neutral-700"
                            )}
                            initial={prefersReduced ? { width: `${row.value}%` } : { width: 0 }}
                            animate={{ width: `${row.value}%` }}
                            transition={{ duration: 0.9, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-2 rounded-2xl border border-accent-400/20 bg-accent-500/5 px-4 py-3 text-sm text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Measured on the same Lighthouse budget we guarantee in every contract.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IconDot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />;
}
