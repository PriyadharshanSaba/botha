-- Phase 0 of billing/invoice redesign
-- See: docs/superpowers/specs/2026-05-25-billing-invoice-design.md

-- ─────────────────────────────────────────────────────────────────────────────
-- invoices: immutable per-transaction record (supplier + buyer + lines + tax)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS invoices (
  id              TEXT PRIMARY KEY,
  invoice_number  TEXT,                                         -- NULL while draft; assigned at issue
  user_id         TEXT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  subscription_id TEXT REFERENCES subscriptions(id) ON DELETE SET NULL,

  invoice_date    TIMESTAMP NOT NULL,
  status          TEXT      NOT NULL,                           -- 'draft' | 'issued' | 'paid' | 'void'

  -- Frozen snapshots: never mutated after status = 'issued'
  buyer_snapshot     JSONB NOT NULL,
  supplier_snapshot  JSONB NOT NULL,
  line_items         JSONB NOT NULL,

  -- Tax (paise; integers; computed once at issue)
  place_of_supply        TEXT    NOT NULL,
  taxable_total_paise    INTEGER NOT NULL,
  cgst_paise             INTEGER NOT NULL DEFAULT 0,
  sgst_paise             INTEGER NOT NULL DEFAULT 0,
  igst_paise             INTEGER NOT NULL DEFAULT 0,
  total_paise            INTEGER NOT NULL,

  -- Payment trace
  razorpay_order_id   TEXT,
  razorpay_payment_id TEXT,

  -- Bookkeeping extras
  notes        JSONB,
  voided_at    TIMESTAMP,
  void_reason  TEXT,

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  issued_at  TIMESTAMP,

  CONSTRAINT invoices_status_check
    CHECK (status IN ('draft', 'issued', 'paid', 'void')),

  CONSTRAINT invoices_total_check
    CHECK (total_paise = taxable_total_paise + cgst_paise + sgst_paise + igst_paise),

  -- Either intra-state (cgst + sgst, igst = 0) or inter-state (igst only, cgst = sgst = 0)
  CONSTRAINT invoices_tax_split_check
    CHECK (
      (cgst_paise = 0 AND sgst_paise = 0)
      OR (cgst_paise > 0 AND sgst_paise > 0 AND igst_paise = 0)
    )
);

-- Unique invoice number across non-draft rows (drafts have NULL number)
CREATE UNIQUE INDEX IF NOT EXISTS idx_invoices_invoice_number
  ON invoices (invoice_number)
  WHERE invoice_number IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_invoices_user_date
  ON invoices (user_id, invoice_date DESC);

CREATE INDEX IF NOT EXISTS idx_invoices_razorpay_order
  ON invoices (razorpay_order_id);

-- ─────────────────────────────────────────────────────────────────────────────
-- invoice_counters: race-safe sequential numbering per Indian FY
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS invoice_counters (
  fy        TEXT PRIMARY KEY,    -- e.g. "2026-27"
  last_seq  INTEGER NOT NULL
);

-- ─────────────────────────────────────────────────────────────────────────────
-- subscriptions: link to its invoice (legacy columns dropped in Phase 5)
-- ─────────────────────────────────────────────────────────────────────────────
ALTER TABLE subscriptions
  ADD COLUMN IF NOT EXISTS invoice_id TEXT REFERENCES invoices(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_subscriptions_invoice_id
  ON subscriptions (invoice_id);
