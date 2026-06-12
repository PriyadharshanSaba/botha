# Blog Paywall Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a server-enforced signup/sign-in paywall on all 7 blog posts, presented as a slide-up modal triggered after the user reads the editorially-chosen free half.

**Architecture:** Each blog page becomes an async Next.js 16 server component. It reads the `uid` cookie, looks the user up in the database, and either renders the full article (preview + gated) or renders the preview followed by a `<PaywallGate />` client component. The gated portion lives in a `gated.tsx` file marked `import "server-only"` so it is never bundled to the client. View-source on logged-out responses contains zero gated text.

**Tech Stack:** Next.js 16 (App Router, RSC), TypeScript, existing inline-styled / CSS-class component conventions, existing OTP-based auth (`/api/login`, `/api/signup`, `/api/verify-otp`).

**Spec reference:** `docs/superpowers/specs/2026-06-08-blog-paywall-design.md`.

---

## Notes for the implementer

- This codebase has no automated test infrastructure. Verification at each task is via `npx tsc --noEmit` (typecheck), `npm run lint` (if present), and described manual checks. There is no `jest` / `vitest`.
- The project convention (`CLAUDE.md`) is **one atomic git commit per task**.
- No `--no-verify` on commits.
- Do not push to remote unless explicitly told to.
- Caveman terseness applies to chat output, not to code or commit bodies.

## File structure created by this plan

```
app/api/auth/check-email/route.ts         NEW   POST handler, returns { exists }
app/lib/hooks/useOtpInput.ts              NEW   shared 6-box OTP input hook
app/components/PaywallGate.tsx            NEW   "use client", slide-up auth modal
app/blogs/paywall.css                     NEW   slide-up animation, gradient, sticky styles
app/blogs/components/BackBar.tsx          NEW   "← All articles" link
app/blogs/components/BlogFooter.tsx       NEW   shared footer block
app/blogs/components/FooterActions.tsx    NEW   "use client", terms/privacy modal triggers
app/blogs/<slug>/page.tsx                 MOD   becomes async server component (×7)
app/blogs/<slug>/preview.tsx              NEW   free half (×7)
app/blogs/<slug>/gated.tsx                NEW   gated half, "server-only" (×7)
app/blogs/rupee-descent/chart.tsx         NEW   extracted Chart.js client child
app/signin/page.tsx                       MOD   adopt useOtpInput hook
```

`<slug>` ∈ {`dpiit-startup-recognition`, `india-finance-jun5-2026`, `india-finance-may2026`, `india-finance-may29-2026`, `rupee-descent`, `rupee-managed-decline`, `startup-cashflow`}.

---

## Task 1: New `/api/auth/check-email` endpoint

**Files:**
- Create: `app/api/auth/check-email/route.ts`

- [ ] **Step 1: Create the route file**

```ts
// app/api/auth/check-email/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";

// In-memory IP rate limit: 10 requests / minute / IP.
// Resets on server restart, which is acceptable for an enumeration brake.
const buckets = new Map<string, { count: number; windowStart: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (bucket.count >= MAX_PER_WINDOW) return false;
  bucket.count += 1;
  return true;
}

function isValidEmail(s: unknown): s is string {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Wait a minute." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body || !isValidEmail(body.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const user = await db.getUserByEmail(email);
  const exists = !!user && user.verified;

  return NextResponse.json({ exists });
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 3: Manual smoke test**

Start dev server (`npm run dev`) in a separate terminal, then in another:

```bash
curl -s -X POST http://localhost:3000/api/auth/check-email \
  -H "Content-Type: application/json" \
  -d '{"email":"definitely-not-a-real-user@example.com"}'
```

Expected: `{"exists":false}`

```bash
curl -s -X POST http://localhost:3000/api/auth/check-email \
  -H "Content-Type: application/json" \
  -d '{"email":"not-an-email"}'
```

Expected: 400 with `{"error":"Invalid email"}`.

Then loop 11 times:

```bash
for i in {1..11}; do
  curl -s -o /dev/null -w "%{http_code}\n" -X POST \
    http://localhost:3000/api/auth/check-email \
    -H "Content-Type: application/json" \
    -d '{"email":"test'$i'@example.com"}'
done
```

Expected: ten `200`s then one `429`.

- [ ] **Step 4: Commit**

```bash
git add app/api/auth/check-email/route.ts
git commit -m "$(cat <<'EOF'
feat(api): add /api/auth/check-email for paywall email branching

POST returns { exists: boolean } without sending OTP. Rate-limited 10/min/IP
to slow enumeration. Used by the blog paywall modal to decide whether to
show the OTP login form or the signup name form.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Extract `useOtpInput` hook

