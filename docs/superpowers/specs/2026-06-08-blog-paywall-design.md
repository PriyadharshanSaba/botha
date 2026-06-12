# Blog Paywall — Design Spec

**Date:** 2026-06-08
**Status:** Approved, ready for implementation plan

## Goal

Blog articles remain free to read, but past an editorially-chosen midpoint, readers must sign in or sign up to continue. The gate must be enforced server-side so the second half of an article cannot be revealed by manipulating the DOM, CSS, or client state in browser dev tools.

The sign-in / sign-up flow happens inline via a slide-up modal anchored to the viewport bottom, without leaving the article page.

## Non-goals

- Subscription-tier gating. Any signed-in user can read the full article. Subscription state is irrelevant to the blog gate.
- Mobile-only overlay variants beyond the responsive behavior already provided by `globals.css`.
- Kannada translation of paywall copy (follows the existing `isKn` pattern — added later).
- Paywall analytics events (suggested for a follow-up).

## Architecture

Each blog page is converted from a `"use client"` component to an async server component. The server reads the `uid` cookie, verifies it against the user database, and decides what HTML to emit:

- Logged-out request → preview JSX + `<PaywallGate />` (client component).
- Logged-in request → preview JSX + gated JSX, no paywall component at all.

Gated content lives in a sibling file (`gated.tsx`) marked `import "server-only"` at the top. It is never bundled into the client payload. View-source on a logged-out request contains only the preview HTML; the React component graph sent to the client contains no nodes for the gated content.

This is the hard-gate decision from Q1: real security, not a CSS overlay.

### File layout per blog

For each `app/blogs/<slug>/`, the following files exist after refactor:

```
app/blogs/<slug>/
  page.tsx            async server component, composes preview + gated/paywall
  preview.tsx         server component, exports <Preview /> — free half
  gated.tsx           server component, exports <Gated /> — gated half, "server-only"
  footer-actions.tsx  "use client", terms/privacy modal triggers
  loading.tsx         unchanged
```

A representative `page.tsx`:

```tsx
import { cookies } from "next/headers";
import { db } from "@/app/lib/db";
import { Preview } from "./preview";
import PaywallGate from "@/app/components/PaywallGate";
import BlogFooter from "@/app/blogs/components/BlogFooter";
import BackBar from "@/app/blogs/components/BackBar";

const SLUG = "india-finance-jun5-2026";

export default async function Page() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  const authed = !!user;

  const GatedComponent = authed
    ? (await import("./gated")).Gated
    : null;

  return (
    <div className="blog-article-page">
      <BackBar />
      <article className="blog-post-body">
        <Preview />
        {GatedComponent ? <GatedComponent /> : <PaywallGate slug={SLUG} />}
      </article>
      <BlogFooter />
    </div>
  );
}
```

The dynamic `import("./gated")` ensures the gated module is not present in the same chunk as the page. Logged-out requests skip the import entirely, so the gated module is never evaluated.

### Server-only enforcement

`gated.tsx` starts with:

```tsx
import "server-only";
```

If any client component ever imports it (accidentally or maliciously through a future refactor), the build fails. This is the project's primary defense against future regression.

### Auth check on the server

The server resolves authentication by:

1. Reading the `uid` cookie.
2. Calling `db.getUserById(uid)`.
3. Treating the request as authed only if a user row is returned.

A forged cookie value will not match a real user row and will be treated as logged-out. This is stricter than checking cookie presence and protects against attackers setting `document.cookie = "uid=anything"` in dev tools.

### Shared blog chrome

Three new shared files live under `app/blogs/components/`:

- `BackBar.tsx` — the `← All articles` link.
- `BlogFooter.tsx` — the footer block, embeds `<FooterActions />` for modal triggers.
- `FooterActions.tsx` — `"use client"`, manages `useState` for the terms and privacy modals.

These replace the duplicated code currently inlined in each of the 7 blog pages. The refactor reduces total blog code substantially.

## PaywallGate component

`app/components/PaywallGate.tsx`, client component.

### Trigger

An IntersectionObserver watches a sentinel element placed at the end of `<Preview />`. When the sentinel becomes 70% visible, the modal slides up. Once shown, the modal stays mounted; it does not retreat if the user scrolls back up.

If the user has JavaScript disabled or patches the observer, the gated content is still not present in the DOM, so they only see the preview. Bypassing the modal therefore yields no benefit.

