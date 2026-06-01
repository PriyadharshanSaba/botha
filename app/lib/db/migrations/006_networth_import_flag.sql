-- One-shot CSV-via-GPT import flag for networth tracker
-- See: docs/superpowers/specs/2026-06-01-networth-csv-import-design.md

ALTER TABLE networth_data
  ADD COLUMN IF NOT EXISTS import_used_at TIMESTAMP NULL;
