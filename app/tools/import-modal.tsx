"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import { IMPORT_PROMPT_V1 } from "@/app/lib/networth/import-prompt";
import { parseImport, commitImport, type ImportReport } from "@/app/lib/networth/client";

export type ImportModalProps = {
  open: boolean;
  userId: string;
  onClose: () => void;
  onCommitted: (committedCount: number) => void;
};

type ImportErrorCode =
  | "invalid-json"
  | "invalid-envelope"
  | "import-already-used"
  | "payload-too-large"
  | "unauthenticated"
  | "server-error"
  | "network";

type State =
  | { mode: "consent"; consented: boolean }
  | { mode: "paste"; raw: string }
  | { mode: "parsing"; raw: string }
  | { mode: "preview"; raw: string; report: ImportReport }
  | { mode: "committing"; raw: string; report: ImportReport }
  | { mode: "done"; committedCount: number }
  | { mode: "error"; raw: string; message: string; code: ImportErrorCode | "commit-empty" };

const PRIMARY = "#1f3a52";
const ACCENT = "#f4be6e";
const MAX_BYTES = 256 * 1024;

const ERROR_COPY: Record<ImportErrorCode, string> = {
  "invalid-json": "GPT response wasn't valid JSON. Try a different model or check the prompt.",
  "invalid-envelope": "Output didn't match the expected shape. Make sure the AI returns the schema exactly.",
  "import-already-used": "You've already used your one-time import. Reach out to support if this is wrong.",
  "payload-too-large": "Paste is over 256 KB. Trim the data and try again.",
  unauthenticated: "Session expired. Please sign in again.",
  network: "Network problem. Check your connection and try again.",
  "server-error": "Something went wrong on our side. Try again in a moment.",
};

