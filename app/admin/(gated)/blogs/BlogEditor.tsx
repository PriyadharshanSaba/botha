"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type EditorInitialValues = {
  mode: "new" | "edit";
  slug: string;
  kicker: string;
  title: string;
  titleHtml: string;
  deck: string;
  heroSub: string;
  heroBadge: string;
  topbarBrand: string;
  topbarTag: string;
  dateLabel: string;
  readTime: string;
  rawHtml: string;
  afterSection: number | null;
  customCss: string;
  status?: "draft" | "published";
};

type DetectedSection = { num: number; title: string; rawText: string };

type PreviewResp = {
  sanitized: string;
  sections: DetectedSection[];
  droppedClasses: string[];
  inlineStylesStripped: number;
  split: { preview: string; gated: string } | null;
  splitError: string | null;
};

const EMPTY_INITIAL: EditorInitialValues = {
  mode: "new",
  slug: "",
  kicker: "Markets · Macro · India",
  title: "",
  titleHtml: "",
  deck: "",
  heroSub: "",
  heroBadge: "",
  topbarBrand: "Markets & Macro",
  topbarTag: "",
  dateLabel: "",
  readTime: "15 min read",
  rawHtml: "",
  afterSection: 1,
  customCss: "",
};

export default function BlogEditor({ initial = EMPTY_INITIAL }: { initial?: EditorInitialValues }) {
  const router = useRouter();
  const isEdit = initial.mode === "edit";

  const [slug, setSlug] = useState(initial.slug);
  const [kicker, setKicker] = useState(initial.kicker);
  const [title, setTitle] = useState(initial.title);
  const [titleHtml, setTitleHtml] = useState(initial.titleHtml);
  const [deck, setDeck] = useState(initial.deck);
  const [heroSub, setHeroSub] = useState(initial.heroSub);
  const [heroBadge, setHeroBadge] = useState(initial.heroBadge);
  const [topbarBrand, setTopbarBrand] = useState(initial.topbarBrand);
  const [topbarTag, setTopbarTag] = useState(initial.topbarTag);
  const [dateLabel, setDateLabel] = useState(initial.dateLabel);
  const [readTime, setReadTime] = useState(initial.readTime);
  const [rawHtml, setRawHtml] = useState(initial.rawHtml);
  const [afterSection, setAfterSection] = useState<number>(initial.afterSection ?? 1);
  const [customCss, setCustomCss] = useState(initial.customCss);

  const [preview, setPreview] = useState<PreviewResp | null>(null);
  const [previewing, setPreviewing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Auto-preview on rawHtml/afterSection change, debounced 400ms.
  useEffect(() => {
    if (!rawHtml.trim()) { setPreview(null); return; }
    const t = setTimeout(() => { void runPreview(); }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawHtml, afterSection]);

  async function runPreview() {
    setPreviewing(true);
    try {
      const res = await fetch("/api/admin/blogs/preview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ html: rawHtml, afterSection }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        console.warn("preview failed", b);
        setPreview(null);
        return;
      }
      setPreview(await res.json());
    } finally {
      setPreviewing(false);
    }
  }

  async function save() {
    setSaving(true);
    setSaveError(null);
    try {
      const payload = {
        slug, kicker, title, titleHtml: titleHtml || title,
        deck, heroSub, heroBadge: heroBadge || null,
        topbarBrand, topbarTag, dateLabel, readTime,
        rawHtml, afterSection,
        customCss: customCss || null,
      };
      const res = await fetch(
        isEdit ? `/api/admin/blogs/${initial.slug}` : "/api/admin/blogs",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        setSaveError(b.error || b.message || res.statusText);
        return;
      }
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : String(err));
    } finally {
      setSaving(false);
    }
  }

  const canSave = useMemo(() => {
    return slug.length >= 3 && title && deck && heroSub && topbarTag &&
           dateLabel && readTime && rawHtml.trim() && afterSection > 0;
  }, [slug, title, deck, heroSub, topbarTag, dateLabel, readTime, rawHtml, afterSection]);

  return (
    <div className="admin-editor">
      <div className="admin-editor-header">
        <div>
          <h1 className="admin-h1">{isEdit ? "Edit blog" : "New blog"}</h1>
          <p className="admin-sub">
            {isEdit ? <>Editing <strong className="mono">{initial.slug}</strong></> : "Paste your HTML, fill metadata, pick the split point."}
          </p>
        </div>
        <Link href="/admin/blogs" className="admin-btn-link">← Back to list</Link>
      </div>

      {/* METADATA */}
      <section className="admin-editor-section">
        <h2 className="admin-h2">Metadata</h2>

        <div className="admin-editor-grid">
          <Field label="Slug" hint="lowercase, dashes only (e.g. india-finance-jun19-2026)">
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="india-finance-..."
              className="admin-input mono"
              disabled={isEdit}
            />
          </Field>
          <Field label="Date label" hint="Free-form, displayed on card">
            <input value={dateLabel} onChange={(e) => setDateLabel(e.target.value)} placeholder="June 12, 2026" className="admin-input" />
          </Field>
          <Field label="Read time">
            <input value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="15 min read" className="admin-input" />
          </Field>
          <Field label="Kicker" hint="Category line above title">
            <input value={kicker} onChange={(e) => setKicker(e.target.value)} className="admin-input" />
          </Field>
          <Field label="Topbar brand">
            <input value={topbarBrand} onChange={(e) => setTopbarBrand(e.target.value)} className="admin-input" />
          </Field>
          <Field label="Topbar tag" hint="Right-side label on article">
            <input value={topbarTag} onChange={(e) => setTopbarTag(e.target.value)} placeholder="India & Global Finance | Week of Jun 12, 2026" className="admin-input" />
          </Field>
          <Field label="Hero badge (optional)">
            <input value={heroBadge} onChange={(e) => setHeroBadge(e.target.value)} placeholder="June 12, 2026" className="admin-input" />
          </Field>
        </div>

        <Field label="Title (plain text)" hint="Used in card + page metadata">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Beneath the Friday Rally, Something Else Changed" className="admin-input admin-input-wide" />
        </Field>

        <Field label="Title HTML (optional)" hint="Inner HTML of <h1> — allows <span> gold accent + <br>. Defaults to plain title.">
          <input value={titleHtml} onChange={(e) => setTitleHtml(e.target.value)} placeholder='Beneath the Friday Rally,<br /><span>Something Else Changed</span>' className="admin-input admin-input-wide mono" />
        </Field>

        <Field label="Deck (card teaser)" hint="1-2 sentences shown on listing card">
          <textarea value={deck} onChange={(e) => setDeck(e.target.value)} className="admin-textarea" rows={3} maxLength={600} />
        </Field>

        <Field label="Hero subtitle" hint="Paragraph shown below <h1> on the article page">
          <textarea value={heroSub} onChange={(e) => setHeroSub(e.target.value)} className="admin-textarea" rows={4} maxLength={1500} />
        </Field>
      </section>

      {/* BODY */}
      <section className="admin-editor-section">
        <h2 className="admin-h2">Article body</h2>
        <p className="admin-sub">
          Paste the HTML body — everything inside the <code>&lt;article&gt;</code> wrapper. Sanitized live below.
          Sections marked with <code>&lt;div class=&quot;section-tag&quot;&gt;01 …&lt;/div&gt;</code> are detected automatically.
        </p>

        <div className="admin-editor-body-grid">
          <div>
            <Field label="HTML">
              <textarea
                value={rawHtml}
                onChange={(e) => setRawHtml(e.target.value)}
                className="admin-textarea mono"
                rows={24}
                placeholder='<div class="topbar"> ... </div>'
              />
            </Field>

            <Field label="Split after section" hint="Preview = up to and including this section. Gated = everything after.">
              <select
                value={afterSection}
                onChange={(e) => setAfterSection(parseInt(e.target.value, 10))}
                className="admin-input"
                disabled={!preview || preview.sections.length === 0}
              >
                {preview?.sections && preview.sections.length > 0 ? (
                  preview.sections.slice(0, -1).map((s) => (
                    <option key={s.num} value={s.num}>
                      {String(s.num).padStart(2, "0")} — {s.title}
                    </option>
                  ))
                ) : (
                  <option value={1}>Paste HTML to detect sections…</option>
                )}
              </select>
            </Field>

            {preview && (
              <div className="admin-editor-meta">
                <p>Detected <strong>{preview.sections.length}</strong> sections.</p>
                {preview.droppedClasses.length > 0 && (
                  <p className="admin-editor-warn">
                    Dropped classes (not in design-system allowlist):{" "}
                    <span className="mono">{preview.droppedClasses.join(", ")}</span>
                  </p>
                )}
                {preview.inlineStylesStripped > 0 && (
                  <p className="admin-editor-warn">
                    Stripped {preview.inlineStylesStripped} inline <code>style</code> attribute(s) (CSS file owns styling).
                  </p>
                )}
                {preview.splitError && (
                  <p className="admin-editor-error">Split error: {preview.splitError}</p>
                )}
              </div>
            )}
          </div>

          {/* LIVE PREVIEW PANE */}
          <div className="admin-editor-preview">
            <div className="admin-editor-preview-tabs">
              <span className="admin-editor-preview-label">
                Live preview {previewing && <em className="admin-editor-spinner">…</em>}
              </span>
            </div>
            <article className="blog-post-body admin-editor-preview-body">
              {preview?.split ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: preview.split.preview }} />
                  <div className="admin-editor-preview-divider">
                    ─── Paywall split point ───
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: preview.split.gated }} />
                </>
              ) : preview ? (
                <div dangerouslySetInnerHTML={{ __html: preview.sanitized }} />
              ) : (
                <p className="admin-editor-placeholder">Paste HTML to see live preview here.</p>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* CUSTOM CSS */}
      <section className="admin-editor-section">
        <h2 className="admin-h2">Custom CSS (optional)</h2>
        <p className="admin-sub">
          Injected as an inline <code>&lt;style&gt;</code> tag at the top of this article only.
          Scope your selectors to article classes — they apply globally on the page otherwise.
          Sanitizer blocks <code>@import</code>, <code>expression()</code>, <code>javascript:</code> URIs, and closing-tag injection.
        </p>
        <Field label="CSS">
          <textarea
            value={customCss}
            onChange={(e) => setCustomCss(e.target.value)}
            className="admin-textarea mono"
            rows={10}
            placeholder=".numbers-strip { display: grid; ... }"
            maxLength={50_000}
          />
        </Field>
      </section>

      {/* ACTIONS */}
      <div className="admin-editor-actions">
        {saveError && <p className="admin-editor-error">Save failed: {saveError}</p>}
        <Link href="/admin/blogs" className="admin-btn-link">Cancel</Link>
        <button
          onClick={save}
          disabled={!canSave || saving}
          className="admin-btn-primary"
        >
          {saving ? "Saving…" : isEdit ? "Save changes (stays draft)" : "Save as draft"}
        </button>
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="admin-field">
      <span className="admin-field-label">{label}</span>
      {hint && <span className="admin-field-hint">{hint}</span>}
      {children}
    </label>
  );
}
