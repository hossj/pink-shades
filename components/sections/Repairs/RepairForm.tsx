"use client";

import { useFormik } from "formik";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { site } from "@/content/site";
import { t, type TranslationKey } from "@/lib/i18n";
import { repairSchema } from "@/lib/validation";

import styles from "./Repairs.module.scss";

type Status = "idle" | "success" | "error";

export function RepairForm() {
  const [status, setStatus] = useState<Status>("idle");

  const formik = useFormik({
    initialValues: { name: "", phone: "", email: "", message: "" },
    validationSchema: repairSchema,
    onSubmit: async (values) => {
      setStatus("idle");
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
            message: values.message,
            messageLabel: t("repairs.form.messageHeading"),
            topic: t("repairs.form.topic"),
          }),
        });
        if (!response.ok) throw new Error(String(response.status));
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
  });

  const errorFor = (field: keyof typeof formik.values) =>
    formik.touched[field] && formik.errors[field]
      ? t(formik.errors[field] as TranslationKey)
      : undefined;

  if (status === "success") {
    return (
      <div className={styles.Success} role="status">
        <p className={styles.SuccessTitle}>{t("repairs.form.successTitle")}</p>
        <p className={styles.SuccessBody}>{t("repairs.form.successBody")}</p>
      </div>
    );
  }

  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit} noValidate>
      <div className={styles.Row}>
        <Field label={t("repairs.form.nameLabel")} error={errorFor("name")}>
          <Input
            type="text"
            name="name"
            placeholder={t("repairs.form.namePlaceholder")}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("name"))}
          />
        </Field>
        <Field label={t("repairs.form.phoneLabel")} error={errorFor("phone")}>
          <Input
            type="tel"
            name="phone"
            placeholder={t("repairs.form.phonePlaceholder")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("phone"))}
          />
        </Field>
      </div>

      <Field
        label={t("repairs.form.emailLabel")}
        hint={t("repairs.form.optionalHint")}
        error={errorFor("email")}
      >
        <Input
          type="email"
          name="email"
          placeholder={t("repairs.form.emailPlaceholder")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={Boolean(errorFor("email"))}
        />
      </Field>

      <Field
        label={t("repairs.form.messageLabel")}
        error={errorFor("message")}
      >
        <Textarea
          name="message"
          rows={3}
          placeholder={t("repairs.form.messagePlaceholder")}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={Boolean(errorFor("message"))}
        />
      </Field>

      {status === "error" && (
        <p className={styles.FormError} role="alert">
          {t("repairs.form.error")}
        </p>
      )}

      <div className={styles.Actions}>
        <Button type="submit" size="large" disabled={formik.isSubmitting}>
          {formik.isSubmitting
            ? t("repairs.form.submitting")
            : t("repairs.form.submit")}
        </Button>
        <p className={styles.Footnote}>
          {t("repairs.form.orCall")}{" "}
          <a href={site.phoneHref} className={styles.PhoneLink}>
            {t("site.phone")}
          </a>
        </p>
      </div>
    </form>
  );
}
