import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

import { sendEmail } from "@/lib/email/send";
import { waitlistConfirmationEmail } from "@/lib/email/templates";

function getRedis() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function POST(request: Request) {
  try {
    const { email, role } = (await request.json()) as { email: string; role: string };

    if (!email || !role) {
      return NextResponse.json({ error: "Email and role are required" }, { status: 400 });
    }

    const entry = { email, role, timestamp: new Date().toISOString() };
    const redis = getRedis();

    if (redis) {
      await redis.lpush("waitlist", JSON.stringify(entry));
    } else {
      console.log("[WAITLIST]", JSON.stringify(entry));
    }

    // Send confirmation email (non-blocking — don't fail the request if email fails)
    sendEmail({
      to: email,
      subject: "You're on the Flenz waitlist!",
      html: waitlistConfirmationEmail(role),
    }).catch((err) => console.error("[email] Waitlist confirmation failed:", err));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
