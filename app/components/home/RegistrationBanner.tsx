import { CheckIcon } from "../LineIcons";
import type { HomeCopy } from "./copy";
import { ArrowCta, Decor, Eyebrow, Gold } from "../ui/parts";

export default function RegistrationBanner({ c, learnMore, onStart }: { c: HomeCopy["registration"]; learnMore: string; onStart: () => void }) {
  return (
    <section className="hm-banner hm-cream hm-has-doc">
      <Decor src="/landing/gst-left.svg" className="hm-doc hm-doc-l" />
      <Decor src="/landing/gst-right.svg" className="hm-doc hm-doc-r" />
      <div className="hm-banner-in">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h3 className="hm-h2"><Gold line={c.title} /></h3>
        <p className="hm-sub"><Gold line={c.sub} /></p>
        <p className="hm-body">{c.body}</p>
        <ul className="hm-incl">
          {c.items.map((item) => (
            <li key={item}><CheckIcon />{item}</li>
          ))}
        </ul>
        <div className="ui-ctas">
          <button type="button" className="ui-btn" onClick={onStart}>{c.cta}</button>
          {/* <ArrowCta to={{ section: "talk" }}>{learnMore}</ArrowCta> */}
        </div>
        <div className="hm-doc-m" aria-hidden="true">
          <Decor src="/landing/gst-left.svg" />
          <Decor src="/landing/gst-right.svg" />
        </div>
      </div>
    </section>
  );
}
