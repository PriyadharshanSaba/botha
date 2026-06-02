# Referral Codes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow manually-enabled users to share a referral code; new buyers can apply the code on the plans screen for a percent or flat discount; all redemptions stored as an immutable ledger.

**Architecture:** Two new tables (`referral_offers`, `referral_redemptions`) plus two columns on `users` (`can_refer`, `referral_code`). New API surface (`/api/referral/validate`, extended `/api/me`, `/api/account`). Plans page gains a code-input row; order creation re-validates server-side and recomputes price. New `/account` page hosts referral identity + share link. Codes assigned manually via a node script.

**Tech Stack:** Next.js 16 (App Router) · Drizzle ORM 0.45 · Postgres · TypeScript · React 19.

---

## File Structure

**New:**
- `app/lib/db/migrations/007_referral_codes.sql` — DB migration
- `app/lib/db/types.ts` — extend with referral types
- `app/lib/referral/types.ts` — domain types (`ReferralOffer`, `ReferralValidationResult`)
- `app/lib/referral/server.ts` — server-only helpers (validate, apply, record)
- `app/lib/referral/client.ts` — client utility (read `?ref=` from URL, persist to sessionStorage)
- `app/api/referral/validate/route.ts` — POST endpoint
- `app/api/account/route.ts` — GET endpoint returning referral identity
- `app/account/page.tsx` — referrer-facing UI
- `app/account/account.css` — page styling
- `scripts/enable-referrer.ts` — manual SQL helper (run via `tsx`)

**Modified:**
- `app/lib/db/schema.ts` — add `canRefer`, `referralCode` cols + new tables
- `app/lib/db/postgres.ts` — new methods: `getReferralOffer(code)`, `recordRedemption(...)`, `getReferralIdentity(userId)`
- `app/api/me/route.ts` — return `canRefer` + `referralCode`
- `app/api/orders/create/route.ts` — accept `referralCode`, validate, apply discount, persist on subscription
- `app/api/orders/verify/route.ts` — insert `referral_redemptions` row on successful payment
- `app/api/webhooks/razorpay/route.ts` — insert `referral_redemptions` row on webhook (idempotent via UNIQUE)
- `app/plans/page.tsx` — referral input UI in Step 1, pass code to order create
- `app/components/Header.tsx` — show referral code row in account dropdown when `canRefer`
- `app/context/LanguageContext.tsx` — add i18n keys: `referralCode`, `applyCode`, `codeApplied`, `invalidCode` (reuse existing `account` key for dropdown link)

---

## Data Model (final)

```sql
-- 007_referral_codes.sql

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS can_refer       boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS referral_code   text;

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_referral_code
  ON users (referral_code)
  WHERE referral_code IS NOT NULL;

ALTER TABLE subscriptions
  ADD COLUMN IF NOT EXISTS referral_code         text,
  ADD COLUMN IF NOT EXISTS original_amount_paise integer;

CREATE TABLE IF NOT EXISTS referral_offers (
  code              text PRIMARY KEY,
  owner_user_id     text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  discount_percent  integer,
  discount_flat_paise integer,
  description       text,
  active            boolean NOT NULL DEFAULT true,
  created_at        timestamp NOT NULL DEFAULT now(),
  expires_at        timestamp,
  CHECK (
    (discount_percent IS NOT NULL AND discount_flat_paise IS NULL)
    OR (discount_percent IS NULL AND discount_flat_paise IS NOT NULL)
  )
);

CREATE INDEX IF NOT EXISTS idx_referral_offers_owner
  ON referral_offers (owner_user_id);

CREATE TABLE IF NOT EXISTS referral_redemptions (
  id                 serial PRIMARY KEY,
  code               text NOT NULL REFERENCES referral_offers(code) ON DELETE RESTRICT,
  referrer_user_id   text NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  referee_user_id    text NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  razorpay_order_id  text NOT NULL,
  applied_discount_paise integer NOT NULL,
  redeemed_at        timestamp NOT NULL DEFAULT now(),
  UNIQUE (razorpay_order_id)
);

CREATE INDEX IF NOT EXISTS idx_redemptions_referrer
  ON referral_redemptions (referrer_user_id);
CREATE INDEX IF NOT EXISTS idx_redemptions_referee
  ON referral_redemptions (referee_user_id);
```

Rules enforced in code:
- Self-referral blocked (`referrer_user_id != referee_user_id`).
- Test-email users skip referral entirely (matches existing `isTestEmail` bypass pattern).
- One offer row per active code (PK). Owner can hold only one active code at a time; new code = deactivate old, insert new.
- Reuse: unlimited — multiple referees may use the same code, including the same referee in separate orders (UNIQUE on `razorpay_order_id` only prevents double-credit per order).
- Discount floors order amount at `100` paise (₹1) to keep Razorpay happy.

---

## Tasks

### Task 1: DB migration + Drizzle schema

**Files:**
- Create: `app/lib/db/migrations/007_referral_codes.sql`
- Modify: `app/lib/db/schema.ts`
- Modify: `app/lib/db/types.ts`

- [ ] **Step 1: Write migration SQL**

Create `app/lib/db/migrations/007_referral_codes.sql` with the SQL block from the "Data Model" section above (verbatim).

