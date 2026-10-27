# Decision log

Decisions made during brand site discovery. Update this file when a decision changes.

Rows marked PROVISIONAL need voice confirm (see open questions in [04-interview.md](04-interview.md)).

| ID | Phase | Decision | Choice | Why | How to change |
|---|---|---|---|---|---|
| D001 | 0 | First class date | Sunday, December 6, 2026 | Launch target from discovery pre-work | Edit holding page revision line and this row |
| D002 | 0 | Class cadence | Sundays, 9:00 AM, 60 min vinyasa, all levels, donation-based, park in Tustin | Stated class facts | Edit `src/data/class.ts`; park name still bracketed |
| D003 | 0 | Park name | Not chosen yet | Permit and location open | Replace `[Park name]` site-wide when locked |
| D004 | 0 | Hours budget (build) | 4 hours per week until Dec 6 | Phase 0 default | Revise in Phase 12 if capacity changes |
| D005 | 0 | Hours budget (maintain) | 1 hour per month after launch | Phase 0 default | Revise in Phase 12 |
| D006 | 0 | Scope baseline | Yoga teacher (RYT-200 in progress) and certified personal trainer. Not a therapist, counselor, or treatment provider. RADT work stays at the treatment center and off the site. | Scope-of-practice guard | Any clinical-sounding claim goes to parking lot or rewrite |
| D007 | 0 | Pre-work artifacts | None written down yet; draft inside the interview | Phase 0 default | Tick items as they appear |
| D008 | seed | Visual system | Free Body tokens (paper, cell, line, ink, red; Space Grotesk + IBM Plex Mono) | Chosen art direction | Only with a new brand sheet decision |
| D009 | seed | Voice rules | Precision and restraint; no genre vocabulary; no em or en dashes; brackets never ship | Discovery hard rules | `.cursor/rules/voice-and-copy.mdc` |
| D010 | seed | Stack default | Astro static (confirmed Phase 9 as D029) | Matches jigargor.com | ADR001 |
| D011 | seed | Hosting default | Cloudflare Pages (confirmed Phase 9 as D029) | Matches jigargor.com | ADR002 |
| D012 | seed | Domain | Bracketed placeholder until chosen | Name open | Set `site` in `astro.config.mjs` |
| D013 | 1 | Job of the site | Facts, weather call, and how to find the class for a stranger who will not dig through Stories | Instagram alone is not a schedule of record | Edit brand brief |
| D014 | 1 | One number | Average Sunday headcount (mats), rain-outs excluded | Observable weekly | Phase 11 logging |
| D015 | 1 | Count method | Instructor eye-count at class start | Simple, honest | Change only with a written method |
| D016 | 2 | Brand architecture (PROVISIONAL) | Free Body = park class public face; Jigar Gor = person; Métier = umbrella for later | One masthead name | Overturn in voice sitting |
| D017 | 2 | v0 products | Park class only | Restraint | Add products only with offer sheet change |
| D018 | 2 | jigargor.com | Separate property; no merge on v0 | Different job | Optional footer link later |
| D019 | 3 | Six dimensions | Compass for tone/sequencing; not a six-box UI on v0 | Avoid framework theater | About copy later |
| D020 | 3 | Spelling | wholistic when the word appears; not required on holding page | Intentional spelling | Define once if used |
| D021 | 3 | Voice samples | A primary: "Sunday morning. Sixty minutes. Bring a mat." B aside: "The forces balance. Tolerances: generous." C facts echo | Restraint tests | Swap hero line in `index.astro` |
| D022 | 4 | Primary audience (PROVISIONAL) | Nearby adults who want outdoor practice without studio polish | Matches offer | Audience cards in spec |
| D023 | 4 | Fear and proof | Fear: least experienced / soft upsell. Proof: all levels, donation-based, notes 2 and 3 | Title block already carries this | Keep NOTES honest |
| D024 | 4 | Secondary audience | Friends of regulars; same facts block | No second funnel on v0 | n/a |
| D025 | 5 | Offer sheet | Now: park class. v1: PT and privates. v2: writing and sequences. Never on site as therapy: coaching-as-treatment. App separate. | Scope and hours | Update offer table in spec |
| D026 | 6 | Content loop | Weekly Free Body sheet when generator lands; FIND to Instagram; bio back to site when URL exists; weather on site | One loop | P001, P003 |
| D027 | 7 | Sitemap | v0: `/`, `/404`. v1: training page. v2: writing. Waiver paper-first for v0 | Thin v0 | Add pages under `src/pages/` |
| D028 | 8 | MoSCoW | Must: facts, weather, FIND, contrast, voice. Should: phone-edit weather. Could: donation link, map. Won't: accounts, booking engine, blog, app | Hours budget | Requirements table in spec |
| D029 | 9 | Stack and host confirmed | Astro static + Cloudflare Pages | Same as seed | ADRs |
| D030 | 9 | ADR set | See spec ADR001 to ADR011 | Phase 9 | Edit ADR section |
| D031 | 10 | Legal posture | Short scope line; paper waiver; ask before faces; donation language without charity claim | Guard + simplicity | P007 |
| D032 | 11 | Measurement | Notebook headcount; monthly 15 min review; supporting: cancel count, IG taps | Matches one number | Spec metrics |
| D033 | 12 | Versions | v0 before Dec 6; v1 on PT demand/capacity; v2 on writing/sequences | Phased | Spec versions |
| D034 | 12 | Kill / pause (PROVISIONAL) | Three months under 2 avg mats after outreach, or hours budget blown 4 weeks running | Honest stop line | Voice confirm O003/O006 |
