# SECURITY_REPORT.md — Pre-Launch Security Audit

**Application:** Bodha Ventures — Financial Education Web App  
**Date:** 2026-05-10  
**Auditors:** Agents A–E (parallel audit)  
**Branch:** `features`

---

## Executive Summary

This audit reveals **7 Critical, 10 High, 10 Medium, and 3 Low** severity findings. **The application is NOT safe to launch in its current state.**

The three most devastating issues:

1. **All paid course content ships in the client-side JS bundle** — any user (or visitor) can extract every chapter of every module by reading the JavaScript. The paywall is cosmetic.
2. **The `subscribed` cookie is trivially forgeable** — it's an unsigned `"1"` that grants access to `/modules/*`. Any logged-in user can set it and bypass payment.
3. **The middleware (`proxy.ts`) may not be active** — Next.js requires `middleware.ts` at the root. The file is named `proxy.ts` and may never execute, meaning route protection is absent entirely.

Combined, these mean: **all content is freely accessible to everyone, right now.**

---

## Findings by Severity

### CRITICAL (7 findings) — Blocks Launch

---

#### C1: Course Content Embedded in Client-Side JS Bundle

**Agents:** C-1, E-1, B-2  
**Location:** All files under `app/modules/*/page.tsx` (10 modules, ~12,000+ lines of bilingual content)

**Description:** Every module page uses `"use client"` and hardcodes all chapter content (English + Kannada) as JSX. Next.js compiles this into JavaScript chunks served from `/_next/static/`. Any browser downloads the full content regardless of authentication or subscription status. The proxy redirect is a navigation guard only — it does not prevent the JS from being fetched.

**Reproduction:**
1. Open DevTools > Network tab on the production site
2. JS chunks at `/_next/static/chunks/app/modules/*/page-*.js` contain full course text
3. `curl https://[domain]/_next/static/chunks/app/modules/money-101/page-[hash].js` — no auth needed

**Impact:** The entire paid product (~119 chapters across 10 modules) is freely readable. Content can be scraped and redistributed.

**Fix:** Move content to database/CMS. Serve via authenticated API routes that verify subscription status server-side before returning content. Module pages become thin shells that fetch content on mount.

```typescript
// app/api/content/[moduleId]/route.ts (NEW)
export async function GET(req: NextRequest, { params }) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sub = await db.getUserSubscription(userId);
  if (!sub || sub.status !== "active") {
    return NextResponse.json({ error: "No active subscription" }, { status: 403 });
  }

  const content = await db.getModuleContent(params.moduleId);
  return NextResponse.json(content);
}
```

---

#### C2: `subscribed` Cookie Forgery — Complete Payment Bypass

**Agents:** B-1, A-7, C-3, D-11, E-2  
**Location:** `proxy.ts:6,22,36,43` | `app/api/orders/verify/route.ts:62-71` | `app/api/orders/bypass/route.ts:59-67`

**Description:** The `subscribed` cookie is set to literal `"1"`, unsigned, unencrypted. The middleware reads it with `request.cookies.get("subscribed")?.value` — any truthy value grants `/modules` access. No database verification occurs. While `httpOnly` prevents JS manipulation, the cookie can be set via browser DevTools, proxy tools, or cookie-editor extensions.

**Reproduction:**
1. Sign up + verify OTP → get `uid` cookie
2. Browser DevTools > Application > Cookies > Add `subscribed=1; path=/`
3. Navigate to `/modules` — full access without payment

**Impact:** Complete paywall bypass for any authenticated user.

**Fix:** Replace cookie-based check with server-side DB lookup of `subscriptions` table:
```typescript
// In middleware
const sub = await db.getUserSubscription(uid);
if (!sub || sub.status !== "active") {
  redirect to /plans
}
```

---

#### C3: Middleware Not Active — `proxy.ts` Not Wired as Next.js Middleware

**Agents:** C-2, D-6  
**Location:** `proxy.ts` (file exists) | `middleware.ts` (file MISSING at project root)

**Description:** Next.js requires middleware at `middleware.ts` or `middleware.js` at project root. The route protection logic exists in `proxy.ts` but there is no `middleware.ts`. The function may never execute, meaning ALL route protection (login checks, subscription checks, redirects) is non-functional.

**Reproduction:**
1. Open incognito browser (no cookies)
2. Navigate directly to `/modules/money-101`
3. Page loads without redirect

**Impact:** All "protected" routes accessible to unauthenticated, unsubscribed visitors.

**Fix:**
```typescript
// middleware.ts (NEW — project root)
export { proxy as middleware, config } from "./proxy";
```

---

#### C4: No Rate Limiting on OTP Verification — Brute-Force

