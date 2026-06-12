import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
        <div className="topbar">
          <span className="brand">Markets &amp; Macro</span>
          <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; May 23–29, 2026</span>
        </div>

        <div className="hero-badge">Weekly Briefing — What Mattered, What It Means, What Comes Next</div>

        <h1>Hormuz, Rubio,<br />and a Nifty That Gave<br /><span>It All Back</span></h1>

        <div className="hero-sub">
          A week that looked like a breakout and ended as a retreat. Iran&apos;s ceasefire MoU pushed markets to weekly highs mid-week, only for Friday&apos;s selloff to return every point gained. The trade deal advanced, the government sold state assets, and the GDP release most expected today was quietly pushed to June 5. The week of May 23–29 was dense with events, thin on resolution.
        </div>

        {/* STAT ROW */}
        <div className="stat-row">
          <div className="stat-cell">
            <span className="big red">−0.72%</span>
            <span className="lbl">Nifty 50 Week-on-Week<br />23,719 → 23,547.75 at Friday close</span>
          </div>
          <div className="stat-cell">
            <span className="big red">~$95–96</span>
            <span className="lbl">Brent Crude (Weekly Close)<br />Down ~9% from prior week&apos;s $104–105</span>
          </div>
          <div className="stat-cell">
            <span className="big">₹98.48</span>
            <span className="lbl">USD/INR Futures (Wed)<br />Rupee down ~2.3% on the week</span>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="section-tag">01 &nbsp; The Market Scorecard</div>
        <h2>A Week of Two Halves: Rally to 23,907, Selloff to 23,547</h2>

        <p>The week of May 23–29 ended with the Nifty at <strong>23,547.75</strong> and the Sensex at <strong>74,775.74</strong> — a weekly loss of <strong>−0.72% on Nifty and −0.85% on Sensex</strong> from last Friday&apos;s closes of 23,719.30 and 75,415.35 respectively. That headline number masks an eventful week underneath: markets rallied hard on Monday on Iran deal optimism, gave back gains on Tuesday, surged again mid-week on the ceasefire MoU news, were closed Thursday for Bakri Id, and then sold off on Friday as investors squared positions ahead of a three-day weekend and as Iran-related uncertainty resurfaced. The final close essentially erased the week&apos;s intraday gains, leaving the market back below where it started.</p>

        <table className="week-table">
          <thead>
            <tr>
              <th>Index / Indicator</th>
              <th>May 22 Close</th>
              <th>May 29 Close</th>
              <th>Weekly Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nifty 50</td>
              <td>23,719.30</td>
              <td><strong>23,547.75</strong></td>
              <td className="td-red">−171.55 pts &nbsp;|&nbsp; −0.72%</td>
            </tr>
            <tr>
              <td>Sensex</td>
              <td>75,415.35</td>
              <td><strong>74,775.74</strong></td>
              <td className="td-red">−639.61 pts &nbsp;|&nbsp; −0.85%</td>
            </tr>
            <tr>
              <td>Brent Crude</td>
              <td>~$104–105</td>
              <td>~$95–96</td>
              <td className="td-green">~−9% on week</td>
            </tr>
            <tr>
              <td>USD/INR</td>
              <td>~96.30</td>
              <td>~98.50</td>
              <td className="td-red">Rupee −2.3% on week</td>
            </tr>
            <tr>
              <td>FII MTD May</td>
              <td colSpan={2}>Net selling: −₹34,857 crore (through May 27)</td>
              <td className="td-red">Persistent outflow</td>
            </tr>
            <tr>
              <td>DII MTD May</td>
              <td colSpan={2}>Net buying: +₹65,905 crore (through May 27)</td>
              <td className="td-green">Nearly 2× FII selling</td>
            </tr>
          </tbody>
        </table>

        <p>The FII/DII dynamic continues to define the market&apos;s structure. Month-to-date through May 27, FIIs have net-sold <strong>₹34,857 crore</strong> from Indian equities while DIIs have bought <strong>₹65,905 crore</strong> — nearly double the FII selling. The domestic institutional wall holds the floor; it does not provide the fuel for a breakout. Friday&apos;s fall with markets down ~0.7% on the week confirms exactly that dynamic: DIIs absorbed selling but couldn&apos;t reverse it.</p>

        <div className="callout-red">
          <span className="c-label">Context: The 12-Month Picture</span>
          <p>FPIs have withdrawn $39.94 billion (₹3.65 trillion) from Indian secondary markets in the twelve months through May 22, 2026. FPI ownership of NSE-listed firms has fallen to a 17-year low of 15.8%. When measured in dollar terms — accounting for the rupee&apos;s 10.15% decline over the year — the Nifty 50 has delivered a 13.41% negative return for foreign investors over the past year. That is not a sentiment problem. It is a returns problem, and capital allocates rationally.</p>
        </div>
    </>
  );
}
