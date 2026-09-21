function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function toICSUTC(d: Date): string {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}

function escapeICS(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/** Folds lines >75 octets per RFC 5545 so mail/calendar clients parse them correctly. */
function foldLine(line: string): string {
  if (line.length <= 75) return line;
  const parts: string[] = [];
  let rest = line;
  while (rest.length > 75) {
    parts.push(rest.slice(0, 75));
    rest = " " + rest.slice(75);
  }
  parts.push(rest);
  return parts.join("\r\n");
}

export function buildMeetingICS(opts: {
  uid: string;
  start: Date;
  end: Date;
  summary: string;
  description: string;
  organizerEmail: string;
  organizerName: string;
  attendeeEmail: string;
  attendeeName: string;
  method?: "REQUEST" | "CANCEL";
  sequence?: number;
  now?: Date;
}): string {
  const method = opts.method ?? "REQUEST";
  const lines = [
    "BEGIN:VCALENDAR",
    "PRODID:-//Bodha Ventures//Meetings//EN",
    "VERSION:2.0",
    `METHOD:${method}`,
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${opts.uid}`,
    `SEQUENCE:${opts.sequence ?? 0}`,
    `DTSTAMP:${toICSUTC(opts.now ?? new Date())}`,
    `DTSTART:${toICSUTC(opts.start)}`,
    `DTEND:${toICSUTC(opts.end)}`,
    `SUMMARY:${escapeICS(opts.summary)}`,
    `DESCRIPTION:${escapeICS(opts.description)}`,
    `ORGANIZER;CN=${escapeICS(opts.organizerName)}:mailto:${opts.organizerEmail}`,
    `ATTENDEE;CN=${escapeICS(opts.attendeeName)};RSVP=TRUE:mailto:${opts.attendeeEmail}`,
    `STATUS:${method === "CANCEL" ? "CANCELLED" : "CONFIRMED"}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(foldLine).join("\r\n") + "\r\n";
}
