import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/app/lib/db";
import { isAdminEmail } from "@/app/lib/admin";
import AdminNav from "@/app/components/admin/AdminNav";
import "@/app/components/admin/admin.css";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const adminFlag = cookieStore.get("admin")?.value;

  if (!uid || adminFlag !== "1") {
    redirect("/admin/login");
  }
  const user = await db.getUserById(uid);
  if (!user || !user.verified || !isAdminEmail(user.email)) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-shell">
      <AdminNav email={user.email} />
      <div className="admin-page">{children}</div>
    </div>
  );
}
