"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Desktop account dropdown for signed-in visitors.
export default function HeaderAccountMenu({
  referralCode,
  onLogout,
}: {
  referralCode: string | null;
  onLogout: () => void;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="account-wrapper hm-hide-sm" ref={ref}>
      <button type="button" className="hm-textlink" aria-expanded={open} onClick={() => setOpen(!open)}>
        {t("account")}
        <span className={`account-arrow ${open ? "open" : ""}`} aria-hidden="true">&#9662;</span>
      </button>
      {open && (
        <div className="account-dropdown">
          {referralCode && (
            <div className="dropdown-referral">
              <span className="dropdown-referral-label">{t("referralCode")}</span>
              <span className="dropdown-referral-code">{referralCode}</span>
            </div>
          )}
          <Link href="/account" className="dropdown-item" onClick={() => setOpen(false)}>
            {t("account")}
          </Link>
          <button type="button" className="dropdown-item dropdown-logout" onClick={() => { setOpen(false); onLogout(); }}>
            {t("logout")}
          </button>
        </div>
      )}
    </div>
  );
}
