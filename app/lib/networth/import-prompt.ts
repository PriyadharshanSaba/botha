/**
 * Prompt template a user pastes into a third-party GPT along with their CSV.
 * The GPT then returns a JSON envelope our /api/networth/import endpoint accepts.
 *
 * VERSIONING: when the contract changes, ship IMPORT_PROMPT_V2 alongside V1 and
 * extend server-side schemaVersion handling. Never silently mutate V1.
 */

export const IMPORT_SCHEMA_VERSION = 1 as const;

export const IMPORT_PROMPT_V1 = `You are a strict data transformer. The user will paste a CSV or similar tabular financial history of their net worth.

Your job: convert it into ONE JSON object matching the schema below. Output nothing else — no prose, no markdown fences, no commentary, no greeting.

SCHEMA (exact shape):
{
  "schemaVersion": 1,
  "entries": [
    {
      "month": "YYYY-MM",
      "assets": { "<key>": <number>, ... },
      "liabs":  { "<key>": <number>, ... },
      "alloc":  { "equity": <number>, "mutualFunds": <number>, "debt": <number>, "gold": <number>, "realestate": <number>, "cash": <number> }
    }
  ],
  "errors": [
    { "row": <number_or_label>, "reason": "<short string>" }
  ]
}

NUMBER PARSING RULES
- Strip currency symbols: ₹, Rs, INR, \$, €, £.
- Strip commas, including Indian numbering ("1,86,973.30" → 186973.30).
- Parentheses mean negative: "(1,234)" → -1234. A leading minus is also negative.
- Blank cells, "-", "N/A", "NA" → 0.
- Reject values with absolute magnitude > 1e10 — emit an errors[] row, do not include the entry.
- Never output NaN or Infinity. If you cannot get a finite number, push to errors[].

MONTH NORMALIZATION (target: "YYYY-MM")
- "Dec-23", "Dec 2023", "December 2023", "12/2023", "2023-12" → "2023-12".
- Two-digit years assume 20YY for YY ≤ 79, 19YY otherwise.
- Ambiguous formats like "01/02/24" (could be Jan-Feb or Feb-Jan) → push to errors[] with reason "ambiguous-date". Do NOT guess.

ASSET / LIABILITY CLASSIFICATION
Place each column under "assets" or "liabs". Use stable camelCase keys (the UI humanizes them — "bankCash" → "Bank & Cash") and keep the same key across months so the breakdown stays consistent.

ASSET KEYS — prefer these canonical labels when the column matches; fall back to a sensible camelCase name otherwise:
- bankCash → bank balances, cash reserve, lent receivables.
- stocks → direct equity / ETFs (Indian + foreign).
- mutualFunds → equity AND debt mutual funds (any pooled fund unit).
- epfPpfNps → EPF, PPF, NPS combined; split into "epf" / "ppf" / "nps" only if the CSV does.
- lic → LIC policies / endowment premiums paid.
- fd → fixed deposits.
- bonds → sovereign bonds, corporate bonds, RBI/treasury bills.
- gold → physical gold / jewellery.
- sgb → Sovereign Gold Bonds, digital gold, gold ETFs.
- property → real estate.
- crypto / wazirxRT → tradable tokens, recovery tokens.
- esopIlliquid → exercised ESOPs in private companies, illiquid private equity.
- loansGiven → money lent to others.

LIABILITY KEYS — use the exact label that describes the debt, do NOT lump everything into a single key:
- creditCard → outstanding card dues.
- homeLoan → mortgage outstanding.
- carLoan → vehicle loan outstanding.
- personalLoan → unsecured personal loan.
- educationLoan → student loan.
- loans → only when the CSV truly carries a single aggregate column and you cannot split it.

ALLOC BUCKETS (donut chart)
Compute the six required keys. Map every asset column to exactly one bucket:
- equity → direct stocks (Indian + foreign), ESOPs, vested RSUs, crypto.
- mutualFunds → equity mutual funds AND debt mutual funds (any pooled fund unit).
- debt → FDs, bonds, EPF, PPF, LIC, NPS, loans given to others.
- gold → physical gold, SGB, gold ETF.
- realestate → property holdings.
- cash → bank balances, cash reserve, savings.
Liabilities are NEVER part of alloc.

ALLOC INVARIANT: for each entry, sum of all six alloc values MUST equal the sum of all values in "assets" for that month (every rupee of an asset lands in exactly one bucket). If a row doesn't add up, recheck your bucket mapping before emitting it.

HARD RULES
- Do NOT include "id" or "createdAt" anywhere. The server will assign these.
- Do NOT exceed 500 entries. If the CSV has more, take the most recent 500 and add an errors[] row noting the truncation.
- All six alloc keys must be present in every entry, even if some are 0.
- If you cannot parse a row with confidence, append { "row": <line_number_or_label>, "reason": "<short>" } to "errors" and skip the row — never guess.
- If the CSV is empty or unrecognizable, output: { "schemaVersion": 1, "entries": [], "errors": [{"row":0,"reason":"unrecognizable-input"}] }

Output the JSON object now, nothing else.`;
