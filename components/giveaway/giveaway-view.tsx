"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";
import { GiveawayForm } from "@/components/forms/giveaway-form";
import { siteConfig } from "@/lib/site";

const perks = [
  {
    icon: "Palette",
    title: "100% Custom UI/UX Design",
    body: "No generic templates or cookie-cutter themes. Crafted specifically around your brand identity, colors, and target audience.",
  },
  {
    icon: "Gauge",
    title: "Core Web Vitals & Speed (90+)",
    body: "Engineered with modern web standards for ultra-fast load times, responsive fluid layouts, and zero visual jank.",
  },
  {
    icon: "TrendingUp",
    title: "High-Converting Sales Structure",
    body: "Clear call-to-actions, conversion-optimized section architecture, and frictionless user flows that turn visitors into paying clients.",
  },
  {
    icon: "SearchCheck",
    title: "Technical SEO Foundations",
    body: "Clean semantic markup, meta tags, OpenGraph previews, and structured data ready to rank on Google search.",
  },
  {
    icon: "MessageSquare",
    title: "Lead Capture & WhatsApp",
    body: "Interactive contact forms, consultation booking workflows, and instant WhatsApp chat integration wired directly to your phone.",
  },
  {
    icon: "ShieldCheck",
    title: "100% Asset Ownership",
    body: "You own every line of code, design file, and asset. Zero agency lock-in, zero ongoing license fees from VOX.",
  },
];

const steps = [
  {
    step: "01",
    title: "Submit Your Application",
    body: "Fill out the quick project details below in under 2 minutes so we understand your business and vision.",
  },
  {
    step: "02",
    title: "Selection & Architecture Kickoff",
    body: "We review submissions on a rolling basis. If selected, a senior engineer connects with you on WhatsApp/Email to finalize scope.",
  },
  {
    step: "03",
    title: "Bespoke Delivery & Launch",
    body: "Our team designs, builds, and deploys your bespoke website in 5–7 business days at $0 development cost.",
  },
];

const faqs = [
  {
    q: "Is the website development really 100% free?",
    a: "Yes! VOX Digital Agency covers 100% of the UI/UX design, front-end development, mobile responsiveness, and technical setup. We do not charge any agency labor fees for the giveaway package.",
  },
  {
    q: "Why is VOX Digital Agency doing this giveaway?",
    a: "We are expanding our global portfolio with standout case studies across multiple industries. When you see the quality of our engineering, we hope you will think of us for your future growth (such as custom mobile apps, AI workflows, or enterprise marketing) — but there is zero obligation.",
  },
  {
    q: "What types of businesses can apply?",
    a: "Any business, startup, entrepreneur, medical practice, e-commerce brand, or personal creator worldwide. Whether you have an old website that needs a modern redesign or you're launching from scratch, you can apply.",
  },
  {
    q: "How many free websites are given away?",
    a: "We accept up to 3 select businesses each month to ensure that every single website receives our highest standard of craft and engineering.",
  },
];

const termsData = [
  {
    title: "1. 100% Free Agency Development",
    content:
      "VOX Digital Agency waives 100% of our standard custom UI/UX design and engineering development fees (typically valued at $2,500 – $5,000+). The applicant pays $0 to VOX for the core design and development of the giveaway website.",
  },
  {
    title: "2. Domain & Hosting Independence",
    content:
      "The giveaway covers all design and coding labor. Standard third-party infrastructure fees — such as your domain name registration (typically $10–$15/year) and web hosting / cloud server fees (e.g. Vercel, Hostinger, Cloudways) — are third-party operating expenses paid directly to those providers. Clients are free to use their existing domain and hosting accounts or we can guide them in setting them up so they retain 100% ownership.",
  },
  {
    title: "3. Third-Party Paid Subscriptions & APIs",
    content:
      "Any paid external third-party software licenses, proprietary paid plugins, premium font licenses, or commercial payment gateway fees (e.g., Stripe processing fees or paid Shopify store subscriptions) are the client's direct responsibility.",
  },
  {
    title: "4. Scope of the Free Website",
    content:
      "The giveaway package includes a custom-designed, multi-section responsive website (up to 5 core pages or high-converting long-form landing page), contact/lead capture forms, and mobile optimization. Bespoke enterprise backends, custom mobile app builds, or custom AI agent automations outside the giveaway scope are available as separate optional upgrades.",
  },
  {
    title: "5. Selection & Delivery Process",
    content:
      "Applications are evaluated based on project readiness, business clarity, and monthly studio capacity. Selected applicants will be contacted directly via WhatsApp or Email within 2 business days of applying.",
  },
];

