import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/app/lib/db";

export default async function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  const user = await db.getUserById(uid);
  if (!user?.verified) redirect("/signin");

  const sub = await db.getUserSubscription(uid);
  if (!sub || sub.status !== "active") redirect("/plans");

  return (
    <Suspense
      fallback={
        <main className="module-loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading&hellip;</p>
        </main>
      }
    >
      {children}
    </Suspense>
  );
}
