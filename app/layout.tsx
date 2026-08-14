import "@/styles/globals.scss";

import type { Metadata } from "next";

import { EstimateModal, EstimateProvider } from "@/components/estimate";
import { Footer, Header } from "@/components/sections";
import { ViewTransitions } from "@/components/ui/ViewTransitions";
import { t } from "@/lib/i18n";

import { bricolage, spaceMono } from "./fonts";

export const metadata: Metadata = {
  title: t("meta.title"),
  description: t("meta.description"),
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
