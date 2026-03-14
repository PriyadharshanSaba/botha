"use client";

import "./vcfo.css";
import "../landing.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function VcfoPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [checkedChallenges, setCheckedChallenges] = useState<string[]>([]);
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    fetch("/api/me").then((r) => r.json()).then((d) => setLoggedIn(d.loggedIn));
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }

  function toggleChallenge(value: string) {
    setCheckedChallenges((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function handleSubmit() {
    setSubmitted(true);
    document.getElementById("vcfo-request")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const services = [
    { num: "01", icon: "\u{1F4CB}", name: "MIS & Financial Reporting", desc: "Accurate, board-ready financial reports every month \u2014 P&L, balance sheet, cash flow, and KPI dashboards customised to your business.", bullets: ["Monthly P&L and balance sheet", "Custom KPI dashboard", "Budget vs actuals variance", "Board deck support"], tag: "Monthly" },
    { num: "02", icon: "\u{1F4B8}", name: "Cash Flow Management", desc: "We model your runway, identify cash leaks, and build rolling forecasts so you\u2019re never caught off guard by a surprise shortfall.", bullets: ["13-week rolling cash forecast", "Working capital optimisation", "Vendor & receivables management", "Burn rate monitoring"], tag: "Ongoing" },
    { num: "03", icon: "\u{1F680}", name: "Fundraise Support", desc: "We prepare you end-to-end for investor conversations \u2014 from financial models and data rooms to term sheet reviews and due diligence.", bullets: ["Investor-grade financial model", "Data room preparation", "Due diligence support", "Term sheet & cap table review"], tag: "Milestone-based" },
    { num: "04", icon: "\u{1F4D0}", name: "Budgeting & Forecasting", desc: "Annual operating plans, scenario models, and rolling forecasts that align your team to the numbers that actually matter.", bullets: ["Annual operating budget", "3-scenario financial model", "Department-level budgets", "Quarterly reforecast"], tag: "Quarterly" },
    { num: "05", icon: "\u{1F9FE}", name: "Compliance & Statutory", desc: "We track every deadline \u2014 GST filings, TDS returns, ROC compliance, audit coordination and tax planning \u2014 nothing slips through.", bullets: ["GST & TDS filing oversight", "ROC annual filings", "Statutory audit coordination", "Direct & indirect tax planning"], tag: "Ongoing" },
    { num: "06", icon: "\u{1F3D7}\uFE0F", name: "Finance Function Setup", desc: "For early-stage companies that need to build from scratch \u2014 we design your accounting stack, SOP, and processes to scale cleanly.", bullets: ["Accounting software setup", "Financial SOPs & controls", "Chart of accounts design", "Finance team hiring support"], tag: "One-time" },
    { num: "07", icon: "\u{1F310}", name: "Outsourced Accounting for Global Companies", desc: "End-to-end bookkeeping and financial statement preparation for global companies \u2014 accurate books, on time, every month.", bullets: ["Day-to-day bookkeeping & ledger maintenance", "Preparation of financial statements (P&L, balance sheet, cash flow)", "Month-end & year-end close process", "Bank reconciliation & accounts payable / receivable", "Audit-ready books & statutory reporting support"], tag: "Ongoing" },
    { num: "08", icon: "\u{1F4DD}", name: "LLP & Company Registrations", desc: "We handle the complete registration process for LLPs and private limited companies \u2014 from name approval to certificate of incorporation.", bullets: ["Private Limited Company incorporation", "LLP formation & LLP agreement drafting", "DIN, DSC & MCA filing", "MOA, AOA & statutory documentation", "PAN, TAN & GST registration post-incorporation"], tag: "One-time" },
  ];

  const testimonials = [
    { text: "Bodha\u2019s Virtual CFO service saved my startup during a rough funding round. Their team had board-level clarity and execution speed that we simply couldn\u2019t afford in-house. Within 3 months, we closed our Series A.", name: "Rohan Kulkarni", role: "Co-Founder, TechNest", context: "Series A \u00B7 SaaS", initial: "R" },
    { text: "We were burning cash without knowing exactly where. Within 6 weeks of onboarding Bodha, we had our first 13-week cash flow model, identified \u20B918L in annual savings, and felt genuinely in control for the first time.", name: "Ananya Mehta", role: "Founder & CEO, KraftLiving", context: "Seed Stage \u00B7 D2C", initial: "A" },
    { text: "Our compliance was a mess \u2014 GST, TDS, ROC \u2014 all behind. Bodha cleaned it all up in 45 days, filed everything that was pending, and set up systems so it never happens again. I\u2019d recommend them to any founder.", name: "Vikram Nair", role: "Managing Director, NairLogix", context: "Growth Stage \u00B7 Manufacturing", initial: "V" },
    { text: "The fundraise support was exceptional. They built a model that could handle every investor question we got \u2014 and the data room was so clean, our lead investor said it was the best-prepared deck they\u2019d seen at pre-seed.", name: "Sneha Iyer", role: "Co-Founder, GreenStack", context: "Pre-Seed \u00B7 Climate Tech", initial: "S" },
    { text: "I was skeptical about a \u2018virtual\u2019 CFO. But their team knows our P&L better than I do. Monthly reports land on time, every time. They\u2019ve become a genuine thinking partner, not just a reporting function.", name: "Karthik Balan", role: "CEO, Primus Consulting", context: "Series B \u00B7 Professional Services", initial: "K" },
    { text: "We hired Bodha to help us set up our finance function from zero \u2014 accounting stack, chart of accounts, SOPs. They were done in 3 weeks and we\u2019ve had clean books ever since. Worth every rupee.", name: "Priya Sharma", role: "Founder, Runo Health", context: "Early Stage \u00B7 Healthtech", initial: "P" },
  ];

  const challenges = [
    { value: "reporting", label: "No clear financial reporting" },
    { value: "cashflow", label: "Cash flow visibility" },
    { value: "fundraise", label: "Preparing to raise funding" },
    { value: "compliance", label: "Compliance & tax backlogs" },
    { value: "forecast", label: "Budgeting & forecasting" },
    { value: "setup", label: "Setting up finance from scratch" },
    { value: "investor", label: "Investor reporting & board decks" },
    { value: "costs", label: "Cost control & profitability" },
  ];

  return (
    <div className="vcfo-page">
      {/* NAV */}
      <nav className="landing-nav">
        <Link href="/" className="logo">
          <div className="logo-mark">
            <Image src="/logo.svg" alt="Bodha" width={24} height={24} style={{ position: "relative", zIndex: 1 }} />
          </div>
          <div className="logo-text">Bodha</div>
        </Link>
        {loggedIn ? (
          <div className="about-nav-right">
            <Link href="/modules" className="about-nav-link">{t("courses")}</Link>
            <Link href="/vcfo" className="about-nav-link" style={{ color: "var(--gold)" }}>{t("virtualCfo")}</Link>
            <Link href="/venture" className="about-nav-link">{t("ventureCapital")}</Link>
            <Link href="/tools" className="about-nav-link">{t("tools")}</Link>
            <Link href="#" className="about-nav-link">{t("insights")}</Link>
            <Link href="/about" className="about-nav-link">{t("aboutUs")}</Link>
            <div className="about-account-wrapper" ref={accountRef}>
              <button className="about-account-btn" onClick={() => setAccountOpen(!accountOpen)}>
                {t("account")}
                <span className={`about-account-arrow ${accountOpen ? "open" : ""}`}>&#9662;</span>
              </button>
              {accountOpen && (
                <div className="about-account-dropdown">
                  <button className="about-dropdown-item" onClick={() => { setLang(lang === "en" ? "kn" : "en"); setAccountOpen(false); }}>
                    {lang === "en" ? "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1" : "English"}
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
              <li><Link href="/#course">Courses</Link></li>
              <li><Link href="/vcfo" style={{ color: "var(--gold)" }}>Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/#services">Insights</Link></li>
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

      {/* HERO */}
      <div className="vcfo-hero">
        <div className="vcfo-hero-dots" />
        <div className="vcfo-hero-left">
          <div className="vcfo-hero-badge">Virtual CFO Services</div>
          <h1 className="vcfo-hero-title">
            Board-level finance,<br />without the <em>full-time</em><br />cost.
          </h1>
          <p className="vcfo-hero-sub">
            Most growing businesses outgrow their bookkeeper before they can afford a CFO. We fill that gap &mdash; embedded financial leadership that brings clarity, structure and strategy exactly when you need it.
          </p>
          <div className="vcfo-hero-actions">
            <a href="#vcfo-request" className="btn-big" style={{ textDecoration: "none" }}>Request a Virtual CFO &rarr;</a>
            <a href="#vcfo-services" className="btn-outline" style={{ textDecoration: "none" }}>See what&apos;s included</a>
          </div>
          <div className="vcfo-hero-stats">
            <div className="vcfo-stat"><div className="vcfo-stat-num">7<span>+</span></div><div className="vcfo-stat-label">Yrs Avg Experience</div></div>
            <div className="vcfo-stat"><div className="vcfo-stat-num">4.9<span>&#9733;</span></div><div className="vcfo-stat-label">Client Rating</div></div>
            <div className="vcfo-stat"><div className="vcfo-stat-num">98<span>%</span></div><div className="vcfo-stat-label">Client Retention</div></div>
          </div>
        </div>
        <div className="vcfo-hero-right">
          <div className="vcfo-hero-cards">
            <div className="vcfo-hc">
              <div className="vcfo-hc-icon">&#128202;</div>
              <div><div className="vcfo-hc-title">Monthly MIS Report</div><div className="vcfo-hc-sub">Delivered by 5th of every month</div></div>
              <div className="vcfo-hc-val">&nearr;</div>
            </div>
            <div className="vcfo-hc">
              <div className="vcfo-hc-icon">&#127974;</div>
              <div><div className="vcfo-hc-title">Runway Extended</div><div className="vcfo-hc-sub">Avg. 4.2 months through cash optimisation</div></div>
              <div className="vcfo-hc-val">+4.2mo</div>
            </div>
            <div className="vcfo-hc">
              <div className="vcfo-hc-icon">&#129309;</div>
              <div><div className="vcfo-hc-title">Fundraise Readiness</div><div className="vcfo-hc-sub">Decks, data rooms &amp; investor Q&amp;A prep</div></div>
              <div className="vcfo-hc-val">Ready</div>
            </div>
            <div className="vcfo-hc">
              <div className="vcfo-hc-icon">&#9989;</div>
              <div><div className="vcfo-hc-title">Compliance On Track</div><div className="vcfo-hc-sub">GST, TDS, ROC &mdash; zero missed deadlines</div></div>
              <div className="vcfo-hc-val" style={{ color: "#2d7a3a" }}>100%</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="vcfo-services" id="vcfo-services">
        <div className="vcfo-services-head vcfo-reveal" ref={addRevealRef}>
          <div>
            <div className="vcfo-section-label">What We Do</div>
            <div className="vcfo-section-title">Everything a CFO<br />is supposed to own.</div>
          </div>
          <p>From day-to-day financial ops to board-level strategy &mdash; we cover the full spectrum so you can focus on building.</p>
        </div>
        <div className="vcfo-services-grid">
          {services.map((svc, i) => (
            <div key={i} className="vcfo-svc-card vcfo-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="vcfo-svc-num">{svc.num} &mdash;&mdash;</div>
              <div className="vcfo-svc-icon">{svc.icon}</div>
              <div className="vcfo-svc-name">{svc.name}</div>
              <div className="vcfo-svc-desc">{svc.desc}</div>
              <ul className="vcfo-svc-bullets">
                {svc.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <span className="vcfo-svc-tag">{svc.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="vcfo-how" id="vcfo-how">
        <div style={{ textAlign: "center" }} className="vcfo-reveal" ref={addRevealRef}>
          <div className="vcfo-section-label" style={{ justifyContent: "center" }}>The Process</div>
          <div className="vcfo-section-title">From onboarding to<br />outcomes in 2 weeks.</div>
        </div>
        <div className="vcfo-how-grid">
          {[
            { num: "01", title: "Discovery Call", desc: "We spend 30 minutes understanding your business, current finance setup, and the exact gaps you need filled." },
            { num: "02", title: "Proposal & Scope", desc: "We send a clear, fixed-scope engagement letter within 48 hours. No ambiguous retainers or scope creep." },
            { num: "03", title: "Onboarding", desc: "We integrate with your tools \u2014 Tally, Zoho, QuickBooks, or Google Sheets. Access, accounts, and first report within 14 days." },
            { num: "04", title: "Ongoing Partnership", desc: "Monthly reporting, weekly check-ins, and always-on support via email or WhatsApp. We work like we\u2019re on your payroll." },
          ].map((step, i) => (
            <div key={i} className="vcfo-how-step vcfo-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="vcfo-step-circle">{step.num}</div>
              <div className="vcfo-step-title">{step.title}</div>
              <div className="vcfo-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="vcfo-why" id="vcfo-why">
        <div className="vcfo-why-grid">
          <div className="vcfo-why-left vcfo-reveal" ref={addRevealRef}>
            <div className="vcfo-section-label">Why Bodha</div>
            <div className="vcfo-section-title">Finance that actually<br />moves the needle.</div>
            <p>Most Virtual CFO services give you a part-time accountant with a fancy title. We give you qualified finance professionals with serious pedigree, trained at the right institutions, tested in the real world and invested in your growth.</p>
            <div className="vcfo-why-values">
              {[
                { icon: "\u26A1", title: "Always-on, not intermittent", desc: "Dedicated point of contact available within hours, not days. You get a finance team, not a consultant who bills per email." },
                { icon: "\u{1FAF1}\u{1F3FD}", title: "Built around founders", desc: "We know what it\u2019s like to be resource-constrained and time-poor. Our work is designed to give you maximum clarity with minimum back-and-forth." },
                { icon: "\u{1F512}", title: "No conflicts, full confidentiality", desc: "NDAs on day one. Your financials stay inside your walls, always." },
                { icon: "\u{1F4C8}", title: "Investor-grade output", desc: "Every report and model we produce is built to withstand due diligence scrutiny \u2014 because it might need to." },
              ].map((v, i) => (
                <div key={i} className="vcfo-value-item">
                  <div className="vcfo-value-icon">{v.icon}</div>
                  <div className="vcfo-value-text">
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="vcfo-why-right vcfo-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            <span className="vcfo-big-quote-mark">&ldquo;</span>
            <div className="vcfo-big-quote">
              We don&apos;t just report<br />what happened &mdash; we help you<br /><em>decide what happens next.</em>
            </div>
            <p style={{ fontSize: 14, color: "#888", fontWeight: 300, lineHeight: 1.7, maxWidth: 360 }}>
              Our team comes from Big 4 backgrounds, with hands-on experience across sectors and business sizes. The kind of perspective that takes years to build and is hard to find anywhere else.
            </p>
            <div className="vcfo-why-stats">
              <div className="vcfo-why-stat"><div className="vcfo-why-stat-num">7<span>+</span></div><div className="vcfo-why-stat-label">Yrs avg. experience</div></div>
              <div className="vcfo-why-stat"><div className="vcfo-why-stat-num">2<span>+</span></div><div className="vcfo-why-stat-label">Countries served</div></div>
              <div className="vcfo-why-stat"><div className="vcfo-why-stat-num">98<span>%</span></div><div className="vcfo-why-stat-label">Client retention</div></div>
              <div className="vcfo-why-stat"><div className="vcfo-why-stat-num">0</div><div className="vcfo-why-stat-label">Missed deadlines</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="vcfo-testimonials">
        <div style={{ textAlign: "center" }} className="vcfo-reveal" ref={addRevealRef}>
          <div className="vcfo-section-label" style={{ justifyContent: "center", color: "var(--gold)" }}>Client Stories</div>
          <div className="vcfo-section-title" style={{ color: "#fff" }}>Founders who sleep<br />better at night.</div>
        </div>
        <div className="vcfo-tcards-grid">
          {testimonials.map((tc, i) => (
            <div key={i} className="vcfo-tcard vcfo-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="vcfo-tcard-quote">&ldquo;</div>
              <div className="vcfo-tcard-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="vcfo-tcard-text">{tc.text}</p>
              <div className="vcfo-tcard-author">
                <div className="vcfo-tcard-avatar">{tc.initial}</div>
                <div>
                  <div className="vcfo-tcard-name">{tc.name}</div>
                  <div className="vcfo-tcard-role">{tc.role}</div>
                  <div className="vcfo-tcard-context">{tc.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REQUEST FORM */}
      <section className="vcfo-form-section" id="vcfo-request">
        <div className="vcfo-form-layout">
          <div className="vcfo-form-left vcfo-reveal" ref={addRevealRef}>
            <div className="vcfo-section-label">Get Started</div>
            <div className="vcfo-section-title">Tell us about<br />your business.</div>
            <p>Fill in the form and we&apos;ll set up a no-obligation discovery call within 24 hours. No pitch, no hard sell &mdash; just a conversation about whether we&apos;re a fit.</p>
            <div className="vcfo-form-checklist">
              <div className="vcfo-form-check">Response within 24 hours, guaranteed</div>
              <div className="vcfo-form-check">30-minute discovery call, zero obligation</div>
              <div className="vcfo-form-check">Fixed-scope proposal, no hidden fees</div>
              <div className="vcfo-form-check">NDA signed before any data shared</div>
              <div className="vcfo-form-check">Onboarding in under 2 weeks</div>
            </div>
            <div className="vcfo-form-trust">
              <p><strong>Already have a CA or accountant?</strong> No problem. Our Virtual CFO works alongside your existing team &mdash; we handle strategy, reporting, and oversight; they handle execution.</p>
            </div>
          </div>

          <div className="vcfo-form-card vcfo-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            {!submitted ? (
              <>
                <h3>Request a Virtual CFO</h3>
                <p className="vcfo-form-desc">Takes 3 minutes. We&apos;ll reach out within 24 hours.</p>

                <div className="vcfo-field-row">
                  <div className="vcfo-field"><label>Your Name</label><input type="text" placeholder="Arjun Mehta" /></div>
                  <div className="vcfo-field"><label>Designation</label><input type="text" placeholder="Founder / CFO / Director" /></div>
                </div>
                <div className="vcfo-field-row">
                  <div className="vcfo-field"><label>Email Address</label><input type="email" placeholder="arjun@yourcompany.com" /></div>
                  <div className="vcfo-field"><label>Phone Number</label><input type="tel" placeholder="+91 98765 43210" /></div>
                </div>

                <div className="vcfo-form-divider" />

                <div className="vcfo-field-row">
                  <div className="vcfo-field"><label>Company Name</label><input type="text" placeholder="YourCo Pvt. Ltd." /></div>
                  <div className="vcfo-field">
                    <label>Industry</label>
                    <select defaultValue="">
                      <option value="" disabled>Select industry</option>
                      <option>SaaS / Software</option>
                      <option>D2C / E-commerce</option>
                      <option>Manufacturing</option>
                      <option>Professional Services</option>
                      <option>Healthtech</option>
                      <option>Fintech</option>
                      <option>Climate / Sustainability</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="vcfo-field-row">
                  <div className="vcfo-field">
                    <label>Company Stage</label>
                    <select defaultValue="">
                      <option value="" disabled>Select stage</option>
                      <option>Pre-revenue / Idea</option>
                      <option>Early Stage (0&ndash;1 Cr ARR)</option>
                      <option>Growth Stage (1&ndash;10 Cr ARR)</option>
                      <option>Scaling (10 Cr+ ARR)</option>
                      <option>Established Business</option>
                    </select>
                  </div>
                  <div className="vcfo-field">
                    <label>Current Monthly Revenue</label>
                    <select defaultValue="">
                      <option value="" disabled>Select range</option>
                      <option>Pre-revenue</option>
                      <option>Under &#8377;10L/month</option>
                      <option>&#8377;10L &ndash; &#8377;50L/month</option>
                      <option>&#8377;50L &ndash; &#8377;2Cr/month</option>
                      <option>&#8377;2Cr+ /month</option>
                    </select>
                  </div>
                </div>

                <div className="vcfo-form-divider" />

                <div className="vcfo-field">
                  <label>What are your biggest finance challenges? <span style={{ textTransform: "none", letterSpacing: 0, color: "#bbb", fontSize: 11 }}>(select all that apply)</span></label>
                  <div className="vcfo-challenge-grid">
                    {challenges.map((ch) => (
                      <label key={ch.value} className={`vcfo-challenge-item ${checkedChallenges.includes(ch.value) ? "checked" : ""}`}>
                        <input type="checkbox" checked={checkedChallenges.includes(ch.value)} onChange={() => toggleChallenge(ch.value)} />
                        {ch.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="vcfo-field">
                  <label>Primary Service of Interest</label>
                  <select defaultValue="">
                    <option value="" disabled>What do you need most right now?</option>
                    <option>MIS &amp; Financial Reporting</option>
                    <option>Cash Flow Management</option>
                    <option>Fundraise Support</option>
                    <option>Budgeting &amp; Forecasting</option>
                    <option>Compliance &amp; Statutory</option>
                    <option>Finance Function Setup</option>
                    <option>Full Virtual CFO Engagement</option>
                    <option>Not sure &mdash; need guidance</option>
                  </select>
                </div>

                <div className="vcfo-field">
                  <label>When do you need to get started?</label>
                  <select defaultValue="">
                    <option value="" disabled>Select timeline</option>
                    <option>Immediately (this week)</option>
                    <option>Within the month</option>
                    <option>Next quarter</option>
                    <option>Just exploring for now</option>
                  </select>
                </div>

                <div className="vcfo-field">
                  <label>Anything else we should know? <span style={{ textTransform: "none", letterSpacing: 0, color: "#bbb", fontSize: 11 }}>(optional)</span></label>
                  <textarea rows={3} placeholder="Tell us about your current finance setup, any specific goals, or what prompted you to look for a Virtual CFO&hellip;" />
                </div>

                <button className="vcfo-submit-btn" onClick={handleSubmit}>Request My Discovery Call &rarr;</button>
                <p style={{ marginTop: 12, fontSize: 11, color: "#bbb", textAlign: "center", lineHeight: 1.6 }}>
                  By submitting, you agree to our Privacy Policy. We&apos;ll never share your details or spam you.
                </p>
              </>
            ) : (
              <div className="vcfo-success-state show">
                <div className="vcfo-success-icon">&#9989;</div>
                <h3>Request received!</h3>
                <p>Thank you &mdash; we&apos;ll review your details and reach out within <strong>24 hours</strong> to schedule your discovery call. Check your inbox for a confirmation.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="vcfo-cta vcfo-reveal" ref={addRevealRef}>
        <div>
          <div className="vcfo-cta-title">Your business deserves<br />better finance.</div>
          <div className="vcfo-cta-sub">Take the first step towards financial clarity. First call is free.</div>
        </div>
        <a href="#vcfo-request" className="btn-dark" style={{ textDecoration: "none" }}>Book a Discovery Call &rarr;</a>
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
            <p>Empowering founders and businesses with the financial clarity they need to grow with confidence.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/#course">Finance Course</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Finance Tools</Link></li>
              <li><Link href="/#services">Blog</Link></li>
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
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bodha. All rights reserved.</p>
          <a href="#">Back to top &uarr;</a>
        </div>
      </footer>
    </div>
  );
}