- [ ] **Step 2: Add Drizzle tables**

Append to `app/lib/db/schema.ts` (after the `networthData` block):

```ts
export const referralOffers = pgTable("referral_offers", {
  code: text("code").primaryKey(),
  ownerUserId: text("owner_user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  discountPercent: integer("discount_percent"),
  discountFlatPaise: integer("discount_flat_paise"),
  description: text("description"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at"),
}, (table) => ({
  ownerIdx: index("idx_referral_offers_owner").on(table.ownerUserId),
}));

export const referralRedemptions = pgTable("referral_redemptions", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().references(() => referralOffers.code, { onDelete: "restrict" }),
  referrerUserId: text("referrer_user_id").notNull().references(() => users.id, { onDelete: "restrict" }),
  refereeUserId: text("referee_user_id").notNull().references(() => users.id, { onDelete: "restrict" }),
  razorpayOrderId: text("razorpay_order_id").notNull().unique(),
  appliedDiscountPaise: integer("applied_discount_paise").notNull(),
  redeemedAt: timestamp("redeemed_at").defaultNow().notNull(),
}, (table) => ({
  referrerIdx: index("idx_redemptions_referrer").on(table.referrerUserId),
  refereeIdx: index("idx_redemptions_referee").on(table.refereeUserId),
}));
```

Modify the `users` table block — add two columns inside the `pgTable("users", { ... })` object, after `billingInfo`:

```ts
  canRefer: boolean("can_refer").notNull().default(false),
  referralCode: text("referral_code"),
```

Modify the `subscriptions` table block — add two columns inside its `pgTable("subscriptions", { ... })` object, after `activatedAt`:

```ts
  referralCode: text("referral_code"),
  originalAmountPaise: integer("original_amount_paise"),
```

- [ ] **Step 3: Add types**

Append to `app/lib/db/types.ts`:

```ts
export type ReferralOffer = {
  code: string;
  ownerUserId: string;
  discountPercent: number | null;
  discountFlatPaise: number | null;
  description: string | null;
  active: boolean;
  createdAt: Date;
  expiresAt: Date | null;
};

export type ReferralIdentity = {
  canRefer: boolean;
  referralCode: string | null;
  offer: ReferralOffer | null;
};

export type ReferralValidationResult =
  | { valid: true; code: string; description: string | null; discountPaise: number }
  | { valid: false; error: string };
```

Also update existing types in `app/lib/db/types.ts`:

- `User` (lines 12-19): add two fields
  ```ts
  canRefer: boolean;
  referralCode: string | null;
  ```
- `Subscription` (lines 36-46): add two fields
  ```ts
  referralCode: string | null;
  originalAmountPaise: number | null;
  ```
- `CreateSubscriptionInput` (lines 48-53): add two optional fields
  ```ts
  referralCode?: string | null;
  originalAmountPaise?: number | null;
  ```

- [ ] **Step 4: Run migration**

```bash
psql "$DATABASE_URL" -f app/lib/db/migrations/007_referral_codes.sql
```

Acceptance: `psql "$DATABASE_URL" -c "\d referral_offers"` lists the expected columns; `\d referral_redemptions` lists `id, code, referrer_user_id, referee_user_id, razorpay_order_id, applied_discount_paise, redeemed_at`; `\d users` shows `can_refer` and `referral_code`.

- [ ] **Step 5: Build check**

```bash
npm run build
```

Expected: PASS, zero type errors.

- [ ] **Step 6: Commit**

```bash
git add app/lib/db/migrations/007_referral_codes.sql app/lib/db/schema.ts app/lib/db/types.ts
git commit -m "feat(referral): add schema + migration for referral codes"
```

---

### Task 2: DB facade methods

**Files:**
- Modify: `app/lib/db/postgres.ts`

- [ ] **Step 1: Add `getReferralOffer`**

Add method inside the `PostgresDB` class:

```ts
async getReferralOffer(code: string): Promise<ReferralOffer | null> {
  const rows = await this.client
    .select()
    .from(referralOffers)
    .where(eq(referralOffers.code, code))
    .limit(1);
  if (rows.length === 0) return null;
  const r = rows[0];
  return {
    code: r.code,
    ownerUserId: r.ownerUserId,
    discountPercent: r.discountPercent,
    discountFlatPaise: r.discountFlatPaise,
    description: r.description,
    active: r.active,
    createdAt: r.createdAt,
    expiresAt: r.expiresAt,
  };
}
```

Add `referralOffers, referralRedemptions` to the imports from `./schema` at the top of the file; add `ReferralOffer` to imports from `./types`.

- [ ] **Step 2: Add `getReferralIdentity`**

```ts
async getReferralIdentity(userId: string): Promise<ReferralIdentity> {
  const user = await this.getUserById(userId);
  if (!user) return { canRefer: false, referralCode: null, offer: null };
  const offer = user.referralCode ? await this.getReferralOffer(user.referralCode) : null;
  return { canRefer: user.canRefer, referralCode: user.referralCode, offer };
}
```

- [ ] **Step 3: Add `recordRedemption`**

