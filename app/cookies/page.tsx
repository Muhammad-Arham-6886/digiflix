import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/legal-layout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: `How the ${siteConfig.name} website uses cookies and similar technologies.`,
  path: "/cookies",
});

const sections = [
  {
    heading: "What Are Cookies?",
    paragraphs: [
      "Cookies are small text files that are stored on your computer, tablet, or mobile device when you visit a website. They help websites remember your preferences, improve functionality, analyze visitor behavior, and provide a better browsing experience.",
      "Cookies do not typically contain personally identifiable information on their own, but they may be associated with information you voluntarily provide through our website.",
    ],
  },
  {
    heading: "Why We Use Cookies",
    paragraphs: ["VOX Digital Agency uses cookies and similar technologies to improve the performance and functionality of our website.", "Cookies may be used to:"],
    lists: [
      [
        "Ensure the website functions correctly",
        "Remember your preferences and settings",
        "Improve website speed and performance",
        "Analyze website traffic and visitor behavior",
        "Measure the effectiveness of marketing campaigns",
        "Detect security issues and prevent fraudulent activity",
        "Improve the overall user experience",
        "Support future website features and functionality",
      ],
    ],
  },
  {
    heading: "Types of Cookies We Use",
    paragraphs: ["We use the following categories of cookies on our website."],
  },
  {
    heading: "Essential Cookies",
    paragraphs: [
      "Essential cookies are necessary for the operation of our website. These cookies enable core functionality such as page navigation, security features, and access to certain areas of the website.",
      "Without these cookies, some parts of the website may not function properly.",
    ],
  },
  {
    heading: "Performance and Analytics Cookies",
    paragraphs: ["Performance cookies help us understand how visitors interact with our website.", "They may collect information such as:"],
    lists: [
      [
        "Pages visited",
        "Time spent on pages",
        "Device type",
        "Browser type",
        "General geographic region",
        "Referral sources",
        "Website performance metrics",
      ],
    ],
  },
  {
    heading: "Functional Cookies",
    paragraphs: ["Functional cookies remember your preferences and settings to provide a more personalized browsing experience.", "These cookies may remember:"],
    lists: [
      [
        "Language preferences",
        "Form information",
        "User settings",
        "Previously selected options",
      ],
    ],
  },
  {
    heading: "Marketing Cookies",
    paragraphs: [
      "From time to time, we may use marketing cookies to better understand the effectiveness of our advertising campaigns and to improve our marketing efforts.",
      "These cookies may be placed by us or by trusted third-party advertising platforms.",
    ],
  },
  {
    heading: "Third-Party Cookies",
    paragraphs: ["Some cookies may be placed by third-party services integrated into our website.", "Examples may include:"],
    lists: [
      [
        "Website analytics providers",
        "Live chat platforms",
        "Video hosting services",
        "Social media integrations",
        "Marketing tools",
        "Advertising platforms",
        "Customer support systems",
      ],
    ],
  },
  {
    heading: "Analytics Tools",
    paragraphs: ["We may use website analytics tools to better understand how visitors interact with our website.", "Analytics information may include:"],
    lists: [
      [
        "Anonymous visitor statistics",
        "Device information",
        "Browser information",
        "Session duration",
        "Popular pages",
        "Website performance data",
      ],
    ],
  },
  {
    heading: "Managing Cookies",
    paragraphs: ["Most web browsers allow you to control cookies through their settings.", "You can usually choose to:"],
    lists: [
      [
        "Accept all cookies",
        "Block all cookies",
        "Delete existing cookies",
        "Receive notifications before cookies are stored",
        "Block cookies from specific websites",
      ],
    ],
  },
  {
    heading: "Browser Controls",
    paragraphs: ["If you wish to manage cookies, you can use your browser's settings.", "Most modern browsers provide options to:"],
    lists: [
      [
        "View stored cookies",
        "Remove cookies",
        "Block future cookies",
        "Clear browsing data",
        "Configure website permissions",
      ],
    ],
  },
  {
    heading: "Changes to This Cookie Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, website functionality, or business practices.",
      "Any updates will be published on this page along with a revised effective date.",
      "We encourage visitors to review this Cookie Policy periodically.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions about this Cookie Policy or our use of cookies, please contact us.",
      "VOX Digital Agency",
      `Email: ${siteConfig.email}`,
      "Business Location: Remote",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie Policy"
      subtitle="A plain-English explanation of how the VOX website uses cookies."
      updated="August 3, 2026"
      intro={[
        "This Cookie Policy explains how VOX Digital Agency (\"we,\" \"our,\" or \"us\") uses cookies and similar technologies when you visit our website. It describes what cookies are, why we use them, and the choices you have regarding their use.",
        "By continuing to use our website, you acknowledge that cookies may be used as described in this Cookie Policy.",
      ]}
      sections={sections}
    />
  );
}
