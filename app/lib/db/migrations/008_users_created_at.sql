-- Add created_at column to users for admin dashboard "new signups per day" graph.
-- Backfill from earliest otp_attempts.attempted_at for that email when available.

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS created_at timestamp NOT NULL DEFAULT now();

UPDATE users u
SET created_at = COALESCE(
  (SELECT MIN(o.attempted_at) FROM otp_attempts o WHERE LOWER(o.email) = LOWER(u.email)),
  u.created_at
);

CREATE INDEX IF NOT EXISTS idx_users_created_at ON users (created_at);
