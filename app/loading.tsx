import { Icon } from "@/components/shared/icon";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4" role="status" aria-label="Loading">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-primary-400/20 border-t-primary-400" />
        <Icon name="Sparkles" className="absolute inset-0 m-auto h-5 w-5 text-primary-300" />
      </div>
      <div className="flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-bounce rounded-full bg-accent-400"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-sm text-ink-faint">Loading the studio…</p>
    </div>
  );
}
