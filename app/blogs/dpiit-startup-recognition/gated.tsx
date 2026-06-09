import "server-only";
import "../guide-article.css";
import "../../landing.css";
import Link from "next/link";
import SketchIcon from "@/app/components/SketchIcon";

export function Gated() {
  return (
    <>
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

      {/* SECTION 4 */}
      <div className="section-tag">04 &nbsp; How to Apply</div>
      <h2>Fully online. No government fee. Certificate in 2&ndash;10 days.</h2>

      <p>The entire process runs through the National Single Window System (NSWS) at nsws.gov.in. There is no government fee at any stage. Here is the exact path:</p>

      <div className="steps">
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">1</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Create an account on NSWS <span className="step-badge">nsws.gov.in</span></h4>
            <p>Register using your PAN, Aadhaar-linked mobile number, and email. This is the central government portal where all approvals (not just startup recognition) are processed.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">2</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Add &ldquo;Registration as a Startup&rdquo; to your dashboard</h4>
            <p>Log in, click &ldquo;Add Approvals&rdquo; then &ldquo;Central Approvals,&rdquo; and find the startup registration form. Add it to your dashboard to begin the application.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">3</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Fill in entity details and describe your innovation</h4>
            <p>This is the most critical step. You will provide your incorporation details, turnover for each financial year, and a written description of what makes your startup innovative or scalable. This description is the primary basis for approval or rejection; vague answers get rejected.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">4</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Upload supporting documents</h4>
            <p>Certificate of Incorporation (or Partnership registration), a brief pitch deck or concept note (optional but strongly recommended), and annual turnover details. Aadhaar of the authorised representative is required for OTP verification.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">5</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Submit and receive your Certificate of Recognition <span className="step-badge">2&ndash;10 days</span></h4>
            <p>DPIIT reviews applications and issues the certificate (along with your unique DPIIT recognition number) via email. Most clean applications are approved within 2&ndash;7 working days.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">6</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Apply separately for Section 80-IAC tax holiday</h4>
            <p>The tax holiday is not automatic. After receiving your DPIIT certificate, you must apply to the Inter-Ministerial Board with a separate, more detailed application. Approval takes 3&ndash;12 months. This is where strong documentation of your innovation is most important.</p>
          </div>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="section-tag">05 &nbsp; What Gets Applications Rejected</div>
      <h2>Four mistakes that slow or kill your application</h2>

      <div className="mistake-list">
        <div className="mistake-item">
          <span className="m-x">&#10005;</span>
          <p><strong style={{ color: "#A0380A" }}>Vague innovation description.</strong> Statements like &ldquo;we provide quality services&rdquo; or &ldquo;we use the latest technology&rdquo; are insufficient. DPIIT evaluates whether your solution involves genuine innovation, improvement, or a scalable model. Describe the specific problem, your novel approach, and the scale of impact.</p>
        </div>
        <div className="mistake-item">
          <span className="m-x">&#10005;</span>
          <p><strong style={{ color: "#A0380A" }}>Assuming DPIIT recognition gives the tax holiday automatically.</strong> It does not. The 80-IAC tax benefit requires a completely separate application to the Inter-Ministerial Board. Many founders receive their DPIIT certificate and wait for a tax break that will never arrive unless they file the second application.</p>
        </div>
        <div className="mistake-item">
          <span className="m-x">&#10005;</span>
          <p><strong style={{ color: "#A0380A" }}>Applying under the wrong entity type.</strong> Sole proprietorships are not eligible. Neither are companies formed by splitting or reconstructing an existing business. Verify your entity structure before applying.</p>
        </div>
        <div className="mistake-item">
          <span className="m-x">&#10005;</span>
          <p><strong style={{ color: "#A0380A" }}>Waiting too long.</strong> The 80-IAC tax holiday is available for startups incorporated before 31 March 2030, but you cannot claim it retroactively for years you were already profitable before recognition. Every month of delay on a profitable company is tax-free income foregone.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <span className="cta-eye">Bodha Ventures &mdash; We Handle This For You</span>
        <h2>Get recognised. We&apos;ll do the paperwork.</h2>
        <p>From filing your DPIIT application with a professional innovation description to managing your 80-IAC Inter-Ministerial Board application, Bodha Ventures handles the full process so you can focus on building.</p>
        <Link href="/vcfo" className="cta-btn">Talk to Bodha Ventures &rarr;</Link>
        <span className="cta-note">Free initial consultation &nbsp;&middot;&nbsp; No hidden fees &nbsp;&middot;&nbsp; Trusted by founders across India</span>
      </div>

      <div className="footnote">
        <strong>Sources:</strong> DPIIT Gazette Notification G.S.R. 108(E), 4 February 2026 &nbsp;&middot;&nbsp; Startup India Portal (startupindia.gov.in) &nbsp;&middot;&nbsp; NSWS Portal (nsws.gov.in) &nbsp;&middot;&nbsp; Union Budget 2024 (angel tax repeal) &nbsp;&middot;&nbsp; Union Budget 2025-26 (80-IAC extension to March 2030). This article is for informational purposes. For advice specific to your startup, consult Bodha Ventures directly.
      </div>
    </>
  );
}
