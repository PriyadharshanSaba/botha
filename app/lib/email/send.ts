import { Resend } from "resend";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type InvoiceData = {
  firstName: string;
  lastName: string;
  email: string;
  planName: string;
  orderId: string;
  paymentId: string;
  totalRs: number;
  taxableRs: number;
  cgstRs: number;
  sgstRs: number;
  igstRs: number;
  placeOfSupply: string;
  activatedAt: string;
  invoiceNumber: string;
  pdfObjectKey?: string | null;
};

async function fetchPdfBuffer(objectKey: string): Promise<Buffer | null> {
  const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = process.env;
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
    return null;
  }
  const client = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
  });
  try {
    const out = await client.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: objectKey }));
    const chunks: Buffer[] = [];
    for await (const c of out.Body as AsyncIterable<Uint8Array>) {
      chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c));
    }
    return Buffer.concat(chunks);
  } catch (err) {
    console.error("[email] R2 PDF fetch failed:", err);
    return null;
  }
}

function rupeesToWords(amount: number): string {
  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function inW(n: number): string {
    if (n === 0) return "";
    if (n < 20) return a[n] + " ";
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "") + " ";
    return a[Math.floor(n / 100)] + " Hundred " + inW(n % 100);
  }

  if (amount === 0) return "Rupees Zero Only";
  const crore = Math.floor(amount / 10000000);
  const lakh  = Math.floor((amount % 10000000) / 100000);
  const thou  = Math.floor((amount % 100000) / 1000);
  const rest  = Math.floor(amount % 1000);
  let r = "";
  if (crore) r += inW(crore) + "Crore ";
  if (lakh)  r += inW(lakh)  + "Lakh ";
  if (thou)  r += inW(thou)  + "Thousand ";
  if (rest)  r += inW(rest);
  return ("Rupees " + r.trim() + " Only").replace(/\s+/g, " ");
}

export async function sendInvoiceEmail(to: string, data: InvoiceData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const appUrl = process.env.APP_URL ?? "";

  const date = new Date(data.activatedAt).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });

  const invoiceNum = data.invoiceNumber;

  const shortOrderId = data.orderId.startsWith("order_")
    ? data.orderId.replace("order_", "")
    : data.orderId.split("_").slice(-1)[0];
  const shortPaymentId = data.paymentId === "bypass" ? null : data.paymentId.replace("pay_", "");

  const words = rupeesToWords(Math.round(data.totalRs));

  const fmt = (n: number) => "&#8377;" + n.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  // Palette (CSS vars resolved)
  const INK       = "#0d0d0d";
  const CREAM     = "#f5f0e8";
  const GOLD      = "#c9a84c";
  const GOLD_L    = "#e8d08a";
  const GOLD_BG   = "#fdf6e3";
  const SLATE     = "#2a2d35";
  const MIST      = "#e8e4dc";
  const WHITE     = "#fdfcf9";
  const MUTED     = "#7a7a6e";
  const GREEN     = "#2d7a3a";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:${CREAM};font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${CREAM}">
