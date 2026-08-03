"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services";
import { Input, TextArea, Select, Label, FieldError } from "@/components/ui/field";
import { Icon } from "@/components/shared/icon";

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(100),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Choose a service so we can prepare"),
  budget: z.string().min(1, "Select a budget range"),
  preferredDate: z.string().optional().or(z.literal("")),
  details: z.string().max(4000).optional().or(z.literal("")),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

const budgetOptions = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"];
const startOptions = ["As soon as possible", "Within a month", "1–3 months", "3+ months", "Just researching"];

export function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-accent-400/30 bg-accent-500/10 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/20 text-accent-300">
          <Icon name="Calendar" className="h-6 w-6" />
        </span>
        <h3 className="font-display text-xl font-bold text-ink">Consultation requested.</h3>
        <p className="text-sm leading-relaxed text-ink-muted">
          We've received your booking and will confirm a time within one business day. A senior engineer will be
          on the call with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-name">Name *</Label>
          <Input id="booking-name" placeholder="Alex Morgan" autoComplete="name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="booking-email">Work email *</Label>
          <Input id="booking-email" type="email" placeholder="you@company.com" autoComplete="email" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-company">Company</Label>
          <Input id="booking-company" placeholder="Company Inc." autoComplete="organization" {...register("company")} />
          <FieldError message={errors.company?.message} />
        </div>
        <div>
          <Label htmlFor="booking-service">Service of interest *</Label>
          <Select id="booking-service" {...register("service")}>
            <option value="">Select a capability</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple / not sure">Multiple / not sure</option>
          </Select>
          <FieldError message={errors.service?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-budget">Budget range *</Label>
          <Select id="booking-budget" {...register("budget")}>
            <option value="">Select a range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
          <FieldError message={errors.budget?.message} />
        </div>
        <div>
          <Label htmlFor="booking-date">Preferred timeline</Label>
          <Select id="booking-date" {...register("preferredDate")}>
            <option value="">Select timeline</option>
            {startOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
          <FieldError message={errors.preferredDate?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="booking-details">Anything we should know before the call?</Label>
        <TextArea
          id="booking-details"
          placeholder="Current stack, goals, links to the existing site — anything useful for the engineer on the call."
          {...register("details")}
        />
        <FieldError message={errors.details?.message} />
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="booking-website">Website</Label>
        <Input id="booking-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-500 px-8 text-sm font-semibold text-background shadow-glow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-400 disabled:translate-y-0 disabled:opacity-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span
                key="spinner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background"
              />
            ) : (
              <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                Request Consultation
                <Icon name="Calendar" className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <p className="text-xs text-ink-faint">Free 30 minutes. No obligation, no pressure.</p>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-accent-400/30 bg-accent-500/10 px-4 py-3 text-sm font-medium text-accent-300"
            role="alert"
          >
            We couldn't submit your booking. Please try again in a moment.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
