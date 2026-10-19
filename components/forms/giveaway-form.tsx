"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input, TextArea, Select, Label, FieldError } from "@/components/ui/field";
import { Icon } from "@/components/shared/icon";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(100),
  email: z.string().min(1, "Email is required").email("Enter a valid business email address"),
  phone: z.string().min(6, "Enter your phone or WhatsApp number (with country code)").max(30),
  businessName: z.string().min(2, "Please enter your business or project name").max(120),
  websiteType: z.string().min(1, "Please choose a website category"),
  hasExistingWebsite: z.string().default("No"),
  existingUrl: z.string().max(200).optional().or(z.literal("")),
  projectGoals: z
    .string()
    .min(10, "Tell us briefly what your business does and what you need on the site (at least 10 characters)")
    .max(4000),
  timeline: z.string().default("Immediately"),
  acceptedTerms: z.boolean().refine((v) => v === true, {
    message: "Please acknowledge the giveaway scope to proceed",
  }),
  website: z.string().optional(), // Honeypot
});

type FormValues = z.infer<typeof schema>;
type Status = "idle" | "submitting" | "success" | "error";

const websiteTypes = [
  "Corporate / Business Website",
  "E-Commerce Store / Shop",
  "Startup / SaaS Landing Page",
  "Personal Brand / Portfolio",
  "Healthcare / Clinical Practice",
  "Real Estate / Property Agency",
  "Restaurant / Hospitality",
  "Other / Custom Project",
];

const timelineOptions = [
  "Immediately (Ready right now)",
  "Within 1 – 2 Weeks",
  "Within this Month",
  "Just exploring for later",
];

