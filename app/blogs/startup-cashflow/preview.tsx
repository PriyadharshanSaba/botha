import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
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
    </>
  );
}
