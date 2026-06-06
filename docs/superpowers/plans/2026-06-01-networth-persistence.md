# Networth Tracker — Server Persistence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the in-tool PIN auth from the Networth Tracker and add cache-first server persistence over the existing `uid` cookie + Postgres stack.

**Architecture:** One JSONB row per user in Postgres (`networth_data`), atomic append via `jsonb` concat. Client reads from `localStorage` first; auto-fetches only when cache is empty or older than 15 days; manual Refresh button reconciles. Saves are synchronous POST-through. Single-tab lock via `BroadcastChannel`. Legacy PIN-era localStorage entries migrate once on first authenticated mount.

**Tech Stack:** Next.js 16 (App Router), Postgres + Drizzle ORM (raw SQL migrations under `app/lib/db/migrations/`), React 19, Chart.js (already used). No test framework in repo — verification is via `curl`, `grep`, and DevTools.

**Spec:** `docs/superpowers/specs/2026-06-01-networth-persistence-design.md`

**Verification convention:** Each task ends with verification commands and a commit step. The repo has no automated test runner; verification is `curl` / `grep` / DevTools, run by the engineer or reviewer.

---

## File Map

**Create:**
- `app/lib/db/migrations/005_networth_data.sql` — table + indexes
- `app/lib/networth/types.ts` — shared types + `SCHEMA_VERSION`
- `app/lib/networth/server.ts` — DB helpers (server-only)
- `app/lib/networth/cache.ts` — localStorage read/write (client-only)
- `app/lib/networth/migration.ts` — legacy `nwt_<username>` → server
- `app/lib/networth/tab-lock.ts` — BroadcastChannel + localStorage-lease fallback
- `app/lib/networth/client.ts` — mount/save/refresh orchestration + fetch wrappers
- `app/api/networth/route.ts` — `GET`, `POST`
- `app/api/networth/bulk/route.ts` — `POST` (bulk append, dedup)

**Modify:**
- `app/lib/db/schema.ts` — add `networthData` table
- `app/api/me/route.ts` — include user `id` in response (currently flags only)
- `app/tools/page.tsx` — remove PIN auth + localStorage helpers, wire to `lib/networth/client`, add Refresh button + tab-lock guard + pending badge
- `app/components/Header.tsx` — extend `handleLogout` to clear `nwt_*` localStorage keys

---

## Task 1: DB migration + schema entry

**Files:**
- Create: `app/lib/db/migrations/005_networth_data.sql`
- Modify: `app/lib/db/schema.ts`

- [ ] **Step 1: Write the migration SQL**

Create `app/lib/db/migrations/005_networth_data.sql`:

```sql
-- Networth tracker server persistence
-- See: docs/superpowers/specs/2026-06-01-networth-persistence-design.md

CREATE TABLE IF NOT EXISTS networth_data (
  user_id         TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  entries         JSONB     NOT NULL DEFAULT '[]'::jsonb,
  schema_version  INTEGER   NOT NULL DEFAULT 1,
  updated_at      TIMESTAMP NOT NULL DEFAULT now()
);
```

- [ ] **Step 2: Add table to Drizzle schema**

Append to `app/lib/db/schema.ts` (after the `userProgress` table, before the closing of the file):

```ts
import type { NwtEntry } from "@/app/lib/networth/types";

export const networthData = pgTable("networth_data", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  entries: jsonb("entries")
    .$type<NwtEntry[]>()
    .notNull()
    .default(sql`'[]'::jsonb`),
  schemaVersion: integer("schema_version").notNull().default(1),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

(The `NwtEntry` import will resolve once Task 2 lands. Keep the import — the schema file already imports types from other modules; type-only imports do not cause runtime cycles.)

- [ ] **Step 3: Apply migration locally**

Run (replace `$DATABASE_URL` with your local dev DB URL):

```bash
psql "$DATABASE_URL" -f app/lib/db/migrations/005_networth_data.sql
```

Expected: `CREATE TABLE` printed, no errors.

- [ ] **Step 4: Verify table exists**

Run:

```bash
psql "$DATABASE_URL" -c "\d networth_data"
```

Expected output includes `user_id`, `entries`, `schema_version`, `updated_at` columns and FK to `users(id)`.

- [ ] **Step 5: Commit**

```bash
git add app/lib/db/migrations/005_networth_data.sql app/lib/db/schema.ts
git commit -m "feat(db): add networth_data table for tracker persistence"
```

---

## Task 2: Shared types

**Files:**
- Create: `app/lib/networth/types.ts`

- [ ] **Step 1: Write the types module**

Create `app/lib/networth/types.ts`:

```ts
export const SCHEMA_VERSION = 1;

export type NwtEntry = {
  id: string;           // uuid v4, client-generated
  month: string;        // "YYYY-MM"
  createdAt: string;    // ISO timestamp
  assets: Record<string, number>;
  liabs: Record<string, number>;
  alloc: Record<string, number>;
};

export type NwtCache = {
  userId: string;
  schemaVersion: number;
  entries: NwtEntry[];
  lastSyncedAt: string | null;
  updatedAt: string;
};

export type NwtPending = {
  entries: NwtEntry[];
};

export const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const MONTH_RE = /^\d{4}-\d{2}$/;
export const MAX_ENTRIES_PER_USER = 1000;
export const SYNC_TTL_DAYS = 15;
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/types.ts
git commit -m "feat(networth): shared types and constants"
```

---

## Task 3: Server DB helpers

**Files:**
- Create: `app/lib/networth/server.ts`

- [ ] **Step 1: Write the helper module**

Create `app/lib/networth/server.ts`:

```ts
import "server-only";
import { db } from "@/app/lib/db/connection";
import { networthData } from "@/app/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import type { NwtEntry } from "./types";
import { SCHEMA_VERSION, MAX_ENTRIES_PER_USER } from "./types";

export async function getNetworth(userId: string): Promise<{
  entries: NwtEntry[];
  schemaVersion: number;
  updatedAt: string | null;
}> {
  const rows = await db
    .select()
    .from(networthData)
    .where(eq(networthData.userId, userId))
    .limit(1);

  const row = rows[0];
  if (!row) {
    return { entries: [], schemaVersion: SCHEMA_VERSION, updatedAt: null };
  }
  return {
    entries: row.entries ?? [],
    schemaVersion: row.schemaVersion,
    updatedAt: row.updatedAt.toISOString(),
  };
}

