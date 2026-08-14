"use client";

import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Modal } from "@/components/ui/Modal";
import { estimateInterests, media } from "@/content/content";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

import { useEstimate } from "./EstimateProvider";
import styles from "./EstimateModal.module.scss";

export function EstimateModal() {
  const { open, closeEstimate } = useEstimate();

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

        <form
          className={styles.Form}
          onSubmit={(event) => {
            event.preventDefault();
            closeEstimate();
          }}
        >
          <div className={styles.Row}>
            <Field label={t("estimate.nameLabel")}>
              <Input
                type="text"
                name="name"
                placeholder={t("estimate.namePlaceholder")}
                required
              />
            </Field>
            <Field label={t("estimate.phoneLabel")}>
              <Input
                type="tel"
                name="phone"
                placeholder={t("estimate.phonePlaceholder")}
                required
              />
            </Field>
          </div>

          <Field label={t("estimate.emailLabel")}>
            <Input
              type="email"
              name="email"
              placeholder={t("estimate.emailPlaceholder")}
              required
            />
          </Field>

          <Field label={t("estimate.interestLabel")}>
            <Select name="interest" defaultValue={t(estimateInterests[0])}>
              {estimateInterests.map((interestKey) => (
                <option key={interestKey}>{t(interestKey)}</option>
              ))}
            </Select>
          </Field>

          <Field label={t("estimate.notesLabel")} hint={t("estimate.notesHint")}>
            <Textarea
              name="notes"
              rows={3}
              placeholder={t("estimate.notesPlaceholder")}
            />
          </Field>

          <Button type="submit" size="large" className={styles.Submit}>
            {t("estimate.submit")}
          </Button>

          <p className={styles.Footnote}>
            {t("estimate.orCall")}{" "}
            <a href={site.phoneHref} className={styles.PhoneLink}>
              {t("site.phone")}
            </a>
          </p>
        </form>
      </div>
    </Modal>
  );
}
