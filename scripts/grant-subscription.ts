/**
 * Grant a free subscription to a user, bypassing payment.
 *
 * Creates a ₹0 subscription + invoice and activates it — same code path
 * as a real Razorpay payment (db.createSubscription → createDraftInvoice
 * → issueInvoice → db.activateSubscription), so /api/me reports
 * subscribed=true immediately for this user.
 *
 * Usage:
 *   npm run grant-subscription -- --email=user@example.com --plan=founding
 *   npm run grant-subscription -- --email=new@example.com --plan=founding --first=Jane --last=Doe
 *   npm run grant-subscription -- --email=user@example.com --plan=founding --skip-email
 *
 * --first/--last are only required if the user doesn't already exist.
 */
import { config } from "dotenv";
import type { PlanId } from "../app/lib/plans";
config({ path: ".env.local" });

type Args = {
  email: string;
  plan: string;
  first?: string;
  last?: string;
  skipEmail: boolean;
};

function parseArgs(): Args {
  const out: Record<string, string | boolean> = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (m) out[m[1]] = m[2] ?? true;
  }
  if (!out.email || !out.plan) {
    throw new Error("Missing required --email=<email> --plan=<founding|regular>");
  }
  return {
    email: String(out.email).trim().toLowerCase(),
    plan: String(out.plan),
    first: out.first ? String(out.first) : undefined,
    last: out.last ? String(out.last) : undefined,
    skipEmail: Boolean(out["skip-email"]),
  };
}

async function main() {
  const args = parseArgs();

  // Dynamic imports so dotenv loads first.
  const { eq } = await import("drizzle-orm");
  const { db: drizzle } = await import("../app/lib/db/connection");
  const { invoices } = await import("../app/lib/db/schema");
  const { db } = await import("../app/lib/db");
  const { PLANS } = await import("../app/lib/plans");
  const { sendInvoiceEmail } = await import("../app/lib/email/send");
  const { createDraftInvoice, issueInvoice } = await import("../app/lib/billing/issue");

  const plan = PLANS.find((p) => p.id === args.plan && !p.waitlist);
  if (!plan) {
    throw new Error(`invalid plan "${args.plan}" — valid: ${PLANS.map((p) => p.id).join(", ")}`);
  }

  let user = await db.getUserByEmail(args.email);
  if (!user) {
    if (!args.first || !args.last) {
      throw new Error(`no existing user with email ${args.email} — pass --first and --last to create one`);
    }
    await db.createUser({ email: args.email, firstName: args.first, lastName: args.last });
    await db.markUserVerified(args.email);
    user = await db.getUserByEmail(args.email);
    console.log(`✓ created + verified user ${args.email}`);
  }
  if (!user) throw new Error("user lookup failed after creation");

  const existing = await db.getUserSubscription(user.id);
  if (existing) {
    console.log(`↺ ${args.email} already has an active subscription (order=${existing.razorpayOrderId})`);
    process.exit(0);
  }

  const orderId = `manual_grant_${user.id}_${Date.now()}`;
  const sub = await db.createSubscription({
    userId: user.id,
    planId: plan.id,
    razorpayOrderId: orderId,
    amountPaise: 0,
  });
  await createDraftInvoice({
    userId: user.id,
    subscriptionId: sub.id,
    razorpayOrderId: orderId,
    planId: plan.id as PlanId,
    taxablePaise: 0,
  });
  const issued = await issueInvoice(orderId, "manual_grant");
  await db.activateSubscription(orderId, "manual_grant");
  console.log(`✓ activated ${plan.name} subscription for ${args.email} (order=${orderId})`);

  if (args.skipEmail || !issued?.invoiceNumber) {
    console.log("⊘ skipping invoice email");
    process.exit(0);
  }

  const invRows = await drizzle.select().from(invoices).where(eq(invoices.id, issued.invoiceId)).limit(1);
  const inv = invRows[0];
  if (!inv) {
    console.log("⊘ invoice row not found — skipping email");
    process.exit(0);
  }

  await sendInvoiceEmail(user.email, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    planName: plan.name,
    orderId,
    paymentId: "manual_grant",
    totalRs: inv.totalPaise / 100,
    taxableRs: inv.taxableTotalPaise / 100,
    cgstRs: inv.cgstPaise / 100,
    sgstRs: inv.sgstPaise / 100,
    igstRs: inv.igstPaise / 100,
    placeOfSupply: inv.placeOfSupply,
    activatedAt: new Date().toISOString(),
    invoiceNumber: issued.invoiceNumber,
    pdfObjectKey: inv.pdfObjectKey,
  });
  console.log(`✓ sent invoice email to ${user.email}`);
  process.exit(0);
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.stack || e.message : e);
  process.exit(1);
});
