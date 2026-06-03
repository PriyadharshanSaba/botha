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
    <header
      style={{
        display: "flex",
        gap: 24,
        padding: "12px 24px",
        borderBottom: "2px solid #d4a017",
        alignItems: "center",
      }}
    >
      <strong>Admin</strong>
      <nav style={{ display: "flex", gap: 16, flex: 1 }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              textDecoration: pathname === l.href ? "underline" : "none",
              fontWeight: pathname === l.href ? 700 : 400,
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <span style={{ color: "#666", fontSize: 14 }}>{email}</span>
      <button onClick={logout}>Sign out</button>
    </header>
  );
}
