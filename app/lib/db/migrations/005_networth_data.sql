-- Networth tracker server persistence
-- See: docs/superpowers/specs/2026-06-01-networth-persistence-design.md

CREATE TABLE IF NOT EXISTS networth_data (
  user_id         TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  entries         JSONB     NOT NULL DEFAULT '[]'::jsonb,
  schema_version  INTEGER   NOT NULL DEFAULT 1,
  updated_at      TIMESTAMP NOT NULL DEFAULT now()
);
