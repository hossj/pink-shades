import type { InferType } from "yup";

import type { contactSchema } from "@/lib/validation";

import type { EmailField, SubmissionEmail } from "./template";

export type ContactSubmission = InferType<typeof contactSchema>;

const methodLabels: Record<string, string> = {
  text: "Text message",
  email: "Email",
  call: "Phone call",
};

/** Shapes a validated form submission into the notification email. */
export function buildSubmissionEmail(
  values: ContactSubmission,
  submittedAt = new Date(),
): SubmissionEmail {
  const fullName = `${values.firstName} ${values.lastName}`.trim();
  const topic = values.topic || "Website enquiry";

  const fields = [
    { label: "Name", value: fullName },
    values.company && { label: "Company", value: values.company },
    values.email && {
      label: "Email",
      value: values.email,
      href: `mailto:${values.email}`,
    },
    values.phone && {
      label: "Phone",
      value: values.phone,
      href: `tel:${values.phone.replace(/[^\d+]/g, "")}`,
    },
    values.method && {
      label: "Preferred contact",
      value: methodLabels[values.method] ?? values.method,
    },
  ].filter(Boolean) as EmailField[];

  return {
    topic,
    heading: `${fullName} sent a ${topic.toLowerCase()}`,
    submittedAt,
    fields,
    message: values.message,
    messageLabel: values.messageLabel || undefined,
    replyTo: values.email || undefined,
    phone: values.phone || undefined,
  };
}