The existing `app/signin/page.tsx` defines four handlers (`handleOtpChange`, `handleOtpKeyDown`, `handleOtpInput`, `handleOtpPaste`) that manage the six-box OTP UI. PaywallGate needs the same behavior. Extract once.

**Files:**
- Create: `app/lib/hooks/useOtpInput.ts`
- Modify: `app/signin/page.tsx`

- [ ] **Step 1: Create the hook**

```ts
// app/lib/hooks/useOtpInput.ts
"use client";

import { useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";

export interface OtpInputApi {
  otp6: string[];
  value: string;
  reset: () => void;
  inputProps: (index: number, idPrefix?: string) => {
    id: string;
    value: string;
    maxLength: number;
    inputMode: "numeric";
    pattern: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onInput: (e: FormEvent<HTMLInputElement>) => void;
    onPaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  };
}

export function useOtpInput(): OtpInputApi {
  const [otp6, setOtp6] = useState(["", "", "", "", "", ""]);

  function reset() {
    setOtp6(["", "", "", "", "", ""]);
  }

  function changeAt(index: number, value: string, idPrefix: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp6];
    next[index] = value;
    setOtp6(next);
    if (value && index < next.length - 1) {
      document.getElementById(`${idPrefix}-${index + 1}`)?.focus();
    }
  }

  function keyDownAt(
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
    idPrefix: string
  ) {
    if (e.key === "Backspace" && !otp6[index] && index > 0) {
      const next = [...otp6];
      next[index - 1] = "";
      setOtp6(next);
      document.getElementById(`${idPrefix}-${index - 1}`)?.focus();
    }
  }

  function inputAt(
    e: FormEvent<HTMLInputElement>,
    index: number,
    idPrefix: string
  ) {
    const inputType = (e.nativeEvent as InputEvent).inputType;
    if (inputType === "deleteContentBackward" && !otp6[index] && index > 0) {
      const next = [...otp6];
      next[index - 1] = "";
      setOtp6(next);
      document.getElementById(`${idPrefix}-${index - 1}`)?.focus();
    }
  }

  function pasteAt(
    e: ClipboardEvent<HTMLInputElement>,
    index: number,
    idPrefix: string
  ) {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!digits) return;
    const next = [...otp6];
    for (let i = 0; i < digits.length; i++) {
      if (index + i < next.length) next[index + i] = digits[i];
    }
    setOtp6(next);
    document.getElementById(
      `${idPrefix}-${Math.min(index + digits.length, next.length - 1)}`
    )?.focus();
  }

  return {
    otp6,
    value: otp6.join(""),
    reset,
    inputProps: (index, idPrefix = "otp") => ({
      id: `${idPrefix}-${index}`,
      value: otp6[index],
      maxLength: 1,
      inputMode: "numeric",
      pattern: "[0-9]*",
      onChange: (e) => changeAt(index, e.target.value, idPrefix),
      onKeyDown: (e) => keyDownAt(e, index, idPrefix),
      onInput: (e) => inputAt(e, index, idPrefix),
      onPaste: (e) => pasteAt(e, index, idPrefix),
    }),
  };
}
```

- [ ] **Step 2: Refactor `signin/page.tsx` to use the hook**

Open `app/signin/page.tsx`. Make the following changes.

Replace the import block at the top:

```tsx
import { useState, Suspense, type FormEvent } from "react";
```

with:

```tsx
import { useState, Suspense, type FormEvent } from "react";
import { useOtpInput } from "@/app/lib/hooks/useOtpInput";
```

Inside `SignInContent`, find and **delete**:

- the `const [otp6, setOtp6] = useState(...)` line (currently line 34),
- the four handler functions: `handleOtpKeyDown`, `handleOtpInput`, `handleOtpPaste`, `handleOtpChange` (currently lines 165–205).

Insert this directly below the existing `const [otp6, setOtp6]` line removal:

```tsx
const otp = useOtpInput();
```

In `handleVerifySignup` and `handleVerifyLogin`, replace `otp6.join("")` with `otp.value`. (Two occurrences in each function — the check and the body field.)

For each of the six OTP `<input>` rendered in `signup-otp` and `login-otp` blocks, **delete** the inline props and spread the hook's `inputProps`:

```tsx
{[0, 1, 2, 3, 4, 5].map((i) => (
  <input key={i} className="otp-box" {...otp.inputProps(i)} />
))}
```

(replaces the `{otp6.map((digit, i) => (<input ... />))}` block in both OTP modes).

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 4: Manual smoke test**

Visit `http://localhost:3000/signin`. Confirm:
- Email field, send OTP works as before.
- After OTP screen renders: typing a digit auto-advances to next box. Backspace clears previous box. Pasting 6 digits fills all boxes.

