import Link from "next/link";
import { Fragment } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./PageHero.module.scss";

export interface Breadcrumb {
  labelKey: TranslationKey;
  href?: string;
}

interface Props {
  eyebrowKey?: TranslationKey;
  title?: React.ReactNode;
  descriptionKey?: TranslationKey;
  breadcrumbs?: Breadcrumb[];
  slim?: boolean;
}

export function PageHero({
  eyebrowKey,
  title,
  descriptionKey,
  breadcrumbs,
  slim,
}: Props) {
  return (
    <div className={cx(styles.PageHero, slim && styles.slim)}>
      <Container className={styles.Content}>
        {breadcrumbs ? (
          <nav aria-label={t("common.breadcrumbs")} className={styles.Crumbs}>
            {breadcrumbs.map((crumb, index) => (
              <Fragment key={crumb.labelKey}>
                {index > 0 && (
                  <span aria-hidden="true" className={styles.CrumbSeparator}>
                    /
                  </span>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className={styles.CrumbLink}>
                    {t(crumb.labelKey)}
                  </Link>
                ) : (
                  <span aria-current="page" className={styles.CrumbCurrent}>
                    {t(crumb.labelKey)}
                  </span>
                )}
              </Fragment>
            ))}
          </nav>
        ) : (
          eyebrowKey && (
            <Eyebrow tone="light" className={styles.Eyebrow}>
              {t(eyebrowKey)}
            </Eyebrow>
          )
        )}
        {title && <h1 className={styles.Title}>{title}</h1>}
        {descriptionKey && (
          <p className={styles.Description}>{t(descriptionKey)}</p>
        )}
      </Container>
    </div>
  );
}
