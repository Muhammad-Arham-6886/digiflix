export type ServiceCategory =
  | "Web Development"
  | "E-commerce"
  | "AI & Automation"
  | "SEO & Performance"
  | "Design & Branding";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  image?: string;
  tags: string[];
  features: string[];
  deliverables: string[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceCategories: ("All" | ServiceCategory)[] = [
  "All",
  "Web Development",
  "E-commerce",
  "AI & Automation",
  "SEO & Performance",
  "Design & Branding",
];

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    short:
      "Marketing sites, corporate platforms and content experiences engineered with Next.js, React and TypeScript for 95+ Lighthouse scores.",
    description:
      "We build high-performance marketing websites, corporate platforms and content experiences on a modern React stack — server-side rendering, edge caching, streaming and image pipelines come as standard. Every page loads fast, ranks well and feels effortless, and a 95+ Lighthouse score is written into the contract.",
    category: "Web Development",
    icon: "Globe",
    image: "/images/programmer-close-up.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Server-rendered builds with streaming",
      "95+ Lighthouse performance on every template",
      "Motion-driven UI with Framer Motion physics",
      "Headless CMS integration (Sanity, Contentful, Strapi)",
      "Internationalization and multi-region rollouts",
      "Accessible, semantic, SEO-ready markup",
    ],
    deliverables: ["Source code with CI/CD", "Technical documentation", "Analytics + monitoring setup", "30-day post-launch care"],
    faq: [
      {
        q: "Why Next.js for a marketing website?",
        a: "Next.js gives you static speed with dynamic superpowers — server rendering, edge caching and easy SEO control — all in one framework we already run in production at scale.",
      },
      {
        q: "How long does a typical build take?",
        a: "Most marketing sites launch in 4–6 weeks. Larger platforms and content migrations typically land in 8–12 weeks depending on scope and integrations.",
      },
    ],
    metaTitle: "Website Development | VOX Digital Agency",
    metaDescription:
      "High-performance websites built with Next.js, React and TypeScript. 95+ Lighthouse scores, motion UI and technical SEO baked in.",
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    short:
      "Enterprise WordPress with custom themes, headless front-ends and hardened plugins — without the legacy performance tax.",
    description:
      "WordPress doesn't have to be slow. We modernize WordPress estates with custom block themes, headless front-ends and a hardened plugin architecture — keeping the editing experience your team loves and the performance your visitors deserve.",
    category: "Web Development",
    icon: "FileCode",
    image: "/images/stock/115440.jpg",
    tags: ["WordPress", "Headless", "PHP", "WPGraphQL", "React"],
    features: [
      "Custom Gutenberg blocks and block themes",
      "Headless WordPress + Next.js front-ends",
      "WPGraphQL and REST API architecture",
      "Plugin audits, hardening and security fixes",
      "Content migrations and SEO preservation",
      "Multilingual and editorial workflows",
    ],
    deliverables: ["Custom theme or headless front-end", "Content migration plan", "Security hardening report", "Editor training sessions"],
    faq: [
      {
        q: "Headless or traditional WordPress?",
        a: "If your team needs visual editing and your marketing site is content-heavy, we recommend headless. If you rely on a dense plugin ecosystem, a well-architected classic build can still hit excellent scores.",
      },
    ],
    metaTitle: "WordPress Development | VOX Digital Agency",
    metaDescription:
      "Enterprise WordPress builds — custom themes, headless front-ends, hardened security and performance at scale.",
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    short:
      "Shopify Plus stores with custom themes, Hydrogen storefronts and conversion-first UX.",
    description:
      "We design and build Shopify stores that feel like bespoke product — custom themes, Hydrogen/Remix storefronts, checkout extensions and custom front-ends that push conversion rate and Core Web Vitals in the same sprint.",
    category: "E-commerce",
    icon: "ShoppingBag",
    image: "/images/stock/18705.jpg",
    tags: ["Shopify", "Hydrogen", "Remix", "Liquid", "Storefront API"],
    features: [
      "Custom Shopify themes and app integrations",
      "Hydrogen + Storefront API builds",
      "Conversion-focused UX and CRO testing",
      "Checkout, subscriptions and B2B extensions",
      "Shopify Plus migration and replatforming",
      "Core Web Vitals tuned for Google Shopping",
    ],
    deliverables: ["Production storefront", "Theme/app documentation", "CRO testing setup", "Post-launch monitoring"],
    faq: [
      {
        q: "Hydrogen or Liquid themes?",
        a: "Hydrogen suits fast-scaling brands that want a fully custom front-end. Liquid themes win when you need Shopify's native admin and app ecosystem untouched. We'll recommend based on your roadmap.",
      },
    ],
    metaTitle: "Shopify Development | VOX Digital Agency",
    metaDescription:
      "Shopify Plus builds with custom themes and Hydrogen storefronts — engineered to convert and rank.",
  },
  {
    slug: "woocommerce-development",
    name: "WooCommerce Development",
    short:
      "Scalable WooCommerce stores with headless storefronts, custom checkout flows and lean database architecture.",
    description:
      "WooCommerce done right. We architect stores that stay fast past 10,000 products — optimized queries, headless storefronts, custom payment flows and operations tooling that keeps your team in control.",
    category: "E-commerce",
    icon: "ShoppingCart",
    image: "/images/stock/17717.jpg",
    tags: ["WooCommerce", "WordPress", "Headless", "PHP", "WPGraphQL"],
    features: [
      "Headless WooCommerce with Next.js storefronts",
      "Custom checkout and payment integrations",
      "Query and database optimization at scale",
      "Product data architecture and imports",
      "Multi-vendor and marketplace setups",
      "Performance and security hardening",
    ],
    deliverables: ["Production storefront", "Data architecture docs", "Migration runbook", "Monitoring + care plan"],
    faq: [
      {
        q: "Will my store stay fast with thousands of products?",
        a: "Yes — if queries are indexed, images are pipelined and the storefront is headless, catalogue size stops dictating page speed. That's the architecture we ship by default.",
      },
    ],
    metaTitle: "WooCommerce Development | VOX Digital Agency",
    metaDescription:
      "Scalable WooCommerce stores with headless storefronts, custom checkout and database architecture built for growth.",
  },
  {
    slug: "figma-to-wordpress",
    name: "Figma to WordPress",
    short:
      "Pixel-perfect WordPress builds straight from your Figma designs — no guesswork, no translation drift.",
    description:
      "We turn your Figma files into a fast, maintainable WordPress site with hand-built block themes and a reusable component library. Every color, spacing token and interaction lands exactly as designed — and stays editable for your editors.",
    category: "Web Development",
    icon: "PenTool",
    image: "/images/stock/138498.jpg",
    tags: ["Figma", "WordPress", "Block Themes", "Custom Blocks", "CSS"],
    features: [
      "Design-to-code conversion with pixel accuracy",
      "Custom block themes and reusable blocks",
      "Responsive, accessible, semantic output",
      "Editor-friendly fields your team can update safely",
      "Performance and Core Web Vitals tuned",
      "Figma collaboration from kickoff to launch",
    ],
    deliverables: ["Development-ready WordPress build", "Component/block library", "Style guide handoff", "30-day post-launch care"],
    faq: [
      {
        q: "Can you build from any Figma design?",
        a: "Yes. We work from your Figma files — pages, components and design tokens. If something in the design would hurt performance or accessibility, we flag it before we build, not after.",
      },
      {
        q: "Will my editors be able to update it?",
        a: "Yes. We architect each page from editable blocks and fields, so non-technical editors can change content without touching code — or breaking the design.",
      },
    ],
    metaTitle: "Figma to WordPress | VOX Digital Agency",
    metaDescription:
      "Pixel-perfect WordPress builds from your Figma designs — custom blocks, fast, accessible and editor-friendly.",
  },
  {
    slug: "webflow-development",
    name: "Webflow Website Development",
    short:
      "Launch-ready Webflow sites with clean structure, CMS collections and production code — responsive, fast and easy to edit.",
    description:
      "We design and build professional Webflow sites with a designer's eye and an engineer's discipline. Clean class architecture, reusable CMS collections, structured SEO and smooth scroll interactions — all inside a CMS your team can actually edit, so you're never locked out of your own website.",
    category: "Web Development",
    icon: "Boxes",
    tags: ["Webflow", "CMS", "Figma", "Responsive Design", "Interactions"],
    features: [
      "Custom Webflow builds from Figma or from scratch",
      "CMS collections and dynamic content architecture",
      "Clean, maintainable class naming and structure",
      "Smooth scroll interactions and animations",
      "On-page SEO, schema and performance tuning",
      "Editor training and handover docs",
    ],
    deliverables: ["Production Webflow site", "CMS architecture + content model", "Editor training sessions", "30-day post-launch care"],
    faq: [
      {
        q: "Webflow or WordPress — which do you recommend?",
        a: "If you want visual editing without plugin sprawl, Webflow is usually the cleaner choice. If you need a dense plugin ecosystem or a fully headless architecture, we'll point you at WordPress or a custom build. We build all three.",
      },
      {
        q: "Can we edit the site ourselves after launch?",
        a: "That's the point. Webflow's visual editor plus our CMS setup means your team can update copy, products and blog content without touching code — we just structure it so nothing breaks.",
      },
    ],
    metaTitle: "Webflow Website Development | VOX Digital Agency",
    metaDescription:
      "Launch-ready Webflow websites — clean structure, CMS collections and production code. Responsive, fast and easy for your team to edit.",
  },
  {
    slug: "custom-web-applications",
    name: "Custom Web Applications",
    short:
      "SaaS platforms, dashboards and data-heavy apps on Next.js, React, Node.js and Express.js — real-time, secure, built to scale.",
    description:
      "From investor dashboards to multi-tenant SaaS, we design and ship web applications that hold up under real usage. Next.js and React on the front end, Node.js and Express.js behind robust REST and GraphQL APIs — with auth, RBAC, real-time data, billing and analytics built in, not bolted on.",
    category: "Web Development",
    icon: "LayoutDashboard",
    image: "/images/stock/2817.jpg",
    tags: ["Next.js", "Node.js", "React", "Express.js", "PostgreSQL"],
    features: [
      "Multi-tenant architecture and RBAC",
      "Real-time data with WebSockets and streaming",
      "Node.js / Express.js REST and GraphQL APIs",
      "PostgreSQL data modeling and migrations",
      "Stripe billing and payment orchestration",
      "Testing, CI/CD and observability from day one",
    ],
    deliverables: ["Production application", "API documentation", "Test + deployment pipeline", "Infrastructure as code"],
    faq: [
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We routinely inherit, audit and modernize existing applications — fixing performance, paying down technical debt and shipping new features without a rewrite.",
      },
    ],
    metaTitle: "Custom Web Applications | VOX Digital Agency",
    metaDescription:
      "Custom SaaS and data-heavy web apps on Next.js, Node.js, React and Express.js — real-time features, RBAC, billing and enterprise-grade architecture.",
  },
  {
    slug: "ai-agents-business-automation",
    name: "AI Agents & Business Automation",
    short:
      "Autonomous AI agents, workflow automation and RAG pipelines that remove hours from your operations.",
    description:
      "We productize AI. Custom agents, retrieval pipelines and automated workstreams that ingest your data, respect your rules and act on your behalf — integrated into the tools your team already uses.",
    category: "AI & Automation",
    icon: "Bot",
    image: "/images/stock/126204.jpg",
    tags: ["AI Agents", "LangChain", "OpenAI", "RAG", "Vector DBs"],
    features: [
      "Autonomous agents for ops, support and sales",
      "RAG pipelines grounded in your documentation",
      "Human-in-the-loop approval workflows",
      "Slack, email, CRM and webhook integrations",
      "Evaluation harnesses and guardrails",
      "Cost monitoring and model routing",
    ],
    deliverables: ["Working agent + guardrails", "Prompt & eval suite", "Integration wiring", "Ongoing model tuning"],
    faq: [
      {
        q: "Where do AI agents add the most value?",
        a: "Support triage, lead qualification, document processing and internal ops. Anywhere your team repeats a judgement-heavy workflow is a candidate — we start with one high-ROI flow and prove it before scaling.",
      },
    ],
    metaTitle: "AI Agents & Business Automation | VOX Digital Agency",
    metaDescription:
      "Autonomous AI agents, RAG pipelines and workflow automation that remove hours from your operations — built to ship.",
  },
  {
    slug: "seo-optimization",
    name: "Technical SEO & Performance",
    short:
      "Core Web Vitals, structured data, crawl architecture and migration-safe SEO — guaranteed by a Lighthouse SLA.",
    description:
      "Technical SEO is an engineering discipline. We fix the foundations — rendering, crawl budget, structured data, internal links and Core Web Vitals — and back every engagement with a Lighthouse score guarantee in writing.",
    category: "SEO & Performance",
    icon: "Gauge",
    image: "/images/stock/94833.jpg",
    tags: ["Technical SEO", "Core Web Vitals", "Schema.org", "Sitemaps", "Analytics"],
    features: [
      "Lighthouse 95+ guarantee in the contract",
      "Schema.org, JSON-LD and rich result strategy",
      "Crawl, index and canonical architecture",
      "Core Web Vitals and image/script budgets",
      "Migration-safe redirect and URL mapping",
      "Search console, analytics and reporting setup",
    ],
    deliverables: ["SEO technical audit", "Migration runbook", "Structured data markup", "Performance budget + monitoring"],
    faq: [
      {
        q: "Do you guarantee rankings?",
        a: "Nobody can honestly guarantee rankings. We guarantee the things that are in our control — a Lighthouse score SLA, clean crawl architecture and structured data — which is what compounding SEO performance is built on.",
      },
    ],
    metaTitle: "Technical SEO & Performance | VOX Digital Agency",
    metaDescription:
      "Technical SEO, Core Web Vitals and structured data with a written Lighthouse guarantee. Rank-worthy engineering.",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    short:
      "Local visibility on autopilot — optimized Google Business Profiles, review strategy, posts and local SEO foundations.",
    description:
      "Your Google Business Profile is the first thing local customers see. We set up, verify and optimize your profile end to end — categories, service areas, photos, posts and review flows — then layer on citations and local landing pages so you rank in the map pack and convert searchers into customers.",
    category: "SEO & Performance",
    icon: "MapPin",
    tags: ["Google Business Profile", "Local SEO", "Reviews", "Google Maps", "Citations"],
    features: [
      "Profile setup, verification and full optimization",
      "Category, service area and attribute strategy",
      "Review generation flows and response management",
      "Posts, photos and regular profile updates",
      "Local citations and NAP consistency",
      "Local landing pages and map-pack SEO",
    ],
    deliverables: ["Optimized Google Business Profile", "Review flow + response playbook", "Citation audit and build-out", "Local SEO reporting"],
    faq: [
      {
        q: "Why should I invest in Google Business Profile?",
        a: "For local businesses it's the highest-intent real estate on the internet — searches for 'near me' convert immediately. A fully optimized profile with active reviews and posts is often the difference between first and last in the map pack.",
      },
      {
        q: "Do you handle the reviews too?",
        a: "Yes. We set up review generation that follows Google's guidelines — nudging happy customers at the right moment and handling responses professionally, which compounds your local ranking.",
      },
    ],
    metaTitle: "Google Business Profile Management | VOX Digital Agency",
    metaDescription:
      "Optimized Google Business Profiles, review strategy and local SEO — rank in the map pack and turn local searches into customers.",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design & Branding",
    short:
      "Motion-driven design systems and product UI that make your platform feel engineered, not decorated.",
    description:
      "Design is part of the engineering brief. We craft user flows, interfaces and design systems that hold up in production — tokens, variants and specs your developers can build from without drift, backed by research and accessibility from day one.",
    category: "Design & Branding",
    icon: "Palette",
    image: "/images/stock/8522.jpg",
    tags: ["Figma", "Design Systems", "Motion Design", "UX Research", "Prototyping"],
    features: [
      "UX research, user flows and wireframes",
      "Design systems with tokenized foundations",
      "Framer Motion micro-interactions and transitions",
      "High-fidelity Figma prototypes and specs",
      "Accessibility and WCAG-aligned UI",
      "Developer handoff with zero ambiguity",
    ],
    deliverables: ["Design system + tokens", "Figma source files", "UX/UI specifications", "Component specs"],
    faq: [
      {
        q: "Do you design and build, or just design?",
        a: "Both, usually on the same engagement. Design stays in the same room as engineering, so what ships matches what was approved — down to the easing curve.",
      },
    ],
    metaTitle: "UI/UX Design & Branding | VOX Digital Agency",
    metaDescription:
      "Motion-driven design systems and product UI engineered for production — researched, designed and built by one team.",
  },
  {
    slug: "logo-brand-design",
    name: "Logo & Brand Design",
    short:
      "Distinctive logos and complete brand identities — marks, color, typography and guidelines built to scale.",
    description:
      "Your brand is the first impression and the last thing customers remember. We design logos and identity systems that look sharp on a favicon and hold up on a billboard — with colors, typography and usage rules documented so every team applies them consistently.",
    category: "Design & Branding",
    icon: "Gem",
    image: "/images/stock/18706.jpg",
    tags: ["Logo Design", "Brand Identity", "Typography", "Brand Guidelines", "Art Direction"],
    features: [
      "Logo concepts, iterations and final marks",
      "Brand identity: color, typography and texture",
      "Brand guidelines and usage rules",
      "Stationery, social and presentation templates",
      "Favicon and app-icon adaptation",
      "Art direction that carries into UI and marketing",
    ],
    deliverables: ["Final logo suite", "Brand guidelines", "Source files (Figma, vector)", "Templates: stationery + social"],
    faq: [
      {
        q: "How many logo concepts do we get?",
        a: "We start with three distinct directions, refine the strongest one together, and deliver a full suite — primary, secondary, monochrome and favicon versions — ready for web, print and packaging.",
      },
      {
        q: "Do you design brands before the website?",
        a: "Often, yes. A defined identity makes the UI phase faster and more consistent. We can run brand design as a standalone engagement or as the first phase of a full website build.",
      },
    ],
    metaTitle: "Logo & Brand Design | VOX Digital Agency",
    metaDescription:
      "Logos and complete brand identities — marks, color, typography and guidelines engineered to scale across web, print and packaging.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getRelatedServices(current: Service, count = 3): Service[] {
  return services
    .filter((s) => s.slug !== current.slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, count);
}

export const serviceCategoryMeta: Record<ServiceCategory, { title: string; blurb: string }> = {
  "Web Development": {
    title: "Web Development",
    blurb: "Marketing sites, WordPress builds, Figma-to-WordPress and custom apps — designed, built and maintained.",
  },
  "E-commerce": {
    title: "E-commerce",
    blurb: "Shopify and WooCommerce stores engineered to convert and scale.",
  },
  "AI & Automation": {
    title: "AI & Automation",
    blurb: "Autonomous agents, RAG pipelines and workflow automation that ship value fast.",
  },
  "SEO & Performance": {
    title: "SEO & Performance",
    blurb: "Technical SEO and Core Web Vitals with a Lighthouse guarantee in writing.",
  },
  "Design & Branding": {
    title: "Design & Branding",
    blurb: "UI/UX design systems, logos and brand identities built for production.",
  },
};
