# Admin Portal — Design Spec

**Date:** 2026-06-03
**Status:** Approved (brainstorming)
**Owner:** Founders / CTO

## Purpose

Internal admin portal for founders to monitor signups/revenue, onboard users manually, and manage referral offers. Lives under `/admin/*`, gated by an `ADMIN_EMAILS` env CSV.

## Non-Goals (v1)

- No role hierarchy (all admins equal).
- No audit log of admin actions (add later if needed).
- No pagination on ledger (cap 100 rows v1).
- No emails sent from onboarding (admin shares info out-of-band).
- No edits to existing subscriptions/invoices through the portal.

---

## 1. Auth & Routing

### Routes

```
/admin/login          standalone OTP page, no admin chrome
/admin                dashboard (stats + 2 graphs)
/admin/signups        subscriptions ledger
/admin/onboard        manual user creation
/admin/referrals      enable + manage referral codes
```

### Auth flow

1. `/admin/login` (client form: email + OTP).
2. POST `/api/admin/login` with `{email}`:
   - Reject if `email` not in `ADMIN_EMAILS` (no OTP sent — avoids enumeration / spam from non-admins).
   - Else reuse existing OTP send logic (same as `/api/login`), including test-email static OTP `000000`.
3. POST `/api/admin/verify-otp` with `{email, otp}`:
   - Verify OTP via existing logic.
   - Re-check `ADMIN_EMAILS` membership (defense in depth).
   - Upsert `users` row if missing: `verified=true`, no plan/billing.
   - Set cookies: `uid` (existing, httpOnly, sameSite=lax, 7d) + `admin=1` (httpOnly, sameSite=lax, 7d).
   - Return `{ok: true}`. Client redirects to `/admin`.
4. `middleware.ts` matcher `/admin/:path*` (excluding `/admin/login`):
   - Read `uid` + `admin` cookies.
   - Lookup user by id, re-verify `email ∈ ADMIN_EMAILS`.
   - On fail → redirect `/admin/login`.
5. `app/admin/layout.tsx` runs same check server-side (defense in depth) and renders admin chrome (header, nav links to dashboard/signups/onboard/referrals, sign-out button).

### Helper module

`app/lib/admin.ts`:

```ts
export function getAdminEmails(): Set<string>
export function isAdminEmail(email: string): boolean
export async function getAuthenticatedAdmin(req: NextRequest): Promise<User | null>
```

- `getAdminEmails()` reads `process.env.ADMIN_EMAILS`, splits on `,`, trims, lowercases. Memoized at module load.
- `getAuthenticatedAdmin()` mirrors shape of existing `getAuthenticatedUser` in `app/lib/auth.ts`.

### Env

- New `ADMIN_EMAILS` in `.env.local` (CSV).
- Same key added to Vercel project secrets (production + preview).

### Sign out

`POST /api/admin/logout` — clears `uid` and `admin` cookies, redirects `/admin/login`.

---

## 2. Dashboard (`/admin`)

Server component. Single data load via `app/lib/admin/stats.ts → getDashboardStats()`.

### Tiles

- **Total subscribers** — `COUNT(DISTINCT s.user_id)` from `subscriptions s JOIN users u` where `s.status='active'` and `LOWER(u.email) NOT IN <TEST_EMAILS>`.
- **Money collected** — `SUM(i.total_paise)` from `invoices i JOIN users u ON u.id = i.user_id` where `i.status='paid'` and `LOWER(u.email) NOT IN <TEST_EMAILS>`. Displayed in ₹ with thousands separator.
- **Active plan breakdown** — count of active subscriptions grouped by `plan_id`. Tiny inline list under tiles.

### Graphs

Both share x-axis: last 10 IST days (today − 9 → today).

1. **New paying subscribers per day** — `subscriptions` where `status='active'`, grouped by `DATE(created_at AT TIME ZONE 'Asia/Kolkata')`, TEST_EMAILS excluded.
2. **New user signups per day** — `users` where `verified=true`, grouped by `DATE(created_at AT TIME ZONE 'Asia/Kolkata')`, TEST_EMAILS excluded.

Both fill zero-count days via `generate_series` in SQL so x-axis is dense.

### Rendering

`chart.js` (already in deps, used elsewhere in repo). Wrapper component `app/components/admin/DailyBarChart.tsx` is a client component that initializes a chart instance on mount. Props: `{points: {date: string; count: number}[]; label: string}`.

### Files

- `app/admin/page.tsx`
- `app/lib/admin/stats.ts`
- `app/components/admin/DailyBarChart.tsx`

---

## 3. Signups Ledger (`/admin/signups`)

Server component. Single SQL query:

```sql
SELECT s.id, s.created_at, s.plan_id, s.amount_paise,
       u.first_name, u.last_name, u.email,
       i.id AS invoice_id, i.invoice_number
FROM subscriptions s
JOIN users u ON u.id = s.user_id
LEFT JOIN invoices i ON i.subscription_id = s.id AND i.status = 'paid'
WHERE s.status = 'active'
  AND LOWER(u.email) NOT IN (<TEST_EMAILS>)
ORDER BY s.created_at DESC
LIMIT 100;
```

### Table columns

| Date (IST) | Name | Email | Plan | Amount (₹) | Invoice |
|---|---|---|---|---|---|
| 2026-06-02 | Priya S | priya@... | Founding | 999 | [PDF](/api/billing/invoice/{id}/pdf) |

- Plan column shows display name from `app/lib/plans.ts` (lookup by `plan_id`).
- Invoice link opens in new tab. `—` if no paid invoice (edge case for active sub without invoice row).
- Sticky header. Monospaced amount column. Site palette (ink/cream/gold).

### Files

- `app/admin/signups/page.tsx`
- `app/lib/admin/signups.ts` → `getSignupsLedger({limit: 100})`

