import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  if (!value?.trim()) return "";
  const isLong = value.length > 60;
  return `
    <tr>
      <td style="padding:9px 14px;font-size:13px;color:#777;width:160px;vertical-align:top;border-bottom:1px solid #f0ece4;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:9px 14px;font-size:13px;color:#0d0d0d;vertical-align:top;border-bottom:1px solid #f0ece4;${isLong ? "white-space:pre-wrap;" : ""}">${escapeHtml(value)}</td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  const body = await req.json() as Record<string, string>;
  const { type } = body;

  if (!type || !body.email || !body.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let subject: string;
  let tableRows: string;

  if (type === "vcfo") {
    subject = `Virtual CFO Inquiry — ${body.name}${body.company ? ` · ${body.company}` : ""}`;
    tableRows = [
      row("Name", body.name),
      row("Designation", body.designation),
      row("Email", body.email),
      row("Phone", body.phone),
      row("Company", body.company),
      row("Industry", body.industry),
      row("Stage", body.stage),
      row("Monthly Revenue", body.revenue),
      row("Challenges", body.challenges),
      row("Primary Service", body.service),
      row("Timeline", body.timeline),
      row("Notes", body.notes),
    ].join("");
  } else if (type === "venture") {
    subject = `Pitch Submission — ${body.name}${body.company ? ` · ${body.company}` : ""}`;
    tableRows = [
      row("Name", body.name),
      row("Co-founder(s)", body.cofounders),
      row("Email", body.email),
      row("Phone", body.phone),
      row("Company / Venture", body.company),
      row("Sector", body.sector),
      row("Stage", body.stage),
      row("Amount Seeking", body.amount),
      row("Problem", body.problem),
      row("Solution", body.solution),
      row("Traction", body.traction),
      row("Pitch Deck / Website", body.deck),
    ].join("");
  } else {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const typeLabel = type === "vcfo" ? "Virtual CFO Request" : "Pitch Submission";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f5f0e8">
<tr><td align="center" style="padding:24px 16px;">
<table width="580" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;width:100%;background:#fff;">

  <tr><td bgcolor="#0d0d0d" style="padding:24px 28px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td>
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:19px;color:#fff;margin-bottom:4px;">Bodha Ventures</div>
        <div style="font-size:11px;color:#c9a84c;letter-spacing:0.1em;text-transform:uppercase;">${typeLabel}</div>
      </td>
      <td align="right">
        <div style="font-size:11px;color:#666;">${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</div>
      </td>
    </tr></table>
  </td></tr>

  <tr><td bgcolor="#c9a84c" height="3" style="height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>

  <tr><td style="padding:24px 28px;">
    <p style="margin:0 0 18px;font-size:14px;color:#555;line-height:1.65;">
      New ${typeLabel.toLowerCase()} submitted via bodhaventures.in. Reply directly to respond to ${escapeHtml(body.name)}.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #f0ece4;border-left:1px solid #f0ece4;border-right:1px solid #f0ece4;">
      ${tableRows}
    </table>
  </td></tr>

  <tr><td bgcolor="#0d0d0d" style="padding:12px 28px;">
    <div style="font-size:10px;color:#555;">bodhaventures.in &nbsp;&middot;&nbsp; This email was sent automatically from your website contact form.</div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "Bodha Ventures <info@bodhaventures.in>",
    to: "info@bodhaventures.in",
    reply_to: body.email,
    subject,
    html,
  });

  if (error) {
    console.error("[Resend] Contact form email failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
