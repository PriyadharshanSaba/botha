"use client";

import { useState } from "react";

export default function DownloadButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function download() {
    if (loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/guide/download", { cache: "no-store" });
      if (!res.ok) {
        setError("Could not download. Try again.");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Bodha-Personal-Finance-Program-Guide.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="guide-download">
      <button className="guide-download-btn" onClick={download} disabled={loading}>
        {loading ? "Preparing…" : "Download the guide (PDF)"}
      </button>
      {error && <div className="guide-download-error">{error}</div>}
    </div>
  );
}
