import type { HomeCopy } from "./copy";
import { Eyebrow, Gold } from "../ui/parts";
import SplitBanner from "./SplitBanner";

export default function CfoBanner({ c, onStart }: { c: HomeCopy["cfo"]; onStart: () => void }) {
  return (
    <SplitBanner images={["/landing/cfo-left.svg", "/landing/cfo-right.svg"]}>
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h3 className="hm-h2 hm-h2-split"><Gold line={c.title} /></h3>
      <p className="hm-body">{c.body}</p>
      <div className="ui-ctas">
        <button type="button" className="ui-btn" onClick={onStart}>{c.cta}</button>
      </div>
    </SplitBanner>
  );
}
