import { addMonth, monthGrid, weekdayOf, ymd } from "@/app/lib/meetings/calendar";
import { ChevronRightIcon } from "@/app/components/LineIcons";
import type { Lang } from "@/app/context/LanguageContext";
import type { MeetCopy } from "../copy";

// Month calendar. Days before today, past the booking window, or on a closed weekday are disabled.
export default function DayPicker({
  c,
  lang,
  view,
  today,
  lastDay,
  openWeekdays,
  selected,
  onSelect,
  onViewChange,
}: {
  c: MeetCopy;
  lang: Lang;
  view: { year: number; month: number };
  today: string;
  lastDay: string;
  openWeekdays: number[];
  selected: string | null;
  onSelect: (date: string) => void;
  onViewChange: (view: { year: number; month: number }) => void;
}) {
  const { blanks, days } = monthGrid(view.year, view.month);
  const heading = new Date(Date.UTC(view.year, view.month - 1, 1)).toLocaleDateString(lang === "kn" ? "kn-IN" : "en-IN", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const todayView = { year: Number(today.slice(0, 4)), month: Number(today.slice(5, 7)) };
  const lastView = { year: Number(lastDay.slice(0, 4)), month: Number(lastDay.slice(5, 7)) };
  const atStart = view.year === todayView.year && view.month === todayView.month;
  const atEnd = view.year === lastView.year && view.month === lastView.month;

  return (
    <div>
      <div className="meet-cal-head">
        <h3 aria-live="polite">{heading}</h3>
        <div className="meet-cal-nav">
          <button type="button" aria-label={c.prevMonth} disabled={atStart} onClick={() => onViewChange(addMonth(view.year, view.month, -1))}>
            <span className="meet-flip"><ChevronRightIcon /></span>
          </button>
          <button type="button" aria-label={c.nextMonth} disabled={atEnd} onClick={() => onViewChange(addMonth(view.year, view.month, 1))}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <fieldset className="meet-fieldset">
        <legend className="meet-sr-only">{c.dayLegend}</legend>
        <div className="meet-cal">
          {c.weekdays.map((d) => <div key={d} className="meet-dow">{d}</div>)}
          {Array.from({ length: blanks }, (_, i) => <span key={`b${i}`} className="meet-day blank" aria-hidden="true" />)}
          {Array.from({ length: days }, (_, i) => {
            const date = ymd(view.year, view.month, i + 1);
            const off = date < today || date > lastDay || !openWeekdays.includes(weekdayOf(date));
            return (
              <label key={date} className={off ? "meet-day off" : "meet-day"}>
                <input type="radio" name="day" value={date} disabled={off} checked={selected === date} onChange={() => onSelect(date)} />
                <span>{i + 1}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
