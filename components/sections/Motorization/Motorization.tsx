import { CoverImage } from "@/components/ui/CoverImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { media, motorizationOptions } from "@/content/home";
import { t } from "@/lib/i18n";

import styles from "./Motorization.module.scss";

export function Motorization() {
  return (
    <section id="motorization" className={styles.Motorization}>
      <Reveal className={styles.Media}>
        <CoverImage
          src={media.rollerShades}
          alt={t("motorization.imageAlt")}
          scrim="soft"
          sizes="(max-width: 991px) 100vw, 45vw"
          className={styles.Image}
        />
      </Reveal>

      <Reveal className={styles.Body}>
        <Eyebrow tone="light">{t("motorization.eyebrow")}</Eyebrow>
        <h2 className={styles.Title}>{t("motorization.title")}</h2>
        <p className={styles.Description}>{t("motorization.description")}</p>

        <ul className={styles.Options}>
          {motorizationOptions.map((option) => (
            <li key={option.id} className={styles.Option}>
              <p className={styles.Number}>{t(option.numberKey)}</p>
              <div>
                <h3 className={styles.OptionTitle}>{t(option.titleKey)}</h3>
                <p className={styles.OptionDescription}>
                  {t(option.descriptionKey)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