export function GiveawayView() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [expandedTermsAccordion, setExpandedTermsAccordion] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById("giveaway-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Glow backdrop effects */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[54rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-500/15 via-primary-600/10 to-transparent blur-[120px]" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Giveaway Badges */}
            <Reveal>
              <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-accent-300 uppercase shadow-glow-accent/30">
                  <Icon name="Sparkles" className="h-4 w-4" />
                  Official Giveaway • Limited Time Slots
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  3 Free Spots Available This Month
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.06}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
                Win a Bespoke, High-Performance Website for Your Business —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-primary-300">
                  100% Free Development
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.12}>
              <p className="mt-6 text-base sm:text-xl leading-relaxed text-ink-muted">
                VOX Digital Agency is gifting fully custom-coded, ultra-fast, and conversion-optimized websites to ambitious businesses worldwide. Zero agency labor fees, zero templates, and zero hassle.
              </p>
            </Reveal>

            {/* Action buttons */}
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 bg-[length:200%_auto] px-8 py-4 font-display text-base font-semibold text-white shadow-glow-accent transition-all duration-500 hover:bg-[position:right_center] hover:shadow-glow-primary active:scale-[0.99] cursor-pointer"
                >
                  <Icon name="Gift" className="h-5 w-5 text-accent-200" />
                  <span>Apply for the Free Website</span>
                  <Icon name="ArrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/80 px-6 py-4 text-sm font-semibold text-ink-muted transition-colors hover:border-accent-400/30 hover:bg-surface-3 hover:text-ink"
                >
                  <Icon name="WhatsApp" className="h-4 w-4 text-emerald-400" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Metrics Bar */}
            <Reveal delay={0.24}>
              <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                <div className="card-surface flex flex-col items-center justify-center rounded-2xl p-4 text-center">
                  <span className="font-display text-2xl font-bold text-accent-300">$0</span>
                  <span className="mt-1 text-xs text-ink-muted">Dev & Design Cost</span>
                </div>
                <div className="card-surface flex flex-col items-center justify-center rounded-2xl p-4 text-center">
                  <span className="font-display text-2xl font-bold text-primary-200">5–7 Days</span>
                  <span className="mt-1 text-xs text-ink-muted">Turnaround Speed</span>
                </div>
                <div className="card-surface flex flex-col items-center justify-center rounded-2xl p-4 text-center">
                  <span className="font-display text-2xl font-bold text-accent-300">90+</span>
                  <span className="mt-1 text-xs text-ink-muted">Google PageSpeed</span>
                </div>
                <div className="card-surface flex flex-col items-center justify-center rounded-2xl p-4 text-center">
                  <span className="font-display text-2xl font-bold text-primary-200">100%</span>
                  <span className="mt-1 text-xs text-ink-muted">Custom Handcrafted</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What You Receive in the Giveaway */}
      <section className="py-16 md:py-24 border-t border-line/60">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
              Agency-Grade Engineering
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              What's Included in Your Free Website
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-muted">
              We deliver the same enterprise-tier quality that high-growth companies pay thousands for.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.05}>
                <div className="card-surface group h-full rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/30 hover:shadow-glow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/25 bg-accent-500/10 text-accent-300 transition-colors group-hover:bg-accent-500/20">
                    <Icon name={perk.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {perk.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How the Giveaway Works (3 Easy Steps) */}
      <section className="py-16 md:py-24 bg-surface-2/40 border-t border-line/60">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-300">
              Simple & Transparent
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              How the Free Website Giveaway Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((st, i) => (
              <Reveal key={st.step} delay={i * 0.08}>
                <div className="relative flex flex-col rounded-3xl border border-line bg-surface p-7 sm:p-8">
                  <span className="font-display text-4xl font-extrabold text-accent-400/25 mb-4">
                    {st.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink mb-2">
                    {st.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {st.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Giveaway Application Form Section */}
      <section id="giveaway-form-section" className="py-16 md:py-24 scroll-mt-24 border-t border-line/60">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
            {/* Form Column */}
            <Reveal>
              <div className="card-surface rounded-3xl border border-accent-400/25 p-7 sm:p-10 shadow-card">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-3.5 py-1 text-xs font-bold text-accent-300 uppercase tracking-wider mb-3">
                    <Icon name="Sparkles" className="h-3.5 w-3.5" />
                    Free Website Application Form
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                    Apply for Your Free Custom Website
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">
                    Takes less than 2 minutes. We review every entry and select candidates on a rolling basis.
                  </p>
                </div>

                <GiveawayForm onOpenTerms={() => setShowTermsModal(true)} />
              </div>
            </Reveal>

            {/* Sidebar Column: Why we do this & FAQs */}
            <div className="flex flex-col gap-6">
              {/* Why We Are Giving Away Websites */}
              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-500/10 via-surface-2 to-surface p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/20 text-primary-200">
                      <Icon name="Handshake" className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Why does VOX do this?
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    We believe in proving our value first. By building extraordinary websites for ambitious companies, we expand our international portfolio and forge lasting relationships. If you love our work, you might partner with us in the future for ongoing growth — but you are under zero obligation.
                  </p>
                </div>
              </Reveal>

              {/* Quick Eligibility Checklist */}
              <Reveal delay={0.12}>
                <div className="card-surface rounded-3xl p-7">
                  <h3 className="font-display text-lg font-bold text-ink mb-4 flex items-center gap-2">
                    <Icon name="ListChecks" className="h-5 w-5 text-accent-300" />
                    Who is this ideal for?
                  </h3>
                  <ul className="space-y-3 text-sm text-ink-muted">
                    <li className="flex items-start gap-2.5">
                      <Icon name="CheckCircle2" className="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                      <span>Small to medium businesses wanting a modern, credible digital presence.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon name="CheckCircle2" className="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                      <span>Founders launching a new product, startup, or SaaS solution.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon name="CheckCircle2" className="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                      <span>Service professionals (doctors, lawyers, agencies, consultants).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon name="CheckCircle2" className="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                      <span>Brands with an outdated website who need an instant speed and conversion upgrade.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Mini FAQs */}
              <Reveal delay={0.16}>
                <div className="card-surface rounded-3xl p-7">
                  <h3 className="font-display text-lg font-bold text-ink mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((f) => (
                      <div key={f.q} className="border-b border-line pb-3 last:border-0 last:pb-0">
                        <h4 className="text-sm font-semibold text-ink">{f.q}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-ink-muted">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section (Collapsible & discreet as requested) */}
      <section className="py-12 border-t border-line/60">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-line bg-surface-2/40 p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setExpandedTermsAccordion(!expandedTermsAccordion)}
              className="flex w-full items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon name="FileText" className="h-5 w-5 text-accent-400" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    Giveaway Terms, Scope & Transparency
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Click to view details regarding development scope, infrastructure, and asset ownership.
                  </p>
                </div>
              </div>
              <motion.span
                animate={{ rotate: expandedTermsAccordion ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-ink-muted"
              >
                <Icon name="ChevronDown" className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {expandedTermsAccordion && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-line space-y-4 text-xs sm:text-sm text-ink-muted leading-relaxed"
                >
                  {termsData.map((t) => (
                    <div key={t.title} className="rounded-xl bg-surface/70 p-4 border border-line/40">
                      <strong className="text-ink block mb-1 font-semibold">{t.title}</strong>
                      <p>{t.content}</p>
                    </div>
                  ))}
                  <p className="text-ink-faint text-xs pt-2">
                    *VOX Digital Agency reserves the right to select candidates based on capacity and project alignment. This giveaway carries zero hidden agency charges.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Terms Modal (triggered from form link) */}
      <AnimatePresence>
        {showTermsModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Giveaway Terms & Scope"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTermsModal(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line-strong bg-surface-2 p-6 sm:p-8 shadow-card"
            >
              <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <Icon name="FileText" className="h-5 w-5 text-accent-400" />
                  <h3 className="font-display text-xl font-bold text-ink">
                    Free Website Giveaway — Terms & Scope
                  </h3>
                </div>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-muted hover:text-ink cursor-pointer"
                >
                  <Icon name="X" className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                {termsData.map((t) => (
                  <div key={t.title} className="rounded-xl bg-surface p-4 border border-line/60">
                    <h4 className="font-semibold text-ink mb-1.5">{t.title}</h4>
                    <p>{t.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end pt-4 border-t border-line">
                <button
                  type="button"
                  onClick={() => setShowTermsModal(false)}
                  className="rounded-full bg-primary-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-primary-500 cursor-pointer"
                >
                  Close & Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
