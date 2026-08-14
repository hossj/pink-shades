import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cx } from "@/lib/cx";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./SectionIntro.module.scss";

interface Props {
  eyebrowKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey?: TranslationKey;
  className?: string;
}

export function SectionIntro({
  eyebrowKey,
  titleKey,
  descriptionKey,
  className,
}: Props) {
  return (
    <Reveal className={cx(styles.SectionIntro, className)}>
      <Eyebrow>{t(eyebrowKey)}</Eyebrow>
      <h2 className={styles.Title}>{t(titleKey)}</h2>
      {descriptionKey && (
        <p className={styles.Description}>{t(descriptionKey)}</p>
      )}
    </Reveal>
  );
}
