import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      <div className="topbar">
        <span className="brand">Markets &amp; Macro</span>
        <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; May 29 – June 5, 2026</span>
      </div>

      <div className="hero-badge">Weekly Briefing — What Mattered, What It Means, What Comes Next</div>

      <h1>The Week Everything<br />Landed at <span>Once</span></h1>

      <div className="hero-sub">
        RBI held, FY26 GDP printed, trade talks concluded, and the government abolished FPI capital gains tax on G-Secs by ordinance — all on the same Friday. Seven dense days that simultaneously validated the macro story and cut the FY27 outlook, leaving markets suspended between two competing narratives.
      </div>

      {/* STAT ROW */}
      <div className="stat-row">
        <div className="stat-cell">
          <span className="big green">7.7%</span>
          <span className="lbl">FY26 Full-Year GDP<br />Provisional Estimate, June 5</span>
        </div>
        <div className="stat-cell">
          <span className="big">5.25%</span>
          <span className="lbl">RBI Repo Rate<br />Held Unanimously, June 5</span>
        </div>
        <div className="stat-cell">
          <span className="big red">₹95.65</span>
          <span className="lbl">USD/INR Close<br />Down ~11.5% over 12 months</span>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="section-tag">01 &nbsp; The Market Scorecard</div>
      <h2>A Week Without a Clear Direction — Until Friday&apos;s Double-Header</h2>

      <p>Indian equity markets carried over the prior Friday close of <strong>23,547.75</strong> on Nifty and <strong>74,775.74</strong> on Sensex. The week opened with Monday June 1 weakness — Sensex fell to 74,267.34, Nifty to 23,382.60 (−0.70%) — as fresh US–Iran military exchanges weighed on sentiment. Tuesday June 2 snapped a four-day losing streak: Nifty closed at 23,483, Sensex added 382 points, driven by a <strong>4.2% surge in Nifty IT</strong> as Infosys rose nearly 6% on an AI product launch. Mid-week was choppy as oil climbed back above $97 on renewed Gulf strikes. Friday June 5 brought the RBI hold and GDP data simultaneously — a dual catalyst that lifted the opening but faded into the close, with Nifty finishing the week at <strong>23,366.70</strong> and Sensex at <strong>74,243.34</strong> — both below the prior Friday close.</p>

      <table className="week-table">
        <thead>
          <tr>
            <th>Index / Indicator</th>
            <th>May 29 Carry-In</th>
            <th>June 5 Close / Level</th>
            <th>Weekly Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nifty 50</td>
            <td>23,547.75</td>
            <td><strong>23,366.70</strong></td>
            <td className="td-red">Down 181 pts (−0.77%) on week</td>
          </tr>
          <tr>
            <td>Sensex</td>
            <td>74,775.74</td>
            <td><strong>74,243.34</strong></td>
            <td className="td-red">Down 532 pts (−0.71%) on week</td>
          </tr>
          <tr>
            <td>Brent Crude</td>
            <td>~$94–95 (May 29)</td>
            <td>~$95–98</td>
            <td className="td-red">Crept higher on Gulf strikes</td>
          </tr>
          <tr>
            <td>USD/INR</td>
            <td>~94.6–95.2</td>
            <td>95.65</td>
            <td className="td-red">Rupee continued weakening</td>
          </tr>
          <tr>
            <td>FII Jun 1–4 Equities</td>
            <td colSpan={2}>Net selling: −₹22,338 crore (Jun 1–4)</td>
            <td className="td-red">Persistent outflow</td>
          </tr>
          <tr>
            <td>DII Jun 1–4</td>
            <td colSpan={2}>Net buying: +₹24,799 crore (Jun 1–4)</td>
            <td className="td-green">Cushioning the fall</td>
          </tr>
          <tr>
            <td>FPI YTD 2026 (Equities)</td>
            <td colSpan={2}>Net outflow: −₹2.63 lakh crore</td>
            <td className="td-red">~1.6× full-year 2025 outflows</td>
          </tr>
          <tr>
            <td>Nifty IT (Week)</td>
            <td colSpan={2}>Surge of ~4–5% led by Infosys (+6%), TCS, Tech M</td>
            <td className="td-green">Best sectoral performer</td>
          </tr>
        </tbody>
      </table>

      <p>The FII/DII structural dynamic continues unchanged. FPIs have now pulled <strong>₹2.63 lakh crore</strong> from Indian equities in 2026 — roughly 1.6× the full-year 2025 calendar-year withdrawal of ₹1.66 lakh crore. DIIs absorbed the selling once again this week but cannot provide the fuel for a breakout. Nifty closed the week at 23,366.70 — below the prior Friday close of 23,547.75, and still rangebound between 23,200 support and 24,000 resistance, with a decisive break above 23,550–23,600 required to even begin a recovery narrative.</p>

      <div className="callout-red">
        <span className="c-label">The 12-Month Dollar Return Problem</span>
        <p>The Nifty 50 is down 4.66% over the past 12 months in rupee terms. Add the rupee&apos;s ~11.5% depreciation against the dollar and the dollar-adjusted return for a foreign equity investor is approximately −15.5% (precisely: (1 − 0.0466) × (1 − 0.115) − 1 ≈ −15.5%). That is not a sentiment problem. Capital allocates rationally. Until the rupee stabilises and earnings growth re-accelerates, the structural FPI outflow pressure will not abate.</p>
      </div>
    </>
  );
}
