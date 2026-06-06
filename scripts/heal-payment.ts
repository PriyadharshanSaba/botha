/**
 * Heal a stuck payment — issue the draft invoice and email the user.
 *
 * Use when a payment was captured on Razorpay but the client-side
 * `/api/orders/verify` never ran (e.g. mobile UPI handler lost),
 * leaving subscriptions.status='pending' and invoices.status='draft'.
 *
 * Pre-requisite: subscriptions row has already been flipped to 'active'
 * with the correct razorpay_payment_id (do this in SQL first, or pass
 * --activate-sub to let the script do it).
 *
 * Usage:
 *   npm run heal-payment -- --invoice=inv_xxx --payment=pay_xxx
 *   npm run heal-payment -- --invoice=inv_xxx --payment=pay_xxx --activate-sub
 *   npm run heal-payment -- --invoice=inv_xxx --payment=pay_xxx --skip-email
 *
 * What it does:
 *   1. Calls issueInvoice(orderId, paymentId) — assigns invoice number,
 *      flips status to 'issued', renders PDF, uploads to R2.
 *   2. (Optional) Activates the subscription if --activate-sub passed.
 *   3. Sends the invoice email with PDF attachment.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

type Args = {
  invoice: string;
  payment: string;
  activateSub: boolean;
  skipEmail: boolean;
};

function parseArgs(): Args {
  const out: Record<string, string | boolean> = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (m) out[m[1]] = m[2] ?? true;
  }
  if (!out.invoice || !out.payment) {
    throw new Error("Missing required --invoice=<inv_id> --payment=<pay_id>");
  }
  return {
    invoice: String(out.invoice),
    payment: String(out.payment),
    activateSub: Boolean(out["activate-sub"]),
    skipEmail: Boolean(out["skip-email"]),
  };
}

async function main() {
  const args = parseArgs();

  // Dynamic imports so dotenv loads first.
  const { eq } = await import("drizzle-orm");
  const { db: drizzle } = await import("../app/lib/db/connection");
  const { invoices, subscriptions, users } = await import("../app/lib/db/schema");
  const { db } = await import("../app/lib/db");
  const { issueInvoice } = await import("../app/lib/billing/issue");
  const { sendInvoiceEmail } = await import("../app/lib/email/send");
  const { getPlan } = await import("../app/lib/plans");
  const { default: pType } = { default: undefined as never };
  void pType;

  // 1. Load invoice.
  const invRows = await drizzle.select().from(invoices).where(eq(invoices.id, args.invoice)).limit(1);
  const inv = invRows[0];
  if (!inv) throw new Error(`invoice not found: ${args.invoice}`);
  console.log(`✓ loaded invoice ${inv.id} (status=${inv.status}, order=${inv.razorpayOrderId})`);

  if (!inv.razorpayOrderId) {
    throw new Error(`invoice ${inv.id} has no razorpayOrderId — cannot heal`);
  }

  // 2. Optionally activate the subscription.
  if (args.activateSub) {
    await db.activateSubscription(inv.razorpayOrderId, args.payment);
    console.log(`✓ activated subscription for order=${inv.razorpayOrderId}`);
  }

  // 3. Issue invoice (flips draft → issued, gens PDF, uploads R2).
  const issued = await issueInvoice(inv.razorpayOrderId, args.payment);
  if (!issued) throw new Error(`issueInvoice returned null — invoice row missing for order ${inv.razorpayOrderId}`);
  console.log(
    `${issued.alreadyIssued ? "↺ already issued" : "✓ issued"} ${issued.invoiceNumber} (${issued.invoiceId})`,
  );

  if (args.skipEmail) {
    console.log("⊘ skipping email (--skip-email)");
    process.exit(0);
  }

  // 4. Re-read invoice to get invoice_number + pdf_object_key + payment_id.
  const freshRows = await drizzle.select().from(invoices).where(eq(invoices.id, inv.id)).limit(1);
  const fresh = freshRows[0]!;

  // 5. Look up user + subscription (for plan name).
  const userRows = await drizzle.select().from(users).where(eq(users.id, fresh.userId)).limit(1);
  const user = userRows[0];
  if (!user) throw new Error(`user not found: ${fresh.userId}`);

  if (!fresh.subscriptionId) {
    throw new Error(`invoice ${fresh.id} has no subscriptionId — cannot resolve plan`);
  }
  const subRows = await drizzle
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.id, fresh.subscriptionId))
    .limit(1);
  const sub = subRows[0];
  if (!sub) throw new Error(`subscription not found: ${fresh.subscriptionId}`);
  const plan = getPlan(sub.planId as Parameters<typeof getPlan>[0]);

  // 6. Send email.
  await sendInvoiceEmail(user.email, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    planName: plan.name,
    orderId: fresh.razorpayOrderId!,
    paymentId: fresh.razorpayPaymentId ?? args.payment,
    totalRs:    fresh.totalPaise / 100,
    taxableRs:  fresh.taxableTotalPaise / 100,
    cgstRs:     fresh.cgstPaise / 100,
    sgstRs:     fresh.sgstPaise / 100,
    igstRs:     fresh.igstPaise / 100,
    placeOfSupply: fresh.placeOfSupply,
    activatedAt: (fresh.issuedAt ?? fresh.invoiceDate).toISOString(),
    invoiceNumber: fresh.invoiceNumber!,
    pdfObjectKey: fresh.pdfObjectKey,
  });
  console.log(`✓ sent invoice email to ${user.email}`);
  process.exit(0);
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.stack || e.message : e);
  process.exit(1);
});
