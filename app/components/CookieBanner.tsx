"use client";

import { useState } from "react";
import SketchIcon from "./SketchIcon";

interface Props {
  onSave?: (prefs: { analytics: boolean; marketing: boolean }) => void;
  onSaveAnon?: (prefs: { analytics: boolean; marketing: boolean }) => void;
  isLoggedIn: boolean;
}

export default function CookieBanner({ onSave, onSaveAnon, isLoggedIn }: Props) {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function persist(prefs: { analytics: boolean; marketing: boolean }) {
    setSaving(true);
    if (isLoggedIn) {
      await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prefs),
      });
      onSave?.(prefs);
    } else {
      const policyVersion = process.env.NEXT_PUBLIC_POLICY_VERSION ?? "2026-03";
      document.cookie = [
        `bodha_anon_consent=${JSON.stringify({ ...prefs, policyVersion })}`,
        "path=/",
        "max-age=2592000",
        "SameSite=Lax",
      ].join("; ");
      onSaveAnon?.(prefs);
    }
    setSaving(false);
  }

  return (
    <div style={s.root}>
      <style>{`
        @media (max-width: 600px) {
          .cookie-main-row { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
          .cookie-cta-group { flex-shrink: 1 !important; }
        }
      `}</style>
      <div style={s.banner}>

        {/* ── Main row ── */}
        <div style={s.mainRow} className="cookie-main-row">
          {/* Text block */}
          <div style={s.textBlock}>
            <p style={s.title}><span style={{ display: "inline-flex", verticalAlign: "middle", marginRight: 8, color: "var(--ink)", lineHeight: 0 }}><SketchIcon name="cookie" size={18} /></span>We use cookies</p>
            <p style={s.body}>
              We use cookies to keep you signed in and to understand how people
              use Bodha — so we can keep making it better. We never sell your data.
            </p>
          </div>

          {/* CTA buttons */}
          <div style={s.ctaGroup} className="cookie-cta-group">
            <button
              style={s.btnGhost}
              onClick={() => persist({ analytics: false, marketing: false })}
              disabled={saving}
            >
              Reject all
            </button>
            <button
              style={s.btnOutline}
              onClick={() => persist({ analytics, marketing })}
              disabled={saving}
            >
              {saving ? "Saving…" : "Accept all"}
            </button>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={s.divider} />

        {/* ── Customize row ── */}
        <button
          style={s.customizeRow}
          onClick={() => setCustomizeOpen((o) => !o)}
          aria-expanded={customizeOpen}
        >
          <span style={s.customizeLabel}>Customise preferences</span>
          <span style={s.customizeChevron}>{customizeOpen ? "▲" : "▼"}</span>
        </button>

        {/* ── Expandable toggles ── */}
        {customizeOpen && (
          <div style={s.toggleSection}>
            <div style={s.toggleGrid}>
              <Toggle
                label="Essential"
                description="Sign-in, security, language — always on"
                checked={true}
                disabled
              />
              <Toggle
                label="Analytics"
                description="Anonymous usage patterns to improve the product"
                checked={analytics}
                onChange={setAnalytics}
              />
              <Toggle
                label="Marketing"
                description="Personalised emails and outreach"
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <button
              style={s.btnSavePrefs}
              onClick={() => persist({ analytics, marketing })}
              disabled={saving}
            >
              {saving ? "Saving…" : "Save my preferences"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div style={s.toggleItem}>
      <div style={s.toggleText}>
        <span style={s.toggleLabel}>{label}</span>
        <span style={s.toggleDesc}>{description}</span>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        style={{
          ...s.switchTrack,
          background: checked ? "#18181b" : "#e4e4e7",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.4 : 1,
        }}
      >
        <span
          style={{
            ...s.switchThumb,
            transform: checked ? "translateX(16px)" : "translateX(2px)",
          }}
        />
      </button>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    padding: "0 20px 20px",
    pointerEvents: "none",
  },
  banner: {
    background: "#ffffff",
    border: "1px solid #e4e4e7",
    borderRadius: 14,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07), 0 20px 48px -8px rgba(0,0,0,0.12)",
    padding: "18px 22px 14px",
    width: "100%",
    maxWidth: 900,
    pointerEvents: "all",
  },

  /* Main row */
  mainRow: {
    display: "flex",
    alignItems: "center",
    gap: 32,
  },
  textBlock: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    margin: "0 0 4px",
    fontSize: 14,
    fontWeight: 700,
    color: "#18181b",
    letterSpacing: "-0.01em",
  },
  body: {
    margin: 0,
    fontSize: 13,
    color: "#71717a",
    lineHeight: 1.55,
  },
  ctaGroup: {
    display: "flex",
    gap: 8,
    flexShrink: 0,
  },
  btnGhost: {
    background: "transparent",
    border: "1px solid #e4e4e7",
    borderRadius: 8,
    padding: "8px 18px",
    fontSize: 13,
    fontWeight: 500,
    color: "#71717a",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  btnOutline: {
    background: "#18181b",
    border: "1px solid #18181b",
    borderRadius: 8,
    padding: "8px 18px",
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },

  /* Divider */
  divider: {
    height: 1,
    background: "#f4f4f5",
    margin: "14px 0 0",
  },

  /* Customize trigger */
  customizeRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    padding: "8px 0 2px",
    cursor: "pointer",
    width: "100%",
  },
  customizeLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#a1a1aa",
    letterSpacing: "0.01em",
  },
  customizeChevron: {
    fontSize: 9,
    color: "#a1a1aa",
    lineHeight: 1,
  },

  /* Toggle section */
  toggleSection: {
    paddingTop: 12,
  },
  toggleGrid: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
    marginBottom: 14,
  },
  toggleItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    background: "#fafafa",
    border: "1px solid #f4f4f5",
    borderRadius: 8,
    padding: "9px 14px",
  },
  toggleText: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 1,
  },
  toggleLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#27272a",
  },
  toggleDesc: {
    fontSize: 11,
    color: "#a1a1aa",
  },
  switchTrack: {
    position: "relative",
    width: 36,
    height: 20,
    borderRadius: 10,
    border: "none",
    flexShrink: 0,
    transition: "background 0.18s ease",
  },
  switchThumb: {
    position: "absolute",
    top: 2,
    width: 16,
    height: 16,
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
    transition: "transform 0.18s ease",
    display: "block",
  },
  btnSavePrefs: {
    background: "transparent",
    border: "1px solid #e4e4e7",
    borderRadius: 8,
    padding: "7px 16px",
    fontSize: 12,
    fontWeight: 500,
    color: "#52525b",
    cursor: "pointer",
  },
};
