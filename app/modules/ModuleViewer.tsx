"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";
import SketchIcon from "@/app/components/SketchIcon";

type Props = {
  moduleId: string;
  moduleNumber: number;
  moduleName: string;
  completionMessage: string;
  // Highest chapter index the viewer is allowed to navigate to (0-based).
  // Defaults to the last chapter when omitted. Used to lock chapters past
  // the free preview boundary for non-subscribers.
  maxAccessibleIndex?: number;
  children: React.ReactNode;
};

export default function ModuleViewer({
  moduleId,
  moduleNumber,
  completionMessage,
  maxAccessibleIndex,
  children,
}: Props) {
  const { t, lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const chapterElements = React.Children.toArray(children);
  const totalChapters = chapterElements.length;
  const maxIdx =
    maxAccessibleIndex !== undefined
      ? Math.max(0, Math.min(maxAccessibleIndex, totalChapters - 1))
      : totalChapters - 1;
  const clampIdx = (i: number) => Math.max(0, Math.min(maxIdx, i));

  const [chapterIndex, setChapterIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const chapter = searchParams.get("chapter");
    if (chapter) {
      setChapterIndex(clampIdx(Number(chapter)));
      setIsLoading(false);
      return;
    }

    fetch("/api/modules", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : {}))
      .then((data: { moduleId?: string; chapterNumber?: number }) => {
        if (data.moduleId === moduleId) {
          setChapterIndex(clampIdx(data.chapterNumber ?? 0));
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (isLoading) return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }, [isLoading, chapterIndex, isComplete]);

  async function saveProgress(chapterNumber: number) {
    await fetch("/api/modules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, chapterNumber }),
    });
  }

  if (isLoading) {
    return (
      <main className="module-loading-container">
        <div className="spinner"></div>
        <p className="loading-text">{t("loadingProgress")}</p>
      </main>
    );
  }

  if (isComplete) {
    return (
      <main className="container module-detail-container">
        <div className="module-progress-header">
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <span className="progress-label">
              {totalChapters} of {totalChapters} {t("chapters")}
            </span>
          </div>
          <div className="chapter-dots">
            {chapterElements.map((_, i) => (
              <button
                key={i}
                className="chapter-dot done"
                onClick={() => {
                  setIsComplete(false);
                  setChapterIndex(i);
                  saveProgress(i);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="complete-body">
          <div className="complete-inner">
            <div className="complete-icon"><SketchIcon name="grad-cap" size={52} /></div>
            <div className="complete-title">
              Module {moduleNumber}
              <br />
              <em>Complete.</em>
            </div>
            <p className="complete-sub">{completionMessage}</p>
            <button
              className="complete-btn"
              onClick={() => router.push("/modules")}
            >
              &larr; Back to All Modules
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container module-detail-container">
      {/* === Chapter Progress Header === */}
      <div className="module-progress-header">
        <div className="progress-wrap">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${Math.round((chapterIndex / (totalChapters - 1)) * 100)}%`,
              }}
            />
          </div>
          <span className="progress-label">
            {chapterIndex + 1} of {totalChapters} {t("chapters")}
          </span>
        </div>
        <div className="chapter-dots">
          {chapterElements.map((_, i) => {
            const locked = i > maxIdx;
            return (
              <button
                key={i}
                className={[
                  "chapter-dot",
                  chapterIndex > i ? "done" : "",
                  chapterIndex === i ? "active" : "",
                  locked ? "locked" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                disabled={locked}
                aria-disabled={locked}
                onClick={() => {
                  if (locked) return;
                  setChapterIndex(i);
                  saveProgress(i);
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* === Active Chapter === */}
      <section className="chapters-list">
        <div
          className="chapter"
          data-active-lang={lang}
          // Content protection (layer 2): block clipboard + context menu + drag.
          // CSS user-select:none handles selection blocking; these stop the
          // remaining vectors (right-click → Copy, Ctrl+C, drag-to-clipboard).
          // Not bulletproof — devtools / screenshots still work — but raises
          // friction for casual copying.
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          {chapterElements[chapterIndex]}
        </div>
      </section>

      {/* === Floating Navigation Buttons === */}
      <div className="chapter-nav">
        <button
          className="nav-btn prev"
          onClick={() => {
            setChapterIndex((i) => {
              const newIndex = Math.max(0, i - 1);
              saveProgress(newIndex);
              return newIndex;
            });
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
          disabled={chapterIndex === 0}
        >
          &larr; {t("previous")}
        </button>

        <span className="nav-chapter-info">
          {chapterIndex + 1} / {totalChapters}
        </span>
        <span className="nav-divider" />

        <button
          className="nav-btn next"
          disabled={chapterIndex >= maxIdx && maxIdx < totalChapters - 1}
          onClick={async () => {
            if (chapterIndex === totalChapters - 1) {
              await saveProgress(chapterIndex);
              setIsComplete(true);
            } else {
              setChapterIndex((i) => {
                const newIndex = Math.min(maxIdx, i + 1);
                saveProgress(newIndex);
                return newIndex;
              });
            }
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          {chapterIndex === totalChapters - 1
            ? "Finish \u2713"
            : `${t("next")} \u2192`}
        </button>
      </div>
    </main>
  );
}
