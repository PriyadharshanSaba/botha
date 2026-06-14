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

/**
 * Payload for POST /api/admin/blogs and PUT /api/admin/blogs/[slug].
 *
 * Metadata fields are all optional — the server runs extractBlogMetadata on
 * rawHtml and uses the extracted values as defaults when the form leaves a
 * field empty. customCss is NOT accepted from the client; the server derives
 * it from <style> blocks inside rawHtml and runs sanitize-css.ts.
 */
export const BlogUpsertSchema = z.object({
  slug:          SlugSchema,
  rawHtml:       z.string().min(1).max(500_000),           // full paste — may include <head><style>
  afterSection:  z.number().int().positive(),              // split-point

  // All optional — server falls back to extracted if missing/empty.
  kicker:        z.string().max(120).optional(),
  title:         z.string().max(200).optional(),
  titleHtml:     z.string().max(400).optional(),
  deck:          z.string().max(600).optional(),
  heroSub:       z.string().max(1500).optional(),
  heroBadge:     z.string().max(120).nullish(),
  topbarBrand:   z.string().max(80).optional(),
  topbarTag:     z.string().max(200).optional(),
  dateLabel:     z.string().max(60).optional(),
  readTime:      z.string().max(40).optional(),
  statRow:       z.array(StatRowCellSchema).max(6).nullish(),
});

export const PublishSchema = z.object({});                  // no body
export const UnpublishSchema = z.object({});

export type PreviewInput = z.infer<typeof PreviewInputSchema>;
export type BlogUpsertPayload = z.infer<typeof BlogUpsertSchema>;