### Layout

- Fixed positioned, `bottom: 0; left: 0; right: 0; z-index: 1010`.
- Enters via `transform: translateY(100%) → translateY(0)`, 0.4s ease-out.
- Top edge of the modal is a 120px gradient: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--cream) 100%)`. The gradient intersects the last lines of preview text behind it for the requested "drop at the top intersecting the blog in the background" effect.
- The modal body sits below the gradient: white card, max-width 480px, centered, brand-token typography.
- No scroll lock is needed: because the gated content is not rendered for logged-out users, the article naturally ends after the preview, and the sticky modal occupies the viewport bottom. The user can still scroll a small amount to reveal the page footer below, which is intentional.

### Terms modal stacking

The `name` panel includes a Terms of Use link (matching `signin/page.tsx`). Tapping it must render the `TermsModal` above the paywall. Because the existing `TermsModal` uses `z-index: 999` and `PaywallGate` uses `z-index: 1010`, the terms instance opened from inside the paywall is rendered with a one-off inline `z-index: 1020` override. The component already accepts arbitrary children; this is the only style adjustment needed.

### needsConsent after verify

`/api/verify-otp` may return `{ needsConsent: true }`. The paywall ignores this flag — the user is authed, the gated content is unlocked, and the existing `CookieBanner` will appear on the next navigation as it does for any logged-in user without a consent record. Embedding the consent UI inside the paywall would complicate the state machine for no functional gain.

### State machine

```
email  ─exists──►  otp-login   ──verify──► router.refresh()
   │
   └─not exists──► name       ──signup──► otp-signup ──verify──► router.refresh()
