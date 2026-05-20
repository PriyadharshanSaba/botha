"use client";

import "../guide-article.css";
import "../../landing.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import TermsModal from "../../components/TermsModal";
import PrivacyModal from "../../components/PrivacyModal";

export default function CashflowArticlePage() {
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

  return (
    <div className="blog-article-page">
      {/* ── NAV ── */}
      <nav className="landing-nav">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
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

      {/* ── BACK LINK ── */}
      <div className="blog-back-bar">
        <Link href="/blogs" className="blog-back-link">&#8592; All articles</Link>
      </div>

      {/* ── ARTICLE ── */}
      <article className="blog-post-body">

        <div className="topbar">
          <span className="brand">Bodha Ventures</span>
          <span className="tag">Virtual CFO &amp; Startup Consultancy &nbsp;|&nbsp; April 2026</span>
        </div>

        <div className="hero-badge">Financial Operations &mdash; Founder&apos;s Guide</div>

        <h1>Most startups don&apos;t run out<br />of ideas. They run out of<br /><span>cash.</span></h1>

        <div className="hero-sub">
          Cashflow is the single most important number in your business, and the one most founders understand last. Here is what it is, why it kills companies, and how to manage it at every stage.
        </div>

        <div className="stat-row">
          <div className="stat-cell">
            <span className="big">70%</span>
            <span className="lbl">of startups cite running<br />out of capital at shutdown*</span>
          </div>
          <div className="stat-cell">
            <span className="big">13 wks</span>
            <span className="lbl">Cash floor trigger &mdash;<br />not your runway target&dagger;</span>
          </div>
          <div className="stat-cell">
            <span className="big">45 days</span>
            <span className="lbl">Average receivables lag<br />in Indian B2B startups</span>
          </div>
        </div>
        <p style={{ fontSize: "11.5px", color: "#6B6460", marginTop: "-1rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>* CB Insights analysis of 431 VC-backed failures (2026). Running out of capital is almost always the <em>final</em> cause, not the root cause: poor product-market fit (43%), bad timing (29%), and unsustainable unit economics (19%) are the deeper drivers. &dagger; 13 weeks is the warning-trigger floor in your cash forecast. Your strategic runway target should be 18&ndash;24 months.</p>

        {/* SECTION 1 */}
        <div className="section-tag">01 &nbsp; The Basics</div>
        <h2>Profit is an opinion. Cash is a fact.</h2>

        <p>
          Your P&amp;L can show a profit while your bank account is empty. This is not a paradox: it is accounting. Revenue is recorded when it is earned, not when it is collected. Expenses are recorded when they are incurred, not when they are paid. The gap between those two timings is where startups die.
        </p>

        <p>
          Cashflow is simply the movement of money into and out of your business over a period of time. Positive cashflow means more came in than went out. Negative cashflow means the opposite. Sustained negative cashflow without a plan (or without sufficient runway) is fatal.
        </p>

        <div className="callout">
          <span className="c-label">The Fundamental Rule</span>
          <p>&ldquo;A profitable startup can go bankrupt. An unprofitable startup with cash can survive long enough to fix itself. Cash is not a metric: it is oxygen.&rdquo;</p>
        </div>

        <p>There are three types of cashflow, and you need to track all three separately:</p>

        <div className="stage-grid">
          <div className="stage-card">
            <span className="s-label">Operating</span>
            <h3>Day-to-day business</h3>
            <p>Cash generated or consumed by your core business activities: collections from customers, payments to vendors, salaries, rent, GST. This is the number that matters most.</p>
          </div>
          <div className="stage-card">
            <span className="s-label">Investing</span>
            <h3>Assets &amp; capital spend</h3>
            <p>Cash spent on or received from long-term assets: buying equipment, acquiring software licences, investing in other businesses. Usually negative for growing startups.</p>
          </div>
          <div className="stage-card">
            <span className="s-label">Financing</span>
            <h3>Funding &amp; debt</h3>
            <p>Cash from investors (equity), loans drawn or repaid, EMIs. Funding rounds show up here as a large positive inflow: which is why runway must be tracked separately.</p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="section-tag">02 &nbsp; Runway</div>
        <h2>The number every founder must know by heart.</h2>

        <p>
          Runway is the number of months your startup can operate before it runs out of cash, assuming no new revenue and no new funding. It is the most important number at the pre-revenue and early stages, and it remains critical through Series A.
        </p>

        <div className="formula-box">
          <span className="f-label">The Runway Formula</span>
          <span className="formula">Runway (months) = Current Cash Balance &divide; Monthly Burn Rate</span>
          <span className="sub">Monthly Burn Rate = Total cash out in a month (all expenses paid, not accrued)</span>
        </div>

        <div className="formula-box">
          <span className="f-label">Net Burn vs Gross Burn</span>
          <span className="formula">Net Burn = Cash Out &minus; Cash In (from revenue)</span>
          <span className="sub">Use net burn if you have revenue. Use gross burn if you are pre-revenue. Investors will ask for both.</span>
        </div>

        <p>
          The practical rule: always maintain at least 13 weeks (3 months) of runway as a minimum floor. The strategic target for a funded startup is 18&ndash;24 months, which gives you enough time to raise the next round without desperation pricing.
        </p>

        <div className="callout">
          <span className="c-label">Founder Trap</span>
          <p>&ldquo;Counting your last funding round as runway without accounting for growth in burn as you hire and scale. Model your burn at 3, 6, and 12 months forward: not just today. A startup burning &#8377;15L/month that plans to hire 5 engineers over the next 4 months may be burning &#8377;35L/month by month 5. Your real runway is shorter than the formula suggests.&rdquo;</p>
        </div>

        {/* SECTION 3 */}
        <div className="section-tag">03 &nbsp; What to Focus on at Each Stage</div>
        <h2>The cashflow priorities change as you grow.</h2>

        <p>A pre-revenue founder and a Series A founder both care about cash: but for completely different reasons and with completely different tools. Here is what matters at each stage.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}>&#127807;</div>
            <div className="p-content">
              <h4>Pre-Revenue: Control Burn Obsessively</h4>
              <p>Every rupee out is a month of runway lost. Keep fixed costs near zero. Delay hiring. Use freelancers over full-time employees. Avoid long-term leases. Your only cashflow job is to extend the runway long enough to find product-market fit.</p>
            </div>
            <span className="p-pill pill-gold">Survive</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}>&#128200;</div>
            <div className="p-content">
              <h4>Early Revenue (below &#8377;1 crore): Fix Your Collections</h4>
              <p>The moment you have customers, your biggest cashflow risk shifts to receivables. Invoice immediately. Follow up systematically. Offer small discounts for early payment. Never let a receivable go past 60 days without escalation. Revenue on paper means nothing until it hits your account.</p>
            </div>
            <span className="p-pill pill-green">Collect</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.1)" }}>&#9881;&#65039;</div>
            <div className="p-content">
              <h4>Growth Stage (&#8377;1&ndash;10 crore): Build a 13-Week Forecast</h4>
              <p>At this stage, you have enough moving parts that gut feel fails. Build a rolling 13-week cashflow forecast updated weekly. Map every expected inflow and outflow by date. This single habit separates founders who see problems coming from those who are surprised by them.</p>
            </div>
            <span className="p-pill pill-gold">Forecast</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}>&#127963;&#65039;</div>
            <div className="p-content">
              <h4>Funded Startup: Separate Operating Cash from Reserves</h4>
              <p>Once you have raised capital, the danger is spending it as if it were revenue. Keep your funding corpus in a separate account or liquid instrument. Operate from a current account funded by transfers from the corpus. This forces discipline and gives you a real-time view of burn.</p>
            </div>
            <span className="p-pill pill-green">Structure</span>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="section-tag">04 &nbsp; The 13-Week Cashflow Forecast</div>
        <h2>The most practical financial tool a founder can build.</h2>

        <p>
          A 13-week (quarterly) cashflow forecast is the operational backbone of good financial management. Unlike a P&amp;L, it works on actual cash dates: when money moves, not when it is earned or owed. Here is how to build one.
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">1</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>List every expected cash inflow by date <span className="step-badge">Receipts</span></h4>
              <p>Customer payments (use actual expected payment dates, not invoice dates), advance payments, refunds, interest on deposits. If a customer has a 45-day payment cycle, count from invoice date, not delivery date. Be conservative: if uncertain, push it a week later.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">2</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>List every expected cash outflow by date <span className="step-badge">Payments</span></h4>
              <p>Salaries (date of payment, not month end), vendor payments, rent, EMIs, advance tax, GST payments, professional fees, SaaS subscriptions. Include annual expenses (insurance, audit fees) broken into when they actually get paid.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">3</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Calculate the opening and closing balance for each week</h4>
              <p>Opening balance + inflows &minus; outflows = closing balance. The closing balance of week N is the opening balance of week N+1. Any week where closing balance drops below your minimum cash floor (typically 4&ndash;6 weeks of burn) is a warning you need to act on now, not then.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">4</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Update it every Monday morning <span className="step-badge">Weekly habit</span></h4>
              <p>Replace the previous week&apos;s forecasts with actuals. Shift anything that didn&apos;t arrive. Revise assumptions. A forecast you built three months ago and never updated is useless: a forecast updated weekly becomes one of the most reliable tools in the business.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">5</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Build a scenario column: base case and stress case</h4>
              <p>Your base case is what you expect. Your stress case assumes your two largest customers pay 30 days late and one expected payment doesn&apos;t come at all. If the stress case still keeps you above the floor, you are in a healthy position. If it doesn&apos;t, you have work to do before the crisis hits.</p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div className="section-tag">05 &nbsp; The Levers You Can Pull</div>
        <h2>When cash gets tight, these are your options: in order.</h2>

        <p>Every startup faces a cashflow squeeze at some point. The founders who survive are the ones who pull the right lever at the right time, not the ones who panic and pull the wrong one. Here is the hierarchy.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}>&#9889;</div>
            <div className="p-content">
              <h4>Accelerate Collections First</h4>
              <p>Before cutting anything, call your top 3 customers and ask if they can pay early in exchange for a 1&ndash;2% discount. For many startups, this alone solves a short-term crunch. Also review every outstanding invoice and escalate anything over 30 days.</p>
            </div>
            <span className="p-pill pill-green">Fast</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}>&#128260;</div>
            <div className="p-content">
              <h4>Extend Payables Without Damaging Relationships</h4>
              <p>Call your key vendors and ask for 15&ndash;30 extra days. Most will say yes if you ask before missing a payment rather than after. Negotiate extended terms at contract renewal. Do not do this silently: transparency maintains trust and keeps the relationship intact.</p>
            </div>
            <span className="p-pill pill-gold">Negotiate</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.1)" }}>&#9986;&#65039;</div>
            <div className="p-content">
              <h4>Cut Discretionary Spend</h4>
              <p>Audit every subscription, tool, and recurring cost. Pause non-essential marketing spend. Delay capital purchases. Renegotiate office rent or move to a shorter lease. These cuts should happen before touching team or core operations.</p>
            </div>
            <span className="p-pill pill-gold">Trim</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}>&#127974;</div>
            <div className="p-content">
              <h4>Draw on a Credit Line or OD Facility</h4>
              <p>If you have an overdraft or working capital limit with your bank, this is the right moment to use it, for genuine short-term timing gaps, not to fund operating losses. DPIIT-recognised startups may access collateral-free credit under the CGSS (up to &#8377;20 crore). Note: CGSS requires demonstrated stable revenue verified by 12 months of audited statements; it is not available to pre-revenue startups.</p>
            </div>
            <span className="p-pill pill-gold">Borrow</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}>&#128680;</div>
            <div className="p-content">
              <h4>Restructure the Cost Base</h4>
              <p>If the above do not resolve the gap and it is structural, not a timing issue, you need to make harder decisions. This means rightsizing the team, exiting leases, or pausing non-core product lines. Do this early and decisively. Late restructuring always costs more.</p>
            </div>
            <span className="p-pill pill-red">Last resort</span>
          </div>
        </div>

        {/* SECTION 6 */}
        <div className="section-tag">06 &nbsp; The Most Expensive Mistakes</div>
        <h2>Four cashflow errors that finish companies.</h2>

        <div className="mistake-list">
          <div className="mistake-item">
            <span className="m-x">&#10005;</span>
            <p><strong style={{ color: "#A0380A" }}>Confusing revenue with cash.</strong> Booking a &#8377;50 lakh order feels like having &#8377;50 lakh. It is not. Until the customer pays, it is a receivable: an asset that requires working capital to service. Founders who spend based on booked revenue rather than collected cash run out of money on large contracts.</p>
          </div>
          <div className="mistake-item">
            <span className="m-x">&#10005;</span>
            <p><strong style={{ color: "#A0380A" }}>Not separating GST from operating cash.</strong> GST collected from customers is not your money. It belongs to the government. Founders who treat the GST portion of their invoices as operating cash find themselves in deficit every quarter when the filing is due.</p>
          </div>
          <div className="mistake-item">
            <span className="m-x">&#10005;</span>
            <p><strong style={{ color: "#A0380A" }}>Ignoring advance tax until it is too late.</strong> If your startup is profitable, advance tax is due in four instalments across the financial year. Missing these instalments triggers interest under Section 234B and 234C of the Income Tax Act. Many founders discover this liability only at year-end when the CA files returns.</p>
          </div>
          <div className="mistake-item">
            <span className="m-x">&#10005;</span>
            <p><strong style={{ color: "#A0380A" }}>Starting the fundraise too late.</strong> In today&apos;s market, a fundraise from first conversation to money in the bank typically takes 6&ndash;9 months. If you start when you have 2 months of runway, you are negotiating from desperation. The rule: start your next fundraise when you have 15&ndash;18 months of runway remaining.</p>
          </div>
        </div>

        {/* SECTION 7 */}
        <div className="section-tag">07 &nbsp; Deeper Thinking &mdash; What Most Guides Miss</div>
        <h2>Non-obvious cashflow dynamics that separate informed founders from the rest.</h2>

        <p>The basics matter, but the founders who truly avoid cashflow crises understand a layer beneath the basics. These are the structural realities rarely discussed in standard financial advice.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}>&#128260;</div>
            <div className="p-content">
              <h4>The Deferred Revenue Trap in SaaS</h4>
              <p>If you collect &#8377;12L upfront for an annual subscription, your P&amp;L recognises only &#8377;1L/month: but the cash already arrived. The trap: founders over-invest during the contract year, then hit a wall at renewal time when no new cash arrives. Track renewal dates as cashflow events, not just sales milestones.</p>
            </div>
            <span className="p-pill pill-green">SaaS-specific</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}>&#128202;</div>
            <div className="p-content">
              <h4>Cash Conversion Cycle: The Metric Most Founders Ignore</h4>
              <p>Your business model determines whether growth is a cashflow <em>tailwind</em> or a <em>headwind</em>. Cash Conversion Cycle (CCC) = Days Sales Outstanding + Days Inventory Outstanding &minus; Days Payable Outstanding. A negative CCC means growth generates cash. A positive CCC means you must finance growth with working capital.</p>
            </div>
            <span className="p-pill pill-gold">Model this</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}>&#129534;</div>
            <div className="p-content">
              <h4>GST Input Tax Credit Is a Hidden Cash Asset</h4>
              <p>GST you <em>pay</em> on vendor invoices generates Input Tax Credit (ITC) that offsets your output liability. Many founders don&apos;t claim ITC systematically. A disciplined ITC reconciliation process (matching 2B before filing) can meaningfully reduce your monthly GST cash outflow.</p>
            </div>
            <span className="p-pill pill-green">India-specific</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.1)" }}>&#128184;</div>
            <div className="p-content">
              <h4>Payroll Is the Most Underestimated Cashflow Cliff</h4>
              <p>Going from 10 to 25 employees in 6 months creates a compounding effect: gross salaries, PF (employer + employee), ESI, TDS deductions, and the advance tax impact of higher profitability. Most founders model headcount additions but not their total cost-to-company impact on weekly cashflow. Budget per new hire at 1.2&ndash;1.3&times; CTC from day one.</p>
            </div>
            <span className="p-pill pill-gold">Scale-up trap</span>
          </div>

          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}>&#129504;</div>
            <div className="p-content">
              <h4>The Zombie Runway Problem</h4>
              <p>Counterintuitively, excess runway can destroy discipline. Founders with 24+ months of runway sometimes delay hard decisions because the cushion creates psychological safety. &ldquo;Default alive&rdquo; thinking &mdash; can you reach profitability on current cash, even without new revenue? &mdash; should be run as a quarterly scenario regardless of how much runway you have.</p>
            </div>
            <span className="p-pill pill-red">Contrarian</span>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-block">
          <span className="cta-eye">Bodha Ventures &mdash; We Handle This For You</span>
          <h2>Get your cashflow under control.</h2>
          <p>From building your 13-week forecast to managing advance tax, GST, and financial reporting, Bodha Ventures acts as your Virtual CFO so your numbers work as hard as you do.</p>
          <Link href="/vcfo" className="cta-btn">Talk to Bodha Ventures &rarr;</Link>
          <span className="cta-note">Free initial consultation &nbsp;&middot;&nbsp; No hidden fees &nbsp;&middot;&nbsp; Trusted by founders across India</span>
        </div>

        <div className="footnote">
          <strong>Sources:</strong> CB Insights Startup Failure Analysis (2026, n=431 VC-backed shutdowns) &nbsp;&middot;&nbsp; DPIIT Credit Guarantee Scheme for Startups (CGSS, revised May 2025) &nbsp;&middot;&nbsp; RBI Working Capital Guidelines &nbsp;&middot;&nbsp; Income Tax Act, 1961 (Sections 234B, 234C) &nbsp;&middot;&nbsp; GST Act, 2017. This article is for informational purposes. For advice specific to your startup, consult Bodha Ventures directly.
        </div>

      </article>

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
