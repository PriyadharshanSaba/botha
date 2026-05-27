# RECON.md — Pre-Launch Security Recon

**Date:** 2026-05-10
**Project:** Bodha Ventures — Financial Education Web App
**Branch:** `features`

---

## 1. Stack Detection

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Framework** | Next.js (App Router) | 16.0.7 | `"use client"` pages, API route handlers in `app/api/` |
| **Frontend** | React | 19.2.0 | Client components with hooks |
| **Styling** | Tailwind CSS | v4 | PostCSS plugin |
| **Language** | TypeScript | ^5 | Strict not verified |
| **ORM / DB** | Drizzle ORM + `pg` (node-postgres) | drizzle 0.45.0, pg 8.16.3 | Parameterized queries via Drizzle |
| **Database** | PostgreSQL (Neon serverless) | — | Pooled via PgBouncer, SSL enabled |
| **Payments** | Razorpay Node SDK | ^2.9.6 | Test mode keys currently in `.env.local` |
| **Email** | Resend | ^6.10.0 | OTP + invoice emails |
| **Auth model** | Email + OTP (no passwords) | — | 6-digit OTP, 5-min expiry |
| **Session** | Cookie-based (`uid`, `subscribed`) | — | No JWT, no session store |
| **Hosting target** | Vercel (inferred from Neon + env var naming) | — | `next start` for prod |

---

## 2. Auth Model

### Flow
1. **Signup** (`POST /api/signup`): accepts `{firstName, lastName, email}` → creates unverified user → generates 6-digit OTP → emails OTP (or returns static `000000` for test emails) → stores OTP + expiry in `users` table.
2. **Login** (`POST /api/login`): looks up verified user by email → generates OTP → emails it (skipped for test emails).
3. **OTP Verification** (`POST /api/verify-otp`): verifies OTP against `users.otp` column → marks user verified → sets `uid` cookie (7-day, httpOnly, secure in prod, sameSite=lax) → clears OTP.
4. **Logout** (`POST /api/logout`): clears `uid` cookie.

### Password Hashing
**N/A** — No passwords. Auth is purely OTP-based.

### OTP Generation
- **File:** `app/lib/utils/otp.ts`
- `Math.floor(100000 + Math.random() * 900000)` — **NOT cryptographically secure** (uses `Math.random()`)
- Test emails always get `"000000"`

### Session / Token Issuance
- `uid` cookie = raw user UUID from DB (not signed, not encrypted)
- `subscribed` cookie = literal string `"1"` (not signed)
- No CSRF token
- No session rotation on login (cookie just set)

### Rate Limiting
- OTP: 2 attempts/day per email via `otp_attempts` table (bypassed for test emails)
- No IP-based rate limiting
- No rate limiting on `/api/verify-otp` (OTP brute-force possible)

---

## 3. Payment Model (Razorpay)

### Order Creation — Server-Side ✓
- **File:** `app/api/orders/create/route.ts`
- Server looks up plan by `planId` from `PLANS` constant → computes amount via `totalPaise(plan.basePriceRs)` → creates Razorpay order server-side
- Amount is NOT accepted from client ✓
- `planId` validated against `PLANS` array ✓
- Double-purchase blocked via `getUserSubscription()` ✓
- Seat limits enforced ✓

### Payment Verification — Server-Side ✓
- **File:** `app/api/orders/verify/route.ts`
- HMAC-SHA256 signature verification using `RAZORPAY_KEY_SECRET` ✓
- Verifies `razorpay_order_id|razorpay_payment_id` against `razorpay_signature` ✓
- Confirms order belongs to requesting user (`sub.userId !== userId` check) ✓

### Plan/Entitlement Write Post-Payment
- `db.activateSubscription(orderId, paymentId)` sets `status = 'active'`, assigns invoice number
- `subscribed=1` cookie set on response

### Webhook Handler
- **DOES NOT EXIST** — No webhook endpoint found. Payment confirmation relies entirely on client-side callback → `/api/orders/verify`.

### Bypass Route
- **File:** `app/api/orders/bypass/route.ts`
- Restricted to test emails via `isTestEmail(user.email)` after `uid` cookie auth ✓
- Creates subscription with `amountPaise: 0`, `orderId: bypass_<userId>_<timestamp>`

---

## 4. Entitlement Model

### How "paid access" is determined:

**Middleware layer** (`proxy.ts` — exported as `proxy()`, **but NOT wired as Next.js middleware**):
- Reads `uid` cookie → `loggedIn`
- Reads `subscribed` cookie → `subscribed`
- If logged in + subscribed → allow `/modules/*`
- If logged in + NOT subscribed → redirect `/modules` → `/plans`
- If NOT logged in → redirect non-public paths → `/signin`

