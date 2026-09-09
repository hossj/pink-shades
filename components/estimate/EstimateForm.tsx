"use client";

import { useFormik } from "formik";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { site } from "@/content/site";
import { t, type TranslationKey } from "@/lib/i18n";
import { estimateSchema } from "@/lib/validation";

import styles from "./EstimateModal.module.scss";

interface Props {
  note: string;
  onSubmitted: () => void;
}

export function EstimateForm({ note, onSubmitted }: Props) {
  const [failed, setFailed] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      notes: note,
    },
    validationSchema: estimateSchema,
    onSubmit: async (values) => {
      setFailed(false);
      const [firstName, ...rest] = values.name.trim().split(" ");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName: rest.join(" "),
            email: values.email,
            phone: values.phone,
            message: values.notes,
            messageLabel: t("estimate.notesLabel"),
            topic: t("estimate.topic"),
          }),
        });
        if (!response.ok) throw new Error(String(response.status));
        onSubmitted();
      } catch {
        setFailed(true);
      }
    },
  });

  const errorFor = (field: keyof typeof formik.values) =>
    formik.touched[field] && formik.errors[field]
      ? t(formik.errors[field] as TranslationKey)
      : undefined;

  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit} noValidate>
      <div className={styles.Row}>
        <Field label={t("estimate.nameLabel")} error={errorFor("name")}>
          <Input
            type="text"
            name="name"
            placeholder={t("estimate.namePlaceholder")}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("name"))}
          />
        </Field>
        <Field label={t("estimate.phoneLabel")} error={errorFor("phone")}>
          <Input
            type="tel"
            name="phone"
            placeholder={t("estimate.phonePlaceholder")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("phone"))}
          />
        </Field>
      </div>

      <Field label={t("estimate.emailLabel")} error={errorFor("email")}>
        <Input
          type="email"
          name="email"
          placeholder={t("estimate.emailPlaceholder")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={Boolean(errorFor("email"))}
        />
      </Field>

      <Field label={t("estimate.notesLabel")} hint={t("estimate.notesHint")}>
        <Textarea
          name="notes"
          rows={3}
          placeholder={t("estimate.notesPlaceholder")}
          value={formik.values.notes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Field>

      {failed && (
        <p className={styles.Error} role="alert">
          {t("estimate.error")}
        </p>
      )}

      <Button
        type="submit"
        size="large"
        disabled={formik.isSubmitting}
        className={styles.Submit}
      >
        {formik.isSubmitting ? t("estimate.submitting") : t("estimate.submit")}
      </Button>

      <p className={styles.Footnote}>
        {t("estimate.orCall")}{" "}
        <a href={site.phoneHref} className={styles.PhoneLink}>
          {t("site.phone")}
        </a>
      </p>
    </form>
  );
}
