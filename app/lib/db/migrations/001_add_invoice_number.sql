-- Add invoice_number column to subscriptions table
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS invoice_number TEXT;

-- Index for fast sequential lookup by date prefix
CREATE INDEX IF NOT EXISTS idx_subscriptions_invoice_number ON subscriptions (invoice_number);
