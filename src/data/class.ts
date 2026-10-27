/**
 * Free Body class facts and weather call (`/free-body`).
 * Replace park name before public launch (D003 / O004).
 * FIND handle comes from site.instagram when set.
 */

export interface WeatherCall {
  /** on | cancelled | moved */
  status: "on" | "cancelled" | "moved";
  /** Short plain sentence. No em dashes. */
  note: string;
  /** ISO date of the Sunday this call applies to */
  forDate: string;
}

export interface ClassFacts {
  kicker: string;
  title: string;
  when: string;
  where: string;
  cost: string;
  level: string;
  bring: string;
  notes: string[];
  voice: string;
  revision: string;
  weather: WeatherCall;
  dwg: string;
  sheet: string;
  scale: string;
}

export const classFacts: ClassFacts = {
  kicker: "Yoga in the park",
  title: "Free Body",
  when: "Sundays · 9:00 AM",
  where: "Park TBD, Tustin",
  cost: "Donation-based",
  level: "All levels",
  bring: "A mat",
  notes: [
    "60 min vinyasa.",
    "No experience needed.",
    "No one turned away.",
    "Tolerances: generous.",
  ],
  voice: "Sunday morning. Sixty minutes. Bring a mat.",
  revision: "REV 0: FIRST ISSUE. SUNDAY, DECEMBER 6, 2026.",
  weather: {
    status: "on",
    note: "On as scheduled. Check back Saturday night if the sky turns.",
    forDate: "2026-12-06",
  },
  dwg: "DWG 001 REV 0",
  sheet: "SHEET 00 OF 52",
  scale: "SCALE NTS",
};
