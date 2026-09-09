import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { media } from "@/content/home";
import { t } from "@/lib/i18n";

import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { RepairForm } from "./RepairForm";
import styles from "./Repairs.module.scss";

export function Repairs() {
  return (
    <Section id="repairs" background="default">
      <Container>
        <Reveal className={styles.Card}>
          <div className={styles.MediaColumn}>
            <BeforeAfterSlider
              before={media.repairBefore}
              after={media.repairAfter}
            />
            <p className={styles.MediaHint}>{t("repairs.sliderHint")}</p>
          </div>

          <div className={styles.Body}>
            <Eyebrow tone="light">{t("repairs.eyebrow")}</Eyebrow>
            <h2 className={styles.Title}>{t("repairs.title")}</h2>
            <p className={styles.Description}>{t("repairs.paragraphOne")}</p>
            <p className={styles.Description}>{t("repairs.paragraphTwo")}</p>
            <RepairForm />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
