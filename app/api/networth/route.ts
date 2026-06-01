import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getNetworth } from "@/app/lib/networth/server";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const data = await getNetworth(userId);
  return NextResponse.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}
