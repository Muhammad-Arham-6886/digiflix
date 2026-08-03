export type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  bestFor: string[];
  cta: string;
  href: string;
  featured?: boolean;
  icon: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    tagline: "Startups & small businesses",
    price: "$1,499",
    priceNote: "starting from · one-time project",
    description: "A fast, secure, modern website for businesses getting online properly.",
    features: [
      "Up to 5 pages",
      "Modern responsive design",
      "Basic SEO setup",
      "Contact forms",
      "Speed optimization",
      "SSL & security configuration",
      "Analytics integration",
      "14 days support",
    ],
    bestFor: ["New Businesses", "Personal Brands", "Landing Pages", "Portfolio Websites"],
    cta: "Start Your Project",
    href: "/book-consultation",
    icon: "Rocket",
  },
  {
    name: "Growth",
    tagline: "Businesses ready to scale",
    price: "$3,499",
    priceNote: "starting from · one-time project",
    description: "Everything in Launch, plus a bigger build with custom design, CMS and AI baked in.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration & blog setup",
      "Technical SEO & schema markup",
      "Speed optimization (90+ target)",
      "Basic AI automation & booking forms",
      "30 days support",
    ],
    bestFor: ["Growing Companies", "Ecommerce Brands", "Professional Services"],
    cta: "Book a Consultation",
    href: "/book-consultation",
    featured: true,
    icon: "TrendingUp",
  },
  {
    name: "Enterprise",
    tagline: "Established organizations",
    price: "Custom",
    priceNote: "tailored engagement",
    description: "Tailored digital solutions for established organizations with complex needs.",
    features: [
      "Unlimited pages & dedicated project manager",
      "Custom integrations & API development",
      "Enterprise security & SLA options",
      "AI agents & CRM integration",
      "Advanced analytics",
      "Ongoing maintenance & priority support",
    ],
    bestFor: ["Established Organizations", "Complex Platforms", "High Stakes"],
    cta: "Talk to Us",
    href: "/book-consultation",
    icon: "Shield",
  },
];

export type ServicePrice = {
  name: string;
  price: string;
  href: string;
  icon: string;
};

export const servicePrices: ServicePrice[] = [
  { name: "Website Development", price: "from $1,299", href: "/services/website-development", icon: "Globe" },
  { name: "WordPress Development", price: "from $899", href: "/services/wordpress-development", icon: "FileCode" },
  { name: "Shopify Development", price: "from $1,299", href: "/services/shopify-development", icon: "ShoppingBag" },
  { name: "WooCommerce Development", price: "from $999", href: "/services/woocommerce-development", icon: "ShoppingCart" },
  { name: "Webflow Development", price: "from $999", href: "/services/webflow-development", icon: "Boxes" },
  { name: "Figma to WordPress", price: "from $799", href: "/services/figma-to-wordpress", icon: "PenTool" },
  { name: "Custom Web Applications", price: "from $4,999", href: "/services/custom-web-applications", icon: "LayoutDashboard" },
  { name: "AI Agents & Automation", price: "from $1,499", href: "/services/ai-agents-business-automation", icon: "Bot" },
  { name: "Technical SEO & Performance", price: "from $399", href: "/services/seo-optimization", icon: "Gauge" },
  { name: "UI/UX Design", price: "from $699", href: "/services/ui-ux-design", icon: "Palette" },
  { name: "Logo & Brand Design", price: "from $299", href: "/services/logo-brand-design", icon: "Gem" },
  { name: "Google Business Profile", price: "from $199", href: "/services/google-business-profile", icon: "MapPin" },
];

export type CarePlan = {
  name: string;
  price: string;
  includes?: string;
  features: string[];
  tone: "emerald" | "blue" | "violet";
};

export const carePlans: CarePlan[] = [
  {
    name: "EasyNest Essential",
    price: "$49",
    features: [
      "Weekly backups",
      "Plugin & theme updates",
      "Uptime monitoring",
      "Monthly report",
      "Email support",
    ],
    tone: "emerald",
  },
  {
    name: "EasyNest Growth",
    price: "$129",
    includes: "Everything in Essential, plus",
    features: [
      "Priority support",
      "Malware scans",
      "Performance optimization",
      "Broken link monitoring",
      "Monthly SEO checks",
      "2 hours of content updates",
    ],
    tone: "blue",
  },
  {
    name: "EasyNest Business",
    price: "$299",
    includes: "Everything in Growth, plus",
    features: [
      "Unlimited priority support",
      "Emergency fixes",
      "Advanced security",
      "Technical SEO monitoring",
      "Cloud backups",
      "6 hours of development time",
      "Quarterly strategy meeting",
    ],
    tone: "violet",
  },
];

export const pricingFaq = [
  {
    q: "How are projects scoped and priced?",
    a: "Every project starts with a short discovery call and a fixed-price proposal before any build work begins — no hourly surprises, no open-ended invoices.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. EasyNest care plans are recurring monthly plans that keep your site fast, secure and updated, and larger engagements can run as ongoing retainers.",
  },
  {
    q: "Can you take over a project mid-way?",
    a: "Absolutely. We start with a code and infrastructure audit, then give you an honest read on scope, risk and cost before touching anything.",
  },
];
