/**
 * Builds the buyer snapshot frozen into invoices.buyerSnapshot at issue time.
 *
 * Independent of mutable users.billing_info — once written here, never read
 * back to the user record. Future profile edits do not affect issued invoices.
 */

import type { User, BillingInfo, BuyerSnapshot } from "@/app/lib/db/types";
import { getStateCode } from "./state-codes";

export function buildBuyerSnapshot(
  user: Pick<User, "firstName" | "lastName" | "email">,
  billing: BillingInfo | null | undefined
): BuyerSnapshot {
  const name = `${user.firstName} ${user.lastName}`.trim();

  if (!billing) {
    return { name, email: user.email };
  }

  return {
    name,
    email: user.email,
    phone: billing.phone || undefined,
    address: billing.addressLine1
      ? {
          line1: billing.addressLine1,
          line2: billing.addressLine2 || undefined,
          city: billing.city,
          state: billing.state,
          pincode: billing.pincode,
          country: "India",
        }
      : undefined,
    gstin: billing.gstin || undefined,
    pan: billing.pan || undefined,
    stateCode: getStateCode(billing.state) || undefined,
  };
}