```ts
async recordRedemption(input: {
  code: string;
  referrerUserId: string;
  refereeUserId: string;
  razorpayOrderId: string;
  appliedDiscountPaise: number;
}): Promise<void> {
  await this.client.insert(referralRedemptions).values({
    code: input.code,
    referrerUserId: input.referrerUserId,
    refereeUserId: input.refereeUserId,
    razorpayOrderId: input.razorpayOrderId,
    appliedDiscountPaise: input.appliedDiscountPaise,
  }).onConflictDoNothing(); // idempotent if verify re-runs
}
```

- [ ] **Step 4: Verify `getUserById` passthrough**

Existing `getUserById` (`postgres.ts:29-32`) returns the raw Drizzle row:

```ts
async getUserById(id: string) {
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0] || null;
}
```

Once the schema in Task 1 Step 2 adds `canRefer` + `referralCode` to the `users` Drizzle table, the row already includes those fields. No mapping change required — only confirm via `npm run build` that the `User` type (updated in Task 1 Step 3) lines up with what `getUserById` actually returns. If TS complains, add an explicit return-type annotation `Promise<User | null>` and adjust the select projection if needed.

- [ ] **Step 5: Build check**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add app/lib/db/postgres.ts
git commit -m "feat(referral): add db facade methods for referral offers + redemptions"
```

---

### Task 3: Referral domain helpers (validation, pricing)

**Files:**
- Create: `app/lib/referral/server.ts`
- Create: `app/lib/referral/types.ts`

- [ ] **Step 1: Domain types**

Create `app/lib/referral/types.ts`:

```ts
import type { ReferralOffer } from "@/app/lib/db/types";

export type ApplyResult = {
  ok: true;
  code: string;
  description: string | null;
  discountPaise: number;
  finalPaise: number;
} | {
  ok: false;
  error: "not_found" | "inactive" | "expired" | "self_referral" | "invalid_state";
};

export type { ReferralOffer };
```

- [ ] **Step 2: Server helper — `applyReferral`**

Create `app/lib/referral/server.ts`:

```ts
import { db } from "@/app/lib/db";
import type { ApplyResult } from "./types";

const MIN_FINAL_PAISE = 100; // ₹1 floor for Razorpay

export async function applyReferral(opts: {
  code: string;
  refereeUserId: string;
  basePaise: number;
}): Promise<ApplyResult> {
  const code = opts.code.trim().toUpperCase();
  if (!code) return { ok: false, error: "not_found" };

  const offer = await db.getReferralOffer(code);
  if (!offer) return { ok: false, error: "not_found" };
  if (!offer.active) return { ok: false, error: "inactive" };
  if (offer.expiresAt && offer.expiresAt.getTime() < Date.now()) {
    return { ok: false, error: "expired" };
  }
  if (offer.ownerUserId === opts.refereeUserId) {
    return { ok: false, error: "self_referral" };
  }

  let discountPaise = 0;
  if (offer.discountPercent != null) {
    discountPaise = Math.round((opts.basePaise * offer.discountPercent) / 100);
  } else if (offer.discountFlatPaise != null) {
    discountPaise = offer.discountFlatPaise;
  } else {
    return { ok: false, error: "invalid_state" };
  }

  let finalPaise = opts.basePaise - discountPaise;
  if (finalPaise < MIN_FINAL_PAISE) {
    finalPaise = MIN_FINAL_PAISE;
    discountPaise = opts.basePaise - MIN_FINAL_PAISE;
  }

  return {
    ok: true,
    code,
    description: offer.description,
    discountPaise,
    finalPaise,
  };
}

export function normaliseCode(raw: string): string {
  return raw.trim().toUpperCase().slice(0, 32);
}
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/lib/referral
git commit -m "feat(referral): add applyReferral helper with self-referral + expiry guards"
```

---

### Task 4: Validate API route

**Files:**
- Create: `app/api/referral/validate/route.ts`

- [ ] **Step 1: Implement endpoint**

Create file:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { PLANS, effectivePrice } from "@/app/lib/plans";
import { isTestEmail } from "@/app/lib/utils/otp";
import { applyReferral, normaliseCode } from "@/app/lib/referral/server";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ valid: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as { code?: string; planId?: string } | null;
  if (!body?.code || !body?.planId) {
    return NextResponse.json({ valid: false, error: "Missing code or planId" }, { status: 400 });
  }

  const plan = PLANS.find((p) => p.id === body.planId);
  if (!plan) {
    return NextResponse.json({ valid: false, error: "Unknown plan" }, { status: 400 });
  }

  const user = await db.getUserById(userId);
  if (!user) {
    return NextResponse.json({ valid: false, error: "Unauthorized" }, { status: 401 });
  }
  if (isTestEmail(user.email)) {
    return NextResponse.json({ valid: false, error: "Test users cannot use referral codes" }, { status: 400 });
  }

  const basePaise = Math.round(effectivePrice(plan, false)) * 100;
  const result = await applyReferral({
    code: normaliseCode(body.code),
    refereeUserId: userId,
    basePaise,
  });

  if (!result.ok) {
    const msgMap: Record<string, string> = {
      not_found: "Invalid code",
      inactive: "Code is inactive",
      expired: "Code expired",
      self_referral: "Cannot use your own code",
      invalid_state: "Code misconfigured — contact support",
    };
    return NextResponse.json({ valid: false, error: msgMap[result.error] ?? result.error }, { status: 200 });
  }

  return NextResponse.json({
    valid: true,
    code: result.code,
    description: result.description,
    discountPaise: result.discountPaise,
    finalPaise: result.finalPaise,
  });
}
```

