import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, site, socialLinks } from "@/content/site";
import { t } from "@/lib/i18n";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <Container className={styles.Top}>
        <div>
          <Logo height={46} className={styles.Logo} />
          <p className={styles.About}>{t("footer.about")}</p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.id} className={styles.Column}>
            <Eyebrow className={styles.ColumnTitle}>
              {t(column.titleKey)}
            </Eyebrow>
            {column.links.map((link) => (
              <a key={link.labelKey} href={link.href} className={styles.Link}>
                {t(link.labelKey)}
              </a>
            ))}
          </nav>
        ))}

        <div className={styles.Column}>
          <Eyebrow className={styles.ColumnTitle}>{t("footer.contact")}</Eyebrow>
          <p className={styles.Address}>
            <span>{t("site.addressLine1")}</span>
            <span>{t("site.addressLine2")}</span>
          </p>
          <a href={site.phoneHref} className={styles.Accent}>
            {t("site.phone")}
          </a>
          <a href={site.tollFreeHref} className={styles.Accent}>
            {t("site.tollFree")}
          </a>
          <a href={site.emailHref} className={styles.Accent}>
            {t("site.email")}
          </a>
        </div>
      </Container>

      <Container className={styles.Bottom}>
        <span>{t("site.legalName")}</span>
        <span className={styles.Social}>
          {socialLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              className={styles.SocialLink}
              target="_blank"
              rel="noreferrer"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </span>
      </Container>
    </footer>
  );
}
