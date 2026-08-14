import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitSection } from "@/components/ui/SplitSection";
import { aboutMedia } from "@/content/about";
import { t } from "@/lib/i18n";

import styles from "./AboutStory.module.scss";

export function AboutStory() {
  return (
    <SplitSection image={aboutMedia.story} imageAlt={t("about.story.imageAlt")}>
      <Eyebrow tone="muted">{t("about.story.eyebrow")}</Eyebrow>
      <h2 className={styles.Title}>{t("about.story.title")}</h2>
      <p className={styles.Description}>{t("about.story.paragraphOne")}</p>
      <p className={styles.Description}>{t("about.story.paragraphTwo")}</p>
    </SplitSection>
  );
}
