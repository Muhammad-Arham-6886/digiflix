import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/legal-layout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that govern the use of the ${siteConfig.name} website and engagement of its services.`,
  path: "/terms",
});

const sections = [
  {
    heading: "About VOX Digital Agency",
    paragraphs: [
      "VOX Digital Agency is a remote digital agency providing creative, technical, and marketing solutions for businesses worldwide.",
      "Our services include, but are not limited to:",
    ],
    lists: [
      [
        "Website Development",
        "WordPress Development",
        "Shopify Development",
        "WooCommerce Development",
        "Webflow Development",
        "Figma to WordPress",
        "Custom Web Applications",
        "AI Agents & Business Automation",
        "Technical SEO & Performance Optimization",
        "UI/UX Design",
        "Logo & Brand Design",
        "Google Business Profile Optimization",
        "Website Maintenance and Support",
      ],
    ],
  },
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing our website, requesting a quotation, purchasing services, or working with VOX Digital Agency, you acknowledge that you have read, understood, and accepted these Terms of Service.",
    ],
  },
  {
    heading: "Service Proposals and Quotations",
    paragraphs: [
      "Any quotation, proposal, estimate, or project timeline provided by VOX Digital Agency is based on the information available at the time of preparation.",
      "Changes to project requirements, additional features, revisions beyond the agreed scope, or new requests may require updated pricing, revised timelines, or additional agreements.",
    ],
  },
  {
    heading: "Project Scope",
    paragraphs: [
      "Every project begins with an agreed scope of work. The scope outlines the services, deliverables, timeline, and responsibilities of both parties.",
      "Any work requested outside the agreed scope may be treated as additional work and may incur extra charges.",
    ],
  },
  {
    heading: "Client Responsibilities",
    paragraphs: ["To ensure successful project delivery, clients agree to:"],
    lists: [
      [
        "Provide accurate project requirements.",
        "Supply necessary content, images, branding assets, and credentials.",
        "Respond to requests for feedback within a reasonable timeframe.",
        "Review completed work promptly.",
        "Make payments according to the agreed schedule.",
        "Ensure they have the legal right to use any materials supplied.",
      ],
    ],
  },
  {
    heading: "Communication",
    paragraphs: [
      "Project communication may take place through email, online meetings, messaging platforms, project management tools, or other agreed communication channels.",
      "Clients are encouraged to keep communication clear and timely to help maintain project progress.",
    ],
  },
  {
    heading: "Revisions",
    paragraphs: [
      "Reasonable revisions may be included depending on the agreed project scope.",
      "Requests for substantial redesigns, additional functionality, or repeated changes beyond the original agreement may be considered additional work and billed separately.",
    ],
  },
  {
    heading: "Project Timelines",
    paragraphs: ["Estimated completion dates are provided in good faith.", "Delivery times may vary due to:"],
    lists: [
      [
        "Client feedback delays",
        "Additional feature requests",
        "Third-party service interruptions",
        "Technical issues",
        "Force majeure events",
        "Hosting or platform-related limitations",
      ],
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "Payment terms will be communicated before project commencement.",
      "Depending on the project, payment may include:",
    ],
    lists: [
      [
        "Full payment upfront",
        "Partial deposit before work begins",
        "Milestone-based payments",
        "Final payment before project launch or delivery",
      ],
    ],
  },
  {
    heading: "Refund Policy",
    paragraphs: [
      "Due to the nature of digital services, refunds are generally not available for completed work.",
      "If a project is cancelled before completion, any refund will be considered based on:",
    ],
    lists: [
      [
        "Work already completed",
        "Resources allocated",
        "Time invested",
        "Third-party expenses",
      ],
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "Unless otherwise agreed in writing, clients retain ownership of the content, branding materials, images, and assets they provide.",
      "Upon receipt of full payment, ownership of the final approved deliverables created specifically for the client is transferred to the client, excluding:",
    ],
    lists: [
      [
        "Licensed software",
        "Third-party themes",
        "Plugins",
        "Fonts",
        "Stock photography",
        "External APIs",
        "Proprietary tools used during development",
      ],
    ],
  },
  {
    heading: "Third-Party Products and Services",
    paragraphs: ["Projects may rely on third-party services including:"],
    lists: [
      [
        "Website hosting",
        "Domain registrars",
        "Cloud providers",
        "Payment gateways",
        "APIs",
        "Themes",
        "Plugins",
        "Software licenses",
      ],
    ],
  },
  {
    heading: "Website Maintenance",
    paragraphs: [
      "Unless covered by a separate maintenance agreement, ongoing updates, security patches, backups, monitoring, and technical support are not included after project completion.",
      "Maintenance plans may be offered separately.",
    ],
  },
  {
    heading: "Search Engine Optimization",
    paragraphs: [
      "Technical SEO improvements may enhance website quality and visibility; however, search engine rankings cannot be guaranteed.",
      "Search engine algorithms are controlled by third parties and may change without notice.",
    ],
  },
  {
    heading: "AI Services",
    paragraphs: [
      "Our AI-related services may include automation, chatbot development, AI integrations, workflow automation, or custom AI solutions.",
      "Clients are responsible for reviewing AI-generated outputs before using them in business operations or public communications.",
      "VOX Digital Agency does not guarantee the accuracy or completeness of AI-generated content.",
    ],
  },
  {
    heading: "Acceptable Use",
    paragraphs: [
      "You agree not to use our website or services for activities that are unlawful, fraudulent, abusive, or harmful.",
      "Prohibited activities include, but are not limited to:",
    ],
    lists: [
      [
        "Distributing malware",
        "Attempting unauthorized access",
        "Sending spam",
        "Infringing intellectual property rights",
        "Uploading illegal or offensive content",
        "Disrupting website functionality",
      ],
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "Both parties agree to treat confidential information shared during a project with reasonable care.",
      "Confidential information will not be disclosed to third parties unless required to complete the requested services or required by law.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "VOX Digital Agency provides its services with reasonable skill and care.",
      "However, we are not liable for indirect, incidental, consequential, or special damages, including:",
    ],
    lists: [
      [
        "Loss of revenue",
        "Loss of profits",
        "Business interruption",
        "Loss of data",
        "Search engine ranking fluctuations",
        "Third-party platform issues",
        "Hosting failures",
      ],
    ],
  },
  {
    heading: "Website Availability",
    paragraphs: [
      "While we strive to maintain continuous availability, we do not guarantee that our website will always be uninterrupted, error-free, or free from technical issues.",
      "Temporary downtime may occur due to maintenance or circumstances beyond our control.",
    ],
  },
  {
    heading: "Changes to Services",
    paragraphs: [
      "VOX Digital Agency reserves the right to modify, update, suspend, or discontinue any service or feature without prior notice.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "These Terms of Service may be updated periodically.",
      "The latest version will always be published on our website with an updated effective date.",
      "Continued use of our website or services after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact Information",
    paragraphs: [
      "If you have questions regarding these Terms of Service, please contact us.",
      "VOX Digital Agency",
      `Email: ${siteConfig.email}`,
      "Business Location: Remote",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The ground rules for using our website and engaging our services."
      updated="August 3, 2026"
      intro={[
        "Welcome to VOX Digital Agency. These Terms of Service govern your access to and use of our website and the digital services we provide. By accessing our website or engaging our services, you agree to comply with these Terms.",
        "If you do not agree with any part of these Terms, please refrain from using our website or services.",
      ]}
      sections={sections}
    />
  );
}
