"use client";
import { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

export type Point = { date: string; count: number };

export default function DailyBarChart({
  points,
  label,
  sub,
}: {
  points: Point[];
  label: string;
  sub?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    chartRef.current?.destroy();

    // Gold gradient (matches webapp accent palette).
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height || 200);
    gradient.addColorStop(0, "#d4a017");
    gradient.addColorStop(1, "rgba(232, 208, 138, 0.55)");

    const hoverGradient = ctx.createLinearGradient(0, 0, 0, canvas.height || 200);
    hoverGradient.addColorStop(0, "#b8881a");
    hoverGradient.addColorStop(1, "rgba(201, 168, 76, 0.85)");

    const maxVal = Math.max(1, ...points.map((p) => p.count));

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels: points.map((p) => {
          // "YYYY-MM-DD" → "Jun 03"
          const [, m, d] = p.date.split("-");
          const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          return `${months[Number(m) - 1]} ${d}`;
        }),
        datasets: [
          {
            label,
            data: points.map((p) => p.count),
            backgroundColor: gradient,
            hoverBackgroundColor: hoverGradient,
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 32,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 16, right: 4, bottom: 0, left: 0 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0d0d0d",
            titleColor: "#e8d08a",
            titleFont: { size: 11, weight: 600 },
            bodyColor: "#fff",
            bodyFont: { size: 13, weight: 600 },
            padding: 10,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: (ctx) => `${ctx.parsed.y}`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: "#94a3b8",
              font: { size: 10, weight: 500 },
              maxRotation: 0,
              autoSkipPadding: 8,
            },
          },
          y: {
            beginAtZero: true,
            suggestedMax: Math.ceil(maxVal * 1.2),
            grid: { color: "rgba(13, 13, 13, 0.05)" },
            border: { display: false },
            ticks: {
              color: "#94a3b8",
              font: { size: 10 },
              precision: 0,
              stepSize: Math.max(1, Math.ceil(maxVal / 4)),
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [points, label]);

  return (
    <div className="admin-chart-card">
      <div className="admin-chart-title">{label}</div>
      {sub && <div className="admin-chart-sub">{sub}</div>}
      <div className="admin-chart-canvas-wrap">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
