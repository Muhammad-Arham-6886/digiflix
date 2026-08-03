import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "primary" | "accent" | "outline";
}) {
  const tones = {
    default: "bg-surface-3 border-line-strong text-ink-muted",
    primary: "bg-primary-500/10 border-primary-400/30 text-primary-200",
    accent: "bg-accent-500/10 border-accent-400/30 text-accent-300",
    outline: "bg-transparent border-line-strong text-ink-muted",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-tight",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