```

Four mode panels rendered with the same `<form>` markup pattern used by `/app/signin/page.tsx`:

1. **email** — single email input + "Continue".
2. **otp-login** — disabled email + 6 OTP boxes + "Sign In".
3. **name** — disabled email + first name + last name + terms checkbox + "Sign Up".
4. **otp-signup** — disabled email + 6 OTP boxes + "Verify".

OTP input boxes reuse `.otp-container` and `.otp-box` classes from `globals.css`, including the existing paste/backspace handlers from `signin/page.tsx` (extracted into a shared `useOtpInput` hook to avoid duplication).

### Flow

1. User enters email, clicks Continue.
2. Client POSTs `/api/auth/check-email` with `{ email }`.
3. Response `{ exists: true }` → call `POST /api/login` to send OTP → switch to `otp-login`.
4. Response `{ exists: false }` → switch to `name`.
5. From `name`: user enters first/last name and ticks the terms checkbox → POST `/api/signup` → switch to `otp-signup`.
6. From either OTP screen: POST `/api/verify-otp` → server sets `uid` cookie → client calls `router.refresh()`.
7. Server re-renders the page with `uid` cookie present → gated JSX is sent → modal unmounts (it is no longer in the tree).

### Existing endpoints reused

- `POST /api/login` — unchanged.
- `POST /api/signup` — unchanged.
- `POST /api/verify-otp` — unchanged; already sets the `uid` cookie for both signup and login.

### New endpoint

`POST /api/auth/check-email` — body `{ email }`, returns `{ exists: boolean }`.

- Validates email format.
- Calls `db.getUserByEmail(email)`; returns `{ exists: !!user && user.verified }`.
- Rate-limited 10 requests per minute per IP via an in-memory `Map<ip, { count, windowStart }>` in the route module. Exceeding the limit returns `429`.
- Returns the same shape regardless of input validity to limit timing-based enumeration.

This endpoint deliberately mirrors what `POST /api/login`'s 404 response already reveals — there is no new disclosure surface. Its purpose is to let the modal branch UX without sending an OTP for unregistered emails.

## Styling

A new CSS file `app/blogs/paywall.css` holds:

- `.paywall-gate` — sticky container, transform, z-index.
- `.paywall-gate-gradient` — 120px gradient drop.
- `.paywall-gate-card` — white card with brand tokens.
- `.paywall-gate-form` — extends `.form` from globals.
- Slide-up keyframes.

The OTP box, `.btn`, `.form` styles in `globals.css` are reused as-is. No new global tokens.

## Error handling

| Failure | UX |
|---|---|
| Invalid email format | Inline red error below input |
| `/api/auth/check-email` 429 | "Too many tries. Wait a minute." |
| `/api/login` not_registered (race after check-email said exists) | Auto-switch to `name` mode |
| `/api/login` 429 | Existing message: "Too many attempts. Try again tomorrow." |
| `/api/signup` 429 | Same as above |
| `/api/verify-otp` 4xx | "Invalid OTP." inline |
| Network error any step | "Network error. Try again." with retry |

## Per-blog refactor work

All 7 blog posts undergo the same mechanical refactor:

1. Move `"use client"` directive and `useState` calls out — into the new `FooterActions` client child.
2. Split content at the editor-chosen point into `Preview` (free) and `Gated` (locked).
3. Save `Gated` into `gated.tsx` with `import "server-only"`.
4. Wire up `page.tsx` from the template above with the slug constant.

Split points (editorial decision, based on existing structure):

| Blog | Free half ends after |
|---|---|
| india-finance-jun5-2026 | Section 04 |
| india-finance-may29-2026 | Section 05 |
| india-finance-may2026 | Section 04 |
| startup-cashflow | Section 03 |
| dpiit-startup-recognition | Section 03 |
| rupee-managed-decline | Section 02 |
| rupee-descent | Section 03 (chart stays in gated portion) |

### rupee-descent special case

This post initializes Chart.js in a `useEffect` against a `useRef`-bound canvas. The chart lives in the gated portion. Solution: extract `<RupeeChart />` into a new client component (`rupee-descent/chart.tsx`, `"use client"`) which is rendered from `Gated`. Since `Gated` is itself a server component, importing a client child is supported by the App Router. The chart only mounts when the user is authed and the server includes `<Gated />` in the response.

## Testing

Manual checks (no automated test infra in repo):

1. **Logged out — view source.** Load `/blogs/india-finance-jun5-2026` in a private window. Confirm rendered HTML contains preview content but contains no string from gated section text. Confirm no `__next_f` chunk contains gated strings.
2. **Logged out — DOM tinkering.** Try deleting the paywall element via dev tools, scroll past, confirm no gated content appears.
3. **Cookie forgery.** In dev tools, set `document.cookie = "uid=fakeuser123"`, reload. Server should still render the paywall (because `db.getUserById("fakeuser123")` returns null).
4. **Logged in — full content.** Sign in, reload, confirm full article renders, no paywall.
5. **Login via paywall.** From a logged-out session, scroll to trigger, enter a registered email, complete OTP, confirm page refreshes and gated content appears.
6. **Signup via paywall.** Same flow with an unregistered email, including the name + terms step, confirm account is created and gated content appears.
7. **Rate limit.** Hit `/api/auth/check-email` 11 times in a minute from one IP, confirm 11th returns 429.
8. **Mobile.** On a phone-width viewport, modal renders without horizontal overflow and the OTP boxes don't break onto more than two rows.
9. **Chart.** Confirm `rupee-descent` Chart.js renders only when authed and not in preview HTML.

## Out of scope, captured as follow-ups

- Add a "Resend OTP" button (mirror is already missing on signin/page.tsx).
- Add paywall-shown / paywall-conversion analytics events once an analytics layer exists.
- Translate modal copy when Kannada blogs ship.
- Consider deduping signin/page.tsx and PaywallGate via a shared `<AuthForms />` component after both stabilize.

## Files touched / created summary

**New:**
- `app/components/PaywallGate.tsx`
- `app/blogs/paywall.css`
- `app/blogs/components/BackBar.tsx`
- `app/blogs/components/BlogFooter.tsx`
- `app/blogs/components/FooterActions.tsx`
- `app/api/auth/check-email/route.ts`
- `app/blogs/<slug>/preview.tsx` × 7
- `app/blogs/<slug>/gated.tsx` × 7
- `app/blogs/rupee-descent/chart.tsx`
- `app/lib/hooks/useOtpInput.ts` (extracted from signin/page.tsx)

**Modified:**
- `app/blogs/<slug>/page.tsx` × 7 — gutted, becomes server component composing Preview + Gated/Paywall
- `app/signin/page.tsx` — adopts `useOtpInput` hook (de-duplication)

**Unchanged:**
- `app/api/login/route.ts`
- `app/api/signup/route.ts`
- `app/api/verify-otp/route.ts`
- `app/components/TermsModal.tsx`, `PrivacyModal.tsx`, `CookieBanner.tsx`
