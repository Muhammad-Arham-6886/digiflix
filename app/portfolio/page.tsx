import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { FinalCta } from "@/components/home/final-cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Case Studies & Client Success",
  description:
    "Explore case studies from websites, stores and platforms VOX has engineered for growing businesses worldwide — e-commerce, booking systems, technical SEO and AI automation.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
            ])
          ),
        }}
      />
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
