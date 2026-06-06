/**
 * Supplier identity for invoices.
 *
 * Source of truth. Constant in code → reviewed via PR, not edited via DB form.
 * Old invoices are unaffected by changes here because their supplierSnapshot is
 * frozen jsonb at issue time.
 *
 * To add GSTIN once registration completes: uncomment + fill the field below.
 * Tax computation auto-switches from pre-GST to post-GST regime based on its
 * presence.
 */

import type { SupplierSnapshot } from "@/app/lib/db/types";

export type Supplier = SupplierSnapshot;

export const CURRENT_SUPPLIER: Supplier = {
  legalName: "Bodha Ventures LLP",
  address: {
    line1: "29, 6th Cross, 9th Main",
    line2: "Jalahalli Village",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560013",
    country: "India",
  },
  email: "info@bodhaventures.in",
  pan: "ABGFB6431R",
  gstin: "29ABGFB6431R1ZT",       // GST registration effective 2026-05-27
  stateCode: "29",                // Karnataka
};

/** Deep-clone helper. Use when writing to invoices.supplierSnapshot. */
export function cloneSupplier(s: Supplier = CURRENT_SUPPLIER): SupplierSnapshot {
  return JSON.parse(JSON.stringify(s));
}
