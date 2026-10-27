import { ArrowCta, PrimaryCta } from "@/app/components/ui/parts";
import SectionLabel from "@/app/components/ui/SectionLabel";
import type { MemberToolId, ToolsPageCopy } from "../copy/toolsPage";
import ToolCard, { type ToolCardAction } from "./ToolCard";
import { MF_COMPARE_DOWNLOAD, MODULES_HREF, PLANS_HREF, PROGRAM_HREF, STOCK_VALUATION_DOWNLOAD } from "./links";

const MEMBER_TOOLS: { id: MemberToolId; num: string; image: string; tilt: "l" | "r" }[] = [
  { id: "tracker", num: "07", image: "/landing/tw-networth.svg", tilt: "l" },
  { id: "mfcompare", num: "08", image: "/landing/tw-mfcompare.svg", tilt: "r" },
  { id: "stockval", num: "09", image: "/landing/tw-stockval.svg", tilt: "l" },
];

// Cream band with the three member tools. Locked cards send visitors to /plans;
// subscribers open the tracker or download the Excel toolkits.
export default function ProgramTools({
  c,
  subscribed,
  onOpenTracker,
}: {
  c: ToolsPageCopy;
  subscribed: boolean;
  onOpenTracker: () => void;
}) {
  function actionFor(id: MemberToolId): ToolCardAction {
    if (!subscribed) return { kind: "locked", href: PLANS_HREF, label: c.getAccess, lockLabel: c.includedWithProgram };
    if (id === "tracker") return { kind: "open", label: c.openTracker, onOpen: onOpenTracker };
    const file = id === "mfcompare" ? MF_COMPARE_DOWNLOAD : STOCK_VALUATION_DOWNLOAD;
    return { kind: "download", href: file.href, filename: file.filename, label: c.download };
  }

  return (
    <div className="tl-band">
      <SectionLabel id="program">{c.programLabel}</SectionLabel>
      <p className="tl-band-intro">{c.programIntro}</p>
      <div className="tl-grid">
        {MEMBER_TOOLS.map((tool) => (
          <ToolCard
            key={tool.id}
            num={tool.num}
            {...c.memberTools[tool.id]}
            image={tool.image}
            tilt={tool.tilt}
            action={actionFor(tool.id)}
          />
        ))}
      </div>
      <div className="ui-ctas tl-band-ctas">
        <PrimaryCta to={{ href: PROGRAM_HREF }}>{c.seeProgram}</PrimaryCta>
        <ArrowCta to={{ href: MODULES_HREF }}>{c.modules}</ArrowCta>
      </div>
    </div>
  );
}
