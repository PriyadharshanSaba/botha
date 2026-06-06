# Admin Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/admin/*` portal for founders to monitor signups/revenue, onboard users, and manage referral offers.

**Architecture:** Next.js app-router pages and API routes under `/admin/*` and `/api/admin/*`, gated by `ADMIN_EMAILS` env CSV. Reuses existing OTP infrastructure with a separate login surface. No new dependencies (chart.js already installed). No new schema.

**Tech Stack:** Next.js 16 app router, TypeScript, Drizzle ORM + Postgres (Neon), chart.js, existing OTP/cookie auth.

**Spec:** [`docs/superpowers/specs/2026-06-03-admin-portal-design.md`](../specs/2026-06-03-admin-portal-design.md)

**Testing approach:** Repo has no automated test infrastructure. Each task ends with a **manual verification** step (curl + dev server) followed by commit.

---

## Phase 0 — Setup

### Task 0.1: Create branch + add env var

**Files:**
- Modify: `.env.local`

- [ ] **Step 1: Create a feature branch**

```bash
git checkout main
git pull
git checkout -b admin-portal
```

(If user prefers to stay on `mobile-view-01`, skip branch creation — but ask first.)

- [ ] **Step 2: Add `ADMIN_EMAILS` to `.env.local`**

Append to `.env.local`:

```
ADMIN_EMAILS=priyadharshan.97@gmail.com,hdamogha@gmail.com
```

(Use actual founder emails. Lowercase, comma-separated, no spaces around commas.)

- [ ] **Step 3: Verify env loads**

Run: `npm run dev`
Expected: server starts without error. Stop server (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add .env.local 2>/dev/null || true   # only if not gitignored
git status
```

Note: `.env.local` is typically gitignored — no commit. Just confirm the value is present locally. Also add the variable to Vercel project settings (production + preview) before deploy. No commit in this step.

---

### Task 0.2: Export `getTestEmails()` from otp utility

**Files:**
- Modify: `app/lib/utils/otp.ts`

The admin SQL needs the test-email list to exclude. Export a function rather than re-parse env elsewhere.

- [ ] **Step 1: Add the export**

Edit `app/lib/utils/otp.ts`. Replace the `TEST_EMAILS` declaration block with:

```ts
import crypto from "crypto";

const TEST_EMAILS: string[] = process.env.TEST_EMAILS
  ? process.env.TEST_EMAILS.split(",").map((e) => e.trim().toLowerCase())
  : process.env.NODE_ENV === "production"
    ? []
    : ["hdamogha@gmail.com", "priyadharshan.97@gmail.com", "1@1"];

export function getTestEmails(): string[] {
  return TEST_EMAILS;
}

export function generateOTP(email?: string) {
  if (email && TEST_EMAILS.includes(email.toLowerCase())) {
    return "000000";
  }
  return crypto.randomInt(100000, 999999).toString();
}

export function isTestEmail(email: string) {
  return TEST_EMAILS.includes(email.toLowerCase());
}
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/utils/otp.ts
git commit -m "feat(admin): export getTestEmails for admin SQL exclusion"
```

---

## Phase 1 — Auth & Routing

### Task 1.1: Admin auth helper

**Files:**
- Create: `app/lib/admin.ts`

- [ ] **Step 1: Create the helper module**

Write `app/lib/admin.ts`:

```ts
import { db } from "@/app/lib/db";
import type { NextRequest } from "next/server";

const ADMIN_EMAILS: Set<string> = new Set(
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
);

export function getAdminEmails(): Set<string> {
  return ADMIN_EMAILS;
}

export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.has(email.trim().toLowerCase());
}

/**
 * Validates the uid cookie AND that the user's email is in ADMIN_EMAILS.
 * Returns the user if authenticated as admin, null otherwise.
 */