/** Atomic append. Returns the updated row's updated_at. */
export async function appendEntry(
  userId: string,
  entry: NwtEntry,
): Promise<{ updatedAt: string }> {
  const result = await db.execute(sql`
    INSERT INTO networth_data (user_id, entries, schema_version, updated_at)
    VALUES (${userId}, jsonb_build_array(${entry}::jsonb), ${SCHEMA_VERSION}, now())
    ON CONFLICT (user_id) DO UPDATE
      SET entries    = networth_data.entries || EXCLUDED.entries,
          updated_at = now()
    RETURNING updated_at, jsonb_array_length(entries) AS len
  `);
  const row = (result.rows ?? result)[0] as { updated_at: Date; len: number };
  if (row.len > MAX_ENTRIES_PER_USER) {
    // Roll back via a corrective update: drop the just-appended last element.
    await db.execute(sql`
      UPDATE networth_data
      SET entries = entries - (jsonb_array_length(entries) - 1)
      WHERE user_id = ${userId}
    `);
    throw new Error("MAX_ENTRIES_EXCEEDED");
  }
  return { updatedAt: new Date(row.updated_at).toISOString() };
}

/** Bulk append with per-id dedup. Returns accepted + rejected ids. */
export async function bulkAppend(
  userId: string,
  entries: NwtEntry[],
): Promise<{
  accepted: string[];
  rejected: { id: string; reason: string }[];
  updatedAt: string;
}> {
  const current = await getNetworth(userId);
  const existingIds = new Set(current.entries.map((e) => e.id));

  const accepted: NwtEntry[] = [];
  const rejected: { id: string; reason: string }[] = [];
  for (const e of entries) {
    if (existingIds.has(e.id)) {
      rejected.push({ id: e.id, reason: "duplicate" });
      continue;
    }
    accepted.push(e);
    existingIds.add(e.id);
  }

  if (current.entries.length + accepted.length > MAX_ENTRIES_PER_USER) {
    throw new Error("MAX_ENTRIES_EXCEEDED");
  }

  if (accepted.length === 0) {
    return {
      accepted: [],
      rejected,
      updatedAt: current.updatedAt ?? new Date().toISOString(),
    };
  }

  const acceptedJson = JSON.stringify(accepted);
  const result = await db.execute(sql`
    INSERT INTO networth_data (user_id, entries, schema_version, updated_at)
    VALUES (${userId}, ${acceptedJson}::jsonb, ${SCHEMA_VERSION}, now())
    ON CONFLICT (user_id) DO UPDATE
      SET entries    = networth_data.entries || EXCLUDED.entries,
          updated_at = now()
    RETURNING updated_at
  `);
  const row = (result.rows ?? result)[0] as { updated_at: Date };
  return {
    accepted: accepted.map((e) => e.id),
    rejected,
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/server.ts
git commit -m "feat(networth): server-side db helpers for getNetworth/append/bulkAppend"
```

---

## Task 4: Server-side validation helper

**Files:**
- Modify: `app/lib/networth/server.ts` (add `validateEntry` export)

- [ ] **Step 1: Append validator to `server.ts`**

Append to `app/lib/networth/server.ts`:

```ts
import { UUID_V4, MONTH_RE } from "./types";

function isFiniteNumberRecord(x: unknown): x is Record<string, number> {
  if (x === null || typeof x !== "object" || Array.isArray(x)) return false;
  for (const v of Object.values(x as Record<string, unknown>)) {
    if (typeof v !== "number" || !Number.isFinite(v)) return false;
  }
  return true;
}

export function validateEntry(raw: unknown): { ok: true; entry: NwtEntry } | { ok: false; reason: string } {
  if (!raw || typeof raw !== "object") return { ok: false, reason: "not-an-object" };
  const e = raw as Record<string, unknown>;
  if (typeof e.id !== "string" || !UUID_V4.test(e.id)) return { ok: false, reason: "bad-id" };
  if (typeof e.month !== "string" || !MONTH_RE.test(e.month)) return { ok: false, reason: "bad-month" };
  if (typeof e.createdAt !== "string" || Number.isNaN(Date.parse(e.createdAt))) {
    return { ok: false, reason: "bad-createdAt" };
  }
  if (!isFiniteNumberRecord(e.assets)) return { ok: false, reason: "bad-assets" };
  if (!isFiniteNumberRecord(e.liabs)) return { ok: false, reason: "bad-liabs" };
  if (!isFiniteNumberRecord(e.alloc)) return { ok: false, reason: "bad-alloc" };
  return {
    ok: true,
    entry: {
      id: e.id,
      month: e.month,
      createdAt: e.createdAt,
      assets: e.assets as Record<string, number>,
      liabs: e.liabs as Record<string, number>,
      alloc: e.alloc as Record<string, number>,
    },
  };
}
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/server.ts
git commit -m "feat(networth): validateEntry guard for incoming payloads"
```

---

## Task 5: `GET /api/networth`

**Files:**
- Create: `app/api/networth/route.ts`

- [ ] **Step 1: Write the GET handler**

Create `app/api/networth/route.ts`:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getNetworth } from "@/app/lib/networth/server";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const data = await getNetworth(userId);
  return NextResponse.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}
```

- [ ] **Step 2: Verify unauthenticated path returns 401**

With dev server running (`npm run dev`):

```bash
curl -i http://localhost:3000/api/networth
```

Expected: first line `HTTP/1.1 401 Unauthorized` (or `HTTP/2 401`), body `{"error":"unauthorized"}`.

- [ ] **Step 3: Verify authenticated path returns empty entries for a fresh user**

Replace `<TEST_UID>` with a valid user id from your local DB.

```bash
curl -i -H "Cookie: uid=<TEST_UID>" http://localhost:3000/api/networth
```

Expected: `HTTP 200`, body `{"entries":[],"schemaVersion":1,"updatedAt":null}`.

- [ ] **Step 4: Commit**

```bash
git add app/api/networth/route.ts
git commit -m "feat(api/networth): GET endpoint returns user entries"
```

---

## Task 6: `POST /api/networth`

**Files:**
- Modify: `app/api/networth/route.ts`

- [ ] **Step 1: Add the POST handler**

Append to `app/api/networth/route.ts`:

```ts
import { appendEntry, validateEntry } from "@/app/lib/networth/server";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const raw = (body as { entry?: unknown })?.entry;
  const result = validateEntry(raw);
  if (!result.ok) {
    return NextResponse.json({ error: "invalid-entry", reason: result.reason }, { status: 400 });
  }

  try {
    const { updatedAt } = await appendEntry(userId, result.entry);
    return NextResponse.json(
      { entry: result.entry, updatedAt },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    if (e instanceof Error && e.message === "MAX_ENTRIES_EXCEEDED") {
      return NextResponse.json({ error: "max-entries-exceeded" }, { status: 409 });
    }
    throw e;
  }
}
```

- [ ] **Step 2: Verify rejection of bad payload**

```bash
curl -i -X POST http://localhost:3000/api/networth \
  -H "Cookie: uid=<TEST_UID>" \
  -H "Content-Type: application/json" \
  -d '{"entry":{"id":"not-a-uuid"}}'
```

Expected: `HTTP 400`, body contains `"reason":"bad-id"`.

- [ ] **Step 3: Verify happy path appends an entry**

```bash
ID=$(uuidgen | tr A-Z a-z)
curl -i -X POST http://localhost:3000/api/networth \
  -H "Cookie: uid=<TEST_UID>" \
  -H "Content-Type: application/json" \
  -d "{\"entry\":{\"id\":\"$ID\",\"month\":\"2026-06\",\"createdAt\":\"2026-06-01T10:00:00Z\",\"assets\":{\"stocks\":100000},\"liabs\":{\"homeLoan\":50000},\"alloc\":{\"equity\":100}}}"
```

Expected: `HTTP 200`, response contains the entry and an `updatedAt` timestamp.

Confirm row landed:

```bash
curl -s -H "Cookie: uid=<TEST_UID>" http://localhost:3000/api/networth | grep -c "$ID"
```

Expected: `1`.

- [ ] **Step 4: Commit**

```bash
git add app/api/networth/route.ts
git commit -m "feat(api/networth): POST endpoint atomically appends one entry"
```

---

## Task 7: `POST /api/networth/bulk`

**Files:**
- Create: `app/api/networth/bulk/route.ts`

- [ ] **Step 1: Write the bulk handler**

Create `app/api/networth/bulk/route.ts`:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { bulkAppend, validateEntry } from "@/app/lib/networth/server";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const raw = (body as { entries?: unknown })?.entries;
  if (!Array.isArray(raw)) {
    return NextResponse.json({ error: "invalid-entries" }, { status: 400 });
  }

  const accepted: import("@/app/lib/networth/types").NwtEntry[] = [];
  const rejected: { id: string; reason: string }[] = [];
  for (const item of raw) {
    const v = validateEntry(item);
    if (v.ok) accepted.push(v.entry);
    else {
      const id =
        item && typeof item === "object" && "id" in item && typeof (item as { id: unknown }).id === "string"
          ? (item as { id: string }).id
          : "<unknown>";
      rejected.push({ id, reason: v.reason });
    }
  }

  try {
    const result = await bulkAppend(userId, accepted);
    return NextResponse.json(
      {
        accepted: result.accepted,
        rejected: [...rejected, ...result.rejected],
        updatedAt: result.updatedAt,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    if (e instanceof Error && e.message === "MAX_ENTRIES_EXCEEDED") {
      return NextResponse.json({ error: "max-entries-exceeded" }, { status: 409 });
    }
    throw e;
  }
}
```

- [ ] **Step 2: Verify dedup**

Capture an id you already inserted in Task 6 as `$ID`. Then:

```bash
curl -i -X POST http://localhost:3000/api/networth/bulk \
  -H "Cookie: uid=<TEST_UID>" \
  -H "Content-Type: application/json" \
  -d "{\"entries\":[{\"id\":\"$ID\",\"month\":\"2026-06\",\"createdAt\":\"2026-06-01T10:00:00Z\",\"assets\":{},\"liabs\":{},\"alloc\":{}}]}"
```

Expected: `HTTP 200`. Body `accepted` is `[]`, `rejected` contains `{"id":"$ID","reason":"duplicate"}`.

- [ ] **Step 3: Verify concurrent appends do not lose writes**

In two terminals, run roughly simultaneously (each with a fresh `uuidgen` id):

```bash
ID=$(uuidgen | tr A-Z a-z); curl -s -X POST http://localhost:3000/api/networth \
  -H "Cookie: uid=<TEST_UID>" -H "Content-Type: application/json" \
  -d "{\"entry\":{\"id\":\"$ID\",\"month\":\"2026-07\",\"createdAt\":\"2026-07-01T10:00:00Z\",\"assets\":{},\"liabs\":{},\"alloc\":{}}}" >/dev/null && echo $ID
```

Then count entries:

```bash
curl -s -H "Cookie: uid=<TEST_UID>" http://localhost:3000/api/networth | python3 -c 'import sys,json; print(len(json.load(sys.stdin)["entries"]))'
```

Expected: count increased by exactly 2.

- [ ] **Step 4: Commit**

```bash
git add app/api/networth/bulk/route.ts
git commit -m "feat(api/networth): bulk POST endpoint with dedup by entry.id"
```

---

## Task 8: Client cache module

**Files:**
- Create: `app/lib/networth/cache.ts`

- [ ] **Step 1: Write the cache module**

Create `app/lib/networth/cache.ts`:

```ts
"use client";
import type { NwtCache, NwtEntry, NwtPending } from "./types";
import { SCHEMA_VERSION, SYNC_TTL_DAYS } from "./types";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function cacheKey(userId: string) {
  return `nwt_${userId}`;
}
function pendingKey(userId: string) {
  return `nwt_pending_${userId}`;
}

export function readCache(userId: string): NwtCache | null {
  try {
    const raw = localStorage.getItem(cacheKey(userId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as NwtCache;
    if (!parsed || parsed.userId !== userId || !Array.isArray(parsed.entries)) {
      localStorage.removeItem(cacheKey(userId));
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(cacheKey(userId));
    return null;
  }
}

export function writeCache(userId: string, partial: Partial<NwtCache>): NwtCache {
  const existing = readCache(userId);
  const next: NwtCache = {
    userId,
    schemaVersion: SCHEMA_VERSION,
    entries: [],
    lastSyncedAt: null,
    updatedAt: new Date().toISOString(),
    ...existing,
    ...partial,
    userId, // pin userId to argument
  };
  localStorage.setItem(cacheKey(userId), JSON.stringify(next));
  return next;
}

export function appendToCache(userId: string, entry: NwtEntry): NwtCache {
  const existing = readCache(userId);
  const entries = existing ? [...existing.entries, entry] : [entry];
  return writeCache(userId, { entries, updatedAt: new Date().toISOString() });
}

export function replaceCacheEntries(
  userId: string,
  entries: NwtEntry[],
  lastSyncedAt: string,
): NwtCache {
  return writeCache(userId, { entries, lastSyncedAt, updatedAt: new Date().toISOString() });
}

export function clearCache(userId: string): void {
  localStorage.removeItem(cacheKey(userId));
  localStorage.removeItem(pendingKey(userId));
}

/** Clear ALL networth-related localStorage keys (used on logout). */
export function clearAllNetworthKeys(): void {
  const toDelete: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("nwt_")) toDelete.push(k);
  }
  for (const k of toDelete) localStorage.removeItem(k);
}

export function readPending(userId: string): NwtPending {
  try {
    const raw = localStorage.getItem(pendingKey(userId));
    if (!raw) return { entries: [] };
    const parsed = JSON.parse(raw) as NwtPending;
    if (!parsed || !Array.isArray(parsed.entries)) return { entries: [] };
    return parsed;
  } catch {
    return { entries: [] };
  }
}

export function writePending(userId: string, entries: NwtEntry[]): void {
  if (entries.length === 0) {
    localStorage.removeItem(pendingKey(userId));
    return;
  }
  localStorage.setItem(pendingKey(userId), JSON.stringify({ entries }));
}

export function pushPending(userId: string, entry: NwtEntry): void {
  const cur = readPending(userId);
  writePending(userId, [...cur.entries, entry]);
}

export function isCacheStale(cache: NwtCache | null): boolean {
  if (!cache) return true;
  if (!cache.lastSyncedAt) return true;
  const age = Date.now() - new Date(cache.lastSyncedAt).getTime();
  return age > SYNC_TTL_DAYS * MS_PER_DAY;
}
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/cache.ts
git commit -m "feat(networth): localStorage cache + pending queue helpers"
```

---

## Task 9: Tab lock module

**Files:**
- Create: `app/lib/networth/tab-lock.ts`

- [ ] **Step 1: Write the tab-lock module**

Create `app/lib/networth/tab-lock.ts`:

```ts
"use client";

type LockResult = { acquired: boolean; release: () => void };

const CLAIM_WAIT_MS = 500;
const LEASE_REFRESH_MS = 2000;
const LEASE_DEAD_MS = 5000;

export async function acquireTabLock(userId: string): Promise<LockResult> {
  if (typeof window === "undefined") return { acquired: true, release: () => {} };

  if (typeof BroadcastChannel !== "undefined") {
    return acquireViaBroadcast(userId);
  }
  return acquireViaLease(userId);
}

function acquireViaBroadcast(userId: string): Promise<LockResult> {
  return new Promise((resolve) => {
    const channel = new BroadcastChannel(`nwt_lock_${userId}`);
    let owned = false;

    const onMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object") return;
      if (event.data.type === "claim?" && owned) {
        channel.postMessage({ type: "owned" });
      }
      if (event.data.type === "owned" && !owned) {
        // Another tab already owns.
        channel.removeEventListener("message", onMessage);
        channel.close();
        resolve({ acquired: false, release: () => {} });
      }
    };

    channel.addEventListener("message", onMessage);
    channel.postMessage({ type: "claim?" });

    setTimeout(() => {
      if (owned) return;
      owned = true;
      resolve({
        acquired: true,
        release: () => {
          owned = false;
          channel.removeEventListener("message", onMessage);
          channel.close();
        },
      });
    }, CLAIM_WAIT_MS);
  });
}

function acquireViaLease(userId: string): Promise<LockResult> {
  return new Promise((resolve) => {
    const key = `nwt_tab_${userId}`;
    const now = Date.now();
    const raw = localStorage.getItem(key);
    let parsed: { ownedAt: number } | null = null;
    try {
      parsed = raw ? (JSON.parse(raw) as { ownedAt: number }) : null;
    } catch {
      parsed = null;
    }

    if (parsed && now - parsed.ownedAt < LEASE_DEAD_MS) {
      resolve({ acquired: false, release: () => {} });
      return;
    }

    localStorage.setItem(key, JSON.stringify({ ownedAt: now }));
    const interval = setInterval(() => {
      localStorage.setItem(key, JSON.stringify({ ownedAt: Date.now() }));
    }, LEASE_REFRESH_MS);

    resolve({
      acquired: true,
      release: () => {
        clearInterval(interval);
        const cur = localStorage.getItem(key);
        if (cur) {
          try {
            const p = JSON.parse(cur) as { ownedAt: number };
            // Only delete if we still own it
            if (p && p.ownedAt <= Date.now()) localStorage.removeItem(key);
          } catch {
            localStorage.removeItem(key);
          }
        }
      },
    });
  });
}
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/tab-lock.ts
git commit -m "feat(networth): single-tab lock via BroadcastChannel + lease fallback"
```

---

## Task 10: Legacy migration module

**Files:**
- Create: `app/lib/networth/migration.ts`

- [ ] **Step 1: Write the migration module**

Create `app/lib/networth/migration.ts`:

```ts
"use client";
import type { NwtEntry } from "./types";

/**
 * Detect any localStorage keys that match the legacy PIN-era format:
 *   nwt_<username>          (entries data)
 *   nwt_<username>_pin      (pin secret — discard)
 * Keys that match the new `nwt_<uuid>` format are skipped.
 */
const UUID_KEY_RE = /^nwt_[0-9a-f-]{36}$/i;

export type LegacyPayload = {
  key: string;
  rawEntries: unknown;
};

export function findLegacyKeys(): LegacyPayload[] {
  if (typeof localStorage === "undefined") return [];
  const out: LegacyPayload[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith("nwt_")) continue;
    if (k.startsWith("nwt_pending_") || k.startsWith("nwt_tab_") || k.startsWith("nwt_lock_")) continue;
    if (k.endsWith("_pin")) continue;
    if (UUID_KEY_RE.test(k)) continue; // new userId-keyed cache
    const raw = localStorage.getItem(k);
    try {
      out.push({ key: k, rawEntries: raw ? JSON.parse(raw) : null });
    } catch {
      // unparseable legacy data — leave key in place, do not migrate
    }
  }
  return out;
}

/** Coerce legacy entries (which lacked id + createdAt) into NwtEntry shape. */
export function coerceLegacyEntries(rawEntries: unknown): NwtEntry[] {
  if (!Array.isArray(rawEntries)) return [];
  const out: NwtEntry[] = [];
  for (const item of rawEntries) {
    if (!item || typeof item !== "object") continue;
    const e = item as Record<string, unknown>;
    const month = typeof e.month === "string" ? e.month : null;
    if (!month) continue;
    const assets = typeof e.assets === "number" ? { total: e.assets } : (e.assets as Record<string, number> | undefined) ?? {};
    const liabs = typeof e.liabs === "number" ? { total: e.liabs } : (e.liabs as Record<string, number> | undefined) ?? {};
    const alloc = (e.alloc as Record<string, number> | undefined) ?? {};
    out.push({
      id: crypto.randomUUID(),
      month,
      createdAt: new Date().toISOString(),
      assets,
      liabs,
      alloc,
    });
  }
  return out;
}

/**
 * Run legacy migration for the current user.
 * On success: posts entries to /api/networth/bulk, deletes legacy key.
 * On failure: leaves key in place; caller may retry on next mount.
 */
export async function migrateLegacy(userId: string): Promise<{ migrated: number; failedKeys: string[] }> {
  const legacy = findLegacyKeys();
  if (legacy.length === 0) return { migrated: 0, failedKeys: [] };

  const allEntries: NwtEntry[] = [];
  for (const item of legacy) {
    allEntries.push(...coerceLegacyEntries(item.rawEntries));
  }
  if (allEntries.length === 0) {
    // Nothing usable — delete the legacy keys so we stop scanning them.
    for (const item of legacy) localStorage.removeItem(item.key);
    return { migrated: 0, failedKeys: [] };
  }

  const res = await fetch("/api/networth/bulk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ entries: allEntries }),
  });

  if (!res.ok) {
    return { migrated: 0, failedKeys: legacy.map((l) => l.key) };
  }

  // Success — drop all legacy keys.
  for (const item of legacy) localStorage.removeItem(item.key);
  // Defensive: also drop any `_pin` keys that may still be around.
  const pinKeys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("nwt_") && k.endsWith("_pin")) pinKeys.push(k);
  }
  for (const k of pinKeys) localStorage.removeItem(k);

  // Mark in cache via the userId-scoped key so subsequent mounts skip the migration scan.
  void userId; // userId is used implicitly by /api/networth/bulk via cookie
  return { migrated: allEntries.length, failedKeys: [] };
}
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/migration.ts
git commit -m "feat(networth): one-shot legacy PIN-era localStorage migration"
```

---

## Task 11: Client orchestration module

**Files:**
- Create: `app/lib/networth/client.ts`

- [ ] **Step 1: Write the client module**

Create `app/lib/networth/client.ts`:

```ts
"use client";
import type { NwtEntry } from "./types";
import {
  readCache,
  writeCache,
  appendToCache,
  replaceCacheEntries,
  readPending,
  writePending,
  pushPending,
  isCacheStale,
} from "./cache";
import { migrateLegacy } from "./migration";

