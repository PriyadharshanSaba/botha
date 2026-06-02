-- Referral codes feature
-- See: .planning/2026-06-02-referral-codes.md

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS can_refer       boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS referral_code   text;

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_referral_code
  ON users (referral_code)
  WHERE referral_code IS NOT NULL;

ALTER TABLE subscriptions
  ADD COLUMN IF NOT EXISTS referral_code         text,
  ADD COLUMN IF NOT EXISTS original_amount_paise integer;

CREATE TABLE IF NOT EXISTS referral_offers (
  code                text PRIMARY KEY,
  owner_user_id       text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  discount_percent    integer,
  discount_flat_paise integer,
  description         text,
  active              boolean NOT NULL DEFAULT true,
  created_at          timestamp NOT NULL DEFAULT now(),
  expires_at          timestamp,
  CHECK (
    (discount_percent IS NOT NULL AND discount_flat_paise IS NULL)
    OR (discount_percent IS NULL AND discount_flat_paise IS NOT NULL)
  )
);

CREATE INDEX IF NOT EXISTS idx_referral_offers_owner
  ON referral_offers (owner_user_id);

CREATE TABLE IF NOT EXISTS referral_redemptions (
  id                     serial PRIMARY KEY,
  code                   text NOT NULL REFERENCES referral_offers(code) ON DELETE RESTRICT,
  referrer_user_id       text NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  referee_user_id        text NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  razorpay_order_id      text NOT NULL,
  applied_discount_paise integer NOT NULL,
  redeemed_at            timestamp NOT NULL DEFAULT now(),
  UNIQUE (razorpay_order_id)
);

CREATE INDEX IF NOT EXISTS idx_redemptions_referrer
  ON referral_redemptions (referrer_user_id);
CREATE INDEX IF NOT EXISTS idx_redemptions_referee
  ON referral_redemptions (referee_user_id);
