import type { Metadata } from "next";

import {
  AboutStory,
  CallToAction,
  Leadership,
  ServiceArea,
  WhyUs,
} from "@/components/sections";
import { PageHero } from "@/components/ui/PageHero";
import { t } from "@/lib/i18n";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: t("about.meta.title"),
  description: t("about.meta.description"),
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrowKey="about.hero.eyebrow"
        descriptionKey="about.hero.description"
        title={
          <>
            {t("about.hero.titleStart")}{" "}
            <span className={styles.Accent}>{t("about.hero.titleAccent")}</span>{" "}
            {t("about.hero.titleEnd")}
          </>
        }
      />
      <AboutStory />
      <WhyUs />
      <Leadership />
      <ServiceArea />
      <CallToAction />
    </main>
  );
}
