import "../guide-article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      <div className="topbar">
        <span className="brand">Bodha Ventures</span>
        <span className="tag">Virtual CFO &amp; Startup Consultancy &nbsp;&middot;&nbsp; April 2026</span>
      </div>

      <div className="hero-badge">DPIIT Recognition Guide &mdash; Updated for 2026</div>

      <h1>Your startup could be saving<br /><span>lakhs in taxes.</span><br />Most founders don&apos;t know it.</h1>

      <div className="hero-sub">
        DPIIT Startup Recognition is free, takes under a week, and unlocks benefits worth crores over the life of your company. Here is everything you need to know.
      </div>

      <div className="update-banner">
        <span className="ub-label">Feb 2026</span>
        <p>DPIIT issued Gazette Notification G.S.R. 108(E) on 4 February 2026, significantly updating the startup eligibility framework. Turnover ceilings doubled, cooperative societies added, and a new Deep Tech category introduced. If you&apos;re reading an older guide, some of it is no longer accurate.</p>
      </div>

      <div className="stat-row">
        <div className="stat-cell">
          <span className="big">2.23L+</span>
          <span className="lbl">Startups recognised<br />by DPIIT to date</span>
        </div>
        <div className="stat-cell">
          <span className="big">Zero</span>
          <span className="lbl">Government fee<br />to apply</span>
        </div>
        <div className="stat-cell">
          <span className="big">3 yrs</span>
          <span className="lbl">Income tax holiday<br />under Sec 80-IAC</span>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="section-tag">01 &nbsp; What is DPIIT Recognition</div>
      <h2>A master access card from the Government of India</h2>

      <p>
        The Department for Promotion of Industry and Internal Trade (DPIIT) officially certifies qualifying businesses as startups under the Startup India initiative. This is not a formality. It is a single certificate that unlocks a stack of government benefits: tax holidays, intellectual property rebates, compliance relief, funding access, and government procurement advantages.
      </p>

      <p>
        The best way to think about it: most of India&apos;s startup benefits require DPIIT recognition as the entry credential. Without it, you are locked out. With it, doors that would otherwise take months of paperwork open quickly.
      </p>

      <div className="callout">
        <span className="c-label">Plain English</span>
        <p>&ldquo;Get the certificate first. Everything else (the tax holiday, the IP rebates, the seed fund) requires you to have it already.&rdquo;</p>
      </div>

      {/* SECTION 2 */}
      <div className="section-tag">02 &nbsp; Are You Eligible</div>
      <h2>Five conditions. All must be met simultaneously.</h2>

      <div className="elig-grid">
        <div className="elig-card">
          <span className="e-icon">01 &middot; Entity type</span>
          <h3>Right legal structure</h3>
          <p>Must be a Private Limited Company (including OPC), LLP, Registered Partnership Firm, or (newly added in 2026) a Cooperative Society. Sole proprietorships do not qualify.</p>
        </div>
        <div className="elig-card">
          <span className="e-icon">02 &middot; Age</span>
          <h3>Under 10 years old</h3>
          <p>The entity must not be more than 10 years from its date of incorporation. For Deep Tech startups, this window extends to 20 years under the 2026 notification.</p>
        </div>
        <div className="elig-card">
          <span className="e-icon">03 &middot; Turnover</span>
          <h3>Below &#8377;200 crore</h3>
          <p>Annual turnover must not have exceeded &#8377;200 crore in any financial year since incorporation. This ceiling was doubled from &#8377;100 crore by the February 2026 notification. Deep Tech startups get &#8377;300 crore.</p>
        </div>
        <div className="elig-card">
          <span className="e-icon">04 &middot; Original entity</span>
          <h3>Not a restructured business</h3>
          <p>Your startup must be a genuine new venture, not formed by splitting up or reconstructing an already existing business. Duplication of entities with similar addresses and directors also disqualifies.</p>
        </div>
      </div>

      <div className="elig-card" style={{ marginTop: "10px" }}>
        <span className="e-icon">05 &middot; Innovation</span>
        <h3>Demonstrable innovation or scalability</h3>
        <p style={{ margin: 0, fontSize: "13px", color: "var(--muted, #6B6460)", lineHeight: 1.6 }}>Your business must work towards innovation, development, or improvement of a product, process, or service, or demonstrate a scalable business model with high potential for employment or wealth creation. Pre-revenue startups qualify if they can articulate this through a pitch deck or concept note. A vague description (&ldquo;we use the latest technology&rdquo;) is the single most common reason for rejection.</p>
      </div>
    </>
  );
}
