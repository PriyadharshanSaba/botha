/**
 * Indian Financial Year helper.
 * FY runs April 1 → March 31. Examples:
 *   2026-04-01 → "2026-27"
 *   2026-03-31 → "2025-26"
 *   2027-01-15 → "2026-27"
 *
 * Uses UTC internally so identical date strings produce identical FYs across
 * server timezones. Callers convert IST-sensitive timestamps before passing in
 * if needed; for invoice issuance, server clock UTC is fine — invoices are
 * legally dated by the server timestamp.
 */
export function indianFY(d: Date): string {
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();          // 0-indexed; April = 3
  const startYear = m >= 3 ? y : y - 1;
  return `${startYear}-${String(startYear + 1).slice(2)}`;
}

/** Format full invoice number from FY + sequence. */
export function formatInvoiceNumber(fy: string, seq: number): string {
  if (seq < 1 || seq > 9999) {
    throw new Error(`invoice sequence out of range: ${seq}`);
  }
  return `BV/${fy}/${String(seq).padStart(4, "0")}`;
}
