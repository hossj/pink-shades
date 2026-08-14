"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Modal } from "@/components/ui/Modal";
import { media } from "@/content/home";
import { t } from "@/lib/i18n";

import { EstimateForm } from "./EstimateForm";
import { useEstimate } from "./EstimateProvider";
import styles from "./EstimateModal.module.scss";

export function EstimateModal() {
  const { open, note, closeEstimate } = useEstimate();

  return (
    <Modal
      open={open}
      onClose={closeEstimate}
      label={t("estimate.title")}
      className={styles.Dialog}
    >
      <CoverImage
        src={media.rollerShades}
        alt={t("estimate.imageAlt")}
        scrim="soft"
        sizes="(max-width: 991px) 100vw, 560px"
        className={styles.Media}
      />

      <div className={styles.Body}>
        <Eyebrow>{t("estimate.eyebrow")}</Eyebrow>
        <h2 className={styles.Title}>{t("estimate.title")}</h2>
        <p className={styles.Description}>{t("estimate.description")}</p>

        <EstimateForm key={note} note={note} onSubmitted={closeEstimate} />
      </div>
    </Modal>
  );
}
