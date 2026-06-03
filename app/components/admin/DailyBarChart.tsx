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
}: {
  points: Point[];
  label: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: points.map((p) => p.date.slice(5)),
        datasets: [
          {
            label,
            data: points.map((p) => p.count),
            backgroundColor: "#d4a017",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } },
        },
      },
    });
    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [points, label]);

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{label}</h3>
      <canvas ref={canvasRef} height={120} />
    </div>
  );
}
