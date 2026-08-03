"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProgressBarProps = {
  label: string;
  value: number;
  display?: string;
  tone?: "primary" | "accent" | "secondary";
  className?: string;
};

const tones = {
  primary: "bg-gradient-to-r from-primary-600 via-primary-400 to-primary-300",
  accent: "bg-gradient-to-r from-accent-600 via-accent-400 to-accent-300",
  secondary: "bg-gradient-to-r from-secondary-600 via-secondary-400 to-secondary-300",
};

export function ProgressBar({ label, value, display, tone = "primary", className }: ProgressBarProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-ink-muted">{label}</span>
        <span className="text-xs font-semibold text-ink">{display ?? value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-3">
        <motion.div
          className={cn("h-full rounded-full", tones[tone])}
          initial={prefersReduced ? { width: `${value}%` } : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}
