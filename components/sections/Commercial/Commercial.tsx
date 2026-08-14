import { EstimateButton } from "@/components/estimate";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/content/content";
import { t } from "@/lib/i18n";

import styles from "./Commercial.module.scss";

export function Commercial() {
  return (
    <Section id="gallery">
      <Container className={styles.Layout}>
        <Reveal>
          <Eyebrow tone="muted">{t("commercial.eyebrow")}</Eyebrow>
          <h2 className={styles.Title}>{t("commercial.title")}</h2>
          <p className={styles.Description}>{t("commercial.paragraphOne")}</p>
          <p className={styles.Description}>{t("commercial.paragraphTwo")}</p>
          <EstimateButton
            variant="outline"
            size="small"
            className={styles.Action}
          >
            {t("commercial.cta")}
          </EstimateButton>
        </Reveal>

        <Reveal>
          <CoverImage
            src={media.commercial}
            alt={t("commercial.imageAlt")}
            sizes="(max-width: 991px) 100vw, 55vw"
            className={styles.Media}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
