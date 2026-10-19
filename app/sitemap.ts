import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/portfolio";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/industries",
    "/pricing",
    "/faqs",
    "/process",
    "/blog",
    "/testimonials",
    "/contact",
    "/book-consultation",
    "/free-website-giveaway",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const now = new Date();

  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/services" || route === "/portfolio" ? 0.9 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const portfolioRoutes = caseStudies.map((study) => ({
    url: `${siteUrl}/portfolio/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogRoutes = getPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...routes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
