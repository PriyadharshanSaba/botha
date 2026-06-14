/**
 * Zod schemas for blog admin API. Server-side validation — never trust
 * client payloads. Parsed inputs are the only shape that crosses the
 * boundary into sanitize.ts / db.upsertBlog().
 */

import { z } from "zod";

/** URL-safe slug. Lowercase, 3-80 chars, alnum + dash, must start alnum. */
export const SlugSchema = z
  .string()
  .min(3, "slug too short (min 3)")
  .max(80, "slug too long (max 80)")
  .regex(
    /^[a-z0-9][a-z0-9-]{2,79}$/,
    "slug must be lowercase letters, digits, dashes; start with alnum"
  );

export const StatRowCellSchema = z.object({
  big: z.string().min(1).max(40),
  tone: z.enum(["gold", "red", "green"]).nullish(),
  label: z.string().min(1).max(200),
});

/** Payload for POST /api/admin/blogs/preview — sanitize + split a draft. */
export const PreviewInputSchema = z.object({
  html: z.string().min(1, "html cannot be empty").max(500_000, "html too large (>500KB)"),
  afterSection: z.number().int().positive().optional(),   // omit = preview only, no split
});

/** Payload for POST /api/admin/blogs and PUT /api/admin/blogs/[slug]. */
export const BlogUpsertSchema = z.object({
  slug:          SlugSchema,
  kicker:        z.string().min(1).max(120),
  title:         z.string().min(1).max(200),
  titleHtml:     z.string().min(1).max(400),               // sanitized inner-<h1>; allows <span> + <br>
  deck:          z.string().min(1).max(600),               // card teaser
  heroSub:       z.string().min(1).max(1500),
  heroBadge:     z.string().max(120).nullish(),
  topbarBrand:   z.string().min(1).max(80).optional(),     // defaults DB-side to "Markets & Macro"
  topbarTag:     z.string().min(1).max(200),
  dateLabel:     z.string().min(1).max(60),
  readTime:      z.string().min(1).max(40),
  rawHtml:       z.string().min(1).max(500_000),           // full body — sanitized + split server-side
  afterSection:  z.number().int().positive(),              // split-point
  statRow:       z.array(StatRowCellSchema).max(6).nullish(),
  customCss:     z.string().max(50_000).nullish(),         // sanitized via sanitize-css.ts in route handler
});

export const PublishSchema = z.object({});                  // no body
export const UnpublishSchema = z.object({});

export type PreviewInput = z.infer<typeof PreviewInputSchema>;
export type BlogUpsertPayload = z.infer<typeof BlogUpsertSchema>;
