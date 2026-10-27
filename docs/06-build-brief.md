# Build brief (coding agent)

Self-contained brief to build and harden **v0** of the Free Body site in this repo. Spec: [05-brand-site-spec-v0.1.md](05-brand-site-spec-v0.1.md).

## Goal

Ship a public static site before Sunday, December 6, 2026 that tells a stranger: when, where, cost, level, what to bring, where to find Instagram, and whether this Sunday is on.

## Stack (locked for v0)

- Astro static + TypeScript strict (`astro check && astro build`)
- Cloudflare Pages
- No client islands required
- No form backend, no PII store, no Stripe, no email list
- Optional: Cloudflare Web Analytics (dashboard toggle only)

## Design system

Tokens in [`src/styles/global.css`](../src/styles/global.css):

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#E9EFE2` | Ground |
| `--cell` | `#F3F6EF` | Title block fills |
| `--line` | `#9DB896` | Grid / envelope |
| `--ink` | `#1F2B27` | Type and rules |
| `--red` | `#B5392A` | Revision / cancelled weather only |

Fonts: Space Grotesk 600/700, IBM Plex Mono 400/500/600 (via `@fontsource`).

Reference renders: [`design/free-body/`](../design/free-body/).

Rules: [`.cursor/rules/design-system.mdc`](../.cursor/rules/design-system.mdc), [`.cursor/rules/voice-and-copy.mdc`](../.cursor/rules/voice-and-copy.mdc).

## Pages (v0)

| Route | Job |
|---|---|
| `/` | Holding / class page: kicker, title, metadata, voice, weather, title block, notes, rev line |
| `/404` | Dry miss; link home |

Data: [`src/data/class.ts`](../src/data/class.ts). Weather edits happen there.

## Components to add when hardening v0

Skeleton already has layout + page. Prefer small Astro components if the page grows:

- `TitleBlock.astro` from class facts
- `WeatherCall.astro` from `classFacts.weather`
- Optional later: SVG free-body figure (not required for v0 launch)

## Content rules

- No em or en dashes anywhere in visitor-readable copy
- No genre vocabulary (journey, hold space, zen, lotus, Om, chakras, mandalas, ...)
- Do not ship brackets: replace `[Park name]` and `@[handle]` before removing `noindex`
- Keep `noindex` on until domain + park + handle are real

## Weather edit path (R04)

1. Open repo on phone (github.dev or Cursor)
2. Edit `src/data/class.ts` → `weather.status` and `weather.note` and `forDate`
3. Commit to `main` (Pages auto-deploy)

Document this in the README when deploy is wired.

## Deploy

1. Create Cloudflare Pages project from this repo
2. Build command: `npm run build`
3. Output: `dist`
4. Set custom domain when O001 resolves; update `site` in `astro.config.mjs`
5. Keep `public/_headers` as shipped

## QA gates before public

- [ ] `npm run build` passes
- [ ] No em/en dashes in `src/` or `docs/` visitor strings (`rg` check)
- [ ] Contrast: ink on paper and red on paper hold WCAG for intended sizes
- [ ] 390 px phone: title block usable within one short scroll
- [ ] Weather status on / cancelled / moved each readable
- [ ] FIND is a real handle; WHERE is a real park name
- [ ] `noindex` removed only after the above
- [ ] Favicon loads
- [ ] 404 returns the custom page

## Out of scope (v0)

- Booking engine, accounts, chat
- Online waiver with PII storage
- Blog / writing
- Sequencing app embed
- Soft Ground or other flyer directions on the site
- Dark mode toggle
- Map embed (Could; skip unless free and fast)

## Post-v0 pointers

- v1: PT page + external booking
- v2: writing collection
- Bring flyer generator into a repo (P001) before promising SHEET nn OF 52 weekly
- Draft waiver/consent for human review (P007)

## Definition of done (v0)

Public URL. Facts true. Weather editable in under five minutes. FIND works. Voice clean. First class can point people here.