**Agents:** A-2, D-2  
**Location:** `app/api/verify-otp/route.ts` (entire file)

**Description:** `/api/verify-otp` has zero rate limiting. 6-digit OTP = 900,000 combinations. OTP not cleared on failed attempts (only on success). 5-minute expiry window. At ~3,000 req/s, full keyspace exhausted before expiry. Even at modest rates, high success probability.

**Reproduction:**
1. POST `/api/login` with victim's email
2. Script 900,000 POST requests to `/api/verify-otp` with sequential OTPs
3. One succeeds → attacker gets `uid` session cookie

**Impact:** Complete account takeover of any user. Attacker only needs victim's email.

**Fix:**
```typescript
// In verify-otp/route.ts — add per-email attempt limiting
const MAX_VERIFY_ATTEMPTS = 5;
// Track in DB or in-memory store
// After MAX_VERIFY_ATTEMPTS, clear OTP and return 429
```

Also clear OTP after N failed attempts in `postgres.ts:verifyOTP`.

---

#### C5: Insecure OTP Generation — `Math.random()`

**Agents:** A-1, D-3  
**Location:** `app/lib/utils/otp.ts:7`

**Description:** `Math.random()` uses V8's xorshift128+ PRNG — not cryptographically secure. State can be reconstructed from observed outputs. Attacker who signs up multiple times can predict future OTPs for other users.

**Fix:**
```typescript
import crypto from "crypto";
return crypto.randomInt(100000, 999999).toString();
```

---

#### C6: Hardcoded Test Emails with Static OTP `000000`

**Agents:** A-4, B-10, C-8, D-1, E-3  
**Location:** `app/lib/utils/otp.ts:1-5`

**Description:** `["hdamogha@gmail.com", "priyadharshan.97@gmail.com"]` hardcoded in source. Always get OTP `000000`. Skip rate limiting. Can use `/api/orders/bypass` for free subscriptions. If source is ever exposed (public repo, build artifacts), anyone can log in as these accounts.

**Reproduction:**
1. POST `/api/signup` with `hdamogha@gmail.com`
2. POST `/api/verify-otp` with OTP `000000`
3. POST `/api/orders/bypass` with `{ planId: "founding" }` → free access

**Fix:** Move to env vars, disable in production:
```typescript
const TEST_EMAILS = process.env.NODE_ENV === "production" ? [] :
  (process.env.TEST_EMAILS ?? "").split(",").filter(Boolean);
```

---

#### C7: Unsigned `uid` Cookie — Session Hijacking

**Agents:** A-3, B-7, C-4, D-11  
**Location:** `app/api/verify-otp/route.ts:30-38` | `app/api/signup/route.ts:61`

**Description:** The `uid` cookie contains the raw UUID user ID — not signed, not encrypted. The signup endpoint leaks this ID in its response (`{ userId: user.id }`). Any caller who obtains a user ID can impersonate that user by setting `uid=<their-uuid>`. Most API routes only check `if (!userId) return 401` — they don't verify the UUID is valid or the user is verified.

**Reproduction:**
1. POST `/api/signup` with any email → response includes `userId`
2. Set `uid` cookie to that UUID
3. Access all authenticated endpoints as that user

**Fix:**
1. Remove `userId` from signup response
2. Use signed session tokens (iron-session, JWT with HMAC)
3. Validate user existence + verified status in every API route

---

### HIGH (10 findings)

---

#### H1: No Razorpay Webhook Handler

**Agents:** B-3, B-6  
**Location:** No webhook endpoint exists anywhere in codebase

**Description:** Payment confirmation relies entirely on client-side callback. No server-to-server webhook for `payment.captured`, `payment.failed`, `payment.refunded`, or `payment.dispute.created`. If browser closes after payment but before callback, subscription never activates. If user chargebacks, access is never revoked.

**Impact:** Financial loss via pay → access → chargeback → keep access. Lost payments for legitimate users.

**Fix:** Create `app/api/webhooks/razorpay/route.ts` with signature verification (`RAZORPAY_WEBHOOK_SECRET`) and handlers for all payment events.

---

#### H2: Payment Replay — No Idempotency on Verify

**Agents:** B-4  
**Location:** `app/api/orders/verify/route.ts:32-38` | `app/lib/db/postgres.ts:226-249`

**Description:** Verify endpoint doesn't check if subscription is already active. `activateSubscription` SQL has no `WHERE status = 'pending'` guard. Same valid payment data can be replayed → generates new invoice numbers each time.

**Fix:** Add `if (sub.status === "active") return early` + add `AND status = 'pending'` to UPDATE SQL.

---

#### H3: Race Condition in Payment Verification