<tr><td align="center" style="padding:24px 16px;">
<table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;background:${WHITE};">

  <!-- ── HEADER ── -->
  <tr><td bgcolor="${INK}" style="padding:28px 32px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td valign="top">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${WHITE};letter-spacing:-0.02em;line-height:1;margin-bottom:6px;">Bodha Ventures</div>
        <div style="font-size:10px;color:${GOLD_L};letter-spacing:0.12em;text-transform:uppercase;font-weight:500;">LLP &nbsp;&middot;&nbsp; Personal Finance &amp; Virtual CFO</div>
      </td>
      <td align="right" valign="top">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:19px;color:${WHITE};margin-bottom:6px;">Invoice</div>
        <div style="font-size:12px;color:${GOLD_L};font-weight:500;letter-spacing:0.05em;">${invoiceNum}</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- ── ACCENT BAR ── -->
  <tr><td bgcolor="${GOLD_L}" height="4" style="height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

  <!-- ── PARTIES ── -->
  <tr><td style="padding:22px 32px;border-bottom:1px solid ${MIST};">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="50%" valign="top" style="padding-right:20px;">
        <div style="font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};margin-bottom:10px;">Supplier</div>
        <div style="font-size:14px;font-weight:500;color:${INK};margin-bottom:4px;">Bodha Ventures LLP</div>
        <div style="font-size:12px;color:${SLATE};line-height:1.7;">29, 6th Cross, 9th Main,<br/>Jalahalli Village,<br/>Bengaluru &mdash; 560013<br/>Karnataka, India<br/>info@bodhaventures.in</div>
        <div style="display:inline-block;margin-top:8px;font-size:10px;font-weight:500;background:${GOLD_BG};color:${GOLD};padding:3px 10px;border-radius:4px;letter-spacing:0.05em;">GSTIN: 29ABGFB6431R1ZT</div>
        <div style="display:inline-block;margin-top:8px;margin-left:6px;font-size:10px;font-weight:500;background:${GOLD_BG};color:${GOLD};padding:3px 10px;border-radius:4px;letter-spacing:0.05em;">PAN: ABGFB6431R</div>
      </td>
      <td width="50%" valign="top" style="padding-left:20px;border-left:1px solid ${MIST};">
        <div style="font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};margin-bottom:10px;">Bill To</div>
        <div style="font-size:14px;font-weight:500;color:${INK};margin-bottom:4px;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</div>
        <div style="font-size:12px;color:${SLATE};line-height:1.7;">${escapeHtml(data.email)}</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- ── INVOICE META ── -->
  <tr><td bgcolor="${CREAM}" style="padding:14px 32px;border-bottom:1px solid ${MIST};">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="padding-right:6px;">
        <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:4px;">Invoice No.</div>
        <div style="font-size:11px;font-weight:500;color:${INK};">${invoiceNum}</div>
      </td>
      <td style="padding-right:6px;">
        <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:4px;">Invoice Date</div>
        <div style="font-size:11px;font-weight:500;color:${INK};">${date}</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- ── LINE ITEMS ── -->
  <tr><td style="padding:0 32px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:18px 0;">
      <thead><tr style="border-bottom:2px solid ${GOLD};">
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px 0;text-align:left;width:60%;">Description</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 8px 10px;text-align:right;">Qty</th>
        <th style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};padding:0 0 10px 8px;text-align:right;">Amount</th>
      </tr></thead>
      <tbody><tr>
        <td style="padding:13px 8px 13px 0;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">
          <div style="font-weight:500;color:${INK};margin-bottom:3px;">${escapeHtml(data.planName)} &mdash; Bodha Personal Finance Program</div>
          <div style="font-size:11px;color:${MUTED};line-height:1.5;">Written course &mdash; English + Kannada. Lifetime access.<br/></div>
        </td>
        <td style="padding:13px 8px;text-align:right;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">1</td>
        <td style="padding:13px 0 13px 8px;text-align:right;font-size:12px;color:${SLATE};vertical-align:top;border-bottom:1px solid ${MIST};">${fmt(data.totalRs)}</td>
      </tr></tbody>
    </table>
  </td></tr>

  <!-- ── PLACE OF SUPPLY ── -->
  <tr><td style="padding:8px 32px 0;font-size:12px;color:${SLATE};"><strong>Place of Supply:</strong> ${escapeHtml(data.placeOfSupply)}</td></tr>

  <!-- ── TOTALS ── -->
  <tr><td style="padding:16px 32px 20px;border-top:1px solid ${MIST};">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">Taxable Total</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${fmt(data.taxableRs)}</td></tr>
      ${data.cgstRs > 0 || data.sgstRs > 0 ? `
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">CGST @ 9%</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${fmt(data.cgstRs)}</td></tr>
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">SGST @ 9%</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${fmt(data.sgstRs)}</td></tr>
      ` : data.igstRs > 0 ? `
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">IGST @ 18%</td><td align="right" style="font-size:12px;color:${INK};padding:4px 0;">${fmt(data.igstRs)}</td></tr>
      ` : ""}
      <tr><td style="font-size:15px;font-weight:500;color:${INK};padding:8px 0;border-top:1px solid ${MIST};">Grand Total</td><td align="right" style="font-size:15px;font-weight:500;color:${INK};padding:8px 0;border-top:1px solid ${MIST};">${fmt(data.totalRs)}</td></tr>
    </table>
  </td></tr>

  <!-- ── AMOUNT IN WORDS ── -->
  <tr><td style="padding:0 32px 18px;">
    <div style="background:${GOLD_BG};border-radius:5px;padding:11px 15px;font-size:12px;color:${GOLD};line-height:1.5;">
      <strong>Amount in words:</strong> ${words}
    </div>
  </td></tr>

  <!-- ── PAYMENT DETAILS ── -->
  <tr><td style="padding:16px 32px;border-top:1px solid ${MIST};">
    <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${GOLD};margin-bottom:10px;">Payment Details</div>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;border-bottom:1px solid ${MIST};">Payment Mode</td><td align="right" style="font-size:12px;font-weight:500;color:${INK};padding:4px 0;border-bottom:1px solid ${MIST};">Online (Razorpay)</td></tr>
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;border-bottom:1px solid ${MIST};">Order ID</td><td align="right" style="font-size:11px;font-weight:500;color:${INK};padding:4px 0;border-bottom:1px solid ${MIST};font-family:monospace,Arial,sans-serif;">#${shortOrderId}</td></tr>
      ${shortPaymentId ? `<tr><td style="font-size:12px;color:${MUTED};padding:4px 0;border-bottom:1px solid ${MIST};">Payment ID</td><td align="right" style="font-size:11px;font-weight:500;color:${INK};padding:4px 0;border-bottom:1px solid ${MIST};font-family:monospace,Arial,sans-serif;">#${shortPaymentId}</td></tr>` : ""}
      <tr><td style="font-size:12px;color:${MUTED};padding:4px 0;">Payment Status</td><td align="right" style="font-size:12px;font-weight:500;color:${GREEN};padding:4px 0;">Paid</td></tr>
    </table>
  </td></tr>

  <!-- ── DECLARATION ── -->
  <tr><td style="padding:16px 32px;border-top:1px solid ${MIST};">
    <div style="font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:${MUTED};margin-bottom:8px;">Declaration</div>
    <div style="font-size:11px;color:${SLATE};line-height:1.7;">We declare that this invoice shows the actual price of the goods / services described and that all particulars are true and correct. This is a computer-generated invoice. All sales are final &mdash; course purchases are non-refundable.</div>
  </td></tr>

  <!-- ── CTA ── -->
  <tr><td style="padding:20px 32px;border-top:1px solid ${MIST};text-align:center;">
    <a href="${appUrl}/modules" style="display:inline-block;background:${GOLD};color:${INK};font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:6px;letter-spacing:0.02em;">Start learning &rarr;</a>
    <div style="margin-top:12px;font-size:11px;color:${MUTED};">Questions? <a href="mailto:info@bodhaventures.in" style="color:${GOLD};text-decoration:none;">info@bodhaventures.in</a></div>
  </td></tr>

  <!-- ── FOOTER ── -->
  <tr><td bgcolor="${INK}" style="padding:14px 32px;">
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

  const attachments: { filename: string; content: Buffer }[] = [];
  if (data.pdfObjectKey) {
    const pdf = await fetchPdfBuffer(data.pdfObjectKey);
    if (pdf) attachments.push({ filename: `${data.invoiceNumber.replace(/\//g, "_")}.pdf`, content: pdf });
  }

  const { error } = await resend.emails.send({
    from: "Bodha Ventures <info@bodhaventures.in>",
    to,
    subject: `Invoice ${data.invoiceNumber} — Bodha Ventures LLP`,
    html,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) console.error("[Resend] Invoice email failed:", error);
}

