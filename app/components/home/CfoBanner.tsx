import type { HomeCopy } from "./copy";
import { ArrowCta, Eyebrow, Gold } from "../ui/parts";
import SplitBanner from "./SplitBanner";

export default function CfoBanner({ c, learnMore, onStart }: { c: HomeCopy["cfo"]; learnMore: string; onStart: () => void }) {
  return (
    <SplitBanner images={["/landing/cfo-left.svg", "/landing/cfo-right.svg"]}>
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h3 className="hm-h2 hm-h2-split"><Gold line={c.title} /></h3>
      <p className="hm-body">{c.body}</p>
      <div className="ui-ctas">
        <button type="button" className="ui-btn" onClick={onStart}>{c.cta}</button>
        {/* <ArrowCta to={{ href: "/vcfo" }}>{learnMore}</ArrowCta> */}
      </div>
    </SplitBanner>
  );
}
