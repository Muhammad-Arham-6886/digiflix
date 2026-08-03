"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/30 bg-accent-500/10 text-accent-400">
        <Icon name="Zap" className="h-8 w-8" />
      </div>
      <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">Something glitched.</h1>
      <p className="max-w-md text-ink-muted">
        An unexpected error interrupted this page. Refresh to try again — or head home and continue exploring.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-primary-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
        >
          <Icon name="RefreshCw" className="h-4 w-4" />
          Try again
        </button>
        <ButtonLink href="/" variant="outline">
          Back to Home
        </ButtonLink>
      </div>
    </div>
  );
}
