import SectionLabel from "@/app/components/ui/SectionLabel";
import type { AboutCopy } from "../copy";

// Stroke icons for the six values, in the same order as the copy.
const ICONS = [
  <g key="accountability"><circle cx="10" cy="8" r="4" /><path d="M3 20c0-3.9 3.1-6.5 7-6.5 1.4 0 2.6.3 3.7.9M15 18l2 2 4-4" /></g>,
  <g key="honesty"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l5 5" /></g>,
  <path key="craft" d="M12 3l2.4 5 5.6.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.6-.8z" />,
  <g key="long-term"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></g>,
  <path key="grow" d="M12 21v-9M12 12c0-4 3-7 8-7 0 5-3 7-8 7zM12 15c0-3-2.5-5.5-7-5.5 0 4 2.5 5.5 7 5.5z" />,
  <g key="confidential"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></g>,
];

export default function Values({ label, values }: { label: string; values: AboutCopy["values"] }) {
  return (
    <>
      <SectionLabel className="ab-chapter">{label}</SectionLabel>
      <ul className="ab-values">
        {values.map((v, i) => (
          <li key={v.title} className="ab-value">
            <span className="ab-vicon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[i]}
              </svg>
            </span>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
