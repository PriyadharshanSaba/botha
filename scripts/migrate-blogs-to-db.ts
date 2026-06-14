/**
 * One-shot migration CLI: render the 9 file-based blog components under
 * app/blogs/<slug>/ into static HTML, sanitize the output, and INSERT
 * each as a published row in the `blogs` table.
 *
 * Two ways to run this migration — pick whichever your network allows:
 *
 *   1. THIS CLI (preferred when you can reach the DB from your machine):
 *      npm run migrate-blogs                  # dry-run
 *      MIGRATION_AUTHOR_EMAIL=you@example.com \
 *        npm run migrate-blogs -- --apply
 *      npm run migrate-blogs -- --apply --slug=rupee-descent   # one only
 *
 *   2. ADMIN ENDPOINT (when DB is IP-restricted to Vercel):
 *      curl -X POST https://<app>/api/admin/blogs/migrate-folders \
 *        --cookie "uid=...; admin=1" \
 *        -H "content-type: application/json" \
 *        -d '{"apply": true}'
 *
 * Both paths share app/lib/blogs/folder-migration.ts — same FOLDER_POSTS
 * list, same render/sanitize/upsert pipeline. The CLI is useful for
 * local-DB dev work and dry-runs; the endpoint is used for production
 * migration when local network can't reach the prod DB.
 *
 * Known limitation: rupee-descent's CurrencyChart is a "use client"
 * component that draws via Chart.js in useEffect — it renders to an
 * empty <canvas> tag in renderToStaticMarkup. The migrated HTML will
 * have the chart frame but not the rendered chart. Acceptable for the
 * migration window; revisit if/when partner needs DB-side charts.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

// Stub .css imports — folder blog components do `import "*.css";` at top
// of file for runtime styling. This script needs to render them as plain
// React components; CSS is irrelevant in a Node CLI context. Also stub
// the `server-only` package, which gated.tsx imports — its main entry
// throws when not loaded under Next's react-server export condition.
import { createRequire } from "node:module";
const _require = createRequire(import.meta.url);
type ModuleAPI = {
  _extensions: Record<string, (m: { exports: unknown }, fn: string) => void>;
};
const Module = _require("node:module") as ModuleAPI;
Module._extensions[".css"] = (m) => { m.exports = {}; };

const serverOnlyPath = _require.resolve("server-only");
(_require.cache as Record<string, { id: string; filename: string; loaded: boolean; exports: unknown; paths: string[] }>)[serverOnlyPath] = {
  id: serverOnlyPath,
  filename: serverOnlyPath,
  loaded: true,
  exports: {},
  paths: [],
};

import { db } from "@/app/lib/db";
import { FOLDER_POSTS, migrateOne, type FolderLoader } from "@/app/lib/blogs/folder-migration";

// tsx supports dynamic-template imports — webpack constraint doesn't
// apply here. The endpoint variant uses a static switch instead.
const cliLoader: FolderLoader = async (slug) => {
  const p = await import(`@/app/blogs/${slug}/preview`);
  const g = await import(`@/app/blogs/${slug}/gated`);
  return { Preview: p.Preview, Gated: g.Gated };
};

type CliArgs = {
  apply: boolean;
  slug: string | null;
};

function parseArgs(): CliArgs {
  let apply = false;
  let slug: string | null = null;
  for (const a of process.argv.slice(2)) {
    if (a === "--apply") apply = true;
    const m = a.match(/^--slug=(.+)$/);
    if (m) slug = m[1];
  }
  return { apply, slug };
}

async function main() {
  const { apply, slug: only } = parseArgs();

  const authorEmail = process.env.MIGRATION_AUTHOR_EMAIL;
  let authorId = "dry-run-placeholder";

  if (apply) {
    if (!authorEmail) {
      console.error("MIGRATION_AUTHOR_EMAIL not set in .env.local — required for --apply");
      process.exit(1);
    }
    const author = await db.getUserByEmail(authorEmail);
    if (!author) {
      console.error(`Author user not found for email=${authorEmail}`);
      process.exit(1);
    }
    if (!author.verified) {
      console.error(`Author ${authorEmail} is not verified; cannot use as author_id`);
      process.exit(1);
    }
    authorId = author.id;
    console.log(`Author: ${author.email} (id=${author.id})`);
  } else {
    console.log("Author: (dry-run, skipped lookup)");
  }
  console.log(`Mode: ${apply ? "APPLY" : "DRY-RUN"}`);
  console.log(`Slugs: ${only ?? "all 9"}\n`);

  const targets = only ? FOLDER_POSTS.filter((p) => p.slug === only) : FOLDER_POSTS;
  if (targets.length === 0) {
    console.error(`No folder post matches --slug=${only}`);
    process.exit(1);
  }

  const results: Awaited<ReturnType<typeof migrateOne>>[] = [];
  for (const meta of targets) {
    const r = await migrateOne(meta, authorId, apply, cliLoader);
    results.push(r);
    console.log(`${r.ok ? "✓" : "✗"} ${r.slug.padEnd(30)} ${r.detail}`);
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} succeeded`);
  if (failed.length > 0) {
    console.error("Failures:");
    for (const f of failed) console.error(`  ${f.slug}: ${f.detail}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
