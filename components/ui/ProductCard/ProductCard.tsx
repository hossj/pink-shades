import Link from "next/link";

import { CoverImage } from "@/components/ui/CoverImage";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./ProductCard.module.scss";

interface Props {
  href: string;
  image: string;
  nameKey: TranslationKey;
  groupLabelKey: TranslationKey;
}

export function ProductCard({ href, image, nameKey, groupLabelKey }: Props) {
  return (
    <Link href={href} className={styles.ProductCard}>
      <CoverImage
        src={image}
        alt={t(nameKey)}
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
        className={styles.Media}
        imageClassName={styles.Image}
      />
      <span className={styles.Body}>
        <span className={styles.Tag}>{t(groupLabelKey)}</span>
        <span className={styles.Name}>{t(nameKey)}</span>
      </span>
    </Link>
  );
}
