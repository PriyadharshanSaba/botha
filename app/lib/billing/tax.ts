/**
 * GST tax computation for invoices.
 *
 * Two regimes, switched by presence of supplier.gstin:
 *
 *  - Pre-GST:  no breakup; total = taxable. All CGST/SGST/IGST = 0.
 *  - Post-GST: 18% on taxable. Intra-state (buyer state = supplier state) →
 *              CGST 9% + SGST 9%. Inter-state (different states or unknown
 *              buyer state) → IGST 18%.
 *
 * All math in paise (integer). CGST/SGST split uses floor + (total - floor) so
 * the two halves always sum exactly to the total tax (no 1-paisa drift).
 *
 * Pure function — easy to unit-test, no DB / config dependencies beyond the
 * supplier object passed in.
 */

import type { Supplier } from "./supplier";

export type TaxBreakup = {
  taxableTotalPaise: number;
  cgstPaise: number;
  sgstPaise: number;
  igstPaise: number;
  totalPaise: number;
  placeOfSupply: string;          // 2-digit GST state code
};

const GST_RATE = 0.18;

export function computeInvoiceTax(
  taxablePaise: number,
  buyerStateCode: string | null | undefined,
  supplier: Supplier
): TaxBreakup {
  const placeOfSupply = buyerStateCode || supplier.stateCode;

  // Pre-GST regime: no breakup, total = taxable.
  if (!supplier.gstin) {
    return {
      taxableTotalPaise: taxablePaise,
      cgstPaise: 0,
      sgstPaise: 0,
      igstPaise: 0,
      totalPaise: taxablePaise,
      placeOfSupply,
    };
  }

  const taxPaise   = Math.round(taxablePaise * GST_RATE);
  const intraState = !!buyerStateCode && buyerStateCode === supplier.stateCode;

  if (intraState) {
    const halfFloor = Math.floor(taxPaise / 2);
    return {
      taxableTotalPaise: taxablePaise,
      cgstPaise: halfFloor,
      sgstPaise: taxPaise - halfFloor,
      igstPaise: 0,
      totalPaise: taxablePaise + taxPaise,
      placeOfSupply,
    };
  }

  return {
    taxableTotalPaise: taxablePaise,
    cgstPaise: 0,
    sgstPaise: 0,
    igstPaise: taxPaise,
    totalPaise: taxablePaise + taxPaise,
    placeOfSupply,
  };
}
