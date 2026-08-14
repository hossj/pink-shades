import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { aboutMedia } from "@/content/about";
import { t } from "@/lib/i18n";

import styles from "./Leadership.module.scss";

export function Leadership() {
  return (
    <Section background="surface">
      <Container>
        <SectionIntro
          eyebrowKey="about.leadership.eyebrow"
          titleKey="about.leadership.title"
          className={styles.Intro}
        />

        <Reveal className={styles.Card}>
          <Image
            src={aboutMedia.founder}
            alt={t("about.leadership.sia.imageAlt")}
            width={240}
            height={300}
            className={styles.Portrait}
          />
          <div className={styles.Body}>
            <p className={styles.Caption}>
              {t("about.leadership.sia.name")} — {t("about.leadership.sia.role")}
            </p>
            <p className={styles.Bio}>{t("about.leadership.sia.bio")}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
