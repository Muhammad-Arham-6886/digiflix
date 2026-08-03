"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/shared/icon";
import { Input, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  name: z.string().min(1, "Name is required").max(80, "Keep it under 80 characters"),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-accent-400/30 bg-accent-500/10 px-4 py-3 text-sm text-accent-200">
        <Icon name="CheckCircle2" className="h-5 w-5 shrink-0 text-accent-400" />
        You're on the list. Watch your inbox for the first issue.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {!compact && (
        <div className="mb-3">
          <Input
            placeholder="Your name"
            aria-label="Your name"
            autoComplete="name"
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
      )}
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="you@company.com"
          aria-label="Email address"
          autoComplete="email"
          className={cn(compact && "h-11")}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-400 disabled:opacity-50"
          aria-label="Subscribe to newsletter"
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
              <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Icon name="Send" className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <FieldError message={errors.email?.message} />
      {status === "error" && (
        <p className="mt-2 text-xs font-medium text-accent-400">
          Couldn't subscribe right now. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
