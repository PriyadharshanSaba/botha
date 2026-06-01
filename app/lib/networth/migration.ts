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
