import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { enableReferralOffer } from "@/app/lib/admin/referrals";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const id = body.identifier as { kind: "id" | "email"; value: string } | undefined;
  const code = body.code as string | undefined;
  const discount = body.discount as
    | { type: "percent"; value: number }
    | { type: "flat"; valuePaise: number }
    | undefined;
  const description = body.description as string | undefined;
  const expiresAt = body.expiresAt ? new Date(body.expiresAt as string) : null;

  if (!id || !code || !discount) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  try {
    const result = await enableReferralOffer(
      id.kind === "id"
        ? {
            identifier: { kind: "id", value: id.value },
            code,
            discount,
            description,
            expiresAt,
          }
        : {
            identifier: { kind: "email", value: id.value },
            code,
            discount,
            description,
            expiresAt,
          }
    );
    return NextResponse.json(result);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
