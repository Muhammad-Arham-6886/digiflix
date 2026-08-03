import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { siteUrl } from "@/lib/seo";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress, PageTransition } from "@/components/layout/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VOX Digital Agency — IT Solutions & Digital Engineering",
    template: "%s | VOX Digital Agency",
  },
  description: siteConfig.description,
  keywords: [
    "IT solutions agency",
    "digital engineering",
    "web development agency",
    "software development",
    "AI automation",
    "cloud infrastructure",
    "e-commerce",
    "technical SEO",
    "Shopify development",
    "web performance",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteUrl,
    title: `${siteConfig.name} — IT Solutions & Digital Engineering`,
    description: siteConfig.description,
    images: [{ url: `${siteUrl}/images/og.png`, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    title: `${siteConfig.name} — IT Solutions & Digital Engineering`,
    description: siteConfig.description,
    images: [`${siteUrl}/images/og.png`],
  },
  icons: {
    icon: "/images/logo/mark.png",
    apple: "/images/logo/mark.png",
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

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="relative min-h-screen">
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-background"
          aria-hidden="true"
        >
          <div className="absolute -top-48 left-1/2 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary-600/10 blur-[120px]" />
          <div className="absolute right-[-12rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-500/6 blur-[120px]" />
          <div className="absolute bottom-[-12rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-primary-800/10 blur-[120px]" />
        </div>
        <ScrollProgress />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
