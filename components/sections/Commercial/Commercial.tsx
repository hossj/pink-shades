import { EstimateButton } from "@/components/estimate";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitSection } from "@/components/ui/SplitSection";
import { media } from "@/content/home";
import { t } from "@/lib/i18n";

import styles from "./Commercial.module.scss";

export function Commercial() {
  return (
    <SplitSection
      id="gallery"
      image={media.commercial}
      imageAlt={t("commercial.imageAlt")}
    >
      <Eyebrow tone="muted">{t("commercial.eyebrow")}</Eyebrow>
      <h2 className={styles.Title}>{t("commercial.title")}</h2>
      <p className={styles.Description}>{t("commercial.paragraphOne")}</p>
      <p className={styles.Description}>{t("commercial.paragraphTwo")}</p>
      <EstimateButton variant="outline" size="small" className={styles.Action}>
        {t("commercial.cta")}
      </EstimateButton>
    </SplitSection>
  );
}
