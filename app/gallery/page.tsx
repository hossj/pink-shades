import type { Metadata } from "next";

import { CallToAction, GalleryGrid } from "@/components/sections";
import { PageHero } from "@/components/ui/PageHero";
import { t } from "@/lib/i18n";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: t("gallery.meta.title"),
  description: t("gallery.meta.description"),
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrowKey="gallery.hero.eyebrow"
        descriptionKey="gallery.hero.description"
        title={
          <>
            {t("gallery.hero.titleStart")}{" "}
            <span className={styles.Accent}>
              {t("gallery.hero.titleAccent")}
            </span>{" "}
            {t("gallery.hero.titleEnd")}
          </>
        }
      />
      <GalleryGrid />
      <CallToAction />
    </main>
  );
}
