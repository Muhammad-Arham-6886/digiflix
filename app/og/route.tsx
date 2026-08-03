import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function GET() {
  const logoPath = path.join(process.cwd(), "public", "images", "logo", "logo.png");
  let logoBase64: string | undefined;
  try {
    const buffer = fs.readFileSync(logoPath);
    logoBase64 = `data:image/png;base64,${buffer.toString("base64")}`;
  } catch {
    logoBase64 = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0C 0%, #1c142f 55%, #2a1f0e 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            background: "rgba(128,105,191,0.22)",
            borderRadius: "9999px",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            right: "-10%",
            width: "600px",
            height: "400px",
            background: "rgba(201,167,77,0.16)",
            borderRadius: "9999px",
            filter: "blur(90px)",
          }}
        />
        {logoBase64 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoBase64}
            width={760}
            height={276}
            style={{ objectFit: "contain", position: "relative" }}
            alt=""
          />
        ) : (
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 120,
              fontWeight: 800,
              color: "#f5f4f8",
              letterSpacing: "-0.04em",
            }}
          >
            VOX
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 24,
            padding: "14px 28px",
            borderRadius: 9999,
            background: "rgba(128,105,191,0.16)",
            border: "1px solid rgba(181,163,236,0.4)",
            color: "#e9e3fa",
            fontSize: 30,
            letterSpacing: "0.22em",
            fontWeight: 600,
          }}
        >
          ENTERPRISE IT SOLUTIONS &amp; DIGITAL ENGINEERING
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
