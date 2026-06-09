import "../guide-article.css";
import "../../landing.css";
import SketchIcon from "@/app/components/SketchIcon";

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

      <div className="deep-tech">
        <span className="dt-label">New in 2026 &mdash; Deep Tech Category</span>
        <h3>AI, biotech, quantum, space, robotics? You get a wider window.</h3>
        <p>The 2026 notification created a separate Deep Tech startup category with a 20-year recognition window and &#8377;300 crore turnover ceiling, recognising that R&amp;D-intensive ventures have longer gestation periods. Sectors typically qualifying include AI, biotech, quantum computing, space tech, robotics, and advanced materials. Deep Tech classification is determined by DPIIT at their discretion.</p>
      </div>

      {/* SECTION 3 */}
      <div className="section-tag">03 &nbsp; What You Unlock</div>
      <h2>Six categories of benefit &mdash; most founders only know one.</h2>

      <div className="benefit-list">
        <div className="benefit-item">
          <div className="b-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="coins" size={24} /></div>
          <div className="b-content">
            <h4>3-Year Income Tax Holiday</h4>
            <p>100% deduction on profits for any 3 consecutive years within your first 10 years. Requires a separate 80-IAC application to the Inter-Ministerial Board after DPIIT recognition. Not automatic. Startups incorporated before 31 March 2030 are eligible.</p>
          </div>
          <span className="b-pill pill-gold">Sec 80-IAC</span>
        </div>

        <div className="benefit-item">
          <div className="b-icon" style={{ background: "rgba(46,125,69,0.1)" }}>&#9878;&#65039;</div>
          <div className="b-content">
            <h4>Angel Tax &mdash; Abolished</h4>
            <p>Section 56(2)(viib), which used to tax funding raised above fair market value, was repealed from FY 2025-26 for all companies via the Union Budget 2024. Angel tax no longer exists for any startup, DPIIT recognition or not.</p>
          </div>
          <span className="b-pill pill-green">Repealed</span>
        </div>

        <div className="benefit-item">
          <div className="b-icon" style={{ background: "rgba(200,154,46,0.1)" }}><SketchIcon name="magnifier" size={24} /></div>
          <div className="b-content">
            <h4>80% Patent Fee Rebate + Fast-Track Examination</h4>
            <p>Patents are expensive and slow. DPIIT recognition gives you an 80% rebate on patent filing fees and access to expedited examination. Trademark applications get a 50% fee rebate. Empanelled facilitators help you file.</p>
          </div>
          <span className="b-pill pill-purple">IPR</span>
        </div>

        <div className="benefit-item">
          <div className="b-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="clipboard" size={24} /></div>
          <div className="b-content">
            <h4>Self-Certification Under Labour and Environmental Laws</h4>
            <p>Self-certify compliance under 6 labour laws (including EPF, ESI, Gratuity Act) and 3 environmental laws for 5 years. Eliminates routine government inspections, a major operational relief for early-stage companies.</p>
          </div>
          <span className="b-pill pill-gold">Compliance</span>
        </div>

        <div className="benefit-item">
          <div className="b-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="factory" size={24} /></div>
          <div className="b-content">
            <h4>Government Procurement &mdash; No Prior Experience Required</h4>
            <p>DPIIT-recognised startups can bid for government tenders without the experience or turnover requirements that normally disqualify new companies. Direct access to GeM (Government e-Marketplace).</p>
          </div>
          <span className="b-pill pill-green">GeM Access</span>
        </div>

        <div className="benefit-item">
          <div className="b-icon" style={{ background: "rgba(200,154,46,0.1)" }}><SketchIcon name="sprout" size={24} /></div>
          <div className="b-content">
            <h4>Government Funding Schemes</h4>
            <p>Access to Startup India Seed Fund Scheme (up to &#8377;20 lakh grant + &#8377;50 lakh debt for scaling), Credit Guarantee Scheme (up to &#8377;20 crore, revised May 2025), and Fund of Funds 2.0 (&#8377;10,000 crore via SIDBI). DPIIT recognition is the prerequisite for all of these.</p>
          </div>
          <span className="b-pill pill-purple">Funding</span>
        </div>
      </div>
    </>
  );
}