- [ ] **Step 5: Commit**

```bash
git add app/lib/hooks/useOtpInput.ts app/signin/page.tsx
git commit -m "$(cat <<'EOF'
refactor(auth): extract useOtpInput hook from signin

PaywallGate (coming next) needs the same 6-box behavior. Lift the four
handlers out of signin/page.tsx into app/lib/hooks/useOtpInput.ts. No
behavior change.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create `paywall.css`

**Files:**
- Create: `app/blogs/paywall.css`

- [ ] **Step 1: Write the stylesheet**

```css
/* app/blogs/paywall.css */

.paywall-gate {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1010;
  display: flex;
  justify-content: center;
  pointer-events: none;
  transform: translateY(100%);
  transition: transform 0.4s ease-out;
}

.paywall-gate.is-visible {
  transform: translateY(0);
}

.paywall-gate-gradient {
  position: absolute;
  top: -120px;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(
    to bottom,
    rgba(245, 240, 232, 0) 0%,
    var(--cream) 100%
  );
  pointer-events: none;
}

.paywall-gate-card {
  position: relative;
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 14px 14px 0 0;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05),
              0 -20px 48px -8px rgba(0, 0, 0, 0.12);
  padding: 24px 28px 28px;
  margin: 0 16px;
  pointer-events: all;
}

.paywall-gate-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 6px;
  letter-spacing: -0.01em;
}

.paywall-gate-sub {
  font-size: 13px;
  color: #71717a;
  margin: 0 0 16px;
  line-height: 1.55;
}

.paywall-gate-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.paywall-gate-mode {
  animation: paywallFadeSlide 0.3s ease forwards;
}

@keyframes paywallFadeSlide {
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
}

.paywall-gate-back {
  background: none;
  border: none;
  padding: 0;
  margin-top: 8px;
  font-size: 12px;
  color: #71717a;
  cursor: pointer;
  text-align: center;
}

.paywall-terms-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: #52525b;
  margin-top: 4px;
}

.paywall-terms-row button {
  background: none;
  border: none;
  padding: 0;
  color: var(--ink);
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}

/* Sentinel placed at end of preview to trigger IntersectionObserver. */
.paywall-sentinel {
  height: 1px;
  width: 100%;
}

