import { eq } from "drizzle-orm";
import { db } from "@/app/lib/db/connection";
import { users, referralOffers } from "@/app/lib/db/schema";

export type EnableInput =
  | {
      identifier: { kind: "id"; value: string };
      code: string;
      discount: { type: "percent"; value: number } | { type: "flat"; valuePaise: number };
      description?: string;
      expiresAt?: Date | null;
    }
  | {
      identifier: { kind: "email"; value: string };
      code: string;
      discount: { type: "percent"; value: number } | { type: "flat"; valuePaise: number };
      description?: string;
      expiresAt?: Date | null;
    };

export type EnableResult = { offerId: string; userId: string; email: string };

export async function enableReferralOffer(input: EnableInput): Promise<EnableResult> {
  const code = input.code.trim().toUpperCase();
  if (!/^[A-Z0-9_-]{3,20}$/.test(code)) {
    throw new Error("Code must be 3-20 chars of A-Z, 0-9, _ or -");
  }

  if (input.discount.type === "percent") {
    if (!Number.isInteger(input.discount.value) || input.discount.value < 1 || input.discount.value > 100) {
      throw new Error("percent must be integer 1..100");
    }
  } else {
    if (!Number.isInteger(input.discount.valuePaise) || input.discount.valuePaise <= 0) {
      throw new Error("flat paise must be positive integer");
    }
  }

  // Resolve the owner.
  let userRow:
    | { id: string; email: string }
    | undefined;
  if (input.identifier.kind === "id") {
    const rows = await db
      .select({ id: users.id, email: users.email })
      .from(users)
      .where(eq(users.id, input.identifier.value))
      .limit(1);
    userRow = rows[0];
  } else {
    const email = input.identifier.value.trim().toLowerCase();
    const rows = await db
      .select({ id: users.id, email: users.email })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    userRow = rows[0];
  }
  if (!userRow) throw new Error("User not found");

  // Deactivate prior offers (history preserved for past redemptions).
  await db
    .update(referralOffers)
    .set({ active: false })
    .where(eq(referralOffers.ownerUserId, userRow.id));

  // Insert new offer.
  const inserted = await db
    .insert(referralOffers)
    .values({
      code,
      ownerUserId: userRow.id,
      discountPercent: input.discount.type === "percent" ? input.discount.value : null,
      discountFlatPaise: input.discount.type === "flat" ? input.discount.valuePaise : null,
      description: input.description ?? null,
      active: true,
      expiresAt: input.expiresAt ?? null,
    })
    .returning({ code: referralOffers.code });

  // Flip flags.
  await db
    .update(users)
    .set({ canRefer: true, referralCode: code })
    .where(eq(users.id, userRow.id));

  return { offerId: inserted[0].code, userId: userRow.id, email: userRow.email };
}

export async function deactivateReferralOffer(code: string): Promise<void> {
  const trimmed = code.trim().toUpperCase();
  const result = await db
    .update(referralOffers)
    .set({ active: false })
    .where(eq(referralOffers.code, trimmed))
    .returning({ code: referralOffers.code });
  if (result.length === 0) throw new Error("Offer not found");

  // Also clear the user's referral_code pointer if it still points here.
  const offerRows = await db
    .select({ ownerUserId: referralOffers.ownerUserId })
    .from(referralOffers)
    .where(eq(referralOffers.code, trimmed))
    .limit(1);
  const ownerId = offerRows[0]?.ownerUserId;
  if (ownerId) {
    await db
      .update(users)
      .set({ referralCode: null, canRefer: false })
      .where(eq(users.id, ownerId));
  }
}
