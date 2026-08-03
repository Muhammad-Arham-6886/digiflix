import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/legal-layout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information.`,
  path: "/privacy",
});

const sections = [
  {
    heading: "Who We Are",
    paragraphs: [
      "VOX Digital Agency is a remote digital agency providing professional digital solutions for businesses around the world. Our services include, but are not limited to:",
    ],
    lists: [
      [
        "Website Development",
        "WordPress Development",
        "Shopify Development",
        "WooCommerce Development",
        "Webflow Development",
        "Custom Web Applications",
        "AI Agents & Business Automation",
        "Technical SEO & Website Performance",
        "UI/UX Design",
        "Logo & Brand Design",
        "Google Business Profile Optimization",
        "Website Maintenance and Support",
      ],
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We may collect information that you voluntarily provide when interacting with our website or contacting our team.",
      "This may include:",
    ],
    lists: [
      [
        "Your name",
        "Email address",
        "Phone number",
        "Company or business name",
        "Project details",
        "Billing information when applicable",
        "Files, documents, images, or other content you provide during a project",
        "Any other information you choose to share with us",
      ],
      [
        "IP address",
        "Browser type",
        "Device information",
        "Operating system",
        "Pages visited",
        "Time spent on our website",
        "Referral source",
        "General website usage statistics",
      ],
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["The information we collect may be used to:"],
    lists: [
      [
        "Respond to enquiries and support requests",
        "Prepare quotations and project proposals",
        "Deliver our services",
        "Communicate during ongoing projects",
        "Process invoices and payments",
        "Improve our website and services",
        "Monitor website performance",
        "Prevent fraud and abuse",
        "Maintain website security",
        "Send important service updates",
        "Share newsletters or promotional content where appropriate",
      ],
    ],
  },
  {
    heading: "Project Information",
    paragraphs: [
      "When working with clients, you may provide access to websites, hosting accounts, content management systems, cloud services, design files, repositories, or other digital platforms.",
      "This information is used solely for the purpose of delivering the requested services and is treated as confidential.",
      "We do not claim ownership of your content, websites, branding, or intellectual property.",
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "Payments may be processed through trusted third-party payment providers.",
      "VOX Digital Agency does not permanently store sensitive payment information such as complete credit card numbers or banking credentials on its website.",
      "Please refer to the privacy policies of the payment providers you choose to use.",
    ],
  },
  {
    heading: "Cookies and Analytics",
    paragraphs: ["Our website may use cookies and similar technologies to:"],
    lists: [
      [
        "Remember user preferences",
        "Improve website functionality",
        "Measure website performance",
        "Analyse visitor behaviour",
        "Understand traffic sources",
        "Enhance user experience",
      ],
    ],
  },
  {
    heading: "Third-Party Services",
    paragraphs: ["We may use trusted third-party platforms to provide or enhance our services.", "Examples include:"],
    lists: [
      [
        "Website hosting providers",
        "Domain registrars",
        "Email providers",
        "Cloud storage services",
        "Analytics platforms",
        "Payment processors",
        "Customer support platforms",
        "Marketing services",
      ],
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "Protecting client information is important to us.",
      "We implement reasonable technical and organisational measures designed to safeguard information against unauthorised access, alteration, disclosure, or destruction.",
      "While we work to protect your information, no internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: ["We retain information only for as long as necessary to:"],
    lists: [
      [
        "Complete requested services",
        "Provide customer support",
        "Maintain project records",
        "Comply with legal or accounting obligations",
        "Resolve disputes",
        "Improve our services",
      ],
    ],
  },
  {
    heading: "Client Content",
    paragraphs: [
      "Clients remain the owners of all content, logos, branding, graphics, documents, source files, and other materials they provide.",
      "VOX Digital Agency uses client materials solely for the purpose of delivering agreed services unless written permission is provided for another use.",
    ],
  },
  {
    heading: "Marketing Communications",
    paragraphs: ["If you subscribe to our newsletter or request updates, we may occasionally send:"],
    lists: [
      [
        "Company news",
        "Service announcements",
        "Promotional offers",
        "Industry insights",
        "Product updates",
      ],
    ],
  },
  {
    heading: "External Links",
    paragraphs: [
      "Our website may contain links to external websites operated by third parties.",
      "We are not responsible for the privacy practices, content, or security of external websites. We encourage visitors to review their privacy policies before providing personal information.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "Our website and services are intended for businesses and individuals aged 18 years or older.",
      "We do not knowingly collect personal information from children.",
      "If we become aware that personal information from a child has been submitted, we will take reasonable steps to remove it.",
    ],
  },
  {
    heading: "International Visitors",
    paragraphs: [
      "Because we operate remotely and work with clients worldwide, information may be transmitted or processed in different countries depending on the services being provided.",
      "By using our website, you understand that your information may be processed internationally where necessary to deliver our services.",
    ],
  },
  {
    heading: "Your Choices",
    paragraphs: ["You may contact us at any time to:"],
    lists: [
      [
        "Request access to the personal information you have shared with us",
        "Correct inaccurate information",
        "Request deletion of information where appropriate",
        "Withdraw consent for future communications",
        "Ask questions about how your information is used",
      ],
    ],
  },
  {
    heading: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, business operations, or website functionality.",
      "Any updates will be published on this page with a revised effective date.",
      "We encourage visitors to review this Privacy Policy periodically.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions regarding this Privacy Policy or how your information is handled, please contact us.",
      "VOX Digital Agency",
      `Email: ${siteConfig.email}`,
      "Business Location: Remote",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How VOX Digital Agency handles your personal information — plainly and honestly."
      updated="August 3, 2026"
      intro={[
        "At VOX Digital Agency, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, contact us, or use our digital services.",
        "By accessing or using our website, you agree to the practices described in this Privacy Policy.",
      ]}
      sections={sections}
    />
  );
}
