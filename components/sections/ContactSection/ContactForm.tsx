"use client";

import { useFormik } from "formik";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { cx } from "@/lib/cx";
import { t, type TranslationKey } from "@/lib/i18n";
import { type ContactMethod, contactMethods, contactSchema } from "@/lib/validation";

import styles from "./ContactForm.module.scss";

type Status = "idle" | "success" | "error";

const methodLabels: Record<ContactMethod, TranslationKey> = {
  text: "contact.form.methodText",
  email: "contact.form.methodEmail",
  call: "contact.form.methodCall",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      method: "email" as ContactMethod,
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      setStatus("idle");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
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

  const emailRequired = formik.values.method === "email";

  if (status === "success") {
    return (
      <div className={styles.Success} role="status">
        <p className={styles.SuccessTitle}>{t("contact.form.successTitle")}</p>
        <p className={styles.SuccessBody}>{t("contact.form.successBody")}</p>
      </div>
    );
  }

  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit} noValidate>
      <div className={styles.Row}>
        <Field
          label={t("contact.form.firstNameLabel")}
          error={errorFor("firstName")}
        >
          <Input
            type="text"
            name="firstName"
            placeholder={t("contact.form.firstNamePlaceholder")}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("firstName"))}
          />
        </Field>
        <Field label={t("contact.form.lastNameLabel")}>
          <Input
            type="text"
            name="lastName"
            placeholder={t("contact.form.lastNamePlaceholder")}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Field>
      </div>

      <div className={styles.Row}>
        <Field
          label={t("contact.form.emailLabel")}
          hint={emailRequired ? undefined : t("contact.form.optionalHint")}
          error={errorFor("email")}
        >
          <Input
            type="email"
            name="email"
            placeholder={t("contact.form.emailPlaceholder")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("email"))}
          />
        </Field>
        <Field
          label={t("contact.form.phoneLabel")}
          hint={emailRequired ? t("contact.form.optionalHint") : undefined}
          error={errorFor("phone")}
        >
          <Input
            type="tel"
            name="phone"
            placeholder={t("contact.form.phonePlaceholder")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(errorFor("phone"))}
          />
        </Field>
      </div>

      <Field
        label={t("contact.form.companyLabel")}
        hint={t("contact.form.optionalHint")}
      >
        <Input
          type="text"
          name="company"
          placeholder={t("contact.form.companyPlaceholder")}
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Field>

      <fieldset className={styles.Methods}>
        <legend className={styles.MethodsLabel}>
          {t("contact.form.methodLabel")}
        </legend>
        <div className={styles.MethodPills}>
          {contactMethods.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={formik.values.method === option}
              onClick={() => formik.setFieldValue("method", option)}
              className={cx(
                styles.MethodPill,
                formik.values.method === option && styles.active,
              )}
            >
              {t(methodLabels[option])}
            </button>
          ))}
        </div>
      </fieldset>

      <Field
        label={t("contact.form.messageLabel")}
        error={errorFor("message")}
      >
        <Textarea
          name="message"
          rows={5}
          placeholder={t("contact.form.messagePlaceholder")}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={Boolean(errorFor("message"))}
        />
      </Field>

      {status === "error" && (
        <p className={styles.Error} role="alert">
          {t("contact.form.error")}
        </p>
      )}

      <Button
        type="submit"
        size="large"
        disabled={formik.isSubmitting}
        className={styles.Submit}
      >
        {formik.isSubmitting
          ? t("contact.form.submitting")
          : t("contact.form.submit")}
      </Button>
    </form>
  );
}
