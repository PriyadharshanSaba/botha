import type { HomeCopy } from "./copy";
import { ArrowCta, Eyebrow, Gold, PrimaryCta } from "../ui/parts";
import SplitBanner from "./SplitBanner";

export default function ProgramBanner({ c }: { c: HomeCopy["program"] }) {
  return (
    <SplitBanner images={["/landing/pfp-left.svg", "/landing/pfp-right.svg"]} reverse>
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h3 className="hm-h2 hm-h2-split"><Gold line={c.title} /></h3>
      <p className="hm-body">{c.body}</p>
      <div className="ui-ctas">
        <PrimaryCta to={{ href: "/signin?mode=signup" }}>{c.cta}</PrimaryCta>
        <ArrowCta to={{ href: "/modules" }}>{c.secondary}</ArrowCta>
      </div>
    </SplitBanner>
  );
}
