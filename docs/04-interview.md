# Interview record

Brand site discovery for **Métier** (org site). Scope-of-practice guard throughout.

**Method:** Early agent pass filled a flyer-only draft (superseded). Live re-interview 2026-10-27: Phases 1 to 4 interactive defaults; Phases 5 to 12 batch defaults per user ("just go ahead with defaults").

---

## Sitting 1

### Phase 0: Context check

Accepted earlier: Dec 6, 2026 launch; Sundays 9:00 AM; park in Tustin (unnamed); 60 min vinyasa; all levels; donation-based; 4 h/week build; 1 h/month maintain; scope D006 (yoga + CPT, not therapy; RADT off-site).

**Decisions:** D001 to D007.

### Phase 1: Job of the site (LIVE)

Course correction: organization site, not flyer.

**Defaults accepted:** Métier masthead; job = who / offer / how to start; one number = monthly first steps; v0 = Home, Free Body page, About/scope, contact.

**Decisions:** D013 to D017, D035.

### Phase 2: Brand architecture (LIVE)

**Defaults accepted:** Offerings Free Body + Personal training; Jigar as teacher/founder under Métier masthead; domain undecided; one Instagram handle.

**Decisions:** D018, D036 to D039.

### Phase 3: Values (LIVE)

**Defaults accepted:** Compass not framework; wholistic once on About; voice A/B/C; no wellness headlines.

**Decisions:** D019 to D021, D040.

### Phase 4: Audiences (LIVE)

**Defaults accepted:** OC adults; fear of vague/culty/funnel or inadequacy; proof via concrete offerings and scope; referrals as secondary.

**Decisions:** D022 to D024.

**End of Sitting 1.**

---

## Sitting 2 (batch defaults)

**Resume:** Métier org site. Free Body + PT on v0. First steps metric. Clear scope voice. Open: domain, handle, park.

### Phase 5: Offers and money

**Defaults accepted:**

| Offer | When | Path |
|---|---|---|
| Free Body | v0 | Donation-based; no ticket; optional Venmo later |
| Personal training | v0 | Page + inquire; rates as range or "inquire"; no checkout |
| Privates | v0 | One line under training |
| Workshops / consulting / writing / app | Not v0 | Later versions |
| Coaching | Never as public therapy-adjacent offer | Guard |

**Decisions:** D025, D041.

### Phase 6: Content and Instagram loop

**Defaults accepted:** Weekly Free Body sheets when flyer generator is in-repo (P001); phone photos; footer + Free Body FIND to Métier IG; bio points at Métier Home; weather lives on `/free-body`.

**Decisions:** D026.

### Phase 7: Site map

**Defaults accepted:**

- v0: `/` Home, `/free-body`, `/training`, `/about` (scope + mailto contact), `/404`
- v1: external booking/checkout or workshops when capacity
- v2: writing / sequences; app stays separate
- Waiver: paper at mat for v0

**Decisions:** D027, D042.

### Phase 8: Functional requirements (MoSCoW)

| ID | Req | Priority | Acceptance |
|---|---|---|---|
| R01 | Home: who + offerings overview | Must | Visitor names Métier and two offerings within 10 seconds |
| R02 | Free Body title block + weather | Must | Facts + on/cancelled/moved on `/free-body` |
| R03 | Training inquire path | Must | Clear mailto or stated contact; no fake "book now" checkout |
| R04 | About scope line | Must | Includes non-therapy boundary (voice C) |
| R05 | Nav + mobile | Must | All v0 routes reachable on 390 px |
| R06 | Voice + contrast | Must | No em/en dashes; token contrast |
| R07 | Phone-edit weather | Should | Under 5 minutes via `src/data/class.ts` |
| R08 | Donation link | Could | Optional |
| R09 | Map embed | Could | Address text first |
| R10 | Booking engine, accounts, blog, app, chat, online waiver PII | Won't | Absent v0 |

**Decisions:** D028.

**End of Sitting 2.**

---

## Sitting 3 (batch defaults)

**Resume:** Offer sheet and org sitemap locked for v0. MoSCoW above.

### Phase 9: Technical ADRs

**Defaults accepted:**

| ADR | Decision |
|---|---|
| ADR001 | Astro static, TypeScript strict |
| ADR002 | Cloudflare Pages |
| ADR003 | Free Body tokens site-wide for v0; two font families |
| ADR004 | Weather/class facts in `src/data/class.ts`; phone edit via github.dev |
| ADR005 | No form backend / no PII store; contact is mailto |
| ADR006 | No Stripe; optional external donation link |
| ADR007 | No email list v0 |
| ADR008 | Optional Cloudflare Web Analytics only |
| ADR009 | Org Home does not require flyer SVG; Free Body page may add diagram later |
| ADR010 | Sequencing app out of repo |
| ADR011 | One maintainer; ~1 h/month |

**Decisions:** D029, D030, D042.

### Phase 10: Legal and scope

**Defaults accepted:** Scope on About; paper waiver; ask before faces; donation language without charity claim. Permit still P002.

**Decisions:** D031.

### Phase 11: Measurement

**Defaults accepted:** Log show-ups + inquiries; monthly 15 min review; supporting cancels and IG taps. Success bar: average at least 8 first steps/month over trailing 4 weeks by March 2027.

**Decisions:** D032, D043.

### Phase 12: Versions and kill criteria

**Defaults accepted:**

- v0 done: public Métier URL with Home, Free Body, Training, About; before Dec 6
- v1: booking/checkout or workshops when capacity/demand
- v2: writing/sequences
- Kill/pause: three months under 4 first-steps/month after outreach, or hours budget blown 4 weeks running

**Decisions:** D033, D034.

**End of Sitting 3.** Spec: [05-brand-site-spec-v0.2.md](05-brand-site-spec-v0.2.md). Build brief: [06-build-brief.md](06-build-brief.md).

---

## Open questions (still need real strings)

| ID | Question |
|---|---|
| O001 | Domain name |
| O002 | Instagram handle for Métier |
| O003 | Revise success bar (D043) if 8/month is wrong |
| O004 | Park name and permit |
| O005 | Venmo / donation link if any |
| O006 | Closed: batch defaults accepted 2026-10-27 |
