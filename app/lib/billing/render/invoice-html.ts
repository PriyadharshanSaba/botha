/**
 * Renders an invoice row to inline-styled HTML — branded Bodha palette.
 *
 * Single template used for both PDF generation (Puppeteer) and (in future)
 * email body. Mirrors the visual style of the /billing page invoice card so
 * the downloadable PDF looks identical to the on-screen receipt.
 *
 * Inputs come from the immutable invoice row — never live user/plan data —
 * so the rendered output never drifts after issuance.
 *
 * Layout matches docs/superpowers/specs/2026-05-27-gst-switch-design.md.
 * Intra-state buyers see CGST + SGST rows. Inter-state buyers see IGST row.
 */

import type { Invoice, BuyerSnapshot, SupplierSnapshot, InvoiceLineItem } from "@/app/lib/db/types";
import { paiseToWords } from "../words";
import { GST_STATE_CODES } from "../state-codes";

/* ─── palette ─────────────────────────────────────────────────────────── */

const INK     = "#0d0d0d";
const CREAM   = "#f5f0e8";
const GOLD    = "#c9a84c";
const GOLD_L  = "#e8d08a";
const GOLD_BG = "#fdf6e3";
const SLATE   = "#2a2d35";
const MIST    = "#e8e4dc";
const WHITE   = "#fdfcf9";
const MUTED   = "#7a7a6e";
const GREEN   = "#2d7a3a";

const RUPEE = "&#8377;";

/* ─── helpers ─────────────────────────────────────────────────────────── */

