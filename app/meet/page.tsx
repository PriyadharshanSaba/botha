"use client";
import { useEffect, useMemo, useState } from "react";
import "./meet.css";

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

type Slot = { start: string; end: string };

function istDateString(d: Date): string {
  const ist = new Date(d.getTime() + IST_OFFSET_MS);
  return `${ist.getUTCFullYear()}-${String(ist.getUTCMonth() + 1).padStart(2, "0")}-${String(ist.getUTCDate()).padStart(2, "0")}`;
}

function nextDates(days: number): { value: string; label: string }[] {
  const out: { value: string; label: string }[] = [];
  const startIST = new Date(Date.now() + IST_OFFSET_MS);
  for (let i = 0; i < days; i++) {
    const d = new Date(Date.UTC(startIST.getUTCFullYear(), startIST.getUTCMonth(), startIST.getUTCDate() + i));
    const value = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
    const label = d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
    out.push({ value, label });
  }
  return out;
}

function fmtSlotTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" });
}

export default function MeetPage() {
  const dates = useMemo(() => nextDates(21), []);
  const [selectedDate, setSelectedDate] = useState(() => istDateString(new Date()));
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<{ start: string; end: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/meetings/slots?date=${selectedDate}`)
      .then((r) => r.json())
      .then((j) => { if (!cancelled) setSlots(j.slots ?? []); })
      .catch(() => { if (!cancelled) setSlots([]); })
      .finally(() => { if (!cancelled) setLoadingSlots(false); });
    return () => { cancelled = true; };
  }, [selectedDate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot) return;
    setSubmitting(true);
    setError(null);
    const r = await fetch("/api/meetings/book", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, phone: phone || undefined, note: note || undefined, start: selectedSlot.start }),
    });
    const j = await r.json().catch(() => ({}));
    setSubmitting(false);
    if (!r.ok) {
      setError(j.error || "Something went wrong. Please try again.");
      if (r.status === 409) {
        // Slot was taken — refresh the list.
        fetch(`/api/meetings/slots?date=${selectedDate}`).then((res) => res.json()).then((jj) => setSlots(jj.slots ?? []));
        setSelectedSlot(null);
      }
      return;
    }
    setConfirmed({ start: j.start, end: j.end });
  }

  if (confirmed) {
    return (
      <div className="meet-page">
        <div className="meet-confirmed">
          <div className="meet-confirmed-title">You&apos;re booked</div>
          <div className="meet-confirmed-time">
            {new Date(confirmed.start).toLocaleString("en-IN", {
              weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
            })} IST
          </div>
          <p style={{ color: "#6B6460", fontSize: 14 }}>
            A confirmation with a calendar invite is on its way to {email}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="meet-page">
      <div className="meet-header">
        <span className="meet-eyebrow">Bodha Ventures</span>
        <h1 className="meet-title">Book a call</h1>
        <p className="meet-subtitle">Pick a time that works for you. 30 minutes, over a video call.</p>
      </div>

      <div className="meet-shell">
        <div className="meet-body">
          <div className="meet-dates">
            {dates.map((d) => (
              <button
                key={d.value}
                className={`meet-date-btn ${d.value === selectedDate ? "active" : ""}`}
                onClick={() => {
                  setSelectedSlot(null);
                  setLoadingSlots(true);
                  setSelectedDate(d.value);
                }}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="meet-slots">
            <p className="meet-slots-title">Available times (IST)</p>

            {loadingSlots ? (
              <p className="meet-loading">Loading…</p>
            ) : slots.length === 0 ? (
              <p className="meet-empty">No open times on this day. Try another date.</p>
            ) : (
              <div className="meet-slot-grid">
                {slots.map((s) => (
                  <button
                    key={s.start}
                    className={`meet-slot-btn ${selectedSlot?.start === s.start ? "selected" : ""}`}
                    onClick={() => setSelectedSlot(s)}
                  >
                    {fmtSlotTime(s.start)}
                  </button>
                ))}
              </div>
            )}

            {selectedSlot && (
              <form className="meet-form" onSubmit={submit}>
                <div className="meet-selected-time">
                  {new Date(selectedSlot.start).toLocaleString("en-IN", {
                    weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
                  })} IST
                </div>

                <div className="meet-field">
                  <label htmlFor="meet-name">Name</label>
                  <input id="meet-name" className="meet-input" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="meet-field">
                  <label htmlFor="meet-email">Email</label>
                  <input id="meet-email" type="email" className="meet-input" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="meet-field">
                  <label htmlFor="meet-phone">Phone (optional)</label>
                  <input id="meet-phone" className="meet-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="meet-field">
                  <label htmlFor="meet-note">What would you like to talk about? (optional)</label>
                  <textarea id="meet-note" className="meet-textarea" value={note} onChange={(e) => setNote(e.target.value)} />
                </div>

                {error && <p className="meet-error">{error}</p>}

                <button type="submit" className="meet-submit" disabled={submitting}>
                  {submitting ? "Booking…" : "Confirm booking"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
