-- Admin-added blackouts now also create a Google Calendar event (when
-- connected), so blocked time is visible on the real calendar, not just
-- enforced on /meet. Mirrors meeting_bookings.google_event_id.

ALTER TABLE meeting_blackouts
  ADD COLUMN IF NOT EXISTS google_event_id text;
