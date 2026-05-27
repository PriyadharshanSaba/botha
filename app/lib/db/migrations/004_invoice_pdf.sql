-- 004_invoice_pdf.sql
-- Adds pdf_object_key column for R2-hosted invoice PDFs.
-- Nullable: if PDF generation/upload fails, invoice is still valid (degrade gracefully).

ALTER TABLE invoices ADD COLUMN IF NOT EXISTS pdf_object_key TEXT;
