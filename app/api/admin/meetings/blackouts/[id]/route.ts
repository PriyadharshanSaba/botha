import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { db } from "@/app/lib/db";
import { deleteMeetingEvent } from "@/app/lib/google/calendar";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function DELETE(req: NextRequest, ctx: Ctx) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const { id } = await ctx.params;
  const blackout = await db.getBlackoutById(id);
  if (blackout?.googleEventId) {
    await deleteMeetingEvent(blackout.googleEventId);
  }
  await db.deleteBlackout(id);
  return NextResponse.json({ success: true });
}
