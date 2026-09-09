import { object, string } from "yup";

export const contactMethods = ["text", "email", "call"] as const;
export type ContactMethod = (typeof contactMethods)[number];

export const contactSchema = object({
  firstName: string()
    .trim()
    .max(100)
    .required("contact.form.errors.firstNameRequired"),
  lastName: string().trim().max(100).default(""),
  company: string().trim().max(200).default(""),
  email: string()
    .trim()
    .max(200)
    .email("contact.form.errors.emailInvalid")
    .when("method", {
      is: "email",
      then: (schema) => schema.required("contact.form.errors.emailRequired"),
    })
    .default(""),
  phone: string()
    .trim()
    .max(50)
    .when("method", {
      is: (method: string) => method === "text" || method === "call",
      then: (schema) => schema.required("contact.form.errors.phoneRequired"),
    })
    .default(""),
  method: string().oneOf([...contactMethods, ""]).default(""),
  topic: string().trim().max(100).default(""),
  messageLabel: string().trim().max(60).default(""),
  message: string().trim().max(5000).default(""),
});

export const estimateSchema = object({
  name: string().trim().max(200).required("estimate.errors.nameRequired"),
  phone: string().trim().max(50).required("estimate.errors.phoneRequired"),
  email: string()
    .trim()
    .max(200)
    .email("estimate.errors.emailInvalid")
    .required("estimate.errors.emailRequired"),
  notes: string().trim().max(5000).default(""),
});

export const repairSchema = object({
  name: string().trim().max(200).required("repairs.form.errors.nameRequired"),
  phone: string().trim().max(50).required("repairs.form.errors.phoneRequired"),
  email: string()
    .trim()
    .max(200)
    .email("repairs.form.errors.emailInvalid")
    .default(""),
  message: string()
    .trim()
    .max(5000)
    .required("repairs.form.errors.messageRequired"),
});
