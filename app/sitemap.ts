import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { services } from "@/lib/services";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/industries",
    "/pricing",
    "/process",
    "/blog",
    "/testimonials",
    "/contact",
    "/book-consultation",
    "/privacy",
    "/terms",
    "/cookies",
    "/coming-soon",
  ];

  const now = new Date();

  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = getPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...blogRoutes];
}
