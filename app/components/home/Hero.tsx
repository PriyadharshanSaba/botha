import SectionLink from "../SectionLink";
import { ArrowRightIcon, BriefcaseIcon, PersonIcon } from "../LineIcons";
import type { HomeCopy } from "./copy";
import { Gold } from "../ui/parts";

export default function Hero({ c }: { c: HomeCopy["hero"] }) {
  return (
    <section className="hm-hero">
      <div className="hm-hero-in">
        <h1 className="hm-h1">
          <Gold line={c.lines[0]} />
          <br />
          <Gold line={c.lines[1]} />
        </h1>
        <p className="hm-lead">{c.body}</p>
        <nav className="ui-jumps" aria-label={c.jumpLabel}>
          <SectionLink section="business" className="ui-jump">
            <BriefcaseIcon />
            {c.business}
            <ArrowRightIcon />
          </SectionLink>
          <SectionLink section="individuals" className="ui-jump">
            <PersonIcon />
            {c.individuals}
            <ArrowRightIcon />
          </SectionLink>
        </nav>
      </div>
    </section>
  );
}
