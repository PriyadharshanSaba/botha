import type { Lang } from "@/app/context/LanguageContext";
import { headline as h, type Headline } from "@/app/components/ui/headline";

// Topic values stay English: the chosen one is put at the top of the booking note the team receives.
export const TOPIC_VALUES = ["Company registration & GST", "Virtual CFO", "Website & hosting", "Personal Finance Program", "Something else"];

export type MeetCopy = {
  eyebrow: string;
  title: Headline;
  subtitle: string;
  formLabel: string;
  stepTopic: string;
  topicLegend: string;
  topics: string[];
  metaLength: string;
  metaVideo: string;
  metaTz: string;
  stepDay: string;
  dayLegend: string;
  prevMonth: string;
  nextMonth: string;
  weekdays: string[];
  stepTime: string;
  timeLegend: string;
  noSlots: string;
  loading: string;
  stepDetails: string;
  name: string;
  email: string;
  phone: string;
  note: string;
  optional: string;
  pickTime: string;
  duration: string;
  booking: string;
  confirm: string;
  promises: string[];
  bookedTitle: string;
  bookedBody: (email: string) => string;
  genericError: string;
};

const en: MeetCopy = {
  eyebrow: "Book a call",
  title: h("Pick a time. ", "We'll take it from here."),
  subtitle: "A free 30-minute call with a Bodha partner. No pitch, no obligation.",
  formLabel: "Book a call",
  stepTopic: "What's it about?",
  topicLegend: "Topic of the call",
  topics: TOPIC_VALUES,
  metaLength: "30 minutes, free",
  metaVideo: "Video call, link sent by email",
  metaTz: "Times in India (IST)",
  stepDay: "Choose a day",
  dayLegend: "Day",
  prevMonth: "Previous month",
  nextMonth: "Next month",
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  stepTime: "Choose a time",
  timeLegend: "Time",
  noSlots: "No open times on this day. Try another day.",
  loading: "Loading times…",
  stepDetails: "Your details",
  name: "Your name",
  email: "Email",
  phone: "Phone",
  note: "Anything we should know?",
  optional: "optional",
  pickTime: "Pick a time to continue",
  duration: "30 min",
  booking: "Booking…",
  confirm: "Confirm booking",
  promises: ["Confirmation by email, with a calendar invite", "Reschedule any time", "Your details stay private"],
  bookedTitle: "You're booked.",
  bookedBody: (email) => `A confirmation with a calendar invite is on its way to ${email}.`,
  genericError: "Something went wrong. Please try again.",
};

// Kannada drafts: pending review by a native speaker.
const kn: MeetCopy = {
  eyebrow: "ಕರೆ ಬುಕ್ ಮಾಡಿ",
  title: h("ಸಮಯ ಆರಿಸಿ. ", "ಮುಂದಿನದನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ."),
  subtitle: "ಬೋಧ ಪಾಲುದಾರರೊಂದಿಗೆ 30 ನಿಮಿಷದ ಉಚಿತ ಕರೆ. ಯಾವುದೇ ಒತ್ತಡವಿಲ್ಲ, ಬದ್ಧತೆಯಿಲ್ಲ.",
  formLabel: "ಕರೆ ಬುಕ್ ಮಾಡಿ",
  stepTopic: "ಯಾವುದರ ಬಗ್ಗೆ?",
  topicLegend: "ಕರೆಯ ವಿಷಯ",
  topics: ["ಕಂಪನಿ ನೋಂದಣಿ ಮತ್ತು GST", "ವರ್ಚುವಲ್ CFO", "ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಹೋಸ್ಟಿಂಗ್", "ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಕಾರ್ಯಕ್ರಮ", "ಬೇರೆ ಏನಾದರೂ"],
  metaLength: "30 ನಿಮಿಷ, ಉಚಿತ",
  metaVideo: "ವೀಡಿಯೊ ಕರೆ, ಲಿಂಕ್ ಇಮೇಲ್‌ನಲ್ಲಿ ಬರುತ್ತದೆ",
  metaTz: "ಸಮಯ ಭಾರತೀಯ ಕಾಲಮಾನದಲ್ಲಿ (IST)",
  stepDay: "ದಿನ ಆರಿಸಿ",
  dayLegend: "ದಿನ",
  prevMonth: "ಹಿಂದಿನ ತಿಂಗಳು",
  nextMonth: "ಮುಂದಿನ ತಿಂಗಳು",
  weekdays: ["ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ", "ಭಾನು"],
  stepTime: "ಸಮಯ ಆರಿಸಿ",
  timeLegend: "ಸಮಯ",
  noSlots: "ಈ ದಿನ ಯಾವುದೇ ಸಮಯ ಲಭ್ಯವಿಲ್ಲ. ಬೇರೆ ದಿನ ಪ್ರಯತ್ನಿಸಿ.",
  loading: "ಸಮಯಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ…",
  stepDetails: "ನಿಮ್ಮ ವಿವರಗಳು",
  name: "ನಿಮ್ಮ ಹೆಸರು",
  email: "ಇಮೇಲ್",
  phone: "ಫೋನ್",
  note: "ನಾವು ತಿಳಿಯಬೇಕಾದ ಇನ್ನೇನಾದರೂ?",
  optional: "ಐಚ್ಛಿಕ",
  pickTime: "ಮುಂದುವರಿಯಲು ಸಮಯ ಆರಿಸಿ",
  duration: "30 ನಿಮಿಷ",
  booking: "ಬುಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ…",
  confirm: "ಬುಕಿಂಗ್ ಖಚಿತಪಡಿಸಿ",
  promises: ["ಕ್ಯಾಲೆಂಡರ್ ಆಹ್ವಾನದೊಂದಿಗೆ ಇಮೇಲ್ ದೃಢೀಕರಣ", "ಯಾವಾಗ ಬೇಕಾದರೂ ಮರುನಿಗದಿ ಮಾಡಿ", "ನಿಮ್ಮ ವಿವರಗಳು ಖಾಸಗಿಯಾಗಿರುತ್ತವೆ"],
  bookedTitle: "ನಿಮ್ಮ ಕರೆ ಬುಕ್ ಆಗಿದೆ.",
  bookedBody: (email) => `ಕ್ಯಾಲೆಂಡರ್ ಆಹ್ವಾನದೊಂದಿಗೆ ದೃಢೀಕರಣವನ್ನು ${email} ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ.`,
  genericError: "ಏನೋ ತಪ್ಪಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
};

export const MEET_COPY: Record<Lang, MeetCopy> = { en, kn };
