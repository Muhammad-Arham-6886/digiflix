const contactTo: string[] = process.env.CONTACT_TO
  ? process.env.CONTACT_TO.split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  : ["info@voxdigitalagency.co", "official.voxdigitalagency@gmail.com"];

export const siteConfig = {
  name: "VOX Digital Agency",
  legalName: "VOX Digital Agency",
  tagline: "Worldwide Full-Service Digital Agency",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://voxdigitalagency.co",
  description:
    "VOX Digital Agency is a global full-service digital agency crafting bespoke websites, high-converting e-commerce, custom web applications, and intelligent AI automation for ambitious brands worldwide.",
  email: "info@voxdigitalagency.co",
  emailFrom: process.env.EMAIL_FROM ?? "VOX Digital Agency <onboarding@resend.dev>",
  contactTo,
  locale: "en_US",
  twitterHandle: "@voxdigitalagency",
  whatsappNumber: "+971551506155",
  whatsappLink:
    "https://wa.me/971551506155?text=Hi%20VOX%20Digital%20Agency%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  socials: {
    linkedin: "https://www.linkedin.com/company/vox-digital-agency/",
    x: "https://x.com/voxdigitalagency",
    instagram: "https://instagram.com/voxdigitalagency",
    whatsapp: "https://wa.me/971551506155",
  },
  address: "Worldwide Remote Studio — Serving Clients Globally",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Website Development", href: "/services/website-development", description: "Marketing sites & corporate platforms" },
      { label: "WordPress Development", href: "/services/wordpress-development", description: "Custom themes & headless builds" },
      { label: "Shopify Development", href: "/services/shopify-development", description: "Custom themes & Hydrogen" },
      { label: "WooCommerce Development", href: "/services/woocommerce-development", description: "Scalable stores at scale" },
      { label: "Figma to WordPress", href: "/services/figma-to-wordpress", description: "Design to pixel-perfect WordPress" },
      { label: "Custom Web Applications", href: "/services/custom-web-applications", description: "SaaS, dashboards & APIs" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  capabilities: [
    { label: "Website Development", href: "/services/website-development" },
    { label: "WordPress Development", href: "/services/wordpress-development" },
    { label: "Shopify Development", href: "/services/shopify-development" },
    { label: "AI Agents & Business Automation", href: "/services/ai-agents-business-automation" },
    { label: "Technical SEO & Performance", href: "/services/seo-optimization" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Google Business Profile", href: "/services/google-business-profile" },
    { label: "View All Capabilities", href: "/services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Free Website Giveaway", href: "/free-website-giveaway" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};
