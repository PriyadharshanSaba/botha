"use client";

import "./blogs.css";
import "../landing.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TermsModal from "../components/TermsModal";
import PrivacyModal from "../components/PrivacyModal";

const posts = [
  {
    slug: "india-finance-may29-2026",
    kicker: "Markets · Macro · India",
    title: "Hormuz, Rubio, and a Nifty That Gave It All Back",
    deck: "A week that looked like a breakout and ended as a retreat. The Iran ceasefire MoU pushed markets to weekly highs, only for Friday's selloff to erase every gain. Trade deal advanced, Coal India OFS launched, GDP release pushed to June 5.",
    date: "May 29, 2026",
    readTime: "14 min read",
  },
  {
    slug: "india-finance-may2026",
    kicker: "Markets · Macro · India",
    title: "Indian Markets: A Week That Went Nowhere, For Good Reason",
    deck: "The Nifty closed flat on the week but the story underneath — AI destroying Indian IT, crude above $100, a new Fed Chair, and Rubio's India visit — was anything but quiet. A full briefing on what happened and what comes next.",
    date: "May 22, 2026",
    readTime: "12 min read",
  },
  {
    slug: "startup-cashflow",
    kicker: "Startups · Finance · Operations",
    title: "Most Startups Don't Run Out of Ideas. They Run Out of Cash.",
    deck: "Cashflow is the single most important number in your business, and the one most founders understand last. What it is, why it kills companies, and how to manage it at every stage.",
    date: "May 5, 2026",
    readTime: "9 min read",
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
    slug: "rupee-managed-decline",
    kicker: "Currency · Macroeconomics · India",
    title: "The Rupee's Managed Decline. And Why India Should Be Worried",
    deck: "India is growing at 6.5% a year. Its stock market is among the largest in the world. And yet, its currency has lost nearly 9% of its value in twelve months. This paradox deserves an honest answer.",
    date: "April 21, 2026",
    readTime: "8 min read",
  },
];

export default function BlogsPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

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
              <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
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