export async function getAuthenticatedAdmin(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  const adminFlag = req.cookies.get("admin")?.value;
  if (!userId || adminFlag !== "1") return null;
  const user = await db.getUserById(userId);
  if (!user || !user.verified) return null;
  if (!isAdminEmail(user.email)) return null;
  return user;
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/admin.ts
git commit -m "feat(admin): add admin auth helper backed by ADMIN_EMAILS env"
```

---

### Task 1.2: Middleware for `/admin/*`

**Files:**
- Create: `middleware.ts` (at repo root — if it already exists, modify)

Check first:

```bash
ls /Users/guest3/dev/personal/botha/middleware.ts 2>/dev/null && echo EXISTS || echo NEW
```

If `EXISTS`, read it and add the `/admin/*` branch to the existing handler. If `NEW`, create as below.

- [ ] **Step 1: Create the middleware**

Write `middleware.ts` (or augment existing):

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_EMAILS = new Set(
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the login page itself + its API routes through.
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/api/admin/login") ||
    pathname.startsWith("/api/admin/verify-otp") ||
    pathname.startsWith("/api/admin/logout")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const uid = req.cookies.get("uid")?.value;
    const adminFlag = req.cookies.get("admin")?.value;
    if (!uid || adminFlag !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    // Note: middleware can't hit the DB. The route handler / layout re-checks
    // ADMIN_EMAILS by reading the user record. Middleware is a cheap pre-filter.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
```

- [ ] **Step 2: Manual verification**

Run: `npm run dev`
Visit: `http://localhost:3000/admin`
Expected: redirect to `/admin/login?next=%2Fadmin`. (Page won't exist yet → 404, that's fine — middleware fired first.)

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add middleware.ts
git commit -m "feat(admin): middleware gate for /admin and /api/admin"
```

---

### Task 1.3: Admin login API — send OTP

**Files:**
- Create: `app/api/admin/login/route.ts`

- [ ] **Step 1: Write the handler**

```ts
import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { generateOTP, isTestEmail } from "@/app/lib/utils/otp";
import { sendOtpEmail } from "@/app/lib/email/send";
import { isAdminEmail } from "@/app/lib/admin";

export async function POST(req: Request) {
  const { email: rawEmail } = await req.json();
  const email = rawEmail?.trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  if (!isAdminEmail(email)) {
    // Same generic error as not_registered so non-admins can't enumerate.
    return NextResponse.json({ error: "not_authorized" }, { status: 403 });
  }

  // Upsert admin user row on first login.
  let user = await db.getUserByEmail(email);
  if (!user) {
    await db.createUser({ email, firstName: "Admin", lastName: "" });
    await db.markUserVerified(email);
    user = await db.getUserByEmail(email);
  }
  if (!user) {
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }

  // Rate limit: skip for test emails (mirrors /api/login).
  const testUser = isTestEmail(email);
  if (!testUser) {
    const rateLimit = await db.checkRateLimit(email);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many attempts. Try again tomorrow." },
        { status: 429 }
      );
    }
    await db.recordOtpAttempt(email);
  }

  const otp = generateOTP(email);
  const expiry = Date.now() + 5 * 60 * 1000;
  await db.saveOTP(email, otp, expiry);

  if (!testUser) {
    await sendOtpEmail(email, otp, user.firstName);
  }

  return NextResponse.json({ success: true });
}
```

**Note on `createUser`:** Check that `db.createUser({email, firstName, lastName})` exists with this signature by inspecting `app/lib/db/postgres.ts`. If the signature differs, adapt the call. If `createUser` does not exist, use `db.upsertUser(...)` or whatever the existing signup flow calls (read `app/api/signup/route.ts` for the pattern).

- [ ] **Step 2: Verify createUser signature**

Run: `grep -n "createUser\|upsertUser\|insertUser" app/lib/db/postgres.ts app/lib/db/types.ts`
Expected: confirms exact signature. Adjust Step 1 code if signature differs.

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Manual verification**

Run: `npm run dev` in one terminal. In another:

```bash
# Non-admin → 403
curl -s -X POST http://localhost:3000/api/admin/login \
  -H 'content-type: application/json' \
  -d '{"email":"random@example.com"}'

# Admin (use a value from ADMIN_EMAILS) → 200
curl -s -X POST http://localhost:3000/api/admin/login \
  -H 'content-type: application/json' \
  -d '{"email":"YOUR_ADMIN_EMAIL"}'
```

Expected: first → `{"error":"not_authorized"}`. Second → `{"success":true}`. Check server logs to confirm OTP was generated.

- [ ] **Step 5: Commit**

```bash
git add app/api/admin/login/route.ts
git commit -m "feat(admin): /api/admin/login — gated OTP send"
```

---

### Task 1.4: Admin verify-otp API

**Files:**
- Create: `app/api/admin/verify-otp/route.ts`

- [ ] **Step 1: Write the handler**

```ts
import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminEmail } from "@/app/lib/admin";

export async function POST(req: NextRequest) {
  const { email: rawEmail, otp } = await req.json();
  const email = rawEmail?.trim().toLowerCase();

  if (!email || !otp) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!isAdminEmail(email)) {
    return NextResponse.json({ error: "not_authorized" }, { status: 403 });
  }

  const user = await db.getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const success = await db.verifyOTP(email, otp);
  if (!success) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  await db.markUserVerified(email);

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "uid",
    value: user.id,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  response.cookies.set({
    name: "admin",
    value: "1",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Manual verification**

Run `npm run dev`. In another terminal:

```bash
# Send OTP first (test email gets 000000)
curl -s -X POST http://localhost:3000/api/admin/login \
  -H 'content-type: application/json' \
  -d '{"email":"YOUR_TEST_ADMIN_EMAIL"}'

# Verify with static OTP — capture cookies
curl -s -c cookies.txt -X POST http://localhost:3000/api/admin/verify-otp \
  -H 'content-type: application/json' \
  -d '{"email":"YOUR_TEST_ADMIN_EMAIL","otp":"000000"}'

cat cookies.txt
```

Expected: response `{"success":true}`. `cookies.txt` contains both `uid` and `admin=1`.

- [ ] **Step 4: Commit**

```bash
git add app/api/admin/verify-otp/route.ts
git commit -m "feat(admin): /api/admin/verify-otp sets admin cookie"
```

---

### Task 1.5: Admin logout API

**Files:**
- Create: `app/api/admin/logout/route.ts`

- [ ] **Step 1: Write the handler**

```ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  for (const name of ["uid", "admin"]) {
    response.cookies.set({
      name,
      value: "",
      maxAge: 0,
      path: "/",
    });
  }
  return response;
}
```

- [ ] **Step 2: Manual verification**

```bash
curl -s -b cookies.txt -c cookies.txt -X POST http://localhost:3000/api/admin/logout
cat cookies.txt
```

Expected: `uid` and `admin` cookies cleared.

- [ ] **Step 3: Commit**

```bash
git add app/api/admin/logout/route.ts
git commit -m "feat(admin): /api/admin/logout clears admin cookies"
```

---

### Task 1.6: `/admin/login` page

**Files:**
- Create: `app/admin/login/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState<"email" | "otp">("email");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function sendOtp(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setBusy(false);
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      setErr(j.error || "Failed to send OTP");
      return;
    }
    setStage("otp");
  }

  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await fetch("/api/admin/verify-otp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    setBusy(false);
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      setErr(j.error || "Invalid OTP");
      return;
    }
    router.push(next);
  }

  return (
    <main style={{ maxWidth: 420, margin: "10vh auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Admin sign in</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Restricted access. Authorized emails only.
      </p>
      {stage === "email" && (
        <form onSubmit={sendOtp}>
          <label>
            Email
            <input
              type="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: 10, marginTop: 6 }}
            />
          </label>
          <button type="submit" disabled={busy} style={{ marginTop: 16 }}>
            {busy ? "Sending..." : "Send OTP"}
          </button>
        </form>
      )}
      {stage === "otp" && (
        <form onSubmit={verifyOtp}>
          <p style={{ marginBottom: 12 }}>OTP sent to {email}</p>
          <label>
            OTP
            <input
              type="text"
              inputMode="numeric"
              autoFocus
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: "100%", padding: 10, marginTop: 6 }}
            />
          </label>
          <button type="submit" disabled={busy} style={{ marginTop: 16 }}>
            {busy ? "Verifying..." : "Verify"}
          </button>
          <button
            type="button"
            onClick={() => { setStage("email"); setOtp(""); }}
            style={{ marginLeft: 8 }}
          >
            Back
          </button>
        </form>
      )}
      {err && <p style={{ color: "crimson", marginTop: 12 }}>{err}</p>}
    </main>
  );
}
```

- [ ] **Step 2: Manual verification**

Run `npm run dev`. Visit `http://localhost:3000/admin/login`.
- Type a non-admin email → submit → error "not_authorized".
- Type an admin email → submit → OTP form appears.
- Enter `000000` (test email) → submit → redirect to `/admin` (which will 404 until next phase, that's expected).

- [ ] **Step 3: Commit**

```bash
git add app/admin/login/page.tsx
git commit -m "feat(admin): /admin/login OTP page"
```

---

### Task 1.7: Admin layout + chrome

**Files:**
- Create: `app/admin/layout.tsx`
- Create: `app/components/admin/AdminNav.tsx`

- [ ] **Step 1: Write the nav component**

`app/components/admin/AdminNav.tsx`:

```tsx
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/signups", label: "Signups" },
  { href: "/admin/onboard", label: "Onboard" },
  { href: "/admin/referrals", label: "Referrals" },
];

export default function AdminNav({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <header
      style={{
        display: "flex",
        gap: 24,
        padding: "12px 24px",
        borderBottom: "2px solid #d4a017",
        alignItems: "center",
      }}
    >
      <strong>Admin</strong>
      <nav style={{ display: "flex", gap: 16, flex: 1 }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              textDecoration: pathname === l.href ? "underline" : "none",
              fontWeight: pathname === l.href ? 700 : 400,
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <span style={{ color: "#666", fontSize: 14 }}>{email}</span>
      <button onClick={logout}>Sign out</button>
    </header>
  );
}
```

- [ ] **Step 2: Write the layout**

`app/admin/layout.tsx`:

```tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/app/lib/db";
import { isAdminEmail } from "@/app/lib/admin";
import AdminNav from "@/app/components/admin/AdminNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const adminFlag = cookieStore.get("admin")?.value;

  if (!uid || adminFlag !== "1") {
    redirect("/admin/login");
  }
  const user = await db.getUserById(uid);
  if (!user || !user.verified || !isAdminEmail(user.email)) {
    redirect("/admin/login");
  }

  return (
    <div>
      <AdminNav email={user.email} />
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  );
}
```

**Note:** This layout will also wrap `/admin/login` itself because it lives under `app/admin/`. To avoid that, the layout should let the login page through. Simplest fix: move login OUT of the layout by colocating, or use a route group. Option used here: detect login pathname not possible in layout. Better: move login page to `app/admin/(public)/login/page.tsx` route group and put the auth-gated layout only inside `app/admin/(private)/` group, OR simpler: keep the layout as-is and have it short-circuit when accessed at login (login page won't render layout from `app/admin/login/` if we use a sibling layout). The cleanest pattern:

Use a **route group**. Restructure:

```
app/admin/
  login/page.tsx           # NO admin layout — uses root layout
  (gated)/
    layout.tsx             # the file shown above
    page.tsx               # dashboard
    signups/page.tsx
    onboard/page.tsx
    referrals/page.tsx
```

This way, `app/admin/layout.tsx` does NOT exist; only `app/admin/(gated)/layout.tsx` does, and it only wraps gated pages. `/admin/login` falls back to the root layout.

Move the file accordingly:

```bash
mkdir -p app/admin/\(gated\)
# When subsequent tasks create app/admin/page.tsx, place them at app/admin/(gated)/page.tsx instead.
```

Place the layout file at `app/admin/(gated)/layout.tsx` (the same code as Step 2).

- [ ] **Step 3: Move dashboard placeholder file location convention**

For all subsequent tasks, the dashboard/signups/onboard/referrals pages live under `app/admin/(gated)/`, not directly under `app/admin/`. (Login stays at `app/admin/login/`.)

The Next.js app router treats `(gated)` as a route group — does NOT appear in URL. So `app/admin/(gated)/page.tsx` is reachable at `/admin`, and `app/admin/(gated)/signups/page.tsx` at `/admin/signups`.

- [ ] **Step 4: Create a stub dashboard so the route resolves**

`app/admin/(gated)/page.tsx`:

```tsx
export default function AdminDashboardStub() {
  return <h1>Admin dashboard (coming next)</h1>;
}
```

- [ ] **Step 5: Manual verification**

Run `npm run dev`. Log in via `/admin/login` with admin email + `000000`. Should land on `/admin` and see the nav + stub heading. Click "Sign out" → should clear cookies and bounce to `/admin/login`.

Visit `/admin` without logging in → redirect to `/admin/login`.

- [ ] **Step 6: Commit**

```bash
git add app/admin/\(gated\)/layout.tsx app/admin/\(gated\)/page.tsx app/components/admin/AdminNav.tsx
git commit -m "feat(admin): gated layout, nav, dashboard stub"
```

---

## Phase 2 — Dashboard

### Task 2.1: Stats query module

**Files:**
- Create: `app/lib/admin/stats.ts`

- [ ] **Step 1: Write the module**

```ts
import { db as drizzle } from "@/app/lib/db/connection";
import { sql } from "drizzle-orm";
import { getTestEmails } from "@/app/lib/utils/otp";

export type DailyPoint = { date: string; count: number };

export type DashboardStats = {
  subscriberCount: number;
  moneyCollectedPaise: number;
  planBreakdown: { planId: string; count: number }[];
  paidSubsLast10Days: DailyPoint[];
  newSignupsLast10Days: DailyPoint[];
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const testEmails = getTestEmails();
  // sql.raw is unsafe for user input; here values are env-controlled.
  // Build a SQL array literal of lowercased emails.
  const excludeList = sql.raw(
    testEmails.length === 0
      ? "('')"
      : "(" + testEmails.map((e) => `'${e.replace(/'/g, "''")}'`).join(",") + ")"
  );

  const subscriberRes = await drizzle.execute(sql`
    SELECT COUNT(DISTINCT s.user_id)::int AS count
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    WHERE s.status = 'active'
      AND LOWER(u.email) NOT IN ${excludeList}
  `);
  const subscriberRow = subscriberRes.rows[0] as { count: number } | undefined;

  const moneyRes = await drizzle.execute(sql`
    SELECT COALESCE(SUM(i.total_paise), 0)::bigint AS total
    FROM invoices i
    JOIN users u ON u.id = i.user_id
    WHERE i.status = 'paid'
      AND LOWER(u.email) NOT IN ${excludeList}
  `);
  const moneyRow = moneyRes.rows[0] as { total: number | string } | undefined;

  const planRes = await drizzle.execute(sql`
    SELECT s.plan_id, COUNT(*)::int AS count
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    WHERE s.status = 'active'
      AND LOWER(u.email) NOT IN ${excludeList}
    GROUP BY s.plan_id
    ORDER BY count DESC
  `);
  const planRows = planRes.rows as { plan_id: string; count: number }[];

  const paidSubsRes = await drizzle.execute(sql`
    WITH days AS (
      SELECT generate_series(
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata') - INTERVAL '9 days',
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata'),
        INTERVAL '1 day'
      )::date AS d
    )
    SELECT to_char(days.d, 'YYYY-MM-DD') AS d,
           COALESCE(COUNT(s.id), 0)::int AS count
    FROM days
    LEFT JOIN subscriptions s
      ON DATE(s.created_at AT TIME ZONE 'Asia/Kolkata') = days.d
     AND s.status = 'active'
    LEFT JOIN users u ON u.id = s.user_id
    WHERE (s.id IS NULL OR LOWER(u.email) NOT IN ${excludeList})
    GROUP BY days.d
    ORDER BY days.d ASC
  `);
  const paidSubsDays = paidSubsRes.rows as { d: string; count: number }[];

  const signupRes = await drizzle.execute(sql`
    WITH days AS (
      SELECT generate_series(
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata') - INTERVAL '9 days',
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata'),
        INTERVAL '1 day'
      )::date AS d
    )
    SELECT to_char(days.d, 'YYYY-MM-DD') AS d,
           COALESCE(COUNT(u.id), 0)::int AS count
    FROM days
    LEFT JOIN users u
      ON DATE(u.created_at AT TIME ZONE 'Asia/Kolkata') = days.d
     AND u.verified = true
     AND LOWER(u.email) NOT IN ${excludeList}
    GROUP BY days.d
    ORDER BY days.d ASC
  `);
  const signupDays = signupRes.rows as { d: string; count: number }[];

  return {
    subscriberCount: Number(subscriberRow?.count ?? 0),
    moneyCollectedPaise: Number(moneyRow?.total ?? 0),
    planBreakdown: planRows.map((r) => ({ planId: r.plan_id, count: Number(r.count) })),
    paidSubsLast10Days: paidSubsDays.map((r) => ({ date: r.d, count: Number(r.count) })),
    newSignupsLast10Days: signupDays.map((r) => ({ date: r.d, count: Number(r.count) })),
  };
}
```

**Note on `drizzle.execute`:** Depending on the drizzle version, the call may return `{ rows: ... }` instead of an array directly. Inspect `app/lib/db/connection.ts` and an example existing query to confirm the return shape, then adjust the destructuring above.

- [ ] **Step 2: Verify drizzle return shape**

Run: `grep -rn "\.execute(" app/lib/ app/api/ | head -20`
Expected: shows existing patterns. Adapt code if necessary.

- [ ] **Step 3: Verify `users.created_at` column exists**

Run: `grep -n "createdAt\|created_at" app/lib/db/schema.ts | head`
Expected: `users` table has a `createdAt` timestamp. If not, add a migration in a separate task before continuing.

If `users.created_at` does not exist, STOP and create a migration task before proceeding. The "new signups per day" graph depends on this column.

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add app/lib/admin/stats.ts
git commit -m "feat(admin): dashboard stats query module"
```

---

### Task 2.2: Daily bar chart component

**Files:**
- Create: `app/components/admin/DailyBarChart.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";
import { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

export type Point = { date: string; count: number };

export default function DailyBarChart({
  points,
  label,
}: {
  points: Point[];
  label: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: points.map((p) => p.date.slice(5)),
        datasets: [
          {
            label,
            data: points.map((p) => p.count),
            backgroundColor: "#d4a017",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } },
        },
      },
    });
    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [points, label]);

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{label}</h3>
      <canvas ref={canvasRef} height={120} />
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/admin/DailyBarChart.tsx
git commit -m "feat(admin): DailyBarChart wrapper around chart.js"
```

---

### Task 2.3: Wire the dashboard page

**Files:**
- Modify: `app/admin/(gated)/page.tsx`

- [ ] **Step 1: Replace the stub with the real page**

```tsx
import { getDashboardStats } from "@/app/lib/admin/stats";
import DailyBarChart from "@/app/components/admin/DailyBarChart";
import { PLANS } from "@/app/lib/plans";

function rupees(paise: number) {
  return (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function planName(id: string) {
  const p = PLANS.find((p) => p.id === id);
  return p?.name ?? id;
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <main>
      <h1 style={{ marginBottom: 24 }}>Dashboard</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
          <div style={{ color: "#666", fontSize: 13 }}>Total subscribers</div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>
            {stats.subscriberCount}
          </div>
        </div>
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
          <div style={{ color: "#666", fontSize: 13 }}>Money collected</div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>
            ₹{rupees(stats.moneyCollectedPaise)}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h3 style={{ marginBottom: 8 }}>Active plans</h3>
        <ul>
          {stats.planBreakdown.map((p) => (
            <li key={p.planId}>
              {planName(p.planId)} — {p.count}
            </li>
          ))}
          {stats.planBreakdown.length === 0 && <li style={{ color: "#666" }}>No active plans yet</li>}
        </ul>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        <DailyBarChart
          points={stats.paidSubsLast10Days}
          label="New paying subscribers (last 10 days)"
        />
        <DailyBarChart
          points={stats.newSignupsLast10Days}
          label="New user signups (last 10 days)"
        />
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Verify `PLANS` export shape**

Run: `grep -n "export.*PLANS\|export const plans" app/lib/plans.ts`
Expected: confirms the export. Adapt the import name if different.

- [ ] **Step 3: Manual verification**

Run `npm run dev`. Visit `/admin` (logged in). Expected:
- Two tiles render with real values.
- Active plans list renders.
- Two bar charts render with 10 bars each.
- Server console shows no errors.

Hit the database directly to spot-check the subscriber count:

```bash
psql "$DATABASE_URL" -c "SELECT COUNT(DISTINCT s.user_id) FROM subscriptions s JOIN users u ON u.id=s.user_id WHERE s.status='active' AND LOWER(u.email) NOT IN ('hdamogha@gmail.com','priyadharshan.97@gmail.com','1@1');"
```

Expected: matches tile value.

- [ ] **Step 4: Commit**

```bash
git add app/admin/\(gated\)/page.tsx
git commit -m "feat(admin): dashboard tiles and 10-day graphs"
```

---

## Phase 3 — Signups Ledger

### Task 3.1: Ledger query

**Files:**
- Create: `app/lib/admin/signups.ts`

- [ ] **Step 1: Write the module**

```ts
import { db as drizzle } from "@/app/lib/db/connection";
import { sql } from "drizzle-orm";
import { getTestEmails } from "@/app/lib/utils/otp";

export type SignupRow = {
  subscriptionId: string;
  createdAt: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  planId: string;
  amountPaise: number;
  invoiceId: string | null;
  invoiceNumber: string | null;
};

export async function getSignupsLedger({ limit = 100 }: { limit?: number } = {}): Promise<SignupRow[]> {
  const testEmails = getTestEmails();
  const excludeList = sql.raw(
    testEmails.length === 0
      ? "('')"
      : "(" + testEmails.map((e) => `'${e.replace(/'/g, "''")}'`).join(",") + ")"
  );

  const res = await drizzle.execute(sql`
    SELECT s.id AS subscription_id,
           s.created_at,
           u.first_name,
           u.last_name,
           u.email,
           s.plan_id,
           s.amount_paise,
           i.id AS invoice_id,
           i.invoice_number
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    LEFT JOIN invoices i
      ON i.subscription_id = s.id AND i.status = 'paid'
    WHERE s.status = 'active'
      AND LOWER(u.email) NOT IN ${excludeList}
    ORDER BY s.created_at DESC
    LIMIT ${sql.raw(String(Math.max(1, Math.min(500, limit))))}
  `);

  const rows = res.rows as Array<{
    subscription_id: string;
    created_at: string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    plan_id: string;
    amount_paise: number;
    invoice_id: string | null;
    invoice_number: string | null;
  }>;

  return rows.map((r) => ({
    subscriptionId: r.subscription_id,
    createdAt: r.created_at,
    firstName: r.first_name,
    lastName: r.last_name,
    email: r.email,
    planId: r.plan_id,
    amountPaise: Number(r.amount_paise),
    invoiceId: r.invoice_id,
    invoiceNumber: r.invoice_number,
  }));
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/admin/signups.ts
git commit -m "feat(admin): signups ledger query"
```

---

### Task 3.2: Ledger page

**Files:**
- Create: `app/admin/(gated)/signups/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
import { getSignupsLedger } from "@/app/lib/admin/signups";
import { PLANS } from "@/app/lib/plans";

function rupees(paise: number) {
  return (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function planName(id: string) {
  return PLANS.find((p) => p.id === id)?.name ?? id;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function SignupsLedgerPage() {
  const rows = await getSignupsLedger({ limit: 100 });

  return (
    <main>
      <h1 style={{ marginBottom: 16 }}>Signups ledger</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>
        Latest {rows.length} paid signups, test emails excluded.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ position: "sticky", top: 0, background: "#fff" }}>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #333" }}>
            <th style={{ padding: 8 }}>Date (IST)</th>
            <th style={{ padding: 8 }}>Name</th>
            <th style={{ padding: 8 }}>Email</th>
            <th style={{ padding: 8 }}>Plan</th>
            <th style={{ padding: 8, textAlign: "right", fontFamily: "monospace" }}>
              Amount
            </th>
            <th style={{ padding: 8 }}>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.subscriptionId} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>{fmtDate(r.createdAt)}</td>
              <td style={{ padding: 8 }}>
                {[r.firstName, r.lastName].filter(Boolean).join(" ") || "—"}
              </td>
              <td style={{ padding: 8 }}>{r.email}</td>
              <td style={{ padding: 8 }}>{planName(r.planId)}</td>
              <td style={{ padding: 8, textAlign: "right", fontFamily: "monospace" }}>
                ₹{rupees(r.amountPaise)}
              </td>
              <td style={{ padding: 8 }}>
                {r.invoiceId ? (
                  <a
                    href={`/api/billing/invoice/${r.invoiceId}/pdf`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {r.invoiceNumber || "View"}
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: 16, color: "#666" }}>
                No signups yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
```

- [ ] **Step 2: Verify invoice PDF route path**

Run: `ls app/api/billing/invoice/`
Expected: confirms route slug. Adjust the href in the table if different.

- [ ] **Step 3: Manual verification**

Visit `/admin/signups`. Table renders with paid subscriptions, desc by date, test emails excluded. Click invoice link → opens PDF in new tab.

- [ ] **Step 4: Commit**

```bash
git add app/admin/\(gated\)/signups/page.tsx
git commit -m "feat(admin): /admin/signups ledger"
```

---

## Phase 4 — Manual Onboard Tool

### Task 4.1: Create-user API

**Files:**
- Create: `app/api/admin/users/create/route.ts`

- [ ] **Step 1: Inspect existing user creation pattern**

Run: `cat app/api/signup/route.ts` and `grep -n "createUser\|insertUser\|upsertUser\|users\\.values\|db\\.insert" app/lib/db/postgres.ts | head -30`

Use whatever method the existing signup uses to create a `users` row. Replicate that here.

- [ ] **Step 2: Write the handler**

The skeleton below assumes `db.createUser({email, firstName, lastName})` and `db.markUserVerified(email)`. Adapt to actual API.

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { getAuthenticatedAdmin } from "@/app/lib/admin";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const email = (body.email as string | undefined)?.trim().toLowerCase();
  const firstName = (body.firstName as string | undefined)?.trim();
  const lastName = (body.lastName as string | undefined)?.trim();

  if (!email || !firstName || !lastName) {
    return NextResponse.json(
      { error: "missing_fields" },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const existing = await db.getUserByEmail(email);
  if (existing) {
    return NextResponse.json(
      { error: "user_exists", existingId: existing.id },
      { status: 409 }
    );
  }

  await db.createUser({ email, firstName, lastName });
  await db.markUserVerified(email);
  const created = await db.getUserByEmail(email);

  return NextResponse.json({ id: created!.id, email: created!.email });
}
```

- [ ] **Step 3: Type-check + manual verification**

Run `npx tsc --noEmit`. No errors.

```bash
# Logged in as admin (use cookies.txt from Phase 1)
curl -s -b cookies.txt -X POST http://localhost:3000/api/admin/users/create \
  -H 'content-type: application/json' \
  -d '{"email":"newuser@example.com","firstName":"New","lastName":"User"}'
```

Expected: `{"id":"...","email":"newuser@example.com"}`. Re-running returns 409 `user_exists`.

- [ ] **Step 4: Commit**

```bash
git add app/api/admin/users/create/route.ts
git commit -m "feat(admin): /api/admin/users/create — manual onboard"
```

---

### Task 4.2: Onboard page

**Files:**
- Create: `app/admin/(gated)/onboard/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
"use client";
import { useState } from "react";

export default function OnboardPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setResult(null);
    setBusy(true);
    const r = await fetch("/api/admin/users/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName }),
    });
    setBusy(false);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      if (j.error === "user_exists") {
        setErr(`Already onboarded (id: ${j.existingId}).`);
      } else {
        setErr(j.error || "Failed to create user");
      }
      return;
    }
    setResult(`Created user ${j.email}. They can sign in at /signin with OTP.`);
    setEmail("");
    setFirstName("");
    setLastName("");
  }

  return (
    <main style={{ maxWidth: 480 }}>
      <h1 style={{ marginBottom: 16 }}>Onboard user</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>
        Creates a verified user row. No emails sent. User signs in via normal OTP afterwards.
      </p>
      <form onSubmit={submit}>
        <label style={{ display: "block", marginBottom: 12 }}>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 12 }}>
          First name
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 12 }}>
          Last name
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <button type="submit" disabled={busy}>
          {busy ? "Creating..." : "Create user"}
        </button>
      </form>
      {result && <p style={{ color: "green", marginTop: 16 }}>{result}</p>}
      {err && <p style={{ color: "crimson", marginTop: 16 }}>{err}</p>}
    </main>
  );
}
```

- [ ] **Step 2: Manual verification**

Visit `/admin/onboard`. Fill form, submit. Confirm success message. Submit again with same email → 409 error visible. Check the DB:

```bash
psql "$DATABASE_URL" -c "SELECT id, email, verified FROM users WHERE email='newuser@example.com';"
```

Expected: row exists with `verified=true`.

- [ ] **Step 3: Commit**

```bash
git add app/admin/\(gated\)/onboard/page.tsx
git commit -m "feat(admin): /admin/onboard form"
```

---

## Phase 5 — Referral Management

### Task 5.1: Extract referral business logic into shared module

**Files:**
- Create: `app/lib/admin/referrals.ts`
- Modify: `scripts/enable-referrer.ts`

- [ ] **Step 1: Create the shared module**

```ts
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
```

**Note:** The `referralOffers` PK is `code` (per schema). `offerId` returned is the code itself.

- [ ] **Step 2: Refactor the CLI to use the shared module**

Rewrite `scripts/enable-referrer.ts`:

```ts
/**
 * Enable a user to give a referral code (CLI wrapper).
 *
 * Usage:
 *   npm run enable-referrer -- --user=<userId> --code=<CODE> --percent=10
 *   npm run enable-referrer -- --user=<userId> --code=<CODE> --flat=50000   (paise)
 *   [--description="Friends & family"] [--expires=2026-12-31]
 */
import { config } from "dotenv";
config({ path: ".env.local" });

type Args = {
  user: string;
  code: string;
  percent?: number;
  flat?: number;
  description?: string;
  expires?: string;
};

function parseArgs(): Args {
  const out: Record<string, string> = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)=(.*)$/);
    if (m) out[m[1]] = m[2];
  }
  if (!out.user || !out.code) throw new Error("Missing required --user=<id> --code=<CODE>");
  if (!out.percent && !out.flat) throw new Error("Provide either --percent=<int> or --flat=<paise>");
  if (out.percent && out.flat) throw new Error("Provide only one of --percent or --flat");
  return {
    user: out.user,
    code: out.code,
    percent: out.percent ? Number(out.percent) : undefined,
    flat: out.flat ? Number(out.flat) : undefined,
    description: out.description,
    expires: out.expires,
  };
}

