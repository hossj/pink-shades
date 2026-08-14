import { EstimateButton } from "@/components/estimate";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { media } from "@/content/home";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.Hero}>
      <CoverImage
        src={media.hero}
        alt={t("hero.imageAlt")}
        scrim="hero"
        priority
        className={styles.Background}
      />

      <div className={styles.Content}>
        <p className={styles.Eyebrow}>{t("hero.eyebrow")}</p>
        <h1 className={styles.Title}>
          {t("hero.titleLine1")}
          <br />
          <span className={styles.TitleAccent}>{t("hero.titleLine2")}</span>
          <br />
          <span className={styles.TitleItalic}>{t("hero.titleLine3")}</span>
        </h1>
        <p className={styles.Description}>{t("hero.description")}</p>
        <div className={styles.Actions}>
          <EstimateButton size="large">{t("hero.primaryCta")}</EstimateButton>
          <Button href={site.phoneHref} variant="underline">
            {t("hero.secondaryCta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
