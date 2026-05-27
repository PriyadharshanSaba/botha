# Billing & Invoice Storage — Design Spec

**Date:** 2026-05-25
**Status:** Draft (awaiting review)
**Stack:** Next.js 16 (App Router) · Drizzle ORM · Postgres · Razorpay · Resend

---

## 1. Goals

Drivers for storing billing data, in priority order:

1. **Legal/tax compliance** — India GST invoicing rules require immutable per-transaction records of supplier + buyer + line items + tax breakup.
2. **Customer convenience** — prefill billing form on repeat purchase (future add-ons, vCFO retainer, advisory).
3. **Business records / accounting** — exportable buyer list, reconciliation with Razorpay payouts, CA hand-off.

Constraints:

- Single billing profile per user (mutable, overwritten on edit).
- Many invoices per user over time (program purchase, add-ons, advisory).
- Pre-GST regime now: no tax breakup on invoice.
- Post-GST regime soon: 18% GST charged in addition to base price; full breakup on invoice.
- All four answers from brainstorming: Q1=D (all three drivers), Q2=A (single profile), Q3=B (many invoices), Q4=B (GST registered soon).

---

## 2. Data Model

### `users.billing_info` (existing, unchanged)

Mutable jsonb profile. Type already defined in `app/lib/db/types.ts` as `BillingInfo`. Used for **prefill only**. Never read at invoice render time.

### `invoices` (new)

```ts
{
  id: text PRIMARY KEY,                       // inv_<nanoid>
  invoiceNumber: text UNIQUE,                 // BV/2026-27/0001 — NULL while draft; assigned at issue
  userId: text NOT NULL REFERENCES users(id),
  subscriptionId: text REFERENCES subscriptions(id),  // NULL for non-sub invoices

  invoiceDate: timestamp NOT NULL,
  status: text NOT NULL,                      // 'draft' | 'issued' | 'paid' | 'void'

  // Frozen snapshots — never mutated after status='issued'
  buyerSnapshot:    jsonb NOT NULL,           // { name, email, phone, address, gstin?, pan?, state, stateCode }
  supplierSnapshot: jsonb NOT NULL,           // { legalName, address, gstin?, pan, state, stateCode, email }
  lineItems:        jsonb NOT NULL,           // [{ description, hsnSac, qty, unitPriceRs, taxableRs }]

  // Tax (paise, computed once at issue)
  placeOfSupply:     text NOT NULL,           // state code, e.g. "29"
  taxableTotalPaise: integer NOT NULL,
  cgstPaise:         integer NOT NULL DEFAULT 0,
  sgstPaise:         integer NOT NULL DEFAULT 0,
  igstPaise:         integer NOT NULL DEFAULT 0,
  totalPaise:        integer NOT NULL,

  // Payment trace
  razorpayOrderId:   text,
  razorpayPaymentId: text,

  // Bookkeeping extras
  notes:      jsonb,                          // freeform: narration, SAC overrides, reverse-charge flag
  voidedAt:   timestamp,
  voidReason: text,

  createdAt: timestamp NOT NULL DEFAULT now(),
  issuedAt:  timestamp,                       // set when status flips to 'issued'
}
```

Indexes:

- `UNIQUE (invoiceNumber)` — partial: `WHERE invoice_number IS NOT NULL` (allows multiple NULLs for drafts)
- `(userId, invoiceDate DESC)` — user history view
- `(razorpayOrderId)` — verify route lookup

DB-level CHECK constraints:

- `total_paise = taxable_total_paise + cgst_paise + sgst_paise + igst_paise`
- `(cgst_paise > 0 AND igst_paise = 0) OR (cgst_paise = 0 AND sgst_paise = 0)`
- `status IN ('draft','issued','paid','void')`

### `invoice_counters` (new)

```ts
{
  fy:      text PRIMARY KEY,    // "2026-27"
  lastSeq: integer NOT NULL,
}
```

### `subscriptions` (modified)

