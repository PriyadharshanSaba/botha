import { listActiveOffers } from "@/app/lib/admin/referrals";
import ReferralEnableForm from "@/app/components/admin/ReferralEnableForm";
import ReferralOffersTable from "@/app/components/admin/ReferralOffersTable";

export default async function ReferralsPage() {
  const rows = await listActiveOffers();
  return (
    <main>
      <h1 className="admin-h1">Referrals</h1>
      <p className="admin-sub">Enable codes, track usage, deactivate as needed.</p>
      <ReferralEnableForm />
      <ReferralOffersTable rows={rows} />
    </main>
  );
}
