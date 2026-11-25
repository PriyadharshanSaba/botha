import type { HomeCopy } from "./copy";
import { Decor, Eyebrow, Gold } from "../ui/parts";

// There is no websites page yet, so the button opens the website enquiry form.
export default function WebsitesBanner({ c, onStart }: { c: HomeCopy["websites"]; onStart: () => void }) {
  return (
    <section className="hm-banner hm-white hm-has-rise">
      <div className="hm-banner-in">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h3 className="hm-h2"><Gold line={c.title} /></h3>
        <p className="hm-body hm-narrow">{c.body}</p>
        <div className="ui-ctas">
          <button type="button" className="ui-btn" onClick={onStart}>{c.cta}</button>
        </div>
      </div>
      <div className="hm-rise" aria-hidden="true">
        <Decor src="/landing/web-rise.svg" />
      </div>
    </section>
  );
}
