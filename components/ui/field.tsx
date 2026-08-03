import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-line-strong bg-surface-2/70 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-all duration-200 focus:border-primary-400/70 focus:bg-surface-2 focus:shadow-glow-soft focus:outline-none";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(fieldBase, className)} {...props} />
);
Input.displayName = "Input";

export const TextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldBase, "min-h-[140px] resize-y", className)} {...props} />
  )
);
TextArea.displayName = "TextArea";

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(fieldBase, "appearance-none bg-surface-2/70 pr-10", className)} {...props}>
      {children}
    </select>
  )
);
Select.displayName = "Select";

export function Label({ className, children, htmlFor }: { className?: string; children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className={cn("mb-2 block text-sm font-medium text-ink-muted", className)}>
      {children}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-accent-400">{message}</p>;
}
