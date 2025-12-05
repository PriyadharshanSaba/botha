"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./header.css";

export default function Header() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("logged_in");
    router.push("/");
  }
  return (
    <header className="header">
      <div className="header-left">
        <Image
          src="/logo.svg"
          alt="botha {}"
          width={24}
          height={24}
        />
        <span className="brand">Botha</span>
      </div>

      <nav className="header-nav">
        <Link href="/modules" className="nav-link">Modules</Link>
        <Link href="/videos" className="nav-link">Videos</Link>
        <Link href="/about" className="nav-link">About Us</Link>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
