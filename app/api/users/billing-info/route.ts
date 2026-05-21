import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import type { BillingInfo } from "@/app/lib/db/types";
import { getAuthenticatedUser } from "@/app/lib/auth";

export async function POST(req: NextRequest) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = user.id;

  const body = await req.json();
  const { phone, addressLine1, addressLine2, city, state, pincode, gstin, pan } = body;

  if (!phone || !addressLine1 || !city || !state || !pincode) {
    return NextResponse.json({ error: "Missing required billing fields" }, { status: 400 });
  }

  if (!/^\d{6}$/.test(pincode)) {
    return NextResponse.json({ error: "Invalid PIN code" }, { status: 400 });
  }

  if (!/^\d{10}$/.test(phone)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const info: BillingInfo = {
    phone,
    addressLine1,
    ...(addressLine2 ? { addressLine2 } : {}),
    city,
    state,
    pincode,
    ...(gstin ? { gstin } : {}),
    ...(pan   ? { pan }   : {}),
  };

  await db.saveBillingInfo(userId, info);

  return NextResponse.json({ success: true });
}
