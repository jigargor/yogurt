# yogurt

Brand site for **Métier**: yoga and strength training (org site). Free Body is the Sunday park class offering. Astro static. Free Body tokens for v0.

Launch target: first Free Body class Sunday, December 6, 2026.

## Status

v0 org IA live: `/`, `/free-body`, `/training`, `/about`. `noindex` stays on until domain, email, Instagram, and park name are set in [`src/data/site.ts`](src/data/site.ts) and [`src/data/class.ts`](src/data/class.ts). Spec: [`docs/05-brand-site-spec-v0.2.md`](docs/05-brand-site-spec-v0.2.md).

## Stack

- Astro (static) + TypeScript strict
- Free Body CSS variables in `src/styles/global.css`
- Fonts via `@fontsource/space-grotesk` and `@fontsource/ibm-plex-mono`
- Hosting target: Cloudflare Pages (ADR002)

## Develop

Needs Node 20+ and npm.

```bash
npm install
npm run dev
npm run build
```

- Org identity / mailto / Instagram: [`src/data/site.ts`](src/data/site.ts)
- Free Body facts and weather: [`src/data/class.ts`](src/data/class.ts) (edit from phone via github.dev for Saturday night cancels)
- Training copy: [`src/data/training.ts`](src/data/training.ts)

## Docs

| File | What |
|---|---|
| [`docs/00-discovery-prompt.md`](docs/00-discovery-prompt.md) | Interview prompt reference |
| [`docs/01-six-directions-readme.md`](docs/01-six-directions-readme.md) | Flyer art-direction reference |
| [`docs/02-decision-log.md`](docs/02-decision-log.md) | Decisions |
| [`docs/03-parking-lot.md`](docs/03-parking-lot.md) | Deferred items |
| [`docs/04-interview.md`](docs/04-interview.md) | Interview record |
| [`docs/05-brand-site-spec-v0.2.md`](docs/05-brand-site-spec-v0.2.md) | Brand site spec (current) |
| [`docs/06-build-brief.md`](docs/06-build-brief.md) | Coding-agent build brief |
| [`design/free-body/`](design/free-body/) | Renders + token sheet |

## Voice

Precision and restraint. No em or en dashes. No genre vocabulary. Brackets never ship to a public URL.
