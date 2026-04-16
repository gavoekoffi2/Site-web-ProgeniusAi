import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://progeniusai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pro Genius AI — Automatisez votre business avec l'IA",
    template: "%s | Pro Genius AI",
  },
  description:
    "Pro Genius AI développe des solutions d'intelligence artificielle pour automatiser vos ventes, vos appels et vos opérations. Call center IA, agents intelligents et automatisation sur mesure pour l'Afrique.",
  keywords: [
    "IA Afrique",
    "intelligence artificielle Afrique",
    "automatisation business",
    "call center IA",
    "agents IA",
    "AfriVoice AI",
    "ProCall AI",
    "Pro Genius AI",
    "automatisation ventes",
    "SaaS IA",
  ],
  authors: [{ name: "Pro Genius AI" }],
  creator: "Pro Genius AI",
  publisher: "Pro Genius AI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Pro Genius AI",
    title: "Pro Genius AI — Automatisez votre business avec l'IA",
    description:
      "Call center IA, agents intelligents et automatisation des ventes pour les entreprises africaines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Genius AI",
    description:
      "Solutions d'IA pour automatiser vos ventes, vos appels et vos opérations.",
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
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
