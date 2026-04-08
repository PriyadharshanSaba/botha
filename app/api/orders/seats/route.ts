import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// Returns live seat counts per plan — public endpoint
export async function GET() {
  const [founding, earlyAccess] = await Promise.all([
    db.getSubscriptionCount("founding"),
    db.getSubscriptionCount("early_access"),
  ]);
  return NextResponse.json({ founding, early_access: earlyAccess });
}