- [ ] **Step 2: Manual smoke**

```bash
npm run dev
# in another terminal, with a logged-in uid cookie:
curl -s http://localhost:3000/api/referral/validate \
  -H 'Content-Type: application/json' \
  -b 'uid=<some-user-id>' \
  -d '{"code":"NONEXISTENT","planId":"founding"}'
```

Expected JSON: `{"valid":false,"error":"Invalid code"}`.

- [ ] **Step 3: Commit**

```bash
git add app/api/referral/validate/route.ts
git commit -m "feat(referral): POST /api/referral/validate"
```

---

### Task 5: Wire discount into order create + redemption insert into verify + webhook

**Files:**
- Modify: `app/lib/db/postgres.ts` — `createSubscription` accepts referral fields
- Modify: `app/api/orders/create/route.ts` — apply discount, persist on subscription
- Modify: `app/api/orders/verify/route.ts` — insert redemption (client path)
- Modify: `app/api/webhooks/razorpay/route.ts` — insert redemption (webhook path; same UNIQUE keeps it idempotent)

The migration + Drizzle schema for `subscriptions.referral_code` and `subscriptions.original_amount_paise` were already added in Task 1. No new SQL here.

- [ ] **Step 1: Extend `createSubscription`**

In `app/lib/db/postgres.ts`, modify `createSubscription` (lines 223-235) to accept + persist the two new fields. New body:

```ts
async createSubscription(input: CreateSubscriptionInput): Promise<Subscription> {
  const id = crypto.randomUUID();
  await db.insert(subscriptions).values({
    id,
    userId: input.userId,
    planId: input.planId,
    status: "pending",
    razorpayOrderId: input.razorpayOrderId,
    amountPaise: input.amountPaise,
    referralCode: input.referralCode ?? null,
    originalAmountPaise: input.originalAmountPaise ?? null,
    createdAt: new Date(),
  });
  return (await db.select().from(subscriptions).where(eq(subscriptions.id, id)).limit(1))[0] as Subscription;
}
```

(`CreateSubscriptionInput` already updated in Task 1 Step 3.)

- [ ] **Step 2: Update `/api/orders/create`**

Modify `app/api/orders/create/route.ts`.

Add import at top:
```ts
import { applyReferral, normaliseCode } from "@/app/lib/referral/server";
```

Change the body destructure (line 29):
```ts
const { planId, referralCode: rawCode } = await req.json();
```

After `const tax = computeInvoiceTax(taxablePaise, buyerStateCode, CURRENT_SUPPLIER);` and `const amount = tax.totalPaise;` (currently lines 48-49), **replace** the existing `amount` variable usage with this discount-aware block. Insert immediately after `const amount = tax.totalPaise;`:

```ts
// Discount on the pre-GST taxable base so GST is recomputed on the discounted amount.
let finalTaxablePaise = taxablePaise;
let appliedReferralCode: string | null = null;

if (rawCode && !isTest) {
  const referral = await applyReferral({
    code: normaliseCode(rawCode),
    refereeUserId: userId,
    basePaise: taxablePaise,
  });
  if (referral.ok) {
    finalTaxablePaise = taxablePaise - referral.discountPaise;
    appliedReferralCode = referral.code;
  }
  // Silently ignore invalid codes server-side; UI already showed validation.
}

const finalTax    = computeInvoiceTax(finalTaxablePaise, buyerStateCode, CURRENT_SUPPLIER);
const finalAmount = finalTax.totalPaise;
```

Then update the three downstream usages — replace `amount` with `finalAmount` in:

1. `razorpay.orders.create({ amount: finalAmount, ... })` (was `amount`)
2. The `db.createSubscription({ ... })` call — change `amountPaise: amount` to `amountPaise: finalAmount`, and add two new fields:
   ```ts
   referralCode: appliedReferralCode,
   originalAmountPaise: amount, // pre-discount total — used at verify time to compute applied discount
   ```
3. The `createDraftInvoice({ ... })` call — change `taxablePaise: taxablePaise` to `taxablePaise: finalTaxablePaise` so the invoice's tax math matches the actual amount charged.
4. The final `NextResponse.json({ ... amount, ... })` (around line 90) — change to `amount: finalAmount` so Razorpay checkout opens with the discounted total.

Keep the original `const amount = tax.totalPaise;` line intact — it's reused as `originalAmountPaise: amount` in the `createSubscription` call (the pre-discount total persisted for verify-time discount accounting).

- [ ] **Step 3: Insert redemption helper in `app/lib/referral/server.ts`**

Both `/api/orders/verify` and the Razorpay webhook need to record a redemption when a paid subscription has a referral code attached. Add a shared helper to avoid duplicating logic.

Append to `app/lib/referral/server.ts`:

```ts
import type { Subscription } from "@/app/lib/db/types";

/**
 * Record a redemption for a paid subscription. Idempotent —
 * relies on UNIQUE(razorpay_order_id) + onConflictDoNothing inside recordRedemption.
 * Safe to call from both /api/orders/verify and the Razorpay webhook.
 */
export async function recordRedemptionForSubscription(sub: Subscription): Promise<void> {
  if (!sub.referralCode || !sub.razorpayOrderId) return;
  const offer = await db.getReferralOffer(sub.referralCode);
  if (!offer) return;
  const original = sub.originalAmountPaise ?? sub.amountPaise;
  const applied  = Math.max(0, original - sub.amountPaise);
  await db.recordRedemption({
    code: sub.referralCode,
    referrerUserId: offer.ownerUserId,
    refereeUserId: sub.userId,
    razorpayOrderId: sub.razorpayOrderId,
    appliedDiscountPaise: applied,
  });
}
```

- [ ] **Step 4: Update `/api/orders/verify`**

Modify `app/api/orders/verify/route.ts`. The route already fetches the subscription (line 36: `const sub = await db.getSubscriptionByOrderId(razorpay_order_id);`). After `await db.activateSubscription(razorpay_order_id, razorpay_payment_id);` (line 64), add:

```ts
import { recordRedemptionForSubscription } from "@/app/lib/referral/server";
// ... add to existing imports at top of file

// After activateSubscription:
try {
  await recordRedemptionForSubscription(sub);
} catch (e) {
  console.error("[orders/verify] redemption insert failed:", e);
  // Don't fail the response — payment already succeeded.
}
```

- [ ] **Step 5: Update Razorpay webhook**

Modify `app/api/webhooks/razorpay/route.ts`. After `await db.activateSubscription(orderId, payment.id);` (line 36), add:

```ts
import { recordRedemptionForSubscription } from "@/app/lib/referral/server";
// ... add to existing imports

// After activateSubscription (inside the existing try/catch chain):
try {
  const sub = await db.getSubscriptionByOrderId(orderId);
  if (sub) await recordRedemptionForSubscription(sub);
} catch (e) {
  console.error("[webhook] redemption insert failed:", e);
}
```

Idempotency: whichever path fires first inserts the row. The second is a no-op because `recordRedemption` uses `onConflictDoNothing` on `UNIQUE(razorpay_order_id)`.

- [ ] **Step 6: Build + lint**

```bash
npm run build && npm run lint
```

Expected: PASS, zero warnings.

- [ ] **Step 7: Commit**

```bash
git add app/api/orders app/api/webhooks app/lib/db app/lib/referral
git commit -m "feat(referral): apply discount on order create + record redemption on verify/webhook"
```

---

### Task 6: Plans page referral input

**Files:**
- Modify: `app/plans/page.tsx`
- Modify: `app/context/LanguageContext.tsx`

- [ ] **Step 1: i18n keys**

Append to `app/context/LanguageContext.tsx` translations object:

```ts
referralCode: { en: "Referral code", kn: "ರೆಫರಲ್ ಕೋಡ್" },
applyCode: { en: "Apply", kn: "ಅನ್ವಯಿಸಿ" },
codeApplied: { en: "Code applied", kn: "ಕೋಡ್ ಅನ್ವಯಿಸಲಾಗಿದೆ" },
invalidCode: { en: "Invalid code", kn: "ಅಮಾನ್ಯ ಕೋಡ್" },
```

Note: the existing `account` key (line 21 of `LanguageContext.tsx`) already renders "Account" / "ಖಾತೆ" — reuse it in Task 7 for the dropdown's `/account` link. No new key needed.

- [ ] **Step 2: Read `?ref=` from URL on mount**

In `app/plans/page.tsx`, near the top of the component:

```tsx
const searchParams = useSearchParams();
const [refInput, setRefInput] = useState("");
const [refStatus, setRefStatus] = useState<
  | { state: "idle" }
  | { state: "checking" }
  | { state: "applied"; code: string; description: string | null; discountPaise: number; finalPaise: number }
  | { state: "error"; message: string }
>({ state: "idle" });

useEffect(() => {
  const fromUrl = searchParams.get("ref");
  if (fromUrl) setRefInput(fromUrl.trim().toUpperCase());
}, [searchParams]);
```

Add `useSearchParams` to the `next/navigation` import.

- [ ] **Step 3: Add input UI**

Inside Step 2 ("billing") block — render the referral input **between the plan summary pill (line 306) and the GST breakdown (line 309)**. Place an entry-row so the user sees their summary then the code field:

```tsx
<div className="bf-referral-row">
  <input
    type="text"
    className="bf-input"
    placeholder={t("referralCode")}
    value={refInput}
    onChange={(e) => {
      setRefInput(e.target.value.toUpperCase().slice(0, 32));
      if (refStatus.state !== "idle") setRefStatus({ state: "idle" });
    }}
    disabled={refStatus.state === "applied" || isTestUser}
    style={{ flex: 1 }}
  />
  {refStatus.state === "applied" ? (
    <button
      type="button"
      className="plan-btn"
      onClick={() => { setRefInput(""); setRefStatus({ state: "idle" }); }}
    >
      Remove
    </button>
  ) : (
    <button
      type="button"
      className="plan-btn primary"
      disabled={!refInput || refStatus.state === "checking" || isTestUser}
      onClick={async () => {
        setRefStatus({ state: "checking" });
        try {
          const r = await fetch("/api/referral/validate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: refInput, planId: selectedPlan.id }),
          });
          const j = await r.json();
          if (j.valid) {
            setRefStatus({
              state: "applied",
              code: j.code,
              description: j.description ?? null,
              discountPaise: j.discountPaise,
              finalPaise: j.finalPaise,
            });
          } else {
            setRefStatus({ state: "error", message: j.error ?? t("invalidCode") });
          }
        } catch {
          setRefStatus({ state: "error", message: "Network error" });
        }
      }}
    >
      {t("applyCode")}
    </button>
  )}
</div>
{refStatus.state === "applied" && (
  <div className="bf-referral-applied">
    ✓ {refStatus.code} — {refStatus.description ?? "Discount applied"}
    {" "}(− ₹{(refStatus.discountPaise / 100).toLocaleString("en-IN")})
  </div>
)}
{refStatus.state === "error" && (
  <div className="bf-error" style={{ marginTop: 6 }}>{refStatus.message}</div>
)}
```