**Critical issue:** `proxy.ts` exports a function but **there is no `middleware.ts` at project root**. The `config.matcher` is exported from `proxy.ts` but Next.js requires `middleware.ts` (or `middleware.js`) at the root. This means **the middleware may not be executing at all**, or it may be imported elsewhere.

**API-level checks:**
- `/api/modules` (GET/POST): checks `uid` cookie only — **no subscription check**
- `/api/billing` (GET): checks `uid` cookie + verifies `sub.userId === userId`
- `/api/orders/create`: checks `uid` cookie
- `/api/orders/verify`: checks `uid` cookie + order ownership
- `/api/orders/bypass`: checks `uid` cookie + `isTestEmail`

**The `subscribed` cookie is the SOLE gating mechanism for course content access.** It is:
- Not signed or encrypted
- Set to a static value `"1"`
- Read by the middleware (if active) without any server-side verification
- **Can be trivially forged by any user setting `subscribed=1` in their browser**

---

## 5. Route Inventory

| Route | Method | Classification | Auth Check | Subscription Check |
|-------|--------|---------------|------------|-------------------|
| `POST /api/signup` | POST | Public | None | None |
| `POST /api/login` | POST | Public | None | None |
| `POST /api/verify-otp` | POST | Public | None | None |
| `POST /api/logout` | POST | Auth-required | uid cookie | None |
| `GET /api/me` | GET | Public (returns different data) | uid cookie (optional) | None |
| `GET /api/modules` | GET | Auth-required | uid cookie | **NONE — should require subscription** |
| `POST /api/modules` | POST | Auth-required | uid cookie | **NONE — should require subscription** |
| `POST /api/orders/create` | POST | Auth-required | uid cookie | None (blocks double-purchase) |
| `POST /api/orders/verify` | POST | Auth-required | uid cookie | None |
| `POST /api/orders/bypass` | POST | Auth-required | uid cookie + isTestEmail | None |
| `GET /api/orders/seats` | GET | **Public** | None | None |
| `GET /api/billing` | GET | Auth-required | uid cookie | Ownership check on sub |
| `POST /api/users/billing-info` | POST | Auth-required | uid cookie | None |
| `GET /api/consent` | GET | Auth-required | uid cookie | None |
| `POST /api/consent` | POST | Auth-required | uid cookie | None |

**Flagged:** `/api/modules` has no subscription check — any logged-in user can read/write progress.

---

## 6. Test-Email Allowlist

### Location
- **File:** `app/lib/utils/otp.ts:1`
- **Hardcoded array:** `["hdamogha@gmail.com", "priyadharshan.97@gmail.com"]`

### What They Bypass
1. **OTP email sending** — OTP not emailed, always `"000000"` (predictable)
2. **OTP rate limiting** — `checkRateLimit()` skipped entirely
3. **Payment** — Redirected to `/api/orders/bypass` which creates a free subscription

### Security Assessment
- ✓ Bypass route checks `isTestEmail` server-side after authenticating via `uid` cookie
- ✓ Cannot bypass just by claiming the email in a request body — must be logged in as that user
- ✗ **Hardcoded in source code**, not in env vars — anyone with repo access knows them
- ✗ **OTP is always `000000`** — if an attacker knows these emails, they can log in trivially (signup → OTP `000000` → verify → bypass payment)
- ✗ **No restriction on signup with these emails** — attacker could register `hdamogha@gmail.com` if it's not already registered. Once registered + verified (OTP=000000), they get free access.
- ✗ If test email user is already registered, attacker can login with OTP `000000` and hijack the account
- ✗ Allowlist does NOT grant admin privileges (no admin role exists) ✓

---

## 7. Critical Preliminary Findings

| # | Severity | Finding |
|---|----------|---------|
| R1 | **CRITICAL** | `subscribed` cookie is unsigned, unencrypted, static `"1"` — any user can forge it to bypass payment |
| R2 | **CRITICAL** | Test email OTP is always `000000` — trivial account takeover if emails are known |
| R3 | **CRITICAL** | No middleware.ts at project root — `proxy.ts` route protection may not be active |
| R4 | **HIGH** | `/api/modules` has no subscription check — logged-in free users can access course progress APIs |
| R5 | **HIGH** | No Razorpay webhook handler — payment state relies solely on client callback |
| R6 | **HIGH** | `uid` cookie is unsigned raw UUID — forgeable if user IDs are guessable/leaked |
| R7 | **HIGH** | No rate limiting on `/api/verify-otp` — 6-digit OTP brute-forceable (1M combinations) |
| R8 | **MEDIUM** | `Math.random()` for OTP generation — not cryptographically secure |
| R9 | **MEDIUM** | drizzle-orm 0.45.0 has known SQL injection CVE (GHSA-gpj5-g38j-94v9) |
| R10 | **MEDIUM** | axios (transitive dep) has 15+ known CVEs |
| R11 | **INFO** | `.env.local` not in git ✓, but contains live Neon DB credentials on developer machine |