**Agents:** B-5  
**Location:** `app/api/orders/verify/route.ts:32-38` | `app/lib/db/postgres.ts:233-247`

**Description:** Two concurrent verify requests can both pass `getSubscriptionByOrderId` check before either calls `activateSubscription`. Both generate separate invoice numbers. Invoice number generation has TOCTOU bug.

**Fix:** Add `WHERE status = 'pending'` + `FOR UPDATE` row locking + UNIQUE constraint on `invoice_number`.

---

#### H4: HTML Injection in Email Templates

**Agents:** D-4  
**Location:** `app/lib/email/send.ts:114-115,262-265`

**Description:** `firstName`, `lastName`, `email` interpolated directly into HTML email bodies without escaping. User registers with `<b>INJECTED</b>` as name → rendered in invoice emails.

**Fix:** Add `escapeHtml()` function, apply to all interpolated user data. Also validate name format on signup.

---

#### H5: No CSRF Protection

**Agents:** D-5  
**Location:** All POST endpoints in `app/api/`

**Description:** Cookie-based auth with `sameSite: "lax"`, no CSRF tokens. Next.js 16.0.7 has CVE GHSA-mq59-m269-xvcx (null origin bypass for Server Actions CSRF).

**Fix:** Upgrade Next.js to 16.2.6+. Add Origin header validation in middleware for all mutations.

---

#### H6: Drizzle ORM SQL Injection CVE

**Agents:** D-7  
**Location:** `package.json` — `drizzle-orm: "^0.45.0"` | GHSA-gpj5-g38j-94v9

**Description:** drizzle-orm < 0.45.2 has SQL injection via improperly escaped identifiers.

**Fix:** `npm install drizzle-orm@0.45.2`

---

#### H7: TLS Certificate Validation Disabled for Database

**Agents:** D-8  
**Location:** `app/lib/db/connection.ts:9`

**Description:** `rejectUnauthorized: false` disables TLS cert verification for Neon Postgres connection. Vulnerable to MITM attacks on DB traffic.

**Fix:** Set `rejectUnauthorized: true`. Neon uses publicly trusted certs — no custom CA needed.

---

#### H8: API Routes Skip User Existence/Verified Checks

**Agents:** A-12  
**Location:** `app/api/modules/route.ts`, `app/api/consent/route.ts`, `app/api/users/billing-info/route.ts`

**Description:** Routes check only `if (!userId)` — don't verify UUID maps to real user or that user is verified. Arbitrary UUID accepted.

**Fix:** Create shared `getAuthenticatedUser(req)` helper that validates user exists and is verified. Use in all routes.

---

#### H9: Course Images/Tools in Unprotected Public Directory

**Agents:** C-7, E-4  
**Location:** `public/` — 193+ course images, 2 Excel tools

**Description:** All course illustrations and financial tools served as static assets with no auth. Files include `Indian Stock Valuation Dashboard.xlsx` and `Mutual Fund Comparing tool.xlsx` — premium paid features.

**Fix:** Move to private directory, serve via authenticated API route.

---

#### H10: Seat Count Race Condition

**Agents:** B-9  
**Location:** `app/api/orders/create/route.ts:35-39`

**Description:** Seat check counts only `active` subscriptions, not `pending`. Two concurrent requests for last seat both pass → seat limit exceeded.

**Fix:** Count `pending + active` in seat check, or use `SELECT ... FOR UPDATE`.

---

### MEDIUM (10 findings)

---

#### M1: Account Enumeration via Error Responses

**Agents:** A-5, D-16  
**Location:** `app/api/login/route.ts:12` | `app/api/signup/route.ts:22`

Login returns 404 "User not found" vs 200. Signup returns 409 "User already exists" vs 200. Enables email enumeration.

**Fix:** Return identical responses regardless of account existence.

---

#### M2: No Bot Protection (No CAPTCHA, No IP Throttling)

**Agents:** A-6  
**Location:** `app/api/signup/route.ts`, `app/api/login/route.ts`

No CAPTCHA, no IP rate limiting, no disposable-email blocking, no +alias normalization. Enables mass signup, email bombing, enumeration.

**Fix:** Add Cloudflare Turnstile + IP-based rate limiting.

---

#### M3: Email Case-Sensitivity Inconsistency

**Agents:** A-8  
**Location:** `app/lib/db/postgres.ts` — `getUserByEmail` (case-insensitive) vs `saveOTP`, `checkRateLimit`, `verifyOTP` (case-sensitive)

Rate limit bypass by alternating email case: `victim@gmail.com`, `Victim@gmail.com`, etc.

**Fix:** Normalize `email.trim().toLowerCase()` at API entry point.

---

