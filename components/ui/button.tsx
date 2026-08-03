import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverted" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white shadow-glow-primary hover:bg-primary-400 hover:shadow-glow-primary hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface-2 text-ink border border-line-strong hover:border-primary-400/60 hover:text-primary-200 hover:-translate-y-0.5 active:translate-y-0",
  inverted:
    "bg-ink text-background hover:bg-white hover:-translate-y-0.5 active:translate-y-0",
  accent:
    "bg-accent-500 text-background shadow-glow-accent hover:bg-accent-400 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-primary-400/50 text-primary-200 hover:border-primary-400 hover:bg-primary-500/10 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-[3.25rem] px-8 text-base",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  className,
  href,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
