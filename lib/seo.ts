import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const siteUrl = siteConfig.url;

export type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  keywords?: string[];
};

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image,
  publishedTime,
  keywords = [],
}: SeoOptions): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : absoluteUrl("/og.png");
  const baseTitle = siteConfig.name;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: baseTitle,
      locale: siteConfig.locale,
      type: type === "article" ? "article" : "website",
      publishedTime: publishedTime as string | undefined,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logo/banner.png"),
    image: absoluteUrl("/images/og.png"),
    email: siteConfig.email,
    description: siteConfig.description,
    telephone: siteConfig.whatsappNumber,
    sameAs: Object.values(siteConfig.socials),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.whatsappNumber,
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        telephone: siteConfig.whatsappNumber,
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    knowsAbout: [
      "Web Development",
      "Next.js Development",
      "WordPress Development",
      "Shopify Development",
      "WooCommerce Development",
      "Custom Web Applications",
      "AI Agents & Automation",
      "Technical SEO",
      "Core Web Vitals Optimization",
      "UI/UX Design",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: ["VOX Digital", "VOX Agency"],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/images/logo/banner.png"),
    },
  };
}

export function serviceJsonLd(slug: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    url: absoluteUrl(`/services/${slug}`),
  };
}

export function articleJsonLd(
  title: string,
  description: string,
  publishedTime: string,
  cover: string,
  slug?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedTime,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo/banner.png"),
      },
    },
    image: absoluteUrl(cover),
    mainEntityOfPage: slug ? absoluteUrl(`/blog/${slug}`) : absoluteUrl("/blog"),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
