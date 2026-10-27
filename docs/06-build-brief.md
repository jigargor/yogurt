# Build brief (coding agent)

Build **Métier v0**: an organization site, not a single flyer page.

Spec: [05-brand-site-spec-v0.2.md](05-brand-site-spec-v0.2.md). Decisions: [02-decision-log.md](02-decision-log.md).

## Goal

Before Sunday, December 6, 2026, ship a public static site where a stranger can tell who Métier is, what Free Body and Personal training are, how to start, and whether this Sunday’s park class is on.

## Stack

- Astro static + TypeScript strict (`astro check && astro build`)
- Cloudflare Pages (`npm run build` → `dist`)
- No islands required
- No form backend, Stripe, email list, or booking engine
- Contact: `mailto:` (ADR005)
- Optional: Cloudflare Web Analytics dashboard toggle

## Design

Tokens in `src/styles/global.css` (Free Body palette site-wide for v0):

| Token | Hex |
|---|---|
| `--paper` | `#E9EFE2` |
| `--cell` | `#F3F6EF` |
| `--line` | `#9DB896` |
| `--ink` | `#1F2B27` |
| `--red` | `#B5392A` |

Fonts: Space Grotesk 600/700, IBM Plex Mono 400/500/600.

Masthead wordmark: **Métier**. Free Body is an offering name, not the site title.

Voice: [`.cursor/rules/voice-and-copy.mdc`](../.cursor/rules/voice-and-copy.mdc).

## Pages to implement

Replace the current flyer-only holding `index.astro` with a real IA:

| Route | Content |
|---|---|
| `/` | Kicker Métier; hero “Movement practice. Clear scope. Show up.”; short who line; two offering cards/links (Free Body, Personal training); primary CTAs |
| `/free-body` | Move current title block + weather + notes here; voice can keep park-class register |
| `/training` | What PT is; who for; inquire mailto; one line on privates; rates “inquire” or a range if supplied |
| `/about` | Jigar as teacher/founder; scope “Yoga and strength work. Not therapy.”; mailto contact; optional wholistic once |
| `/404` | Dry; link to `/` |

Shared: simple nav (Home, Free Body, Training, About) + footer (Métier, mailto, Instagram when O002 exists).

Data: keep weather/class facts in `src/data/class.ts`. Add `src/data/site.ts` for org name, mailto, social, nav labels.

## Copy seeds (locked voice)

- Home hero: Movement practice. Clear scope. Show up.
- Offerings subhead: Park class. Training. No soft sell.
- About scope: Yoga and strength work. Not therapy.
- Free Body notes: keep the four existing notes.

Do not ship brackets. Keep `noindex` until domain, park name, and handle are real.

## Weather edit (R07)

Edit `src/data/class.ts` from phone (github.dev / Cursor) → commit → Pages deploy. Document in README when deploy is wired.

## QA gates

- [ ] `npm run build` passes
- [ ] No em/en dashes in visitor copy
- [ ] Home does not look like a single flyer title block
- [ ] All four routes + 404 work on 390 px
- [ ] Weather on/cancelled/moved readable
- [ ] Training has inquire, not fake checkout
- [ ] About carries scope line
- [ ] Favicon + `_headers` intact
- [ ] `noindex` removed only after O001/O002/O004 filled

## Out of scope (v0)

Booking engine, accounts, chat, blog, app embed, online waiver PII, Soft Ground visuals, dark mode toggle, map embed (unless trivial).

## Definition of done

Public URL. Org IA live. Free Body weather editable in under five minutes. Contact works. Voice clean. Ready to point people here for Dec 6.
