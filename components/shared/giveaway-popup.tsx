"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/shared/icon";

const STORAGE_KEY = "vox_giveaway_popup_last_dismissed";
const SIX_HOURS_MS = 6 * 60 * 60 * 1000;
const INITIAL_DELAY_MS = 2500; // 2.5s delay before popping up smoothly

export function GiveawayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // ignore localStorage disabled
    }
  }, []);

  const handleClaim = useCallback(() => {
    handleDismiss();
    router.push("/free-website-giveaway");
  }, [handleDismiss, router]);

  useEffect(() => {
    // Never show on the giveaway page itself
    if (pathname === "/free-website-giveaway") {
      setIsOpen(false);
      return;
    }

    try {
      const lastDismissed = localStorage.getItem(STORAGE_KEY);
      if (lastDismissed) {
        const elapsed = Date.now() - parseInt(lastDismissed, 10);
        if (elapsed < SIX_HOURS_MS) {
          // Still within the 6 hour cooldown period
          return;
        }
      }
    } catch {
      // ignore
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, INITIAL_DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleDismiss]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Free Website Giveaway"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-accent-400/40 bg-gradient-to-b from-surface-2 via-surface to-background p-7 sm:p-9 shadow-card shadow-glow-accent/20"
          >
            {/* Background ambient decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-primary-600/15 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              aria-label="Close giveaway popup"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-2/80 text-ink-muted transition-colors hover:border-line-strong hover:bg-surface-3 hover:text-ink cursor-pointer"
            >
              <Icon name="X" className="h-4 w-4" />
            </button>

            {/* Badge & Urgency Pill (Separate lines) */}
            <div className="flex flex-col items-start gap-2 pr-10 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-300">
                <Icon name="Sparkles" className="h-3.5 w-3.5" />
                Special Agency Giveaway
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                3 Free Slots Left
              </span>
            </div>

            {/* Content */}
            <div className="flex items-start gap-4 mb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-400/30 bg-gradient-to-br from-accent-500/25 to-primary-500/20 text-accent-300 shadow-glow-accent">
                <Icon name="Gift" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink leading-snug">
                  Claim Your Bespoke Website for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-primary-300">100% Free</span>.
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  We are offering complete bespoke website development at <strong className="text-ink">$0 dev fee</strong> for ambitious founders & brands this month.
                </p>
              </div>
            </div>

            {/* Value checklist */}
            <div className="mb-6 rounded-2xl border border-line bg-surface-3/50 p-3.5 space-y-2 text-xs sm:text-sm text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                  <Icon name="Check" className="h-3 w-3" />
                </span>
                <span>100% Custom Tailored UI/UX & Code (No templates)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                  <Icon name="Check" className="h-3 w-3" />
                </span>
                <span>Ultra-fast Core Web Vitals & Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                  <Icon name="Check" className="h-3 w-3" />
                </span>
                <span>Lead capture, WhatsApp & SEO setup included</span>
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleClaim}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 bg-[length:200%_auto] px-6 py-3.5 font-display text-sm sm:text-base font-semibold text-white shadow-glow-accent transition-all duration-500 hover:bg-[position:right_center] active:scale-[0.99] cursor-pointer"
              >
                <span>Claim Free Website Now</span>
                <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Bottom footer (Separate lines) */}
              <div className="flex flex-col items-center justify-center gap-1 pt-1 text-center text-xs text-ink-faint">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="hover:text-ink transition-colors cursor-pointer"
                >
                  Remind me in 6 hours
                </button>
                <span className="text-[11px] text-ink-faint/70">
                  • Terms & conditions apply
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
