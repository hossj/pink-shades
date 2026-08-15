import { EstimateButton } from "@/components/estimate";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

import styles from "./CallToAction.module.scss";

export function CallToAction() {
  return (
    <Section id="estimate" bordered>
      <Container>
        <Reveal className={styles.Content}>
          <h2 className={styles.Title}>
            {t("callToAction.titleStart")}{" "}
            <span className={styles.Accent}>{t("callToAction.titleAccent")}</span>{" "}
            {t("callToAction.titleEnd")}
          </h2>
          <p className={styles.Description}>{t("callToAction.description")}</p>
          <div className={styles.Actions}>
            <EstimateButton size="large">
              {t("callToAction.primaryCta")}
            </EstimateButton>
            <Button
              href={site.phoneHref}
              variant="outline"
              size="large"
              icon={<PhoneIcon size={18} />}
            >
              {t("site.phone")}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
