"use client";
import { useEffect, useMemo, useState } from "react";
import "./meet.css";
import { useLanguage } from "../context/LanguageContext";
import BrandPage from "../components/ui/BrandPage";
import { Gold, Eyebrow } from "../components/ui/parts";
import { CheckIcon } from "../components/LineIcons";
import { addDays, firstOpenDate } from "../lib/meetings/calendar";
import { MEET_COPY, TOPIC_VALUES } from "./copy";
import DayPicker from "./components/DayPicker";

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
const BOOKING_WINDOW_DAYS = 60;

type Slot = { start: string; end: string };

function istDateString(d: Date): string {
  const ist = new Date(d.getTime() + IST_OFFSET_MS);
  return `${ist.getUTCFullYear()}-${String(ist.getUTCMonth() + 1).padStart(2, "0")}-${String(ist.getUTCDate()).padStart(2, "0")}`;
}

function fmtSlotTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" });
}

function fmtShort(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
  }) + " IST";
}

function fmtLong(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
  }) + " IST";
}

export default function MeetPage() {
  const { lang } = useLanguage();
  const c = MEET_COPY[lang];
  const today = useMemo(() => istDateString(new Date()), []);
  const lastDay = useMemo(() => addDays(today, BOOKING_WINDOW_DAYS), [today]);

  const [topic, setTopic] = useState(TOPIC_VALUES[0]);
  const [openWeekdays, setOpenWeekdays] = useState<number[] | null>(null);
  const [pickedDate, setPickedDate] = useState<string | null>(null);
  const [view, setView] = useState<{ year: number; month: number } | null>(null);
  const [fetched, setFetched] = useState<{ date: string; slots: Slot[] } | null>(null);
  const [pickedStart, setPickedStart] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<{ start: string; end: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/meetings/days")
      .then((r) => r.json())
      .then((j) => { if (!cancelled) setOpenWeekdays(Array.isArray(j.openWeekdays) ? j.openWeekdays : []); })
      .catch(() => { if (!cancelled) setOpenWeekdays([]); });
    return () => { cancelled = true; };
  }, []);

  // Until the visitor picks a day, show the first open one.
  const selectedDate = pickedDate ?? (openWeekdays ? firstOpenDate(today, openWeekdays, BOOKING_WINDOW_DAYS) : null);
  const shownView = view ?? (selectedDate
    ? { year: Number(selectedDate.slice(0, 4)), month: Number(selectedDate.slice(5, 7)) }
    : { year: Number(today.slice(0, 4)), month: Number(today.slice(5, 7)) });

  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    fetch(`/api/meetings/slots?date=${selectedDate}`)
      .then((r) => r.json())
      .then((j) => { if (!cancelled) setFetched({ date: selectedDate, slots: j.slots ?? [] }); })
      .catch(() => { if (!cancelled) setFetched({ date: selectedDate, slots: [] }); });
    return () => { cancelled = true; };
  }, [selectedDate]);

  const loadingSlots = !selectedDate || fetched?.date !== selectedDate;
  const slots = !loadingSlots && fetched ? fetched.slots : [];
  const selectedSlot = slots.find((s) => s.start === pickedStart) ?? null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot || !selectedDate) return;
    setSubmitting(true);
    setError(null);
    const fullNote = `Topic: ${topic}${note.trim() ? `\n${note.trim()}` : ""}`;
    const r = await fetch("/api/meetings/book", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, phone: phone || undefined, note: fullNote, start: selectedSlot.start }),
    });
    const j = await r.json().catch(() => ({}));
    setSubmitting(false);
    if (!r.ok) {
      setError(j.error || c.genericError);
      if (r.status === 409) {
        // Slot was taken: refresh the list.
        fetch(`/api/meetings/slots?date=${selectedDate}`).then((res) => res.json()).then((jj) => setFetched({ date: selectedDate, slots: jj.slots ?? [] }));
        setPickedStart(null);
      }
      return;
    }
    setConfirmed({ start: j.start, end: j.end });
  }

  if (confirmed) {
    return (
      <BrandPage className="meet-page">
        <section className="meet-confirmed" role="status">
          <span className="meet-confirmed-icon" aria-hidden="true"><CheckIcon size={28} /></span>
          <h1 className="meet-title">{c.bookedTitle}</h1>
          <p className="meet-confirmed-time">{fmtLong(confirmed.start)}</p>
          <p className="meet-subtitle">{c.bookedBody(email)}</p>
        </section>
      </BrandPage>
    );
  }

  const dayLabel = selectedDate
    ? new Date(`${selectedDate}T00:00:00Z`).toLocaleDateString(lang === "kn" ? "kn-IN" : "en-IN", { weekday: "short", day: "numeric", month: "long", timeZone: "UTC" })
    : "";

  return (
    <BrandPage className="meet-page">
      <section className="meet-hero">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="meet-title"><Gold line={c.title} /></h1>
        <p className="meet-subtitle">{c.subtitle}</p>
      </section>

      <section id="book" className="meet-book-section">
        <form className="meet-book" aria-label={c.formLabel} onSubmit={submit}>
          <div className="meet-card">
            <div className="meet-pick">
              <div className="meet-col-l">
                <div className="meet-step"><b>1</b>{c.stepTopic}</div>
                <fieldset className="meet-fieldset">
                  <legend className="meet-sr-only">{c.topicLegend}</legend>
                  <div className="meet-topics">
                    {TOPIC_VALUES.map((value, i) => (
                      <label key={value} className="meet-topic">
                        <input type="radio" name="topic" value={value} checked={topic === value} onChange={() => setTopic(value)} />
                        <span>{c.topics[i]}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <ul className="meet-meta">
                  <li>{c.metaLength}</li>
                  <li>{c.metaVideo}</li>
                  <li>{c.metaTz}</li>
                </ul>
              </div>

              <div className="meet-col-r">
                <div>
                  <div className="meet-step meet-step-gap"><b>2</b>{c.stepDay}</div>
                  {openWeekdays ? (
                    <DayPicker
                      c={c}
                      lang={lang}
                      view={shownView}
                      today={today}
                      lastDay={lastDay}
                      openWeekdays={openWeekdays}
                      selected={selectedDate}
                      onSelect={(date) => { setPickedDate(date); setPickedStart(null); }}
                      onViewChange={setView}
                    />
                  ) : (
                    <p className="meet-status">{c.loading}</p>
                  )}
                </div>

                <div>
                  <div className="meet-step meet-step-gap"><b>3</b>{c.stepTime}{dayLabel && <span className="meet-step-day">· {dayLabel}</span>}</div>
                  {loadingSlots ? (
                    <p className="meet-status">{c.loading}</p>
                  ) : slots.length === 0 ? (
                    <p className="meet-status">{c.noSlots}</p>
                  ) : (
                    <fieldset className="meet-fieldset">
                      <legend className="meet-sr-only">{c.timeLegend}</legend>
                      <div className="meet-slots">
                        {slots.map((s) => (
                          <label key={s.start} className="meet-slot">
                            <input type="radio" name="time" value={s.start} checked={pickedStart === s.start} onChange={() => setPickedStart(s.start)} />
                            <span>{fmtSlotTime(s.start)}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  )}
                </div>
              </div>
            </div>

            <div className="meet-details">
              <div className="meet-step meet-full"><b>4</b>{c.stepDetails}</div>
              <div className="meet-field">
                <label htmlFor="m-name">{c.name}</label>
                <input id="m-name" type="text" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="meet-field">
                <label htmlFor="m-email">{c.email}</label>
                <input id="m-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="meet-field">
                <label htmlFor="m-phone">{c.phone} <span className="meet-opt">({c.optional})</span></label>
                <input id="m-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="meet-field meet-full">
                <label htmlFor="m-note">{c.note} <span className="meet-opt">({c.optional})</span></label>
                <textarea id="m-note" rows={2} value={note} onChange={(e) => setNote(e.target.value)} />
              </div>
              {error && <p className="meet-error meet-full" role="alert">{error}</p>}
              <div className="meet-full meet-confirm-row">
                <span className="meet-summary">
                  {selectedSlot ? <><strong>{fmtShort(selectedSlot.start)}</strong> · {c.duration}</> : c.pickTime}
                </span>
                <button type="submit" className="ui-btn" disabled={!selectedSlot || submitting}>
                  {submitting ? c.booking : c.confirm}
                </button>
              </div>
            </div>
          </div>

          <ul className="meet-promises">
            {c.promises.map((p) => (
              <li key={p}><CheckIcon size={18} />{p}</li>
            ))}
          </ul>
        </form>
      </section>
    </BrandPage>
  );
}