function formatInr(n: number): string {
  return `\u20B9${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

const ALLOC_ORDER = ["equity", "debt", "gold", "realestate", "cash"] as const;

function formatAlloc(alloc: Record<string, number>): string {
  const parts: string[] = [];
  for (const k of ALLOC_ORDER) {
    const v = alloc[k];
    if (typeof v === "number" && v !== 0) parts.push(`${k} ${v}`);
  }
  return parts.length > 0 ? parts.join(" / ") : "—";
}

export default function ImportModal(props: ImportModalProps): JSX.Element | null {
  const { open, userId, onClose, onCommitted } = props;
  // Parent uses {importOpen && <ImportModal .../>} so each open is a fresh mount.
  // Initial state is therefore always consent — no reset effect needed.
  const [state, setState] = useState<State>({ mode: "consent", consented: false });
  const [copied, setCopied] = useState(false);

  // Copied flag auto-clears after 2s
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  if (!open) return null;

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  };

  const cardStyle: React.CSSProperties = {
    background: "white",
    borderRadius: 12,
    padding: 24,
    maxWidth: 720,
    width: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
    color: PRIMARY,
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
    fontFamily: "inherit",
  };

  const primaryBtn: React.CSSProperties = {
    background: ACCENT,
    color: PRIMARY,
    border: "none",
    borderRadius: 8,
    padding: "10px 18px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
  };

  const secondaryBtn: React.CSSProperties = {
    background: "transparent",
    color: PRIMARY,
    border: `1px solid ${PRIMARY}`,
    borderRadius: 8,
    padding: "10px 18px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
  };

  const disabledBtn: React.CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  const headingStyle: React.CSSProperties = {
    margin: "0 0 16px 0",
    fontSize: 22,
    fontWeight: 700,
  };

  const subheadingStyle: React.CSSProperties = {
    margin: "16px 0 8px 0",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "rgba(31,58,82,0.7)",
  };

  const buttonRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 24,
  };

  async function runParse(raw: string): Promise<void> {
    setState({ mode: "parsing", raw });
    const outcome = await parseImport(raw);
    if (outcome.ok) {
      setState({ mode: "preview", raw, report: outcome.report });
    } else {
      setState({
        mode: "error",
        raw,
        message: ERROR_COPY[outcome.error],
        code: outcome.error,
      });
    }
  }

  async function runCommit(raw: string, report: ImportReport): Promise<void> {
    setState({ mode: "committing", raw, report });
    const outcome = await commitImport(userId, raw);
    if (outcome.ok) {
      const r2 = outcome.report as ImportReport & { committed?: boolean };
      if (r2.committed === true) {
        setState({ mode: "done", committedCount: r2.accepted.length });
        onCommitted(r2.accepted.length);
      } else {
        setState({
          mode: "error",
          raw,
          message: "Import didn't complete. Try again.",
          code: "commit-empty",
        });
      }
    } else {
      setState({
        mode: "error",
        raw,
        message: ERROR_COPY[outcome.error],
        code: outcome.error,
      });
    }
  }

  function renderConsent(s: Extract<State, { mode: "consent" }>): JSX.Element {
    return (
      <div>
        <h2 style={headingStyle}>We don&apos;t store your CSV</h2>
        <ul style={{ margin: "0 0 16px 0", paddingLeft: 20, lineHeight: 1.6, fontSize: 14 }}>
          <li>Your file never touches our servers. It only travels between your computer and the AI you choose.</li>
          <li>The AI provider (OpenAI / Anthropic / Google etc.) may retain your prompt per their policy — review before pasting.</li>
          <li>This import runs once per account and does not overwrite existing months. Months already in your tracker will be skipped.</li>
          <li>This action cannot be undone — review the preview carefully before confirming.</li>
        </ul>
        <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14 }}>
          <input
            type="checkbox"
            checked={s.consented}
            onChange={(e) => setState({ mode: "consent", consented: e.target.checked })}
          />
          <span>I have read and accept the above</span>
        </label>
        <div style={buttonRow}>
          <button type="button" style={secondaryBtn} onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            style={s.consented ? primaryBtn : { ...primaryBtn, ...disabledBtn }}
            disabled={!s.consented}
            onClick={() => setState({ mode: "paste", raw: "" })}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  function renderPaste(s: Extract<State, { mode: "paste" }>, busy: boolean): JSX.Element {
    const canParse = s.raw.trim() !== "" && !busy;
    return (
      <div>
        <h2 style={headingStyle}>Import from CSV</h2>
        <div style={subheadingStyle}>Step 1 — Get the JSON from your AI</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            type="button"
            style={secondaryBtn}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(IMPORT_PROMPT_V1);
                setCopied(true);
              } catch {
                /* ignore — clipboard may be blocked */
              }
            }}
          >
            Copy import prompt
          </button>
          {copied && <span style={{ fontSize: 13, color: "#2f7a4a" }}>Copied!</span>}
        </div>
        <div style={subheadingStyle}>Step 2 — Paste the AI&apos;s output</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/import-guide/step1.webp" alt="Reference 1" style={{ width: 96, height: 96, objectFit: "cover", border: "1px solid #ddd", borderRadius: 6 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/import-guide/step2.webp" alt="Reference 2" style={{ width: 96, height: 96, objectFit: "cover", border: "1px solid #ddd", borderRadius: 6 }} />
          <span style={{ fontSize: 11, color: "#666", lineHeight: 1.4 }}>
            Reference: copy the AI&apos;s full JSON output and paste below.
          </span>
        </div>
        <textarea
          rows={8}
          value={s.raw}
          maxLength={MAX_BYTES}
          placeholder="Paste the AI's JSON output here…"
          onChange={(e) => setState({ mode: "paste", raw: e.target.value })}
          style={{
            width: "100%",
            boxSizing: "border-box",
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: 8,
            padding: 12,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 13,
            color: PRIMARY,
            resize: "vertical",
          }}
        />
        <div style={buttonRow}>
          <button
            type="button"
            style={secondaryBtn}
            onClick={() => setState({ mode: "consent", consented: true })}
          >
            Back
          </button>
          <button
            type="button"
            style={canParse ? primaryBtn : { ...primaryBtn, ...disabledBtn }}
            disabled={!canParse}
            onClick={() => {
              void runParse(s.raw);
            }}
          >
            {busy ? "Parsing…" : "Parse"}
          </button>
        </div>
      </div>
    );
  }

  function renderPreview(s: Extract<State, { mode: "preview" }>, busy: boolean): JSX.Element {
    const total = s.report.accepted.length + s.report.rejected.length;
    const acceptedSet = new Set(s.report.accepted.map((a) => a.row));
    type Row =
      | { kind: "accepted"; row: number; month: string; assetTotal: number; liabTotal: number; nw: number; alloc: Record<string, number> }
      | { kind: "rejected"; row: number; month: string | null; reason: string; detail?: string };

    const rows: Row[] = [];
    for (const a of s.report.accepted) {
      rows.push({
        kind: "accepted",
        row: a.row,
        month: a.month,
        assetTotal: a.assetTotal,
        liabTotal: a.liabTotal,
        nw: a.nw,
        alloc: a.alloc,
      });
    }
    for (const r of s.report.rejected) {
      if (acceptedSet.has(r.row)) continue;
      rows.push({ kind: "rejected", row: r.row, month: r.month, reason: r.reason, detail: r.detail });
    }
    rows.sort((x, y) => x.row - y.row);

    const canConfirm = s.report.accepted.length > 0 && !busy;

    const th: React.CSSProperties = {
      textAlign: "left",
      fontSize: 12,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "rgba(31,58,82,0.7)",
      padding: "8px 10px",
      borderBottom: "2px solid rgba(0,0,0,0.08)",
    };
    const td: React.CSSProperties = {
      padding: "8px 10px",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      fontSize: 13,
      verticalAlign: "top",
    };

    return (
      <div>
        <h2 style={headingStyle}>Review your import</h2>
        <div style={{ fontSize: 14, marginBottom: 12 }}>
          {s.report.accepted.length} of {total} entries will be imported
        </div>
        <div style={{ overflowX: "auto", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={th}>Month</th>
                <th style={th}>Total Assets</th>
                <th style={th}>Total Liabs</th>
                <th style={th}>Net Worth</th>
                <th style={th}>Alloc</th>
                <th style={th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => {
                if (r.kind === "accepted") {
                  return (
                    <tr key={`a-${idx}`}>
                      <td style={td}>{r.month}</td>
                      <td style={td}>{formatInr(r.assetTotal)}</td>
                      <td style={td}>{formatInr(r.liabTotal)}</td>
                      <td style={td}>{formatInr(r.nw)}</td>
                      <td style={td}>{formatAlloc(r.alloc)}</td>
                      <td style={td}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            background: "#e6f4ea",
                            color: "#1e6b3a",
                            padding: "2px 8px",
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          <span aria-hidden="true">✓</span> Ready
                        </span>
                      </td>
                    </tr>
                  );
                }
                const isDup = r.reason === "duplicate-month";
                const badgeBg = isDup ? "#fdf1d6" : "#fde4e1";
                const badgeFg = isDup ? "#8a5a13" : "#a02927";
                const badgeText = isDup ? "Already saved" : "Invalid";
                const tipParts: string[] = [r.reason];
                if (r.detail) tipParts.push(r.detail);
                return (
                  <tr key={`r-${idx}`} style={{ color: "rgba(31,58,82,0.45)" }}>
                    <td style={td}>{r.month ?? "—"}</td>
                    <td style={td}>—</td>
                    <td style={td}>—</td>
                    <td style={td}>—</td>
                    <td style={td}>—</td>
                    <td style={td}>
                      <span
                        title={tipParts.join(" — ")}
                        style={{
                          display: "inline-block",
                          background: badgeBg,
                          color: badgeFg,
                          padding: "2px 8px",
                          borderRadius: 12,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {badgeText}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={buttonRow}>
          <button
            type="button"
            style={secondaryBtn}
            onClick={() => setState({ mode: "paste", raw: s.raw })}
          >
            Cancel
          </button>
          <button
            type="button"
            style={canConfirm ? primaryBtn : { ...primaryBtn, ...disabledBtn }}
            disabled={!canConfirm}
            onClick={() => {
              void runCommit(s.raw, s.report);
            }}
          >
            {busy ? "Importing…" : "Confirm import"}
          </button>
        </div>
      </div>
    );
  }

  function renderDone(s: Extract<State, { mode: "done" }>): JSX.Element {
    return (
      <div>
        <h2 style={headingStyle}>Imported {s.committedCount} entries</h2>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: "0 0 16px 0" }}>
          Your tracker has been updated. You can close this window.
        </p>
        <div style={buttonRow}>
          <button type="button" style={primaryBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  function renderError(s: Extract<State, { mode: "error" }>): JSX.Element {
    const onlyClose = s.code === "import-already-used";
    return (
      <div>
        <h2 style={headingStyle}>Import couldn&apos;t continue</h2>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: "0 0 16px 0" }}>{s.message}</p>
        <div style={buttonRow}>
          {!onlyClose && (
            <button
              type="button"
              style={secondaryBtn}
              onClick={() => setState({ mode: "paste", raw: s.raw })}
            >
              Try again
            </button>
          )}
          <button type="button" style={primaryBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  let body: JSX.Element;
  switch (state.mode) {
    case "consent":
      body = renderConsent(state);
      break;
    case "paste":
      body = renderPaste(state, false);
      break;
    case "parsing":
      body = renderPaste({ mode: "paste", raw: state.raw }, true);
      break;
    case "preview":
      body = renderPreview(state, false);
      break;
    case "committing":
      body = renderPreview({ mode: "preview", raw: state.raw, report: state.report }, true);
      break;
    case "done":
      body = renderDone(state);
      break;
    case "error":
      body = renderError(state);
      break;
  }

  return (
    <div
      style={overlayStyle}
      onClick={() => {
        // Click outside closes only when not in flight
        if (state.mode !== "parsing" && state.mode !== "committing") onClose();
      }}
    >
      <div style={cardStyle} onClick={(e) => e.stopPropagation()}>
        {body}
      </div>
    </div>
  );
}
