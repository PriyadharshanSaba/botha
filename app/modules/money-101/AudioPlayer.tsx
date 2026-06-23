"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = { src: string };

function fmt(s: number) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCur(a.currentTime);
    const onMeta = () => setDur(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }

  function skip(delta: number) {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Math.max(0, Math.min((a.duration || 0), a.currentTime + delta));
    setCur(a.currentTime);
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    const a = audioRef.current;
    if (!a) return;
    const v = Number(e.target.value);
    a.currentTime = v;
    setCur(v);
  }

  return (
    <div className={`ap-wrap ${open ? "ap-open" : ""}`}>
      <button
        type="button"
        className="ap-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="ap-toggle-left">
          <span className="ap-toggle-icon" aria-hidden>
            {/* headphones glyph */}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5z" />
              <path d="M3 19a2 2 0 0 0 2 2h1v-7H3v5z" />
            </svg>
          </span>
          <span>Listen to audio</span>
        </span>
        <span className="ap-toggle-chev" aria-hidden>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="ap-panel">
          <audio ref={audioRef} src={src} preload="none" />

          <div className="ap-controls">
            <button
              type="button"
              className="ap-btn ap-btn-skip"
              onClick={() => skip(-5)}
              aria-label="Back 5 seconds"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 12a8 8 0 1 0 2.34-5.66" />
                <polyline points="4 3 4 7 8 7" />
                <text x="12" y="15.6" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>5</text>
              </svg>
            </button>

            <button
              type="button"
              className="ap-btn ap-btn-play"
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1.2" />
                  <rect x="14" y="5" width="4" height="14" rx="1.2" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <path d="M7 5.2v13.6c0 .9 1 1.5 1.8 1L19 12.9c.7-.4.7-1.4 0-1.8L8.8 4.2C8 3.7 7 4.3 7 5.2z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="ap-btn ap-btn-skip"
              onClick={() => skip(5)}
              aria-label="Forward 5 seconds"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 12a8 8 0 1 1-2.34-5.66" />
                <polyline points="20 3 20 7 16 7" />
                <text x="12" y="15.6" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>5</text>
              </svg>
            </button>
          </div>

          <div className="ap-progress">
            <span className="ap-time">{fmt(cur)}</span>
            <input
              type="range"
              min={0}
              max={dur || 0}
              step={0.1}
              value={cur}
              onChange={seek}
              className="ap-range"
              aria-label="Seek"
            />
            <span className="ap-time">{fmt(dur)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
