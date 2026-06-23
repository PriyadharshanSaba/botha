import "server-only";
import { MONTH_RE } from "./types";

/** Allowed alloc bucket keys per spec. */
const ALLOC_KEYS = ["equity", "mutualFunds", "debt", "gold", "realestate", "cash"] as const;

const MAX_NUMERIC_MAGNITUDE = 1e10;
const MAX_ENTRIES_PER_IMPORT = 500;

export type RawImportEntry = {
  month: string;
  assets: Record<string, number>;
  liabs: Record<string, number>;
  alloc: Record<string, number>;
};

export type ImportEnvelope = {
  schemaVersion: 1;
  entries: RawImportEntry[];
  errors?: { row: number | string; reason: string }[];
};

export type ImportRejection = {
  row: number;
  month: string | null;
  reason:
    | "duplicate-month"
    | "invalid-month"
    | "invalid-shape"
    | "numeric-out-of-range"
    | "missing-assets"
    | "missing-liabs"
    | "invalid-alloc"
    | "max-entries-exceeded"
    | "gpt-reported";
  detail?: string;
};

export type ImportAccepted = {
  row: number;
  month: string;
  assets: Record<string, number>;
  liabs: Record<string, number>;
  alloc: Record<string, number>;
  assetTotal: number;
  liabTotal: number;
  nw: number;
};

export type ImportReport = {
  accepted: ImportAccepted[];
  rejected: ImportRejection[];
};

/** Strip ```json fences, leading/trailing prose, and surrounding whitespace. */
export function stripFences(raw: string): string {
  let s = raw.trim();
  // Remove leading ```json or ``` then optional newline
  s = s.replace(/^```(?:json|JSON)?\s*\r?\n?/, "");
  // Remove trailing ``` plus optional whitespace
  s = s.replace(/\r?\n?```\s*$/, "");
  return s.trim();
}

/** Parse the user's pasted blob into a typed envelope or throw. */
export function parseEnvelope(raw: string): ImportEnvelope {
  const stripped = stripFences(raw);
  let parsed: unknown;
  try {
    parsed = JSON.parse(stripped);
  } catch {
    throw new Error("invalid-json");
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("invalid-envelope");
  }
  const env = parsed as Record<string, unknown>;
  if (env.schemaVersion !== 1) throw new Error("invalid-envelope");
  if (!Array.isArray(env.entries)) throw new Error("invalid-envelope");
  if (env.entries.length > MAX_ENTRIES_PER_IMPORT) throw new Error("invalid-envelope");
  // errors[] is optional and forwarded as-is
  return {
    schemaVersion: 1,
    entries: env.entries as RawImportEntry[],
    errors: Array.isArray(env.errors) ? (env.errors as { row: number | string; reason: string }[]) : undefined,
  };
}

function isFiniteRecord(x: unknown, allowEmpty: boolean): { ok: true; rec: Record<string, number> } | { ok: false; reason: "shape" | "magnitude" | "empty" } {
  if (!x || typeof x !== "object" || Array.isArray(x)) return { ok: false, reason: "shape" };
  const rec = x as Record<string, unknown>;
  const keys = Object.keys(rec);
  if (!allowEmpty && keys.length === 0) return { ok: false, reason: "empty" };
  const out: Record<string, number> = {};
  for (const k of keys) {
    const v = rec[k];
    if (typeof v !== "number" || !Number.isFinite(v)) return { ok: false, reason: "shape" };
    if (Math.abs(v) > MAX_NUMERIC_MAGNITUDE) return { ok: false, reason: "magnitude" };
    out[k] = v;
  }
  return { ok: true, rec: out };
}

/** Validate a single raw import entry. Server has not yet minted id/createdAt. */
export function validateImportEntry(raw: unknown, row: number): { ok: true; entry: ImportAccepted } | { ok: false; rejection: ImportRejection } {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, rejection: { row, month: null, reason: "invalid-shape" } };
  }
  const e = raw as Record<string, unknown>;
  const month = typeof e.month === "string" ? e.month : null;
  if (!month || !MONTH_RE.test(month)) {
    return { ok: false, rejection: { row, month, reason: "invalid-month" } };
  }
  const assets = isFiniteRecord(e.assets, false);
  if (!assets.ok) {
    return {
      ok: false,
      rejection: {
        row,
        month,
        reason: assets.reason === "magnitude" ? "numeric-out-of-range" : "missing-assets",
      },
    };
  }
  const liabs = isFiniteRecord(e.liabs, true);
  if (!liabs.ok) {
    return {
      ok: false,
      rejection: {
        row,
        month,
        reason: liabs.reason === "magnitude" ? "numeric-out-of-range" : "missing-liabs",
      },
    };
  }
  const alloc = isFiniteRecord(e.alloc, true);
  if (!alloc.ok) {
    return {
      ok: false,
      rejection: {
        row,
        month,
        reason: alloc.reason === "magnitude" ? "numeric-out-of-range" : "invalid-alloc",
      },
    };
  }
  // alloc may carry only the 5 allowed keys; drop unknowns silently (GPT may add extras)
  const allocFiltered: Record<string, number> = {};
  for (const k of ALLOC_KEYS) {
    allocFiltered[k] = alloc.rec[k] ?? 0;
  }
  const sum = (m: Record<string, number>) => Object.values(m).reduce((a, b) => a + b, 0);
  const assetTotal = sum(assets.rec);
  const liabTotal = sum(liabs.rec);
  return {
    ok: true,
    entry: {
      row,
      month,
      assets: assets.rec,
      liabs: liabs.rec,
      alloc: allocFiltered,
      assetTotal,
      liabTotal,
      nw: assetTotal - liabTotal,
    },
  };
}

/** Build an ImportReport given the envelope and the user's existing months. */
export function buildReport(envelope: ImportEnvelope, existingMonths: Set<string>): ImportReport {
  const accepted: ImportAccepted[] = [];
  const rejected: ImportRejection[] = [];

  // Forward GPT-reported errors as "gpt-reported"
  for (const ge of envelope.errors ?? []) {
    rejected.push({
      row: typeof ge.row === "number" ? ge.row : -1,
      month: null,
      reason: "gpt-reported",
      detail: typeof ge.reason === "string" ? ge.reason : undefined,
    });
  }

  // Track months claimed within this paste to also reject internal duplicates
  const pasteMonths = new Set<string>();

  envelope.entries.forEach((rawEntry, idx) => {
    const result = validateImportEntry(rawEntry, idx);
    if (!result.ok) {
      rejected.push(result.rejection);
      return;
    }
    const m = result.entry.month;
    if (existingMonths.has(m) || pasteMonths.has(m)) {
      rejected.push({ row: idx, month: m, reason: "duplicate-month" });
      return;
    }
    pasteMonths.add(m);
    accepted.push(result.entry);
  });

  return { accepted, rejected };
}

export const IMPORT_LIMITS = {
  MAX_BODY_BYTES: 256 * 1024,
  MAX_ENTRIES_PER_IMPORT,
  MAX_NUMERIC_MAGNITUDE,
} as const;
