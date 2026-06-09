import "./article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <span className="brand">Currency Analysis</span>
        <span className="tag">India Macro · June 2026 · ~11 min read</span>
      </div>

      {/* HERO */}
      <div className="hero-badge">In Depth — What Happened, Why It Matters, What Comes Next</div>

      <h1>The Rupee&apos;s<br /><span>Long Descent</span></h1>

      <div className="hero-sub">
        From ₹45 to ₹95 in two decades — and the slide accelerating. A deep investigation into why India&apos;s currency keeps losing ground, how it compares to the rest of the world, and why the official reassurances no longer fully hold.
      </div>

      {/* STAT ROW */}
      <div className="stat-row">
        <div className="stat-cell">
          <span className="big red">~9%</span>
          <span className="lbl">1-Year Fall<br />Jun 2025 → Jun 2026</span>
        </div>
        <div className="stat-cell">
          <span className="big red">~27%</span>
          <span className="lbl">5-Year Fall<br />Jun 2021 → Jun 2026</span>
        </div>
        <div className="stat-cell">
          <span className="big red">~42%</span>
          <span className="lbl">10-Year Fall<br />Jun 2016 → Jun 2026</span>
        </div>
        <div className="stat-cell">
          <span className="big gold">₹96.82</span>
          <span className="lbl">Record Low<br />Hit in May 2026</span>
        </div>
      </div>

      {/* EXECUTIVE SUMMARY */}
      <div className="callout">
        <span className="c-label">The Story in Brief</span>
        <p>The Indian rupee has lost roughly <strong>42% of its value against the US dollar over the past decade</strong> — a slide that has gathered pace, not slowed. The causes are structural and chronic: a persistent current account deficit, an economy that imports 85% of its oil, and an inflation rate consistently above that of India&apos;s trading partners. The RBI has intervened on an extraordinary scale — burning through <strong>over $47 billion in reserves</strong> since the February 2026 peak — but cannot permanently reverse the gravity of economics.</p>
        <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>What makes the current episode more troubling than past ones is this: the rupee kept falling even <em>after</em> the US Federal Reserve began cutting rates in late 2024. That decoupling signals something important — India&apos;s currency weakness is no longer just imported from Washington. It now has a structural engine of its own. This is what the Finance Ministry&apos;s reassurances don&apos;t quite address, and what this analysis seeks to explain.</p>
      </div>

      {/* SECTION 1 */}
      <div className="section-tag">01 &nbsp; The Number That Should Startle You</div>
      <h2>A New Normal Nobody Is Alarmed By</h2>

      <p>On a Monday morning in May 2026, the rupee briefly touched <strong>₹95.80 to the dollar</strong> on May 13 — a fresh all-time low. Within days, it pushed further, touching a record of ₹96.82. And in a country of 1.4 billion people, in a week full of IPL scores, election analysis, and Sensex updates, it barely made the front page. That normalisation — the collective shrug at a historic slide — is itself part of the story.</p>

      <p>Go back ten years. In June 2016, the exchange rate was around <strong>₹67 to the dollar</strong>. That means a dollar cost 42% fewer rupees then than it does today. This is not a rounding error, a recessionary blip, or a temporary market panic. It is a slow, structural, and sustained devaluation of Indian purchasing power in global terms — a quiet tax on every Indian who saves in rupees and spends in the world.</p>
    </>
  );
}
