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
    <div className="module-card">
      <div className="module-header">
        {/* <div className="tick" style={{ backgroundColor: color }} /> */}
        <h2 className="module-number">{id}</h2>
      </div>

      <h3 className="module-name">{title}</h3>
      <p className="module-chapters">{chapters}</p>
      <p className="module-description">{description}</p>

      <div className="module-links">
        <Link href={view_module_link} className="link">
          View module
        </Link>
        <Link href="#" className="link">
          Watch videos
        </Link>
      </div>
    </div>
  );
}