export function GiveawayForm({ onOpenTerms }: { onOpenTerms?: () => void }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      hasExistingWebsite: "No",
      timeline: "Immediately (Ready right now)",
      acceptedTerms: true,
      website: "",
    },
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hasExisting = watch("hasExistingWebsite");

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/giveaway", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to submit application");
      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again or WhatsApp us."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col items-start gap-6 rounded-3xl border border-accent-400/40 bg-gradient-to-b from-accent-500/15 via-surface-2 to-surface p-8 md:p-10 shadow-card"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-400/30 bg-accent-500/20 text-accent-300 shadow-glow-accent">
            <Icon name="CheckCircle2" className="h-7 w-7" />
          </span>
          <div>
            <span className="inline-block rounded-full bg-accent-400/15 px-3 py-0.5 text-xs font-semibold tracking-wider text-accent-300 uppercase">
              Application Confirmed
            </span>
            <h3 className="font-display text-2xl font-bold text-ink mt-1">You're in the running!</h3>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ink-muted">
          Thank you for applying to the <span className="text-ink font-semibold">VOX Free Website Giveaway</span>. Our lead engineering team will review your business details within 24 business hours.
        </p>

        <div className="w-full rounded-2xl border border-line bg-surface-3/60 p-5">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-3">
            What happens next:
          </h4>
          <ol className="space-y-2.5 text-sm text-ink-muted">
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-xs font-bold text-primary-300">
                1
              </span>
              <span>We check project suitability and technical scope.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-xs font-bold text-primary-300">
                2
              </span>
              <span>We reach out to you via WhatsApp or Email to confirm your kickoff date.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-xs font-bold text-primary-300">
                3
              </span>
              <span>Our team builds your bespoke, production-ready website at $0 dev fee.</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25 hover:shadow-glow-soft"
          >
            <Icon name="WhatsApp" className="h-4 w-4" />
            Fast-track on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs text-ink-faint underline hover:text-ink transition-colors"
          >
            Submit another application
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      {/* Row 1: Applicant info */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="ga-fullName">Full Name *</Label>
          <Input
            id="ga-fullName"
            placeholder="e.g. Alex Morgan"
            autoComplete="name"
            {...register("fullName")}
          />
          <FieldError message={errors.fullName?.message} />
        </div>

        <div>
          <Label htmlFor="ga-email">Email Address *</Label>
          <Input
            id="ga-email"
            type="email"
            placeholder="alex@company.com"
            autoComplete="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      {/* Row 2: Phone & Business Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="ga-phone">WhatsApp / Phone Number *</Label>
          <Input
            id="ga-phone"
            type="tel"
            placeholder="+1 555 123 4567"
            autoComplete="tel"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="ga-businessName">Business / Brand Name *</Label>
          <Input
            id="ga-businessName"
            placeholder="e.g. Lumina Health or Apex Studio"
            {...register("businessName")}
          />
          <FieldError message={errors.businessName?.message} />
        </div>
      </div>

      {/* Row 3: Website Category & Timeline */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="ga-websiteType">Website Category *</Label>
          <Select id="ga-websiteType" {...register("websiteType")}>
            <option value="">Select your category</option>
            {websiteTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <FieldError message={errors.websiteType?.message} />
        </div>

        <div>
          <Label htmlFor="ga-timeline">When do you want to launch?</Label>
          <Select id="ga-timeline" {...register("timeline")}>
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <FieldError message={errors.timeline?.message} />
        </div>
      </div>

      {/* Row 4: Existing Website Toggle */}
      <div className="rounded-2xl border border-line bg-surface-2/60 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm font-medium text-ink">Do you currently have a website?</span>
            <p className="text-xs text-ink-muted">We do both fresh brand-new sites and complete redesigns.</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-ink-muted hover:text-ink">
              <input
                type="radio"
                value="No"
                className="accent-primary-500"
                {...register("hasExistingWebsite")}
              />
              Brand New
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-ink-muted hover:text-ink">
              <input
                type="radio"
                value="Yes"
                className="accent-primary-500"
                {...register("hasExistingWebsite")}
              />
              Redesign
            </label>
          </div>
        </div>

        {hasExisting === "Yes" && (
          <div className="mt-4 pt-3 border-t border-line">
            <Label htmlFor="ga-existingUrl">Current Website URL</Label>
            <Input
              id="ga-existingUrl"
              placeholder="https://example.com"
              {...register("existingUrl")}
            />
            <FieldError message={errors.existingUrl?.message} />
          </div>
        )}
      </div>

      {/* Row 5: Project Vision / Goals */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <Label htmlFor="ga-projectGoals" className="mb-0">
            Tell us about your business & what you need *
          </Label>
          <span className="text-xs text-ink-faint">Min. 10 chars</span>
        </div>
        <TextArea
          id="ga-projectGoals"
          rows={4}
          placeholder="Describe what your business offers, who your customers are, and what key pages or features you would love to have on your free website..."
          {...register("projectGoals")}
        />
        <FieldError message={errors.projectGoals?.message} />
      </div>

      {/* Terms acknowledgement checkbox & discreet link */}
      <div className="flex flex-col gap-2 rounded-2xl border border-line/60 bg-surface/50 p-4">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-line bg-surface-2 accent-accent-500 cursor-pointer"
            {...register("acceptedTerms")}
          />
          <span className="text-xs leading-relaxed text-ink-muted">
            I understand that VOX Digital Agency provides <span className="text-accent-300 font-semibold">100% free bespoke design and development</span> under this giveaway. Domain registration and high-speed web hosting are standard external infrastructure expenses.
          </span>
        </label>
        <FieldError message={errors.acceptedTerms?.message} />

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onOpenTerms}
            className="text-xs text-accent-400 hover:text-accent-300 underline inline-flex items-center gap-1 transition-colors"
          >
            <Icon name="FileText" className="h-3 w-3" />
            Read Giveaway Scope & Terms
          </button>
        </div>
      </div>

      {/* Error state alert */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-300"
          >
            <Icon name="X" className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 bg-[length:200%_auto] px-8 py-4 font-display text-base font-semibold text-white shadow-glow-accent transition-all duration-500 hover:bg-[position:right_center] hover:shadow-glow-primary active:scale-[0.99] disabled:opacity-60 cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Icon name="RefreshCw" className="h-5 w-5 animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              <Icon name="Sparkles" className="h-5 w-5 text-accent-200 transition-transform group-hover:rotate-12" />
              <span>Claim My Free Website Now</span>
              <Icon name="ArrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="mt-3 text-center text-xs text-ink-faint">
          No credit card required • 100% Free Development • Zero obligations
        </p>
      </div>
    </form>
  );
}