async function fetchAllFromServer(): Promise<{ entries: NwtEntry[]; updatedAt: string }> {
  const res = await fetch("/api/networth", { method: "GET", credentials: "include" });
  if (!res.ok) throw new Error(`GET /api/networth failed: ${res.status}`);
  const body = (await res.json()) as { entries: NwtEntry[]; updatedAt: string | null };
  return { entries: body.entries, updatedAt: body.updatedAt ?? new Date().toISOString() };
}

async function postEntry(entry: NwtEntry): Promise<{ updatedAt: string }> {
  const res = await fetch("/api/networth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ entry }),
  });
  if (!res.ok) throw new Error(`POST /api/networth failed: ${res.status}`);
  return (await res.json()) as { updatedAt: string };
}

async function postBulk(entries: NwtEntry[]): Promise<{ accepted: string[]; rejected: { id: string; reason: string }[] }> {
  const res = await fetch("/api/networth/bulk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ entries }),
  });
  if (!res.ok) throw new Error(`POST /api/networth/bulk failed: ${res.status}`);
  return (await res.json()) as { accepted: string[]; rejected: { id: string; reason: string }[] };
}

export type InitResult = {
  entries: NwtEntry[];
  source: "cache" | "server" | "empty";
  serverReachable: boolean;
};

/**
 * Mount-time bootstrap. Returns entries to render plus a flag indicating
 * whether the values came from cache or a fresh server fetch.
 */
