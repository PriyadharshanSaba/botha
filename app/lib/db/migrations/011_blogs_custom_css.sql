-- Per-blog custom CSS. Lets the admin uploader carry bespoke styles for
-- articles that need design beyond what guide-article.css provides.
-- Nullable; most blogs leave it NULL and rely on the design system.
--
-- The column stores raw CSS text that gets sanitized at write time
-- (app/lib/blogs/sanitize-css.ts) and injected as an inline <style>
-- tag at the top of /blogs/[slug] articles at read time.
--
-- Trust model: writer = admin (gated by ADMIN_EMAILS). Sanitizer blocks
-- script injection vectors (@import, expression(), javascript:, closing
-- </style>) but does NOT auto-scope selectors — admins are expected to
-- scope their rules to article-internal classes manually.

ALTER TABLE blogs
  ADD COLUMN IF NOT EXISTS custom_css text;
