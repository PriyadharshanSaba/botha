import SectionLabel from "@/app/components/ui/SectionLabel";
import { Gold } from "@/app/components/ui/parts";
import SectionLink from "@/app/components/SectionLink";
import { ArrowRightIcon } from "@/app/components/LineIcons";
import type { HomeSection } from "@/app/lib/sections";
import type { AboutCopy } from "../copy";

function Door({ door, section, tone }: { door: AboutCopy["business"]; section: HomeSection; tone: "cream" | "white" }) {
  return (
    <SectionLink section={section} className={`ab-door ab-door-${tone}`}>
      <span className="ab-door-top">
        <span className="ui-eyebrow">{door.eyebrow}</span>
        <span className="ab-door-arrow" aria-hidden="true"><ArrowRightIcon size={18} strokeWidth={2} /></span>
      </span>
      <h3 className="ab-door-title"><Gold line={door.title} /></h3>
      <span className="ab-tags">
        {door.tags.map((tag) => (
          <span key={tag} className="ab-tag"><i aria-hidden="true" />{tag}</span>
        ))}
      </span>
    </SectionLink>
  );
}

// Two doors into the home page's business and individuals sections.
export default function WhatWeDo({ c }: { c: AboutCopy }) {
  return (
    <>
      <SectionLabel className="ab-chapter">{c.whatWeDo}</SectionLabel>
      <div className="ab-doors">
        <Door door={c.business} section="business" tone="cream" />
        <Door door={c.individuals} section="individuals" tone="white" />
      </div>
    </>
  );
}
