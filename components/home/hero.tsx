"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { Icon } from "@/components/shared/icon";
import { ProgressBar } from "@/components/shared/progress-bar";
import { HeroBackground } from "@/components/home/hero-background";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28" aria-label="Hero">
      <div className="absolute inset-0" aria-hidden="true">
        <HeroBackground />
        <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary-600/25 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[-12rem] left-[-8%] h-[28rem] w-[28rem] rounded-full bg-accent-600/15 blur-[110px] animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_0%,transparent_70%,rgba(10,10,12,0.6)_100%)]" />
        <div className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <motion.div
          variants={prefersReduced ? undefined : container}
          initial={prefersReduced ? false : "hidden"}
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Global Full-Service Digital Agency
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl xl:text-7xl"
          >
            We Design &amp; Build <span className="text-gradient">Extraordinary</span> Digital Brands.
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            VOX is a premier full-service digital agency partnering with ambitious brands worldwide. From bespoke brand identity and high-converting e-commerce to custom digital platforms and intelligent AI automation — we combine world-class design with cutting-edge technology to scale your business globally.
          </motion.p>

          <motion.div variants={item} className="mt-2 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ButtonLink href="/contact" variant="primary" size="lg">
                Start Your Project
                <Icon name="ArrowUpRight" className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/services" variant="outline" size="lg">
              Explore Our Services
            </ButtonLink>
          </motion.div>

          <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-faint">
            <span className="flex items-center gap-1.5">
              <Icon name="Sparkles" className="h-4 w-4 text-accent-400" /> Award-winning design standards
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Globe" className="h-4 w-4 text-primary-300" /> Global client delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Zap" className="h-4 w-4 text-primary-300" /> High-converting platforms
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary-500/15 blur-3xl" aria-hidden="true" />

          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">Agency Impact</p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">Digital Flagship Growth</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-emerald-300">Live</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-3">
              {[
                { label: "LCP Speed", value: "0.42s", tone: "text-primary-200" },
                { label: "Lighthouse", value: "98/100", tone: "text-accent-300" },
                { label: "Conversion", value: "+184%", tone: "text-emerald-300" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-surface-2/60 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-ink-faint">{s.label}</p>
                  <p className={`mt-0.5 font-display text-xl font-bold ${s.tone}`}>{s.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-line bg-surface-2/60 p-5">
              <ProgressBar label="Brand & UI/UX excellence" value={98} display="98 / 100" tone="primary" />
              <ProgressBar label="Search & market visibility" value={92} display="+184%" tone="accent" />
              <ProgressBar label="E-commerce conversion lift" value={88} display="+184%" tone="secondary" />
              <ProgressBar label="Intelligent automation" value={76} display="76%" tone="primary" />
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-ink-faint">
              <span className="flex items-center gap-1.5">
                <Icon name="Route" className="h-3.5 w-3.5 text-primary-300" /> Strategy · Design · Technology
              </span>
              <span className="rounded-full border border-line px-2.5 py-0.5">Global Reach</span>
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden animate-float lg:block" aria-hidden="true">
            <div className="flex items-center gap-2 rounded-2xl border border-line-strong bg-surface-2/90 px-4 py-3 shadow-card backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/15 text-primary-300">
                <Icon name="Palette" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">Bespoke Design</p>
                <p className="text-[10px] text-ink-faint">motion-driven UI/UX</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-8 hidden animate-float-delayed lg:block" aria-hidden="true">
            <div className="flex items-center gap-2 rounded-2xl border border-line-strong bg-surface-2/90 px-4 py-3 shadow-card backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-300">
                <Icon name="TrendingUp" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">Rapid Growth</p>
                <p className="text-[10px] text-ink-faint">measurable client ROI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
