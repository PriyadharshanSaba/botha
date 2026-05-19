"use client";

import "./blogs.css";
import "../landing.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import TermsModal from "../components/TermsModal";
import PrivacyModal from "../components/PrivacyModal";

const posts = [
  {
    slug: "rupee-managed-decline",
    kicker: "Currency · Macroeconomics · India",
    title: "The Rupee's Managed Decline. And Why India Should Be Worried",
    deck: "India is growing at 6.5% a year. Its stock market is among the largest in the world. And yet, its currency has lost nearly 9% of its value in twelve months. This paradox deserves an honest answer.",
    date: "April 21, 2026",
    readTime: "8 min read",
  },
  {
    slug: "dpiit-startup-recognition",
    kicker: "Startups · Policy · Tax",
    title: "Your Startup Could Be Saving Lakhs in Taxes. Most Founders Don't Know It.",
    deck: "DPIIT Startup Recognition is free, takes under a week, and unlocks benefits worth crores over the life of your company. Everything you need to know — updated for the February 2026 notification.",
    date: "April 28, 2026",
    readTime: "7 min read",
  },
  {
    slug: "startup-cashflow",
    kicker: "Startups · Finance · Operations",
    title: "Most Startups Don't Run Out of Ideas. They Run Out of Cash.",
    deck: "Cashflow is the single most important number in your business, and the one most founders understand last. What it is, why it kills companies, and how to manage it at every stage.",
    date: "May 5, 2026",
    readTime: "9 min read",
  },
];

export default function BlogsPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    fetch("/api/me").then(r => r.json()).then(d => setLoggedIn(d.loggedIn));
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) setAccountOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    setLoggedIn(false);
    router.push("/");
    router.refresh();
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }

  return (
    <div className="blogs-page">
      {/* ── NAV ── */}
      <nav className="landing-nav">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-2.jpeg" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
        </Link>
        {loggedIn ? (
          <div className="about-nav-right">
            <Link href="/modules" className="about-nav-link">{t("courses")}</Link>
            <Link href="/vcfo" className="about-nav-link">{t("virtualCfo")}</Link>
            <Link href="/venture" className="about-nav-link">{t("ventureCapital")}</Link>
            <Link href="/tools" className="about-nav-link">{t("tools")}</Link>
            <Link href="/blogs" className="about-nav-link" style={{ color: "var(--gold)" }}>{t("insights")}</Link>
            <Link href="/about" className="about-nav-link">{t("aboutUs")}</Link>
            <div className="about-account-wrapper" ref={accountRef}>
              <button className="about-account-btn" onClick={() => setAccountOpen(!accountOpen)}>
                {t("account")}
                <span className={`about-account-arrow ${accountOpen ? "open" : ""}`}>&#9662;</span>
              </button>
              {accountOpen && (
                <div className="about-account-dropdown">
                  <button className="about-dropdown-item" onClick={() => { setLang(lang === "en" ? "kn" : "en"); setAccountOpen(false); }}>
                    {lang === "en" ? "ಕನ್ನಡ" : "English"}
                  </button>
                  <Link href="#" className="about-dropdown-item" onClick={() => setAccountOpen(false)}>{t("settings")}</Link>
                  <button className="about-dropdown-item about-dropdown-logout" onClick={() => { setAccountOpen(false); handleLogout(); }}>
                    {t("logout")}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <ul className="nav-links">
              <li><Link href="/modules">Courses</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/blogs" style={{ color: "var(--gold)" }}>Blogs</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
            <div className="nav-cta">
              <Link href="/signin" className="btn-ghost">Sign In</Link>
              <span style={{ color: "rgba(0,0,0,0.15)", fontSize: 18 }}>|</span>
              <Link href="/signin" className="btn-primary">Sign Up</Link>
            </div>
          </>
        )}
      </nav>

      {/* ── PAGE HEADER ── */}
      <div className="blogs-page-header">
        <div className="blogs-page-header-inner">
          <div>
            <div className="blogs-header-label">Bodha Blogs</div>
            <h1>Finance, <em>explained</em></h1>
            <p className="blogs-page-sub">
              Long-form analysis on markets, macroeconomics, and personal finance — written for the informed general reader.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(40,167,69,0.08)", border: "1px solid rgba(40,167,69,0.18)", borderRadius: 100, padding: "6px 14px", fontSize: 12, fontWeight: 500, color: "#2d7a3a", whiteSpace: "nowrap" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2d7a3a", flexShrink: 0, display: "inline-block" }} />
              {posts.length} article{posts.length !== 1 ? "s" : ""} published
            </div>
          </div>
        </div>
      </div>

      {/* ── ARTICLES GRID ── */}
      <section className="blogs-section">
        <div className="blogs-grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="blog-card"
              ref={addRevealRef as (el: HTMLAnchorElement | null) => void}
              style={{ transitionDelay: `${0.05 * (i + 1)}s` }}
            >
              <div className="blog-card-kicker">{post.kicker}</div>
              <div className="blog-card-title">{post.title}</div>
              <div className="blog-card-deck">{post.deck}</div>
              <div className="blog-card-meta">
                <span className="blog-card-date">{post.date} &nbsp;·&nbsp; {post.readTime}</span>
                <span className="blog-card-read">Read &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-2.jpeg" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
            </Link>
            <p>Empowering individuals with the financial literacy they need to build lasting wealth.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/modules">Finance Course</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Finance Tools</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/signin">Sign In</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms of Use</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bodha. All rights reserved.</p>
          <a href="#">Back to top &uarr;</a>
        </div>
      </footer>

      {showTerms && <TermsModal viewOnly onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </div>
  );
}
