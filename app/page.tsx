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
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VOX Digital Agency — IT Solutions & Digital Engineering",
  description:
    "End-to-end IT solutions — web platforms, e-commerce, AI automation and cloud infrastructure from one senior team. 95+ Lighthouse guarantee, technical SEO and 24/7 SLAs.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
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
