# Brand site spec v0.2

**Métier** organization site (repo: yogurt). Supersedes flyer-only v0.1.

Drafted 2026-10-27 from live Phases 1 to 4 and batch-default Phases 5 to 12.

Related: [02-decision-log.md](02-decision-log.md), [03-parking-lot.md](03-parking-lot.md), [04-interview.md](04-interview.md), [06-build-brief.md](06-build-brief.md).

---

## 1. Brand brief

| Item | Spec |
|---|---|
| Masthead | Métier |
| Person | Jigar Gor (teacher / founder on About and offering pages) |
| Offerings on v0 | Free Body (park class); Personal training (privates under training) |
| First Free Body class | Sunday, December 6, 2026, 9:00 AM, Tustin |
| Free Body format | 60 min vinyasa, all levels, donation-based |
| Visual system (v0) | Free Body tokens and type (`design/free-body/`) site-wide |
| Voice | Precision and restraint; no genre vocabulary; no em/en dashes; no wellness headlines |
| Scope | Yoga and strength work. Not therapy. (D006, D021 C) |
| Job of the site | Who you are, what you offer, how to start |
| One number | Monthly first steps: Free Body show-ups + PT/private inquiries |

**Home hero:** Movement practice. Clear scope. Show up.  
**Offerings subhead:** Park class. Training. No soft sell.  
**About scope:** Yoga and strength work. Not therapy.

## 2. Audience cards

### Primary

- **Who:** Orange County adults who want yoga and/or strength training with clear scope; distrust soft wellness marketing.
- **Fear:** Vague, culty, or a sales funnel. Or: not fit / flexible enough.
- **Proof:** Named offerings with facts; About scope line; Free Body notes; PT described as training, not transformation.

### Secondary

- **Who:** Referrals from regulars or PT clients.
- **Need:** Same pages; mailto contact. No referral UI on v0.

### Out of scope as marketing audience

Treatment-center clients; trauma-marketing frames (D006).

## 3. Offer sheet

| Offer | When | Price / path | Notes |
|---|---|---|---|
| Free Body | v0 | Donation-based; no ticket | Weather on its page |
| Personal training | v0 | Inquire; optional rate range | CPT |
| Yoga privates | v0 | One line under training | |
| Workshops | v1+ | TBD | |
| Consulting | Parked | | |
| Coaching (therapy-adjacent) | Never | | Guard |
| Writing | v2 | | |
| Sequencing app | Separate / later | | Métier product, not this repo |

## 4. Site map

### v0 (before Dec 6)

| Route | Job |
|---|---|
| `/` | Métier Home: who, offerings overview, CTAs to Free Body and Training |
| `/free-body` | Class facts, weather, notes, FIND |
| `/training` | What PT is, who for, how to inquire |
| `/about` | Person, scope line, mailto contact |
| `/404` | Dry; link home |

### v1

External booking/checkout and/or workshops when capacity exists.

### v2

Writing / sequences. App remains separate.

## 5. Requirements (MoSCoW)

| ID | Requirement | Priority | Acceptance |
|---|---|---|---|
| R01 | Home who + offerings | Must | Visitor names Métier and two offerings in 10 seconds |
| R02 | Free Body facts + weather | Must | On/cancelled/moved clear on `/free-body` |
| R03 | Training inquire | Must | mailto or stated contact; no fake checkout |
| R04 | About scope | Must | Non-therapy boundary visible |
| R05 | Nav + mobile | Must | All v0 routes on 390 px |
| R06 | Voice + contrast | Must | No em/en dashes; token contrast |
| R07 | Phone-edit weather | Should | Under 5 minutes via data file |
| R08 | Donation link | Could | Optional |
| R09 | Map embed | Could | Address text first |
| R10 | Booking, accounts, blog, app, chat, online waiver PII | Won't | Absent v0 |

## 6. ADRs

| ID | Decision |
|---|---|
| ADR001 | Astro static, TypeScript strict |
| ADR002 | Cloudflare Pages |
| ADR003 | Free Body tokens in `global.css`; Space Grotesk + IBM Plex Mono |
| ADR004 | Class/weather in `src/data/class.ts` |
| ADR005 | No form backend; mailto contact |
| ADR006 | No in-app payments; optional external donation link |
| ADR007 | No email list v0 |
| ADR008 | Optional Cloudflare Web Analytics only |
| ADR009 | No required flyer SVG on Home |
| ADR010 | Sequencing app out of repo |
| ADR011 | One maintainer; ~1 h/month |

## 7. Content inventory (v0)

| Content | Owner | Notes |
|---|---|---|
| Home hero + offerings blurbs | Jigar | Voice A/B |
| Free Body facts + weather | Jigar | `class.ts` |
| Training blurb + inquire | Jigar | No fake prices if unknown |
| About + scope | Jigar | Voice C; wholistic once if used |
| Instagram handle | Jigar | O002 |
| Park name | Jigar | O004 |
| Photos | Opportunistic; faces only with consent | |

## 8. Legal checklist

| Item | v0 posture |
|---|---|
| Scope statement | On About |
| Waiver | Paper at mat; counsel before online |
| Photo consent | Ask before faces |
| Donation language | Donation-based; no charity claim |
| Park permit | Before locking WHERE (P002) |

## 9. Metrics

| Signal | How | Cadence |
|---|---|---|
| First steps (primary) | Show-ups + PT/private inquiries | Monthly total |
| Cancels | Count | Monthly |
| IG bio taps | If available | Monthly |
| Review | 15 minutes | Monthly |

Success bar (D043): average at least 8 first steps/month over trailing 4 weeks by March 2027.

## 10. Versions and kill criteria

| Version | Done when |
|---|---|
| v0 | Public Métier URL with four pages; before Dec 6 |
| v1 | Booking/checkout or workshops live |
| v2 | Writing or sequences published |

Kill/pause (D034): three months under 4 first-steps/month after outreach, or hours budget blown 4 weeks running.

Hours: 4 h/week until Dec 6; 1 h/month after.

## 11. Risks

| Risk | Mitigation |
|---|---|
| Site still reads as a flyer | Home + Training + About required in v0 build |
| Clinical claim creep | D006 + voice C |
| Overcommitment | Thin sitemap; Won't list; kill criteria |
| Park / domain / handle empty | noindex until O001, O002, O004 clear |
| Métier mark undefined | Ship Free Body tokens; P005 for later identity work |

## 12. Open questions

O001 domain · O002 Instagram · O003 success bar revise · O004 park/permit · O005 donation/Venmo.
