import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export function isEmailConfigured(): boolean {
  return Boolean(resend);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type SendEmailArgs = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, html, replyTo }: SendEmailArgs): Promise<void> {
  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const { error } = await resend.emails.send({
    from: siteConfig.emailFrom,
    to,
    subject,
    html,
    replyTo,
  });
  if (error) {
    throw new Error(error.message);
  }
}
