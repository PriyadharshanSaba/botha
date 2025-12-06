"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./header.css";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <header className="header">

      {/* Left side — Logo + Brand */}
      <div className="header-left">
        <Image
          src="/logo.svg"
          alt="botha-logo"
          width={24}
          height={24}
        />
        <span className="brand">Botha</span>
      </div>

      {/* Desktop navigation */}
      <nav className="header-nav desktop-nav">
        <Link href="/modules" className="nav-link">Modules</Link>
        <Link href="/videos" className="nav-link">Videos</Link>
        <Link href="/about" className="nav-link">About Us</Link>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Hamburger icon (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <div className={open ? "bar open bar1" : "bar bar1"}></div>
        <div className={open ? "bar open bar2" : "bar bar2"}></div>
        <div className={open ? "bar open bar3" : "bar bar3"}></div>
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <nav className="mobile-nav">
          <Link href="/modules" className="mobile-link" onClick={() => setOpen(false)}>
            Modules
          </Link>

          <Link href="/videos" className="mobile-link" onClick={() => setOpen(false)}>
            Videos
          </Link>

          <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>
            About Us
          </Link>

          <button className="mobile-logout" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}
