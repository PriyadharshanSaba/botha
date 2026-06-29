import { getSession } from "@/app/lib/session";
import ModulesListClient from "./ModulesListClient";

export const dynamic = "force-dynamic";

export default async function ModulesPage() {
  const session = await getSession();
  const isSignedIn = !!session;
  const isSubscribed = session?.sub?.status === "active";
  return <ModulesListClient isSignedIn={isSignedIn} isSubscribed={isSubscribed} />;
}
