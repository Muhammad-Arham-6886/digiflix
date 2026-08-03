"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  duration?: number;
};

export function Marquee({ children, className, slow = false, duration }: MarqueeProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={cn("overflow-hidden", className)}>{children}</div>;
  }

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)} aria-hidden="true">
      <motion.div
        className="flex w-max items-center gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: duration ?? (slow ? 70 : 42),
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16">{children}</div>
      </motion.div>
    </div>
  );
}
