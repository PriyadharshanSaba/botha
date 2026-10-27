import type { ReactNode } from "react";
import { Decor } from "../ui/parts";

// Text on one side, an overlapping pair of illustrations on the other. Stacks text-first on phones.
export default function SplitBanner({
  images,
  reverse = false,
  children,
}: {
  images: [string, string];
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="hm-banner hm-cream">
      <div className={reverse ? "hm-split hm-rev" : "hm-split"}>
        <div className="hm-banner-in">{children}</div>
        <div className="hm-cluster" aria-hidden="true">
          <Decor src={images[0]} className="hm-c1" />
          <Decor src={images[1]} className="hm-c2" />
        </div>
      </div>
    </section>
  );
}
