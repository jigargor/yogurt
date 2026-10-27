# Decision log

Decisions made during brand site discovery. Update this file when a decision changes.

Live re-interview 2026-10-27: Phases 1 to 4 answered interactively; Phases 5 to 12 accepted as batch defaults per user ("just go ahead with defaults").

| ID | Phase | Decision | Choice | Why | How to change |
|---|---|---|---|---|---|
| D001 | 0 | First class date | Sunday, December 6, 2026 | Launch target | Holding page / Free Body data |
| D002 | 0 | Class cadence | Sundays, 9:00 AM, 60 min vinyasa, all levels, donation-based, park in Tustin | Stated facts | `src/data/class.ts` |
| D003 | 0 | Park name | Not chosen yet | Permit open | Replace `[Park name]` when locked |
| D004 | 0 | Hours budget (build) | 4 hours per week until Dec 6 | Phase 0 | Phase 12 |
| D005 | 0 | Hours budget (maintain) | 1 hour per month after launch | Phase 0 | Phase 12 |
| D006 | 0 | Scope baseline | Yoga teacher (RYT-200 in progress) and CPT. Not therapist, counselor, or treatment provider. RADT off-site. | Guard | Rewrite or park clinical claims |
| D007 | 0 | Pre-work artifacts | None written down at start | Phase 0 | Tick as they appear |
| D008 | seed | Visual system | Free Body tokens for v0 org site (paper, cell, line, ink, red; Space Grotesk + IBM Plex Mono) | Chosen art direction; Métier mark can come later (P005) | New brand sheet |
| D009 | seed | Voice rules | Precision and restraint; no genre vocabulary; no em/en dashes; no wellness headlines; brackets never ship | Hard rules | `.cursor/rules/voice-and-copy.mdc` |
| D010 | seed | Stack | Astro static | Confirmed Phase 9 | ADR001 |
| D011 | seed | Hosting | Cloudflare Pages | Confirmed Phase 9 | ADR002 |
| D012 | 2 | Domain | Undecided; example.com + noindex until registered | D038 | `astro.config.mjs` |
| D013 | 1 | Job of the site | Org site: who you are, what you offer, how to start. Free Body is one offering. | Live Phase 1 | Brand brief |
| D014 | 1 | One number | First steps per month: Free Body show-ups + PT/private inquiries | Live Phase 1 | Phase 11 |
| D015 | 1 | Count method | Show-ups: eye-count at start (rain-outs out). Inquiries: email/DM that names PT or privates. | Live Phase 1 | Written method only |
| D016 | 1 | Masthead | Métier = org; Free Body = offering; Jigar Gor = person | Live Phase 1 | Phase 2 |
| D017 | 1 | v0 shape | Home, Free Body page, About/scope, contact. Not a flyer page. | Live Phase 1 | Sitemap D027 |
| D018 | 2 | jigargor.com | Separate; no merge on v0 | Different job | Optional footer later |
| D019 | 3 | Six dimensions | Compass only; no six-box UI | Live Phase 3 | About |
| D020 | 3 | Spelling | wholistic once on About; not in hero | Live Phase 3 | About |
| D021 | 3 | Voice samples | Hero A / offerings B / About scope C (see interview) | Live Phase 3 | Page copy |
| D022 | 4 | Primary audience | OC adults; yoga and/or strength; clear scope; distrust soft wellness marketing | Live Phase 4 | Audience cards |
| D023 | 4 | Fear and proof | Fear: vague/culty/funnel or not fit enough. Proof: concrete offerings, scope line, Free Body notes, PT as training | Live Phase 4 | Copy |
| D024 | 4 | Secondary audience | Referrals; same pages; contact only | Live Phase 4 | n/a |
| D025 | 5 | Offer sheet | v0: Free Body (donation) + Personal training (inquire; rates range or inquire). Privates under training. No workshops/consulting/writing/app/coaching on v0. | Batch defaults | Spec offer table |
| D026 | 6 | Content loop | Free Body weekly sheets when generator exists; phone photos; site footer + Free Body FIND to IG; bio to Métier Home; weather on Free Body page | Batch defaults | P001, O002 |
| D027 | 7 | Sitemap v0 | `/` Home, `/free-body`, `/training`, `/about` (scope + contact mailto), `/404` | Batch defaults; org not flyer | Add/remove under `src/pages/` |
| D028 | 8 | MoSCoW | Must: Home who/offerings, Free Body facts+weather, Training inquire, About scope, contact, nav, contrast/voice. Should: phone-edit weather. Could: donation link, map. Won't: booking engine, accounts, blog, app, chat, online waiver PII | Batch defaults | Spec R-table |
| D029 | 9 | Stack/host | Astro static + Cloudflare Pages | Batch defaults | ADRs |
| D030 | 9 | ADR set | ADR001 to ADR011 in spec v0.2 | Batch defaults | Spec |
| D031 | 10 | Legal posture | Scope on About; paper waiver; ask before faces; donation language without charity claim | Batch defaults | P007 |
| D032 | 11 | Measurement | Log show-ups and inquiries; monthly 15 min review; cancels + IG taps as supporting | Matches D014 | Spec metrics |
| D033 | 12 | Versions | v0 org site before Dec 6; v1 booking/checkout or workshops when capacity; v2 writing/sequences | Batch defaults | Spec |
| D034 | 12 | Kill / pause | Three months under 4 first-steps/month after outreach, or hours budget blown 4 weeks running | Batch defaults (org metric) | Overturn if needed |
| D035 | 1 | Site type | Organization site, not flyer-as-website | Course correction | Spec |
| D036 | 2 | v0 offerings named | Free Body + Personal training; other class names off until run | Live Phase 2 | Offer sheet |
| D037 | 2 | Person vs org | Masthead Métier; Jigar on About and class/training pages | Live Phase 2 | About |
| D038 | 2 | Domain | Undecided | Live Phase 2 | O001 |
| D039 | 2 | Instagram | One Métier handle | Live Phase 2 | O002 |
| D040 | 3 | Word "wellness" | Not a headline/promise | Live Phase 3 | Voice rule |
| D041 | 5 | PT on v0 | Described + inquire path; no self-serve checkout | Batch Phase 5 | `/training` |
| D042 | 7 | Contact path | `mailto:` on About (and footer). No form backend v0 | Batch Phase 7/9 | ADR005 |
| D043 | 11 | Success bar | Average at least 8 first steps per month over a trailing 4 weeks by March 2027 | Batch Phase 11 | O003 if revise |
