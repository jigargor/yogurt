# 03 Free Body

Technical schematic. Seed for the brand site design system.

Source renders: `03-free-body_post.png` (1080 x 1350) and `03-free-body_story.png` (1080 x 1920). Full six-direction set lives in the flyer project (not in this repo yet). See [docs/01-six-directions-readme.md](../../docs/01-six-directions-readme.md).

## Concept

A sheet from an engineering drawing set. A free-body diagram isolates one object and draws every force acting on it. Here the object is a person in Warrior II, drawn on graph paper as a jointed line figure with real statics. Weight runs down from the center of mass, two ground reactions push up, friction at each foot points inward, and the equations show how they balance. "Knee over ankle" and the 90 degree mark are called out like tolerances. Class details live in a drawing title block. Notes stay deadpan: "4. Tolerances: generous." "Free" also nods to donation-based.

## Palette

| Hex | Token | Role |
|---|---|---|
| `#E9EFE2` | `--paper` | Drafting-film green-white ground |
| `#F3F6EF` | `--cell` | Title block, joint and balloon fills, QR field |
| `#9DB896` | `--line` | Grid (38% and 62% opacity), body envelope (42%), mat |
| `#1F2B27` | `--ink` | All type, skeleton, frame, QR |
| `#B5392A` | `--red` | Forces, equations, revision mark (5.0:1 on paper) |

## Type

- Display: Space Grotesk 700 headline, 600 values (`@fontsource/space-grotesk`)
- Mono: IBM Plex Mono 400 / 500 / 600 for labels in caps, about +0.1 em tracking (`@fontsource/ibm-plex-mono`)

## Contact cell

There is no website URL yet, so the SCAN cell and QR are gone from Free Body pieces. The cell is FIND with the Instagram handle alone. Once a URL exists, the flyer generator can restore QR via `FB_CONTACT=qr`. Handle via `FB_HANDLE=@yourname`.

## Grid

Paper with an 18 px graph grid (major line every 5 cells) and a 2 px border inset 36 px with zone ticks, all per 1080 wide.

## Voice on this direction

Precision and restraint. No em dashes. No wellness cliches (journey, hold space, zen, lotus, Om, chakras, mandalas).

## Reuse prompt (flyers)

```
Design a [format] for a donation-based Sunday park yoga class in the "Free Body" style: one sheet from an engineering drawing set. Paper with an 18 px graph grid (major line every 5 cells) and a 2 px border inset 36 px with zone ticks, all per 1080 wide.
Palette only: paper #E9EFE2, cell #F3F6EF, line #9DB896 (grid at 38% and 62% opacity, body envelope at 42%), ink #1F2B27, red #B5392A for forces and equations only. Fonts: @fontsource/space-grotesk (700 headline, 600 values) and @fontsource/ibm-plex-mono (labels in caps, about +0.1 em tracking).
Hero: a free-body diagram of one yoga pose as a jointed line figure (round joints, ghosted body envelope) on a mat, with physically correct forces: W down from a center-of-mass symbol, ground reactions R1 and R2 up, friction where the stance needs it, equilibrium equations, a dimension line, one or two alignment callouts with leaders, a numbered balloon, and the caption "FIG. n  POSE NAME, VIEW".
Below, a drawing title block of ruled cells: WHEN, WHERE, COST, LEVEL, BRING, NOTES (numbered, deadpan, one dry joke) and FIND (Instagram handle) or SCAN (flat segno QR) once a URL exists. Top-right metadata: DWG number, REV, SHEET nn OF 52, SCALE NTS; bump the sheet number weekly.
Copy: Yoga in the park; Sundays · 9:00 AM; [Park name], Tustin; Donation-based; All levels; A mat. No em dashes; no wellness cliches. Check the statics are right; render with rsvg-convert; verify fonts, margins, contrast and that the QR scans when present.
```
