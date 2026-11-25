import { google } from "googleapis";
import { db } from "@/app/lib/db";
import { encryptToken, decryptToken } from "./crypto";

// calendar.events lets us create/delete events; calendar.freebusy lets us
// read busy/free (calendar.events alone is NOT enough for freebusy.query);
// userinfo.email lets us label which Google account is connected in the admin UI.
const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.freebusy",
  "https://www.googleapis.com/auth/userinfo.email",
];

function oauthClient() {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
    throw new Error("Google OAuth env vars not set (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REDIRECT_URI)");
  }
  return new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI);
}

/** Sends the admin to Google's consent screen. `access_type: offline` + `prompt: consent` guarantee a refresh_token. */
export function getGoogleAuthUrl(): string {
  return oauthClient().generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });
}

/** Exchanges the OAuth callback `code` for tokens and persists the encrypted refresh token. */
export async function connectGoogleAccount(code: string): Promise<{ email: string }> {
  const client = oauthClient();
  const { tokens } = await client.getToken(code);
  if (!tokens.refresh_token) {
    throw new Error(
      "Google did not return a refresh token. Revoke prior access at https://myaccount.google.com/permissions and try connecting again."
    );
  }
  client.setCredentials(tokens);

  const oauth2 = google.oauth2({ auth: client, version: "v2" });
  const me = await oauth2.userinfo.get();
  const email = me.data.email;
  if (!email) throw new Error("Google did not return the connected account's email");

  await db.saveGoogleTokens({
    refreshTokenEnc: encryptToken(tokens.refresh_token),
    connectedEmail: email,
  });
  return { email };
}

export async function googleConnectionStatus(): Promise<{ connected: boolean; email: string | null }> {
  const stored = await db.getGoogleTokens();
  return { connected: !!stored, email: stored?.connectedEmail ?? null };
}

export async function disconnectGoogleAccount(): Promise<void> {
  await db.clearGoogleTokens();
}

async function getAuthorizedClient() {
  const stored = await db.getGoogleTokens();
  if (!stored) return null;
  const client = oauthClient();
  client.setCredentials({ refresh_token: decryptToken(stored.refreshTokenEnc) });
  return client;
}

/** Returns busy ranges on the connected primary calendar within [timeMin, timeMax). Empty (not thrown) if not connected. */
export async function getGoogleBusyRanges(timeMin: Date, timeMax: Date): Promise<{ start: Date; end: Date }[]> {
  const client = await getAuthorizedClient();
  if (!client) return [];
  try {
    const calendar = google.calendar({ version: "v3", auth: client });
    const res = await calendar.freebusy.query({
      requestBody: {
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        items: [{ id: "primary" }],
      },
    });
    const busy = res.data.calendars?.primary?.busy ?? [];
    return busy
      .filter((b) => b.start && b.end)
      .map((b) => ({ start: new Date(b.start!), end: new Date(b.end!) }));
  } catch (err) {
    // Degrade to DB-only availability rather than break /meet if Google is
    // unreachable, the token was revoked, or scopes are stale.
    console.error("[calendar] getGoogleBusyRanges failed:", err);
    return [];
  }
}

/** Creates the calendar event for a confirmed booking. Returns the Google event id, or null if not connected. */
export async function insertMeetingEvent(opts: {
  summary: string;
  description: string;
  start: Date;
  end: Date;
  attendeeEmail: string;
  attendeeName: string;
}): Promise<string | null> {
  const client = await getAuthorizedClient();
  if (!client) return null;
  const calendar = google.calendar({ version: "v3", auth: client });
  const res = await calendar.events.insert({
    calendarId: "primary",
    sendUpdates: "all",
    requestBody: {
      summary: opts.summary,
      description: opts.description,
      start: { dateTime: opts.start.toISOString() },
      end: { dateTime: opts.end.toISOString() },
      attendees: [{ email: opts.attendeeEmail, displayName: opts.attendeeName }],
    },
  });
  return res.data.id ?? null;
}

/** Creates a plain busy-block event (no attendees) for an admin-added blackout. Returns null if not connected. */
export async function insertBlockEvent(opts: { summary: string; start: Date; end: Date }): Promise<string | null> {
  const client = await getAuthorizedClient();
  if (!client) return null;
  const calendar = google.calendar({ version: "v3", auth: client });
  const res = await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: opts.summary,
      start: { dateTime: opts.start.toISOString() },
      end: { dateTime: opts.end.toISOString() },
    },
  });
  return res.data.id ?? null;
}

/** Removes a previously-created event. No-op (logged) if not connected or already gone. */
export async function deleteMeetingEvent(googleEventId: string): Promise<void> {
  const client = await getAuthorizedClient();
  if (!client) return;
  const calendar = google.calendar({ version: "v3", auth: client });
  try {
    await calendar.events.delete({ calendarId: "primary", eventId: googleEventId, sendUpdates: "all" });
  } catch (err) {
    console.error("[calendar] deleteMeetingEvent failed:", err);
  }
}