- **Add** `invoiceId text REFERENCES invoices(id) NULL`.
- **Deprecate** `invoiceNumber` (move semantic to `invoices.invoiceNumber`).
- **Deprecate** `gstPaise` (lives on invoice).
- **Keep** `amountPaise` as denormalized total for sub queries.

Old columns removed in Phase 5 of migration.

### Why snapshots are jsonb, not FKs

Buyer profile is mutable. Foreign-keying buyer details into an invoice would mean editing the profile retroactively changes historic invoices — a legal break. Snapshot freezes the buyer + supplier + line items + tax math at issue time. This is the pattern Stripe, Razorpay, and India GST law all assume.

---

## 3. Write & Read Flows

### Checkout (program purchase = subscription + invoice)

```
1. POST /api/users/billing-info
   → upsert users.billing_info (mutable profile)

2. POST /api/orders/create
   → Razorpay order created
   → INSERT subscription (status='pending')
   → INSERT invoice    (status='draft', subscriptionId)
       · buyerSnapshot    = built from users.billing_info NOW
       · supplierSnapshot = clone of CURRENT_SUPPLIER NOW
       · lineItems        = from selected plan
       · tax              = computeInvoiceTax(...)
       · invoiceNumber    = NULL  (not assigned until payment success)

3. Razorpay checkout modal → user pays

4. POST /api/orders/verify  (or webhook fires)
   → HMAC signature check
   → issueInvoice(orderId, paymentId):
       · UPDATE invoice SET
           status='issued', invoiceNumber=<next FY seq>,
           issuedAt=now(), razorpayPaymentId=...
       · UPDATE subscription SET status='active', activatedAt=now()
   → send invoice email (non-blocking)
```

**Why draft at order create + number at payment success:** prevents gapped invoice numbers from abandoned carts. India GST rule requires unbroken sequence.

### Add-on / advisory (no subscription)

```
1. Admin endpoint POST /api/admin/invoices/create { userId, lineItems, notes }
   → snapshot + tax compute → INSERT invoice (status='draft', subscriptionId=NULL)
   → Razorpay order created against invoice.id
   → Pay-link emailed to user
2. /api/orders/verify same path → invoice.subscriptionId stays NULL.
```

Single issuance path for both flows.

### Read paths

| Path | Source | Notes |
|------|--------|-------|
| `/billing?ref=<orderId>` | `invoices` by razorpayOrderId | Renders from buyer/supplier/lineItem snapshots. Never reads `users.billing_info`. |
| `GET /api/billing` (no ref) | latest issued invoice for user | |
| `GET /api/user/invoices` (future) | all invoices for user | Profile history view |
| Admin CA export | `SELECT … WHERE invoiceDate BETWEEN …` | One row per invoice, self-contained, GSTR-1 ready |

### Idempotency

- `issueInvoice(orderId, paymentId)` lives in `app/lib/billing/issue.ts`. Verify route AND webhook both call it. Single source of truth.
- Function first checks `if (invoice.invoiceNumber !== null) return invoice.invoiceNumber;` — replays are no-ops.
- Counter increment + invoice UPDATE wrapped in single Postgres transaction.

### Failure modes

| Failure | Behavior |
|---------|----------|
| Payment succeeds, verify route crashes | Webhook calls same `issueInvoice()`. Invoice issued exactly once. |
| Verify succeeds, email fails | Invoice already saved. Admin can resend; payment unaffected. |
| Razorpay order created, draft invoice created, user abandons | Cron sweeps drafts >24h old → mark `status='void'`, `voidReason='abandoned'`. No number ever assigned → no gap. |
| Webhook for unknown order ID | 404, log. No auto-create. |
| Signature mismatch | 400. Sub stays pending, invoice stays draft. |

---

## 4. Supplier Snapshot Strategy

### Source: typed constant in code

`app/lib/billing/supplier.ts`

