import { EstimateButton } from "@/components/estimate";
import { PhoneIcon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site } from "@/content/site";
import { t } from "@/lib/i18n";

import styles from "./Header.module.scss";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Bar}>
        <a href="/" aria-label={t("site.name")} className={styles.Brand}>
          <Logo height={58} priority />
        </a>

        <nav className={styles.Nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.NavLink}>
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className={styles.Actions}>
          <a href={site.phoneHref} className={styles.Phone}>
            <PhoneIcon size={18} />
            {t("site.phone")}
          </a>
          <EstimateButton className={styles.Cta}>
            {t("nav.freeEstimate")}
          </EstimateButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
