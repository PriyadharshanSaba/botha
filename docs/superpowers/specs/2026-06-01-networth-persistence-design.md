# Networth Tracker — Server Persistence & Cache-First Sync

**Date:** 2026-06-01
**Status:** Design approved, ready for implementation plan
**Scope:** Replace in-tool PIN auth + localStorage-only storage with cookie-auth + Postgres persistence, fronted by a cache-first client with manual refresh.

---

## 1. Goals

- Remove the PIN-based sign-in flow inside the Networth Tracker tool (the user is already authenticated to the main app via the `uid` cookie).
- Persist Networth Tracker data to Postgres so users see their history when they return on any device.
- Keep the client cache-first: do not auto-call the database on every mount. Let the user pull fresh data via an explicit Refresh action, with two narrowly defined auto-fetch triggers.
- Make the data model schema-flexible so new asset/liability types can be added later without DB migrations.
- Make saves durable: a successful entry submission means the row exists on the server *and* in the local cache.

## 2. Non-Goals

- Encryption beyond TLS-in-transit + Postgres at-rest (matches the bar set by billing/invoices in this app).
- Offline-first mode beyond a queue for failed POSTs.
- Server-side aggregates, alerts, or analytics over networth values.
- Multi-user shared trackers, exports, or transaction-level history.
- Editing or deleting past entries (append-only model; corrections = new entry for the same month).

## 3. Data Model

### 3.1 New Postgres table

