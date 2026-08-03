import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, isEmailConfigured } from "@/lib/email";
import { siteConfig } from "@/lib/site";

const newsletterSchema = z.object({
  name: z.string().max(80).optional().default(""),
  email: z.string().email("Enter a valid email"),
  website: z.string().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

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
      to: d.email,
      subject: "Welcome to the VOX newsletter",
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0c;color:#f5f4f8;padding:32px;border-radius:16px">
          <h2 style="color:#e9e3fa;margin:0 0 12px">Welcome aboard${d.name ? `, ${d.name}` : ""}</h2>
          <p style="line-height:1.6;color:#a09cab">You're confirmed. Once a month we send engineering notes on digital platforms, performance and AI — no noise, no spam.</p>
          <p style="line-height:1.6;color:#a09cab">— The VOX Digital Agency team</p>
        </div>
      `,
    });

    await sendEmail({
      to: siteConfig.contactTo,
      subject: "New newsletter subscriber",
      html: `<p style="font-family:Inter,sans-serif">${d.name || "New subscriber"}: ${d.email}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("newsletter route error:", err);
    return NextResponse.json(
      { error: "We couldn't subscribe you right now. Please try again." },
      { status: 500 }
    );
  }
}
