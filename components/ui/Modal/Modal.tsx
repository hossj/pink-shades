"use client";

import { useEffect } from "react";

import { CloseIcon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";
import { t } from "@/lib/i18n";

import styles from "./Modal.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, label, className, children }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.Backdrop} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={cx(styles.Dialog, className)}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t("common.close")}
          onClick={onClose}
          className={styles.Close}
        >
          <CloseIcon size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
