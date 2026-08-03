export type FaqCategory = {
  id: string;
  label: string;
};

export type FaqItem = {
  category: string;
  q: string;
  a: string;
};

export const faqCategories: FaqCategory[] = [
  { id: "general", label: "General" },
  { id: "web-development", label: "Web Development" },
  { id: "wordpress-ecommerce", label: "WordPress & eCommerce" },
  { id: "custom-ai", label: "Custom Dev & AI" },
  { id: "seo-performance", label: "SEO & Performance" },
  { id: "branding-design", label: "Branding & Design" },
  { id: "process-pricing", label: "Process & Pricing" },
  { id: "support-maintenance", label: "Support & Maintenance" },
  { id: "hosting-security", label: "Hosting & Security" },
];

export const faqItems: FaqItem[] = [
  {
    category: "general",
    q: "What does VOX Digital Agency do?",
    a: "VOX Digital Agency is a full-service digital agency specializing in modern website development, eCommerce solutions, custom web applications, AI automation, branding, technical SEO, and ongoing website maintenance. We help businesses establish, grow, and optimize their online presence.",
  },
  {
    category: "general",
    q: "Where are you located?",
    a: "We operate as a fully remote agency, allowing us to work with businesses worldwide while providing flexible communication and efficient project delivery.",
  },
  {
    category: "general",
    q: "Do you work with international clients?",
    a: "Yes. We work with startups, small businesses, agencies, and enterprise clients across multiple countries and time zones.",
  },
  {
    category: "general",
    q: "What industries do you work with?",
    a: "We have experience working with businesses in eCommerce, healthcare, education, real estate, finance, technology, manufacturing, legal services, hospitality, nonprofits, and many other industries.",
  },
  {
    category: "web-development",
    q: "What types of websites do you build?",
    a: "We create:\n- Business Websites\n- Corporate Websites\n- Landing Pages\n- Portfolio Websites\n- eCommerce Stores\n- Membership Websites\n- Booking Websites\n- SaaS Platforms\n- Custom Web Applications\n- Educational Platforms\n- Blog Websites",
  },
  {
    category: "web-development",
    q: "Do you create custom websites?",
    a: "Yes. Every custom website is designed around your business goals, branding, and functionality requirements.",
  },
  {
    category: "web-development",
    q: "Will my website work on mobile devices?",
    a: "Absolutely. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    category: "web-development",
    q: "Can you redesign my existing website?",
    a: "Yes. We can modernize your existing website while preserving important content, SEO value, and branding.",
  },
  {
    category: "web-development",
    q: "Do you build websites in Webflow?",
    a: "Yes. We create responsive Webflow websites with CMS collections, animations, and clean structure.",
  },
  {
    category: "web-development",
    q: "Can I edit my Webflow website after launch?",
    a: "Yes. We build websites that are easy for clients to update without technical knowledge.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Do you build WordPress websites using Elementor?",
    a: "Yes. We build websites using Elementor, Gutenberg, custom themes, and advanced custom development depending on your project requirements.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Can you develop custom WordPress themes?",
    a: "Yes. We develop fully custom themes tailored to your business and design requirements.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Do you create custom plugins?",
    a: "Yes. We build custom WordPress plugins to add unique functionality when existing plugins cannot meet your needs.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Can you migrate my WordPress website?",
    a: "Yes. We can safely migrate your website between hosting providers, domains, or servers with minimal downtime.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Do you build Shopify stores?",
    a: "Yes. We design and develop professional Shopify stores optimized for conversions, speed, and user experience.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Can you migrate my store to Shopify?",
    a: "Yes. We can migrate products, customers, orders, collections, and content from other platforms.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Do you build WooCommerce websites?",
    a: "Yes. We create scalable WooCommerce stores with custom product pages, checkout flows, payment gateways, and shipping configurations.",
  },
  {
    category: "wordpress-ecommerce",
    q: "Can you customize WooCommerce?",
    a: "Absolutely. We regularly customize WooCommerce using custom development and integrations.",
  },
  {
    category: "custom-ai",
    q: "What technologies do you use?",
    a: "Depending on project requirements, we use:\n- React\n- Next.js\n- Node.js\n- TypeScript\n- JavaScript\n- PHP\n- Laravel\n- WordPress\n- Shopify\n- Webflow\n- WooCommerce\n- Tailwind CSS\n- PostgreSQL\n- MySQL",
  },
  {
    category: "custom-ai",
    q: "Can you build SaaS platforms?",
    a: "Yes. We develop scalable SaaS products, dashboards, admin portals, booking systems, CRMs, and custom business applications.",
  },
  {
    category: "custom-ai",
    q: "Do you integrate APIs?",
    a: "Yes. We integrate payment gateways, CRMs, marketing tools, ERP systems, shipping providers, AI services, and other third-party APIs.",
  },
  {
    category: "custom-ai",
    q: "What are AI Agents?",
    a: "AI Agents are intelligent assistants that can answer customer questions, automate repetitive tasks, process business data, and integrate with your existing systems.",
  },
  {
    category: "custom-ai",
    q: "Can AI be trained using my website?",
    a: "Yes. We can build AI-powered assistants that understand your website content, documentation, FAQs, and knowledge base.",
  },
  {
    category: "custom-ai",
    q: "Can AI integrate with my CRM?",
    a: "Yes. We can connect AI systems with CRM platforms, customer support software, and internal business tools.",
  },
  {
    category: "custom-ai",
    q: "Can AI automate business workflows?",
    a: "Absolutely. AI can automate lead qualification, appointment scheduling, customer support, reporting, email responses, and many other repetitive tasks.",
  },
  {
    category: "seo-performance",
    q: "Do you provide SEO services?",
    a: "Yes. We provide technical SEO, on-page optimization, structured data implementation, Core Web Vitals optimization, and website audits.",
  },
  {
    category: "seo-performance",
    q: "Can you improve website speed?",
    a: "Yes. Website performance optimization is one of our core services, helping improve loading times and user experience.",
  },
  {
    category: "seo-performance",
    q: "Do you guarantee first-page Google rankings?",
    a: "No. Search engine rankings depend on many factors outside our control. While we follow SEO best practices, no agency can guarantee specific rankings.",
  },
  {
    category: "branding-design",
    q: "Do you create logos?",
    a: "Yes. We design professional logos suitable for digital and print use.",
  },
  {
    category: "branding-design",
    q: "Do you provide complete brand identity packages?",
    a: "Yes. We create comprehensive branding systems including logos, typography, color palettes, brand guidelines, and marketing assets.",
  },
  {
    category: "branding-design",
    q: "Can you design UI/UX for web applications?",
    a: "Yes. We design intuitive user experiences for websites, SaaS products, dashboards, and mobile-friendly interfaces.",
  },
  {
    category: "process-pricing",
    q: "How does a project begin?",
    a: "Our process typically includes:\n- Initial consultation\n- Requirement gathering\n- Proposal and quotation\n- Design phase\n- Development\n- Testing\n- Client review\n- Launch\n- Ongoing support",
  },
  {
    category: "process-pricing",
    q: "How long does a project take?",
    a: "Project timelines depend on complexity. A simple website may take a few weeks, while larger custom applications can require several months.",
  },
  {
    category: "process-pricing",
    q: "Will I receive progress updates?",
    a: "Yes. We provide regular updates throughout the project to keep you informed.",
  },
  {
    category: "process-pricing",
    q: "How much does a website cost?",
    a: "Pricing depends on your requirements, features, integrations, and project complexity. We provide customized quotations based on your goals.",
  },
  {
    category: "process-pricing",
    q: "Do you require a deposit?",
    a: "Most projects begin with an initial deposit, with the remaining balance paid according to agreed milestones or before final delivery.",
  },
  {
    category: "process-pricing",
    q: "Are there any hidden fees?",
    a: "No. We provide transparent pricing before work begins. Any additional work outside the agreed scope will be discussed and approved before proceeding.",
  },
  {
    category: "support-maintenance",
    q: "Do you provide website maintenance?",
    a: "Yes. We offer ongoing maintenance through our EasyNest™ Care Plans.",
  },
  {
    category: "support-maintenance",
    q: "What is included in EasyNest™?",
    a: "Depending on your selected plan, services may include:\n- Website Updates\n- Plugin Updates\n- Security Monitoring\n- Website Backups\n- Performance Optimization\n- Technical Support\n- Uptime Monitoring\n- Content Updates",
  },
  {
    category: "support-maintenance",
    q: "Can I request changes after launch?",
    a: "Yes. We offer post-launch support, and additional updates can be handled through maintenance plans or separate quotations.",
  },
  {
    category: "support-maintenance",
    q: "Do you provide training?",
    a: "Yes. We can provide documentation or one-on-one training to help you manage your website confidently.",
  },
  {
    category: "support-maintenance",
    q: "Can you continue improving my website?",
    a: "Absolutely. Many clients continue working with us for new features, performance improvements, SEO, AI automation, and ongoing business growth.",
  },
  {
    category: "support-maintenance",
    q: "How do I get started?",
    a: "Simply contact us at info@voxdigitalagency.com with your project details. We'll discuss your goals, recommend the best solution, and provide a customized proposal with no obligation.",
  },
  {
    category: "hosting-security",
    q: "Do you provide website hosting?",
    a: "We can recommend, configure, and manage reliable hosting solutions based on your project's requirements.",
  },
  {
    category: "hosting-security",
    q: "Can you help purchase a domain?",
    a: "Yes. We can assist with domain registration, DNS configuration, and domain transfers.",
  },
  {
    category: "hosting-security",
    q: "Do you migrate websites between hosting providers?",
    a: "Yes. We perform secure website migrations with minimal downtime.",
  },
  {
    category: "hosting-security",
    q: "Will my website be secure?",
    a: "We follow industry best practices including SSL implementation, secure configurations, regular updates, and security hardening.",
  },
  {
    category: "hosting-security",
    q: "Do you provide backups?",
    a: "Yes. Backup services are available through our maintenance plans or custom support agreements.",
  },
];
