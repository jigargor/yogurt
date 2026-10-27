# Brand site spec v0.1

Free Body / yogurt. Drafted 2026-10-27 from discovery phases 0 to 12.

**Status:** Working draft. Many rows are PROVISIONAL (see [04-interview.md](04-interview.md) open questions). Voice confirm before treating this as locked.

Related: [02-decision-log.md](02-decision-log.md), [03-parking-lot.md](03-parking-lot.md), [06-build-brief.md](06-build-brief.md).

---

## 1. Brand brief

| Item | Spec |
|---|---|
| Public name (park class) | Free Body |
| Person | Jigar Gor |
| Umbrella (later) | Métier |
| Offer on v0 | Sunday park yoga, Tustin |
| First class | Sunday, December 6, 2026, 9:00 AM |
| Format | 60 min vinyasa, all levels, donation-based |
| Visual system | Free Body tokens and type (see `design/free-body/`) |
| Voice | Precision and restraint; no genre vocabulary; no em or en dashes |
| Scope | Yoga teacher (RYT-200 in progress) and CPT. Not therapist, counselor, or treatment provider. RADT work off-site. |
| Job of the site | Facts, weather call, and how to find the class for a stranger |
| One number | Average Sunday headcount (mats), rain-outs excluded |

Hero voice (D021): "Sunday morning. Sixty minutes. Bring a mat."

## 2. Audience cards

### Primary (PROVISIONAL)

- **Who:** Nearby adults who want outdoor practice without studio polish.
- **Fear:** I will be the least experienced person / I will be sold something.
- **Proof on page:** All levels; donation-based; NOTES 2 and 3 ("No experience needed." / "No one turned away.").

### Secondary (PROVISIONAL)

- **Who:** Friends of regulars.
- **Need:** Same title block. No second funnel on v0.

### Out of scope as a marketing audience

Treatment-center clients and trauma-marketing frames. That work stays at the center (D006).

## 3. Offer sheet

| Offer | When | Price / path | Notes |
|---|---|---|---|
| Park class (Free Body) | Now / v0 | Donation-based; no ticket required | Core |
| Personal training | v1 | TBD | CPT |
| Yoga privates | v1 | TBD | |
| Workshops | Later | TBD | |
| Consulting | Parked | | Scope unclear |
| Coaching as treatment | Never on this site | | Guard |
| Writing | v2 | | |
| Sequencing app | v2+ / separate | | Métier; ADR010 |

## 4. Site map

### v0 (before Dec 6)

- `/` : class facts, weather call, FIND, notes, revision line
- `/404` : dry, link home

### v1

- Add training offer page (path TBD: `/train` or `/pt`)
- Booking link (external ok)

### v2

- Writing index and posts
- Sequence notes if worth publishing
- App remains separate product

## 5. Requirements (MoSCoW)

| ID | Requirement | Priority | Acceptance |
|---|---|---|---|
| R01 | Class title block | Must | WHEN/WHERE/COST/LEVEL/BRING/FIND readable on a 390 px phone within one short scroll |
| R02 | Weather call | Must | Visitor knows on / cancelled / moved within 10 seconds |
| R03 | Voice and contrast | Must | No em/en dashes; token contrast 4.5:1 small / 3:1 large |
| R04 | Phone-edit weather | Should | Status changeable in under 5 minutes from a phone |
| R05 | Donation link | Could | Optional URL in COST or NOTES |
| R06 | Map embed | Could | Address text first |
| R07 | Accounts, booking engine, blog, app | Won't | Absent from v0 |

## 6. ADRs

| ID | Decision |
|---|---|
| ADR001 | Astro static, TypeScript strict |
| ADR002 | Cloudflare Pages host |
| ADR003 | Free Body tokens in `src/styles/global.css`; Space Grotesk + IBM Plex Mono |
| ADR004 | Schedule/weather in `src/data/class.ts`; phone edit via github.dev or similar |
| ADR005 | No form backend / no PII store in v0 |
| ADR006 | Payments: external donation link only if added |
| ADR007 | Email list: none in v0 |
| ADR008 | Analytics: optional Cloudflare Web Analytics; no marketing pixels |
| ADR009 | Hero diagram optional; v0 ships without requiring the SVG figure |
| ADR010 | Sequencing app out of this repo |
| ADR011 | One maintainer; ~1 h/month after launch |

## 7. Content inventory (v0)

| Content | Source | Owner |
|---|---|---|
| Title block facts | `src/data/class.ts` | Jigar |
| Weather note | `src/data/class.ts` | Jigar |
| Voice line | `src/data/class.ts` | Jigar |
| Notes 1 to 4 | `src/data/class.ts` | Jigar |
| FIND handle | bracketed until O002 | Jigar |
| Park name | bracketed until O004 | Jigar |
| Weekly flyer sheet | flyer generator (P001) | Jigar |
| Photos | opportunistic phone snaps; faces only with consent | Jigar |

## 8. Legal checklist

| Item | v0 posture |
|---|---|
| Scope statement | Short: yoga and movement instruction; not medical or mental health treatment |
| Waiver | Paper at mat; counsel review before anything online (P007) |
| Photo consent | Ask before posting faces; prefer no faces on v0 marketing until process exists |
| Donation language | "Donation-based" and "No one turned away"; no charity-registration claim |
| Park permit | Required before locking WHERE (P002) |

## 9. Metrics

| Signal | How counted | Cadence |
|---|---|---|
| Primary: Sunday headcount | Eye-count at start; exclude rain-outs | Every class |
| Cancels | Count of cancelled Sundays | Monthly |
| Instagram bio taps | If platform provides | Monthly |
| Review | 15 minutes inside maintain hour | Monthly |

Success bar (PROVISIONAL O003): average at least 4 mats on non-cancelled Sundays over a 4-week span by March 2027.

## 10. Versions and kill criteria

| Version | Done when |
|---|---|
| v0 | Public URL with facts, weather, FIND; before Dec 6 |
| v1 | PT offer live when demand/capacity exists |
| v2 | Writing or sequences published |

**Kill / pause (PROVISIONAL D034):** three consecutive months under 2 average mats after outreach attempts, or hours budget blown for 4 weeks running.

**Hours:** 4 h/week until Dec 6; 1 h/month after (D004, D005).

## 11. Risks

| Risk | Mitigation |
|---|---|
| Park / permit slip | Keep WHERE bracketed; do not print A-frames early (P002) |
| Overcommitment | Kill criteria; thin sitemap; Won't list |
| Scope creep into clinical claims | D006 guard; voice rule |
| PROVISIONAL decisions wrong | Voice confirm sitting; overturn in decision log |
| Flyer tooling missing | P001 before weekly series promise |
| Domain / handle unset | noindex holding page until brackets clear |

## 12. Open questions

See O001 to O006 in [04-interview.md](04-interview.md): domain, handle, success bar, park/permit, donation/Venmo, confirm all PROVISIONAL rows.
