import "@/styles/globals.scss";

import type { Metadata } from "next";

import { EstimateModal, EstimateProvider } from "@/components/estimate";
import { Footer, Header } from "@/components/sections";
import { ViewTransitions } from "@/components/ui/ViewTransitions";
import { t } from "@/lib/i18n";

import { bricolage, spaceMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://pinkshadesdesign.com"),
  title: t("meta.title"),
  description: t("meta.description"),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Pink Blinds & Shutters",
    locale: "en_US",
    url: "./",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pink Blinds & Shutters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/twitter-card.jpg",
        width: 1600,
        height: 900,
        alt: "Pink Blinds & Shutters",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${spaceMono.variable}`}>
      <body>
        <ViewTransitions>
          <EstimateProvider>
            <Header />
            {children}
            <Footer />
            <EstimateModal />
          </EstimateProvider>
        </ViewTransitions>
      </body>
    </html>
  );
}
