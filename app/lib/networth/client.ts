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
