import "../guide-article.css";
import "../../landing.css";
import SketchIcon from "@/app/components/SketchIcon";

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
          <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="sprout" size={24} /></div>
          <div className="p-content">
            <h4>Pre-Revenue: Control Burn Obsessively</h4>
            <p>Every rupee out is a month of runway lost. Keep fixed costs near zero. Delay hiring. Use freelancers over full-time employees. Avoid long-term leases. Your only cashflow job is to extend the runway long enough to find product-market fit.</p>
          </div>
          <span className="p-pill pill-gold">Survive</span>
        </div>

        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="chart-up" size={24} /></div>
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
          <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="factory" size={24} /></div>
          <div className="p-content">
            <h4>Funded Startup: Separate Operating Cash from Reserves</h4>
            <p>Once you have raised capital, the danger is spending it as if it were revenue. Keep your funding corpus in a separate account or liquid instrument. Operate from a current account funded by transfers from the corpus. This forces discipline and gives you a real-time view of burn.</p>
          </div>
          <span className="p-pill pill-green">Structure</span>
        </div>
      </div>
    </>
  );
}
