import { chapters as taChapters } from "@/app/modules/technical-analysis/chapters";
import { chapters as faChapters } from "@/app/modules/fundamental-analysis/chapters";
import { chapters as bgChapters } from "@/app/modules/budgeting-101/chapters";
import { chapters as pcChapters } from "@/app/modules/portfolio-construction/chapters";
import { chapters as txChapters } from "@/app/modules/taxation-for-investors/chapters";

// Chapter 2 — "Charts: The Foundation of Price Analysis"
const taCh = taChapters[1];
// Chapter 2 — "How Businesses Actually Make Money"
const faCh = faChapters[1];
// Chapter 3 — "The 50-30-20 Rule (and Beyond)"
const bgCh = bgChapters[2];
// Chapter 7 — "Asset Allocation: The Core Driver of Returns"
const pcCh = pcChapters[6];
// Chapter 8 — "Tax Loss Harvesting"
const txCh = txChapters[7];

const knDigits = ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"];
const toKnNumber = (n: number) =>
  String(n).split("").map((d) => knDigits[Number(d)]).join("");

// Re-numbers a reused chapter's "Chapter N: Title" / "ಅಧ್ಯಾಯ N: ಶೀರ್ಷಿಕೆ"
// prefix to its position within Module 0 (linear 1..5), without touching
// the source module's own chapters.tsx (its numbering stays untouched there).
function relabel(title: { en: string; kn: string }, position: number): { en: string; kn: string } {
  return {
    en: title.en.replace(/^Chapter\s+\d+:\s*/, `Chapter ${position}: `),
    kn: title.kn.replace(/^ಅಧ್ಯಾಯ\s+[೦-೯]+:\s*/, `ಅಧ್ಯಾಯ ${toKnNumber(position)}: `),
  };
}

export const chapters = [
  {
    title: relabel(taCh.title, 1),
    content: taCh.content,
  },
  {
    title: relabel(faCh.title, 2),
    content: faCh.content,
  },
  {
    title: relabel(bgCh.title, 3),
    content: bgCh.content,
  },
  {
    title: relabel(pcCh.title, 4),
    content: pcCh.content,
  },
  {
    title: relabel(txCh.title, 5),
    content: txCh.content,
  },
];
