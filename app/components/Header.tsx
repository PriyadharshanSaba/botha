"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { clearAllNetworthKeys } from "@/app/lib/networth/cache";
import "./header.css";

export default function Header({
  loggedIn,
  onLoggedOut,
}: {
  loggedIn: boolean;
  onLoggedOut?: () => void;
}) {
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [canRefer, setCanRefer] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loggedIn) {
      setCanRefer(false);
      setReferralCode(null);
      return;
    }
    let cancelled = false;
    fetch("/api/me", { credentials: "include" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (cancelled || !data?.loggedIn) return;
        setCanRefer(!!data.canRefer);
        setReferralCode(data.referralCode ?? null);
      })
      .catch(() => { /* non-fatal */ });
    return () => { cancelled = true; };
  }, [loggedIn]);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    try { clearAllNetworthKeys(); } catch { /* localStorage unavailable */ }
    onLoggedOut?.();
    router.push("/");
    router.refresh(); // re-read uid cookie absence in RSC
  }

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
      <style>{`
        @media (max-width: 768px) {
          .header {
            display: flex !important;
            justify-content: flex-start;
            grid-template-columns: none;
          }
          .header-logo { margin-right: auto; }
          .hamburger { margin-left: 8px !important; }
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .desktop-nav { display: none !important; }
          .mobile-signin-btn { display: inline !important; }
        }
        .mobile-signin-btn { display: none; }
      `}</style>
      <Link href="/" className="header-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.PNG" alt="Bodha" style={{ height: "64px", width: "auto", display: "block" }} />
      </Link>

      {loggedIn ? (
        <>
          {/* Desktop — signed in */}
          <nav className="header-nav desktop-nav">
            <Link href="/modules" className="nav-link">{t("courses")}</Link>
            <Link href="/vcfo" className="nav-link">{t("virtualCfo")}</Link>
            <Link href="/venture" className="nav-link">{t("ventureCapital")}</Link>
            <Link href="/tools" className="nav-link">{t("tools")}</Link>
            <Link href="/blogs" className="nav-link">{t("insights")}</Link>
            <Link href="/about" className="nav-link">{t("aboutUs")}</Link>
            <div className="account-wrapper" ref={accountRef}>
              <button className="account-btn" onClick={() => setAccountOpen(!accountOpen)}>
                {t("account")}
                <span className={`account-arrow ${accountOpen ? "open" : ""}`}>&#9662;</span>
              </button>
              {accountOpen && (
                <div className="account-dropdown">
                  {canRefer && referralCode && (
                    <div className="dropdown-referral">
                      <span className="dropdown-referral-label">{t("referralCode")}</span>
                      <span className="dropdown-referral-code">{referralCode}</span>
                    </div>
                  )}
                  <Link href="/account" className="dropdown-item" onClick={() => setAccountOpen(false)}>
                    {t("account")}
                  </Link>
                  <button className="dropdown-item" onClick={() => { setLang(lang === "en" ? "kn" : "en"); setAccountOpen(false); }}>
                    {lang === "en" ? "ಕನ್ನಡ" : "English"}
                  </button>
                  <button className="dropdown-item dropdown-logout" onClick={() => { setAccountOpen(false); handleLogout(); }}>
                    {t("logout")}
                  </button>
                </div>
              )}
            </div>
          </nav>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className={open ? "bar open bar1" : "bar bar1"}></div>
            <div className={open ? "bar open bar2" : "bar bar2"}></div>
            <div className={open ? "bar open bar3" : "bar bar3"}></div>
          </button>
          {open && (
            <nav className="mobile-nav">
              <Link href="/modules" className="mobile-link" onClick={() => setOpen(false)}>{t("courses")}</Link>
              <Link href="/vcfo" className="mobile-link" onClick={() => setOpen(false)}>{t("virtualCfo")}</Link>
              <Link href="/venture" className="mobile-link" onClick={() => setOpen(false)}>{t("ventureCapital")}</Link>
              <Link href="/tools" className="mobile-link" onClick={() => setOpen(false)}>{t("tools")}</Link>
              <Link href="/blogs" className="mobile-link" onClick={() => setOpen(false)}>{t("insights")}</Link>
              <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>{t("aboutUs")}</Link>
              {canRefer && referralCode && (
                <div className="mobile-referral">
                  {t("referralCode")}: <strong>{referralCode}</strong>
                </div>
              )}
              <Link href="/account" className="mobile-link" onClick={() => setOpen(false)}>{t("account")}</Link>
              <button className="mobile-link" style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }} onClick={() => { setLang(lang === "en" ? "kn" : "en"); setOpen(false); }}>
                {lang === "en" ? "ಕನ್ನಡ" : "English"}
              </button>
              <button className="mobile-logout" onClick={() => { setOpen(false); handleLogout(); }}>{t("logout")}</button>
            </nav>
          )}
        </>
      ) : (
        <>
          {/* Desktop — signed out */}
          <ul className="nav-links">
            <li><Link href="/modules">{t("courses")}</Link></li>
            <li><Link href="/vcfo">{t("virtualCfo")}</Link></li>
            <li><Link href="/venture">{t("ventureCapital")}</Link></li>
            <li><Link href="/tools">{t("tools")}</Link></li>
            <li><Link href="/blogs">{t("insights")}</Link></li>
            <li><Link href="/about">{t("aboutUs")}</Link></li>
          </ul>
          <div className="nav-cta">
            <button onClick={() => setLang(lang === "en" ? "kn" : "en")} className="btn-ghost" style={{ fontFamily: lang !== "en" ? "inherit" : "'Noto Sans Kannada', sans-serif" }}>
              {lang === "en" ? "ಕನ್ನಡ" : "English"}
            </button>
            <span style={{ color: "rgba(0,0,0,0.15)", fontSize: 18 }}>|</span>
            <Link href="/signin" className="btn-primary">Sign In</Link>
          </div>
          <Link href="/signin" className="btn-ghost mobile-signin-btn">Sign In</Link>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className={open ? "bar open bar1" : "bar bar1"}></div>
            <div className={open ? "bar open bar2" : "bar bar2"}></div>
            <div className={open ? "bar open bar3" : "bar bar3"}></div>
          </button>
          {open && (
            <nav className="mobile-nav">
              <Link href="/modules" className="mobile-link" onClick={() => setOpen(false)}>{t("courses")}</Link>
              <Link href="/vcfo" className="mobile-link" onClick={() => setOpen(false)}>{t("virtualCfo")}</Link>
              <Link href="/venture" className="mobile-link" onClick={() => setOpen(false)}>{t("ventureCapital")}</Link>
              <Link href="/tools" className="mobile-link" onClick={() => setOpen(false)}>{t("tools")}</Link>
              <Link href="/blogs" className="mobile-link" onClick={() => setOpen(false)}>{t("insights")}</Link>
              <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>{t("aboutUs")}</Link>
              <button className="mobile-link" style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", width: "100%" }} onClick={() => { setLang(lang === "en" ? "kn" : "en"); setOpen(false); }}>
                {lang === "en" ? "ಕನ್ನಡ" : "English"}
              </button>
              <Link href="/signin" className="mobile-link" onClick={() => setOpen(false)}>Sign In</Link>
            </nav>
          )}
        </>
      )}
    </header>
  );
}