export async function initTracker(userId: string): Promise<InitResult> {
  // 1. Legacy migration (one-shot, silent on failure)
  try {
    await migrateLegacy(userId);
  } catch {
    /* ignored — caller can surface error after 3 failures via retry counter, future enhancement */
  }

  // 2. Read cache
  const cache = readCache(userId);

  // 3. Decide auto-fetch
  if (!cache || isCacheStale(cache)) {
    try {
      const fresh = await fetchAllFromServer();
      replaceCacheEntries(userId, fresh.entries, new Date().toISOString());
      return {
        entries: fresh.entries,
        source: fresh.entries.length === 0 ? "empty" : "server",
        serverReachable: true,
      };
    } catch {
      // Fall back to whatever cache we have (or empty)
      return {
        entries: cache?.entries ?? [],
        source: cache && cache.entries.length > 0 ? "cache" : "empty",
        serverReachable: false,
      };
    }
  }

  return {
    entries: cache.entries,
    source: cache.entries.length === 0 ? "empty" : "cache",
    serverReachable: true,
  };
}

export type SaveResult =
  | { ok: true; entries: NwtEntry[] }
  | { ok: false; entries: NwtEntry[]; reason: "network" | "server" };

/**
 * Save a new entry. Synchronous from the user's POV: spinner is held until
 * this resolves. Always returns the updated entries list so the UI can
 * re-render. On failure the entry is queued in pending and still shown locally.
 */
