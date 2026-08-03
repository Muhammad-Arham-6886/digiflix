import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { FinalCta } from "@/components/home/final-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Case Studies",
  description:
    "Case studies from the websites, stores and platforms VOX has built for small and growing businesses — e-commerce, booking systems, local SEO and AI automation with measurable outcomes.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Proof, not promises."
        subtitle="Every case study below reports real, measured outcomes — load times, conversion lifts, uptime and automation rates."
      />
      <PortfolioGrid />
      <FinalCta />
    </>
  );
}