```ts
export type Supplier = {
  legalName: string;
  address: { line1: string; line2?: string; city: string; state: string; pincode: string; country: string };
  email: string;
  pan: string;
  gstin?: string;        // present once registered
  stateCode: string;     // GST state code (Karnataka = "29")
};

export const CURRENT_SUPPLIER: Supplier = {
  legalName: "Bodha Ventures LLP",
  address: {
    line1: "29, 6th Cross, 9th Main",
    line2: "Jalahalli Village",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560013",
    country: "India",
  },
  email: "bodhaventures@gmail.com",
  pan: "ABGFB6431R",
  // gstin: undefined,   // add when registration completes
  stateCode: "29",
};
```

### Why a constant, not env vars or DB

- Single supplier entity. Never listed/queried in app.
- Changes are rare and reviewed (legal/CA event). Git PR is the right gate, not a DB UPDATE form.
- Old invoices unaffected — already frozen in `supplierSnapshot`.
- Env vars are brittle for nested structures.

### Behavior on supplier change

| Event | Action |
|-------|--------|
| GST registration completes | Edit constant, add `gstin`. New invoices carry it; old invoices keep `gstin: undefined`. Correct — GST applies prospectively. |
| Address change | Edit constant. Old invoices keep old address. Correct. |
| Entity change (LLP → Pvt Ltd) | Edit constant. Old invoices still say LLP. Correct. |
| Backfill historic invoice with new field | **Forbidden.** Issued rows are immutable. |

`issueInvoice()` deep-clones `CURRENT_SUPPLIER` into `supplierSnapshot` to prevent any shared-ref mutation:

```ts
invoice.supplierSnapshot = JSON.parse(JSON.stringify(CURRENT_SUPPLIER));
```

Unit test in CI: `CURRENT_SUPPLIER` matches a Zod schema. Malformed edits fail CI.

---

## 5. Invoice Numbering

### Format

`BV/2026-27/0001`

- `BV` — Bodha Ventures prefix
- `2026-27` — Indian financial year (Apr–Mar)
- `0001` — zero-padded sequence, resets each FY
- 14 chars (GST allows ≤16)
- `/` is GST-legal

### Race-safe counter

```sql
-- Inside the same transaction as UPDATE invoices SET status='issued'
INSERT INTO invoice_counters (fy, last_seq)
VALUES ($1, 1)
ON CONFLICT (fy) DO UPDATE
  SET last_seq = invoice_counters.last_seq + 1
RETURNING last_seq;
```

Atomic. No double-numbering under concurrent verify + webhook hits. Relies on Postgres PK row serialization.

### FY helper

```ts
function indianFY(d: Date): string {
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();              // 0-indexed
  const startYear = m >= 3 ? y : y - 1;   // April (idx 3) starts new FY
  return `${startYear}-${String(startYear + 1).slice(2)}`;
}
```

Tested cases: `2026-04-01 → "2026-27"`, `2026-03-31 → "2025-26"`, `2027-01-15 → "2026-27"`.

### Gap policy (legal-critical)

- **Number assigned only at issue.** Drafts / abandoned / failed payments never consume a number.
- **Void leaves number occupied.** Voided invoice rows stay in DB with `status='void'`. Sequence remains unbroken.
- **Cancel via credit note**, not deletion. Future `credit_notes` table reuses counter with `CN/2026-27/0001` prefix (separate counter row, e.g. fy = `"CN-2026-27"`).

### Renumbering forbidden

`issueInvoice()` checks `if (invoice.invoiceNumber !== null) return existing;` before counter increment. Replays return existing number, don't consume new one.

### Audit

Daily cron:

```sql
SELECT fy, COUNT(*), MIN(seq), MAX(seq)
FROM (
  SELECT
    split_part(invoice_number, '/', 2) AS fy,
    split_part(invoice_number, '/', 3)::int AS seq
  FROM invoices
  WHERE status IN ('issued','paid','void')
) t
GROUP BY fy;
```

Alert if `COUNT(*) < (MAX - MIN + 1)`. Catches gaps before the CA does.

