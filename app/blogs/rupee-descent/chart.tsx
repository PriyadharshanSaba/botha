"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function CurrencyChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const currencies = [
      "South African Rand (ZAR)",
      "Brazilian Real (BRL)",
      "Japanese Yen (JPY)",
      "Thai Baht (THB)",
      "Malaysian Ringgit (MYR)",
      "South Korean Won (KRW)",
      "Indonesian Rupiah (IDR)",
      "Vietnamese Dong (VND)",
      "Indian Rupee (INR)",
      "Mexican Peso (MXN)",
      "Chinese Yuan (CNY)",
      "Singapore Dollar (SGD)",
    ];
    const fiveYear = [-30, -35, -35, -20, -18, -18, -20, -15, -27, -20, -12, 2];
    const tenYear = [-55, -60, -50, -25, -30, -22, -35, -25, -42, -25, -10, 3];

    const getColor = (v: number, label: string, opacity = 1) => {
      if (label.includes("INR")) return `rgba(160,56,10,${opacity})`;
      if (v >= -10) return `rgba(46,125,69,${opacity})`;
      if (v >= -20) return `rgba(200,154,46,${opacity})`;
      return `rgba(160,56,10,${opacity})`;
    };

    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: currencies,
        datasets: [
          {
            label: "5-Year",
            data: fiveYear,
            backgroundColor: fiveYear.map((v, i) => getColor(v, currencies[i], 0.85)),
            borderColor: fiveYear.map((v, i) => getColor(v, currencies[i], 1)),
            borderWidth: 0,
            borderSkipped: false,
          },
          {
            label: "10-Year",
            data: tenYear,
            backgroundColor: tenYear.map((v, i) => getColor(v, currencies[i], 0.28)),
            borderColor: fiveYear.map((v, i) => getColor(v, currencies[i], 0.55)),
            borderWidth: 1,
            borderSkipped: false,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              font: { family: "'DM Sans', sans-serif", size: 11 },
              color: "#6B6460",
              boxWidth: 12,
              boxHeight: 12,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${(ctx.parsed.x as number).toFixed(1)}%`,
            },
          },
        },
        scales: {
          x: {
            min: -70,
            max: 15,
            grid: { color: "rgba(17,17,17,0.06)" },
            ticks: {
              font: { family: "'DM Sans', sans-serif", size: 10 },
              color: "#6B6460",
              callback: (v) => v + "%",
            },
          },
          y: {
            grid: { display: false },
            ticks: {
              font: { family: "'DM Sans', sans-serif", size: 11 },
              color: "#111111",
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={chartRef} role="img" aria-label="Bar chart comparing 5-year and 10-year depreciation across 12 currencies." />;
}
