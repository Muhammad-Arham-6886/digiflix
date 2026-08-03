"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { mainNav, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={prefersReduced ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-line-strong bg-surface p-6 shadow-card"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold tracking-tight text-ink">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-surface-2 text-ink"
                aria-label="Close navigation menu"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile primary">
              {mainNav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-primary-500/10 hover:text-primary-200"
                  >
                    {item.label}
                    <Icon name="ChevronRight" className="h-4 w-4 text-ink-faint" />
                  </Link>
                  {item.children ? (
                    <div className="mb-2 flex flex-col gap-0.5 border-l border-line-strong pl-4 ml-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:text-primary-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <ButtonLink href="/book-consultation" variant="outline" className="w-full">
                Book Call
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary" className="w-full">
                Start Project
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </ButtonLink>
              <p className="text-center text-xs text-ink-faint">{siteConfig.email}</p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