One row per user. Entries live as a JSONB array inside that row. This trades indexable per-entry queries (which we don't need — we always fetch the full set per user) for schema flexibility and a single-row read.

```ts
// app/lib/db/schema.ts
export const networthData = pgTable("networth_data", {
  userId: text("user_id").primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  entries: jsonb("entries").$type<NwtEntry[]>().notNull()
    .default(sql`'[]'::jsonb`),
  schemaVersion: integer("schema_version").notNull().default(1),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### 3.2 Entry shape (JSON, stored inside `entries`)

```ts
type NwtEntry = {
  id: string;          // client-generated uuid v4, also dedup key on bulk POST
  month: string;       // "YYYY-MM"
  createdAt: string;   // ISO timestamp, client-set
  assets: Record<string, number>;  // asset-key → INR rupees
  liabs:  Record<string, number>;  // liability-key → INR rupees
  alloc:  Record<string, number>;  // category-key → percentage
};
```

Append-only: corrections to a month are added as new entries with the same `month` value. Charts pick the latest entry per month by `createdAt`. Asset/liability keys are free-form strings — adding a new asset type means the client writes the new key; older entries simply lack it (treated as 0 by the renderer).

### 3.3 Why JSON, not normalized rows

- Per-user data is tiny: 60 entries × ~250 bytes ≈ 15 KB. Ten years of monthly entries ≈ 30 KB. Far below jsonb practical limits.
- We never query individual entries server-side — always full-set fetch per user.
- New asset/liability fields land without a DB migration.
- Atomic append via `jsonb_concat` removes the need for app-level read-modify-write.

## 4. API

All routes read `req.cookies.get("uid")`. Missing cookie → `401`. No PIN; no in-tool sign-in.

### 4.1 `GET /api/networth`

Response:
```json
{ "entries": NwtEntry[], "schemaVersion": 1, "updatedAt": "ISO" }
```
Empty row (or no row) → `{ "entries": [], "schemaVersion": 1, "updatedAt": null }`.

### 4.2 `POST /api/networth`

Body: `{ "entry": NwtEntry }`. Atomic append:

```sql
INSERT INTO networth_data (user_id, entries)
VALUES ($uid, jsonb_build_array($entry))
ON CONFLICT (user_id) DO UPDATE
SET entries    = networth_data.entries || EXCLUDED.entries,
    updated_at = now();
```

Response: `{ "entry": NwtEntry, "updatedAt": "ISO" }`.

Two simultaneous POSTs from two devices both land — append-only model resolves multi-device writes without conflict logic.

### 4.3 `POST /api/networth/bulk`

Body: `{ "entries": NwtEntry[] }`. Used for:
- One-shot migration from legacy PIN-era localStorage.
- Flushing the client pending queue before a manual Refresh.

Server dedupes by `entry.id` against existing array (skip on conflict). Response:
```json
{ "accepted": ["id1", ...], "rejected": [{ "id": "...", "reason": "..." }] }
```
Idempotent: re-posting the same `entry.id` is a no-op.

### 4.4 Server-side validation (all POST routes)

- `entry.id` matches uuid v4 regex.
- `entry.month` matches `/^\d{4}-\d{2}$/`.
- `entry.createdAt` parses as a valid ISO date.
- `entry.assets`, `entry.liabs`, `entry.alloc` are plain objects mapping `string → finite number` (reject `NaN`, `Infinity`, negative beyond business rules).
- Reject if post-append `entries.length > 1000` (sanity cap).

## 5. Client Architecture

### 5.1 localStorage shape (per user)

```ts
// key: nwt_<userId>
type NwtCache = {
  userId: string;
  schemaVersion: number;
  entries: NwtEntry[];
  lastSyncedAt: string | null;  // ISO; null = never synced from server
  updatedAt: string;            // last local mutation
};

// key: nwt_pending_<userId>
type NwtPending = { entries: NwtEntry[]; };
```

Keys are scoped by `userId`, not username. Old PIN-era key (`nwt_<username>`) is treated as legacy and migrated once.

### 5.2 Mount flow

```
resolve userId via /api/me
read cache(userId)
  ├─ legacy key (nwt_<username>) exists for this user
  │     → run migration (see 5.5), then proceed
  ├─ cache missing OR lastSyncedAt is null OR lastSyncedAt > 15 days old
  │     → GET /api/networth
  │     → write to cache, set lastSyncedAt = now
  │     → on failure: render empty (or legacy data if just migrated), toast "couldn't reach server"
  └─ else
        → render from cache
```

### 5.3 Save flow (user adds an entry)

```
1. Build entry: id = uuid(), createdAt = now()
2. Disable form, show spinner
3. POST /api/networth { entry }
4a. 200 → push to cache.entries, update cache.updatedAt,
         then flush pending queue if non-empty
4b. fail (network/5xx) → push to pending queue, push to cache anyway,
                         show inline "1 unsynced entry — will retry on next save or refresh"
5. Re-enable form
```

Saves are synchronous from the user's perspective: the spinner persists until POST resolves. A successful save guarantees the entry is on the server.

### 5.4 Refresh button flow

```
disabled + loader while:
  1. If pending queue non-empty:
       POST /api/networth/bulk { entries: pending }
       → on success: clear pending
       → on fail: keep pending, abort refresh, surface error, re-enable button
  2. GET /api/networth
  3. Replace cache.entries with server response, set lastSyncedAt = now
```

Refresh = "make this device match the server" (after first flushing local pending so nothing is lost). Disabling during flush prevents race against in-flight POSTs.

### 5.5 Legacy migration

Runs once per device, on mount, *before* the standard mount flow:

```
detect any localStorage key matching nwt_<username> (legacy format)
  → POST /api/networth/bulk { entries: legacy }
  → on success: delete legacy key
  → on fail: retain legacy key, retry on next mount (silent for first 3 attempts;
             on 4th, surface error)
```

After successful migration, the standard mount flow runs and pulls the canonical state from the server.

### 5.6 Single-tab lock

Open in one tab at a time per user. Uses `BroadcastChannel`:

```
on mount:
  channel = new BroadcastChannel(`nwt_lock_${userId}`)
  channel.postMessage({ type: 'claim?' })
  wait 500 ms for { type: 'owned' } response
    ├─ received → render "already open" screen
    └─ timeout → claim ownership; listen for future 'claim?' and reply 'owned'

on unmount / pagehide:
  channel.close()  → next tab can claim
```

"Already open" screen copy:
> **Networth Tracker is open in another tab.**
> Switch to that tab to continue, or close it and click Retry here.
> `[Retry]`

Retry re-runs the claim handshake. No heartbeat needed — `BroadcastChannel` closes cleanly on tab close/navigate.

**Fallback for browsers without `BroadcastChannel`:** lease via `localStorage` key `nwt_tab_<userId>` storing `{ ownedAt: ISO }`, refreshed every 2 s; a tab whose lease is older than 5 s is considered dead.

### 5.7 Logout

Existing logout flow is extended (or wrapped) to also clear:
- `nwt_<userId>`
- `nwt_pending_<userId>`
- legacy `nwt_<username>` key (defensive)

### 5.8 Empty-state UX

- Cache empty AND server returns `entries: []` → show the existing data-entry form, no banner.
- Cache empty, auto-fetch in progress → skeleton/loader (no flash of empty form).
- Auto-fetch failed AND cache empty → empty form + retry toast.

## 6. Error Handling

| Scenario | Behavior |
|---|---|
| `GET` 401 (cookie expired/missing) | Redirect to main app login. Cache untouched. |
| `GET` 5xx / network fail on auto-fetch | Render cache (stale OK). Toast: *"Couldn't reach server. Showing saved data."* |
| `GET` 5xx on manual Refresh | Toast: *"Refresh failed. Try again."* Cache untouched. Pending queue untouched. |
| `POST` 401 | Redirect to login. Entry stays in pending. |
| `POST` 5xx / network fail | Push to pending queue. Cache still updated locally. Inline badge: *"1 unsynced entry — will retry on next save or refresh."* |
| `POST /bulk` partial fail | Keep rejected entries in pending. Show count in badge. |
| Migration `POST /bulk` fail | Legacy key retained. Silent retry on next mount, up to 3 attempts; surface error after that. |
| BroadcastChannel unsupported | Fall back to localStorage lease (5.6). |
| Cache JSON parse error | Wipe cache, treat as empty → triggers auto-fetch path. Log to console. |
| Server entry shape includes unknown asset keys (future schema) | Tolerate via `Record<string, number>` typing; renderer ignores or buckets as "Other". |
| Tampered local cache values | Display-only. Doesn't propagate unless user re-saves. Acceptable. |

## 7. File Layout

```
app/
├── api/networth/
│   ├── route.ts              # GET, POST
│   └── bulk/route.ts         # POST (migration + flush)
├── lib/networth/
│   ├── types.ts              # NwtEntry, NwtCache, NwtPending, SCHEMA_VERSION
│   ├── cache.ts              # localStorage read/write/clear, scoped by userId
│   ├── client.ts             # mount/save/refresh flows + fetch wrappers
│   ├── migration.ts          # legacy key → POST /bulk → cleanup
│   ├── tab-lock.ts           # BroadcastChannel + localStorage fallback
│   └── server.ts             # db helpers: getEntries, appendEntry, bulkAppend
├── lib/db/
│   └── schema.ts             # + networthData table
└── tools/page.tsx            # remove PIN flow; wire to lib/networth/client.ts
```

### 7.1 Refactor of `app/tools/page.tsx`

- **Delete:** `handleNwtLogin` (~lines 337–355), the PIN UI block (~lines 1158–1170), and `nwtKey` / `nwtLoad` / `nwtPersist` helpers (~lines 329–335). `nwtUser` state is replaced by `userId` derived from `/api/me`.
- **Replace:** all `nwtLoad` / `nwtPersist` call-sites with `lib/networth/client.ts` exports (`loadFromCache`, `saveEntry`, `refresh`).
- **Add:** Refresh button next to the chart toolbar; tab-lock guard rendered at the top of the tracker modal body; pending badge near the entry form.

## 8. Testing

| Layer | Tests |
|---|---|
| Server `GET /api/networth` | 401 no cookie; no row → `{entries:[]}`; populated row returns array; cross-user isolation. |
| Server `POST /api/networth` | Atomic append under concurrency (two POSTs → both persist); validation rejects bad `month`/`id`/non-finite numbers; 1000-cap enforced; 401 no cookie. |
| Server `POST /api/networth/bulk` | Partial accept/reject; idempotent on duplicate `entry.id`; per-entry validation. |
| `cache.ts` | Roundtrip read/write/clear; corrupt JSON → wipe + empty; key scoping by userId. |
| `migration.ts` | Legacy key detected, posted, deleted on success; retained on fail; runs once on success. |
| `tab-lock.ts` | First tab claims; second sees "already open"; first closes → second can claim on Retry; localStorage fallback path. |
| `client.ts` flows | Auto-fetch triggers (empty / >15d stale); cache-render when fresh; save success → cache + server; save fail → pending; refresh flushes pending before GET; refresh disabled during flush. |
| E2E (Playwright, optional) | Login → enter entry → reload → see entry → Refresh → spinner → entry preserved. |

## 9. Rollout

1. **PR 1 (DB):** add `networth_data` table + indexes via Drizzle migration. Empty in prod.
2. **PR 2 (API):** add `GET /api/networth`, `POST /api/networth`, `POST /api/networth/bulk`. No client wiring yet; endpoints are harmless until used.
3. **PR 3 (Client):**
   - Remove PIN UI and handlers from `app/tools/page.tsx`.
   - Add `lib/networth/*` modules.
   - Wire mount/save/refresh flows + Refresh button + tab-lock UI + pending badge.
   - Hook legacy migration into mount.
4. Manual QA on staging using a real test user before prod.
5. Post-deploy monitoring: `/api/networth` 5xx rate, occurrences of the unsynced badge (if existing analytics covers it), row growth in `networth_data`.

**Rollback:** revert PR 3. Server routes + DB table can remain (no data loss). Old PIN flow recoverable from git history if a fallback is ever required.

## 10. Acceptance Criteria (Runnable)

- `grep -nE "handleNwtLogin|nwtKey|nwtLoad|nwtPersist|PIN" app/tools/page.tsx` → no matches.
- `curl -i http://localhost:3000/api/networth` (no cookie) → `401`.
- `curl ... -H "Cookie: uid=<test>"` → `200` with `{"entries":[],...}` for a fresh test user.
- POST an entry via curl → row created → subsequent GET returns it.
- Fire two concurrent `curl` POSTs with distinct `entry.id` → DB row's `entries` array length increases by 2.
- Re-POST a previously-accepted `entry.id` via `/bulk` → `accepted` empty, `rejected` lists it as duplicate; array length unchanged.
- Open the tracker in tab A, then in tab B → tab B shows "already open" screen; close A → click Retry in B → B claims.
- DevTools: clear localStorage → reload → empty form (auto-fetch path); enter entry → `nwt_<userId>` populated, DB row inserted.
- Set `lastSyncedAt` in cache to 16 days ago → reload → Network panel shows `GET /api/networth`.
- Throttle network to offline; save an entry → entry appears in chart + badge shows "1 unsynced"; restore network; click Refresh → badge clears, pending queue is empty, DB row reflects the entry.