@media (max-width: 480px) {
  .paywall-gate-card {
    margin: 0;
    border-radius: 14px 14px 0 0;
    padding: 20px 18px 22px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/blogs/paywall.css
git commit -m "$(cat <<'EOF'
feat(blogs): add paywall.css for slide-up auth modal styling

Sticky bottom container, 120px gradient drop, slide-up animation,
responsive card. Reuses existing brand tokens.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: PaywallGate component

**Files:**
- Create: `app/components/PaywallGate.tsx`

- [ ] **Step 1: Create the component**

```tsx
// app/components/PaywallGate.tsx
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useOtpInput } from "@/app/lib/hooks/useOtpInput";
import TermsModal from "./TermsModal";

interface Props {
  slug: string;
}

type Mode = "email" | "otp-login" | "name" | "otp-signup";

export default function PaywallGate({ slug }: Props) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("email");
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const otp = useOtpInput();
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Trigger slide-up when sentinel becomes 70% visible.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.intersectionRatio >= 0.7)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.7, 1] }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  async function submitEmail(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Try again.");
        return;
      }
      if (data.exists) {
        // Existing verified user → send login OTP.
        const loginRes = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!loginRes.ok) {
          const ld = await loginRes.json().catch(() => ({}));
          if (ld.error === "not_registered") {
            // Race: check-email said yes but login disagrees. Fall to signup.
            setMode("name");
            return;
          }
          setError(ld.error || "Could not send OTP.");
          return;
        }
        otp.reset();
        setMode("otp-login");
      } else {
        setMode("name");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function submitName(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: first, lastName: last, email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not create account.");
        return;
      }
      otp.reset();
      setMode("otp-signup");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function submitOtp(e: FormEvent) {
    e.preventDefault();
    setError("");
    const code = otp.value;
    if (code.length !== 6) {
      setError("Enter all 6 digits.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code }),
      });
      if (!res.ok) {
        setError("Invalid OTP.");
        return;
      }
      // Cookie is set. Re-render the server page to inline the gated content.
      router.refresh();
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function backToEmail() {
    setMode("email");
    setError("");
    otp.reset();
  }

  return (
    <>
      <div ref={sentinelRef} className="paywall-sentinel" aria-hidden="true" data-slug={slug} />
      <div className={`paywall-gate${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
        <div className="paywall-gate-gradient" />
        <div className="paywall-gate-card">
          {mode === "email" && (
            <form onSubmit={submitEmail} className="paywall-gate-form paywall-gate-mode">
              <h2 className="paywall-gate-title">Keep reading</h2>
              <p className="paywall-gate-sub">
                Sign in or create a free account to finish this article.
              </p>
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Checking…" : "Continue"}
              </button>
            </form>
          )}

          {mode === "otp-login" && (
            <form onSubmit={submitOtp} className="paywall-gate-form paywall-gate-mode">
              <h2 className="paywall-gate-title">Enter the code</h2>
              <p className="paywall-gate-sub">We sent a 6-digit code to {email}.</p>
              <div className="otp-container">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    className="otp-box"
                    {...otp.inputProps(i, "paywall-otp")}
                  />
                ))}
              </div>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Verifying…" : "Sign In"}
              </button>
              <button type="button" className="paywall-gate-back" onClick={backToEmail}>
                Use a different email
              </button>
            </form>
          )}

          {mode === "name" && (
            <form onSubmit={submitName} className="paywall-gate-form paywall-gate-mode">
              <h2 className="paywall-gate-title">Create your account</h2>
              <p className="paywall-gate-sub">Free, 30 seconds.</p>
              <label>First name</label>
              <input
                type="text"
                placeholder="John"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
                autoFocus
              />
              <label>Last name</label>
              <input
                type="text"
                placeholder="Doe"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                required
              />
              <div className="paywall-terms-row">
                <input
                  type="checkbox"
                  id="paywall-terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="paywall-terms">
                  I agree to the{" "}
                  <button type="button" onClick={() => setShowTerms(true)}>
                    Terms of Use
                  </button>
                </label>
              </div>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading || !termsAccepted}>
                {loading ? "Creating…" : "Sign Up"}
              </button>
              <button type="button" className="paywall-gate-back" onClick={backToEmail}>
                Use a different email
              </button>
            </form>
          )}

          {mode === "otp-signup" && (
            <form onSubmit={submitOtp} className="paywall-gate-form paywall-gate-mode">
              <h2 className="paywall-gate-title">Verify your email</h2>
              <p className="paywall-gate-sub">We sent a 6-digit code to {email}.</p>
              <div className="otp-container">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    className="otp-box"
                    {...otp.inputProps(i, "paywall-otp")}
                  />
                ))}
              </div>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Verifying…" : "Complete Signup"}
              </button>
            </form>
          )}
        </div>
      </div>

      {showTerms && (
        <div style={{ position: "relative", zIndex: 1020 }}>
          <TermsModal
            onAccept={() => {
              setTermsAccepted(true);
              setShowTerms(false);
            }}
            onClose={() => setShowTerms(false)}
          />
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 3: Commit**

```bash
git add app/components/PaywallGate.tsx
git commit -m "$(cat <<'EOF'
feat(blogs): add PaywallGate slide-up auth modal

Client component. IntersectionObserver triggers slide-up when sentinel
reaches 70% visibility. Four-mode state machine (email → otp-login or
name → otp-signup) reuses the existing /api/login, /api/signup,
/api/verify-otp endpoints. On successful verify, router.refresh()
re-runs the server component which then includes the gated content.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Shared blog chrome (BackBar, BlogFooter, FooterActions)

The current 7 blog pages duplicate the back link and the footer (with modal triggers). Extract once.

**Files:**
- Create: `app/blogs/components/BackBar.tsx`
- Create: `app/blogs/components/FooterActions.tsx`
- Create: `app/blogs/components/BlogFooter.tsx`

- [ ] **Step 1: Inspect an existing blog's footer block**

Read `app/blogs/india-finance-jun5-2026/page.tsx` lines 339–378 to confirm the exact footer JSX, modal trigger pattern, and class names currently used. Use this as the source of truth for the extracted components below.

Carry over the following exactly:
- The wrapper div class (`landing-footer` or whatever is on line ~339).
- All link hrefs, anchor labels, and Kannada/English copy.
- The Terms / Privacy onClick triggers.

If you find differences between the 7 blogs' footers (e.g. `rupee-managed-decline` or `rupee-descent`), pick the most complete English+Kannada variant. The 5 standard blogs already share an identical footer; use that.

- [ ] **Step 2: Create `BackBar.tsx`** (server component, no state)

```tsx
// app/blogs/components/BackBar.tsx
import Link from "next/link";

export default function BackBar() {
  return (
    <div className="blog-back-bar">
      <Link href="/blogs" className="blog-back-link">&#8592; All articles</Link>
    </div>
  );
}
```

- [ ] **Step 3: Create `FooterActions.tsx`** (client child for modal state)

```tsx
// app/blogs/components/FooterActions.tsx
"use client";

import { useState } from "react";
import TermsModal from "@/app/components/TermsModal";
import PrivacyModal from "@/app/components/PrivacyModal";

export default function FooterActions() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <button type="button" className="footer-link-btn" onClick={() => setShowTerms(true)}>
        Terms of Use
      </button>
      <button type="button" className="footer-link-btn" onClick={() => setShowPrivacy(true)}>
        Privacy Policy
      </button>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} onAccept={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  );
}
```

If the existing blog footer renders Terms/Privacy inside `<a>` tags or different elements, mirror the surrounding markup (e.g. `<li>` wrappers) when integrating in Step 5. Use `.footer-link-btn` for visual parity — add a small CSS shim in Step 4 if the existing class makes a button look different from a link.

- [ ] **Step 4: Add `.footer-link-btn` style**

Append to `app/blogs/guide-article.css`:

```css
.footer-link-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-decoration: underline;
}
```

- [ ] **Step 5: Create `BlogFooter.tsx`** (server component, embeds the client child)

Copy the existing footer JSX from `india-finance-jun5-2026/page.tsx` (lines ~339–375) verbatim. Replace the two anchor/onClick Terms and Privacy triggers with `<FooterActions />`. Result:

```tsx
// app/blogs/components/BlogFooter.tsx
import Link from "next/link";
import FooterActions from "./FooterActions";

