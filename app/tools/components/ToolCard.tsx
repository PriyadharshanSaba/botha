import Link from "next/link";
import { ArrowDownIcon, ArrowRightIcon, LockIcon } from "@/app/components/LineIcons";
import { Decor } from "@/app/components/ui/parts";

export type ToolCardAction =
  | { kind: "open"; label: string; onOpen: () => void }
  | { kind: "locked"; href: string; label: string; lockLabel: string }
  | { kind: "download"; href: string; filename: string; label: string };

// One tool on /tools. The footer control stretches over the whole card, so the card is a
// single target with a clear accessible name ("Open calculator: SIP Calculator").
export default function ToolCard({
  num,
  name,
  desc,
  tags,
  freeLabel,
  image,
  tilt,
  action,
}: {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  freeLabel?: string;
  image: string;
  tilt: "l" | "r";
  action: ToolCardAction;
}) {
  const label = (
    <>
      {action.label}
      <span className="tl-sr-only">: {name}</span>
    </>
  );

  return (
    <article className="tl-tool">
      <div className="tl-tool-art" aria-hidden="true">
        <Decor src={image} className={tilt === "l" ? "tl-tilt-l" : "tl-tilt-r"} />
      </div>
      <div className="tl-tool-body">
        <span className="tl-tool-num">{num}</span>
        <h3 className="tl-tool-name">{name}</h3>
        <p className="tl-tool-desc">{desc}</p>
        <ul className="tl-tags">
          {freeLabel && <li className="tl-tag is-free">{freeLabel}</li>}
          {tags.map((tag) => <li key={tag} className="tl-tag">{tag}</li>)}
        </ul>
        <div className="tl-tool-foot">
          {action.kind === "open" && (
            <>
              <button type="button" className="tl-tool-cta tl-stretch" onClick={action.onOpen}>{label}</button>
              <span className="tl-arrow" aria-hidden="true"><ArrowRightIcon size={16} strokeWidth={2} /></span>
            </>
          )}
          {action.kind === "download" && (
            <>
              <a href={action.href} download={action.filename} className="tl-tool-cta tl-stretch">{label}</a>
              <span className="tl-arrow" aria-hidden="true"><ArrowDownIcon /></span>
            </>
          )}
          {action.kind === "locked" && (
            <>
              <span className="tl-lock"><LockIcon />{action.lockLabel}</span>
              <Link href={action.href} className="tl-tool-cta tl-tool-cta-sm tl-stretch">{label}</Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
