"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { mainNav, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "glass-strong py-3 shadow-card" : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — home`}>
            <Image
              src="/images/logo/banner.png"
              alt="VOX Digital Agency"
              width={360}
              height={96}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNav.map((item, i) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenIndex(i)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary-200"
                        : "text-ink-muted hover:text-ink"
                    )}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="ChevronDown" className="h-3.5 w-3.5" />
                    </motion.span>
                  </Link>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={prefersReduced ? false : { opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2"
                      >
                        <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface-2 p-2 shadow-card">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-500/10"
                            >
                              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                              <span>
                                <span className="block text-sm font-medium text-ink group-hover:text-primary-200">
                                  {child.label}
                                </span>
                                {child.description ? (
                                  <span className="block text-xs text-ink-faint">{child.description}</span>
                                ) : null}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="mt-1 flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2.5 text-sm font-medium text-primary-200 transition-colors hover:bg-primary-500/10"
                          >
                            View all services
                            <Icon name="ArrowRight" className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary-200"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/book-consultation" variant="outline" size="sm">
              Book Call
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary" size="sm">
              Start Project
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-surface-2 text-ink lg:hidden"
            aria-label="Open navigation menu"
          >
            <Icon name="Menu" className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
