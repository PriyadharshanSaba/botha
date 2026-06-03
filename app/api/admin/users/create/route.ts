import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { getAuthenticatedAdmin } from "@/app/lib/admin";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const email = (body.email as string | undefined)?.trim().toLowerCase();
  const firstName = (body.firstName as string | undefined)?.trim();
  const lastName = (body.lastName as string | undefined)?.trim();

  if (!email || !firstName || !lastName) {
    return NextResponse.json(
      { error: "missing_fields" },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const existing = await db.getUserByEmail(email);
  if (existing) {
    return NextResponse.json(
      { error: "user_exists", existingId: existing.id },
      { status: 409 }
    );
  }

  await db.createUser({ email, firstName, lastName });
  await db.markUserVerified(email);
  const created = await db.getUserByEmail(email);

  return NextResponse.json({ id: created!.id, email: created!.email });
}
