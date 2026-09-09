import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ValidationError } from "yup";

import { buildSubmissionEmail } from "@/lib/email/submission";
import { renderSubmissionEmail } from "@/lib/email/template";
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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = (process.env.CONTACT_EMAIL_TO ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (!apiKey || !from || to.length === 0) {
    console.error("Contact form: Resend is not configured");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const submission = buildSubmissionEmail(values);
  const { html, text } = renderSubmissionEmail(submission);

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: values.email || undefined,
      subject: `${submission.topic} from ${values.firstName} ${values.lastName}`.trim(),
      html,
      text,
    });

    if (error) {
      console.error("Contact form: Resend rejected the message", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form: failed to send", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
