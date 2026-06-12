-- Audit log for chapter views.
-- Forensic trail only — no auto-block, no thresholds. If a leak is reported,
-- query this table to identify which account viewed which chapters and when.
-- IP + user-agent captured per existing precedent in cookie_consents.

CREATE TABLE IF NOT EXISTS chapter_views (
  id              bigserial PRIMARY KEY,
  user_id         text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id       text NOT NULL,
  chapter_number  integer NOT NULL,
  ip_address      text,
  user_agent      text,
  viewed_at       timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chapter_views_user_time
  ON chapter_views (user_id, viewed_at DESC);

CREATE INDEX IF NOT EXISTS idx_chapter_views_time
  ON chapter_views (viewed_at DESC);