export async function sendWaitlistEmail(data: { firstName: string; lastName: string; email: string }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email } = data;
  const { error } = await resend.emails.send({
    from: "Bodha Ventures <info@bodhaventures.in>",
    to: "info@bodhaventures.in",
    replyTo: email,
    subject: `New waitlist signup — ${firstName} ${lastName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
        <h2 style="margin: 0 0 12px;">New waitlist signup</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 6px 0; color: #555;">First name</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(firstName)}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Last name</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(lastName)}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Email</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">When</td><td style="padding: 6px 0;">${new Date().toISOString()}</td></tr>
        </table>
      </div>
    `,
  });
  if (error) {
    console.error("[Resend] Waitlist email failed:", error);
    throw new Error(error.message ?? "Resend error");
  }
}

export async function sendOtpEmail(to: string, otp: string, firstName: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Bodha Ventures <info@bodhaventures.in>",
    to,
    subject: "Your verification code",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
        <h2 style="margin: 0 0 8px;">Hi ${escapeHtml(firstName)},</h2>
        <p style="color: #555; margin: 0 0 24px;">Use the code below to verify your identity. It expires in 5 minutes.</p>
        <div style="background: #f4f4f4; border-radius: 8px; padding: 24px; text-align: center;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 12px;">${otp}</span>
        </div>
        <p style="color: #999; font-size: 12px; margin: 24px 0 0;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  });

  if (error) {
    console.error("[Resend] Failed to send OTP email:", error);
    throw new Error(error.message ?? "Resend error");
  }
  console.log("[Resend] OTP email sent:", data?.id);
}
