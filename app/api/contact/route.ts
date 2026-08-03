import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, isEmailConfigured, escapeHtml } from "@/lib/email";
import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  company: z.string().max(120).optional().default(""),
  service: z.string().max(80).optional().default(""),
  budget: z.string().max(40).optional().default(""),
  message: z.string().min(10, "Tell us a little more (min 10 characters)").max(4000),
  website: z.string().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json(
        {
          error:
            "Email provider is not configured. Add RESEND_API_KEY to your environment to enable sending.",
        },
        { status: 503 }
      );
    }

    const d = parsed.data;

    await sendEmail({
      to: siteConfig.contactTo,
      subject: `New contact inquiry from ${d.name}`,
      replyTo: d.email,
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0c;color:#f5f4f8;padding:32px;border-radius:16px">
          <h2 style="color:#e9e3fa;margin:0 0 24px">New contact inquiry</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${row("Name", d.name)}
            ${row("Email", d.email)}
            ${row("Company", d.company || "—")}
            ${row("Service", d.service || "—")}
            ${row("Budget", d.budget || "—")}
            ${row("Message", d.message)}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 500 }
    );
  }
}

function row(label: string, value: string): string {
  const safe = escapeHtml(value).replace(/\n/g, "<br/>");
  return `
    <tr>
      <td style="padding:10px 12px;color:#a09cab;vertical-align:top;white-space:nowrap;font-weight:600">${label}</td>
      <td style="padding:10px 12px;color:#f5f4f8">${safe}</td>
    </tr>
  `;
}
