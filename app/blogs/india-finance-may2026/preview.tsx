import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      <div className="topbar">
        <span className="brand">Markets &amp; Macro</span>
        <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; May 16–22, 2026</span>
      </div>

      <div className="hero-badge">Weekly Briefing — What Mattered, What It Means, What Comes Next</div>

      <h1>Indian Markets: A Week That<br />Went Nowhere,<br /><span>For Good Reason</span></h1>

      <div className="hero-sub">
        The Nifty 50 closed the week at 23,719.30 and Sensex at 75,415.35 — a gain of about 0.32% and 0.24% respectively from last Friday&apos;s close of 23,643.50 and 75,237.99. On paper, a positive week. In practice, markets spent five sessions trapped inside a 600-point Nifty band, unable to break above 23,850 on any sustained move, buffeted daily by opposing signals from oil, diplomacy, and earnings.
      </div>

      <div className="stat-row">
        <div className="stat-cell">
          <span className="big">23,719</span>
          <span className="lbl">Nifty 50 close<br />+0.32% on the week</span>
        </div>
        <div className="stat-cell">
          <span className="big">41.83</span>
          <span className="lbl">Weekly RSI · Nifty<br />inside cautious zone</span>
        </div>
        <div className="stat-cell">
          <span className="big">−7.13%</span>
          <span className="lbl">Sensex year-on-year<br />as of week close</span>
        </div>
      </div>

      <p>Zoom out and the picture is starker: the Sensex is down 4.25% over the past month and down 7.13% year-on-year. Motilal Oswal noted the Sensex was marginally down on a weekly VWAP basis, trading near the 75,300 level that has acted as a centre of gravity. The weekly RSI on Nifty stood at 41.83 — well inside the cautious zone, reflecting weakening momentum and an absence of either strong buying conviction or panic selling.</p>

      <p>The FII/DII dynamic tells the underlying story. FIIs sold ₹1,891 crore on May 21, while DIIs countered with ₹2,492 crore in buying. Month-to-date through May 20, FIIs have net-sold ₹25,896 crore from Indian equities. DIIs have absorbed all of it and more, buying ₹48,369 crore in the same period. The domestic institutional wall — built on SIP inflows, insurance money, and pension funds — is the singular reason this market hasn&apos;t corrected 10–12% in a world where crude is above $100 and the Fed is contemplating rate hikes. It is holding the floor. It is not providing the fuel for a breakout.</p>

      <div className="callout">
        <span className="c-label">What the Market Is Actually Pricing</span>
        <p>The index level of ~23,700 reflects a market that believes a US-Iran deal eventually happens, Rubio&apos;s India visit produces something real on trade, and the RBI doesn&apos;t hike. Remove any one of those assumptions and you&apos;re looking at 22,500. Add in all three with conviction and 25,000–25,500 is back on the table. The range reflects genuine uncertainty, not laziness.</p>
      </div>

      {/* SECTION 2 */}
      <div className="section-tag">02 &nbsp; The Story That Broke Everything</div>
      <h2>OpenAI, Anthropic, and Indian IT</h2>

      <p>The preceding week&apos;s damage — which the current week&apos;s consolidation was trying to digest — had a very specific cause. On May 12, OpenAI announced a new $4 billion enterprise deployment company, backed by TPG, Brookfield, Bain, and Advent, specifically designed to help organisations build and deploy AI directly for everyday work — directly overlapping with services offered by India&apos;s IT industry. Indian IT stocks fell up to 4% the same day. TCS touched its 52-week low of ₹2,283 — down 28.63% year-to-date. Infosys fell to its lowest level since December 2020.</p>
    </>
  );
}
