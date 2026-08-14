import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DeliveryIcon, HomeIcon, RulerIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { benefits } from "@/content/content";
import { t } from "@/lib/i18n";

import styles from "./Benefits.module.scss";

const icons = {
  home: HomeIcon,
  ruler: RulerIcon,
  delivery: DeliveryIcon,
};

export function Benefits() {
  return (
    <Section background="default">
      <Container>
        <SectionIntro
          eyebrowKey="benefits.eyebrow"
          titleKey="benefits.title"
          descriptionKey="benefits.description"
          className={styles.Intro}
        />

        <div className={styles.Grid}>
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon];

            return (
              <Reveal key={benefit.id} className={styles.Card}>
                <span className={styles.IconWrap}>
                  <Icon size={24} />
                </span>
                <Eyebrow className={styles.Tag}>{t(benefit.tagKey)}</Eyebrow>
                <h3 className={styles.Title}>{t(benefit.titleKey)}</h3>
                <p className={styles.Description}>
                  {t(benefit.descriptionKey)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