export async function saveEntry(userId: string, draft: Omit<NwtEntry, "id" | "createdAt">): Promise<SaveResult> {
  const entry: NwtEntry = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...draft,
  };

  try {
    await postEntry(entry);
    const updated = appendToCache(userId, entry);
    // Opportunistically flush any pending entries now that we have connectivity
    await flushPending(userId);
    return { ok: true, entries: updated.entries };
  } catch (e) {
    // Local-only write + queue for retry
    pushPending(userId, entry);
    const updated = appendToCache(userId, entry);
    const reason =
      e instanceof Error && /failed:\s*5\d\d/.test(e.message) ? "server" : "network";
    return { ok: false, entries: updated.entries, reason };
  }
}

/**
 * Best-effort flush of pending queue. Returns the count of entries still pending
 * after the flush attempt.
 */
export async function flushPending(userId: string): Promise<number> {
  const pending = readPending(userId);
  if (pending.entries.length === 0) return 0;
  try {
    const res = await postBulk(pending.entries);
    const rejectedIds = new Set(res.rejected.map((r) => r.id));
    // Drop accepted + duplicates (duplicates are server-side already, also done)
    const remaining = pending.entries.filter(
      (e) => !res.accepted.includes(e.id) && !rejectedIds.has(e.id),
    );
    writePending(userId, remaining);
    return remaining.length;
  } catch {
    return pending.entries.length;
  }
}

