import { EstimateButton } from "@/components/estimate";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitSection } from "@/components/ui/SplitSection";
import { aboutMedia } from "@/content/about";
import { t } from "@/lib/i18n";

import styles from "./ServiceArea.module.scss";

export function ServiceArea() {
  return (
    <SplitSection
      image={aboutMedia.serviceArea}
      imageAlt={t("about.serviceArea.imageAlt")}
      imagePosition="left"
      imageContain
    >
      <Eyebrow tone="muted">{t("about.serviceArea.eyebrow")}</Eyebrow>
      <h2 className={styles.Title}>{t("about.serviceArea.title")}</h2>
      <p className={styles.Description}>{t("about.serviceArea.description")}</p>
      <EstimateButton size="small" className={styles.Action}>
        {t("about.serviceArea.cta")}
      </EstimateButton>
    </SplitSection>
  );
}
