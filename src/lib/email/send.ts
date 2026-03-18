import { Resend } from "resend";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: SendEmailOptions) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY not set — skipping email send");
    return null;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: from ?? "Flenz <onboarding@resend.dev>",
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
  });

  if (error) {
    console.error("[email] Failed to send:", error);
    return null;
  }

  return data;
}
