import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stats } from "@/content/content";
import { cx } from "@/lib/cx";
import { t } from "@/lib/i18n";

import styles from "./Stats.module.scss";

export function Stats() {
  return (
    <Section spacing="none" className={styles.Stats}>
      <Container className={styles.Grid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.Item}>
            <p className={cx(styles.Value, stat.highlight && styles.highlight)}>
              {t(stat.valueKey)}
            </p>
            <p className={styles.Label}>{t(stat.labelKey)}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
}
