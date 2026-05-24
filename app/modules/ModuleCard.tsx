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
}

export default function ModuleCard({
  id,
  color,
  title,
  chapters,
  chaptersNum,
  description,
  view_module_link,
  progressChapter,
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

  return (
    <Link href={view_module_link} className="module-card-link">
      <div className="module-card hover-card">
        <div className="module-header">
          <h2 className="module-number">{displayId}</h2>
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
          <span className="link">{t("viewModule")}</span>
        </div>
      </div>
    </Link>
  );
}