export default function BlogFooter() {
  return (
    <footer className="landing-footer">
      {/* PASTE the exact contents of the existing <footer> here, except
          the Terms of Use and Privacy Policy triggers — replace those two
          with <FooterActions />. */}
      <FooterActions />
    </footer>
  );
}
```

Resolve the placeholder by copy-pasting the live footer JSX from `india-finance-jun5-2026/page.tsx` into the marked location, then swap the two trigger nodes for `<FooterActions />`.

- [ ] **Step 6: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 7: Commit**

```bash
git add app/blogs/components app/blogs/guide-article.css
git commit -m "$(cat <<'EOF'
refactor(blogs): extract shared BackBar, BlogFooter, FooterActions

The 7 blog pages duplicate the same back-link and footer (with terms
and privacy modal triggers). Lift into shared components. FooterActions
is the only client child; the wrappers are server components so they can
be embedded in the upcoming server-component blog pages.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Pilot blog conversion — `india-finance-jun5-2026`

Convert one blog end-to-end so the pipeline is validated. The remaining six blogs follow the same recipe.

**Files:**
- Create: `app/blogs/india-finance-jun5-2026/preview.tsx`
- Create: `app/blogs/india-finance-jun5-2026/gated.tsx`
- Modify (gut and rewrite): `app/blogs/india-finance-jun5-2026/page.tsx`

- [ ] **Step 1: Identify the split point**

Per spec, free half ends after Section 04. Open the current `page.tsx`. The `{/* SECTION 5 */}` comment marks the boundary (around line 208). Everything from the `<article>` opening down to (but not including) that comment is **preview**. Everything from the SECTION 5 comment down to (but not including) the closing `</article>` is **gated**.

- [ ] **Step 2: Create `preview.tsx`**

```tsx
// app/blogs/india-finance-jun5-2026/preview.tsx
import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      {/* PASTE: from the original page.tsx, everything inside <article>
          from the <div className="topbar"> opening through the end of
          the SECTION 04 callout (`<div className="callout-red"> ... </div>`
          immediately before the `{/* SECTION 5 */}` comment).

          Do NOT include the <article> open/close tags — page.tsx now owns
          those. Do NOT include any client-state-dependent JSX. */}
    </>
  );
}
```

After pasting, run a grep to be sure no `useState` / `useRef` / event-handler references slipped in:

```bash
grep -nE "useState|useRef|useEffect|onClick=|onChange=" app/blogs/india-finance-jun5-2026/preview.tsx
```

Expected: no matches.

- [ ] **Step 3: Create `gated.tsx`** with `import "server-only"`

```tsx
// app/blogs/india-finance-jun5-2026/gated.tsx
import "server-only";
import "../guide-article.css";
import "../../landing.css";

export function Gated() {
  return (
    <>
      {/* PASTE: from the original page.tsx, everything inside <article>
          from the `{/* SECTION 5 */}` comment through the end of the article
          content — but NOT the closing </article> tag. */}
    </>
  );
}
```

Confirm:

```bash
grep -nE "useState|useRef|useEffect|onClick=|onChange=" app/blogs/india-finance-jun5-2026/gated.tsx
```

Expected: no matches.

- [ ] **Step 4: Rewrite `page.tsx`**

Overwrite `app/blogs/india-finance-jun5-2026/page.tsx` with:

