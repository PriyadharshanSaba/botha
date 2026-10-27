"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/app/components/LineIcons";
import { Gold, Eyebrow } from "@/app/components/ui/parts";
import { NEED_VALUES, STAGE_VALUES, type VcfoCopy } from "../copy";

// Posts type "vcfo" to /api/contact, the same email the old long form sent.
export default function RequestForm({ c }: { c: VcfoCopy["request"] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = (key: string) => String(fd.get(key) ?? "").trim();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "vcfo",
          name: text("name"),
          company: text("company"),
          email: text("email"),
          phone: text("phone"),
          stage: text("stage"),
          service: text("service"),
          notes: text("notes"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="request" className="vc-request">
      <div className="vc-form-wrap">
        <div className="vc-request-text">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="vc-h2"><Gold line={c.title} /></h2>
          <p className="vc-lead">{c.intro}</p>
          <ul className="vc-promises">
            {c.promises.map((p) => (
              <li key={p}><CheckIcon size={18} />{p}</li>
            ))}
          </ul>
        </div>

        {status === "sent" ? (
          <div className="vc-form vc-sent" role="status">
            <span className="vc-sent-icon" aria-hidden="true"><CheckIcon size={28} /></span>
            <h3>{c.successTitle}</h3>
            <p>{c.successBody}</p>
          </div>
        ) : (
          <form className="vc-form" aria-label={c.formLabel} onSubmit={handleSubmit}>
            <div className="vc-field">
              <label htmlFor="vc-name">{c.name}</label>
              <input id="vc-name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="vc-field">
              <label htmlFor="vc-company">{c.company}</label>
              <input id="vc-company" name="company" type="text" autoComplete="organization" />
            </div>
            <div className="vc-field">
              <label htmlFor="vc-email">{c.email}</label>
              <input id="vc-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="vc-field">
              <label htmlFor="vc-phone">{c.phone}</label>
              <input id="vc-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="vc-field">
              <label htmlFor="vc-stage">{c.stage}</label>
              <select id="vc-stage" name="stage" defaultValue="">
                <option value="">{c.select}</option>
                {STAGE_VALUES.map((v, i) => <option key={v} value={v}>{c.stages[i]}</option>)}
              </select>
            </div>
            <div className="vc-field">
              <label htmlFor="vc-need">{c.need}</label>
              <select id="vc-need" name="service" defaultValue="">
                <option value="">{c.select}</option>
                {NEED_VALUES.map((v, i) => <option key={v} value={v}>{c.needs[i]}</option>)}
              </select>
            </div>
            <div className="vc-field vc-full">
              <label htmlFor="vc-notes">{c.notes} <span className="vc-opt">({c.optional})</span></label>
              <textarea id="vc-notes" name="notes" rows={3} />
            </div>
            {status === "error" && <p className="vc-error vc-full" role="alert">{c.error}</p>}
            <div className="vc-full vc-submit-row">
              <button type="submit" className="ui-btn" disabled={status === "sending"}>
                {status === "sending" ? c.sending : c.submit}
              </button>
              <span className="vc-reply">{c.reply}</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
