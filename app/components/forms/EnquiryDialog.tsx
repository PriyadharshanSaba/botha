"use client";

import "./forms.css";
import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useModalDialog } from "../ui/useModalDialog";
import { CheckIcon, ChevronRightIcon, CloseIcon, PhoneIcon } from "../LineIcons";
import { ENQUIRY_FORMS, ENQUIRY_SHELL, type EnquiryKind } from "./enquiryForms";
import FormField from "./FormField";

const MEET_HREF = "/meet";

// Opens over the current page. Mount it only while open: each opening starts with a fresh form.
export default function EnquiryDialog({ kind, onClose }: { kind: EnquiryKind; onClose: () => void }) {
  const { lang } = useLanguage();
  const form = ENQUIRY_FORMS[kind](lang);
  const c = ENQUIRY_SHELL[lang];
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  useModalDialog(dialogRef, true, onClose);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = { type: kind };
    for (const field of form.fields) {
      payload[field.name] = field.kind === "chips"
        ? data.getAll(field.name).join(", ")
        : String(data.get(field.name) ?? "").trim();
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fm-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="fm-dialog" tabIndex={-1}>
        <button type="button" className="fm-close" aria-label={c.close} onClick={onClose}>
          <CloseIcon />
        </button>

        {status === "sent" ? (
          <div className="fm-success" role="status">
            <span className="fm-success-icon" aria-hidden="true"><CheckIcon size={28} /></span>
            <h2 id={titleId} className="fm-title">{c.successTitle}</h2>
            <p className="fm-sub">{c.successBody}</p>
            <button type="button" className="ui-btn" onClick={onClose}>{c.done}</button>
          </div>
        ) : (
          <>
            <div className="fm-head">
              <span className="ui-eyebrow">{form.eyebrow}</span>
              <h2 id={titleId} className="fm-title">{form.title}</h2>
              <p className="fm-sub">{form.subtitle}</p>
            </div>

            <Link href={MEET_HREF} className="fm-call">
              <span className="fm-call-icon" aria-hidden="true"><PhoneIcon /></span>
              <span className="fm-call-text">
                <strong>{c.callTitle}</strong>
                <span>{c.callBody}</span>
              </span>
              <span className="fm-call-link">
                {c.callLink}
                <ChevronRightIcon />
              </span>
            </Link>

            <form className="fm-form" onSubmit={handleSubmit}>
              <div className="fm-grid">
                {form.fields.map((field) => (
                  <FormField key={field.name} field={field} idPrefix={`${kind}-`} optionalLabel={c.optional} />
                ))}
              </div>
              {status === "error" && <p className="fm-error" role="alert">{c.error}</p>}
              <button type="submit" className="ui-btn fm-submit" disabled={status === "sending"}>
                {status === "sending" ? c.sending : form.submit}
              </button>
              <p className="fm-privacy">{c.privacy}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
