"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/signups", label: "Signups" },
  { href: "/admin/onboard", label: "Onboard" },
  { href: "/admin/referrals", label: "Referrals" },
];

export default function AdminNav({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <header className="admin-nav">
      <div className="admin-brand">
        <span className="admin-brand-dot">●</span>Admin
      </div>
      <nav className="admin-nav-links">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`admin-nav-link${active ? " active" : ""}`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
      <span className="admin-nav-email">{email}</span>
      <button onClick={logout} className="admin-nav-signout">
        Sign out
      </button>
    </header>
  );
}