/**
 * Manual refresh. Flushes pending first, then GETs server state and replaces
 * cache entries. Throws if either step fails so the UI can surface the error.
 */
export async function refresh(userId: string): Promise<NwtEntry[]> {
  const stillPending = await flushPending(userId);
  if (stillPending > 0) {
    throw new Error(`refresh-blocked: ${stillPending} unsynced entries`);
  }
  const fresh = await fetchAllFromServer();
  replaceCacheEntries(userId, fresh.entries, new Date().toISOString());
  return fresh.entries;
}

export function pendingCount(userId: string): number {
  return readPending(userId).entries.length;
}

export function getCachedEntries(userId: string): NwtEntry[] {
  return readCache(userId)?.entries ?? [];
}

/** Used after a successful login to ensure the cache row exists. */
export function ensureCacheShell(userId: string): void {
  if (!readCache(userId)) writeCache(userId, {});
}
```

- [ ] **Step 2: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/networth/client.ts
git commit -m "feat(networth): client orchestration — init, save, refresh, flushPending"
```

---

## Task 11b: Expose user id from `/api/me`

The `uid` cookie is `httpOnly` (see `app/api/logout/route.ts:6`) so the client cannot read it directly. The tracker needs the user id for cache key scoping. Extend `/api/me` to include it.

**Files:**
- Modify: `app/api/me/route.ts`

- [ ] **Step 1: Add `id` to the response**

Edit `app/api/me/route.ts`. In the logged-in branch (the second `return NextResponse.json`), add `id: userId`:

```ts
return NextResponse.json({
  loggedIn: true,
  id: userId,
  subscribed: sub?.status === "active",
  isTestUser: user ? isTestEmail(user.email) : false,
  needsConsent,
  consent: consent
    ? { analytics: consent.analytics, marketing: consent.marketing }
    : null,
});
```

- [ ] **Step 2: Verify**

```bash
curl -s -H "Cookie: uid=<TEST_UID>" http://localhost:3000/api/me | python3 -m json.tool
```

Expected: response contains `"id": "<TEST_UID>"`.

- [ ] **Step 3: Commit**

```bash
git add app/api/me/route.ts
git commit -m "feat(api/me): include user id in response for client-side scoping"
```

---

## Task 12: Refactor `app/tools/page.tsx` — remove PIN, wire to client lib

**Files:**
- Modify: `app/tools/page.tsx`

This task is large but mechanical. Do it in one commit; verification is in Task 13.

- [ ] **Step 1: Read the current file**

Open `app/tools/page.tsx` in your editor. The Networth tracker code is roughly lines 310–1357. Note these landmarks before editing:

- `NwtEntry` interface declaration (line ~20). **Delete** — re-export from `lib/networth/types` instead.
- State block beginning at `const [nwtUser, ...]` (line ~311). **Delete** the `nwtUser` and related PIN state. Replace with a `userId` state populated from `/api/me`.
- `nwtKey`, `nwtLoad`, `nwtPersist` helpers (line ~329). **Delete.**
- `handleNwtLogin` function (line ~337). **Delete.**
- The PIN UI block — JSX from line ~1158 to ~1170 (`!nwtUser ? (...) : (...)`). **Delete** the `!nwtUser` branch entirely. Render the data-entry UI unconditionally once `userId` is known and the tab lock is acquired.
- All call-sites of `nwtLoad` / `nwtPersist` / `nwtUser`. Replace per the patterns below.

- [ ] **Step 2: Add imports**

At the top of `app/tools/page.tsx`, add:

```tsx
import type { NwtEntry } from "@/app/lib/networth/types";
import {
  initTracker,
  saveEntry,
  refresh as refreshTracker,
  pendingCount,
  getCachedEntries,
} from "@/app/lib/networth/client";
import { acquireTabLock } from "@/app/lib/networth/tab-lock";
```

