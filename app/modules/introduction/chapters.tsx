import { chapters as taChapters } from "@/app/modules/technical-analysis/chapters";
import { chapters as faChapters } from "@/app/modules/fundamental-analysis/chapters";
import { chapters as bgChapters } from "@/app/modules/budgeting-101/chapters";
import { chapters as pcChapters } from "@/app/modules/portfolio-construction/chapters";
import { chapters as txChapters } from "@/app/modules/taxation-for-investors/chapters";

// Chapter 2 — "Charts: The Foundation of Price Analysis" (Module 7: Technical Analysis)
const taCh = taChapters[1];
// Chapter 2 — "How Businesses Actually Make Money" (Module 6: Fundamental Analysis)
const faCh = faChapters[1];
// Chapter 3 — "The 50-30-20 Rule (and Beyond)" (Module 2: Budgeting 101)
const bgCh = bgChapters[2];
// Chapter 7 — "Asset Allocation: The Core Driver of Returns" (Module 8: Portfolio Construction)
const pcCh = pcChapters[6];
// Chapter 8 — "Tax Loss Harvesting" (Module 9: Taxation for Investors)
const txCh = txChapters[7];

const knDigits = ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"];
const toKnNumber = (n: number) =>
  String(n).split("").map((d) => knDigits[Number(d)]).join("");

// Re-labels a reused chapter's "Chapter N: Title" / "ಅಧ್ಯಾಯ N: ಶೀರ್ಷಿಕೆ" prefix
// to "Module X, Chapter Y: Title", pointing back at its source module/chapter
// number, without touching the source module's own chapters.tsx.
function relabel(
  title: { en: string; kn: string },
  moduleNumber: number,
  chapterNumber: number
): { en: string; kn: string } {
  return {
    en: title.en.replace(/^Chapter\s+\d+:\s*/, `Module ${moduleNumber}, Chapter ${chapterNumber}: `),
    kn: title.kn.replace(
      /^ಅಧ್ಯಾಯ\s+[೦-೯]+:\s*/,
      `ಮಾಡ್ಯೂಲ್ ${toKnNumber(moduleNumber)}, ಅಧ್ಯಾಯ ${toKnNumber(chapterNumber)}: `
    ),
  };
}

export const chapters = [
  {
    title: relabel(taCh.title, 7, 2),
    content: taCh.content,
  },
  {
    title: relabel(faCh.title, 6, 2),
    content: faCh.content,
  },
  {
    title: relabel(bgCh.title, 2, 3),
    content: bgCh.content,
  },
  {
    title: relabel(pcCh.title, 8, 7),
    content: pcCh.content,
  },
  {
    title: relabel(txCh.title, 9, 8),
    content: txCh.content,
  },
];