async function main() {
  const args = parseArgs();
  const { enableReferralOffer } = await import("../app/lib/admin/referrals");
  const result = await enableReferralOffer({
    identifier: { kind: "id", value: args.user },
    code: args.code,
    discount: args.percent
      ? { type: "percent", value: args.percent }
      : { type: "flat", valuePaise: args.flat! },
    description: args.description,
    expiresAt: args.expires ? new Date(args.expires) : null,
  });
  console.log(`✓ ${result.email} can now give code: ${result.offerId}`);
  process.exit(0);
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.message : e);
  process.exit(1);
});
```

(SQL reference comment block at the bottom of the original file can stay or be deleted — keep it; it's docs.)

- [ ] **Step 3: Verify CLI still works**

```bash
# Replace with a real user id from your DB
npm run enable-referrer -- --user=<USER_ID> --code=TESTREF --percent=5
```

Expected: prints success, DB updated. Verify:

```bash
psql "$DATABASE_URL" -c "SELECT code, owner_user_id, discount_percent, active FROM referral_offers WHERE code='TESTREF';"
```

Roll back by deactivating: `npm run enable-referrer -- --user=<USER_ID> --code=ORIGINAL --percent=10` (re-runs deactivate logic).

- [ ] **Step 4: Type-check + commit**

```bash
npx tsc --noEmit
git add app/lib/admin/referrals.ts scripts/enable-referrer.ts
git commit -m "refactor(referral): share enable/deactivate logic between CLI and admin UI"
```

---

### Task 5.2: Enable + deactivate API routes

**Files:**
- Create: `app/api/admin/referrals/enable/route.ts`
- Create: `app/api/admin/referrals/deactivate/route.ts`

- [ ] **Step 1: Enable route**

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { enableReferralOffer } from "@/app/lib/admin/referrals";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const id = body.identifier as { kind: "id" | "email"; value: string } | undefined;
  const code = body.code as string | undefined;
  const discount = body.discount as
    | { type: "percent"; value: number }
    | { type: "flat"; valuePaise: number }
    | undefined;
  const description = body.description as string | undefined;
  const expiresAt = body.expiresAt ? new Date(body.expiresAt as string) : null;

  if (!id || !code || !discount) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  try {
    const result = await enableReferralOffer({
      identifier: id,
      code,
      discount,
      description,
      expiresAt,
    });
    return NextResponse.json(result);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
```