---

## 6. Tax Computation

### Two regimes

**Regime 1 — Pre-GST (current):** No GSTIN on supplier. Charge base price only. No breakup on invoice.

```
Charge        = 4999
taxableTotalPaise = 499900
cgst/sgst/igst   = 0
totalPaise       = 499900
```

Invoice render hides CGST/SGST/IGST rows.

**Regime 2 — Post-GST (after registration):** GSTIN present. Charge base + 18% on top.

```
Base       = 4999          → taxableTotalPaise = 499900
Tax 18%    =  899.82       → taxPaise = 89982
Charge     = 5898.82       → totalPaise = 589882
```

Intra-state (buyer Karnataka, supplier Karnataka):

```
cgstPaise = 44991
sgstPaise = 44991  (absorbs 1-paisa rounding diff)
igstPaise = 0
```

Inter-state (buyer Tamil Nadu, supplier Karnataka):

```
cgstPaise = 0
sgstPaise = 0
igstPaise = 89982
```

### Switch trigger

Single source: presence of `gstin` field in `CURRENT_SUPPLIER`. No date config, no feature flag.

```ts
export function computeInvoiceTax(
  taxablePaise: number,
  buyerStateCode: string | null,
  supplier: Supplier,
) {
  const placeOfSupply = buyerStateCode ?? supplier.stateCode;

  if (!supplier.gstin) {
    return {
      taxableTotalPaise: taxablePaise,
      cgstPaise: 0,
      sgstPaise: 0,
      igstPaise: 0,
      totalPaise: taxablePaise,
      placeOfSupply,
    };
  }

  const rate     = 0.18;
  const taxPaise = Math.round(taxablePaise * rate);
  const intraState = buyerStateCode === supplier.stateCode;
  const halfFloor  = Math.floor(taxPaise / 2);

  return {
    taxableTotalPaise: taxablePaise,
    cgstPaise: intraState ? halfFloor : 0,
    sgstPaise: intraState ? taxPaise - halfFloor : 0,
    igstPaise: intraState ? 0 : taxPaise,
    totalPaise: taxablePaise + taxPaise,
    placeOfSupply,
  };
}
```

Pure function. Unit-tested for both regimes, both POS scenarios, rounding edges.

### Plan pricing semantics

- `PLANS[].priceRs` = **base (taxable) value**. Stays `4999` in both regimes.
- Razorpay charge = `computeInvoiceTax(...).totalPaise`.
- `/plans` UI:
  - Pre-GST: show `₹4999`.
  - Post-GST: show `₹5899 incl. GST` (consumer-facing convention).

### SAC codes

- Program / course: `999293` (commercial training & coaching).
- Future vCFO retainer: `998311` (management consulting).
- Stored per line item: `lineItems[i].hsnSac`.

### Place-of-supply

