# 02 — Color Palette

All values below were extracted directly from the site's embedded design data. The
"count" column is the raw number of times the hex appears in the source, which is a good
proxy for how load-bearing each color is.

## Core brand palette (the colors that define the look)

| Swatch | Hex | Count | Role |
|--------|-----|------:|------|
| 🟥 | `#e63b40` | 81 | **Primary red / vermilion.** The signature hero background and the boldest accent. Warm, energetic, tomato-red. |
| 🟦 | `#566dc4` | 89 | **Periwinkle / indigo blue.** Secondary brand color — section backgrounds, headings, button fills. The calm counterweight to the red. |
| 🟨 | `#faefe6` | 101 | **Cream / "paper" (the neutral hero of the system).** Backgrounds, text-on-color, button fills. The single most-used color — the connective tissue. |
| 🌸 | `#ffcfec` | 15 | **Soft pink.** Section background + floral shapes. Feminine, gentle. |
| 🌷 | `#ffc8dd` | 31 | **Light rose pink.** A softer/lighter pink used for section backgrounds and shape fills. |
| 🟩 | `#d9df8e` | 5 | **Soft chartreuse / sage-lime.** A section background color — the "fresh/natural" note. |
| ⬛ | `#000000` | 42 | **Black.** Strokes, shadows, and outlines on shapes/icons (used structurally, not as large fills). |

## Secondary / support colors

| Hex | Count | Role |
|-----|------:|------|
| `#5da6bf` | 30 | Teal-blue — appears in the source illustration/shape palette (often recolored per placement). |
| `#fff8e6` | 11 | Warm off-white — an even lighter paper tone for small text / subtle fills. |
| `#ccd470` | 7 | Olive-lime — deeper companion to the chartreuse. |
| `#011c50` | 5 | Deep navy — high-contrast dark accent text. |
| `#304254` | 3 | Dark slate — the site's *default* body text color (base theme). |
| `#f9f3ec` | 2 | Barely-tinted cream (near-white paper). |
| `#553566` | 3 | Plum / aubergine — occasional deep accent. |
| `#ffffff` | 1 | Pure white (rare; cream is preferred over pure white). |

## Illustration / decorative palette (one-off accents inside shapes & art)
These appear a handful of times each, inside decorative SVG shapes and imagery. Treat them
as an *extended playful palette* rather than core brand colors:

`#fd883d` (orange) · `#ea5c5c` (coral) · `#e34a20` (burnt orange-red) · `#87c0f4` (sky blue) ·
`#fcc854` `#ffc84a` `#ffa441` `#f7cb7f` `#f7aa43` `#f49fa9` `#f28ca8` `#e89dc3` (warm
oranges/golds & pinks) · `#ed1558` (magenta) · `#8b9bea` `#7e83bf` `#2e40c0` (blues) ·
`#5b6946` (moss) · `#d46bca` (orchid) · `#f4e0bd` `#f2e1d6` `#f9f7ed` `#f7f2d5` (creams) ·
`#c43d1e` (rust) · `#191919` `#282828` `#303030` (near-blacks).

## The section color-blocking system (IMPORTANT)
The defining structural move: **each full-width section is a single flat background color,
and consecutive sections cycle through the palette.** Observed background order down the
page:

```
red (#e63b40)  →  pink (#ffcfec)  →  chartreuse (#d9df8e)  →  blue (#566dc4)
→  cream (#faefe6)  →  light-pink (#ffc8dd)  →  (repeat / remix)
```

Rules that make it work:
- **Cream (`#faefe6`) is the "rest" color** — it separates louder blocks and hosts dense text.
- On a **red** background, text & headings are **cream**; buttons are **cream pills** with
  **red** underlined labels.
- On a **blue** background, text is **cream**; buttons are **cream pills** with **blue** labels.
- On **cream/pink** backgrounds, headings flip to **periwinkle (`#566dc4`)** or **red**, and
  buttons become **colored pills** with **cream** labels.
- Adjacent sections always contrast (a light block never sits next to a same-lightness block).

## Contrast / accessibility notes
- **Cream on red** (`#faefe6` on `#e63b40`) ≈ 4.0:1 — passes AA for large text (the hero &
  headings), borderline for small body. For a revamp, nudge body text lighter/larger or
  darken the red slightly to clear 4.5:1 for small text.
- **Cream on blue** (`#faefe6` on `#566dc4`) ≈ 4.3:1 — similar: fine for large, tight for small.
- **Periwinkle/red on cream** for headings is high-contrast and safe.
- General rule for the revamp: keep body copy at **large sizes** on the saturated blocks, or
  reserve saturated blocks for headline/short copy and put long-form text on cream.

## Suggested semantic mapping (for the revamp token layer)
| Token | Value | Notes |
|-------|-------|-------|
| `--paper` (neutral base) | `#faefe6` | primary background & on-color text |
| `--ink` (text on paper) | `#304254` / `#011c50` | default body / high-contrast |
| `--brand-red` | `#e63b40` | primary accent / hero |
| `--brand-blue` | `#566dc4` | secondary brand |
| `--brand-pink` | `#ffcfec` | soft accent bg |
| `--brand-rose` | `#ffc8dd` | soft accent bg (lighter) |
| `--brand-lime` | `#d9df8e` | fresh accent bg |
| `--stroke` | `#000000` | outlines / decorative strokes |
