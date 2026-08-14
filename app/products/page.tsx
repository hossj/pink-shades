import type { Metadata } from "next";

import { CallToAction, ProductsGrid } from "@/components/sections";
import { PageHero } from "@/components/ui/PageHero";
import { t } from "@/lib/i18n";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: t("productsPage.meta.title"),
  description: t("productsPage.meta.description"),
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrowKey="productsPage.hero.eyebrow"
        descriptionKey="productsPage.hero.description"
        title={
          <>
            {t("productsPage.hero.titleStart")}{" "}
            <span className={styles.Accent}>
              {t("productsPage.hero.titleAccent")}
            </span>{" "}
            {t("productsPage.hero.titleEnd")}
          </>
        }
      />
      <ProductsGrid />
      <CallToAction />
    </main>
  );
}
