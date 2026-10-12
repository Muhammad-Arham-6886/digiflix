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
    "End-to-end IT solutions delivered worldwide — high-performance websites, e-commerce, custom web applications, AI automation and cloud infrastructure. 95+ Lighthouse guarantee, technical SEO and 24/7 SLAs.",
  path: "/",
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
