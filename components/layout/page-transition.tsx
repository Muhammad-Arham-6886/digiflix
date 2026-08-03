"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  return (
    <motion.main
      key={pathname}
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
