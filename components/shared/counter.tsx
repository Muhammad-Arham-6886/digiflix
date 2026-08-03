"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function Counter({
  to,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || prefersReduced) {
      if (prefersReduced) setValue(to);
      return;
    }

    let raf = 0;
    setValue(from);
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = from + (to - from) * eased;
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, from, duration, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
