import Image from "next/image";
import Link from "next/link";
import { siteConfig, footerNav } from "@/lib/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line-strong bg-surface">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-3" aria-label="VOX Digital Agency home">
                <Image
                  src="/images/logo/banner.png"
                  alt="VOX Digital Agency"
                  width={360}
                  height={96}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                {siteConfig.description}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-200 transition-colors hover:text-primary-300"
              >
                <Icon name="Mail" className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <p className="inline-flex items-center gap-2 text-sm text-ink-muted">
                <Icon name="MapPin" className="h-4 w-4 text-primary-300" />
                {siteConfig.address}
              </p>
              <div className="flex items-center gap-3">
                {[
                  { name: "Github", href: siteConfig.socials.github, icon: "Github" },
                  { name: "Linkedin", href: siteConfig.socials.linkedin, icon: "Linkedin" },
                  { name: "Instagram", href: siteConfig.socials.instagram, icon: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`VOX Digital Agency on ${s.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface-2 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-primary-400/50 hover:text-primary-200"
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <nav aria-label="Capabilities">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Capabilities
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {footerNav.capabilities.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink-muted transition-colors hover:text-primary-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-label="Company">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Company
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {footerNav.company.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink-muted transition-colors hover:text-primary-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="col-span-2 sm:col-span-1">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Newsletter
                </h3>
                <p className="mb-4 text-sm text-ink-muted">
                  Engineering notes, no noise. Once a month.
                </p>
                <NewsletterForm compact />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Legal">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-ink-faint transition-colors hover:text-primary-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
