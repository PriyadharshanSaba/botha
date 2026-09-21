"use client";

import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface ModuleCardProps {
  id: number;
  color: string;
  title: string;
  chapters: string;
  chaptersNum: number;
  description: string;
  view_module_link: string;
  moduleId: string;
  progressChapter?: number; // current chapter index (0-based)
  accessState?: "full" | "preview" | "locked";
}

export default function ModuleCard({
  id,
  title,
  chapters,
  chaptersNum,
  description,
  view_module_link,
  progressChapter,
  accessState = "full",
}: ModuleCardProps) {
  const { t, lang } = useLanguage();

  const knDigits = ['೦','೧','೨','೩','೪','೫','೬','೭','೮','೯'];
  const displayId = lang === "kn"
    ? String(id).split('').map(d => knDigits[parseInt(d)]).join('')
    : id;

  const hasProgress = progressChapter !== undefined && progressChapter > 0;
  const progressPct = hasProgress
    ? Math.round(((progressChapter) / (chaptersNum - 1)) * 100)
    : 0;

  const isLocked = accessState === "locked";
  const isPreview = accessState === "preview";

  return (
    <Link href={view_module_link} className={`module-card-link ${isLocked ? "module-card-link--locked" : ""}`}>
      <div className={`module-card hover-card ${isLocked ? "module-card--locked" : ""}`}>
        <div className="module-header">
          <h2 className="module-number">{displayId}</h2>
          {isPreview && (
            <span className="module-badge module-badge--preview">Free preview</span>
          )}
          {isLocked && (
            <span className="module-badge module-badge--locked" aria-label="Subscribers only">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              Subscribers only
            </span>
          )}
        </div>

        <h3 className="module-name">{title}</h3>
        <p className="module-chapters">{chapters}</p>

        <div className="module-progress-wrap">
          <div className="module-progress-bar">
            <div
              className="module-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="module-progress-label">
            {hasProgress ? `Chapter ${progressChapter} of ${chaptersNum}` : "Module not started yet"}
          </div>
        </div>

        <p className="module-description">{description}</p>

        <div className="module-links">
          <span className="link">{isLocked ? "Subscribe to unlock" : t("viewModule")}</span>
        </div>
      </div>
    </Link>
  );
}
