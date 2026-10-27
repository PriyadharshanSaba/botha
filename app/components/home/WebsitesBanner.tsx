import type { HomeCopy } from "./copy";
import { ArrowCta, Decor, Eyebrow, Gold } from "../ui/parts";

// There is no websites page yet: the button opens the website form, "Learn more" goes to "Talk to us".
export default function WebsitesBanner({ c, learnMore, onStart }: { c: HomeCopy["websites"]; learnMore: string; onStart: () => void }) {
  return (
    <section className="hm-banner hm-white hm-has-rise">
      <div className="hm-banner-in">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h3 className="hm-h2"><Gold line={c.title} /></h3>
        <p className="hm-body hm-narrow">{c.body}</p>
        <div className="ui-ctas">
          <button type="button" className="ui-btn" onClick={onStart}>{c.cta}</button>
          {/* <ArrowCta to={{ section: "talk" }}>{learnMore}</ArrowCta> */}
        </div>
      </div>
      <div className="hm-rise" aria-hidden="true">
        <Decor src="/landing/web-rise.svg" />
      </div>
    </section>
  );
}
