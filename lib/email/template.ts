export interface EmailField {
  label: string;
  value: string;
  href?: string;
}

export interface SubmissionEmail {
  topic: string;
  heading: string;
  submittedAt: Date;
  fields: EmailField[];
  message: string;
  messageLabel?: string;
  replyTo?: string;
  phone?: string;
}

const brand = {
  pink: "#c4286f",
  pinkDark: "#a01a58",
  ink: "#2b2226",
  body: "#5c4e55",
  muted: "#8a7a82",
  border: "#f0dde6",
  surface: "#fbf7f9",
  pale: "#f8e1ec",
};

const font =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(date);
}

function renderRow({ label, value, href }: EmailField) {
  const safe = escapeHtml(value);
  const content = href
    ? `<a href="${escapeHtml(href)}" style="color:${brand.pinkDark};text-decoration:none;font-weight:600;">${safe}</a>`
    : safe;

  return `
    <tr>
      <td style="padding:14px 0 0;font:400 11px/1.4 ${font};letter-spacing:1.2px;text-transform:uppercase;color:${brand.muted};">${escapeHtml(label)}</td>
    </tr>
    <tr>
      <td style="padding:3px 0 14px;border-bottom:1px solid ${brand.border};font:600 16px/1.45 ${font};color:${brand.ink};">${content}</td>
    </tr>`;
}

function renderButton(label: string, href: string, primary: boolean) {
  const background = primary ? brand.pink : "#ffffff";
  const color = primary ? "#ffffff" : brand.pinkDark;
  const border = primary ? brand.pink : brand.border;

  return `<a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 24px;margin:0 8px 8px 0;background:${background};border:1px solid ${border};border-radius:999px;font:600 15px/1 ${font};color:${color};text-decoration:none;">${escapeHtml(label)}</a>`;
}

export function renderSubmissionEmail(data: SubmissionEmail) {
  const {
    topic,
    heading,
    submittedAt,
    fields,
    message,
    messageLabel = "In their words",
    replyTo,
    phone,
  } = data;
  const timestamp = formatTimestamp(submittedAt);
  const preheader = fields
    .slice(0, 2)
    .map((field) => `${field.label}: ${field.value}`)
    .join(" · ");

  const actions = [
    replyTo &&
      renderButton(
        "Reply by email",
        `mailto:${replyTo}?subject=${encodeURIComponent(`Re: your ${topic.toLowerCase()} — Pink Blinds & Shutters`)}`,
        true,
      ),
    phone && renderButton("Call back", `tel:${phone.replace(/[^\d+]/g, "")}`, false),
  ]
    .filter(Boolean)
    .join("");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background:${brand.surface};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.surface};padding:32px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border:1px solid ${brand.border};border-radius:18px;overflow:hidden;">
        <tr>
          <td style="background:${brand.pink};padding:26px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font:700 19px/1.2 ${font};letter-spacing:-0.4px;color:#ffffff;">
                  Pink Shades Design Center
                  <div style="margin-top:5px;font:400 11px/1.4 ${font};letter-spacing:1.6px;text-transform:uppercase;color:rgba(255,255,255,0.82);">Blinds &amp; Shutters &middot; McLean, VA</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 32px 8px;">
            <div style="display:inline-block;padding:6px 14px;background:${brand.pale};border-radius:999px;font:600 11px/1 ${font};letter-spacing:1.4px;text-transform:uppercase;color:${brand.pinkDark};">${escapeHtml(topic)}</div>
            <h1 style="margin:16px 0 6px;font:700 26px/1.2 ${font};letter-spacing:-0.6px;color:${brand.ink};">${escapeHtml(heading)}</h1>
            <p style="margin:0;font:400 14px/1.5 ${font};color:${brand.muted};">Submitted ${escapeHtml(timestamp)} ET</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${fields.map(renderRow).join("")}
            </table>
          </td>
        </tr>
        ${
          message
            ? `<tr>
          <td style="padding:24px 32px 0;">
            <div style="font:400 11px/1.4 ${font};letter-spacing:1.2px;text-transform:uppercase;color:${brand.muted};">${escapeHtml(messageLabel)}</div>
            <div style="margin-top:10px;padding:20px 22px;background:${brand.surface};border-left:3px solid ${brand.pink};border-radius:0 12px 12px 0;font:400 16px/1.65 ${font};color:${brand.body};white-space:pre-wrap;">${escapeHtml(message)}</div>
          </td>
        </tr>`
            : ""
        }
        ${
          actions
            ? `<tr><td style="padding:26px 32px 0;">${actions}</td></tr>`
            : ""
        }
        <tr>
          <td style="padding:28px 32px 32px;">
            <div style="border-top:1px solid ${brand.border};padding-top:20px;font:400 13px/1.7 ${font};color:${brand.muted};">
              6830 Elm Street, McLean, VA 22101<br>
              <a href="tel:+17033468533" style="color:${brand.muted};text-decoration:none;">703-346-8533</a> &middot;
              <a href="mailto:info@pinkshadesdesign.com" style="color:${brand.muted};text-decoration:none;">info@pinkshadesdesign.com</a><br>
              This notification was sent by the pinkshadesdesign.com website.
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  const text = [
    `${topic.toUpperCase()} — ${heading}`,
    `Submitted ${timestamp} ET`,
    "",
    ...fields.map((field) => `${field.label}: ${field.value}`),
    ...(message ? ["", `${messageLabel}:`, message] : []),
  ].join("\n");

  return { html, text };
}
