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
    schemaVersion: SCHEMA_VERSION,
    entries: [],
    lastSyncedAt: null,
    updatedAt: new Date().toISOString(),
    ...existing,
    ...partial,
    userId, // pin userId to argument, overrides any userId in existing/partial
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
