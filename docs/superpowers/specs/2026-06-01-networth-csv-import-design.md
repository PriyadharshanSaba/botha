# Networth Tracker — CSV-via-GPT Import Design

**Date:** 2026-06-01
**Status:** Approved — ready for implementation plan
**Owner:** PriyadharshanSaba

## Goal

Let users backfill historical net worth entries by pasting their CSV into any third-party GPT (ChatGPT / Claude / Gemini free tier) using a prompt we supply, then pasting the model's JSON output into our site. Avoids writing per-format CSV parsers on our side; users handle arbitrary spreadsheet shapes via the LLM.

## Non-goals

- Direct CSV file upload + server-side parse
- Recurring sync / re-import (one-shot only)
- LLM API call from our backend
- Editing existing entries through this flow
- Multi-currency normalization (assume INR consistent with rest of tracker)

## Architecture

Client guides the user through a 4-step modal. User does the LLM round-trip out-of-band, pastes envelope JSON back, server validates and either previews (dry-run) or appends. One-shot per account, enforced by a DB flag.

```
[Tracker modal "Import history"]
       │
       ▼
[Consent screen — RBI/GDPR text + checkbox]
       │
       ▼
[Step 1: copy IMPORT_PROMPT_V1]  (user goes to external GPT)
[Step 2: paste GPT output into textarea]
       │
       ▼
POST /api/networth/import?dryRun=true   → returns { accepted, rejected }
       │
       ▼
[Preview table — rows disabled if duplicate-month or invalid]
       │
       ▼
POST /api/networth/import?dryRun=false  → server mints id/createdAt, appends,
                                          sets import_used_at = now()
       │
       ▼
[Success — modal closes, tracker refreshes]
```

## Decisions (locked)

| Question | Decision |
|---|---|
| Overwrite existing data? | **No.** Duplicate-month rows blocked at validation. Shown disabled in preview with "Already saved" tag. Disclosed in consent. |
| Who decides `alloc` buckets? | **GPT.** Prompt gives mapping hints; user can uncheck individual rows in preview. |
| Output format | **Envelope** — `{ schemaVersion, entries, errors? }`. Lets GPT report parse failures inline. |
| Re-import allowed? | **No.** One successful import per user, enforced via `networth_data.import_used_at` flag. |
| Consent text | **Explicit RBI/GDPR-style** disclosure required. Heading: "We don't store your CSV". |
| Invalid JSON UX | Show exact message: "GPT response wasn't valid JSON. Try a different model or check the prompt." |

## Data model

### Schema change

`app/lib/db/migrations/006_networth_import_flag.sql`:

```sql
ALTER TABLE networth_data
  ADD COLUMN IF NOT EXISTS import_used_at TIMESTAMP NULL;
```

`app/lib/db/schema.ts` `networthData` table:
- add `importUsedAt: timestamp("import_used_at")` (nullable)

### Envelope schema (GPT output contract)

```ts
type ImportEnvelope = {
  schemaVersion: 1;
  entries: Array<{
    month: string;                       // YYYY-MM
    assets: Record<string, number>;      // arbitrary string → number
    liabs: Record<string, number>;
    alloc: {                              // donut buckets, GPT-chosen
      equity?: number;
      debt?: number;
      gold?: number;
      realestate?: number;
      cash?: number;
    };
  }>;
  errors?: Array<{ row: number | string; reason: string }>;
};
```

`id` and `createdAt` deliberately absent — server mints both. Any user-supplied values for those keys are dropped on the server.

## API: `POST /api/networth/import`

### Request