#### M4: OTP Not Cleared After Failed Attempts

**Agents:** A-9  
**Location:** `app/lib/db/postgres.ts:99-121`

OTP only cleared on success. Remains valid for full 5-min window regardless of failed attempts. Amplifies C4.

**Fix:** Clear OTP after 5 failed verification attempts.

---

#### M5: No Security Headers

**Agents:** D-9  
**Location:** `next.config.ts` (empty config)

No CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

**Fix:** Add `headers()` config to `next.config.ts` with all standard security headers.

---

#### M6: PII Logged to Console

**Agents:** D-10  
**Location:** `app/api/signup/route.ts:9,17,42,48,54` | `app/api/login/route.ts:10`

Emails, names logged on every signup/login. Violates data protection regs (GDPR, India DPDP Act).

**Fix:** Remove or redact PII from log statements. Use hashed identifiers.

---

#### M7: Next.js 16.0.7 — Multiple CVEs

**Agents:** D-14  
**Location:** `package.json` — `next: "16.0.7"`

11 vulnerabilities including CSRF bypass, source code exposure, DoS vectors.

**Fix:** `npm install next@16.2.6`

---

#### M8: Axios Transitive Dependency — 15+ CVEs

**Agents:** D-13  
**Location:** Transitive via `razorpay` package

SSRF bypass, prototype pollution, CRLF injection, header injection.

**Fix:** `npm audit fix` or add `"overrides": { "axios": "^1.15.2" }` to package.json.

---

#### M9: Logout Doesn't Clear `subscribed` Cookie

**Agents:** C-9, E-5  
**Location:** `app/api/logout/route.ts`

`uid` cleared but `subscribed` persists (10-year maxAge). Next user on same browser inherits subscription status.

**Fix:** Clear `subscribed` cookie in logout handler.

---

#### M10: `subscribed` Cookie Not Restored on Re-Login

**Agents:** B-8  
**Location:** `app/api/verify-otp/route.ts`

Paying user who clears cookies or logs in on new device doesn't get `subscribed` cookie back. Hits dead end at `/plans` (409 "Already subscribed" on order create).

**Fix:** Check subscription status in `verify-otp` and restore cookie. (Interim — real fix is C2: DB-based gating.)

---

### LOW (3 findings)

---

#### L1: No Session Rotation / Server-Side Invalidation

**Agents:** A-10  
**Location:** `app/api/verify-otp/route.ts:30-38`

`uid` = static DB primary key. Never rotates. Logout clears cookie client-side but doesn't invalidate server-side. Stolen `uid` works forever.

**Fix:** Implement session table with random tokens. Rotate on login. Delete on logout.

---

#### L2: Stale Copy Files in Source Tree

**Agents:** E-6  
**Location:** `app/modules/mutual-funds-101/page-copy.tsx` | `app/modules/stock-market/page copy.tsx`

Backup files with full course content. Unnecessary duplication.

**Fix:** Delete both files.

---

#### L3: Sensitive Source Documents in `app/docs/`

**Agents:** C-10, E-7  
**Location:** `app/docs/` — 21 files (DOCX, XLSX, HTML)

Original course content in editable format. Not served by Next.js but committed to git. Repo exposure leaks all IP.

**Fix:** Move outside project or add `app/docs/` to `.gitignore`.

---

## Test-Email Allowlist Assessment

| Check | Status |
|-------|--------|
| Allowlist in server-side config/env vars | FAIL — hardcoded in `otp.ts` source |
| Checked after authentication | PASS — bypass route verifies `uid` cookie + `isTestEmail(user.email)` |
| Cannot be extended by normal user action | PASS — array is hardcoded constant |
| Does not grant admin privileges | PASS — no admin role exists |
| Signup restricted for test emails | FAIL — anyone can register these emails if not already taken |
| Allowlist location documented | HERE: `app/lib/utils/otp.ts:1` — `["hdamogha@gmail.com", "priyadharshan.97@gmail.com"]` |

---

## Positive Findings

| Area | Status |
|------|--------|
| Razorpay order amount computed server-side from plan config | PASS |
| HMAC-SHA256 signature verification on payment | PASS |
| Razorpay key_secret not in client bundle | PASS |
| No GraphQL / no admin routes / no file upload | N/A |
| `.env.local` not tracked in git | PASS |
| No SSRF vectors (no user-supplied URL fetching) | PASS |
| No command injection (no exec/spawn usage) | PASS |
| Source maps disabled in production (Next.js default) | PASS |
| No `isPaid` localStorage flags trusted by backend | PASS |
| Drizzle ORM uses parameterized queries throughout | PASS |
| Mass-assignment not possible on billing-info endpoint | PASS |
