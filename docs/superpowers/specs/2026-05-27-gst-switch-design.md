# GST Regime Switch — Design Spec

**Date:** 2026-05-27
**Status:** Approved (design phase)
**Author:** Priyadharshan (CTO, Bodha)
**Context:** Bodha Ventures LLP received GSTIN `29ABGFB6431R1ZT` (Karnataka). Course pricing must now collect 18% GST on all sales. Invoices must comply with Indian GST mandatory-fields rules.

## Goals

- Charge 18% GST on top of existing plan base prices (no plan-price changes).
- Issue GST-compliant tax invoices for every new purchase.
- Correctly split CGST/SGST (intra-state, Karnataka) vs IGST (inter-state).
- Display all 11 govt-mandated invoice fields.
- Maintain immutable audit trail in `invoices` table for GSTR-1 filings.
- Generate downloadable PDF invoices via R2 storage.

## Non-Goals

- GSTR-1 monthly export automation (future phase).
- Refund / credit-note flow.
- B2B customer GSTIN collection.
- Multi-currency.
- Customer-facing announcement of GST switch (it's a tax, not a margin change).

## Key Decisions

| Topic | Decision |
|-------|----------|
| Pricing model | Base price + 18% GST added on top (e.g. ₹4999 → ₹5899 total) |
| Plans page display | Show base prominently, "+18% GST" sub-line, total in micro-text |
| GSTIN | `29ABGFB6431R1ZT` hardcoded in `CURRENT_SUPPLIER` |
| HSN/SAC code | `999293` (commercial training & coaching) |
| GST rate | 18% (CGST 9% + SGST 9% intra-state; IGST 18% inter-state) |
| Invoice numbering | Existing `BV/YYYY-YY/NNNN` format; seq raised to 99999/FY |
| Invoice serial overflow | Raised cap from 9999 → 99999 per FY |
| Unit of measure | `Nos` |
| Rate column | Table column header `Rate` (per-row unit price pre-tax) |
| Signature | "This is a system-generated invoice and does not require a signature." |
| Audit storage | Store paise totals (taxable/cgst/sgst/igst/total), derive % at read time |
| Place of supply | 2-digit GST state code per govt norms (e.g. `29` Karnataka) |
| PDF generation | Server-side Puppeteer + `@sparticuz/chromium` |
| PDF storage | Cloudflare R2, bucket `bodha-invoices`, generated once at issuance |
| PDF delivery | Email attachment + `/billing` download button (signed URL, 1h expiry) |
| Cutover | Single deploy, no feature flag, no dual-pricing window |

## Architecture

### Data flow on new purchase (intra-state buyer, Karnataka)

```
plans page (base ₹4999, +18% GST note)
  ↓
POST /api/orders/create
  ↓
computeInvoiceTax(taxablePaise=499900, buyerState="29", supplier)
  → { cgstPaise: 44991, sgstPaise: 44991, igstPaise: 0, totalPaise: 589882 }
  ↓
razorpay.orders.create({ amount: 589882 })
  ↓
db.createSubscription({ amountPaise: 589882 })
  ↓
createDraftInvoice({ taxablePaise: 499900 })  → invoices row, status='draft'
  ↓
[user pays via Razorpay]
  ↓
POST /api/orders/verify
  ↓
issueInvoice(orderId, paymentId)
  → assigns BV/2026-27/NNNN via invoice_counters
  → renders HTML → Puppeteer → PDF → R2 upload
  → status='paid', pdfUrl saved
  ↓
activateSubscription(orderId, paymentId)
  ↓
sendInvoiceEmail(...) with PDF attachment
```

### Inter-state buyer (e.g. Maharashtra `27`)

Same flow; tax split:
- `cgstPaise: 0, sgstPaise: 0, igstPaise: 89982, totalPaise: 589882`
- Invoice renders single "IGST @ 18%" row instead of CGST+SGST rows.

## Components

### 1. Supplier config (`app/lib/billing/supplier.ts`)
- Uncomment / set `gstin: "29ABGFB6431R1ZT"` in `CURRENT_SUPPLIER`.
- Verify `stateCode: "29"`, legal name, address.

### 2. Tax computation (`app/lib/billing/tax.ts`)
- Already exists from prior phase. Verify: intra-state → CGST+SGST split, inter-state → IGST, rounding to paise (no half-paise drift).
- Edge case: `taxablePaise=0` (bypass) → all tax = 0, total = 0.

### 3. Invoice numbering (`app/lib/billing/fy.ts`)
- Already raised seq cap to 99999. No further change.

### 4. Invoice line items (`app/lib/db/types.ts`)
- Add `unit: string` to `InvoiceLineItem` type.
- Set `unit: "Nos"` in `lib/billing/issue.ts` and `lib/billing/backfill.ts` (legacy default `"Nos"` for backfilled rows).

### 5. Number-to-words util (`app/lib/billing/words.ts`)
- New file. Indian numbering (lakh / crore, not million / billion).
- Input: paise (integer). Output: `"Five Thousand Eight Hundred Ninety Eight Rupees and Eighty Two Paise Only"`.
- No external dep.

### 6. HTML invoice template (`app/lib/billing/render/invoice-html.ts`)
- New file. Renders invoice HTML from invoice row's snapshot columns (immutable).
- Single template, inline-styled, table-based (email-client compat).
- Branches on `cgstPaise > 0` (intra-state) vs `igstPaise > 0` (inter-state).
- Inputs: invoice row (already contains buyer/supplier snapshots, line items, all paise totals).

### 7. PDF generation (`app/lib/billing/render/invoice-pdf.ts`)
- New file. Uses `puppeteer-core` + `@sparticuz/chromium`.
- Takes HTML from #6 → renders to PDF buffer.
- Uploaded to R2 by `lib/billing/storage.ts`.

### 8. R2 storage (`app/lib/billing/storage.ts`)
- New file. Wraps `@aws-sdk/client-s3` (R2 is S3-compatible).
- Functions:
  - `uploadInvoicePdf(invoiceId, buffer)` → returns object key
  - `getSignedInvoicePdfUrl(invoiceId, ttlSeconds)` → signed download URL
- Env: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET=bodha-invoices`.

### 9. Issuance update (`app/lib/billing/issue.ts`)
- `issueInvoice` extended: after assigning serial, render HTML → PDF → upload to R2 → store object key on invoice row.
- New column on `invoices`: `pdf_object_key TEXT NULL`.

### 10. Email template (`app/lib/email/templates/invoice.tsx`)
- Update to render GST-compliant body (HTML).
- Attach PDF buffer to email send.

### 11. Plans page (`app/plans/page.tsx`)
- Show base price prominently.
- Sub-line: "+ 18% GST".
- Micro-text: "₹X,XXX inclusive of GST" (computed).

### 12. Checkout summary
- Order summary modal / page: show taxable, CGST+SGST OR IGST (based on buyer state), total.
- Branch on `getStateCode(billingInfo.state) === "29"`.

### 13. Billing API (`app/api/billing/route.ts`)
- Return full breakdown for `/billing` page: taxable, cgst, sgst, igst, total, invoiceNumber, pdfUrl (signed).

### 14. Billing page (`app/billing/page.tsx`)
- Render breakdown table.
- "Download invoice" button → calls `GET /api/billing/invoice/:id/pdf` → 302 to signed R2 URL.

### 15. PDF download route (`app/api/billing/invoice/[id]/pdf/route.ts`)
- New route. Auth-gated by `uid` cookie, verify invoice belongs to user.
- Returns 302 redirect to signed R2 URL (1h TTL).

## Schema Changes

Migration `004_invoice_pdf.sql`:

```sql
ALTER TABLE invoices ADD COLUMN pdf_object_key TEXT NULL;
```

`InvoiceLineItem` jsonb structure (no DDL — jsonb):
```ts
{
  description: string;
  hsnSac: string;
  qty: number;
  unit: string;            // NEW: "Nos"
  unitPriceRs: number;
  taxableRs: number;
}
```

## Invoice Layout (rendered HTML / PDF)

```
─────────────────────────────────────────────────────────
TAX INVOICE                              BV/2026-27/0042
                                         Date: 27-May-2026
─────────────────────────────────────────────────────────
SUPPLIER                          | RECIPIENT
Bodha Ventures LLP                | Priyadharshan S
[address]                         | [address]
Karnataka — 29                    | Karnataka — 29
GSTIN: 29ABGFB6431R1ZT            | (unregistered)
─────────────────────────────────────────────────────────
Place of Supply: Karnataka (29)
─────────────────────────────────────────────────────────
# | Description | HSN/SAC | Qty | Unit | Rate    | Taxable
1 | Regular —   | 999293  | 1   | Nos  | 4999.00 | 4999.00
    Bodha PFP
─────────────────────────────────────────────────────────
                       Taxable Total: ₹4,999.00
                       CGST @ 9%:     ₹  449.91
                       SGST @ 9%:     ₹  449.91
                       ─────────────────────────
                       Grand Total:   ₹5,898.82
─────────────────────────────────────────────────────────
Amount in words: Five Thousand Eight Hundred Ninety Eight
                 Rupees and Eighty Two Paise Only
─────────────────────────────────────────────────────────
Razorpay Order: order_xxx | Payment: pay_xxx

This is a system-generated invoice and does not require
a signature.
─────────────────────────────────────────────────────────
```

11 mandatory GST invoice fields covered:
1. Supplier name, address, GSTIN ✓
2. Consecutive serial number ≤16 chars ✓ (`BV/YYYY-YY/NNNN`)
3. Invoice date ✓
4. Recipient name, address ✓ (snapshot from billing info)
5. HSN/SAC code ✓ (`999293`)
6. Description of service ✓
7. Quantity + unit ✓ (`1 Nos`)
8. Total value ✓
9. Taxable value + rate ✓
10. Tax amount split (CGST/SGST or IGST) ✓
11. Place of supply ✓

## Audit Trail

Every invoice row stores:
- `taxable_total_paise`, `cgst_paise`, `sgst_paise`, `igst_paise`, `total_paise`
- `place_of_supply` (2-digit state code)
- `buyer_snapshot`, `supplier_snapshot` (jsonb, immutable)
- `line_items` (jsonb with hsnSac, qty, unit, rates)
- `razorpay_order_id`, `razorpay_payment_id`
- `invoice_number`, `invoice_date`, `issued_at`, `status`

Rate% is derived at read time (always 18% for current regime). If GST rates change in future, snapshot rate explicitly then.

Sample audit query (GSTR-1-ready):
```sql
SELECT
  invoice_number,
  invoice_date,
  buyer_snapshot->>'name'        AS buyer_name,
  buyer_snapshot->>'gstin'       AS buyer_gstin,
  place_of_supply,
  taxable_total_paise / 100.0    AS taxable_value,
  cgst_paise / 100.0             AS cgst,
  sgst_paise / 100.0             AS sgst,
  igst_paise / 100.0             AS igst,
  total_paise / 100.0            AS invoice_total
FROM invoices
WHERE status = 'paid'
  AND invoice_date >= '2026-04-01'
  AND invoice_date <  '2027-04-01'
ORDER BY invoice_number;
```

## Error Handling

- **PDF generation fails**: invoice still issued with serial + status=paid. `pdf_object_key` stays NULL. Log error. `/billing` shows "Download unavailable, contact support". Email send without attachment.
- **R2 upload fails**: same as above — degrade gracefully, log, don't block payment confirmation.
- **Invalid buyer state code**: `getStateCode` returns supplier's state as fallback (treats as intra-state). Already implemented.
- **Bypass route (₹0 invoice)**: tax math handles `taxablePaise=0` cleanly. Invoice rendered with all-zero tax rows for consistency (do not skip rows — keeps layout predictable).

## Testing

### Unit tests (vitest)
- `tax.ts` — intra/inter splits, paise rounding edge cases
- `fy.ts` — FY boundaries (Mar 31 / Apr 1), seq cap 99999
- `words.ts` — Indian numbering boundary (1, 99, 100, 999, 1234, 99999, 100000 lakh)
- `issue.ts` — race-safe serial assignment, PDF failure path doesn't block issuance
- `getStateCode` — known states, unknown fallback, case-insensitive

### Integration tests
- `POST /api/orders/create` Karnataka buyer → invoice has cgst+sgst
- Same Maharashtra buyer → igst only
- Bypass route → ₹0 invoice, no tax math broken
- Backfill idempotent re-run

### Snapshot tests
- HTML template render for intra + inter fixtures vs committed `.html` snapshots

### PDF smoke test
- Generate PDF for fixture → assert magic bytes `%PDF-`, non-empty, opens

### Manual QA
- Plans page: base + "+18% GST" visible
- Checkout: KA buyer → CGST+SGST; non-KA → IGST
- Test bypass purchase E2E
- Real ₹1 Razorpay purchase → email arrives with PDF, GSTIN visible, totals match
- `/billing` download → PDF has all 11 fields
- Audit query returns expected splits

## Rollout

### Pre-cutover
1. Add R2 bucket + env vars in Vercel
2. Implement in `mobile-view-01` branch
3. Run full test suite + manual QA on dev DB
4. Vercel preview deploy → ₹1 real Razorpay test → verify PDF + email + audit row

### Cutover (single deploy)
1. PR to `main` → review → merge → auto-deploy
2. Immediately smoke test prod: bypass purchase by test email → verify

### Rollback
- Vercel instant revert deploy
- No DB rollback needed (only additive: `pdf_object_key` column)
- Issued GST invoices stay valid (immutable)

### Post-cutover
- Watch first 5-10 real purchases manually
- Verify CA can extract GSTR-1 data from audit query

## Open Questions

None. All design decisions confirmed by user.

## References

- Indian GST invoice rules: 11 mandatory fields, serial ≤16 chars
- Prior spec: `docs/superpowers/specs/2026-05-25-billing-invoice-design.md`
- State codes: `app/lib/billing/state-codes.ts`
- Supplier config: `app/lib/billing/supplier.ts`
- Existing invoice tables: migration `002_invoices.sql`