- [ ] **Step 2: Deactivate route**

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { deactivateReferralOffer } from "@/app/lib/admin/referrals";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const code = body.code as string | undefined;
  if (!code) return NextResponse.json({ error: "missing_code" }, { status: 400 });

  try {
    await deactivateReferralOffer(code);
    return NextResponse.json({ success: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
```

- [ ] **Step 3: Manual verification**

```bash
# Enable via API
curl -s -b cookies.txt -X POST http://localhost:3000/api/admin/referrals/enable \
  -H 'content-type: application/json' \
  -d '{"identifier":{"kind":"email","value":"newuser@example.com"},"code":"NEWREF","discount":{"type":"percent","value":10}}'

# Deactivate
curl -s -b cookies.txt -X POST http://localhost:3000/api/admin/referrals/deactivate \
  -H 'content-type: application/json' \
  -d '{"code":"NEWREF"}'
```

Expected: enable returns offer details; deactivate returns success. Check DB.

- [ ] **Step 4: Commit**

```bash
git add app/api/admin/referrals/enable/route.ts app/api/admin/referrals/deactivate/route.ts
git commit -m "feat(admin): referral enable/deactivate API"
```

---

### Task 5.3: Active offers query

**Files:**
- Modify: `app/lib/admin/referrals.ts` (add `listActiveOffers`)

- [ ] **Step 1: Append to the module**

Add to `app/lib/admin/referrals.ts`:

```ts
import { sql } from "drizzle-orm";

export type ActiveOfferRow = {
  code: string;
  ownerEmail: string;
  ownerFirstName: string | null;
  ownerLastName: string | null;
  discountPercent: number | null;
  discountFlatPaise: number | null;
  expiresAt: string | null;
  redemptions: number;
};

export async function listActiveOffers(): Promise<ActiveOfferRow[]> {
  const res = await db.execute(sql`
    SELECT o.code,
           u.email AS owner_email,
           u.first_name AS owner_first_name,
           u.last_name AS owner_last_name,
           o.discount_percent,
           o.discount_flat_paise,
           o.expires_at,
           COALESCE(
             (SELECT COUNT(*) FROM referral_redemptions r WHERE r.code = o.code),
             0
           )::int AS redemptions
    FROM referral_offers o
    JOIN users u ON u.id = o.owner_user_id
    WHERE o.active = true
    ORDER BY o.created_at DESC
  `);

  const rows = res.rows as Array<{
    code: string;
    owner_email: string;
    owner_first_name: string | null;
    owner_last_name: string | null;
    discount_percent: number | null;
    discount_flat_paise: number | null;
    expires_at: string | null;
    redemptions: number;
  }>;

  return rows.map((r) => ({
    code: r.code,
    ownerEmail: r.owner_email,
    ownerFirstName: r.owner_first_name,
    ownerLastName: r.owner_last_name,
    discountPercent: r.discount_percent,
    discountFlatPaise: r.discount_flat_paise,
    expiresAt: r.expires_at,
    redemptions: Number(r.redemptions),
  }));
}
```

- [ ] **Step 2: Type-check + commit**

```bash
npx tsc --noEmit
git add app/lib/admin/referrals.ts
git commit -m "feat(admin): listActiveOffers query"
```

---

### Task 5.4: Referrals page (both panels)

**Files:**
- Create: `app/admin/(gated)/referrals/page.tsx`
- Create: `app/components/admin/ReferralEnableForm.tsx`
- Create: `app/components/admin/ReferralOffersTable.tsx`

- [ ] **Step 1: Enable form (client)**

`app/components/admin/ReferralEnableForm.tsx`:

```tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReferralEnableForm() {
  const router = useRouter();
  const [idKind, setIdKind] = useState<"email" | "id">("email");
  const [idValue, setIdValue] = useState("");
  const [code, setCode] = useState("");
  const [discountType, setDiscountType] = useState<"percent" | "flat">("percent");
  const [discountVal, setDiscountVal] = useState("");
  const [expires, setExpires] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setOk(null);
    const discount =
      discountType === "percent"
        ? { type: "percent" as const, value: Number(discountVal) }
        : { type: "flat" as const, valuePaise: Math.round(Number(discountVal) * 100) };
    const r = await fetch("/api/admin/referrals/enable", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        identifier: { kind: idKind, value: idValue },
        code,
        discount,
        expiresAt: expires || undefined,
      }),
    });
    setBusy(false);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      setErr(j.error || "failed");
      return;
    }
    setOk(`Enabled ${j.offerId} for ${j.email}`);
    setIdValue("");
    setCode("");
    setDiscountVal("");
    setExpires("");
    router.refresh();
  }

  return (
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ marginBottom: 12 }}>Enable referral</h2>
      <form onSubmit={submit} style={{ display: "grid", gap: 12, maxWidth: 480 }}>
        <div>
          <label style={{ marginRight: 12 }}>
            <input
              type="radio"
              checked={idKind === "email"}
              onChange={() => setIdKind("email")}
            />{" "}
            Email
          </label>
          <label>
            <input
              type="radio"
              checked={idKind === "id"}
              onChange={() => setIdKind("id")}
            />{" "}
            User ID
          </label>
          <input
            required
            placeholder={idKind === "email" ? "user@example.com" : "uuid…"}
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <label>
          Code
          <input
            required
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            pattern="[A-Z0-9_-]{3,20}"
            placeholder="PRIYA10"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <div>
          <label style={{ marginRight: 12 }}>
            <input
              type="radio"
              checked={discountType === "percent"}
              onChange={() => setDiscountType("percent")}
            />{" "}
            Percent (%)
          </label>
          <label>
            <input
              type="radio"
              checked={discountType === "flat"}
              onChange={() => setDiscountType("flat")}
            />{" "}
            Flat (₹)
          </label>
          <input
            required
            type="number"
            min={1}
            step={1}
            value={discountVal}
            onChange={(e) => setDiscountVal(e.target.value)}
            placeholder={discountType === "percent" ? "10" : "500"}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <label>
          Expires (optional)
          <input
            type="date"
            value={expires}
            onChange={(e) => setExpires(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <button type="submit" disabled={busy}>
          {busy ? "Saving..." : "Enable"}
        </button>
      </form>
      {ok && <p style={{ color: "green", marginTop: 12 }}>{ok}</p>}
      {err && <p style={{ color: "crimson", marginTop: 12 }}>{err}</p>}
    </section>
  );
}
```

- [ ] **Step 2: Offers table (client, with deactivate button)**

`app/components/admin/ReferralOffersTable.tsx`:

```tsx
"use client";
import { useRouter } from "next/navigation";
import type { ActiveOfferRow } from "@/app/lib/admin/referrals";

