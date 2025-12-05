"use client";

import React from "react";
import ModuleCard from "./ModuleCard";
import "./modules.css";

export default function ModulesPage() {
  const modules = [
    {
      id: 1,
      color: "#1DB954",
      title: "Budgeting 101",
      chapters: "7 chapters",
      description:
        "Budgeting isn’t about saying no — it’s about learning how to say yes to what truly matters. It’s not restriction, it’s direction — the skill that turns income into progress.",
      view_module_link: "/modules/budgeting-101",
    },
    {
      id: 2,
      color: "#4A90E2",
      title: "Introduction to Stock Market",
      chapters: "8 chapters",
      description:
        "Imagine your favourite coffee brand wants to open 500 new outlets. That kind of expansion needs money — to buy land, build stores, hire staff, and market the brand.",
      view_module_link: "/modules/stock-market",
    },
    {
      id: 3,
      color: "#FFC107",
      title: "Money 101",
      chapters: "8 chapters",
      description:
        "Long before coins and cards, people traded what they had for what they needed. Barter was useful, but flawed: what if the farmer didn’t want fish that day?",
      view_module_link: "/modules/money-101",
    },
  ];

  return (
    <div className="modules-wrapper">
      <h1 className="modules-title">Modules</h1>
      <div className="divider" />

      <div className="modules-grid">
        {modules.map((m) => (
          <ModuleCard
            key={m.id}
            id={m.id}
            color={m.color}
            title={m.title}
            chapters={m.chapters}
            description={m.description}
            view_module_link={m.view_module_link}
          />
        ))}
      </div>
    </div>
  );
}
