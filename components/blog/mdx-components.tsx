import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 font-display text-xl font-semibold tracking-tight text-ink" {...props} />
  ),
  p: (props) => <p className="my-5 leading-relaxed text-ink-muted" {...props} />,
  a: (props) => (
    <a className="font-medium text-primary-300 underline-offset-4 hover:underline" {...props} />
  ),
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6 text-ink-muted" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6 text-ink-muted" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent-400 bg-accent-500/5 py-3 pl-6 pr-4 italic text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-2xl border border-line-strong bg-surface p-5 text-sm text-ink"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 text-[0.85em] text-primary-200 [.pre_&]:border-0 [.pre_&]:bg-transparent [.pre_&]:p-0 [.pre_&]:text-inherit"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-line-strong" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  Link: (props) => <Link {...props} />,
};
