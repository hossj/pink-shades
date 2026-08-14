"use client";

import Link from "next/link";
import {
  type CSSProperties,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

import { useEstimate } from "@/components/estimate";
import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icon";
import { navLinks, site } from "@/content/site";
import { cx } from "@/lib/cx";
import { t } from "@/lib/i18n";

import styles from "./MobileMenu.module.scss";

const emptySubscribe = () => () => {};

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { openEstimate } = useEstimate();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", close);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", close);
      document.body.style.overflow = "";
    };
  }, [open]);

  const shade = (
    <div className={cx(styles.Shade, open && styles.shadeOpen)}>
      <nav aria-label={t("common.menuLabel")} className={styles.Nav}>
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={styles.NavLink}
            style={{ "--_delay": `${120 + index * 55}ms` } as CSSProperties}
            tabIndex={open ? undefined : -1}
          >
            {t(link.labelKey)}
          </Link>
        ))}
      </nav>

      <div
        className={styles.Actions}
        style={
          { "--_delay": `${120 + navLinks.length * 55}ms` } as CSSProperties
        }
      >
        <Button
          type="button"
          size="large"
          className={styles.Cta}
          tabIndex={open ? undefined : -1}
          onClick={() => {
            setOpen(false);
            openEstimate();
          }}
        >
          {t("nav.freeEstimate")}
        </Button>
        <a
          href={site.phoneHref}
          className={styles.Phone}
          tabIndex={open ? undefined : -1}
        >
          <PhoneIcon size={18} />
          {t("site.phone")}
        </a>
      </div>
    </div>
  );

  return (
    <div className={styles.MobileMenu}>
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
        onClick={() => setOpen(!open)}
        className={cx(styles.Burger, open && styles.open)}
      >
        <span aria-hidden="true" className={styles.BurgerLine} />
        <span aria-hidden="true" className={styles.BurgerLine} />
      </button>

      {mounted && createPortal(shade, document.body)}
    </div>
  );
}