- Headers: `Content-Type: application/json`, `Cookie: uid=<user_id>`
- Query: `?dryRun=true` (preview) or `?dryRun=false` (commit)
- Body: `{ raw: string }` — exact textarea contents (allows ```json fences + trailing prose; server strips)
- Body size cap: 256 KB enforced at route level via explicit `Content-Length` check before parse

### Response (200)

```ts
type ImportReport = {
  accepted: Array<{
    month: string;
    nw: number;            // computed: sum(assets) - sum(liabs)
    assetTotal: number;
    liabTotal: number;
    alloc: Record<string, number>;
  }>;
  rejected: Array<{
    row: number;           // index in input entries[]
    month: string | null;
    reason: "duplicate-month" | "invalid-month" | "invalid-shape"
          | "numeric-out-of-range" | "missing-assets" | "missing-liabs"
          | "max-entries-exceeded" | "gpt-reported";
    detail?: string;
  }>;
  committed: boolean;      // true only when dryRun=false succeeded
};
```

### Error responses

| Status | Reason | Body |
|---|---|---|
| 401 | No `uid` cookie | `{ error: "unauthenticated" }` |
| 409 | `import_used_at IS NOT NULL` | `{ error: "import-already-used" }` |
| 413 | Body > 256 KB | `{ error: "payload-too-large" }` |
| 400 | JSON parse fail | `{ error: "invalid-json" }` |
| 400 | Envelope shape wrong | `{ error: "invalid-envelope" }` |
| 500 | DB error | `{ error: "server-error" }` |

### Server-side parse pipeline

1. **Reject if `import_used_at` is set** (only on `dryRun=false`; dry-run still allowed so user can preview without "burning" their slot — but preview alone consumes nothing).
   - **Refinement**: read `import_used_at` first; if set, reject both dry-run and commit with 409. Avoids wasted UX.
2. **Body size guard** — reject early.
3. **Strip code fences** — regex `^```(?:json)?\s*\n` and trailing ```` ``` ````. Trim whitespace. Best-effort recovery from LLM verbosity.
4. **JSON.parse** in try/catch → 400 `invalid-json` on fail.
5. **Envelope shape check** — `schemaVersion === 1`, `Array.isArray(entries)`, length ≤ 500. Else 400 `invalid-envelope`.
6. **Per-entry validation** (reuses + extends existing `validateEntry`):
   - `month` matches `/^\d{4}-\d{2}$/`
   - `assets` is non-empty `Record<string, number>` with finite values, all `|n| ≤ 1e10`
   - same for `liabs`
   - `alloc` is `Record<string, number>` with finite values; allowed keys = `equity|debt|gold|realestate|cash`; missing keys default to 0
   - drop any `id`/`createdAt` if present
7. **Duplicate-month check** — load existing months for userId in one query; mark colliding entries as rejected with `reason: "duplicate-month"`.
8. **Build report** — accepted/rejected arrays.
9. **If `dryRun=false`**:
   - For each accepted entry: mint `id = uuid()`, `createdAt = new Date().toISOString()`
   - Single SQL: `UPDATE networth_data SET entries = entries || $1::jsonb, import_used_at = now(), updated_at = now() WHERE user_id = $2 AND import_used_at IS NULL` — append + set flag atomically. The `WHERE import_used_at IS NULL` guard makes this idempotency-safe against double-clicks.
   - If `UPDATE` affected 0 rows but a row exists → flag was set in a race → return 409.
   - Set `committed: true`.

### Race conditions

- **Concurrent dry-run + commit** — dry-run is read-only; safe.
- **Double-click on Import** — atomic `UPDATE ... WHERE import_used_at IS NULL` ensures only one commit wins; second returns 409.
- **New manual entry mid-import** — append-only, no conflict at storage layer. UX-wise, preview "duplicate-month" set is computed at dry-run time and may go stale if user adds an entry between dry-run and commit. Acceptable: commit re-runs duplicate check.

## Client flow

### Entry point

In `app/tools/page.tsx`, add an "Import history" button inside the tracker modal toolbar (next to Refresh). Disabled if `bootstrapping`, if `import_used_at` already set (server signals via a new field on `GET /api/networth` response), or if a save is in flight.

`GET /api/networth` response gains `importUsedAt: string | null` so client can hide the button after a prior import.

### Import modal states

```
state =
  | "consent"        // disclosure + checkbox
  | "paste"          // copy prompt + paste textarea
  | "parsing"        // dry-run in flight
  | "preview"        // table with checkboxes
  | "committing"     // commit in flight
  | "done"           // success
  | "error"          // unrecoverable, with retry
```

### Consent screen content

Heading: **"We don't store your CSV"**

Body bullets:
- Your file never touches our servers. It only travels between your computer and the AI you choose.
- The AI provider (OpenAI / Anthropic / Google etc.) may retain your prompt per their policy — review before pasting.
- This import runs once per account and **does not overwrite** existing months. Months already in your tracker will be skipped.
- This action cannot be undone — review the preview carefully before confirming.

Single checkbox: "I have read and accept the above" — required to proceed.

### Paste screen content

- Button "Copy import prompt" → copies `IMPORT_PROMPT_V1` to clipboard
- Textarea: max length 256 KB enforced client-side. Placeholder: "Paste the AI's resposnse here…"
- Button "Parse" → POST `dryRun=true`. Disabled until textarea is non-empty.

### Preview screen

Table columns:

| ☐ | Month | Total Assets | Total Liabs | Net Worth | Alloc snapshot | Status |
|---|---|---|---|---|---|---|

- Checkbox column: checked by default for accepted rows; disabled (unchecked, greyed) for `duplicate-month` and validation failures
- Alloc snapshot: small horizontal stacked bar showing equity/debt/gold/realestate/cash proportion
- Status badge: ✅ Ready / ⚠ Already saved / ❌ Invalid (hover for reason)
- Bottom bar:
  - Left: "N of M entries will be imported"
  - Right: "Confirm import" button — disabled if N = 0 or commit in flight
- Cancel button returns to paste screen (preserves textarea)

### Done screen

- "Imported N entries"
- "Close" button → modal closes, tracker re-renders with new data (re-fetch via existing `refresh()` flow or merge from accepted set)

### Error screen

- Message text from server (`invalid-json` → exact spec'd copy; other errors → mapped to user-friendly variants)
- "Try again" → back to paste screen
- "Close" → exits modal

## `IMPORT_PROMPT_V1`

Stored as exported constant in `app/lib/networth/import-prompt.ts`. Versioned filename + `schemaVersion: 1` in the contract.

Prompt requirements (full text written during implementation):

- Persona: "You are a strict data transformer."
- Input contract: "The user will paste a CSV or similar tabular financial history."
- Output contract: "Output EXACTLY one JSON object matching this schema — no prose, no markdown fences, no commentary." Followed by the schema.
- Number parsing rules:
  - Strip currency symbols (₹, $, €, Rs, INR)
  - Strip commas including Indian-numbering ("1,86,973.30" → 186973.30)
  - Negative values: parens "(1,234)" → -1234; leading minus also valid
  - Treat blanks / "-" / "N/A" as 0
- Month normalization:
  - "Dec-23", "Dec 2023", "December 2023", "12/2023", "2023-12", "Q4 2023" → `2023-12`
  - Ambiguous (e.g. "01/02/24") → emit row in `errors[]` with reason, do not guess
- Bucket mapping hints for `alloc`:
  - equity: direct stocks (Indian + foreign), equity mutual funds, ESOPs, vested RSUs, crypto
  - debt: FDs, debt mutual funds, bonds, EPF, PPF, LIC, NPS, loans given to others
  - gold: physical gold, SGB, gold ETF
  - realestate: property holdings
  - cash: bank balances, cash reserve, savings accounts
  - Loans owed (home loan, car loan, credit card, personal loan) → `liabs`, NOT `alloc`
- Hard rule: "If you cannot determine the month or numeric value with confidence, do NOT guess — append `{ row, reason }` to `errors[]` and skip the row."
- Hard rule: "Do NOT include `id` or `createdAt` fields. The server assigns these."
- Final line: "Output the JSON object now, nothing else."

## File structure

| File | Action | Responsibility |
|---|---|---|
| `app/lib/db/migrations/006_networth_import_flag.sql` | Create | `import_used_at` column |
| `app/lib/db/schema.ts` | Modify | Add `importUsedAt` field to networthData |
| `app/lib/networth/import-prompt.ts` | Create | `IMPORT_PROMPT_V1` constant + version |
| `app/lib/networth/import.ts` | Create | Server parse/validate/dedup helpers |
| `app/api/networth/import/route.ts` | Create | POST endpoint |
| `app/api/networth/route.ts` | Modify | Add `importUsedAt` to GET response |
| `app/lib/networth/server.ts` | Modify | `getNetworth` returns `importUsedAt`; new `markImportUsed`, `getExistingMonths` helpers |
| `app/lib/networth/client.ts` | Modify | `parseImport`, `commitImport` orchestration |
| `app/tools/page.tsx` | Modify | Import button + modal sub-component (or split out) |
| `app/tools/import-modal.tsx` | Create (optional) | Modal component if `page.tsx` already too large |

Decision: split the import modal into its own file. `page.tsx` is already 1500+ lines; adding ~400 lines of modal logic would compound the problem.

## Testing approach

Manual flow for first implementation; defer automated tests to a follow-up.

Manual verification checklist (lives in plan):
- Consent screen blocks Parse until checkbox ticked
- Copy-prompt button writes to clipboard
- Paste of well-formed envelope → preview lists all entries as ready
- Paste of envelope with one already-saved month → that row shows duplicate badge, disabled
- Paste of envelope with bad numeric (NaN, > 1e10) → row marked invalid, reason visible
- Paste of raw GPT output with ```json fences → server strips, succeeds
- Paste of conversational GPT output (e.g. "Sure! Here's the data: {...}") → either succeeds after fence/prose strip OR returns invalid-json with exact spec'd copy
- Confirm import with all rows checked → all entries appear in tracker, `import_used_at` set in DB
- Reopen import modal → button hidden / disabled with "Import already used"
- Mid-flow refresh → state recovers from server (tab lock + `importUsedAt`)

Concurrency check via curl:
```bash
# Two parallel commits should result in exactly one 200 + one 409
( curl -X POST '...?dryRun=false' & curl -X POST '...?dryRun=false' & wait )
```

## Out of scope (future)

- Edit/delete via this flow
- Multi-currency
- Repeated imports
- Server-side LLM call (cost concern + PII boundary preserved)
- File upload UI
- CSV format auto-detection without LLM

## Open follow-ups (post-implementation)

- Telemetry: count imports / rejection reasons (anonymized) to tune prompt
- Prompt versioning strategy when schema evolves: ship `IMPORT_PROMPT_V2` alongside V1; server accepts both `schemaVersion: 1 | 2` for a transition window
- Localization of consent text + prompt (Kannada exists elsewhere in app)