Remove the local `interface NwtEntry { ... }` declaration.

- [ ] **Step 3: Replace tracker state**

Inside the tracker component, replace the existing `nwtUser` / `nwtPin` / `nwtData` state block with:

```tsx
const [userId, setUserId] = useState<string | null>(null);
const [tabLockState, setTabLockState] = useState<"checking" | "owned" | "blocked">("checking");
const [nwtData, setNwtData] = useState<NwtEntry[]>([]);
const [bootstrapping, setBootstrapping] = useState(true);
const [serverReachable, setServerReachable] = useState(true);
const [saving, setSaving] = useState(false);
const [refreshing, setRefreshing] = useState(false);
const [pendingN, setPendingN] = useState(0);
const [errorMsg, setErrorMsg] = useState<string | null>(null);
const tabLockReleaseRef = useRef<() => void>(() => {});
```

- [ ] **Step 4: Add the mount-time effect**

Inside the same component, add:

```tsx
useEffect(() => {
  let cancelled = false;
  (async () => {
    // 1. Get current user id from /api/me (uid cookie is httpOnly)
    const meRes = await fetch("/api/me");
    if (!meRes.ok) {
      setErrorMsg("Please sign in.");
      setBootstrapping(false);
      return;
    }
    const me = (await meRes.json()) as { loggedIn: boolean; id?: string };
    if (!me.loggedIn || !me.id) {
      setErrorMsg("Please sign in.");
      setBootstrapping(false);
      return;
    }
    const id = me.id;
    if (cancelled) return;
    setUserId(id);

    // 2. Single-tab lock
    const lock = await acquireTabLock(id);
    if (cancelled) {
      lock.release();
      return;
    }
    if (!lock.acquired) {
      setTabLockState("blocked");
      setBootstrapping(false);
      return;
    }
    tabLockReleaseRef.current = lock.release;
    setTabLockState("owned");

    // 3. Bootstrap data
    const result = await initTracker(id);
    if (cancelled) return;
    setNwtData(result.entries);
    setServerReachable(result.serverReachable);
    setPendingN(pendingCount(id));
    setBootstrapping(false);
  })();

  return () => {
    cancelled = true;
    tabLockReleaseRef.current?.();
  };
}, []);
```

Note: this relies on Task 11b, which adds the `id` field to `/api/me`'s logged-in response.

- [ ] **Step 5: Replace the save handler**

Find the existing add-entry handler (it currently builds `entry` and calls `nwtPersist`). Replace it with:

```tsx
async function handleAddNwtEntry() {
  if (!userId || saving) return;
  setErrorMsg(null);
  setSaving(true);
  const assets = /* existing sum logic — unchanged */ 0;
  const liabs = /* existing sum logic — unchanged */ 0;
  const alloc = /* existing alloc map — unchanged */ {};
  const month = nwtMonth; // existing state
  const result = await saveEntry(userId, {
    month,
    assets: { /* keep existing breakdown object */ },
    liabs: { /* keep existing breakdown object */ },
    alloc,
  });
  setNwtData(result.entries);
  setPendingN(pendingCount(userId));
  if (!result.ok) {
    setErrorMsg(
      result.reason === "network"
        ? "Saved locally. We'll retry when you're back online."
        : "Server error. Saved locally and we'll retry on Refresh.",
    );
  }
  setSaving(false);
}
```

Preserve the original `assets`/`liabs` total-and-breakdown computation from the deleted handler. The two breakdown objects (`{ stocks, equityMF, debtMF, fd, ppfBondsNps, gold, sgb, property, savings, other }` for assets; `{ homeLoan, carLoan, personalLoan, creditCard }` for liabs) should be passed exactly as today — the new schema accepts any string→number map.

- [ ] **Step 6: Add the Refresh handler**

Add inside the same component:

```tsx
async function handleRefresh() {
  if (!userId || refreshing) return;
  setErrorMsg(null);
  setRefreshing(true);
  try {
    const fresh = await refreshTracker(userId);
    setNwtData(fresh);
    setPendingN(pendingCount(userId));
    setServerReachable(true);
  } catch (e) {
    setErrorMsg(
      e instanceof Error && e.message.startsWith("refresh-blocked")
        ? "Some entries couldn't be synced. We'll retry on next save."
        : "Refresh failed. Please try again.",
    );
  } finally {
    setRefreshing(false);
  }
}
```

- [ ] **Step 7: Replace the PIN UI with tab-lock / bootstrap / data UI**

Inside the tracker modal body, replace the entire `!nwtUser ? (...) : (...)` ternary with:

```tsx
{tabLockState === "blocked" ? (
  <div className="ft-tracker-blocked">
    <h3>Networth Tracker is open in another tab.</h3>
    <p>Switch to that tab to continue, or close it and click Retry here.</p>
    <button className="ft-calc-btn" onClick={() => window.location.reload()}>
      Retry
    </button>
  </div>
) : bootstrapping ? (
  <div className="ft-tracker-loading">Loading your data…</div>
) : errorMsg && !userId ? (
  <div className="ft-tracker-error">{errorMsg}</div>
) : (
  <>
    <div className="ft-tracker-toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
      <div>
        {pendingN > 0 && (
          <span className="ft-pending-badge" title="Entries not yet synced to server">
            {pendingN} unsynced
          </span>
        )}
        {!serverReachable && (
          <span className="ft-offline-badge" style={{ marginLeft: 8 }}>Offline — showing saved data</span>
        )}
      </div>
      <button
        className="ft-calc-btn"
        onClick={handleRefresh}
        disabled={refreshing}
        style={{ minWidth: 100 }}
      >
        {refreshing ? "Refreshing…" : "Refresh"}
      </button>
    </div>
    {errorMsg && <div className="ft-tracker-error" style={{ marginBottom: 8 }}>{errorMsg}</div>}
    {/* existing data-entry form + charts go here, unchanged */}
  </>
)}
```

- [ ] **Step 8: Delete dead code**

