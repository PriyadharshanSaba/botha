"use client";

import "./landing.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TermsModal from "@/app/components/TermsModal";
import PrivacyModal from "@/app/components/PrivacyModal";

export default function LandingPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  return (
    <div className="landing">
      {/* NAV */}
      <nav className="landing-nav">
        <Link href="/" className="logo">
          <div className="logo-mark">
            <Image src="/logo.svg" alt="Bodha" width={24} height={24} style={{ position: "relative", zIndex: 1 }} />
          </div>
          <div className="logo-text">Bodha</div>
        </Link>
        <ul className="nav-links">
          <li><a href="#course">Courses</a></li>
          <li><Link href="/vcfo">Virtual CFO</Link></li>
          <li><Link href="/venture">Venture Capital</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li><a href="#services">Insights</a></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
        <div className="nav-cta">
          <Link href="/signin" className="btn-ghost">Sign In</Link>
          <span style={{ color: "rgba(0,0,0,0.15)", fontSize: 18 }}>|</span>
          <Link href="/signin?mode=signup" className="btn-primary">Sign Up</Link>
        </div>
      </nav>

      {/* FINANCE COURSE SECTION */}
      <section className="course-section" id="course">
        <div className="course-top reveal" ref={addRevealRef}>
          <div className="section-label">Our Flagship Program</div>
          <h2 className="section-title">
            The Personal Finance<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Course</em>
          </h2>
        </div>

        <div className="course-manifesto reveal" ref={addRevealRef}>
          <div className="manifesto-accent">&#10022;</div>
          <div className="manifesto-body">
            <h3>This course is <span className="strikeout">not</span> for people who want to gamble with their money.</h3>
            <p>If you&apos;re looking for hot tips, overnight returns, or the next &quot;100x coin&quot; — this isn&apos;t your place. Bodha is built for people who want to <strong>build real, lasting wealth</strong> — patiently, intelligently, and on solid foundations.</p>
          </div>
        </div>

        <div className="course-journey reveal" ref={addRevealRef}>
          <div className="journey-header">
            <div className="cover-stats">
              <div className="stat-pill"><strong>6</strong>Chapters</div>
              <div className="stat-pill"><strong>30+</strong>Real Examples</div>
              <div className="stat-pill"><strong>20+</strong>Data Tables</div>
              <div className="stat-pill"><strong>&infin;</strong>Potential</div>
            </div>
            <div className="section-label" style={{ marginBottom: 8 }}>The Journey</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 2.2vw, 36px)", fontWeight: 700, letterSpacing: "-1px", color: "var(--ink)" }}>
              From absolute beginner<br />to knowledgeable investor
            </h3>
            <p style={{ marginTop: 14, fontSize: 15, color: "#666", maxWidth: 460, lineHeight: 1.7, fontWeight: 300 }}>
              No finance background needed. We take you step by step through simplified, structured financial education designed to stick — and to work in real life.
            </p>
          </div>
          <div className="journey-steps">
            {[
              { num: "01", title: "Financial Foundations", desc: "Understand how money actually works — budgeting, cash flow, savings rate, and breaking bad money habits." },
              { num: "02", title: "Debt, Credit & Banking", desc: "Learn to use credit strategically, eliminate bad debt, and make your banking accounts work harder for you." },
              { num: "03", title: "Investing Fundamentals", desc: "Mutual funds, index funds, SIPs, bonds — demystified and explained in plain language with real examples." },
              { num: "04", title: "Stock Market Mastery", desc: "How equities work, reading financials, valuation basics, and building a portfolio that grows over decades." },
              { num: "05", title: "Tax, Insurance & Protection", desc: "Legal tax optimisation, the right coverage, and protecting everything you've built." },
              { num: "06", title: "Wealth Building Strategy", desc: "Long-term planning, real estate, retirement, and creating generational wealth on any income." },
            ].map((step) => (
              <div key={step.num} className="jstep">
                <div className="jstep-num">{step.num}</div>
                <div className="jstep-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="learn-first-banner reveal" ref={addRevealRef}>
          <div className="lfb-icon">&#128218;</div>
          <div className="lfb-body">
            <div className="lfb-tag">Words to live by</div>
            <blockquote className="lfb-quote">
              Invest in learning about the stock market <em>before</em> investing your hard-earned money in it.
            </blockquote>
            <p className="lfb-sub">The market rewards the informed and punishes the impulsive. Every hour you spend learning is compounding interest on your future self.</p>
          </div>
          <Link href="/signin?mode=signup" className="btn-big" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>Enroll Now &rarr;</Link>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="stand-for" id="about">
        <div className="stand-left reveal" ref={addRevealRef}>
          <div className="section-label">Our Philosophy</div>
          <h2 className="section-title">What we<br />stand for</h2>
          <p>We believe financial freedom isn&apos;t a privilege — it&apos;s a skill. Bodha was built to democratize world-class financial knowledge and give every individual the tools to build lasting wealth.</p>
          <div className="stand-values">
            <div className="value-item">
              <div className="value-icon">&#127919;</div>
              <div className="value-text">
                <h4>Clarity over complexity</h4>
                <p>We strip financial jargon down to plain, actionable insight you can actually use.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">&#129309;</div>
              <div className="value-text">
                <h4>Education first, always</h4>
                <p>We don&apos;t sell products — we teach skills. Your understanding comes before everything.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">&#128200;</div>
              <div className="value-text">
                <h4>Long-term thinking</h4>
                <p>We help you make decisions that compound — financially and mentally.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stand-right reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
          <span className="quote-mark">&ldquo;</span>
          <div className="stand-big-quote">
            The best investment<br />you can make is in<br /><em>understanding money</em><br />before it understands you.
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-head reveal" ref={addRevealRef}>
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Our Services</h2>
          </div>
          <Link href="/signin" className="btn-outline" style={{ flexShrink: 0 }}>View all &rarr;</Link>
        </div>
        <div className="services-grid">
          <div className="service-card featured reveal" ref={addRevealRef}>
            <div className="service-num">01 — Flagship</div>
            <div className="service-icon">&#127942;</div>
            <div className="service-name">Personal Finance Course</div>
            <div className="service-desc">Our cornerstone program. Modules covering budgeting, investing, tax planning, insurance, and building multi-generational wealth.</div>
            <div className="service-tag">Most Popular</div>
            <div className="service-arrow">&nearr;</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.1s" }}>
            <div className="service-num">02</div>
            <div className="service-icon">&#128188;</div>
            <div className="service-name">Virtual CFO</div>
            <div className="service-desc">On-demand CFO expertise for founders and HNIs. Cash flow, financial strategy, investor reports, and board-level decisions.</div>
            <div className="service-tag">For Founders</div>
            <div className="service-arrow">&nearr;</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.2s" }}>
            <div className="service-num">03</div>
            <div className="service-icon">&#128640;</div>
            <div className="service-name">Venture Capital</div>
            <div className="service-desc">Early-stage funding opportunities, curated deal flow, and a network of angels and VCs looking for India&apos;s next big story.</div>
            <div className="service-tag">Startup Focus</div>
            <div className="service-arrow">&nearr;</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.3s" }}>
            <div className="service-num">04</div>
            <div className="service-icon">&#128736;&#65039;</div>
            <div className="service-name">Finance Tools</div>
            <div className="service-desc">Calculators, trackers and planners — SIP optimizer, tax estimator, net worth tracker, retirement planner and more.</div>
            <div className="service-tag">Free to Use</div>
            <div className="service-arrow">&nearr;</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.4s" }}>
            <div className="service-num">05</div>
            <div className="service-icon">&#9997;&#65039;</div>
            <div className="service-name">Blog &amp; Insights</div>
            <div className="service-desc">Weekly deep dives on markets, personal finance, policy changes and expert commentary — written for humans, not textbooks.</div>
            <div className="service-tag">Weekly Content</div>
            <div className="service-arrow">&nearr;</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.5s", background: "var(--cream)", borderColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" as const }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, marginBottom: 16 }}>&#10022;</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 10, color: "var(--ink)" }}>More coming soon</div>
            <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>We&apos;re always building. Join the waitlist for early access to new offerings.</div>
            <Link href="/signin?mode=signup" className="btn-primary" style={{ marginTop: 20 }}>Join Waitlist</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div style={{ textAlign: "center" }} className="reveal" ref={addRevealRef}>
          <div className="section-label" style={{ justifyContent: "center", color: "var(--gold)" }}>Client Stories</div>
          <h2 className="section-title" style={{ color: "#fff" }}>What our members say</h2>
        </div>
        <div className="testimonials-grid">
          {[
            { text: "Bodha completely rewired how I think about money. I cleared my debt in 14 months and now have a real investment strategy. Life-changing.", name: "Priya Sharma", role: "Product Manager, Bengaluru", initial: "P", delay: "0.05s" },
            { text: "The Virtual CFO service saved my startup during a rough funding round. Board-level clarity and execution speed we couldn't afford in-house.", name: "Rohan Kulkarni", role: "Co-Founder, TechNest", initial: "R", delay: "0.15s" },
            { text: "I've tried 5 finance apps and courses. Bodha is the first one that doesn't talk down to you. Genuinely smart, practical takes every week.", name: "Neha Iyer", role: "Freelance Designer, Mumbai", initial: "N", delay: "0.25s" },
            { text: "Their VC network helped us get our first term sheet within 3 months. The warm intros and pitch coaching made all the difference.", name: "Siddharth Rao", role: "Founder, GreenStack", initial: "S", delay: "0.1s" },
            { text: "The SIP optimizer tool helped me reallocate more efficiently. I used to guess — now I have a proper system. Free and genuinely brilliant.", name: "Aisha Mohammed", role: "Software Engineer, Hyderabad", initial: "A", delay: "0.2s" },
            { text: "From zero financial literacy to confidently managing my portfolio. Bodha gave me the education my MBA never did.", name: "Vikram Nair", role: "Senior Consultant, Delhi", initial: "V", delay: "0.3s" },
          ].map((t, i) => (
            <div key={i} className="tcard reveal" ref={addRevealRef} style={{ transitionDelay: t.delay }}>
              <div className="tcard-quote">&ldquo;</div>
              <div className="tcard-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="tcard-text">{t.text}</p>
              <div className="tcard-author">
                <div className="tcard-avatar">{t.initial}</div>
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner reveal" ref={addRevealRef}>
        <div>
          <div className="cta-title">Ready to take control<br />of your finances?</div>
          <div className="cta-sub">Start learning for free today. No credit card needed.</div>
        </div>
        <Link href="/signin?mode=signup" className="btn-dark">Sign Up — It&apos;s Free &rarr;</Link>
      </div>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              <div className="logo-mark">
                <Image src="/logo.svg" alt="Bodha" width={20} height={20} style={{ position: "relative", zIndex: 1 }} />
              </div>
              <div className="logo-text" style={{ color: "#fff" }}>Bodha</div>
            </Link>
            <p>Empowering individuals with the financial literacy they need to build lasting wealth — for free.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#course">Finance Course</a></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Finance Tools</Link></li>
              <li><a href="#services">Blog</a></li>
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
      {showTerms && (
        <TermsModal viewOnly onClose={() => setShowTerms(false)} />
      )}
      {showPrivacy && (
        <PrivacyModal onClose={() => setShowPrivacy(false)} />
      )}
    </div>
  );
}