```tsx
// app/blogs/india-finance-jun5-2026/page.tsx
import { cookies } from "next/headers";
import { db } from "@/app/lib/db";
import BackBar from "@/app/blogs/components/BackBar";
import BlogFooter from "@/app/blogs/components/BlogFooter";
import PaywallGate from "@/app/components/PaywallGate";
import { Preview } from "./preview";
import "@/app/blogs/paywall.css";

const SLUG = "india-finance-jun5-2026";

export default async function Page() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  const authed = !!user;

  const Gated = authed ? (await import("./gated")).Gated : null;

  return (
    <div className="blog-article-page">
      <BackBar />
      <article className="blog-post-body">
        <Preview />
        {Gated ? <Gated /> : <PaywallGate slug={SLUG} />}
      </article>
      <BlogFooter />
    </div>
  );
}
```

- [ ] **Step 5: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 6: Manual verification — logged out**

1. Start `npm run dev`.
2. In a private window, visit `http://localhost:3000/blogs/india-finance-jun5-2026`.
3. Scroll: the preview renders normally, no SECTION 5+ content visible.
4. After scrolling past the end of Section 04, the slide-up paywall appears.
5. View-source (Cmd-U): the HTML contains preview strings (e.g. "Section 04" tag) but does **not** contain SECTION 5+ phrasing like "USTR Section 301 Proposes 12.5%". Use the browser Find feature in view-source.
6. In dev tools, run:
   ```js
   document.documentElement.outerHTML.includes("USTR Section 301")
   ```
   Expected: `false`.
7. Delete the `.paywall-gate` element via Inspector. Confirm no additional content appears below the preview.

- [ ] **Step 7: Manual verification — logged in**

1. Sign in via `/signin` with an existing verified account.
2. Visit `/blogs/india-finance-jun5-2026`.
3. Confirm the full article (including SECTION 5 through end) renders inline.
4. Confirm no `.paywall-gate` element exists in the DOM.

- [ ] **Step 8: Manual verification — cookie forgery**

1. Logged-out private window. Set in dev tools console:
   ```js
   document.cookie = "uid=fakeuser123; path=/";
   ```
2. Reload `/blogs/india-finance-jun5-2026`.
3. Confirm the server still renders the paywall (because `db.getUserById("fakeuser123")` returns null).

- [ ] **Step 9: Manual end-to-end auth flow**

1. Logged-out window. Visit the blog. Trigger paywall.
2. Enter an unregistered email → name screen appears → fill name + tick terms → click Sign Up → OTP screen → enter OTP (check dev console / test-email logic for test users) → submit.
3. Expected: page refreshes; full article visible; no paywall.
4. Sign out (visit `/api/logout` or clear cookies). Repeat with the same email — confirm the `exists: true` branch triggers, OTP arrives via login flow.

- [ ] **Step 10: Commit**

```bash
git add app/blogs/india-finance-jun5-2026
git commit -m "$(cat <<'EOF'
feat(blogs): paywall india-finance-jun5-2026 after section 04

Split content into preview.tsx (free) and gated.tsx (server-only,
section 05+). page.tsx becomes an async server component that reads the
uid cookie and conditionally imports gated.tsx only when the user
exists. View-source on a logged-out request contains zero gated text.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Convert `india-finance-may29-2026`

Repeat the same recipe as Task 6.

**Files:**
- Create: `app/blogs/india-finance-may29-2026/preview.tsx`
- Create: `app/blogs/india-finance-may29-2026/gated.tsx`
- Modify: `app/blogs/india-finance-may29-2026/page.tsx`

- [ ] **Step 1: Identify split point**

Per spec, free half ends after Section 05. Find the `{/* SECTION 6 */}` comment (or equivalent). Content above = preview; content below = gated.

- [ ] **Step 2: Create `preview.tsx` and `gated.tsx`** following the exact templates from Task 6, Steps 2–3. Substitute the slug. Run the same `grep` for client-state references after pasting.

- [ ] **Step 3: Rewrite `page.tsx`** using the Task 6 Step 4 template, with `const SLUG = "india-finance-may29-2026";`.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 5: Manual verification**

Repeat Task 6 Steps 6–9 against `/blogs/india-finance-may29-2026`. The substring to search for in view-source must be unique to a SECTION 6+ paragraph from this specific article — open the original file and pick a distinctive phrase from Section 06 to grep for in step 6.5.

- [ ] **Step 6: Commit**

```bash
git add app/blogs/india-finance-may29-2026
git commit -m "$(cat <<'EOF'
feat(blogs): paywall india-finance-may29-2026 after section 05

Same pattern as india-finance-jun5-2026. Sections 06+ live server-only.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Convert `india-finance-may2026`

