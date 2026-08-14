import type { Metadata } from "next";

import { CallToAction } from "@/components/sections";
import { MotorDemo } from "@/components/sections/MotorDemo";
import { MotorizationDetail } from "@/components/sections/MotorizationDetail";
import { PageHero } from "@/components/ui/PageHero";
import { t } from "@/lib/i18n";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: t("motorizationPage.meta.title"),
  description: t("motorizationPage.meta.description"),
};

export default function MotorizationPage() {
  return (
    <main>
      <PageHero
        eyebrowKey="motorizationPage.hero.eyebrow"
        descriptionKey="motorizationPage.hero.description"
        title={
          <>
            {t("motorizationPage.hero.titleStart")}{" "}
            <span className={styles.Accent}>
              {t("motorizationPage.hero.titleAccent")}
            </span>
            {t("motorizationPage.hero.titleEnd")}
          </>
        }
      />
      <MotorDemo />
      <MotorizationDetail />
      <CallToAction />
    </main>
  );
}
