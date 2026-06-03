import { listActiveOffers } from "@/app/lib/admin/referrals";
import ReferralEnableForm from "@/app/components/admin/ReferralEnableForm";
import ReferralOffersTable from "@/app/components/admin/ReferralOffersTable";

export default async function ReferralsPage() {
  const rows = await listActiveOffers();
  return (
    <main>
      <h1 style={{ marginBottom: 16 }}>Referrals</h1>
      <ReferralEnableForm />
      <ReferralOffersTable rows={rows} />
    </main>
  );
}