function discountLabel(o: ActiveOfferRow) {
  if (o.discountPercent != null) return `${o.discountPercent}%`;
  if (o.discountFlatPaise != null) return `₹${(o.discountFlatPaise / 100).toLocaleString("en-IN")}`;
  return "—";
}

export default function ReferralOffersTable({ rows }: { rows: ActiveOfferRow[] }) {
  const router = useRouter();

  async function deactivate(code: string) {
    if (!confirm(`Deactivate ${code}? This cannot be undone (history preserved).`)) return;
    const r = await fetch("/api/admin/referrals/deactivate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      alert("Failed: " + (j.error || r.status));
      return;
    }
    router.refresh();
  }

  return (
    <section>
      <h2 style={{ marginBottom: 12 }}>Active offers</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #333" }}>
            <th style={{ padding: 8 }}>Owner</th>
            <th style={{ padding: 8 }}>Code</th>
            <th style={{ padding: 8 }}>Discount</th>
            <th style={{ padding: 8 }}>Expires</th>
            <th style={{ padding: 8 }}>Redemptions</th>
            <th style={{ padding: 8 }}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>
                {r.ownerEmail}
                <br />
                <span style={{ color: "#666", fontSize: 12 }}>
                  {[r.ownerFirstName, r.ownerLastName].filter(Boolean).join(" ")}
                </span>
              </td>
              <td style={{ padding: 8, fontFamily: "monospace" }}>{r.code}</td>
              <td style={{ padding: 8 }}>{discountLabel(r)}</td>
              <td style={{ padding: 8 }}>
                {r.expiresAt ? new Date(r.expiresAt).toLocaleDateString("en-IN") : "—"}
              </td>
              <td style={{ padding: 8 }}>{r.redemptions}</td>
              <td style={{ padding: 8 }}>
                <button onClick={() => deactivate(r.code)}>Deactivate</button>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: 16, color: "#666" }}>
                No active offers.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
