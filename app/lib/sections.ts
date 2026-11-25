// Home-page sections that the header, hero pills and footer jump to.
export const HOME_SECTIONS = ["business", "individuals", "talk"] as const;
export type HomeSection = (typeof HOME_SECTIONS)[number];

export function sectionHref(section: HomeSection): string {
  return `/#${section}`;
}

export function isHomeSection(hash: string): hash is HomeSection {
  return (HOME_SECTIONS as readonly string[]).includes(hash);
}

export function scrollBehaviorFor(prefersReducedMotion: boolean): ScrollBehavior {
  return prefersReducedMotion ? "auto" : "smooth";
}

// Scrolls to an element on the current page and records it in the URL hash.
// Returns false when the element is not rendered, so callers can fall back to navigation.
export function scrollToId(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: scrollBehaviorFor(reduced), block: "start" });
  window.history.replaceState(null, "", `#${id}`);
  return true;
}

export function scrollToSection(section: HomeSection): boolean {
  return scrollToId(section);
}
