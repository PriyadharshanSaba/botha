"use client";

interface PrivacyModalProps {
  onClose: () => void;
}

export default function PrivacyModal({ onClose }: PrivacyModalProps) {
  return (
    <div className="terms-overlay" onClick={onClose}>
      <div className="terms-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="terms-header">
          <div>
            <div className="terms-eyebrow">Legal · DPDP Act 2023 Compliant</div>
            <h2 className="terms-title">Privacy Policy</h2>
            <p className="terms-subtitle">Bodha Ventures LLP · Effective 01 April 2026</p>
          </div>
          <button className="terms-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Scrollable body */}
        <div className="terms-body">

          <section className="ts">
            <div className="ts-num">01</div>
            <h3>Introduction</h3>
            <p>Bodha Ventures LLP ("Bodha", "we", "our", "us") is a financial services and education company headquartered in Bengaluru, India. We are fully committed to protecting your personal data and maintaining transparent practices in how it is collected, processed, and safeguarded.</p>
            <p>This Privacy Policy applies to all users ("you", "your") who access or interact with our digital properties and services, including:</p>
            <ul style={{ margin: "8px 0 8px 18px", fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
              <li>Personal Finance Courses (with user accounts and login functionality)</li>
              <li>Virtual CFO (vCFO) advisory services</li>
              <li>Venture Capital activities (internal capital deployment)</li>
              <li>Financial tools and calculators</li>
              <li>Blogs and educational content</li>
            </ul>
            <p>By using our website or services, you acknowledge and agree to the practices described in this Policy. This document is legally binding. If you do not agree, please discontinue use of our platform.</p>
            <div className="ts-callout">
              <strong>Compliance —</strong> We operate in full compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, and other applicable Indian data protection laws.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">02</div>
            <h3>Information We Collect</h3>
            <p>We collect only the minimum personal data necessary to deliver and improve our services. We do not engage in excessive or speculative data collection.</p>
            <p><strong>A. Personal Information</strong> — Collected when you register, purchase, or contact us: Full Name, Email Address, Phone Number, Billing Address, and payment details (processed exclusively via PCI-DSS compliant third-party gateways; we do not store card data).</p>
            <p><strong>B. Account & Usage Data</strong> — For course users: login credentials (stored using industry-standard hashing — never in plain text), course progress and completion status, platform preferences, and interactions with tools and content.</p>
            <div className="ts-callout warning">
              <strong>Sensitive Data Notice —</strong> Financial and business data shared in the context of vCFO engagements is treated with the highest level of confidentiality. It is governed by a separate engagement agreement and is never used for marketing, analytics, or shared with any third party absent a legal obligation.
            </div>
            <p><strong>D. Automatically Collected Technical Data</strong> — IP address and approximate geographic location, browser type and device information, pages visited and time spent, referral URLs, and cookie data (see Section 8).</p>
          </section>

          <section className="ts">
            <div className="ts-num">03</div>
            <h3>How We Use Your Information</h3>
            <p>We use your personal data solely for purposes that are lawful, specific, and necessary. We do not engage in profiling, algorithmic decision-making, or behavioral advertising. Uses include: providing course access and account management; delivering vCFO and advisory services; processing payments and generating invoices; responding to support queries; improving platform performance; sending transactional communications (mandatory); sending newsletters or educational emails (optional — you may opt out at any time); and legal compliance and fraud prevention.</p>
          </section>

          <section className="ts">
            <div className="ts-num">04</div>
            <h3>Legal Basis for Processing</h3>
            <p>Under the Digital Personal Data Protection Act, 2023, we process your personal data on the following lawful grounds:</p>
            <ul style={{ margin: "8px 0 8px 18px", fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
              <li><strong>Consent</strong> — For sign-ups, optional marketing communications, and non-essential cookies. You may withdraw consent at any time without affecting the lawfulness of prior processing.</li>
              <li><strong>Contractual Necessity</strong> — For delivering courses, managing accounts, processing payments, and fulfilling vCFO service obligations.</li>
              <li><strong>Legitimate Use</strong> — For fraud prevention, platform security, and improving our services, where such use does not override your fundamental rights.</li>
              <li><strong>Legal Obligation</strong> — Where processing is required to comply with applicable Indian law, a court order, or regulatory authority.</li>
            </ul>
            <div className="ts-callout">
              <strong>Your Control —</strong> Where processing is based on consent, you may withdraw it at any time by contacting us at the email listed in Section 17. Withdrawal does not affect the legality of processing that occurred before withdrawal.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">05</div>
            <h3>Data Sharing & Disclosure</h3>
            <div className="ts-callout warning">
              <strong>We Do Not Sell Your Data —</strong> Bodha Ventures LLP does not sell, rent, trade, or monetise your personal data in any form, to any party, for any purpose.
            </div>
            <p>We may share your data only in the following limited circumstances:</p>
            <p><strong>A. Trusted Service Providers</strong> — We engage third-party vendors solely to support our operations (payment gateways, cloud hosting, analytics using anonymised data, and communication tools for transactional emails). We require all vendors to handle your data only for the specific purpose for which it was shared.</p>
            <div className="ts-callout warning">
              <strong>Third-Party Limitation —</strong> While we take reasonable steps to select reputable vendors, Bodha Ventures LLP cannot guarantee the independent data practices of third-party service providers.
            </div>
            <p><strong>B. Legal & Regulatory Authorities</strong> — We will disclose data if required by a valid court order, law enforcement request, or regulatory mandate under Indian law.</p>
            <p><strong>C. Business Transfers</strong> — In the event of a merger, acquisition, or restructuring, personal data may be transferred to the successor entity, subject to equivalent privacy protections and your notification.</p>
          </section>

          <section className="ts">
            <div className="ts-num">06</div>
            <h3>Data Security</h3>
            <p>We implement layered, industry-standard security measures including: SSL/TLS encryption for all data in transit; encrypted storage for sensitive data at rest; hashed and salted password storage (passwords are never stored in plain text); role-based access controls; regular security audits; and incident response procedures for potential data breaches.</p>
            <div className="ts-callout warning">
              <strong>Important Notice —</strong> No system is entirely immune to security risks. In the event of a data breach affecting your rights or interests, we will notify you and the relevant authority as required under the DPDP Act, 2023.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">07</div>
            <h3>Data Retention</h3>
            <p>We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law:</p>
            <ul style={{ margin: "8px 0 8px 18px", fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
              <li>Account and profile data — Until account deletion request is actioned</li>
              <li>Course progress and engagement history — Duration of account + 12 months post-deletion</li>
              <li>Financial records and invoices — Minimum 7 years (as required under Indian tax law)</li>
              <li>vCFO engagement records — As specified in the engagement agreement</li>
              <li>Technical/analytics data — Anonymised and retained for up to 24 months</li>
              <li>Support and correspondence records — 3 years from last interaction</li>
            </ul>
            <p>Upon expiry of the applicable retention period, data is securely deleted or anonymised.</p>
          </section>

          <section className="ts">
            <div className="ts-num">08</div>
            <h3>Cookies & Tracking Technologies</h3>
            <p>We use cookies and similar tracking technologies to operate, secure, and improve our platform. Cookie types: <strong>Essential</strong> (login sessions, security — no consent required); <strong>Performance</strong> (page speed analytics — consent required); <strong>Analytical</strong> (user behaviour insights — consent required); <strong>Marketing</strong> (not currently used).</p>
            <p>You can manage or disable cookies through your browser settings. Disabling non-essential cookies will not affect your access to core features.</p>
          </section>

          <section className="ts">
            <div className="ts-num">09</div>
            <h3>Third-Party Links</h3>
            <p>Our website may contain hyperlinks to third-party websites, tools, or resources provided for convenience and informational purposes only. Bodha Ventures LLP has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites. We strongly encourage you to review the privacy policy of any third-party site you visit.</p>
          </section>

          <section className="ts">
            <div className="ts-num">10</div>
            <h3>Your Rights</h3>
            <p>Under the Digital Personal Data Protection Act, 2023, you have the following rights with respect to your personal data:</p>
            <ul style={{ margin: "8px 0 8px 18px", fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
              <li><strong>Right to Access</strong> — Request a summary of the personal data we hold about you and how it is being used.</li>
              <li><strong>Right to Correction</strong> — Request correction of inaccurate or incomplete personal data we hold about you.</li>
              <li><strong>Right to Erasure</strong> — Request deletion of your personal data, subject to legal retention obligations.</li>
              <li><strong>Right to Withdraw Consent</strong> — Withdraw consent to processing at any time, without affecting past lawful processing.</li>
              <li><strong>Right to Grievance Redressal</strong> — Lodge a complaint with our Grievance Officer (Section 14) or the Data Protection Board of India.</li>
              <li><strong>Right to Nominate</strong> — Nominate an individual to exercise your data rights on your behalf in the event of your death or incapacity.</li>
            </ul>
            <p>To exercise any of the above rights, please contact us at <a href="mailto:info@bodhaventures.in">info@bodhaventures.in</a>. We will respond within 30 days of receiving a valid request.</p>
          </section>

          <section className="ts">
            <div className="ts-num">11</div>
            <h3>Children&apos;s Privacy</h3>
            <div className="ts-callout warning">
              <strong>Age Restriction —</strong> Our services are strictly intended for individuals aged 18 years and above. We do not knowingly collect, process, or store personal data from minors. If we become aware that data has been collected from a person under 18 without appropriate consent, we will delete it immediately.
            </div>
            <p>If you believe a minor has provided us with personal information, please notify us immediately at <a href="mailto:info@bodhaventures.in">info@bodhaventures.in</a>.</p>
          </section>

          <section className="ts">
            <div className="ts-num">12</div>
            <h3>International Data Transfers</h3>
            <p>Our primary operations and data storage are based in India. However, certain third-party service providers (such as cloud hosting or analytics platforms) may process data outside India. Where such transfers occur, we ensure that adequate safeguards are in place, including contractual obligations aligned with DPDP Act requirements, data processing agreements with sub-processors, and transfer only to jurisdictions notified by the Central Government as having adequate protections.</p>
          </section>

          <section className="ts">
            <div className="ts-num">13</div>
            <h3>Updates to This Policy</h3>
            <p>We may revise this Privacy Policy from time to time to reflect changes in our practices, services, or applicable legal requirements. When we make material changes, we will update the "Last Updated" date, notify registered users via email for significant changes, and where required, seek fresh consent for new or materially different processing.</p>
            <p>Continued use of our platform after changes take effect constitutes acceptance of the revised Policy.</p>
          </section>

          <section className="ts">
            <div className="ts-num">14</div>
            <h3>Grievance Officer</h3>
            <p>In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, we have designated a Grievance Officer to address data-related concerns:</p>
            <div className="ts-callout">
              <strong>Name:</strong> S Priyadharshan<br />
              <strong>Designation:</strong> Grievance Officer, Bodha Ventures LLP<br />
              <strong>Email:</strong> <a href="mailto:info@bodhaventures.in">info@bodhaventures.in</a><br />
              <strong>Address:</strong> Bodha Ventures LLP, Bengaluru, Karnataka, India<br />
              <strong>Response Time:</strong> Within 30 days of receipt of grievance
            </div>
            <p>If your grievance is not resolved to your satisfaction, you may escalate the matter to the <strong>Data Protection Board of India</strong>, once constituted under the DPDP Act, 2023.</p>
          </section>

          <section className="ts">
            <div className="ts-num">15</div>
            <h3>Educational Disclaimer</h3>
            <div className="ts-callout warning">
              <strong>Not Financial Advice —</strong> Nothing on this platform constitutes financial advice, investment advice, tax advice, legal advice, or any form of professional consultation. All content is provided strictly for educational and informational purposes.
            </div>
            <p>This disclaimer applies to all free and paid content on the platform, including Personal Finance Courses, Financial Calculators and Tools, and Blog Articles and Educational Content.</p>
            <p><strong>Bodha Ventures LLP expressly disclaims all liability</strong> for any financial loss, investment loss, tax liability, business loss, or any other direct or indirect outcome arising from your reliance on, or use of, any content, tool output, course material, or information available on this platform.</p>
            <p>You acknowledge that any financial decision you make based on content accessed through this platform is made entirely at your own risk and on your own judgment. We strongly recommend consulting a qualified financial, tax, or legal professional before making any significant financial decision.</p>
            <div className="ts-callout">
              <strong>vCFO Services — Separate Scope —</strong> This disclaimer does not apply to formal vCFO engagements entered into under a separate signed agreement. The scope, liability, and terms for vCFO advisory services are governed exclusively by the relevant engagement agreement.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">16</div>
            <h3>Limitation of Liability</h3>
            <p>While Bodha Ventures LLP takes its data protection obligations seriously and implements reasonable safeguards, you acknowledge and agree to the following limitations on our liability:</p>
            <p><strong>A. Third-Party Service Providers</strong> — We are not liable for any loss, damage, or unauthorised access to your personal data that arises from the independent acts, omissions, or security failures of third-party service providers, provided we have taken reasonable steps to select reputable vendors.</p>
            <p><strong>B. User-Side Security</strong> — You are solely responsible for maintaining the confidentiality of your account credentials. Bodha Ventures LLP shall not be held liable for any unauthorised access to your account resulting from your failure to secure your login details.</p>
            <p><strong>C. Force Majeure & Unforeseen Events</strong> — We shall not be liable for any data incidents arising from circumstances beyond our reasonable control, including cyberattacks, natural disasters, telecommunications failures, or government-mandated actions.</p>
            <p><strong>D. Cap on Liability — Paid Courses</strong> — Our total aggregate liability for all claims arising out of or in connection with a paid course shall not exceed the amount actually paid by you for that transaction (₹999 for a one-year Personal Finance Course).</p>
            <p><strong>E. Cap on Liability — Free Services</strong> — For users accessing free services, our total liability shall not exceed ₹500 per incident.</p>
            <p><strong>F. Time Bar on Claims</strong> — Any claim arising out of or in connection with this Privacy Policy must be raised in writing within 90 days of the date on which you became aware of the event giving rise to the claim. Claims raised after this period are expressly time-barred.</p>
            <p><strong>G. No Liability for Indirect Loss</strong> — In no event shall Bodha Ventures LLP be liable for any indirect, incidental, consequential, special, or punitive damages, even if we have been advised of the possibility of such damages.</p>
            <div className="ts-callout">
              <strong>Statutory Carve-Out —</strong> Nothing in this section limits or excludes liability that cannot be lawfully limited or excluded under Indian law, including liability arising from wilful misconduct or gross negligence directly attributable to Bodha Ventures LLP.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">17</div>
            <h3>Contact Us</h3>
            <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us:</p>
            <div className="ts-callout">
              <strong>Company:</strong> Bodha Ventures LLP<br />
              <strong>Email:</strong> <a href="mailto:info@bodhaventures.in">info@bodhaventures.in</a><br />
              <strong>Location:</strong> Bengaluru, Karnataka, India
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="terms-footer">
          <div className="terms-footer-actions">
            <button className="terms-btn-accept" onClick={onClose}>Close</button>
          </div>
        </div>

      </div>
    </div>
  );
}
