-- DB-backed blog articles. Replaces the per-blog folder pattern under app/blogs/.
-- Each row is a fully sanitized HTML article split into preview + gated halves.
-- Slug is the public URL segment and the primary key.
--
-- Sanitization happens at write time (in app/lib/blogs/sanitize.ts); reads via
-- dangerouslySetInnerHTML trust these columns absolutely. NEVER write to
-- preview_html / gated_html without running the sanitizer first.

CREATE TABLE IF NOT EXISTS blogs (
  slug          text PRIMARY KEY,

  -- Card + listing metadata
  kicker        text NOT NULL,                             -- "Markets · Macro · India"
  title         text NOT NULL,                             -- plain-text title (for OG / listing)
  title_html    text NOT NULL,                             -- inner-HTML of <h1>, allows <span> gold accent + <br>
  deck          text NOT NULL,                             -- card teaser, 1-2 sentences

  -- Article header
  hero_sub      text NOT NULL,                             -- subtitle paragraph below <h1>
  hero_badge    text,                                      -- e.g. "June 12, 2026" — optional
  topbar_brand  text NOT NULL DEFAULT 'Markets & Macro',
  topbar_tag    text NOT NULL,                             -- right-side topbar text

  -- Display metadata
  date_label    text NOT NULL,                             -- "June 12, 2026" (free-form, no parsing)
  read_time     text NOT NULL,                             -- "15 min read"

  -- Body — both columns are pre-sanitized HTML
  preview_html  text NOT NULL,
  gated_html    text NOT NULL,

  -- Optional stat-row cells: [{ big: "5.25%", tone: "gold"|"red"|"green"|null, label: "RBI Repo Rate\nHeld, Neutral Stance" }, ...]
  stat_row      jsonb,

  -- Workflow
  status        text NOT NULL DEFAULT 'draft'              -- 'draft' | 'published'
                CHECK (status IN ('draft', 'published')),
  author_id     text NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  created_at    timestamp NOT NULL DEFAULT now(),
  updated_at    timestamp NOT NULL DEFAULT now(),
  published_at  timestamp                                   -- null while draft
);

-- Listing page query: SELECT ... FROM blogs WHERE status='published' ORDER BY published_at DESC
CREATE INDEX IF NOT EXISTS idx_blogs_status_published
  ON blogs (status, published_at DESC);

-- Admin list (drafts + published) ordered by recency of edits
CREATE INDEX IF NOT EXISTS idx_blogs_updated
  ON blogs (updated_at DESC);
