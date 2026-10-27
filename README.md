# yogurt

Brand site for **Free Body**: Sunday park yoga in Tustin. Astro static. Free Body tokens.

Launch target: first class Sunday, December 6, 2026.

## Status

Skeleton + discovery record. Holding page at `/` with bracketed park name and Instagram handle until those lock. Spec: [`docs/05-brand-site-spec-v0.1.md`](docs/05-brand-site-spec-v0.1.md). Build brief: [`docs/06-build-brief.md`](docs/06-build-brief.md).

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

Class facts and the weather call live in [`src/data/class.ts`](src/data/class.ts). Edit that file from a phone browser via github.dev when you need a Saturday night cancel.

## Docs

| File | What |
|---|---|
| [`docs/00-discovery-prompt.md`](docs/00-discovery-prompt.md) | Interview prompt reference |
| [`docs/01-six-directions-readme.md`](docs/01-six-directions-readme.md) | Flyer art-direction reference |
| [`docs/02-decision-log.md`](docs/02-decision-log.md) | Decisions |
| [`docs/03-parking-lot.md`](docs/03-parking-lot.md) | Deferred items |
| [`docs/04-interview.md`](docs/04-interview.md) | Interview record (PROVISIONAL until voice confirm) |
| [`design/free-body/`](design/free-body/) | Renders + token sheet |

## Voice

Precision and restraint. No em or en dashes. No genre vocabulary. Brackets never ship to a public URL.
