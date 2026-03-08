"use client";

import "./landing.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const revealRefs = useRef<HTMLElement[]>([]);

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
        <Link href="/" className="landing-logo">
          <Image src="/logo.svg" alt="Bodha" width={32} height={32} />
          <span className="landing-logo-text">Bodha</span>
        </Link>
        <div className="landing-nav-cta">
          <Link href="/signin" className="landing-btn-ghost">Log in</Link>
          <Link href="/signin" className="landing-btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="landing-hero">
        <div className="landing-hero-bg" />
        <div className="landing-hero-dots" />
        <div className="landing-hero-left">
          <div className="landing-hero-badge">Free Financial Education</div>
          <h1 className="landing-hero-title">
            Master Your<br />
            <em>Financial Future</em>
          </h1>
          <p className="landing-hero-sub">
            Learn personal finance from scratch — budgeting, investing, stock markets, and wealth building. Simplified, structured, and completely free.
          </p>
          <div className="landing-hero-actions">
            <Link href="/signin" className="landing-btn-big">Start Learning Free &rarr;</Link>
            <a href="#course" className="landing-btn-outline">Explore Courses</a>
          </div>
          <div className="landing-hero-stats">
            <div className="landing-stat">
              <div className="landing-stat-num">3<span>+</span></div>
              <div className="landing-stat-label">Courses</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-num">100<span>%</span></div>
              <div className="landing-stat-label">Free</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-num">10<span>+</span></div>
              <div className="landing-stat-label">Chapters</div>
            </div>
          </div>
        </div>

        {/* Hero right panel - module preview */}
        <div className="landing-hero-right">
          <div className="landing-hero-panel">
            <div className="landing-hp-header">
              <div className="landing-hp-header-left">
                <div className="landing-hp-label">Learning Path</div>
                <div className="landing-hp-title">Personal Finance</div>
              </div>
              <div className="landing-hp-badge">Free</div>
            </div>
            <div className="landing-hp-modules">
              <div className="landing-hp-module">
                <div className="landing-hp-mod-num done">01</div>
                <div className="landing-hp-mod-info">
                  <div className="landing-hp-mod-name">Money 101</div>
                  <div className="landing-hp-mod-sub">Budgeting &amp; savings fundamentals</div>
                </div>
                <span>&#10003;</span>
              </div>
              <div className="landing-hp-module">
                <div className="landing-hp-mod-num active">02</div>
                <div className="landing-hp-mod-info">
                  <div className="landing-hp-mod-name">Budgeting 101</div>
                  <div className="landing-hp-mod-sub">Take control of your cash flow</div>
                </div>
                <span style={{ color: "#0ea5a0" }}>&#9654;</span>
              </div>
              <div className="landing-hp-module">
                <div className="landing-hp-mod-num locked">03</div>
                <div className="landing-hp-mod-info">
                  <div className="landing-hp-mod-name locked-text">Stock Market</div>
                  <div className="landing-hp-mod-sub">Coming up next</div>
                </div>
                <span style={{ color: "#ccc" }}>&#128274;</span>
              </div>
            </div>
            <div className="landing-hp-footer">
              <div className="landing-hp-progress-wrap">
                <div className="landing-hp-progress-label">1 of 3 modules completed</div>
                <div className="landing-hp-progress-bar">
                  <div className="landing-hp-progress-fill" />
                </div>
              </div>
              <Link href="/signin" className="landing-hp-enroll">Continue</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="landing-marquee">
        <div className="landing-marquee-inner">
          {["Budgeting", "Investing", "Stock Market", "Mutual Funds", "Tax Planning", "Wealth Building", "Personal Finance", "Financial Freedom",
            "Budgeting", "Investing", "Stock Market", "Mutual Funds", "Tax Planning", "Wealth Building", "Personal Finance", "Financial Freedom",
          ].map((item, i) => (
            <span key={i} className="landing-marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* COURSE SECTION */}
      <section className="landing-section landing-course" id="course">
        <div className="landing-course-top landing-reveal" ref={addRevealRef}>
          <div className="landing-section-label">Our Courses</div>
          <h2 className="landing-section-title">
            The Personal Finance<br /><em style={{ fontStyle: "italic", color: "#0ea5a0" }}>Course</em>
          </h2>
        </div>

        <div className="landing-manifesto landing-reveal" ref={addRevealRef}>
          <div className="landing-manifesto-accent">&#10022;</div>
          <div className="landing-manifesto-body">
            <h3>This course is <span className="landing-strikeout">not</span> for people who want to gamble with their money.</h3>
            <p>If you&apos;re looking for hot tips, overnight returns, or the next &quot;100x coin&quot; — this isn&apos;t your place. Bodha is built for people who want to <strong>build real, lasting wealth</strong> — patiently, intelligently, and on solid foundations.</p>
          </div>
        </div>

        <div className="landing-journey landing-reveal" ref={addRevealRef}>
          <div>
            <div className="landing-section-label" style={{ marginBottom: 8 }}>The Journey</div>
            <h3 style={{ fontSize: "clamp(24px, 2.2vw, 36px)", fontWeight: 700, letterSpacing: "-1px", color: "#0f172a" }}>
              From absolute beginner<br />to knowledgeable investor
            </h3>
            <p style={{ marginTop: 14, fontSize: 15, color: "#666", maxWidth: 460, lineHeight: 1.7, fontWeight: 300 }}>
              No finance background needed. We take you step by step through simplified, structured financial education designed to stick — and to work in real life.
            </p>
          </div>
          <div className="landing-journey-steps">
            {[
              { num: "01", title: "Money 101", desc: "Understand how money actually works — income, expenses, savings rate, and breaking bad money habits." },
              { num: "02", title: "Budgeting 101", desc: "Learn to budget effectively, track spending, and build a system that works for your lifestyle." },
              { num: "03", title: "Stock Market", desc: "How equities work, reading financials, valuation basics, and building a portfolio that grows over decades." },
              { num: "04", title: "Investing Fundamentals", desc: "Mutual funds, index funds, SIPs, bonds — demystified and explained in plain language with real examples." },
              { num: "05", title: "Tax & Insurance", desc: "Legal tax optimisation, the right coverage, and protecting everything you've built." },
              { num: "06", title: "Wealth Building", desc: "Long-term planning, real estate, retirement, and creating generational wealth on any income." },
            ].map((step) => (
              <div key={step.num} className="landing-jstep">
                <div className="landing-jstep-num">{step.num}</div>
                <div className="landing-jstep-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="landing-lfb landing-reveal" ref={addRevealRef}>
          <div className="landing-lfb-icon">&#128218;</div>
          <div className="landing-lfb-body">
            <div className="landing-lfb-tag">Words to live by</div>
            <blockquote className="landing-lfb-quote">
              Invest in learning about the stock market <em>before</em> investing your hard-earned money in it.
            </blockquote>
            <p className="landing-lfb-sub">The market rewards the informed and punishes the impulsive. Every hour you spend learning is compounding interest on your future self.</p>
          </div>
          <Link href="/signin" className="landing-btn-big" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>Enroll Now &rarr;</Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="landing-section landing-values" id="about">
        <div className="landing-values-left landing-reveal" ref={addRevealRef}>
          <div className="landing-section-label">Our Philosophy</div>
          <h2 className="landing-section-title">What Bodha<br />stands for</h2>
          <p>We believe financial literacy isn&apos;t a privilege — it&apos;s a skill. Bodha was built to democratize world-class financial knowledge and give every individual the tools to build lasting wealth.</p>
          <div className="landing-values-list">
            <div className="landing-value-item">
              <div className="landing-value-icon">&#127919;</div>
              <div className="landing-value-text">
                <h4>Clarity over complexity</h4>
                <p>We strip financial jargon down to plain, actionable insight you can actually use.</p>
              </div>
            </div>
            <div className="landing-value-item">
              <div className="landing-value-icon">&#129309;</div>
              <div className="landing-value-text">
                <h4>Education first, always</h4>
                <p>We don&apos;t sell products — we teach skills. Your understanding comes before everything.</p>
              </div>
            </div>
            <div className="landing-value-item">
              <div className="landing-value-icon">&#128200;</div>
              <div className="landing-value-text">
                <h4>Long-term thinking</h4>
                <p>We help you make decisions that compound — financially and mentally.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-values-right landing-reveal" ref={addRevealRef}>
          <span className="landing-quote-mark">&ldquo;</span>
          <div className="landing-big-quote">
            The best investment<br />you can make is in<br /><em>understanding money</em><br />before it understands you.
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="landing-section landing-how">
        <div style={{ textAlign: "center" }} className="landing-reveal" ref={addRevealRef}>
          <div className="landing-section-label" style={{ justifyContent: "center" }}>How It Works</div>
          <h2 className="landing-section-title">Simple. Structured. Free.</h2>
        </div>
        <div className="landing-how-grid">
          {[
            { num: "1", title: "Sign Up", desc: "Create your free account in seconds with just your email." },
            { num: "2", title: "Pick a Module", desc: "Start with Money 101 or jump to the topic that interests you." },
            { num: "3", title: "Learn at Your Pace", desc: "Read through bite-sized chapters designed for real understanding." },
            { num: "4", title: "Build Wealth", desc: "Apply what you learn and watch your financial confidence grow." },
          ].map((step) => (
            <div key={step.num} className="landing-how-step">
              <div className="landing-step-circle">{step.num}</div>
              <div className="landing-step-title">{step.title}</div>
              <div className="landing-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="landing-section landing-testimonials">
        <div style={{ textAlign: "center" }} className="landing-reveal" ref={addRevealRef}>
          <div className="landing-section-label" style={{ justifyContent: "center" }}>Learner Stories</div>
          <h2 className="landing-section-title">What our learners say</h2>
        </div>
        <div className="landing-tgrid">
          {[
            { text: "Bodha completely rewired how I think about money. I cleared my debt in 14 months and now have a real investment strategy. Life-changing.", name: "Priya S.", role: "Product Manager, Bengaluru", initial: "P" },
            { text: "I've tried 5 finance apps and courses. Bodha is the first one that doesn't talk down to you. Genuinely smart, practical content every chapter.", name: "Neha I.", role: "Freelance Designer, Mumbai", initial: "N" },
            { text: "From zero financial literacy to confidently managing my portfolio in under a year. Bodha gave me the education I never got in school.", name: "Vikram N.", role: "Senior Consultant, Delhi", initial: "V" },
          ].map((t, i) => (
            <div key={i} className="landing-tcard landing-reveal" ref={addRevealRef}>
              <div className="landing-tcard-quote">&ldquo;</div>
              <div className="landing-tcard-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="landing-tcard-text">{t.text}</p>
              <div className="landing-tcard-author">
                <div className="landing-tcard-avatar">{t.initial}</div>
                <div>
                  <div className="landing-tcard-name">{t.name}</div>
                  <div className="landing-tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="landing-cta landing-reveal" ref={addRevealRef}>
        <div>
          <div className="landing-cta-title">Ready to take control<br />of your finances?</div>
          <div className="landing-cta-sub">Start learning for free today. No credit card needed.</div>
        </div>
        <Link href="/signin" className="landing-btn-dark">Sign Up Free &rarr;</Link>
      </div>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="landing-footer-top">
          <div className="landing-footer-brand">
            <Link href="/" className="landing-footer-brand-name">
              <Image src="/logo.svg" alt="Bodha" width={28} height={28} />
              <span>Bodha</span>
            </Link>
            <p>Empowering individuals with the financial literacy they need to build lasting wealth — for free.</p>
          </div>
          <div className="landing-footer-col">
            <h5>Learning</h5>
            <ul>
              <li><a href="#course">All Courses</a></li>
              <li><a href="#course">Money 101</a></li>
              <li><a href="#course">Budgeting 101</a></li>
              <li><a href="#course">Stock Market</a></li>
            </ul>
          </div>
          <div className="landing-footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><Link href="/signin">Sign In</Link></li>
            </ul>
          </div>
        </div>
        <div className="landing-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bodha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
