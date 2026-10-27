# Yoga in the park: six directions

Reference copy of the flyer project README, pasted into yogurt on 2026-10-27. The flyer generator (`svg/`, `work/`, `fonts/`) is not in this repo yet (see parking lot P001). Free Body renders used here live in `design/free-body/`.

A weekly class. Sunday morning, 60 minutes, vinyasa, all levels, donation-based, in a park in Tustin.
Here are six art directions for it. Each has its own palette, type pairing and layout logic. All illustration is original SVG, and every piece is rendered with real fonts.

**Everything in brackets is a placeholder.** So are the class names, the day and the time. The QR codes scan, but they point to a stand-in URL: `https://example.com/park-yoga`.

## Files

| File | Pixels | What |
|---|---|---|
| `png/00-contact-sheet.png` | 2400 x 4769 | All six posts on a labeled 2 x 3 grid, for comparing on a phone |
| `png/01-active-rest_post.png` | 1080 x 1350 | 01 Active Rest, Instagram post |
| `png/02-fair-weather_post.png` | 1080 x 1350 | 02 Fair Weather, post |
| `png/03-free-body_post.png` | 1080 x 1350 | 03 Free Body, post |
| `png/03-free-body_story.png` | 1080 x 1920 | 03 Free Body, story |
| `png/03-free-body_letter.png` | 2550 x 3300 | 03 Free Body, US letter at 300 dpi |
| `png/04-soft-ground_post.png` | 1080 x 1350 | 04 Soft Ground, post |
| `png/04-soft-ground_story.png` | 1080 x 1920 | 04 Soft Ground, story |
| `png/05-slow-burn_post.png` | 1080 x 1350 | 05 Slow Burn, post |
| `png/06-part-shade_post.png` | 1080 x 1350 | 06 Part Shade, post |

- `svg/` has one source SVG per PNG. Text stays live `<text>`, with nothing external.
- `work/` holds the Python generators (`d1_*.py` to `d6_*.py`), `qa.py`, `contact_sheet.py` and `build_all.sh`.
- `fonts/ttf/` holds the converted fonts.

**To use your real link:** set `QR_URL` in `work/lib.py`, swap the bracketed text in the `d*.py` file, then run `bash work/build_all.sh`. The full rebuild takes about 30 seconds.

## How it was built and checked

- **Fonts.** These come from `@fontsource` npm packages, all licensed OFL-1.1, so printing and commercial use are fine. fontTools converted the woff2 files to TTF. Fontsource's static files carry inconsistent internal names. `work/fix_font_names.py` rewrites the name tables so each typeface is one family.
- **Renderer.** `rsvg-convert` 2.58 (librsvg with Pango).
- **QR.** Made with `segno` at version 3, error correction Q. The code always sits on a flat light field and is never textured or filtered.
- **Automated QA on every PNG** (`work/qa.py`): pixel size exact; fonts resolve; glyphs exist; text ink boxes inside safe margin; WCAG contrast; QR decodes; no em or en dashes.
- **Stories.** Key content sits between about y 250 and y 1650.
- **Letter.** Live type at least 170 px from the edge. PNG carries 300 dpi metadata.

## Sign legibility

The sign is a 24 x 36 in A-frame with 1.5 in margins (21 in live width). For reading at 10 ft, 2010 ADA Table 703.5.5 yields **1.125 in cap height**. Treat as a floor. Stack the facts line as three lines on the sign. QR 5 to 6 in square. Print on matte stock.

---

## 01 Active Rest (Swiss typographic)

Oxymoron from training science. Inter Black 900 / Thin 100. Libre Caslon dictionary entry. Six-column grid. Red on the time only.

Palette: paper `#F0EDE6`, ink `#121212`, signal red `#D63A1F`, grey `#67635C`, hairline `#C9C3B8`.

**Risk.** Inter Thin is fragile below about 60 px.

---

## 02 Fair Weather (Editorial serif)

Centered, editorial. Instrument Serif huge; pre-dawn navy; gold interpunct. No image.

Palette: night `#14223A` / `#1D3150`, bone `#F2EADB`, gold `#E7B04B`, mist `#9FB0C2`.

**Risk.** Idiom invites "is it on?" messages. QR must carry weather calls.

---

## 03 Free Body (Technical schematic)

Engineering drawing set. Free-body diagram of Warrior II with correct statics. Title block for class facts. Notes: "Tolerances: generous."

Palette: paper `#E9EFE2`, cell `#F3F6EF`, line `#9DB896`, ink `#1F2B27`, red `#B5392A`.

Type: Space Grotesk + IBM Plex Mono.

**Contact cell (changed 2026-10-22).** No website yet, so SCAN/QR removed; FIND with Instagram handle. `FB_CONTACT=qr` restores QR; `FB_HANDLE=@yourname` sets handle.

**Series.** Bump SHEET number weekly; OF 52 promises a year.

**Risk.** Density. Title block carries the message at phone size.

Full reuse prompt and family notes: see `design/free-body/README.md`.

---

## 04 Soft Ground (Two-ink risograph)

Green and fluorescent pink overprint to plum. Bricolage + Courier Prime. Lawn of mats; one open "your spot".

Palette: paper `#F2EBDD`, green `#3E6B5C`, pink `#FF48B0`, plum `#401F42` (multiply result).

**Risk.** Fluorescent pink dies in CMYK. Confirm against print shop drums.

---

## 05 Slow Burn (Retro-modern geometric)

Six frames, sunrise time-lapse 00 to 60 MIN. Fraunces + Jost. Earth palette, flat fills.

Palette: cream `#F4E4C6`, brown `#3A2418`, terracotta `#C8532E`, mustard `#E5A53A`, olive `#7C8A4F`.

**Risk.** Name next to a sun can read as heated class.

---

## 06 Part Shade (Fine-line botanical)

Western sycamore plate. Cormorant italic + Work Sans. Specimen label keeps it from candle-label wellness art.

Palette: paper `#F6F1E6`, ink `#2B2A24`, sage `#8A9A78`, shade `#55644F`, gold `#E9C77B`.

---

## Pick

**Free Body** is the one nobody else can make. Physics is right. Photocopies. Weekly series.

**Soft Ground** is the warm one. Run both if possible; if one, Free Body.

Third: Active Rest (cleanest, least personal).
