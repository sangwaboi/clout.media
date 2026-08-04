# 04 — Layout & Components

## Canvas & grid
- **Reference canvas:** 1366 × 768 per section (desktop-first Canva frame).
- **Layout model:** a **single vertical scroll of full-bleed sections**, each section = one
  flat background color. Think "stacked posters."
- **Section height:** most sections are full-viewport-ish (≈768 tall); some (e.g. the quote
  banner) are shorter (≈280 tall).
- **Content alignment:** a mix of **two-column** (hero, about) and **centered single-column**
  (quote banners, mission). Wide side margins keep content from touching edges.

## Page / section inventory (top to bottom)
1. **Hero** — red bg, two-column: giant "WHAT'S WITHIN?" left, "Welcome" copy + Read more right.
2. **About me** — pink bg, portrait/organic shape + "Hi, I'm Komal" intro + Read more.
3. **Quote banner** — chartreuse bg, short height, centered "What's within?" question.
4. **Work-with-me / offerings** — blue/cream, cards for Meditation, Nervous system regulation,
   Shadow work, "Our Journey together."
5. **Mission** — cream/color, mission statement + "Understand this journey better…".
6. **Little offerings** — links out: Instagram, YouTube, Podcast, Insight Timer meditation tapes.
7. **FAQs** — Q&A list ("Do I need to meditate?", "Where do I begin?", etc.) + Read all.
8. **Get in touch / Thank You** — contact invitation, warm sign-off.
9. **Footer** — brand line, disclaimer, inclusivity statement, © 2026.
   Plus a **Menu** overlay page with nav: about me, Work with me, Mission, Our journey
   together, Faqs.

## Hero anatomy (the signature screen)
```
┌──────────────────────────────────────────────────────────┐
│  [♥ pill]  Menu (underlined)                    red bg     │
│                                                            │
│   ✿*  (pink quatrefoil w/ red asterisk)                    │
│                                    Welcome  ← Cubao 59-ish │
│   WHAT'S            We are living through a profound        │
│   WITHIN?          time of change…  ← Josefin body, cream  │
│   ↑ Cubao 200px,                                           │
│   cream, leading .75          ( Read more )  ← cream pill  │
└──────────────────────────────────────────────────────────┘
```
- Left column: oversized display headline + a decorative floral shape.
- Right column: eyebrow-scale "Welcome" heading, justified body copy, a pill CTA.
- Top-left: circular **heart badge** + underlined **Menu** link (the only nav on hero).

## Buttons (pills)
The universal CTA. Extracted geometry: a 64×64 base rounded by radius **36** → effectively a
**fully-rounded pill** (border-radius ≥ 50% of height).

- **Shape:** full pill (`border-radius: 999px` in practice).
- **Fill:** solid — usually **cream `#faefe6`** on colored sections, or a **colored fill**
  (`#566dc4`, `#e63b40`) on cream sections.
- **Label:** **Josefin Sans, bold, 21–24px, underlined, centered.**
- **Label color:** the section's accent (red/blue) on cream pills; cream on colored pills.
- **No drop shadow, no border** — flat.
- **Observed labels:** `Read more`, `Work with me`, `Get in touch`, `Read all`,
  `Explore Practices`, `Read About My Journey`, `Understand this journey better…`.

CSS sketch:
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em 1.6em;
  border-radius: 999px;
  background: var(--paper);        /* #faefe6 */
  color: var(--brand-red);         /* or --brand-blue */
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 1.33rem;              /* ~21.3px */
  text-decoration: underline;
  border: none;
}
.btn--on-cream { background: var(--brand-blue); color: var(--paper); }
```

## Navigation
- Minimal. The hero shows only a **heart badge + "Menu"** (underlined, bold Josefin).
- Opening Menu reveals a simple text nav: **about me · Work with me · Mission · Our journey
  together · Faqs** (lowercase/sentence case, underlined links).
- No sticky header, no mega-menu — nav is intentionally quiet.

## Decorative shapes & iconography (the "stickers")
Organic vector decorations, drawn as flat shapes with optional black strokes. They are the
brand's personality markers:

- **Quatrefoil / geometric floral** — a 4-petal flower blob (pink `#ffcfec` fill), often with
  a **red asterisk (*)** centered in it. Signature motif.
- **Heart** — inside a circle badge (the Menu button) and as an accent.
- **Blob / organic circle clusters** — large amorphous rounded shapes used as backdrops for
  imagery (e.g., a 500×500 lobed blob behind a portrait).
- **Asterisk (*)** — a small sparkle/accent mark.
- **Alt text present in source** (e.g., *"a pink geometric floral shape"*, *"a pink circle with
  a heart shape in the center"*) → decorations are given accessible labels.

Treatment notes:
- Shapes are **recolored per placement** (the source stores color-remap maps like
  `{"#5da6bf":"#faefe6","#faefe6":"#566dc4"}`), so the same shape appears in different
  colorways across sections.
- Optional **thin black outline** (`#000000`) on some shapes for a sticker/hand-drawn look.
- Some are rotated slightly (small rotation values) for a casual, un-gridded feel.

## Imagery
- A few raster photos (portrait / lifestyle) placed **inside organic blob masks** rather than
  rectangles — reinforcing the soft, no-hard-corners rule.
- Favicon/app icons are custom PNGs.

## Motion / interaction
- Right-click is disabled on media (a Canva export default) — not a design decision to keep.
- No evidence of scroll animation in the static export; treat motion as an **open decision**
  for the revamp (gentle fade/slide-ins would suit the calm tone).

## Spacing & feel
- **Generous padding** inside every section; content never crowds the color edges.
- Large vertical rhythm between headline → body → CTA.
- The overall density is **low** (airy), matching the "slow down, breathe" brand promise.

## Revamp component checklist
- [ ] Full-bleed color-block section wrapper (bg-color prop, cycles palette)
- [ ] Oversized display H1 + eyebrow heading pattern
- [ ] Pill button (cream-on-color and color-on-cream variants), underlined bold label
- [ ] Quiet nav + Menu overlay
- [ ] Organic shape/blob decoration set (SVG), recolorable
- [ ] Blob-masked image component
- [ ] Q&A / accordion list (FAQ)
- [ ] Link-out "offerings" list (social/podcast)
- [ ] Footer with disclaimer + inclusivity statement
