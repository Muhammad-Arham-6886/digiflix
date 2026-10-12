export type Industry = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  bullets: string[];
  image: string;
  serviceHref: string;
  serviceName: string;
};

export const industries: Industry[] = [
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    icon: "ShoppingBag",
    description:
      "Storefronts for brands scaling past template limitations — engineered to convert on every device.",
    bullets: ["Custom storefronts", "CRO & checkout optimization", "Replatforming & migration"],
    image: "/images/stock/2177.jpg",
    serviceHref: "/services/shopify-development",
    serviceName: "Shopify Development",
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: "Cloud",
    description:
      "Product platforms, dashboards and API businesses that need speed, security and architecture that scales with revenue.",
    bullets: ["Multi-tenant SaaS", "Admin & analytics dashboards", "Billing & integrations"],
    image: "/images/stock/77678.jpg",
    serviceHref: "/services/custom-web-applications",
    serviceName: "Custom Web Applications",
  },
  {
    slug: "fintech",
    name: "Fintech & Finance",
    icon: "Landmark",
    description:
      "Investor portals and financial platforms where audit trails, RBAC and uptime are non-negotiable requirements.",
    bullets: ["Investor & LP portals", "Compliance-ready RBAC", "Real-time reporting"],
    image: "/images/stock/2817.jpg",
    serviceHref: "/services/custom-web-applications",
    serviceName: "Web Applications & Portals",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    description:
      "Patient platforms, booking flows and AI triage that improve access while respecting strict privacy obligations.",
    bullets: ["Patient portals & booking", "AI intake & triage agents", "HIPAA-aligned architecture"],
    image: "/images/stock/77678.jpg",
    serviceHref: "/services/ai-agents-business-automation",
    serviceName: "AI Automation & Booking",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    description:
      "Property portals and campaign engines with instant search and programmatic SEO that put listings in front of buyers.",
    bullets: ["Property portals", "Programmatic SEO", "Instant search & filtering"],
    image: "/images/stock/165597.jpg",
    serviceHref: "/services/website-development",
    serviceName: "Website Development",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: "Factory",
    description:
      "Operations dashboards and IoT data pipelines that turn sensor noise into visibility and fewer minutes of downtime.",
    bullets: ["Real-time ops dashboards", "IoT & sensor pipelines", "Anomaly alerting"],
    image: "/images/stock/2180.jpg",
    serviceHref: "/services/woocommerce-development",
    serviceName: "B2B E-commerce & Portals",
  },
  {
    slug: "media-publishing",
    name: "Media & Publishing",
    icon: "Newspaper",
    description:
      "Publisher platforms with edge rendering, ad systems and Core Web Vitals budgets that keep readers — and revenue — engaged.",
    bullets: ["Edge-rendered publishing", "Ad system architecture", "Performance budgets"],
    image: "/images/stock/94833.jpg",
    serviceHref: "/services/seo-optimization",
    serviceName: "Technical SEO & Speed",
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: "Truck",
    description:
      "Tracking, claims and customer-experience automation that keep shipments — and questions — moving without friction.",
    bullets: ["Tracking & visibility platforms", "CX automation agents", "Systems integration"],
    image: "/images/stock/126204.jpg",
    serviceHref: "/services/ai-agents-business-automation",
    serviceName: "AI Agents & Automation",
  },
];

export const industriesIntro = {
  title: "Industries We Serve",
  subtitle:
    "The platform problems are different in every sector. We bring the same engineering rigor to each one — speed, security and automation, tuned to your industry's reality.",
};
