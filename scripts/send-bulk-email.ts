/**
 * Send an HTML email to a CSV list of recipients via Amazon SES.
 *
 * Paces sends at 1/sec and stops at 200 sends per rolling 24h window,
 * tracked across runs in scripts/.send-log.json (gitignored).
 *
 * Required in .env.local:
 *   AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, SES_FROM_EMAIL
 *
 * CSV: one column of email addresses. A header row is optional — if the
 * first row's first column reads "email" (case-insensitive) it's skipped.
 *
 * Usage:
 *   npm run send-email -- --csv=recipients.csv --subject="Subject" --html=./email.html
 *   npm run send-email -- --csv=recipients.csv --subject="Subject" --html=./email.html --dry-run
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { readFileSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const CAP_PER_WINDOW = 200;
const WINDOW_MS = 24 * 60 * 60 * 1000;
const RATE_MS = 1000;
const LOG_PATH = join(__dirname, ".send-log.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Args = {
  csv: string;
  subject: string;
  html: string;
  dryRun: boolean;
};

function parseArgs(): Args {
  const out: Record<string, string> = {};
  const flags = new Set<string>();
  for (const a of process.argv.slice(2)) {
    const kv = a.match(/^--([^=]+)=(.*)$/);
    if (kv) { out[kv[1]] = kv[2]; continue; }
    const flag = a.match(/^--([^=]+)$/);
    if (flag) flags.add(flag[1]);
  }
  if (!out.csv) throw new Error("Missing required --csv=<path>");
  if (!out.subject) throw new Error("Missing required --subject=<string>");
  if (!out.html) throw new Error("Missing required --html=<path>");
  return { csv: out.csv, subject: out.subject, html: out.html, dryRun: flags.has("dry-run") };
}

function parseCsvEmails(path: string): string[] {
  const lines = readFileSync(path, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const firstCell = lines[0]?.split(",")[0]?.trim().replace(/^"|"$/g, "");
  const startRow = firstCell?.toLowerCase() === "email" ? 1 : 0;

  const seen = new Set<string>();
  const emails: string[] = [];
  for (let i = startRow; i < lines.length; i++) {
    const email = lines[i].split(",")[0].trim().replace(/^"|"$/g, "").toLowerCase();
    if (!email || !EMAIL_RE.test(email) || seen.has(email)) continue;
    seen.add(email);
    emails.push(email);
  }
  return emails;
}

type LogEntry = { email: string; sentAt: string };

function readLog(): LogEntry[] {
  if (!existsSync(LOG_PATH)) return [];
  return JSON.parse(readFileSync(LOG_PATH, "utf8"));
}

function countRecentSends(): number {
  const cutoff = Date.now() - WINDOW_MS;
  return readLog().filter((e) => new Date(e.sentAt).getTime() > cutoff).length;
}

function appendLogEntry(email: string) {
  const cutoff = Date.now() - WINDOW_MS;
  const entries = readLog().filter((e) => new Date(e.sentAt).getTime() > cutoff);
  entries.push({ email, sentAt: new Date().toISOString() });
  writeFileSync(LOG_PATH, JSON.stringify(entries, null, 2));
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const args = parseArgs();

  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, SES_FROM_EMAIL } = process.env;
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION || !SES_FROM_EMAIL) {
    throw new Error(
      "Missing SES config — set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, SES_FROM_EMAIL in .env.local"
    );
  }

  const html = readFileSync(args.html, "utf8");
  const emails = parseCsvEmails(args.csv);
  if (emails.length === 0) throw new Error(`No valid email addresses found in ${args.csv}`);

  const alreadySent = countRecentSends();
  const remaining = CAP_PER_WINDOW - alreadySent;
  console.log(
    `Found ${emails.length} recipient(s). ${alreadySent} sent in trailing 24h, ${remaining} of ${CAP_PER_WINDOW} remaining.`
  );

  if (remaining <= 0) {
    console.log("✗ 24h cap already reached. Try again later.");
    process.exit(1);
  }

  const toSend = emails.slice(0, remaining);
  const skipped = emails.slice(remaining);
  if (skipped.length > 0) {
    console.log(`⚠ Capping this run to ${toSend.length} email(s); ${skipped.length} left over for a later run (24h cap).`);
  }

  const client = args.dryRun
    ? null
    : new SESClient({
        region: AWS_REGION,
        credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY },
      });

  let sent = 0;
  let failed = 0;
  for (let i = 0; i < toSend.length; i++) {
    const email = toSend[i];
    if (args.dryRun) {
      console.log(`[dry-run] would send to ${email}`);
      sent++;
    } else {
      try {
        await client!.send(
          new SendEmailCommand({
            Source: SES_FROM_EMAIL,
            Destination: { ToAddresses: [email] },
            Message: {
              Subject: { Data: args.subject, Charset: "UTF-8" },
              Body: { Html: { Data: html, Charset: "UTF-8" } },
            },
          })
        );
        appendLogEntry(email);
        sent++;
        console.log(`✓ sent to ${email}`);
      } catch (err) {
        failed++;
        console.error(`✗ failed for ${email}:`, err instanceof Error ? err.message : err);
      }
    }
    if (i < toSend.length - 1) await sleep(RATE_MS);
  }

  console.log(`\nDone. sent=${sent} failed=${failed} skipped=${skipped.length}`);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.message : e);
  process.exit(1);
});