- [ ] **Step 4: Pass code to order create**

Find the `fetch("/api/orders/create", ...)` call (in `handleBillingSubmit` or wherever the payment kicks off). Extend the body to include `referralCode` when status is `applied`:

```ts
body: JSON.stringify({
  planId: selectedPlan.id,
  referralCode: refStatus.state === "applied" ? refStatus.code : undefined,
}),
```

- [ ] **Step 5: Styles**

Append to `app/plans/plans.css`:

```css
.bf-referral-row {
  display: flex;
  gap: 8px;
  margin: 12px 0 16px;
}
.bf-referral-applied {
  font-size: 13px;
  color: #047857;
  background: #ecfdf5;
  border-radius: 6px;
  padding: 6px 10px;
  margin-bottom: 12px;
}
```

- [ ] **Step 6: Build + lint + manual smoke**

```bash
npm run build && npm run lint
```

Smoke (with dev server running and a referral seeded):
- visit `/plans?ref=TESTCODE` while logged in
- pick a plan → see code prefilled → click Apply → see green confirmation → continue to payment → confirm Razorpay amount reflects discount.

- [ ] **Step 7: Commit**

```bash
git add app/plans app/context/LanguageContext.tsx
git commit -m "feat(referral): plans page referral input + ?ref= prefill"
```

---

### Task 7: Extend /api/me + Header dropdown row

**Files:**
- Modify: `app/api/me/route.ts`
- Modify: `app/components/Header.tsx`
- Modify: `app/components/header.css` (verify path; or inline)

- [ ] **Step 1: Extend `/api/me`**

Modify `app/api/me/route.ts` to also return referral identity:

```ts
import { db } from "@/app/lib/db";
// ... existing imports

// inside GET, after the existing Promise.all:
const referral = await db.getReferralIdentity(userId);

return NextResponse.json({
  loggedIn: true,
  id: userId,
  subscribed: sub?.status === "active",
  isTestUser: user ? isTestEmail(user.email) : false,
  needsConsent,
  consent: consent ? { analytics: consent.analytics, marketing: consent.marketing } : null,
  canRefer: referral.canRefer,
  referralCode: referral.referralCode,
});
```

- [ ] **Step 2: Header — fetch + render**

`app/components/Header.tsx` already fetches… actually it receives `loggedIn` as a prop. The referral code isn't fetched here. Two options:

**Option A (chosen):** add a small fetch inside Header when `loggedIn` becomes true.

Add state + effect:

```tsx
const [referralCode, setReferralCode] = useState<string | null>(null);

useEffect(() => {
  if (!loggedIn) { setReferralCode(null); return; }
  fetch("/api/me").then(r => r.json()).then(j => {
    if (j.loggedIn && j.canRefer) setReferralCode(j.referralCode ?? null);
  }).catch(() => { /* ignore */ });
}, [loggedIn]);
```

Modify the dropdown body (lines 75-83) to add the referral row at the top:

```tsx
{accountOpen && (
  <div className="account-dropdown">
    <Link href="/account" className="dropdown-item" onClick={() => setAccountOpen(false)}>
      {t("account")}
    </Link>
    {referralCode && (
      <div className="dropdown-item dropdown-readonly">
        <span>Referral code: <b>{referralCode}</b></span>
      </div>
    )}
    <button className="dropdown-item" onClick={() => { setLang(lang === "en" ? "kn" : "en"); setAccountOpen(false); }}>
      {lang === "en" ? "ಕನ್ನಡ" : "English"}
    </button>
    <button className="dropdown-item dropdown-logout" onClick={() => { setAccountOpen(false); handleLogout(); }}>
      {t("logout")}
    </button>
  </div>
)}
```

- [ ] **Step 3: Styles**

Add to `app/components/header.css`:

```css
.dropdown-readonly {
  cursor: default;
  background: #f9fafb;
  font-size: 13px;
  color: #374151;
}
.dropdown-readonly:hover {
  background: #f9fafb;
}
```

- [ ] **Step 4: Build + lint**

```bash
npm run build && npm run lint
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/api/me app/components/Header.tsx app/components/header.css
git commit -m "feat(referral): show referral code in account dropdown for enabled users"
```

---

### Task 8: /account page

**Files:**
- Create: `app/account/page.tsx`
- Create: `app/account/account.css`
- Create: `app/api/account/route.ts`

- [ ] **Step 1: Account API endpoint**