- [ ] **Step 1: Identify split point** — free half ends after Section 04. Boundary: `{/* SECTION 5 */}` comment.

- [ ] **Step 2: Create `preview.tsx` and `gated.tsx`** per Task 6 templates. Run client-state grep.

- [ ] **Step 3: Rewrite `page.tsx`** per Task 6 Step 4 template, `SLUG = "india-finance-may2026"`.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 5: Manual verification** — Task 6 Steps 6–9 against `/blogs/india-finance-may2026`, using a distinct phrase from this article's Section 05.

- [ ] **Step 6: Commit**

```bash
git add app/blogs/india-finance-may2026
git commit -m "$(cat <<'EOF'
feat(blogs): paywall india-finance-may2026 after section 04

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Convert `startup-cashflow`

- [ ] **Step 1: Identify split point** — free half ends after Section 03. Boundary: `{/* SECTION 4 */}` (or equivalent section marker).

- [ ] **Step 2: Create `preview.tsx` and `gated.tsx`** per Task 6 templates. Run client-state grep.

- [ ] **Step 3: Rewrite `page.tsx`** per template, `SLUG = "startup-cashflow"`.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 5: Manual verification** — Task 6 Steps 6–9, distinct Section 04+ phrase from this article.

- [ ] **Step 6: Commit**

```bash
git add app/blogs/startup-cashflow
git commit -m "$(cat <<'EOF'
feat(blogs): paywall startup-cashflow after section 03

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Convert `dpiit-startup-recognition`

- [ ] **Step 1: Identify split point** — free half ends after Section 03. Boundary: `{/* SECTION 4 */}` or equivalent.

- [ ] **Step 2: Create `preview.tsx` and `gated.tsx`** per templates. Run client-state grep.

- [ ] **Step 3: Rewrite `page.tsx`**, `SLUG = "dpiit-startup-recognition"`.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 5: Manual verification** — Task 6 Steps 6–9, distinct Section 04+ phrase.

- [ ] **Step 6: Commit**

```bash
git add app/blogs/dpiit-startup-recognition
git commit -m "$(cat <<'EOF'
feat(blogs): paywall dpiit-startup-recognition after section 03

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 11: Convert `rupee-managed-decline`

This blog uses a different chrome (`.masthead`, `.kicker`, `.deck`, `.byline-bar`). Carry the metadata block into the preview untouched.

- [ ] **Step 1: Identify split point** — free half ends after Section 02. Find the SECTION 03 marker (the class names differ; the section dividers in this blog are still numbered).

- [ ] **Step 2: Create `preview.tsx` and `gated.tsx`** per Task 6 templates. The preview includes the masthead/kicker/deck/byline-bar above the article body. Run client-state grep.

- [ ] **Step 3: Rewrite `page.tsx`**, `SLUG = "rupee-managed-decline"`.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 5: Manual verification** — Task 6 Steps 6–9, distinct Section 03+ phrase.

- [ ] **Step 6: Commit**

```bash
git add app/blogs/rupee-managed-decline
git commit -m "$(cat <<'EOF'
feat(blogs): paywall rupee-managed-decline after section 02

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 12: Convert `rupee-descent` (with chart extraction)

This blog initializes Chart.js inside the article body. The chart sits in the gated half. Server components cannot directly own `useEffect` / `useRef`, so the chart must move to a small client child.

**Files:**
- Create: `app/blogs/rupee-descent/chart.tsx`
- Create: `app/blogs/rupee-descent/preview.tsx`
- Create: `app/blogs/rupee-descent/gated.tsx`
- Modify: `app/blogs/rupee-descent/page.tsx`

- [ ] **Step 1: Inspect the chart code**

Read the existing `app/blogs/rupee-descent/page.tsx`. Locate:
- The `useRef<HTMLCanvasElement>(null)` declaration and the `useEffect` that initializes Chart.js.
- The data arrays / Chart.js config used.
- The `<canvas ref={...} />` JSX node inside the article body.

- [ ] **Step 2: Create `chart.tsx`** — extract the chart into a self-contained client component

```tsx
// app/blogs/rupee-descent/chart.tsx
"use client";

import { useEffect, useRef } from "react";

export default function RupeeChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // PASTE: the original useEffect body from rupee-descent/page.tsx,
    // including the Chart.js import (likely a dynamic import("chart.js"))
    // and the data arrays / config. The ref name stays canvasRef.
  }, []);

  return (
    <div className="rd-chart-container">
      <canvas ref={canvasRef} />
    </div>
  );
}
```

- [ ] **Step 3: Identify split point** — free half ends after Section 03. The chart sits inside Section 04+ (gated). If it does not, ask the user where to place it (do not silently move it into preview).

