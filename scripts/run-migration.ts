/**
 * Apply a raw SQL migration file to DB_URL. Repo has no psql available in
 * some environments, so migrations run through the `pg` driver instead.
 *
 * Usage:
 *   npm run migrate -- app/lib/db/migrations/012_meetings.sql
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { readFileSync } from "fs";
import { Client } from "pg";

async function main() {
  const file = process.argv[2];
  if (!file) throw new Error("Usage: npm run migrate -- <path-to-migration.sql>");

  const sql = readFileSync(file, "utf8");
  const client = new Client({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: true },
  });
  await client.connect();
  try {
    await client.query(sql);
    console.log(`✓ Applied ${file}`);
  } finally {
    await client.end();
  }
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.message : e);
  process.exit(1);
});
