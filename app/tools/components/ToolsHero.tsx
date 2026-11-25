import { Gold } from "@/app/components/ui/parts";
import JumpLink from "@/app/components/ui/JumpLink";
import type { ToolsPageCopy } from "../copy/toolsPage";

export default function ToolsHero({ c }: { c: ToolsPageCopy }) {
  return (
    <section className="tl-hero">
      <div className="tl-hero-in">
        <span className="ui-eyebrow">{c.eyebrow}</span>
        <h1 className="tl-h1"><Gold line={c.title} /></h1>
        <p className="tl-lead">{c.body}</p>
        <nav className="ui-jumps" aria-label={c.jumpLabel}>
          <JumpLink targetId="free">{c.jumpFree}</JumpLink>
          <JumpLink targetId="program">{c.jumpProgram}</JumpLink>
        </nav>
      </div>
    </section>
  );
}
