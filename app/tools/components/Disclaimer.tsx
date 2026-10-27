import { InfoIcon } from "@/app/components/LineIcons";
import type { ToolsPageCopy } from "../copy/toolsPage";

export default function Disclaimer({ c }: { c: ToolsPageCopy }) {
  return (
    <section className="tl-disclaimer">
      <div className="tl-disclaimer-in">
        <InfoIcon />
        <p><strong>{c.disclaimerLead}</strong> {c.disclaimer}</p>
      </div>
    </section>
  );
}
