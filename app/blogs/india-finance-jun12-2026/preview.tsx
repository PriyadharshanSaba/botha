import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      <div className="topbar">
        <span className="brand">Markets &amp; Macro</span>
        <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; Week of June 12, 2026</span>
      </div>

      <div className="hero-badge">June 12, 2026</div>

      <h1>Beneath the Friday Rally,<br /><span>Something Else Changed</span></h1>

      <div className="hero-sub">
        The numbers tell one story. The structure tells another. A rate hold, a bond market quietly rewired, ₹2.67 lakh crore in year-to-date equity exits, an IT sector hit by two forces at once, and a $6 crude swing on a single sentence from Washington — followed overnight by the IRGC formally closing the Strait of Hormuz to all vessels. Friday&apos;s rally was real but borrowed. Underneath it: India is attempting a fundamental repositioning in global capital markets — and the window to get it right is narrower than the headlines suggest.
      </div>

      {/* STAT ROW */}
      <div className="stat-row">
        <div className="stat-cell">
          <span className="big">5.25%</span>
          <span className="lbl">RBI Repo Rate<br />Held, Neutral Stance</span>
        </div>
        <div className="stat-cell">
          <span className="big red">~15 bps</span>
          <span className="lbl">Real Rate — Barely Positive<br />Repo minus Revised CPI Forecast</span>
        </div>
        <div className="stat-cell">
          <span className="big red">₹2.67L Cr</span>
          <span className="lbl">FPI Equity Outflows<br />Year-to-Date 2026</span>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="section-tag">01 &nbsp; Market Scorecard</div>
      <h2>Numbers That Need Context, Not Comfort</h2>

      <p>The Sensex closed Friday at <strong>75,527</strong> — up 1,695 points or 2.3% on the day — and the Nifty 50 closed at <strong>23,622.90</strong>, up 461 points or 1.99%. The afternoon session turned decisively after reports emerged of a draft memorandum of understanding between the US and Iran to reopen the Strait of Hormuz, triggering a near-5% drop in global crude prices and a broad rally across index heavyweights and banking stocks.</p>

      <p>On the week — Friday June 6 to Friday June 12 — the Sensex gained <strong>1,284 points or +1.73%</strong> (from 74,243 to 75,527) and the Nifty gained <strong>256 points or +1.1%</strong> (from 23,366 to 23,622). The weekly gain is almost entirely a Friday story. Through Thursday the indices were flat-to-negative, with the Sensex closing Thursday at 73,832 — actually below the prior Friday&apos;s close. One afternoon session, one geopolitical headline, and the entire week&apos;s P&amp;L flipped. Despite Friday&apos;s surge, the Sensex remains down approximately <strong>5.6% for 2026</strong> — the week&apos;s rally clawed back roughly 1.4 percentage points of a deeper hole.</p>

      <div className="formula-box">
        <span className="f-label">Technical Setup — Nifty 50</span>
        <span className="formula">Still trading below its 20-week, 50-week, and 100-week exponential moving averages</span>
        <span className="sub">Friday&apos;s close at 23,622 is an improvement, but the index needs to clear and hold ~23,800 to break meaningfully above its consolidation zone. Weekly RSI was 39.64 entering Friday — not oversold, but deteriorating. One strong session doesn&apos;t change the structure; it just buys time. Any sustained recovery still needs the fundamental catalysts, not just a quiet weekend in Tehran.</span>
      </div>

      <p>The banking sector has the cleanest fundamental story in India right now — NIMs holding, NPAs under control, credit growth stable — but it cannot decouple from the macro for long. A genuine sector re-rating requires three conditions that are not yet fully in place: FPI flows stabilising, the rate trajectory becoming clearer, and crude settling durably below $90 where the RBI&apos;s fiscal arithmetic becomes manageable. The underlying earnings quality is there. The catalyst timing is not.</p>
    </>
  );
}
