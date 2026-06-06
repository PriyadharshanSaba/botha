-- Phase 5 of billing/invoice redesign
-- See: docs/superpowers/specs/2026-05-25-billing-invoice-design.md
--
-- Drops legacy columns now superseded by invoices table:
--   - subscriptions.invoice_number → invoices.invoice_number
--   - subscriptions.gst_paise      → invoices.cgst_paise + sgst_paise + igst_paise
--
-- PRECONDITION: backfill must have run on this DB. Every active sub must have
-- invoice_id set, otherwise legacy invoice numbers are lost forever.
-- Verify with:
--   SELECT COUNT(*) FROM subscriptions WHERE status='active' AND invoice_id IS NULL;
-- Expect 0 before applying.

ALTER TABLE subscriptions DROP COLUMN IF EXISTS invoice_number;
ALTER TABLE subscriptions DROP COLUMN IF EXISTS gst_paise;