Delete (do not leave commented out):
- `nwtKey`, `nwtLoad`, `nwtPersist` helper functions.
- `handleNwtLogin` function.
- `nwtUser`, `nwtPin`, `nwtPinErr` (and any other PIN-related) state declarations.
- All references to `nwtUser` in conditionals — they should already be gone after Step 7.

- [ ] **Step 9: Lint**

Run:

```bash
npm run lint
```

Expected: no warnings or errors.

- [ ] **Step 10: Type-check**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 11: Commit**

```bash
git add app/tools/page.tsx
git commit -m "refactor(tools/tracker): remove PIN flow, wire to lib/networth/client"
```

---

## Task 13: Verify in browser

**Files:** none modified.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Log in as a test user**

Use the existing login flow (`/login` → OTP) to obtain a `uid` cookie. Open DevTools → Application → Cookies and confirm `uid` is set.

- [ ] **Step 3: Verify PIN UI is gone**

Run:

```bash
grep -nE "handleNwtLogin|nwtKey|nwtLoad|nwtPersist|nwtUser" app/tools/page.tsx
```

Expected: no matches.

- [ ] **Step 4: Verify tracker opens directly (no PIN screen)**

Open `/tools`, open the Networth Tracker. Expected: data-entry form appears immediately (no PIN prompt). DevTools Network panel shows a single `GET /api/networth` call (because cache is empty for this user).

- [ ] **Step 5: Verify a save round-trips**

Enter sample values, submit. DevTools shows `POST /api/networth` with status 200. Reload the page → entry is still there (loaded from cache). Confirm DB row:

```bash
psql "$DATABASE_URL" -c "SELECT user_id, jsonb_array_length(entries) FROM networth_data WHERE user_id = '<TEST_UID>'"
```

Expected: `jsonb_array_length` ≥ 1.

- [ ] **Step 6: Verify Refresh button works**

Click Refresh. Expected: button shows `Refreshing…` then returns to `Refresh`. Network panel shows `GET /api/networth`. No data lost.

- [ ] **Step 7: Verify offline save queues**

In DevTools → Network → set to Offline. Add an entry. Expected: badge shows `1 unsynced`. Toast/inline message says "Saved locally. We'll retry when you're back online." Restore network. Click Refresh. Expected: badge clears, `POST /api/networth/bulk` fires, then `GET`.

- [ ] **Step 8: Verify single-tab lock**

Open `/tools` in a second tab. Expected: second tab shows "Networth Tracker is open in another tab." with a Retry button. Close the first tab. Click Retry in the second tab. Expected: second tab now loads normally.

- [ ] **Step 9: Verify cache staleness auto-fetch**

In DevTools console:

```js
const me = await fetch('/api/me').then(r => r.json());
const k = `nwt_${me.id}`;
const c = JSON.parse(localStorage.getItem(k));
c.lastSyncedAt = new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString();
localStorage.setItem(k, JSON.stringify(c));
```

Reload. Expected: `GET /api/networth` is called automatically on mount (visible in Network panel).

- [ ] **Step 10: No commit**

This task is verification only. If any step fails, return to the relevant task and fix.

---

## Task 14: Extend logout to clear networth cache

**Files:**
- Modify: `app/components/Header.tsx`

- [ ] **Step 1: Import the cache cleaner**

At the top of `app/components/Header.tsx`, add:

```tsx
import { clearAllNetworthKeys } from "@/app/lib/networth/cache";
```

- [ ] **Step 2: Call it during logout**

Inside `handleLogout`, after the `await fetch("/api/logout", ...)` line:

```tsx
async function handleLogout() {
  await fetch("/api/logout", { method: "POST" });
  try { clearAllNetworthKeys(); } catch { /* localStorage unavailable */ }
  onLoggedOut?.();
  router.push("/");
  router.refresh();
}
```

- [ ] **Step 3: Verify**

In the browser: log in, open tracker, save an entry, confirm `nwt_<userId>` appears in DevTools → Application → Local Storage. Click logout. Confirm `nwt_*` keys are gone.

- [ ] **Step 4: Lint + type-check**

```bash
npm run lint && npx tsc --noEmit
```

Expected: clean.

- [ ] **Step 5: Commit**

```bash
git add app/components/Header.tsx
git commit -m "chore(logout): clear networth localStorage cache on sign-out"
```

---

## Task 15: Final acceptance pass

**Files:** none modified.

- [ ] **Step 1: Re-run the acceptance criteria from the spec**

Run each in turn:

```bash
grep -nE "handleNwtLogin|nwtKey|nwtLoad|nwtPersist|PIN" app/tools/page.tsx
# expected: no matches

curl -i http://localhost:3000/api/networth
# expected: 401

curl -i -H "Cookie: uid=<TEST_UID>" http://localhost:3000/api/networth
# expected: 200 with {"entries":[],...} for a fresh user

# Concurrent appends — run twice quickly with distinct ids:
ID1=$(uuidgen | tr A-Z a-z)
ID2=$(uuidgen | tr A-Z a-z)
( curl -s -X POST http://localhost:3000/api/networth -H "Cookie: uid=<TEST_UID>" -H "Content-Type: application/json" -d "{\"entry\":{\"id\":\"$ID1\",\"month\":\"2026-08\",\"createdAt\":\"2026-08-01T00:00:00Z\",\"assets\":{},\"liabs\":{},\"alloc\":{}}}" & \
  curl -s -X POST http://localhost:3000/api/networth -H "Cookie: uid=<TEST_UID>" -H "Content-Type: application/json" -d "{\"entry\":{\"id\":\"$ID2\",\"month\":\"2026-08\",\"createdAt\":\"2026-08-01T00:00:00Z\",\"assets\":{},\"liabs\":{},\"alloc\":{}}}" )
wait
curl -s -H "Cookie: uid=<TEST_UID>" http://localhost:3000/api/networth | python3 -c 'import sys,json; e=json.load(sys.stdin)["entries"]; print([x["id"] for x in e])'
# expected: list includes both $ID1 and $ID2
```

- [ ] **Step 2: Final lint + type-check**

```bash
npm run lint && npx tsc --noEmit
```

Expected: clean.

- [ ] **Step 3: No commit**

If everything passes, the branch is ready for review and merge.
