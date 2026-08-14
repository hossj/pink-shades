import { Eyebrow } from "@/components/ui/Eyebrow";
import { DeliveryIcon, HomeIcon, RulerIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./PerkCard.module.scss";

const icons = {
  home: HomeIcon,
  ruler: RulerIcon,
  delivery: DeliveryIcon,
};

export type PerkIcon = keyof typeof icons;

interface Props {
  icon: PerkIcon;
  tagKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

export function PerkCard({ icon, tagKey, titleKey, descriptionKey }: Props) {
  const Icon = icons[icon];

  return (
    <Reveal className={styles.PerkCard}>
      <span className={styles.IconWrap}>
        <Icon size={24} />
      </span>
      <Eyebrow className={styles.Tag}>{t(tagKey)}</Eyebrow>
      <h3 className={styles.Title}>{t(titleKey)}</h3>
      <p className={styles.Description}>{t(descriptionKey)}</p>
    </Reveal>
  );
}
