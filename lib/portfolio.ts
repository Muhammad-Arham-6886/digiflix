export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  summary: string;
  challenge: string;
  approach: string;
  image: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  featured?: boolean;
};

export const portfolioFilters = [
  "All",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Food & Hospitality",
  "Local Services",
  "Manufacturing",
  "Professional Services",
  "Design Studio",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "juniper-and-pine-boutique",
    title: "Juniper & Pine — Online Store",
    client: "Juniper & Pine",
    industry: "E-commerce",
    services: ["Shopify Development", "UI/UX Design"],
    summary:
      "A cozy fashion boutique turned into a Shopify store that sells out collections even while the shop floor is closed.",
    challenge:
      "Juniper & Pine sold handmade and curated fashion out of a single storefront. Online, the catalog was a photo gallery with a 'call to order' button — and they were losing weekend sales they never knew about.",
    approach:
      "We built a clean custom Shopify theme around their brand, with an editorial product storytelling layout and a simple gift-set builder. Mobile-first, because that's exactly where their customers shopped.",
    image: "/images/stock/18705.jpg",
    metrics: [
      { value: "+38%", label: "Online sales, first quarter" },
      { value: "1.9s", label: "Largest Contentful Paint" },
      { value: "94", label: "Lighthouse mobile" },
    ],
    tags: ["Shopify", "Custom Theme", "Mobile-first", "Framer Motion"],
    featured: true,
  },
  {
    slug: "bright-smile-dental",
    title: "Bright Smile Dental — Booking Website",
    client: "Bright Smile Dental",
    industry: "Healthcare",
    services: ["Website Development", "Google Business Profile"],
    summary:
      "A friendly booking website and an optimized Google Business Profile that turned local searchers into scheduled appointments.",
    challenge:
      "Bright Smile's phone rang all day, but the website couldn't book an appointment and the Google listing was a blank card with an outdated address and no photos.",
    approach:
      "We rebuilt their site with an embedded online scheduler, then cleaned up their Google Business Profile — accurate hours, service categories, fresh photos and a simple review flow. Local search now does the heavy lifting.",
    image: "/images/stock/77678.jpg",
    metrics: [
      { value: "2.4x", label: "Online bookings" },
      { value: "3.1x", label: "Local search visits" },
      { value: "4.9★", label: "Google rating" },
    ],
    tags: ["Next.js", "Online Booking", "Local SEO", "Google Business Profile"],
    featured: true,
  },
  {
    slug: "cornerstone-realty-group",
    title: "Cornerstone Realty — Listings Website",
    client: "Cornerstone Realty Group",
    industry: "Real Estate",
    services: ["WordPress Development", "Technical SEO & Performance"],
    summary:
      "A fast WordPress listings site with neighborhood pages that made a small agency the first result for local searches.",
    challenge:
      "Cornerstone's listings lived in a slow template theme. The site took seven seconds to load, had no neighborhood content, and they kept losing every search to the big portals.",
    approach:
      "We built a custom WordPress theme around a clean listings system, added neighborhood guides their agents could edit, and fixed the technical SEO foundations — schema, sitemaps and a performance budget. No more template tax.",
    image: "/images/stock/165597.jpg",
    metrics: [
      { value: "+210%", label: "Organic leads" },
      { value: "340", label: "Listings indexed" },
      { value: "1.8x", label: "Inquiry conversion" },
    ],
    tags: ["WordPress", "Custom Theme", "Technical SEO", "Schema.org"],
  },
  {
    slug: "green-bean-coffee-co",
    title: "Green Bean Coffee — Ordering & Loyalty",
    client: "Green Bean Coffee Co.",
    industry: "Food & Hospitality",
    services: ["Website Development", "WooCommerce Development"],
    summary:
      "Online ordering and a points-based loyalty program for a two-location café chain, built on WooCommerce.",
    challenge:
      "Morning rushes meant queues out the door, and regulars had little reason to come back before noon. Green Bean needed order-ahead and a loyalty loop that kept people returning.",
    approach:
      "We built their menu and order-ahead flow on WooCommerce with a lightweight loyalty system, so regulars earn points on every order and skip the line. The baristas keep editing the menu themselves.",
    image: "/images/stock/1260.jpg",
    metrics: [
      { value: "+45%", label: "Online orders" },
      { value: "92/mo", label: "New loyalty members" },
      { value: "0.9s", label: "Menu load time" },
    ],
    tags: ["WooCommerce", "Online Ordering", "Loyalty", "WordPress"],
  },
  {
    slug: "cedar-and-stone-interiors",
    title: "Cedar & Stone — Portfolio Website",
    client: "Cedar & Stone Interiors",
    industry: "Design Studio",
    services: ["Webflow Website Development", "UI/UX Design"],
    summary:
      "A Webflow portfolio that lets a two-person design studio showcase projects and book consultations — no code required to update.",
    challenge:
      "Cedar & Stone's work was beautiful, but their website was a static brochure they couldn't update, and every inquiry arrived by guessing the email address.",
    approach:
      "We designed a gallery-driven Webflow site with CMS collections for projects, smooth scroll interactions and an embedded booking link. The studio now updates their own portfolio in minutes.",
    image: "/images/stock/8522.jpg",
    metrics: [
      { value: "3x", label: "Design inquiries" },
      { value: "2 wks", label: "To launch" },
      { value: "94", label: "Lighthouse" },
    ],
    tags: ["Webflow", "CMS", "Interaction Design", "Figma"],
    featured: true,
  },
  {
    slug: "atlas-home-cleaning",
    title: "Atlas Home Cleaning — AI Lead Agent",
    client: "Atlas Home Cleaning",
    industry: "Local Services",
    services: ["Custom Web Applications", "AI Agents & Business Automation"],
    summary:
      "A booking website with an AI assistant that qualifies leads and schedules jobs while the owner is out on a clean.",
    challenge:
      "Atlas' owner was quoting jobs between cleanings and missing calls. Every lead needed a back-and-forth about size, frequency and price before anything got booked.",
    approach:
      "We built a simple booking site with an AI lead agent that answers common questions, quotes by square footage and books appointments straight into their calendar. The owner only gets notified when a job is confirmed.",
    image: "/images/stock/126204.jpg",
    metrics: [
      { value: "68%", label: "Leads auto-qualified" },
      { value: "+30%", label: "Booked jobs" },
      { value: "4.8★", label: "Customer rating" },
    ],
    tags: ["AI Agents", "Custom App", "Automation", "Integrations"],
  },
  {
    slug: "summit-custom-welding",
    title: "Summit Custom Welding — B2B Store",
    client: "Summit Custom Welding",
    industry: "Manufacturing",
    services: ["WooCommerce Development", "Website Development"],
    summary:
      "A B2B product catalog and quote-to-order flow for a family-run metal fabrication shop.",
    challenge:
      "Summit took orders by phone and email, quoting from a 20-page PDF catalog. Customers wanted to browse specs and order after hours.",
    approach:
      "We stood up a WooCommerce catalog with tiered pricing for trade customers, fast product search and a quote-request flow that drops straight into their inbox.",
    image: "/images/stock/42950.jpg",
    metrics: [
      { value: "+52%", label: "Online B2B orders" },
      { value: "120+", label: "Products live" },
      { value: "40%", label: "Faster quoting" },
    ],
    tags: ["WooCommerce", "B2B Pricing", "Product Catalog", "WordPress"],
  },
  {
    slug: "harbor-main-accounting",
    title: "Harbor & Main — Client Portal",
    client: "Harbor & Main Accounting",
    industry: "Professional Services",
    services: ["Custom Web Applications", "Google Business Profile"],
    summary:
      "A secure client portal for document sharing and tax checklists that cut admin time for a small accounting firm.",
    challenge:
      "Harbor & Main emailed tax documents back and forth and chased clients for the same forms every season. The partners were doing clerk work.",
    approach:
      "We built a small client portal — secure uploads, per-client folders and a seasonal checklist — and refreshed their Google Business Profile so new clients find them first.",
    image: "/images/stock/2817.jpg",
    metrics: [
      { value: "55%", label: "Less admin time" },
      { value: "1.9x", label: "Client retention" },
      { value: "4.9★", label: "Google rating" },
    ],
    tags: ["Next.js", "Client Portal", "Security", "Google Business Profile"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const platformLogos = [
  "WordPress",
  "Webflow",
  "React.js",
  "Shopify",
  "WooCommerce",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
];
