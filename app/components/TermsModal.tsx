"use client";

interface TermsModalProps {
  onAccept?: () => void;
  onClose: () => void;
  viewOnly?: boolean;
}

export default function TermsModal({ onAccept, onClose, viewOnly = false }: TermsModalProps) {
  return (
    <div className="terms-overlay" onClick={onClose}>
      <div className="terms-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="terms-header">
          <div>
            <div className="terms-eyebrow">Legal · Governed by Indian Law</div>
            <h2 className="terms-title">Terms of Use</h2>
            <p className="terms-subtitle">Bodha Ventures LLP · Effective 01 April 2026</p>
          </div>
          <button className="terms-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Scrollable body */}
        <div className="terms-body">

          <section className="ts">
            <div className="ts-num">01</div>
            <h3>Acceptance of Terms</h3>
            <p>These Terms of Use ("Terms") constitute a legally binding agreement between you and Bodha Ventures LLP, governing your access to our website, courses, tools, and content.</p>
            <div className="ts-callout warning">
              <strong>Binding Agreement —</strong> By creating an account or using any of our services, you confirm that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree, you must not use our platform.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">02</div>
            <h3>About Bodha Ventures</h3>
            <p>Bodha Ventures LLP is a financial education company registered in India and headquartered in Bengaluru, Karnataka. We offer Personal Finance Courses, free financial calculators and tools, and blog content. Our Virtual CFO services are governed by separate agreements.</p>
          </section>

          <section className="ts">
            <div className="ts-num">03</div>
            <h3>Eligibility</h3>
            <p>To use our platform you must be at least 18 years of age, legally capable of entering into a binding contract under Indian law, and provide accurate, complete information during registration.</p>
            <div className="ts-callout warning">
              <strong>Minors Strictly Prohibited —</strong> Our platform is not intended for individuals under 18. Bodha Ventures LLP reserves the right to terminate any account found to belong to a minor without notice or refund.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">04</div>
            <h3>User Accounts</h3>
            <p>You must provide truthful and complete information and keep your account details current. You are solely responsible for maintaining the confidentiality of your login credentials. Each account may only be used by a single individual; accounts are strictly personal and non-transferable.</p>
            <div className="ts-callout warning">
              <strong>Strictly One Device / One User —</strong> Sharing login credentials or facilitating access by others is a material breach of these Terms and will result in immediate account suspension without refund.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">05</div>
            <h3>Courses & Access</h3>
            <p>Upon payment you receive a limited, non-exclusive, revocable licence to view course content for personal, non-commercial educational purposes for one (1) year from the date of purchase. All content is for online viewing only — downloading, screen-recording, or reproducing content in any form is strictly prohibited and constitutes infringement of our intellectual property rights.</p>
          </section>

          <section className="ts">
            <div className="ts-num">06</div>
            <h3>Payment & No Refund Policy</h3>
            <p>Course pricing is displayed at the time of purchase and is exclusive of applicable GST. A GST-compliant invoice will be issued to your registered email address upon successful payment.
All Sales Are Final — All course purchases are non-refundable under any circumstances, including change of mind, failure to use the course within the access period, dissatisfaction with content, or technical difficulties on your device.
By completing your purchase, you acknowledge and agree that no refunds, transfers, or credits will be issued under any circumstances. We strongly encourage you to review the course details, curriculum, and inclusions carefully before purchasing.</p>
          </section>

          <section className="ts">
            <div className="ts-num">07</div>
            <h3>Acceptable Use</h3>
            <p>You agree to use the platform solely for lawful, personal, and non-commercial purposes. Prohibited conduct includes: sharing or reselling access, downloading or screen-recording content, using automated tools to extract content, reverse-engineering the platform, impersonating any person, using content for commercial purposes or AI training, and attempting to gain unauthorised access to any part of the platform.</p>
          </section>

          <section className="ts">
            <div className="ts-num">08</div>
            <h3>Intellectual Property</h3>
            <p>All content on this platform — including courses, tools, blog articles, graphics, logos, and design — is the exclusive intellectual property of Bodha Ventures LLP, protected under the Copyright Act, 1957 and other applicable laws. No content may be reproduced, distributed, or used to create derivative works without prior written permission.</p>
            <div className="ts-callout warning">
              <strong>AI Training Prohibited —</strong> Use of any content from this platform for training, fine-tuning, or developing AI or machine learning models is strictly prohibited without prior written authorisation.
            </div>
          </section>

          <section className="ts">
            <div className="ts-num">09</div>
            <h3>Financial Calculators & Tools</h3>
            <p>All calculator outputs are indicative estimates only and do not constitute personalised financial advice. Results may contain assumptions or rounding. You assume full responsibility for any decision made in reliance on calculator outputs. Always consult a qualified professional before acting on any financial information.</p>
          </section>

          <section className="ts">
            <div className="ts-num">10</div>
            <h3>Blogs & Educational Content</h3>
            <p>Blog content is for general informational purposes only and may not reflect current laws, tax rules, or market conditions. Bodha Ventures LLP expressly disclaims any obligation to update content after publication. You may not reproduce or redistribute blog content without prior written permission.</p>
          </section>

          <section className="ts">
            <div className="ts-num">11</div>
            <h3>Educational Disclaimer</h3>
            <div className="ts-callout warning">
              <strong>Not Financial Advice —</strong> Nothing on this platform constitutes financial advice, investment advice, tax advice, legal advice, or any form of regulated professional consultation. All content is strictly for educational and informational purposes.
            </div>
            <p>Bodha Ventures LLP expressly disclaims all liability for any financial loss, investment loss, tax liability, or other outcome arising from your reliance on any content on this platform. No advisory or fiduciary relationship is created by your use of this platform.</p>
          </section>

          <section className="ts">
            <div className="ts-num">12</div>
            <h3>Limitation of Liability</h3>
            <p>Our total liability for claims arising from a course purchase shall not exceed ₹999. For free services, our total liability shall not exceed ₹500. We are not liable for indirect, incidental, consequential, or punitive damages of any nature. Any claim must be raised in writing within 90 days of the triggering event.</p>
          </section>

          <section className="ts">
            <div className="ts-num">13</div>
            <h3>Indemnification</h3>
            <p>You agree to indemnify and hold harmless Bodha Ventures LLP from any claims, damages, losses, and expenses arising from your use or misuse of the platform, your violation of these Terms, your infringement of any third-party rights, or any financial decision made in reliance on platform content.</p>
          </section>

          <section className="ts">
            <div className="ts-num">14</div>
            <h3>Termination</h3>
            <p>We may suspend or terminate your account immediately and without notice if you breach any provision of these Terms. Termination for breach does not entitle you to any refund. You may close your account at any time by contacting <a href="mailto:bodhaventures@gmail.com">bodhaventures@gmail.com</a>.</p>
          </section>

          <section className="ts">
            <div className="ts-num">15</div>
            <h3>Force Majeure</h3>
            <p>Bodha Ventures LLP shall not be liable for failure or delay arising from causes beyond our reasonable control, including natural disasters, cyberattacks, infrastructure failures, government orders, or public health emergencies. Such events do not entitle you to a refund or access extension.</p>
          </section>

          <section className="ts">
            <div className="ts-num">16</div>
            <h3>Modifications to Terms</h3>
            <p>We reserve the right to revise these Terms at any time. Material changes will be communicated via email and by updating the "Last Updated" date. Continued use of the platform after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section className="ts">
            <div className="ts-num">17</div>
            <h3>Governing Law & Disputes</h3>
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka, India. Before initiating legal proceedings, you agree to attempt good-faith resolution by contacting us at <a href="mailto:bodhaventures@gmail.com">bodhaventures@gmail.com</a> and allowing 30 days for resolution.</p>
          </section>

          <section className="ts">
            <div className="ts-num">18–20</div>
            <h3>Severability, Entire Agreement & Contact</h3>
            <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions continue in full force. These Terms constitute the entire agreement between you and Bodha Ventures LLP regarding use of the platform and supersede all prior agreements.</p>
            <p style={{ marginTop: 8 }}>For any queries contact: <a href="mailto:bodhaventures@gmail.com">bodhaventures@gmail.com</a></p>
          </section>

        </div>

        {/* Footer */}
        <div className="terms-footer">
          {viewOnly ? (
            <div className="terms-footer-actions">
              <button className="terms-btn-accept" onClick={onClose}>Close</button>
            </div>
          ) : (
            <>
              <p className="terms-footer-note">By clicking Accept, you agree to the Terms of Use above.</p>
              <div className="terms-footer-actions">
                <button className="terms-btn-cancel" onClick={onClose}>Cancel</button>
                <button className="terms-btn-accept" onClick={onAccept}>Accept & Continue</button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
