# LAUNCH_CHECKLIST.md — Go / No-Go

**Application:** Bodha Ventures  
**Date:** 2026-05-10  
**Verdict: NO-GO** — 7 Critical + 10 High findings must be resolved before launch.

---

## CRITICAL — Blocks Launch (must fix before go-live)

| # | Finding | Status | Owner | Fix Effort |
|---|---------|--------|-------|------------|
| C1 | Course content in client JS bundle — entire product freely readable | TODO | | Large (architectural — move content to DB + API) |
| C2 | `subscribed` cookie forgery — complete payment bypass | TODO | | Medium (replace cookie check with DB lookup) |
| C3 | Middleware not active — `proxy.ts` not wired as `middleware.ts` | TODO | | Small (create `middleware.ts` re-export) |
| C4 | No rate limiting on OTP verification — brute-force account takeover | TODO | | Small (add attempt counter + lockout) |
| C5 | `Math.random()` for OTP — not cryptographically secure | TODO | | Small (swap to `crypto.randomInt()`) |
| C6 | Hardcoded test emails with static OTP `000000` in production | TODO | | Small (env var + production gate) |
| C7 | Unsigned `uid` cookie + userId leaked in signup response | TODO | | Medium (signed sessions + remove userId from response) |

---

## HIGH — Blocks Launch (must fix before go-live)

| # | Finding | Status | Fix Effort |
|---|---------|--------|------------|
| H1 | No Razorpay webhook handler (no refund/dispute revocation) | TODO | Medium |
| H2 | Payment replay — no idempotency guard on verify | TODO | Small |
| H3 | Race condition in payment verification / invoice generation | TODO | Small |
| H4 | HTML injection in email templates (unescaped user input) | TODO | Small |
| H5 | No CSRF protection + Next.js CSRF CVE | TODO | Medium |
| H6 | Drizzle ORM SQL injection CVE (< 0.45.2) | TODO | Small (`npm install`) |
| H7 | TLS cert validation disabled for DB (`rejectUnauthorized: false`) | TODO | Small |
| H8 | API routes skip user existence/verified checks | TODO | Medium |
| H9 | Course images + tools in unprotected `public/` directory | TODO | Medium |
| H10 | Seat count race condition | TODO | Small |

---

## MEDIUM — Fix-Fast (fix within first week post-launch if launch is gated on Critical+High)

| # | Finding | Status | Fix Effort |
|---|---------|--------|------------|
| M1 | Account enumeration via differentiated error responses | TODO | Small |
| M2 | No bot protection (CAPTCHA / IP throttling) | TODO | Medium |
| M3 | Email case-sensitivity inconsistency bypasses rate limits | TODO | Small |
| M4 | OTP not cleared after failed verification attempts | TODO | Small |
| M5 | No security headers (CSP, HSTS, X-Frame-Options, etc.) | TODO | Small |
| M6 | PII logged to console (emails, names on every auth event) | TODO | Small |
| M7 | Next.js 16.0.7 — 11 CVEs including CSRF bypass | TODO | Small (`npm install`) |
| M8 | Axios transitive dependency — 15+ CVEs | TODO | Small |
| M9 | Logout doesn't clear `subscribed` cookie | TODO | Small |
| M10 | `subscribed` cookie not restored on re-login (UX bug for paying users) | TODO | Small |

---

## LOW — Fix When Convenient

| # | Finding | Status |
|---|---------|--------|
| L1 | No session rotation / server-side session invalidation | TODO |
| L2 | Stale copy files in source tree | TODO |
| L3 | Sensitive source documents in `app/docs/` | TODO |

---

## Recommended Fix Order

### Phase 1 — Immediate (Day 1-2): Stop the bleeding
1. Create `middleware.ts` at root → wire `proxy.ts` (C3)
2. `crypto.randomInt()` for OTP (C5)
3. Rate limit `/api/verify-otp` — 5 attempts max, then clear OTP (C4 + M4)
4. Gate test emails behind `NODE_ENV !== "production"` (C6)
5. Remove `userId` from signup response (C7 partial)
6. `npm install drizzle-orm@0.45.2 next@16.2.6` (H6 + M7)
7. Set `rejectUnauthorized: true` on DB connection (H7)
8. Add `escapeHtml()` to email templates (H4)
9. Clear `subscribed` cookie on logout (M9)

### Phase 2 — Short-term (Day 3-5): Close payment holes
10. Replace `subscribed` cookie check with DB lookup in middleware (C2)
11. Add idempotency guard + `WHERE status = 'pending'` to verify (H2 + H3)
12. Implement Razorpay webhook handler for payment.captured/failed/refunded (H1)
13. Signed session tokens — replace raw UUID `uid` cookie (C7)
14. Add subscription check to `/api/modules` (part of C2)
15. Add `getAuthenticatedUser()` helper to all API routes (H8)
16. Fix seat count race condition (H10)
17. Restore `subscribed` cookie on re-login (M10 — interim until C2 is solid)

### Phase 3 — Architectural (Day 6-14): Protect the product
18. Move course content from React components to DB/CMS (C1) — **this is the big one**
19. Move course images from `public/` to authenticated API route (H9)
20. Move Excel tools from `public/` to authenticated API route (H9)
21. Add security headers to `next.config.ts` (M5)
22. Add CSRF protection (H5)

### Phase 4 — Hardening (Week 2+)
23. Uniform error responses for auth endpoints (M1)
24. Add CAPTCHA (Cloudflare Turnstile) to signup/login (M2)
25. Normalize email case at API entry points (M3)
26. Remove PII from logs (M6)
27. Fix axios CVEs (M8)
28. Implement server-side session table (L1)
29. Delete stale copy files (L2)
30. Move `app/docs/` out of repo (L3)

---

## Re-Test Plan

After fixes are applied:

1. **Cookie forgery test:** Set `subscribed=1` manually → verify `/modules` returns 403 or redirect
2. **OTP brute-force test:** Script 10 rapid verify attempts → verify lockout after 5
3. **Test email test:** Try OTP `000000` in production → verify it fails
4. **Content scraping test:** `curl` JS bundle chunks → verify no course content present
5. **Public asset test:** `curl` for Excel tools and course images → verify 401/403
6. **Replay test:** Replay valid payment verification → verify no duplicate invoice
7. **Webhook test:** Simulate `payment.refunded` event → verify access revoked
8. **Middleware test:** Access `/modules` without auth → verify redirect to `/signin`
9. **IDOR test:** Set `uid` to random UUID → verify API returns error
10. **npm audit:** Verify 0 critical/high CVEs
11. **Header check:** `curl -I` → verify CSP, HSTS, X-Frame-Options present
12. **Email injection test:** Sign up with `<script>alert(1)</script>` as name → verify escaped in email

---

## Sign-Off

| Role | Name | Date | Approved? |
|------|------|------|-----------|
| Security Lead | | | |
| Engineering Lead | | | |
| Product Owner | | | |
