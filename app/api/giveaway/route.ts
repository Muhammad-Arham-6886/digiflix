import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, isEmailConfigured, escapeHtml } from "@/lib/email";
import { siteConfig } from "@/lib/site";

const giveawaySchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone/WhatsApp number").max(30),
  businessName: z.string().min(2, "Business or brand name is required").max(120),
  websiteType: z.string().min(1, "Please select a website type").max(80),
  hasExistingWebsite: z.string().max(20).optional().default("No"),
  existingUrl: z.string().max(200).optional().default(""),
  projectGoals: z.string().min(10, "Tell us a bit about your business and goals (min 10 characters)").max(4000),
  timeline: z.string().max(80).optional().default("Immediately"),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the giveaway terms",
  }),
  website: z.string().optional().default(""), // Honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = giveawaySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Honeypot check
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const d = parsed.data;

    if (isEmailConfigured()) {
      try {
        await sendEmail({
          to: siteConfig.contactTo,
          subject: `🎉 FREE Website Giveaway Application — ${d.businessName} (${d.fullName})`,
          replyTo: d.email,
          html: `
            <div style="font-family:Inter,system-ui,sans-serif;max-width:640px;margin:0 auto;background:#0a0a0c;color:#f5f4f8;padding:36px;border-radius:20px;border:1px solid rgba(201,167,77,0.3)">
              <div style="margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:18px">
                <span style="background:rgba(201,167,77,0.18);color:#d7b867;font-size:12px;font-weight:700;letter-spacing:1px;padding:4px 10px;border-radius:999px;text-transform:uppercase">
                  Official Giveaway
                </span>
                <h2 style="color:#f5f2fb;margin:12px 0 6px;font-size:22px">New Free Website Giveaway Application</h2>
                <p style="color:#a09cab;font-size:14px;margin:0">Applicant applied via the Free Website Giveaway landing page.</p>
              </div>

              <table style="width:100%;border-collapse:collapse;font-size:14px">
                ${row("Applicant Name", d.fullName)}
                ${row("Email Address", d.email)}
                ${row("Phone / WhatsApp", d.phone)}
                ${row("Business / Brand", d.businessName)}
                ${row("Website Type", d.websiteType)}
                ${row("Existing Website?", d.hasExistingWebsite)}
                ${row("Current URL", d.existingUrl || "None (New Project)")}
                ${row("Readiness Timeline", d.timeline)}
                ${row("Project Vision & Goals", d.projectGoals)}
              </table>

              <div style="margin-top:24px;padding:16px;background:#16151d;border-radius:12px;border:1px solid rgba(255,255,255,0.06);font-size:12px;color:#a09cab">
                Note: Candidate agreed that free giveaway covers custom UI/UX design & development; domain/hosting are separate client responsibilities.
              </div>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Failed to send giveaway email via Resend:", emailErr);
      }
    } else {
      console.log("Giveaway submission received (demo mode - RESEND_API_KEY not configured):", d);
    }

    return NextResponse.json({ ok: true, message: "Application received successfully!" });
  } catch (err) {
    console.error("giveaway route error:", err);
    return NextResponse.json(
      { error: "We couldn't process your application. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

function row(label: string, value: string): string {
  const safe = escapeHtml(value).replace(/\n/g, "<br/>");
  return `
    <tr style="border-bottom:1px solid rgba(255,255,255,0.06)">
      <td style="padding:10px 12px;color:#a09cab;vertical-align:top;white-space:nowrap;font-weight:600;width:35%">${label}</td>
      <td style="padding:10px 12px;color:#f5f4f8">${safe}</td>
    </tr>
  `;
}
