"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./header.css";

export default function Header() {
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  // Close account dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="header">
      <Link href="/" className="header-logo">
        <div className="header-logo-mark">
          <Image
            src="/logo.svg"
            alt="Bodha"
            width={24}
            height={24}
            style={{ position: "relative", zIndex: 1 }}
          />
        </div>
        <span className="header-logo-text">Bodha</span>
      </Link>

      {/* Desktop navigation */}
      <nav className="header-nav desktop-nav">
        <Link href="/modules" className="nav-link">{t("courses")}</Link>
        <Link href="/vcfo" className="nav-link">{t("virtualCfo")}</Link>
        <Link href="/venture" className="nav-link">{t("ventureCapital")}</Link>
        <Link href="/tools" className="nav-link">{t("tools")}</Link>
        <Link href="#" className="nav-link">{t("insights")}</Link>
        <Link href="/about" className="nav-link">{t("aboutUs")}</Link>

        <div className="account-wrapper" ref={accountRef}>
          <button
            className="account-btn"
            onClick={() => setAccountOpen(!accountOpen)}
          >
            {t("account")}
            <span className={`account-arrow ${accountOpen ? "open" : ""}`}>&#9662;</span>
          </button>
          {accountOpen && (
            <div className="account-dropdown">
              <button
                className="dropdown-item"
                onClick={() => {
                  setLang(lang === "en" ? "kn" : "en");
                  setAccountOpen(false);
                }}
              >
                {lang === "en" ? "ಕನ್ನಡ" : "English"}
              </button>
              <Link
                href="#"
                className="dropdown-item"
                onClick={() => setAccountOpen(false)}
              >
                {t("settings")}
              </Link>
              <button
                className="dropdown-item dropdown-logout"
                onClick={() => {
                  setAccountOpen(false);
                  handleLogout();
                }}
              >
                {t("logout")}
              </button>
            </div>
          )}
        </div>
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
            {t("courses")}
          </Link>
          <Link href="/vcfo" className="mobile-link" onClick={() => setOpen(false)}>
            {t("virtualCfo")}
          </Link>
          <Link href="/venture" className="mobile-link" onClick={() => setOpen(false)}>
            {t("ventureCapital")}
          </Link>
          <Link href="/tools" className="mobile-link" onClick={() => setOpen(false)}>
            {t("tools")}
          </Link>
          <Link href="#" className="mobile-link" onClick={() => setOpen(false)}>
            {t("insights")}
          </Link>
          <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>
            {t("aboutUs")}
          </Link>
          <button
            className="mobile-link"
            style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }}
            onClick={() => {
              setLang(lang === "en" ? "kn" : "en");
              setOpen(false);
            }}
          >
            {lang === "en" ? "ಕನ್ನಡ" : "English"}
          </button>
          <Link href="#" className="mobile-link" onClick={() => setOpen(false)}>
            {t("settings")}
          </Link>
          <button className="mobile-logout" onClick={handleLogout}>
            {t("logout")}
          </button>
        </nav>
      )}
    </header>
  );
}
