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
  const entryJson = JSON.stringify(entry);
  const result = await db.execute(sql`
    INSERT INTO networth_data (user_id, entries, schema_version, updated_at)
    VALUES (${userId}, jsonb_build_array(${entryJson}::jsonb), ${SCHEMA_VERSION}, now())
    ON CONFLICT (user_id) DO UPDATE
      SET entries    = networth_data.entries || EXCLUDED.entries,
          updated_at = now()
    RETURNING updated_at, jsonb_array_length(entries) AS len
  `);
  const row = result.rows[0] as { updated_at: Date; len: number };
  if (row.len > MAX_ENTRIES_PER_USER) {
    // Cap is soft: a concurrent append between RETURNING and this UPDATE can
    // re-cross the cap. Acceptable given the 1000-entry ceiling. The rollback
    // is best-effort and drops only THIS request's appended element.
    await db.execute(sql`
      UPDATE networth_data
      SET entries = entries - (jsonb_array_length(entries) - 1)
      WHERE user_id = ${userId}
    `);
    // Prefix contract: callers should check `e.message.startsWith("MAX_ENTRIES_EXCEEDED")`.
    throw new Error(`MAX_ENTRIES_EXCEEDED:${userId}:${row.len}`);
  }
  return { updatedAt: row.updated_at.toISOString() };
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
    // Prefix contract: callers should check `e.message.startsWith("MAX_ENTRIES_EXCEEDED")`.
    throw new Error(`MAX_ENTRIES_EXCEEDED:${userId}:${current.entries.length + accepted.length}`);
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
  const row = result.rows[0] as { updated_at: Date };
  return {
    accepted: accepted.map((e) => e.id),
    rejected,
    updatedAt: row.updated_at.toISOString(),
  };
}
