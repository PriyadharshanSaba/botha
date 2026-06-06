import type { ReferralOffer } from "@/app/lib/db/types";

export type ApplyResult =
  | {
      ok: true;
      code: string;
      description: string | null;
      discountPaise: number;
      finalPaise: number;
    }
  | {
      ok: false;
      error: "not_found" | "inactive" | "expired" | "self_referral" | "invalid_state";
    };

export type { ReferralOffer };
