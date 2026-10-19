import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { LiftCompare } from "@/components/home/lift-compare";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { Stats } from "@/components/home/stats";
import { CapabilitiesGrid } from "@/components/home/capabilities-grid";
import { WhyPartner } from "@/components/home/why-partner";
import { Blueprints } from "@/components/home/blueprints";
import { LaunchBanner } from "@/components/home/launch-banner";
import { FinalCta } from "@/components/home/final-cta";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VOX Digital Agency — Worldwide IT Solutions & Digital Engineering",
  description:
    "End-to-end IT solutions delivered worldwide — top-rated website design, on-page SEO services, custom web applications, enterprise SEO, and AI automation with a 95+ Lighthouse guarantee.",
  path: "/",
  keywords: [
    "best search engine optimization agency",
    "best website design company",
    "top rated website design",
    "on-page seo services",
    "enterprise seo agency",
    "search engine optimization service",
    "web development agency",
    "custom web applications",
    "wordpress seo agency",
    "b2b seo consultant",
    "technical seo audit",
    "white label digital marketing services",
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <Hero />
      <TrustMarquee />
      <Stats />
      <LiftCompare />
      <CapabilitiesGrid limit={6} />
      <WhyPartner />
      <Blueprints />
      <LaunchBanner />
      <FinalCta />
    </>
  );
}
