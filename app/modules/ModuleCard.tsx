"use client";

import Link from "next/link";
import React from "react";

interface ModuleCardProps {
  id: number;
  color: string;
  title: string;
  chapters: string;
  description: string;
  view_module_link: string;
}

export default function ModuleCard({
  id,
  color,
  title,
  chapters,
  description,
  view_module_link,
}: ModuleCardProps) {
  return (
    <Link href={view_module_link} className="module-card-link">
      <div className="module-card hover-card">
        <div className="module-header">
          <h2 className="module-number">{id}</h2>
        </div>

        <h3 className="module-name">{title}</h3>
        <p className="module-chapters">{chapters}</p>
        <p className="module-description">{description}</p>

        <div className="module-links">
          <span className="link">View module →</span>
        </div>
      </div>
    </Link>
  );
}
