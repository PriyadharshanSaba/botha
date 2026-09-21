-- Meeting scheduling: public booking page + admin-managed availability +
-- optional Google Calendar sync (single connected account).

CREATE TABLE IF NOT EXISTS meeting_settings (
  id            text PRIMARY KEY DEFAULT 'default',
  weekly_hours  jsonb NOT NULL,        -- { mon: [{start:"10:00",end:"18:00"}], ... } IST wall-clock
  slot_minutes  integer NOT NULL DEFAULT 30,
  timezone      text NOT NULL DEFAULT 'Asia/Kolkata',
  updated_at    timestamp NOT NULL DEFAULT now()
);

-- Seed the single settings row: Mon-Fri 10:00-18:00 IST, 30-min slots.
INSERT INTO meeting_settings (id, weekly_hours, slot_minutes, timezone)
VALUES (
  'default',
  '{"sun":[],"mon":[{"start":"10:00","end":"18:00"}],"tue":[{"start":"10:00","end":"18:00"}],"wed":[{"start":"10:00","end":"18:00"}],"thu":[{"start":"10:00","end":"18:00"}],"fri":[{"start":"10:00","end":"18:00"}],"sat":[]}'::jsonb,
  30,
  'Asia/Kolkata'
)
ON CONFLICT (id) DO NOTHING;

-- Admin-blocked date/time ranges (vacations, holds) that never show as bookable,
-- independent of Google Calendar busy/free.
CREATE TABLE IF NOT EXISTS meeting_blackouts (
  id          text PRIMARY KEY,
  start_at    timestamp NOT NULL,
  end_at      timestamp NOT NULL,
  reason      text,
  created_at  timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_meeting_blackouts_range
  ON meeting_blackouts (start_at, end_at);

CREATE TABLE IF NOT EXISTS meeting_bookings (
  id                text PRIMARY KEY,
  name              text NOT NULL,
  email             text NOT NULL,
  phone             text,
  note              text,
  start_at          timestamp NOT NULL,
  end_at            timestamp NOT NULL,
  google_event_id   text,
  status            text NOT NULL DEFAULT 'confirmed'   -- 'confirmed' | 'cancelled'
                    CHECK (status IN ('confirmed', 'cancelled')),
  created_at        timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_meeting_bookings_range
  ON meeting_bookings (start_at, end_at);
CREATE INDEX IF NOT EXISTS idx_meeting_bookings_status
  ON meeting_bookings (status);

-- Single-row store for the connected Google account's OAuth refresh token.
-- refresh_token_enc is AES-256-GCM ciphertext (app/lib/google/crypto.ts) —
-- never store the raw token.
CREATE TABLE IF NOT EXISTS google_tokens (
  id                  text PRIMARY KEY DEFAULT 'default',
  refresh_token_enc   text NOT NULL,
  connected_email     text NOT NULL,
  updated_at          timestamp NOT NULL DEFAULT now()
);
