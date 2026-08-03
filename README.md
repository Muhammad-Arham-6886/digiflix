# VOX Digital Agency — Website

Production-ready marketing website for **VOX Digital Agency** (Enterprise Next.js & AI Engineering), built entirely with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

There is **no separate backend** — every API endpoint (contact, booking, newsletter) runs as a Next.js **Route Handler** inside this single application and deploys to Vercel with zero extra infrastructure.

---

## Stack

| Layer            | Technology                                              |
| ---------------- | ------------------------------------------------------- |
| Framework        | Next.js 15 (App Router), React 19, TypeScript (strict)  |
| Styling          | Tailwind CSS v4 (CSS-variable design tokens)            |
| Animation        | Framer Motion (scroll reveals, counters, marquee, layout) |
| Forms            | React Hook Form + Zod                                   |
| Email            | Resend (called directly from Route Handlers)            |
| Blog             | Local MDX content (`content/blog/*.mdx`) + `next-mdx-remote` |
| Icons            | lucide-react                                            |
| SEO              | Native Next.js Metadata API, JSON-LD, `sitemap.ts`, `robots.ts` |
| Images / Fonts   | `next/image`, `next/font/google` (Space Grotesk + Inter) |

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template and add your keys
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000.

> **Email forms** work without configuration in the sense that the site runs — but submissions return `503 Email provider is not configured` until you add `RESEND_API_KEY` (and optionally `EMAIL_FROM` / `CONTACT_TO`) to `.env.local`.

---

## Environment variables

See `.env.example`. Only one is required to enable form email:

| Variable                 | Required | Description                                             |
| ------------------------ | -------- | ------------------------------------------------------- |
| `RESEND_API_KEY`         | yes*     | Resend API key (https://resend.com)                     |
| `EMAIL_FROM`             | no       | Verified sender, e.g. `VOX <hello@yourdomain.com>`      |
| `CONTACT_TO`             | no       | Inbox that receives contact/booking submissions         |
| `NEXT_PUBLIC_SITE_URL`   | no       | Public site URL for sitemap/canonical/OG (auto-detected on Vercel) |

\* Without it, forms degrade gracefully with a clear error message.

---

## Scripts

```bash
npm run dev          # development server
npm run build        # production build
npm run start        # serve production build
npm run lint         # ESLint (next/core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit (strict)
npm run format       # Prettier write
```

---

## Project structure

```
app/
  layout.tsx / page.tsx   Root layout + home
  about|services|portfolio|industries|pricing|process|blog|testimonials|contact|...
  services/[slug]         Dynamic service pages (generateStaticParams)
  blog/[slug]             MDX blog posts
  api/contact|booking|newsletter   Route Handlers (Zod + Resend)
  sitemap.ts / robots.ts / og/     SEO surface
components/
  layout/  header, footer, mobile-nav, page-transition
  home/    hero, lift-compare, capabilities-grid, stats, blueprints, ...
  forms/   contact, booking, newsletter (RHF + Zod)
  shared/  reveal, counter, marquee, magnetic, progress-bar, ...
  blog/ services/ portfolio/ process/
content/blog/              Local MDX sources (frontmatter + body)
lib/                       Data + config: services, portfolio, pricing, seo, email, blog loader
public/images/             Optimized image assets
```

---

## Adding a blog post

1. Create `content/blog/my-post.mdx`.
2. Add frontmatter: `title`, `description`, `date`, `author`, `category`, `tags`, `cover` (path under `/public`).
3. Restart/rebuild — it is automatically picked up by the sitemap, list page and RSS-style index.

---

## Deploying to Vercel

1. Push this repository to GitHub/GitLab.
2. In Vercel: **Add New Project** → import the repo.
3. Framework preset is auto-detected as **Next.js**. Build command: `npm run build`.
4. Add the environment variables from `.env.example` (especially `RESEND_API_KEY`).
5. Deploy. That's it — no servers, no databases, no extra services.

Production settings are already configured:

- Image optimization (`next/image`) with AVIF/WebP
- `sitemap.xml` + `robots.txt` generated automatically
- Open Graph / Twitter cards + dynamically generated OG image at `/og`
- JSON-LD Organization / Service / Article / Breadcrumb structured data
- `loading.tsx`, `error.tsx`, `not-found.tsx` per segment
- `prefers-reduced-motion` respected everywhere

---

## Design system

Defined as Tailwind v4 tokens in `app/globals.css`:

- **Primary** `#8069BF` (purple) with full tint/shade ramp `primary-50…950`
- **Secondary** `#7C7296` (mauve-grey) ramp
- **Accent** `#C9A74D` (gold) ramp — CTAs, highlights, active states
- **Neutral** `#79767D` (grey) ramp
- **Background** `#0A0A0C`, surfaces `surface/2/3`, ink tones
- **Typography** Space Grotesk (display) + Inter (body) via `next/font/google`
- Glassmorphism, glow shadows, `rounded-2xl/3xl`, grid backgrounds — all as utilities

---

## License & ownership

Code in this repository is provided for the VOX Digital Agency website build. Images live under `public/images/` and retain their original licenses.
