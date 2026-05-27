/**
 * Indian-numbering number-to-words for invoice "Amount in words" line.
 *
 * Uses lakh/crore (not million/billion). Outputs e.g.
 *   589882 paise → "Five Thousand Eight Hundred Ninety Eight Rupees and Eighty Two Paise Only"
 *
 * Used in invoice HTML/PDF rendering only. No external dep.
 */

const ONES = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
  "Seventeen", "Eighteen", "Nineteen",
];

const TENS = [
  "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
];

function twoDigits(n: number): string {
  if (n < 20) return ONES[n];
  const t = Math.floor(n / 10);
  const o = n % 10;
  return o === 0 ? TENS[t] : `${TENS[t]} ${ONES[o]}`;
}

function threeDigits(n: number): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (h > 0) parts.push(`${ONES[h]} Hundred`);
  if (r > 0) parts.push(twoDigits(r));
  return parts.join(" ");
}

/** Convert integer (non-negative) to Indian-system words. */
function intToWords(n: number): string {
  if (n === 0) return "Zero";

  const crore = Math.floor(n / 10000000);
  n = n % 10000000;
  const lakh = Math.floor(n / 100000);
  n = n % 100000;
  const thousand = Math.floor(n / 1000);
  n = n % 1000;
  const rest = n;

  const parts: string[] = [];
  if (crore > 0)    parts.push(`${intToWords(crore)} Crore`);
  if (lakh > 0)     parts.push(`${twoDigits(lakh)} Lakh`);
  if (thousand > 0) parts.push(`${twoDigits(thousand)} Thousand`);
  if (rest > 0)     parts.push(threeDigits(rest));

  return parts.join(" ");
}

/**
 * Convert paise (integer) to invoice-style words.
 * Examples:
 *   0       → "Zero Rupees Only"
 *   499900  → "Four Thousand Nine Hundred Ninety Nine Rupees Only"
 *   589882  → "Five Thousand Eight Hundred Ninety Eight Rupees and Eighty Two Paise Only"
 */
export function paiseToWords(paise: number): string {
  if (!Number.isInteger(paise) || paise < 0) {
    throw new Error(`paiseToWords: expected non-negative integer paise, got ${paise}`);
  }

  const rupees = Math.floor(paise / 100);
  const p      = paise % 100;

  const rupeeWords = rupees === 0 ? "Zero" : intToWords(rupees);

  if (p === 0) return `${rupeeWords} Rupees Only`;
  return `${rupeeWords} Rupees and ${twoDigits(p)} Paise Only`;
}