`app/api/account/route.ts`:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await db.getUserById(userId);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const referral = await db.getReferralIdentity(userId);
  return NextResponse.json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    canRefer: referral.canRefer,
    referralCode: referral.referralCode,
    offer: referral.offer ? {
      description: referral.offer.description,
      discountPercent: referral.offer.discountPercent,
      discountFlatPaise: referral.offer.discountFlatPaise,
      expiresAt: referral.offer.expiresAt,
    } : null,
  });
}
```

- [ ] **Step 2: Page UI**

`app/account/page.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./account.css";

type AccountData = {
  firstName: string;
  lastName: string;
  email: string;
  canRefer: boolean;
  referralCode: string | null;
  offer: { description: string | null; discountPercent: number | null; discountFlatPaise: number | null; expiresAt: string | null } | null;
};

export default function AccountPage() {
  const router = useRouter();
  const [data, setData] = useState<AccountData | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/account")
      .then(async (r) => {
        if (r.status === 401) { router.push("/signin?next=/account"); return null; }
        return r.json();
      })
      .then((j) => { if (j) setData(j); })
      .catch(() => setError("Failed to load account info"));
  }, [router]);

  if (error) return <main className="account-shell"><p>{error}</p></main>;
  if (!data) return <main className="account-shell"><p>Loading…</p></main>;

  const shareLink = data.referralCode
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/plans?ref=${data.referralCode}`
    : null;

  function copy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <main className="account-shell">
      <h1>Account</h1>

      <section className="account-card">
        <h2>Profile</h2>
        <div className="account-row"><span>Name</span><span>{data.firstName} {data.lastName}</span></div>
        <div className="account-row"><span>Email</span><span>{data.email}</span></div>
      </section>

      {data.canRefer && data.referralCode && (
        <section className="account-card">
          <h2>Your referral code</h2>
          <div className="account-code-block">
            <code>{data.referralCode}</code>
            <button onClick={() => copy(data.referralCode!)}>Copy</button>
          </div>
          {data.offer && (
            <p className="account-offer">
              {data.offer.discountPercent != null
                ? `${data.offer.discountPercent}% off`
                : `₹${((data.offer.discountFlatPaise ?? 0) / 100).toLocaleString("en-IN")} off`}
              {data.offer.description ? ` — ${data.offer.description}` : ""}
              {data.offer.expiresAt ? ` (expires ${new Date(data.offer.expiresAt).toLocaleDateString()})` : ""}
            </p>
          )}
          {shareLink && (
            <div className="account-share">
              <label>Share link</label>
              <div className="account-share-row">
                <input readOnly value={shareLink} />
                <button onClick={() => copy(shareLink)}>Copy</button>
              </div>
            </div>
          )}
          {copied && <p className="account-copied">Copied!</p>}
        </section>
      )}
    </main>
  );
}
```

- [ ] **Step 3: Styles**

`app/account/account.css`:

```css
.account-shell { max-width: 720px; margin: 40px auto; padding: 0 20px; }
.account-shell h1 { font-size: 28px; margin-bottom: 24px; }
.account-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 16px; }
.account-card h2 { font-size: 16px; margin: 0 0 12px; color: #111827; }
.account-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
.account-row:last-child { border-bottom: none; }
.account-row span:first-child { color: #6b7280; }
.account-code-block { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.account-code-block code { font-size: 20px; font-weight: 700; background: #f3f4f6; padding: 8px 14px; border-radius: 6px; letter-spacing: 1px; }
.account-code-block button, .account-share button { background: #111827; color: #fff; border: 0; border-radius: 6px; padding: 8px 14px; cursor: pointer; font-size: 13px; }
.account-offer { font-size: 13px; color: #047857; margin: 8px 0 12px; }
.account-share { margin-top: 12px; }
.account-share label { display: block; font-size: 12px; color: #6b7280; margin-bottom: 4px; }
.account-share-row { display: flex; gap: 8px; }
.account-share-row input { flex: 1; border: 1px solid #d1d5db; border-radius: 6px; padding: 8px 10px; font-size: 13px; }
.account-copied { font-size: 12px; color: #047857; margin-top: 6px; }
```

- [ ] **Step 4: Build + manual smoke**

```bash
npm run build && npm run lint
```

Smoke: visit `/account` while logged in as a non-referrer → see profile only. Log in as a referrer (set `can_refer=true` and `referral_code='TEST10'` via SQL) → see referral section with code, copy buttons, share link.

- [ ] **Step 5: Commit**

```bash
git add app/account app/api/account
git commit -m "feat(referral): /account page with referral code + share link"
```

---

### Task 9: Manual enable script

**Files:**
- Create: `scripts/enable-referrer.ts`

- [ ] **Step 1: Script**

`scripts/enable-referrer.ts`:

