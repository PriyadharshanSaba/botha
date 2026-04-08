"use client";

import { useState } from "react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

export default function AppFooter() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="app-footer">
        <div className="app-footer-inner">
          <span className="app-footer-copy">
            &copy; {new Date().getFullYear()} Bodha Ventures LLP. All rights reserved.
          </span>
          <div className="app-footer-links">
            <button onClick={() => setShowPrivacy(true)}>Privacy Policy</button>
            <span className="app-footer-divider">·</span>
            <button onClick={() => setShowTerms(true)}>Terms of Use</button>
          </div>
        </div>
      </footer>

      {showTerms && (
        <TermsModal viewOnly onClose={() => setShowTerms(false)} />
      )}
      {showPrivacy && (
        <PrivacyModal onClose={() => setShowPrivacy(false)} />
      )}
    </>
  );
}
