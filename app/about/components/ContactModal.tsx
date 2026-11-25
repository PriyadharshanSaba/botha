"use client";

import { useRef, useState } from "react";
import SketchIcon from "@/app/components/SketchIcon";
import { useModalDialog } from "@/app/components/ui/useModalDialog";

const fieldStyle = { padding: "11px 14px", border: "1px solid #ddd", borderRadius: 7, fontSize: 14, fontFamily: "inherit", outline: "none" } as const;

// The /about general-enquiry form (posts type "general" to /api/contact), unchanged apart from dialog semantics.
export default function ContactModal({
  open,
  done,
  onDone,
  onClose,
}: {
  open: boolean;
  done: boolean;
  onDone: () => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  useModalDialog(dialogRef, open, onClose);

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "general", ...contactForm }),
      });
      onDone();
    } finally {
      setContactSubmitting(false);
    }
  }

  return (
    <div
      hidden={!open}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 2000, display: open ? "flex" : "none", alignItems: "center", justifyContent: "center", padding: "20px" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="contact-title" tabIndex={-1} style={{ background: "#fdfcf9", borderRadius: 12, padding: "40px 36px", width: "100%", maxWidth: 480, position: "relative", outline: "none" }}>
        <button type="button" aria-label="Close" onClick={onClose} style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#999", lineHeight: 1 }}>&times;</button>
        {done ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ marginBottom: 16, color: "var(--gold)", lineHeight: 0, display: "flex", justifyContent: "center" }}><SketchIcon name="check-circle" size={40} /></div>
            <div id="contact-title" style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message received.</div>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>We&apos;ll be in touch shortly. Thank you for reaching out.</p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit}>
            <div id="contact-title" style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Get in Touch</div>
            <p style={{ color: "#666", fontSize: 13, marginBottom: 24, lineHeight: 1.6 }}>Tell us a little about yourself and how we can help.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input required aria-label="Full name" placeholder="Full name" value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} style={fieldStyle} />
              <input required type="email" aria-label="Email address" placeholder="Email address" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} style={fieldStyle} />
              <input aria-label="Phone (optional)" placeholder="Phone (optional)" value={contactForm.phone} onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))} style={fieldStyle} />
              <textarea required aria-label="How can we help you?" placeholder="How can we help you?" rows={4} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} style={{ ...fieldStyle, resize: "vertical" }} />
            </div>
            <button type="submit" disabled={contactSubmitting}
              style={{ marginTop: 20, width: "100%", padding: "13px", background: "#0d0d0d", color: "#fff", border: "none", borderRadius: 7, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.3px" }}>
              {contactSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
