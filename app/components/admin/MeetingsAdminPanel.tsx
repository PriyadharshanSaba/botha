"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { MeetingSettings, MeetingBlackout, MeetingBooking, WeeklyHours, DayHours } from "@/app/lib/db/types";

const DAYS: { key: keyof WeeklyHours; label: string }[] = [
  { key: "mon", label: "Monday" },
  { key: "tue", label: "Tuesday" },
  { key: "wed", label: "Wednesday" },
  { key: "thu", label: "Thursday" },
  { key: "fri", label: "Friday" },
  { key: "sat", label: "Saturday" },
  { key: "sun", label: "Sunday" },
];

function fmtIST(iso: string | Date): string {
  return new Date(iso).toLocaleString("en-IN", {
    weekday: "short", day: "numeric", month: "short",
    hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
  });
}

export default function MeetingsAdminPanel(props: {
  initialSettings: MeetingSettings;
  initialBlackouts: MeetingBlackout[];
  initialBookings: MeetingBooking[];
  initialGoogle: { connected: boolean; email: string | null };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [hours, setHours] = useState<WeeklyHours>(props.initialSettings.weeklyHours);
  const [slotMinutes, setSlotMinutes] = useState(props.initialSettings.slotMinutes);
  const [savingHours, setSavingHours] = useState(false);
  const [hoursMsg, setHoursMsg] = useState<{ ok?: string; err?: string } | null>(null);

  const [blackouts, setBlackouts] = useState(props.initialBlackouts);
  const [bStart, setBStart] = useState("");
  const [bEnd, setBEnd] = useState("");
  const [bReason, setBReason] = useState("");
  const [bBusy, setBBusy] = useState(false);
  const [bErr, setBErr] = useState<string | null>(null);

  const [bookings] = useState(props.initialBookings);
  const [cancelling, setCancelling] = useState<string | null>(null);

  const [google] = useState(props.initialGoogle);
  const googleNotice = searchParams.get("google");

  useEffect(() => {
    if (googleNotice) {
      const t = setTimeout(() => router.replace("/admin/meetings"), 4000);
      return () => clearTimeout(t);
    }
  }, [googleNotice, router]);

  function addWindow(day: keyof WeeklyHours) {
    setHours((h) => ({ ...h, [day]: [...h[day], { start: "10:00", end: "18:00" }] }));
  }
  function removeWindow(day: keyof WeeklyHours, idx: number) {
    setHours((h) => ({ ...h, [day]: h[day].filter((_, i) => i !== idx) }));
  }
  function updateWindow(day: keyof WeeklyHours, idx: number, field: keyof DayHours, value: string) {
    setHours((h) => ({
      ...h,
      [day]: h[day].map((w, i) => (i === idx ? { ...w, [field]: value } : w)),
    }));
  }

  async function saveHours() {
    setSavingHours(true);
    setHoursMsg(null);
    const r = await fetch("/api/admin/meetings/settings", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ weeklyHours: hours, slotMinutes, timezone: "Asia/Kolkata" }),
    });
    setSavingHours(false);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      setHoursMsg({ err: j.error || "Failed to save" });
      return;
    }
    setHoursMsg({ ok: "Saved." });
  }

  async function addBlackout(e: React.FormEvent) {
    e.preventDefault();
    if (!bStart || !bEnd) return;
    setBBusy(true);
    setBErr(null);
    const r = await fetch("/api/admin/meetings/blackouts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        startAt: new Date(bStart).toISOString(),
        endAt: new Date(bEnd).toISOString(),
        reason: bReason || undefined,
      }),
    });
    setBBusy(false);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      setBErr(j.error || "Failed to add");
      return;
    }
    setBlackouts((bs) => [...bs, j].sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime()));
    setBStart("");
    setBEnd("");
    setBReason("");
  }

  async function deleteBlackout(id: string) {
    if (!confirm("Remove this block? Those times become bookable again.")) return;
    const r = await fetch(`/api/admin/meetings/blackouts/${id}`, { method: "DELETE" });
    if (r.ok) setBlackouts((bs) => bs.filter((b) => b.id !== id));
  }

  async function cancelBooking(id: string) {
    if (!confirm("Cancel this meeting? The attendee will be emailed.")) return;
    setCancelling(id);
    const r = await fetch(`/api/admin/meetings/bookings/${id}`, { method: "DELETE" });
    setCancelling(null);
    if (r.ok) router.refresh();
    else alert("Failed to cancel");
  }

  function connectGoogle() {
    window.location.href = "/api/admin/google/connect";
  }
  async function disconnectGoogle() {
    if (!confirm("Disconnect Google Calendar? Bookings will still be saved, but slots won't check your real calendar and new events won't be created.")) return;
    const r = await fetch("/api/admin/google/disconnect", { method: "POST" });
    if (r.ok) router.refresh();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* Google connection */}
      <section>
        <h2 className="admin-h2">Google Calendar</h2>
        <div className="admin-card">
          {googleNotice === "connected" && <p className="admin-msg-ok">Connected.</p>}
          {googleNotice === "error" && <p className="admin-msg-err">Connection failed — check server logs / env vars.</p>}
          {google.connected ? (
            <>
              <p style={{ margin: "0 0 12px" }}>
                Connected as <strong>{google.email}</strong>. New bookings sync to this calendar; busy events block slots.
              </p>
              <button className="admin-btn-danger" onClick={disconnectGoogle}>Disconnect</button>
            </>
          ) : (
            <>
              <p style={{ margin: "0 0 12px", color: "#6B6460" }}>
                Not connected. Bookings still work from DB availability alone; connect to sync with your real calendar and avoid double-booking.
              </p>
              <button className="admin-btn" onClick={connectGoogle}>Connect Google Calendar</button>
            </>
          )}
        </div>
      </section>

      {/* Weekly hours */}
      <section>
        <h2 className="admin-h2">Weekly availability</h2>
        <div className="admin-card">
          <div className="admin-field" style={{ maxWidth: 220, marginBottom: 16 }}>
            <label className="admin-label" htmlFor="slot-len">Slot length (minutes)</label>
            <input
              id="slot-len"
              className="admin-input"
              type="number"
              min={5}
              max={240}
              value={slotMinutes}
              onChange={(e) => setSlotMinutes(Number(e.target.value))}
            />
          </div>

          {DAYS.map(({ key, label }) => (
            <div key={key} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid #eee" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <strong style={{ width: 110 }}>{label}</strong>
                <button type="button" className="admin-btn-outline" onClick={() => addWindow(key)}>+ Add window</button>
              </div>
              {hours[key].length === 0 && <span style={{ color: "#999", fontSize: 13 }}>Closed</span>}
              {hours[key].map((w, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <input
                    className="admin-input"
                    style={{ width: 110 }}
                    type="time"
                    value={w.start}
                    onChange={(e) => updateWindow(key, i, "start", e.target.value)}
                  />
                  <span>to</span>
                  <input
                    className="admin-input"
                    style={{ width: 110 }}
                    type="time"
                    value={w.end}
                    onChange={(e) => updateWindow(key, i, "end", e.target.value)}
                  />
                  <button type="button" className="admin-btn-danger" onClick={() => removeWindow(key, i)}>Remove</button>
                </div>
              ))}
            </div>
          ))}

          <div className="admin-btn-row">
            <button className="admin-btn" onClick={saveHours} disabled={savingHours}>
              {savingHours ? "Saving…" : "Save availability"}
            </button>
          </div>
          {hoursMsg?.ok && <p className="admin-msg-ok">{hoursMsg.ok}</p>}
          {hoursMsg?.err && <p className="admin-msg-err">{hoursMsg.err}</p>}
        </div>
      </section>

      {/* Blackouts */}
      <section>
        <h2 className="admin-h2">Blocked dates / times</h2>
        <div className="admin-card">
          <form onSubmit={addBlackout} className="admin-form" style={{ marginBottom: 16 }}>
            <div className="admin-field">
              <label className="admin-label" htmlFor="bo-start">From</label>
              <input id="bo-start" className="admin-input" type="datetime-local" required
                value={bStart} onChange={(e) => setBStart(e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label" htmlFor="bo-end">To</label>
              <input id="bo-end" className="admin-input" type="datetime-local" required
                value={bEnd} onChange={(e) => setBEnd(e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label" htmlFor="bo-reason">Reason (optional)</label>
              <input id="bo-reason" className="admin-input" placeholder="Vacation"
                value={bReason} onChange={(e) => setBReason(e.target.value)} />
            </div>
            <div className="admin-btn-row">
              <button type="submit" className="admin-btn" disabled={bBusy}>{bBusy ? "Adding…" : "Add block"}</button>
            </div>
          </form>
          {bErr && <p className="admin-msg-err">{bErr}</p>}

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead><tr><th>From</th><th>To</th><th>Reason</th><th></th></tr></thead>
              <tbody>
                {blackouts.map((b) => (
                  <tr key={b.id}>
                    <td>{fmtIST(b.startAt)}</td>
                    <td>{fmtIST(b.endAt)}</td>
                    <td>{b.reason || "—"}</td>
                    <td className="right"><button className="admin-btn-danger" onClick={() => deleteBlackout(b.id)}>Remove</button></td>
                  </tr>
                ))}
                {blackouts.length === 0 && (
                  <tr><td colSpan={4} className="admin-table-empty">No blocked dates.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming bookings */}
      <section>
        <h2 className="admin-h2">Upcoming bookings</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>When (IST)</th><th>Name</th><th>Email</th><th>Note</th><th></th></tr></thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{fmtIST(b.startAt)}</td>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.note || "—"}</td>
                  <td className="right">
                    <button className="admin-btn-danger" disabled={cancelling === b.id} onClick={() => cancelBooking(b.id)}>
                      {cancelling === b.id ? "Cancelling…" : "Cancel"}
                    </button>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr><td colSpan={5} className="admin-table-empty">No upcoming bookings.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
