# 03 — Typography

The site uses **four** typefaces, each with a clear job. All sizes/leading/tracking below
are extracted from the source. A note on units:
- **Leading** is stored per-mille of the font size → `750` = 0.75, `1220` = 1.22,
  `1400` = 1.40 line-height.
- **Tracking (letter-spacing)** is stored per-mille of an em → `-45` ≈ `-0.045em` (tight),
  `25` ≈ `+0.025em` (slightly open).

---

## 1. Cubao Narrow — Display / Headlines
The star of the show. A **condensed, chunky, rounded** display face (retro-poster feel).
Used for the biggest statements.

| Usage | Size | Leading | Notes |
|-------|-----:|--------:|-------|
| Hero headline ("WHAT'S WITHIN?") | **200px** | 750 (0.75) | Ultra-tight leading so the two lines lock together as a block. Cream on red. |
| Section headings ("About me") | **~59px** | 830 (0.83) | Tight. Colored (periwinkle / red) on cream. |
| Sub-headline / pull quotes | **32px** | 1240–1630 | Centered; used for the "What's within?" question line. |

- **Character:** heavy weight, narrow width, soft rounded terminals → friendly but bold.
- **Case:** frequently set effectively as ALL-CAPS-scale display (the hero reads as caps).
- **Role in a revamp:** this is the "logo voice." Use for hero H1 and major section titles only.

---

## 2. Josefin Sans — Body & Sub-headings (the workhorse)
A **geometric humanist sans** with an elegant, slightly tall/light feel. This is the base
font of the whole site (theme default: `Josefin Sans, 16px, #304254`).

| Usage | Size | Weight | Leading | Tracking | Align |
|-------|-----:|--------|--------:|---------:|-------|
| Base body (theme default) | 16px | normal | — | — | — |
| Lead paragraph / "Welcome" body | **42.67px** | bold | 1220 (1.22) | −45 (tight) | justify |
| Secondary body | **26.67px** | normal | ~1400 | — | left |
| Intro/about body | **24px** | normal | 1400 (1.4) | +25 (open) | left |
| Buttons & nav labels | **21.33px** | **bold** | 1400 | −45 / 0 | center |

- **Character:** clean, calm, airy. The tight tracking on large headings gives a modern
  editorial feel; the open tracking (+25) on smaller passages improves readability.
- **Treatments:** body sometimes **justified** for a block/editorial look; button labels are
  **bold + underlined** (see components doc).
- **Role in a revamp:** all paragraph text, sub-heads, nav, and button labels.

---

## 3. Roca One — Accent Labels
A **rounded, soft geometric** face used for small accent/label text and category tags.

| Usage | Size | Weight | Leading |
|-------|-----:|--------|--------:|
| Accent labels / small headings | **24px** | bold | 1400 (1.4) |

- Appears in accent colors (`#e63b40` red, `#011c50` navy).
- **Role:** short labels, tags, or "eyebrow" text above headings. Use sparingly.

---

## 4. Helvetica World — Small Utility Text
Neutral grotesque used for the smallest utility/footnote-scale text.

| Usage | Size | Weight | Leading |
|-------|-----:|--------|--------:|
| Micro / utility text | **18.67px** | bold | 1400 (1.4) |

- Appears in warm-white (`#fff8e6`).
- **Role:** fine print, meta text, tiny captions where a neutral sans reads best.

---

## The type scale (consolidated)
```
200  px  — Hero display        (Cubao Narrow)
 59  px  — Section heading      (Cubao Narrow)
 42.67px — Lead paragraph       (Josefin Sans, bold)
 32  px  — Sub-headline/quote   (Cubao Narrow)
 26.67px — Secondary body       (Josefin Sans)
 24  px  — Body / accent label  (Josefin Sans / Roca One)
 21.33px — Buttons & nav        (Josefin Sans, bold, underline)
 18.67px — Micro utility        (Helvetica World)
 16  px  — Base body default    (Josefin Sans)
```

## Pairing logic (why it works)
- **Cubao Narrow (loud, condensed, rounded)** vs **Josefin Sans (calm, airy, geometric)** =
  strong contrast in weight/width but shared *roundness*, so they feel like one family of mood.
- Roca One and Helvetica World are **supporting players** — keep their footprint small.

## Revamp recommendations
1. Reduce to a **2-font system** for maintainability: **Cubao Narrow** (display) +
   **Josefin Sans** (everything else). Fold Roca One / Helvetica World roles into Josefin
   weights unless a specific accent is wanted.
2. Keep the **dramatic scale jump** (hero ≫ body) — it's core to the identity.
3. Preserve **tight tracking on big headings**, **slightly open tracking on small body**.
4. All four are available on Google Fonts / Canva; self-host WOFF2 for performance
   (the reference site self-hosts them under `_assets/fonts/`).
