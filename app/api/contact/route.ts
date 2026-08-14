import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ValidationError } from "yup";

import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  let values;
  try {
    values = await contactSchema.validate(payload, {
      stripUnknown: true,
      abortEarly: false,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    throw error;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } =
    process.env;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !to || !from) {
    console.error("Contact form: SMTP is not configured");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const lines = [
    `Name: ${values.firstName} ${values.lastName}`.trim(),
    values.company && `Company: ${values.company}`,
    values.email && `Email: ${values.email}`,
    values.phone && `Phone: ${values.phone}`,
    `Preferred contact method: ${values.method}`,
    "",
    values.message,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: values.email || undefined,
      subject: `Website contact from ${values.firstName} ${values.lastName}`.trim(),
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("Contact form: failed to send", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