```ts
/**
 * Manually enable a user as a referrer and assign a code + offer.
 * Usage:
 *   npx tsx scripts/enable-referrer.ts <userId> <CODE> --percent 10 --description "10% off"
 *   npx tsx scripts/enable-referrer.ts <userId> <CODE> --flat 50000 --description "₹500 off"
 *
 * Re-running with the same userId rotates the code: deactivates the old offer, sets the new one.
 */
import { Client } from "pg";

async function main() {
  const [, , userId, codeRaw, ...rest] = process.argv;
  if (!userId || !codeRaw) {
    console.error("Usage: enable-referrer.ts <userId> <CODE> (--percent N | --flat paise) [--description '...'] [--expires YYYY-MM-DD]");
    process.exit(1);
  }
  const code = codeRaw.trim().toUpperCase();

  const args: Record<string, string> = {};
  for (let i = 0; i < rest.length; i += 2) args[rest[i].replace(/^--/, "")] = rest[i + 1];

  const percent = args.percent ? parseInt(args.percent, 10) : null;
  const flat = args.flat ? parseInt(args.flat, 10) : null;
  const description = args.description ?? null;
  const expiresAt = args.expires ? new Date(args.expires) : null;

  if ((percent == null && flat == null) || (percent != null && flat != null)) {
    console.error("Specify exactly one of --percent or --flat");
    process.exit(1);
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  try {
    await client.query("BEGIN");
    // Deactivate any existing offer owned by this user
    await client.query(
      `UPDATE referral_offers SET active=false WHERE owner_user_id=$1 AND active=true`,
      [userId],
    );
    // Insert new offer
    await client.query(
      `INSERT INTO referral_offers (code, owner_user_id, discount_percent, discount_flat_paise, description, active, expires_at)
       VALUES ($1, $2, $3, $4, $5, true, $6)
       ON CONFLICT (code) DO UPDATE SET
         owner_user_id = EXCLUDED.owner_user_id,
         discount_percent = EXCLUDED.discount_percent,
         discount_flat_paise = EXCLUDED.discount_flat_paise,
         description = EXCLUDED.description,
         active = true,
         expires_at = EXCLUDED.expires_at`,
      [code, userId, percent, flat, description, expiresAt],
    );
    // Flag user
    await client.query(
      `UPDATE users SET can_refer = true, referral_code = $1 WHERE id = $2`,
      [code, userId],
    );
    await client.query("COMMIT");
    console.log(`✓ User ${userId} enabled with code ${code}`);
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    await client.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
```

- [ ] **Step 2: Install `tsx`**

```bash
npm install --save-dev tsx
```

- [ ] **Step 3: Smoke**

```bash
DATABASE_URL=... npx tsx scripts/enable-referrer.ts <real-user-id> PRIYA10 --percent 10 --description "Priya's 10% off"
psql "$DATABASE_URL" -c "SELECT id, can_refer, referral_code FROM users WHERE id = '<real-user-id>'"
psql "$DATABASE_URL" -c "SELECT code, owner_user_id, discount_percent, active FROM referral_offers"
```

Expected: user row shows `can_refer = t`, `referral_code = PRIYA10`; offer row shows `active = t`, `discount_percent = 10`.

- [ ] **Step 4: Commit**

```bash
git add scripts/enable-referrer.ts package.json package-lock.json
git commit -m "chore(referral): add enable-referrer script for manual code assignment"
```

---

### Task 10: End-to-end smoke + final review

- [ ] **Step 1: Full path test**

1. Enable user A as referrer with code `E2ETEST` and `--percent 25`.
2. Sign up as user B (different email, not test).
3. Visit `/plans?ref=E2ETEST`, pick a plan, see code prefilled, click Apply → confirmation row shows.
4. Continue to payment → Razorpay modal shows discounted amount.
5. Use Razorpay test card → verify endpoint succeeds.
6. Confirm DB:
   ```bash
   psql "$DATABASE_URL" -c "SELECT * FROM referral_redemptions ORDER BY id DESC LIMIT 1"
   ```
   Row exists with `code=E2ETEST`, `referrer_user_id=<A>`, `referee_user_id=<B>`, `applied_discount_paise > 0`.
7. User A logs in → sees `Referral code: E2ETEST` in account dropdown → visits `/account` → sees code + share link.

- [ ] **Step 2: Self-referral test**

User A tries to use `E2ETEST` on `/plans`. API returns `Cannot use your own code`.

- [ ] **Step 3: Test-user bypass**

Test-email user tries to apply a code. UI rejects (input disabled / validation returns error).

- [ ] **Step 4: Lint + build**

```bash
npm run build && npm run lint
```

Expected: PASS, zero warnings.

- [ ] **Step 5: No commit needed** — verification only.

---

## Out of Scope (deferred)

- Admin UI for managing referral codes (manual script + SQL for now).
- Referrer dashboard showing redemption count / earned credit.
- Auto-payouts / referrer rewards.
- Code entry at signup time (only at plans purchase per requirement).
- Stacking with other promo codes.
- Notification email to referrer when their code is used.

---

## Risk Register

| Risk | Mitigation |
|------|------------|
| Race on Razorpay verify (double-credit) | `UNIQUE(razorpay_order_id)` on redemptions + `onConflictDoNothing` in `recordRedemption` |
| Client-tampered discount | Server re-runs `applyReferral` in `/api/orders/create`; client value ignored |
| Owner deletes account → orphan offer | `ON DELETE CASCADE` on `referral_offers.owner_user_id`; redemptions use `ON DELETE RESTRICT` to preserve audit |
| Code typo by user | Normalised via `trim().toUpperCase()` both client and server |
| Discount exceeds plan price | Floor at ₹1 (`MIN_FINAL_PAISE`) in `applyReferral` |
