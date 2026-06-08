import "../guide-article.css";
import "../../landing.css";
import SketchIcon from "@/app/components/SketchIcon";

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

      {/* SECTION 2 */}
      <div className="section-tag">02 &nbsp; The Headline Number</div>
      <h2>FY26 GDP at 7.7% — The Number the World Will Quote, and the Story Underneath It</h2>

      <p>MoSPI released Provisional Estimates for FY26 on Friday June 5, confirming full-year real GDP growth at <strong>7.7%</strong> — approximately 10 basis points above the Second Advance Estimate of 7.6%, and firmly the highest growth rate in the G20. The headline will be celebrated domestically and internationally. The layers beneath it are more complicated.</p>

      <p>Critically, the FY26 GDP was released using the <strong>new 2022-23 base year</strong> — the first major base revision since 2011-12. Base year changes restate the economy&apos;s structural composition and alter how growth rates are computed. The 7.6% SAE was produced on the old base; the 7.7% PE is on the new base and represents a slight upward revision. A strict comparison of these two numbers is therefore imprecise. The MoSPI has not yet published a full historical restated series, which means analysts cannot yet cleanly compute the impact of the base shift on the deficit-to-GDP ratio or the debt-to-GDP ratio.</p>

      <div className="formula-box">
        <span className="f-label">FY26 GDP Quarterly Trajectory (Confirmed and Implied)</span>
        <span className="formula">Q1 FY26 (Apr–Jun 2025): 7.8% → Q2 FY26 (Jul–Sep 2025): 8.2% → Q3–Q4 FY26 (Oct 2025–Mar 2026): ~7.4–7.8% implied → Full Year PE: 7.7%</span>
        <span className="sub">New base year 2022-23 applied for the first time in the PE. Old-base SAE was 7.6%; the new-base PE of 7.7% is a slight upward revision, not the miss some anticipated. Strong H2 performance reflects resilient private consumption and fixed investment despite the Iran oil shock. FY27 RBI central forecast: 6.6% (revised down from prior RBI estimate of 6.9% at the April MPC). IMF FY27 estimate: ~6.4%.</span>
      </div>

      <div className="callout">
        <span className="c-label">The Angle Nobody Is Writing: The Fiscal Deficit Arithmetic Breaks</span>
        <p>The February Budget set a FY27 fiscal deficit target of 4.3% using the old GDP base. On the new 2022-23 base series, that same nominal borrowing would be divided by a larger nominal GDP denominator — but achieving 4.3% still requires nominal GDP growth of approximately 13–14%. The RBI&apos;s own central forecast implies nominal GDP growth of ~12% for FY27 (precisely: (1.066) × (1.051) − 1 ≈ 12.0%). That gap — ~12% actual versus 13–14% required — means the government&apos;s 4.3% target is arithmetically difficult to achieve without either cutting spending or accepting a fiscal slippage. The June Budget update must address this explicitly. If it doesn&apos;t, sovereign credit analysts will do the arithmetic themselves and draw their own conclusions. Note: the stronger-than-expected FY26 PE of 7.7% provides a marginally larger nominal GDP base for FY27 calculations, but does not close the gap materially.</p>
      </div>

      {/* SECTION 3 */}
      <div className="section-tag">03 &nbsp; Monetary Policy</div>
      <h2>RBI Unanimously Holds at 5.25% — The Forecast Revisions Are the Real Story</h2>

      <p>The MPC voted unanimously on June 5 to hold the repo rate at <strong>5.25%</strong> and maintain a neutral stance. The hold itself was fully anticipated by every economist polled ahead of the meeting. What the market did not entirely anticipate was the extent of the <em>simultaneous</em> move in both directions: inflation revised sharply upward and growth revised downward — a stagflationary combination that defines the RBI&apos;s precise dilemma heading into August.</p>

      <div className="principle-list">
        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="chart-up" size={24} /></div>
          <div className="p-content">
            <h4>FY27 CPI Inflation Revised Up 50 bps to 5.1%</h4>
            <p>The quarterly path — Q1 (Apr–Jun 2026): 4.2%, Q2 (Jul–Sep 2026): 5.1%, Q3 (Oct–Dec 2026): 5.9% (peak), Q4 (Jan–Mar 2027): 5.4% — reflects elevated energy prices from the Middle East conflict, supply chain disruptions, rupee weakness, and El Niño monsoon risk. Core inflation is pegged at 4.7%. The Q3 (Oct–Dec 2026) peak of 5.9% is the danger zone: if it breaches 6%, the MPC&apos;s stated tolerance band is effectively blown and a rate hike conversation becomes unavoidable.</p>
          </div>
          <span className="p-pill pill-red">Hawkish Signal</span>
        </div>
        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="chart-down" size={24} /></div>
          <div className="p-content">
            <h4>FY27 GDP Forecast Cut to 6.6% from 6.9%</h4>
            <p>Quarterly breakdown: Q1 (Apr–Jun 2026) 6.6%, Q2 (Jul–Sep 2026) 6.3% (the soft spot), Q3 (Oct–Dec 2026) 6.5%, Q4 (Jan–Mar 2027) 6.8%. The Q2 (Jul–Sep 2026) trough is when the monsoon effect, energy cost pass-through, and any Iran escalation would all peak simultaneously. A Q2 miss below 6% would reopen fiscal deficit arithmetic and force the RBI&apos;s hand. Private consumption and fixed investment described as &ldquo;resilient,&rdquo; but merchandise export growth in April 2026 already facing elevated freight and insurance costs.</p>
          </div>
          <span className="p-pill pill-red">Growth Concern</span>
        </div>
        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="cloud" size={24} /></div>
          <div className="p-content">
            <h4>Monsoon Named as the Biggest Domestic Risk</h4>
            <p>Governor Malhotra explicitly identified the south-west monsoon as the single largest domestic risk to the RBI&apos;s projections. El Niño conditions raise the probability of a sub-normal season. The RBI&apos;s 5.1% inflation forecast assumes &ldquo;broadly adequate&rdquo; rainfall — a below-normal monsoon hitting Kharif sowing in July–August 2026 would blow the Q3 (Oct–Dec 2026) ceiling of 5.9% and potentially force a hawkish pivot in October.</p>
          </div>
          <span className="p-pill pill-gold">Watch Closely</span>
        </div>
        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="building" size={24} /></div>
          <div className="p-content">
            <h4>Neutral Stance Preserved — Optionality by Design</h4>
            <p>The MPC retained neutral rather than signalling accommodation withdrawal. This is deliberate: if oil stabilises and Iran de-escalates, an August cut remains possible. If inflation prints above 5.5% or the rupee breaches ₹98, tightening becomes viable. A pre-committed stance removes that flexibility. The neutral stance is the RBI&apos;s most honest signal: they genuinely do not know what August will demand, and they are not pretending otherwise.</p>
          </div>
          <span className="p-pill pill-gold">Flexibility Preserved</span>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="section-tag">04 &nbsp; Policy Surprise</div>
      <h2>Government Abolishes FPI Capital Gains Tax on G-Secs — By Ordinance</h2>

      <p>The week&apos;s most consequential domestic policy action came via an unexpected route: the Union Cabinet approved an ordinance on June 4 — assented by the President and formally notified on June 5 — exempting Foreign Portfolio Investors from <strong>income tax on both interest income and capital gains</strong> arising from investments in government securities. The exemption applies retroactively from April 1, 2026.</p>

      <p>The urgency of the ordinance route explains itself in the context of the numbers. FPIs have pulled <strong>₹2.63 lakh crore</strong> from Indian equities in 2026 — roughly 1.6× the full-year 2025 calendar-year outflow of ₹1.66 lakh crore. In June alone through June 3, FPIs sold ₹16,902 crore in equities while buying only ₹119 crore in debt. The rupee at ₹95.65 represents an ~11.5% decline over 12 months and rising. Waiting for Parliament was not an option.</p>

      <div className="formula-box">
        <span className="f-label">What the Exemption Actually Changes</span>
        <span className="formula">Before: FPIs paid 12.5% LTCG on G-Sec gains held &gt;12 months + 20% withholding tax on interest income</span>
        <span className="sub">After: Zero tax on both capital gains and interest from G-Secs, retroactive to April 1, 2026. The Fully Accessible Route (FAR) expanded to include new issuances in 15-, 30- and 40-year tenors and Sovereign Green Bonds. Three restrictions on FPI investments under the General Route also removed simultaneously. Per Deloitte: FPI returns on G-Secs improve 15–20%.</span>
      </div>

      <div className="callout-green">
        <span className="c-label">Why This Could Matter More Than the Headline Suggests</span>
        <p>The mechanics are straightforward; the strategic ambition is not. India has been partially included in the JP Morgan EM Bond Index since June 2024. But tax friction and effective holding limits have kept passive index-driven inflows well below full-inclusion potential. Removing LTCG and interest tax directly targets pension funds, insurance companies, and sovereign wealth funds — the patient, long-duration investors that JP Morgan&apos;s index drives. If this successfully deepens FPI G-Sec participation, the RBI gains structural monetary policy freedom: it can hold or cut rates without worrying about a thin domestic bid for sovereign debt. PSU banks and primary dealers rallied on this news Friday — they understood it correctly.</p>
      </div>

      <div className="callout-red">
        <span className="c-label">The Risk That Isn&apos;t Being Discussed</span>
        <p>Deeper FPI penetration in G-Secs creates a new vulnerability that doesn&apos;t exist when the market is domestically held. When a sudden risk-off event strikes — an Iran escalation, a Fed surprise — foreign holders sell G-Secs, pushing yields up, which triggers rupee weakness, which triggers more selling. India&apos;s equity market has already experienced exactly this dynamic over the past 18 months. Extending that structural fragility to the sovereign bond market requires a robust monitoring and circuit-breaker framework. The RBI and SEBI will need to be proactive, not reactive, in designing those safeguards before the inflows they are attracting become large enough to matter — and to destabilise.</p>
      </div>
    </>
  );
}