function fmtRupees(p: number): string {
  return (p / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtDate(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stateNameFromCode(code: string): string {
  const entry = Object.entries(GST_STATE_CODES).find(([, c]) => c === code);
  return entry ? entry[0] : "—";
}

function renderAddressLines(b: BuyerSnapshot | SupplierSnapshot): string {
  const a = "address" in b ? b.address : undefined;
  if (!a) return "";
  const lines: string[] = [];
  if (a.line1) lines.push(escapeHtml(a.line1));
  if (a.line2) lines.push(escapeHtml(a.line2));
  lines.push(escapeHtml(`${a.city} — ${a.pincode}`));
  lines.push(escapeHtml(`${a.state}, ${a.country}`));
  return lines.join("<br/>");
}

/* ─── main render ─────────────────────────────────────────────────────── */

export type RenderableInvoice = Pick<
  Invoice,
  | "invoiceNumber"
  | "invoiceDate"
  | "buyerSnapshot"
  | "supplierSnapshot"
  | "lineItems"
  | "placeOfSupply"
  | "taxableTotalPaise"
  | "cgstPaise"
  | "sgstPaise"
  | "igstPaise"
  | "totalPaise"
  | "razorpayOrderId"
  | "razorpayPaymentId"
>;

export function renderInvoiceHtml(inv: RenderableInvoice): string {
  const buyer    = inv.buyerSnapshot;
  const supplier = inv.supplierSnapshot;
  const intraState = inv.cgstPaise > 0 || inv.sgstPaise > 0;
  const invoiceNum = inv.invoiceNumber ?? "—";

  const lineRows = inv.lineItems
    .map(
      (li: InvoiceLineItem, i: number) => `
      <tr>
        <td style="padding:14px 8px 14px 0;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">
          <div style="font-weight:500;color:${INK};margin-bottom:3px;">${escapeHtml(li.description)}</div>
          <div style="font-size:11px;color:${MUTED};line-height:1.5;">Written course — English + Kannada. Lifetime access.<br/></div>
          ${i === 0 ? "" : ""}
        </td>
        <td style="padding:14px 8px;text-align:center;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">${escapeHtml(li.hsnSac)}</td>
        <td style="padding:14px 8px;text-align:center;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">${li.qty}</td>
        <td style="padding:14px 8px;text-align:center;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">${escapeHtml(li.unit ?? "Nos")}</td>
        <td style="padding:14px 8px;text-align:right;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">${li.unitPriceRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
        <td style="padding:14px 0 14px 8px;text-align:right;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">${li.taxableRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
      </tr>`
    )
    .join("");

  const taxRows = intraState
    ? `
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">CGST @ 9%</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${RUPEE} ${fmtRupees(inv.cgstPaise)}</td></tr>
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">SGST @ 9%</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${RUPEE} ${fmtRupees(inv.sgstPaise)}</td></tr>`
    : `
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">IGST @ 18%</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${RUPEE} ${fmtRupees(inv.igstPaise)}</td></tr>`;

  const shortOrderId = inv.razorpayOrderId
    ? (inv.razorpayOrderId.startsWith("order_")
        ? inv.razorpayOrderId.replace("order_", "")
        : inv.razorpayOrderId)
    : null;
  const shortPaymentId = inv.razorpayPaymentId && inv.razorpayPaymentId !== "bypass"
    ? inv.razorpayPaymentId.replace("pay_", "")
    : null;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Tax Invoice ${escapeHtml(invoiceNum)}</title>
<style>
  @page { size: A4; margin: 0; }
  body { margin: 0; padding: 0; }
</style>
</head>
<body style="margin:0;padding:0;background:${CREAM};font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${CREAM}">
<tr><td align="center" style="padding:24px 16px;">
<table width="760" cellpadding="0" cellspacing="0" border="0" style="max-width:760px;width:100%;background:${WHITE};box-shadow:0 4px 40px rgba(15,110,86,0.08);">

  <!-- ── HEADER ── -->
  <tr><td bgcolor="${INK}" style="padding:32px 36px 26px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td valign="top">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${WHITE};letter-spacing:-0.02em;line-height:1;margin-bottom:6px;">Bodha Ventures</div>
        <div style="font-size:11px;color:${GOLD_L};letter-spacing:0.12em;text-transform:uppercase;font-weight:500;">LLP &nbsp;&middot;&nbsp; Personal Finance &amp; Virtual CFO</div>
      </td>
      <td align="right" valign="top">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:${WHITE};margin-bottom:6px;">Tax Invoice</div>
        <div style="font-size:12px;color:${GOLD_L};font-weight:500;letter-spacing:0.05em;">${escapeHtml(invoiceNum)}</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- ── ACCENT BAR ── -->
  <tr><td bgcolor="${GOLD_L}" height="4" style="height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

  <!-- ── PARTIES ── -->
  <tr><td style="padding:24px 36px;border-bottom:1px solid ${MIST};">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="50%" valign="top" style="padding-right:20px;">
        <div style="font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};margin-bottom:10px;">Supplier</div>
        <div style="font-size:14px;font-weight:500;color:${INK};margin-bottom:4px;">${escapeHtml(supplier.legalName)}</div>
        <div style="font-size:12px;color:${SLATE};line-height:1.7;">${renderAddressLines(supplier)}<br/>${escapeHtml(supplier.email)}</div>
        ${supplier.gstin ? `<div style="display:inline-block;margin-top:10px;font-size:10px;font-weight:500;background:${GOLD_BG};color:${GOLD};padding:3px 10px;border-radius:4px;letter-spacing:0.05em;">GSTIN: ${escapeHtml(supplier.gstin)}</div>` : ""}
        <div style="display:inline-block;margin-top:10px;margin-left:4px;font-size:10px;font-weight:500;background:${GOLD_BG};color:${GOLD};padding:3px 10px;border-radius:4px;letter-spacing:0.05em;">PAN: ${escapeHtml(supplier.pan)}</div>
      </td>
      <td width="50%" valign="top" style="padding-left:20px;border-left:1px solid ${MIST};">
        <div style="font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};margin-bottom:10px;">Bill To</div>
        <div style="font-size:14px;font-weight:500;color:${INK};margin-bottom:4px;">${escapeHtml(buyer.name)}</div>
        <div style="font-size:12px;color:${SLATE};line-height:1.7;">${renderAddressLines(buyer)}${buyer.email ? `<br/>${escapeHtml(buyer.email)}` : ""}</div>
        ${buyer.gstin ? `<div style="display:inline-block;margin-top:10px;font-size:10px;font-weight:500;background:${GOLD_BG};color:${GOLD};padding:3px 10px;border-radius:4px;letter-spacing:0.05em;">GSTIN: ${escapeHtml(buyer.gstin)}</div>` : ``}
      </td>
    </tr></table>
  </td></tr>

  <!-- ── INVOICE META ── -->
  <tr><td bgcolor="${CREAM}" style="padding:14px 36px;border-bottom:1px solid ${MIST};">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td>
        <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:4px;">Invoice No.</div>
        <div style="font-size:11px;font-weight:500;color:${INK};">${escapeHtml(invoiceNum)}</div>
      </td>
      <td>
        <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:4px;">Invoice Date</div>
        <div style="font-size:11px;font-weight:500;color:${INK};">${fmtDate(inv.invoiceDate)}</div>
      </td>
      <td>
        <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:4px;">Place of Supply</div>
        <div style="font-size:11px;font-weight:500;color:${INK};">${escapeHtml(stateNameFromCode(inv.placeOfSupply))} (${escapeHtml(inv.placeOfSupply)})</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- ── LINE ITEMS ── -->
  <tr><td style="padding:0 36px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:18px 0;">
      <thead><tr style="border-bottom:2px solid ${GOLD};">
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px 0;text-align:left;width:46%;">Description</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px;text-align:center;">HSN/SAC</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px;text-align:center;">Qty</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px;text-align:center;">Unit</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px;text-align:right;">Rate</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 0 10px 8px;text-align:right;">Taxable</th>
      </tr></thead>
      <tbody>${lineRows}</tbody>
    </table>
  </td></tr>

  <!-- ── TOTALS ── -->
  <tr><td style="padding:16px 36px 22px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">Taxable Total</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${RUPEE} ${fmtRupees(inv.taxableTotalPaise)}</td></tr>
      ${taxRows}
      <tr><td style="font-size:15px;font-weight:500;color:${INK};padding:10px 0 6px;border-top:1px solid ${MIST};">Grand Total</td><td align="right" style="font-size:15px;font-weight:500;color:${INK};padding:10px 0 6px;border-top:1px solid ${MIST};">${RUPEE} ${fmtRupees(inv.totalPaise)}</td></tr>
    </table>
  </td></tr>

  <!-- ── AMOUNT IN WORDS ── -->
  <tr><td style="padding:0 36px 20px;">
    <div style="background:${GOLD_BG};border-radius:5px;padding:11px 15px;font-size:12px;color:${GOLD};line-height:1.5;">
      <strong>Amount in words:</strong> ${escapeHtml(paiseToWords(inv.totalPaise))}
    </div>
  </td></tr>

  <!-- ── PAYMENT DETAILS ── -->
  <tr><td style="padding:18px 36px;border-top:1px solid ${MIST};">
    <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};margin-bottom:10px;">Payment Details</div>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;border-bottom:1px solid ${MIST};">Payment Mode</td><td align="right" style="font-size:12px;font-weight:500;color:${INK};padding:4px 0;border-bottom:1px solid ${MIST};">Online (Razorpay)</td></tr>
      ${shortOrderId ? `<tr><td style="font-size:12px;color:${MUTED};padding:4px 0;border-bottom:1px solid ${MIST};">Order ID</td><td align="right" style="font-size:11px;font-weight:500;color:${INK};padding:4px 0;border-bottom:1px solid ${MIST};font-family:monospace,Arial,sans-serif;">#${escapeHtml(shortOrderId)}</td></tr>` : ""}
      ${shortPaymentId ? `<tr><td style="font-size:12px;color:${MUTED};padding:4px 0;border-bottom:1px solid ${MIST};">Payment ID</td><td align="right" style="font-size:11px;font-weight:500;color:${INK};padding:4px 0;border-bottom:1px solid ${MIST};font-family:monospace,Arial,sans-serif;">#${escapeHtml(shortPaymentId)}</td></tr>` : ""}
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">Payment Status</td><td align="right" style="font-size:12px;font-weight:500;color:${GREEN};padding:4px 0;">Paid</td></tr>
    </table>
  </td></tr>

  <!-- ── DECLARATION ── -->
  <tr><td style="padding:16px 36px;border-top:1px solid ${MIST};">
    <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:8px;">Declaration</div>
    <div style="font-size:11px;color:${SLATE};line-height:1.7;">We declare that this invoice shows the actual price of the services described and that all particulars are true and correct. This is a computer-generated invoice and does not require a signature. All sales are final &mdash; course purchases are non-refundable.</div>
  </td></tr>

  <!-- ── FOOTER ── -->
  <tr><td bgcolor="${INK}" style="padding:16px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="font-family:Georgia,'Times New Roman',serif;font-size:13px;color:${GOLD_L};">Bodha Ventures LLP</td>
      <td align="right" style="font-size:10px;color:${MUTED};">Thank you for your trust &amp; business.</td>
    </tr></table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
