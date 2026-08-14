import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./PageHero.module.scss";

interface Props {
  eyebrowKey: TranslationKey;
  title: React.ReactNode;
  descriptionKey?: TranslationKey;
}

export function PageHero({ eyebrowKey, title, descriptionKey }: Props) {
  return (
    <div className={styles.PageHero}>
      <Container className={styles.Content}>
        <Eyebrow tone="light" className={styles.Eyebrow}>
          {t(eyebrowKey)}
        </Eyebrow>
        <h1 className={styles.Title}>{title}</h1>
        {descriptionKey && (
          <p className={styles.Description}>{t(descriptionKey)}</p>
        )}
      </Container>
    </div>
  );
}