```

- [ ] **Step 3: Page**

`app/admin/(gated)/referrals/page.tsx`:

```tsx
import { listActiveOffers } from "@/app/lib/admin/referrals";
import ReferralEnableForm from "@/app/components/admin/ReferralEnableForm";
import ReferralOffersTable from "@/app/components/admin/ReferralOffersTable";

export default async function ReferralsPage() {
  const rows = await listActiveOffers();
  return (
    <main>
      <h1 style={{ marginBottom: 16 }}>Referrals</h1>
      <ReferralEnableForm />
      <ReferralOffersTable rows={rows} />
    </main>
  );
}
```

- [ ] **Step 4: Type-check + manual verification**

```bash
npx tsc --noEmit
```

Visit `/admin/referrals`. Enable a new code via form → table refreshes and shows it. Click Deactivate → confirm dialog → row removed. Check DB to confirm `active=false`.

- [ ] **Step 5: Commit**

```bash
git add app/admin/\(gated\)/referrals/page.tsx app/components/admin/ReferralEnableForm.tsx app/components/admin/ReferralOffersTable.tsx
git commit -m "feat(admin): /admin/referrals enable form + active offers table"
```

---

## Phase 6 — Wrap-up

### Task 6.1: Lint pass

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: zero warnings. Fix any issues introduced by new files.

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit fixes if any**

```bash
git add -A
git diff --cached --stat
git commit -m "chore(admin): lint + typecheck fixes"
```

(Skip if no changes.)

---

### Task 6.2: End-to-end smoke test

Manual walkthrough on dev:

- [ ] **1.** Visit `/admin` while logged out → redirect to `/admin/login`.
- [ ] **2.** Try a non-admin email at `/admin/login` → "not_authorized".
- [ ] **3.** Sign in with admin email + OTP → land on `/admin`.
- [ ] **4.** Dashboard tiles + 2 charts render with sensible data.
- [ ] **5.** `/admin/signups` lists paid subscriptions desc; invoice links open PDFs in new tab; test emails excluded.
- [ ] **6.** `/admin/onboard` creates a user; second attempt returns `user_exists`.
- [ ] **7.** `/admin/referrals` enables a new code; redemption count column reads 0; deactivate works.
- [ ] **8.** Sign out → `/admin` again redirects to login.

No commit for this task — verification only.

---

### Task 6.3: Vercel env + deploy checklist

Before merging / deploying:

- [ ] **1.** `ADMIN_EMAILS` set in Vercel project (production + preview environments).
- [ ] **2.** Confirm `TEST_EMAILS` is also set in prod (otherwise prod will default to empty list, which is correct — admin SQL exclusion would no-op).
- [ ] **3.** Decide whether admin email accounts should be allowed to also have plans/subscriptions, or kept as "admin-only" rows. Document choice in PR description.
- [ ] **4.** Open PR: `git push -u origin admin-portal` then `gh pr create --title "Admin portal v1" --body "..."` — wait for user confirmation before pushing per project rules.

---

## File summary (final)

```
app/
  admin/
    login/page.tsx                         # OTP login (uses root layout)
    (gated)/
      layout.tsx                           # auth gate + admin chrome
      page.tsx                             # dashboard
      signups/page.tsx
      onboard/page.tsx
      referrals/page.tsx
  api/admin/
    login/route.ts
    verify-otp/route.ts
    logout/route.ts
    users/create/route.ts
    referrals/enable/route.ts
    referrals/deactivate/route.ts
  components/admin/
    AdminNav.tsx
    DailyBarChart.tsx
    ReferralEnableForm.tsx
    ReferralOffersTable.tsx
  lib/
    admin.ts                               # auth helper + isAdminEmail
    admin/
      stats.ts
      signups.ts
      referrals.ts                         # enable, deactivate, listActiveOffers
    utils/otp.ts                           # + getTestEmails() export
middleware.ts                              # /admin/:path* gate
scripts/
  enable-referrer.ts                       # refactored to call lib/admin/referrals.ts
.env.local                                 # ADMIN_EMAILS=...
```