---

## 4. Manual Onboard Tool (`/admin/onboard`)

Client component form.

### Fields

- `email` (required, lowercased on submit)
- `firstName` (required)
- `lastName` (required)

### Flow

1. POST `/api/admin/users/create` with `{email, firstName, lastName}`.
2. Handler validates admin session (middleware already guards; handler re-checks).
3. Lookup by email:
   - Exists → `409 {error: "user_exists", existingId}` → UI shows "Already onboarded (id: …)".
   - Else insert `users` row: `verified=true`, `otp=null`, `otpExpiry=null`, no `billingInfo`, no subscription.
4. Return `{id, email}`. UI shows "Created user `<email>`. They can sign in at /signin with OTP."

No emails sent. No magic link. User signs in via normal `/signin` OTP later (works because row exists + verified).

### Files

- `app/admin/onboard/page.tsx`
- `app/api/admin/users/create/route.ts`

---

## 5. Referral Management (`/admin/referrals`)

Single page, two panels.

### Panel A — Enable referral

Inputs:

- Identifier — radio toggle: `email` | `userId`, with single text input.
- `code` — uppercase, validated `^[A-Z0-9_-]{3,20}$`.
- Discount type — radio: `percent` | `flat`.
- Discount value — `percent` 1–100 (integer), or `flat` in ₹ (integer, stored as paise).
- `expiresAt` — optional `<input type="date">`.

Submit → POST `/api/admin/referrals/enable` with body `{identifier: {kind: 'email'|'id', value}, code, discount: {type, value}, expiresAt?}`. Server:

1. Resolve user by email/id. 404 if not found.
2. Set `users.canRefer=true`, `users.referralCode=code`.
3. `UPDATE referralOffers SET active=false WHERE owner_user_id=$1 AND active=true` (deactivate prior).
4. Insert new row in `referralOffers` with `discountPercent` or `discountFlatPaise` set (the other null).
5. Return `{ok: true, offerId}`.

### Panel B — Existing active offers

Table query:

```sql
SELECT o.id, o.code, o.discount_percent, o.discount_flat_paise, o.expires_at,
       u.email, u.first_name, u.last_name,
       (SELECT COUNT(*) FROM referral_redemptions r WHERE r.code = o.code) AS redemptions
FROM referral_offers o
JOIN users u ON u.id = o.owner_user_id
WHERE o.active = true
ORDER BY o.created_at DESC;
```

Columns: Owner email · Code · Discount · Expires · Redemptions · Deactivate.

Deactivate button → confirm dialog → POST `/api/admin/referrals/deactivate` `{offerId}` → sets `active=false`. UI refreshes table.

### Shared logic refactor

Move core enable/deactivate logic from `scripts/enable-referrer.ts` into `app/lib/admin/referrals.ts`:

```ts
export async function enableReferralOffer(input: EnableInput): Promise<{offerId: string}>
export async function deactivateReferralOffer(offerId: string): Promise<void>
```

CLI script becomes a thin wrapper around the same function. Web routes call the same function. Single source of truth for business rules.

### Files

- `app/admin/referrals/page.tsx`
- `app/api/admin/referrals/enable/route.ts`
- `app/api/admin/referrals/deactivate/route.ts`
- `app/lib/admin/referrals.ts`
- `scripts/enable-referrer.ts` (refactored to call `app/lib/admin/referrals.ts`)

---

## Cross-cutting

### Security

- Every `/api/admin/*` handler re-checks `getAuthenticatedAdmin(req)` (middleware is convenience, not the only line of defense).
- `ADMIN_EMAILS` is the single source of truth. Removing an email revokes access on next request — no session invalidation needed.
- No CSRF token in v1 (sameSite=lax cookies + admin-only POST endpoints). Add if expanding to higher-risk operations.

### Styling

- Match existing palette in `app/globals.css` (ink, cream, gold).
- Plain HTML elements + minimal CSS. No new UI library.
- Admin layout has distinct top bar (e.g., gold accent) so it's visually clear you're in the admin context.

### Testing

Repo has no automated test infrastructure (no jest/vitest, no `tests/` dir, no test scripts in `package.json`). Verification is manual per task:

- Run `npm run dev`, visit each `/admin/*` route, confirm behavior matches spec.
- For auth: try unauthenticated access → expect redirect to `/admin/login`. Try non-admin email → expect rejection at login API.
- For each API: hit with `curl` (auth cookie required for admin endpoints).
- For SQL queries: spot-check counts/sums against known DB state before deploying.

Adding a test runner is out of scope for v1.

### Migration / data

- No schema changes required.
- No backfill required.

---

## File summary

```
app/
  admin/
    layout.tsx                       # admin chrome + auth guard
    page.tsx                         # dashboard
    login/page.tsx                   # OTP login (no admin chrome)
    signups/page.tsx                 # ledger
    onboard/page.tsx                 # manual onboard form
    referrals/page.tsx               # enable + list panels
  api/admin/
    login/route.ts                   # send OTP (admin-gated)
    verify-otp/route.ts              # verify + set cookies
    logout/route.ts                  # clear cookies
    users/create/route.ts            # manual onboard
    referrals/enable/route.ts
    referrals/deactivate/route.ts
  components/admin/
    DailyBarChart.tsx
    AdminNav.tsx
  lib/
    admin.ts                         # admin email check + getAuthenticatedAdmin
    admin/
      stats.ts                       # dashboard SQL
      signups.ts                     # ledger SQL
      referrals.ts                   # enable + deactivate logic
middleware.ts                        # /admin/:path* guard
scripts/
  enable-referrer.ts                 # refactored to call lib/admin/referrals.ts
.env.local                           # ADMIN_EMAILS added
```
