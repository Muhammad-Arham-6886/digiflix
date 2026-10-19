import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { GiveawayView } from "@/components/giveaway/giveaway-view";

export const metadata: Metadata = buildMetadata({
  title: "Free Website Giveaway — Bespoke Development at $0",
  description:
    "Apply for VOX Digital Agency's official Free Website Giveaway. We build complete, high-converting, custom-engineered websites for select businesses worldwide at $0 development fee.",
  path: "/free-website-giveaway",
});

export default function FreeWebsiteGiveawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Free Website Giveaway", path: "/free-website-giveaway" },
            ])
          ),
        }}
      />
      <GiveawayView />
    </>
  );
}
