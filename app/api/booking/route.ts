import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, isEmailConfigured, escapeHtml } from "@/lib/email";
import { siteConfig } from "@/lib/site";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  company: z.string().max(120).optional().default(""),
  service: z.string().min(1, "Choose a service").max(80),
  budget: z.string().min(1, "Select a budget range").max(40),
  preferredDate: z.string().max(40).optional().default("Flexible"),
  details: z.string().max(4000).optional().default(""),
  website: z.string().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

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
      subject: `Consultation booking — ${d.service} (${d.name})`,
      replyTo: d.email,
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0c;color:#f5f4f8;padding:32px;border-radius:16px">
          <h2 style="color:#e9e3fa;margin:0 0 24px">New consultation booking</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${row("Name", d.name)}
            ${row("Email", d.email)}
            ${row("Company", d.company || "—")}
            ${row("Service", d.service)}
            ${row("Budget", d.budget)}
            ${row("Preferred start", d.preferredDate)}
            ${row("Details", d.details || "—")}
          </table>
        </div>
      `,
    });

    await sendEmail({
      to: d.email,
      subject: "We received your consultation request",
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0c;color:#f5f4f8;padding:32px;border-radius:16px">
          <h2 style="color:#e9e3fa;margin:0 0 12px">Thanks for reaching out, ${d.name}</h2>
          <p style="line-height:1.6;color:#a09cab">We've received your booking request for <strong style="color:#e9e3fa">${d.service}</strong> and will get back to you within one business day to schedule your call.</p>
          <p style="line-height:1.6;color:#a09cab">— The VOX Digital Agency team</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("booking route error:", err);
    return NextResponse.json(
      { error: "We couldn't submit your booking. Please try again." },
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
