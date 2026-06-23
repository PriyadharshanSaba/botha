"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TermsModal from "../components/TermsModal";
import PrivacyModal from "../components/PrivacyModal";

export type BlogCard = {
  slug: string;
  kicker: string;
  title: string;
  deck: string;
  dateLabel: string;
  readTime: string;
};

export default function BlogsList({ posts }: { posts: BlogCard[] }) {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }

  return (
    <div className="blogs-page">
      {/* PAGE HEADER */}
      <div className="blogs-page-header">
        <div className="blogs-page-header-inner">
          <div>
            <div className="blogs-header-label">Bodha Blogs</div>
            <h1>
              Finance, <em>explained</em>
            </h1>
            <p className="blogs-page-sub">
              Long-form analysis on markets, macroeconomics, and personal finance — written for the informed general reader.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(40,167,69,0.08)",
                border: "1px solid rgba(40,167,69,0.18)",
                borderRadius: 100,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 500,
                color: "#2d7a3a",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2d7a3a",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {posts.length} article{posts.length !== 1 ? "s" : ""} published
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
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
                <span className="blog-card-date">
                  {post.dateLabel} &nbsp;·&nbsp; {post.readTime}
                </span>
                <span className="blog-card-read">Read &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
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
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms of Use</a>
              </li>
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
