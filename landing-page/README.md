# Design Decode — whatswithin.space

A complete, top-down reverse-engineering of the design of **https://whatswithin.space**
— the personal brand site of **Komal**, a Holistic Meditation Practitioner
("What's Within"). This folder captures every visual and structural decision on that
site so it can be used as a reference to revamp the old CloutSync website in this style
(or a deliberate departure from it).

> Scope note: This documents ONLY the reference site's design language. It intentionally
> ignores anything from the previous CloutSync website. Nothing here has been implemented
> yet — these are specs to build from.

## How the site was built
The reference site is a **Canva-exported "Website"** (single-scroll, multi-section design).
All design data (colors, fonts, text, geometry) is embedded in a bootstrap JSON inside the
page HTML. The values in these docs were extracted directly from that source, so they are
exact, not eyeballed.

- Design canvas size: **1366 × 768** (desktop reference frame)
- Layout model: **full-bleed, flat color-blocked sections stacked vertically**
- Fonts served as self-hosted WOFF/WOFF2 via Canva's font CSS

## Documents in this folder

| File | What's inside |
|------|---------------|
| [`01-brand-overview.md`](./01-brand-overview.md) | The design language, mood, personality, and the "why" behind the look |
| [`02-color-palette.md`](./02-color-palette.md) | Every hex value, its role, usage frequency, and the section color-blocking system |
| [`03-typography.md`](./03-typography.md) | All 4 typefaces, the type scale, weights, leading, tracking, and per-role treatment |
| [`04-layout-and-components.md`](./04-layout-and-components.md) | Section layout, hero anatomy, buttons, decorative shapes, iconography |
| [`05-content-inventory.md`](./05-content-inventory.md) | Full section-by-section copy and information architecture |
| [`design-tokens.css`](./design-tokens.css) | Ready-to-use CSS custom properties (colors, type, radii) |
| [`design-tokens.json`](./design-tokens.json) | Machine-readable tokens for a design system / Tailwind / Style Dictionary |

## The one-paragraph summary
Warm, playful, feminine, retro-modern wellness aesthetic. Big **condensed rounded display
type** ("WHAT'S WITHIN?") on **saturated flat color blocks** (vermilion red, periwinkle
blue, soft pink, chartreuse), with **cream "paper" (`#faefe6`)** as the connective neutral.
Body copy in the geometric **Josefin Sans**. **Fully-rounded pill buttons** with underlined
labels, and **hand-drawn organic decorations** (quatrefoil flowers, hearts, blobs, asterisks).
The feeling is a 70s-inspired warmth crossed with clean modern flat design — soft, human,
inviting, and a little whimsical.
