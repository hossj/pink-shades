import type { Metadata } from "next";

import { ContactSection } from "@/components/sections";
import { PageHero } from "@/components/ui/PageHero";
import { t } from "@/lib/i18n";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: t("contact.meta.title"),
  description: t("contact.meta.description"),
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrowKey="contact.hero.eyebrow"
        descriptionKey="contact.hero.description"
        title={
          <>
            {t("contact.hero.titleStart")}{" "}
            <span className={styles.Accent}>
              {t("contact.hero.titleAccent")}
            </span>{" "}
            {t("contact.hero.titleEnd")}
          </>
        }
      />
      <ContactSection />
    </main>
  );
}