- B2C online education = OIDAR → location of recipient (buyer's state from billing address).
- Mapping table `app/lib/billing/state-codes.ts` — 36 states/UTs → 2-digit GST code.

### Rounding

- Compute total tax in paise, integer `Math.round` (half-up).
- CGST/SGST split: `floor(tax/2)` + `(tax - floor(tax/2))`. Sum always = tax. No 1-paisa drift.
- All math in paise (integer). Never float at storage layer.

### Currency display

- Divide by 100 only at render: `toLocaleString("en-IN", { minimumFractionDigits: 2 })`.

---

## 7. Migration Plan

### Current state

- `subscriptions` has `invoiceNumber`, `gstPaise` (always 0), `amountPaise`.
- Some active subscriptions already exist (paid customers).
- `users.billing_info` filled for recent buyers; may be NULL for legacy/test users.

### Phased rollout (zero-downtime)

**Phase 0 — DDL only, no app change**

Migration `0XXX_invoices.sql`:

- `CREATE TABLE invoices (...)` per Section 2.
- `CREATE TABLE invoice_counters (fy text PK, last_seq int NOT NULL)`.
- `ALTER TABLE subscriptions ADD COLUMN invoice_id text REFERENCES invoices(id)`.

Old columns stay. Nothing reads new table yet.

**Phase 1 — backfill script**

`scripts/backfill-invoices.ts`, idempotent. For each subscription ordered by `activatedAt ASC`:

```ts
if (sub.invoiceId) continue;
const user   = await db.getUserById(sub.userId);
const buyer  = buildBuyerSnapshot(user);     // NULL fields if billing_info missing
const supp   = CURRENT_SUPPLIER;             // pre-GST snapshot
const lines  = [{ description: planName, hsnSac: "999293", qty: 1,
                  unitPriceRs: sub.amountPaise/100, taxableRs: sub.amountPaise/100 }];
const tax    = {
  taxableTotal: sub.amountPaise, cgst: 0, sgst: 0, igst: 0,
  total: sub.amountPaise, pos: buyer.stateCode ?? supp.stateCode,
};

// KEEP existing invoice_number. Renumbering breaks customer references.
const invNum = sub.invoiceNumber ?? assignNumber(sub.activatedAt);

INSERT INTO invoices (..., status='paid', issuedAt=sub.activatedAt, ...);
UPDATE subscriptions SET invoice_id = <new id>;
```

Seed counters:

```sql
INSERT INTO invoice_counters (fy, last_seq)
SELECT fy, MAX(seq) FROM (
  SELECT
    split_part(invoice_number, '/', 2) AS fy,
    split_part(invoice_number, '/', 3)::int AS seq
  FROM invoices
  WHERE invoice_number IS NOT NULL
) t
GROUP BY fy
ON CONFLICT (fy) DO UPDATE
  SET last_seq = GREATEST(invoice_counters.last_seq, EXCLUDED.last_seq);
```

Run order: dev → staging → prod (transaction). Dry-run flag prints diff without writing.

**Phase 2 — dual-write app code**

- `issueInvoice()` writes to both `invoices` AND legacy `subscriptions.invoiceNumber` / `subscriptions.gstPaise`.
- Reads still come from `subscriptions`.
- Deploy. Monitor.

**Phase 3 — switch reads**

- `/api/billing` reads from `invoices` via `subscriptions.invoice_id` or `razorpayOrderId`.
- Response shape unchanged → `/billing` page render unchanged.
- Deploy. Monitor.

**Phase 4 — stop dual-write**

- Remove writes to `subscriptions.invoiceNumber` and `subscriptions.gstPaise`.
- Deploy. Monitor one billing cycle.

**Phase 5 — drop legacy columns**

- Migration `0YYY_drop_legacy_invoice_cols.sql`:
  ```sql
  ALTER TABLE subscriptions
    DROP COLUMN invoice_number,
    DROP COLUMN gst_paise;
  ```
- Point of no return.

### Legacy NULL billing_info

Backfill writes `buyerSnapshot` with name + email only, address fields `null`. Flag in `notes`:

```json
{ "legacyBackfill": true, "missingBillingInfo": true }
```

CA sees the flag, knows why address is empty.

### Pre-GST → Post-GST switch

Independent of migration. When `gstin` is added to `CURRENT_SUPPLIER`:

- New invoices auto-pick 18% logic via `computeInvoiceTax()`.
- Old invoices unaffected (their snapshot's `gstin` is `undefined`).
- One commit. No data migration.

---

## 8. Testing & Error Handling

### Unit tests (pure functions)

| Function | Cases |
|----------|-------|
| `indianFY(date)` | Apr 1, Mar 31, Dec 15, leap year Feb 29, IST vs UTC boundary |
| `computeInvoiceTax()` | Pre-GST; post-GST intra-state; post-GST inter-state; ₹1.50 rounding edge; missing buyer state defaults to supplier |
| `formatInvoiceNumber(fy, seq)` | `(2026-27, 1) → "BV/2026-27/0001"`; `(2026-27, 9999) → "BV/2026-27/9999"`; overflow >9999 throws |
| `buildBuyerSnapshot(user, billing)` | Full data; NULL billing_info; missing optional fields (gstin, address2) |
| State-code lookup | All 36 states/UTs; unknown state throws |

### Integration tests (real Postgres in CI)

| Scenario | Assertion |
|----------|-----------|
| Concurrent `issueInvoice()` × 10 | All 10 get distinct sequential numbers. Counter at +10. |
| Replay `issueInvoice(orderId)` | Returns existing number. Counter not bumped. |
| Verify route + webhook on same payment | Exactly one invoice issued. |
| Mutate `users.billing_info` after issue | `invoices.buyerSnapshot` unchanged. |
| Mutate `CURRENT_SUPPLIER` after issue | `invoices.supplierSnapshot` unchanged. |
| Void issued invoice | `status='void'`, `voidedAt` set, number preserved. Counter not decremented. |
| Backfill on dirty DB | Run twice → no duplicates. |
| FY rollover (Mar 31 IST → Apr 1 IST) | First April invoice = `BV/2026-27/0001`, not continuation. |
| GST regime switch mid-test | Old invoices: zero tax. New invoices: 18% breakup. |

### Schema invariants

DB-level:
- `CHECK (total_paise = taxable_total_paise + cgst_paise + sgst_paise + igst_paise)`
- `CHECK ((cgst_paise > 0 AND igst_paise = 0) OR (cgst_paise = 0 AND sgst_paise = 0))`
- `CHECK (status IN ('draft','issued','paid','void'))`

App-level:
- Rows with `status='issued'` never have `invoiceNumber IS NULL`.
- Rows with `status='void'` keep their original `invoiceNumber`.

### Failure-mode behavior

| Failure | Response |
|---------|----------|
| Razorpay order create throws | 502. No DB writes. |
| Signature verify fails | 400. Sub stays pending, invoice stays draft. |
| `issueInvoice()` throws between counter bump and invoice UPDATE | Transaction rollback → counter unchanged. |
| Email send fails | Log. Invoice already in DB. Admin can resend. |
| Webhook for unknown order ID | 404, log. No auto-create. |
| Unknown buyer state at billing-info save | 400 at save time, not at checkout. Validate early. |
| `/billing?ref=...` for another user's order | 403/404. Auth check already present. |

### Observability

- Structured log: `[invoice] issued <number> for user <id> sub <id> total <paise>`.
- Counter metric `invoices_issued_total{fy, regime}`.
- Daily gap-check cron (Section 5). Alerts on missing numbers.
- Weekly Razorpay reconciliation script vs settlement CSV.

### Pre-deploy checklist

- [ ] Backfill dry-run output reviewed by founder + CA partner.
- [ ] Tax math validated against 5 hand-computed sample invoices.
- [ ] Postgres transaction isolation = `READ COMMITTED` (default; counter relies on it).
- [ ] Razorpay test-mode payments produce expected invoice rows.
- [ ] DB backup taken before each phase migration in prod.

---

## 9. Open Questions

- Confirm SAC code `999293` (commercial training) with CA partner before first post-GST invoice.
- Decide consumer-facing UI on `/plans` post-GST: "₹5899 incl. GST" vs "₹4999 + ₹900 GST".
- Need an admin UI for void / credit-note operations, or is direct DB acceptable until volume grows?
- Resend template for invoice email — keep current, or redesign once tax breakup appears?

## 10. Out of Scope

- Recurring subscriptions (renewals). Not on roadmap.
- Multi-currency. INR only.
- Credit notes table (designed in Section 5 naming, built later).
- Admin-side invoice authoring UI (data model supports it; UI in a follow-up).
- TDS handling for B2B vCFO retainer (handle when first vCFO contract is signed).

---

## 11. Next Step

After founder review and CA partner sanity-check, generate an implementation plan via `superpowers:writing-plans` covering migrations, app code, backfill script, and tests in deployable phases.