- [ ] **Step 4: Create `preview.tsx`** following the Task 6 template. Run client-state grep.

- [ ] **Step 5: Create `gated.tsx`**

Follow the Task 6 template, but where the original article had `<canvas ref={canvasRef} />`, render `<RupeeChart />` instead:

```tsx
import "server-only";
import "../guide-article.css";
import "../../landing.css";
import RupeeChart from "./chart";

export function Gated() {
  return (
    <>
      {/* ...gated JSX, with <RupeeChart /> in place of the original canvas... */}
    </>
  );
}
```

The `useEffect` and `useRef` no longer appear in `gated.tsx`; they are encapsulated in `<RupeeChart />`.

- [ ] **Step 6: Rewrite `page.tsx`**, `SLUG = "rupee-descent"`.

```tsx
import { cookies } from "next/headers";
import { db } from "@/app/lib/db";
import BackBar from "@/app/blogs/components/BackBar";
import BlogFooter from "@/app/blogs/components/BlogFooter";
import PaywallGate from "@/app/components/PaywallGate";
import { Preview } from "./preview";
import "@/app/blogs/paywall.css";

const SLUG = "rupee-descent";

export default async function Page() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  const authed = !!user;

  const Gated = authed ? (await import("./gated")).Gated : null;

  return (
    <div className="blog-article-page">
      <BackBar />
      <article className="rd-article">
        <Preview />
        {Gated ? <Gated /> : <PaywallGate slug={SLUG} />}
      </article>
      <BlogFooter />
    </div>
  );
}
```

Note `<article className="rd-article">` (this blog uses `rd-article` rather than `blog-post-body`).

- [ ] **Step 7: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean exit.

- [ ] **Step 8: Manual verification**

Repeat Task 6 Steps 6–9 against `/blogs/rupee-descent`. Additionally:
- Confirm logged-out view: no `<canvas>` element exists in the DOM, and Chart.js code is **not** present in the page's JavaScript chunks (check Network tab for the chunk URLs and grep responses for `Chart.register` or `chart.js` strings).
- Confirm logged-in view: chart renders correctly.

- [ ] **Step 9: Commit**

```bash
git add app/blogs/rupee-descent
git commit -m "$(cat <<'EOF'
feat(blogs): paywall rupee-descent after section 03 with chart extraction

Chart.js was rendered inline via useEffect/useRef in the original page.
Server components can't host effects, so the chart moves into
rupee-descent/chart.tsx as a small client child. The chart and its
JS payload only ship to the browser when the user is authed and the
server includes the gated content.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

---

## Task 13: Cross-blog final verification

A sanity sweep after all seven blogs are converted.

- [ ] **Step 1: Lint and typecheck the full project**

Run: `npx tsc --noEmit`
Expected: clean exit.

Run (if a lint script exists): `npm run lint`
Expected: zero warnings.

- [ ] **Step 2: Walk each blog logged out**

For each slug, in a private window:
1. Visit `/blogs/<slug>`.
2. Scroll. Confirm slide-up paywall appears past the preview end.
3. View-source. Grep page text for a distinctive sentence from the gated portion (one you record per blog from the source `gated.tsx`). Confirm it is absent.
4. Run in dev tools: `Array.from(document.scripts).some(s => s.textContent.includes('<distinctive-gated-phrase>'))`. Expected `false`.

- [ ] **Step 3: Walk each blog logged in**

Sign in once. For each slug, confirm full content renders and no `.paywall-gate` element exists.

- [ ] **Step 4: End-to-end auth flow on a non-pilot blog**

Pick `startup-cashflow`. Logged-out window. Trigger paywall. Sign up flow → OTP → verify → refresh → confirm gated content appears.

- [ ] **Step 5: `/api/auth/check-email` rate limit**

Repeat Task 1 Step 3's 11-request loop. Confirm 429 on the 11th.

- [ ] **Step 6: Build for production**

Run: `npm run build`
Expected: clean build. If the build fails because `server-only` is missing as a dependency, install it:

```bash
npm install server-only
```

Then re-run `npm run build`.

- [ ] **Step 7: Final commit (only if a fix was needed)**

If `server-only` was installed:

```bash
git add package.json package-lock.json
git commit -m "$(cat <<'EOF'
chore: add server-only dependency for paywall gated modules

server-only marks gated.tsx modules as server-side-only, making the
build fail loudly if a client component ever imports them. This is
the spec's primary regression defense.

Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
EOF
)"
```

If nothing changed in this task, do not create an empty commit.

---

## Done

When all 13 tasks are checked off, the paywall is live on all 7 blogs, gated content is server-enforced, and the dev/build pipeline is clean. The user has not asked for a push — do not push to the remote until they explicitly say so.
