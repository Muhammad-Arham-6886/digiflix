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
  service: z.string().optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)").max(4000),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

const budgetOptions = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"];

export function ContactForm() {
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
      const res = await fetch("/api/contact", {
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
          <Icon name="CheckCircle2" className="h-6 w-6" />
        </span>
        <h3 className="font-display text-xl font-bold text-ink">Message received.</h3>
        <p className="text-sm leading-relaxed text-ink-muted">
          Thanks for reaching out. A senior engineer — not a sales rep — will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">Name *</Label>
          <Input id="contact-name" placeholder="Alex Morgan" autoComplete="name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="contact-email">Email *</Label>
          <Input id="contact-email" type="email" placeholder="you@company.com" autoComplete="email" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-company">Company</Label>
          <Input id="contact-company" placeholder="Company Inc." autoComplete="organization" {...register("company")} />
          <FieldError message={errors.company?.message} />
        </div>
        <div>
          <Label htmlFor="contact-service">What do you need?</Label>
          <Select id="contact-service" {...register("service")}>
            <option value="">Select a capability</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </Select>
          <FieldError message={errors.service?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-budget">Budget range</Label>
        <Select id="contact-budget" {...register("budget")}>
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
        <Label htmlFor="contact-message">Tell us about your project *</Label>
        <TextArea
          id="contact-message"
          placeholder="What are you building, what's the current situation, and what does success look like?"
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="contact-website">Website</Label>
        <Input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-500 px-8 text-sm font-semibold text-white shadow-glow-primary transition-all hover:-translate-y-0.5 hover:bg-primary-400 disabled:translate-y-0 disabled:opacity-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span
                key="spinner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
            ) : (
              <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                Send Message
                <Icon name="Send" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <p className="text-xs text-ink-faint">We reply within 1 business day. No spam, ever.</p>
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
            We couldn't send your message. Please try again in a moment.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
