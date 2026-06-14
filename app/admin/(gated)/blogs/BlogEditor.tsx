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

type ExtractedMeta = {
  title: string;
  titleHtml: string;
  deck: string;
  heroSub: string;
  heroBadge: string;
  topbarBrand: string;
  topbarTag: string;
  kicker: string;
  dateLabel: string;
  readTime: string;
  suggestedSlug: string;
};

type PreviewResp = {
  sanitized: string;
  sections: DetectedSection[];
  droppedClasses: string[];
  inlineStylesStripped: number;
  split: { preview: string; gated: string } | null;
  splitError: string | null;
  extracted: ExtractedMeta;
  customCss: string;
  cssRemoved: string[];
};

const EMPTY_INITIAL: EditorInitialValues = {
  mode: "new",
  slug: "",
  kicker: "",
  title: "",
  titleHtml: "",
  deck: "",
  heroSub: "",
  heroBadge: "",
  topbarBrand: "",
  topbarTag: "",
  dateLabel: "",
  readTime: "",
  rawHtml: "",
  afterSection: 1,
  customCss: "",
};

export default function BlogEditor({ initial = EMPTY_INITIAL }: { initial?: EditorInitialValues }) {
  const router = useRouter();
  const isEdit = initial.mode === "edit";

  const [rawHtml, setRawHtml] = useState(initial.rawHtml);
  const [afterSection, setAfterSection] = useState<number>(initial.afterSection ?? 1);

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

  // Track which fields the user has TOUCHED. We only auto-fill UNTOUCHED
  // fields when new extracted metadata arrives. So if the partner edits
  // a field, subsequent autofills won't blow it away.
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const markTouched = (k: string) => setTouched((t) => (t[k] ? t : { ...t, [k]: true }));

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

  // When a fresh preview comes back, fill any untouched fields from extracted.
  useEffect(() => {
    if (!preview?.extracted) return;
    const ex = preview.extracted;
    const fillers: { key: string; cur: string; set: (v: string) => void; val: string }[] = [
      { key: "slug",        cur: slug,        set: setSlug,        val: ex.suggestedSlug },
      { key: "kicker",      cur: kicker,      set: setKicker,      val: ex.kicker },
      { key: "title",       cur: title,       set: setTitle,       val: ex.title },
      { key: "titleHtml",   cur: titleHtml,   set: setTitleHtml,   val: ex.titleHtml },
      { key: "deck",        cur: deck,        set: setDeck,        val: ex.deck },
      { key: "heroSub",     cur: heroSub,     set: setHeroSub,     val: ex.heroSub },
      { key: "heroBadge",   cur: heroBadge,   set: setHeroBadge,   val: ex.heroBadge },
      { key: "topbarBrand", cur: topbarBrand, set: setTopbarBrand, val: ex.topbarBrand },
      { key: "topbarTag",   cur: topbarTag,   set: setTopbarTag,   val: ex.topbarTag },
      { key: "dateLabel",   cur: dateLabel,   set: setDateLabel,   val: ex.dateLabel },
      { key: "readTime",    cur: readTime,    set: setReadTime,    val: ex.readTime },
    ];
    for (const f of fillers) {
      if (touched[f.key]) continue;          // user has edited this field; leave alone
      if (f.cur && f.cur.trim().length > 0) continue;   // already filled
      if (!f.val) continue;                   // nothing to fill
      f.set(f.val);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preview]);

  async function runPreview() {
    setPreviewing(true);
    try {
      const res = await fetch("/api/admin/blogs/preview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ html: rawHtml, afterSection }),
      });
      if (!res.ok) { setPreview(null); return; }
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
        slug, kicker, title, titleHtml,
        deck, heroSub, heroBadge: heroBadge || null,
        topbarBrand, topbarTag, dateLabel, readTime,
        rawHtml, afterSection,
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
    return slug.length >= 3 && rawHtml.trim() && afterSection > 0;
  }, [slug, rawHtml, afterSection]);

  return (
    <div className="admin-editor">
      <div className="admin-editor-header">
        <div>
          <h1 className="admin-h1">{isEdit ? "Edit blog" : "New blog"}</h1>
          <p className="admin-sub">
            {isEdit
              ? <>Editing <strong className="mono">{initial.slug}</strong></>
              : "Paste your HTML below. Title, slug, date, read-time, and teaser fill in automatically."}
          </p>
        </div>
        <Link href="/admin/blogs" className="admin-btn-link">← Back to list</Link>
      </div>

      {/* HTML PASTE — top */}
      <section className="admin-editor-section">
        <h2 className="admin-h2">1. Paste HTML</h2>
        <p className="admin-sub">
          The full file as exported. Anything inside <code>&lt;style&gt;</code> tags is pulled out and stored as this article&apos;s custom styles automatically.
        </p>

        <div className="admin-editor-body-grid">
          <div>
            <Field label="HTML">
              <textarea
                value={rawHtml}
                onChange={(e) => setRawHtml(e.target.value)}
                className="admin-textarea mono"
                rows={20}
                placeholder="<!DOCTYPE html><html>...</html>  — or just paste the body content"
              />
            </Field>

            <Field label="Split paywall after section" hint="Free preview = up to and including this section. Gated = everything after.">
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
                <p>Detected <strong>{preview.sections.length}</strong> section{preview.sections.length === 1 ? "" : "s"}.</p>
                {preview.customCss && preview.customCss.length > 0 && (
                  <p>Pulled <strong>{preview.customCss.length}</strong> chars of custom CSS from <code>&lt;style&gt;</code> blocks.</p>
                )}
                {preview.splitError && (
                  <p className="admin-editor-error">Split error: {preview.splitError}</p>
                )}
              </div>
            )}
          </div>

          {/* LIVE PREVIEW PANE */}
          <div className="admin-editor-preview">
            {preview?.customCss && (
              <style dangerouslySetInnerHTML={{ __html: preview.customCss }} />
            )}
            <div className="admin-editor-preview-tabs">
              <span className="admin-editor-preview-label">
                Live preview {previewing && <em className="admin-editor-spinner">…</em>}
              </span>
            </div>
            <article className="blog-post-body admin-editor-preview-body">
              {preview?.split ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: preview.split.preview }} />
                  <div className="admin-editor-preview-divider">─── Paywall split point ───</div>
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

      {/* METADATA — pre-filled, editable */}
      <section className="admin-editor-section">
        <h2 className="admin-h2">2. Article info <span className="admin-editor-auto-pill">auto-filled, edit if needed</span></h2>

        <div className="admin-editor-grid">
          <Field label="Slug" hint="URL path. Lowercase, dashes only.">
            <input
              value={slug}
              onChange={(e) => { setSlug(e.target.value); markTouched("slug"); }}
              placeholder="auto-generated from title"
              className="admin-input mono"
              disabled={isEdit}
            />
          </Field>
          <Field label="Date label" hint="Shown on the article card">
            <input value={dateLabel} onChange={(e) => { setDateLabel(e.target.value); markTouched("dateLabel"); }} className="admin-input" />
          </Field>
          <Field label="Read time">
            <input value={readTime} onChange={(e) => { setReadTime(e.target.value); markTouched("readTime"); }} className="admin-input" />
          </Field>
          <Field label="Kicker" hint="Category line above title on the card">
            <input value={kicker} onChange={(e) => { setKicker(e.target.value); markTouched("kicker"); }} className="admin-input" />
          </Field>
        </div>

        <Field label="Title">
          <input value={title} onChange={(e) => { setTitle(e.target.value); markTouched("title"); }} className="admin-input admin-input-wide" />
        </Field>

        <Field label="Teaser (deck)" hint="1-2 sentences shown on the listing card">
          <textarea value={deck} onChange={(e) => { setDeck(e.target.value); markTouched("deck"); }} className="admin-textarea" rows={3} maxLength={600} />
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
