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
