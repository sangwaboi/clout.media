# Forge Theme — Design Decode

A top-down decode of **https://www.forgeresidency.com** ("forge · founder residency"),
captured to drive an alternative, **dark / premium / editorial** direction for the CloutSync
revamp. This is the *opposite pole* of the warm "What's Within" system in `/landing-page` —
here the mood is **serious business, restrained luxury, cinematic.**

> Values below were extracted directly from the site's shipped CSS and Next.js payload, so
> colors, fonts, and motion timings are exact, not eyeballed.

## What Forge is
A residency for exceptional founders (live-and-build cohort in Mandrem, Goa). The site sells
*exclusivity and seriousness* through cinematic restraint: one big painterly hero, a bold
lowercase wordmark, terse poetic copy, and a black canvas broken only by white type and a
single green accent.

## The one-paragraph essence
**Black canvas. White type. One emerald-green accent.** An elegant high-contrast serif
(**Cormorant**) for big editorial statements, a clean grotesk sans (**Manrope / Instrument
Sans**) for UI and body. A **pinned, full-height cinematic hero** (classical garden imagery)
with a huge lowercase wordmark, then content that **scrolls up over it**. Copy is **lowercase,
sparse, and poetic**. Motion is **slow, refined, and subtle** — long ease-out transitions,
gentle hover lifts, blur/scale reveals, and a quiet logo marquee. Nothing shouts; everything
feels deliberate and expensive.

## 1. Color palette (exact, by frequency in shipped CSS)

| Swatch | Hex | Role |
|--------|-----|------|
| ⬛ | `#000000` | Base black — dominant background |
| ⬜ | `#ffffff` | Primary text on black |
| 🟩 | `#16a85a` | **Signature emerald-green accent** (links, highlights, active) — 36 uses |
| ◼ | `#061008` | Deep green-black (tinted surface) |
| ◼ | `#060708` / `#08090b` / `#090a0c` / `#0a0a0a` / `#0a0b0d` | Near-black **surface** layers (subtle cool tint) — used for cards/sections to separate from pure black |
| ▪ | `#8a9099` / `#585f69` / `#6b7280` | Muted grays — secondary / meta text |
| 🟫 | `#b74432` / `#a83d2d` / `#e0715f` | **Terracotta / rust** — warm secondary accent |
| 🟢 | `#118a49` / `#6ee7a1` / `#8fff00` | Green family — darker green, mint, lime highlight |
| ⬜ | `#f4f3ee` / `#f2f3ef` / `#ededeb` / `#e7e7e2` | Warm off-whites (rare light surfaces / inverted blocks) |

**System:** true black base → stack of near-black surfaces (`#0a0a0a`, `#08090b`) for depth →
white text → muted gray for secondary → **emerald green as the single loud accent** →
terracotta as an occasional warm secondary. Green is used *sparingly* — that restraint is what
reads as premium.

### Suggested token mapping
```
--bg:            #000000   (page)
--surface:       #0a0a0a   (raised sections/cards)
--surface-2:     #08090b   (deeper wells)
--tint-green:    #061008   (green-black accent surface)
--text:          #ffffff
--text-muted:    #8a9099
--text-faint:    #585f69
--accent:        #16a85a   (emerald — the ONE loud color)
--accent-mint:   #6ee7a1
--accent-warm:   #b74432   (terracotta secondary)
--hairline:      rgba(255,255,255,0.10)
```

## 2. Typography
- **Cormorant** (`--font-cormorant`, serif) — elegant, high-contrast display serif. Big
  editorial headlines and pull-quotes. This is the "premium voice."
- **Manrope** (`--font-manrope`, sans) — clean geometric grotesk. Body, UI, buttons, and the
  bold lowercase **wordmark**.
- **Instrument Sans** (`--font-instrument-sans`, sans) — secondary sans for labels/meta.

Treatments:
- **Lowercase everywhere** for headlines and wordmark (the wordmark "forge" is set lowercase,
  heavy, tight).
- **Small UPPERCASE tracked labels** (`letter-spacing` wide) for eyebrows / meta (dates,
  locations, section tags).
- Big serif headlines sit at generous size with tight leading; body sans stays calm and small.
- High contrast: large serif white on black is the signature look.

### Type roles for the revamp
```
Wordmark / hero mark → Manrope 800, lowercase, tight tracking, huge
Editorial headline   → Cormorant 500–600, lowercase, tight leading
Body                 → Manrope 400, muted white
Eyebrow / meta       → Instrument/Manrope 500, UPPERCASE, letter-spacing 0.2em, small, muted
```

## 3. Layout & structure
Sections observed (top → bottom):
1. **Nav** — minimal: wordmark left, tiny links + an accent CTA ("apply now") right; often a
   thin promo bar ("Visit Edge City India 2026 →").
2. **Pinned cinematic hero** — `position: sticky; top:0; height:100svh; overflow:hidden`. A
   full-bleed painterly image (classical garden + statue) with the huge lowercase wordmark
   centered. Content below scrolls *over* the pinned hero (reveal-on-scroll depth).
3. **Poetic tagline band** — one terse line: *"surf at sunrise. ship past midnight. argue at
   dinner. begin again tomorrow."*
4. **Meta row** — location · cohort · dates ("alexandria · cohort 02", "Mandrem, Goa",
   "11 oct to 1 nov 2026").
5. **Partner logo marquee** — infinite horizontal scroll of partner logos (OpenAI, Cartesia,
   Context, ElevenLabs, PostHog, Edge City), pauses on hover.
6. **Stats** — big numbers with small labels: "1,450 applications", "24 founders backed",
   "read by us / we read every application."
7. **Editorial content blocks** + **apply now** CTA.
8. **Minimal black footer.**

Structural signatures:
- **Max-width ~1280px** centered containers (`max-w-7xl`).
- **Thin hairline dividers** (~10% white) between rows.
- **Asymmetric grids** (e.g. `lg:grid-cols-[1.12fr_0.88fr]`).
- Generous vertical whitespace; content is sparse and confident.

## 4. Motion & animation (the part the client loves)
Extracted from shipped CSS — all **subtle, slow, refined**:
- **Pinned hero + scroll-over reveal:** hero is `sticky h-[100svh] overflow-hidden`; the next
  section slides up over it. Creates cinematic depth on scroll.
- **Partner marquee:** `@keyframes forge-partner-marquee { to { transform: translateX(-50%) } }`,
  **46s linear infinite** (38s on mobile), **pauses on hover**.
- **Hover micro-lifts:** `hover:-translate-y-0.5` with `duration-500` — buttons/links rise a
  hair on hover.
- **Slow transitions:** durations of **200 / 300 / 500 / 700 / 900 / 1000ms**, timing
  **ease-out**. Long durations = premium calm.
- **Blur & scale reveals:** `blur(2px)`/`blur(8px)` and `scale(0)…scale(1)` /`scale(.12)`
  transitions — elements fade/blur/scale in.
- **backdrop-blur** on overlays/nav (glassy), **mix-blend-mode** for image/text blending.
- **`prefers-reduced-motion` respected** — animation durations reduced/removed. (Keep this.)
- **`will-change`** used sparingly on animated elements for smoothness.

Implementation notes for our build:
- Use **IntersectionObserver** for on-scroll fade/blur/translate reveals (staggered).
- Use **CSS position:sticky** for the pinned hero (no JS scroll library needed).
- Marquee via pure CSS keyframes, pause on hover, respect reduced-motion.
- Keep hover lifts to **2–3px** and durations **300–700ms, ease-out**.

## 5. Voice & tone
- **Lowercase, terse, poetic, confident.** Short declaratives. Rhythm and cadence over
  adjectives. ("surf at sunrise. ship past midnight.")
- Sells **exclusivity + seriousness** ("exceptional founders", "we read every application").
- Numbers do the bragging (1,450 → 24) — **selective, earned** proof, not hype.
- No exclamation marks, no emoji, minimal punctuation flourish.

## 6. Translating to CloutSync (what the draft does)
Same *theme*, different *content*. The draft keeps CloutSync's real data (creator-growth
studio, stats, brands, creators, 4-step process, contact) but re-skins it in the Forge system:
- Lowercase **cloutsync** wordmark over a dark cinematic hero (built with CSS gradients/grain,
  not a copied image), single emerald accent.
- Poetic hero line in Cormorant (e.g. *"post at sunrise. close by midnight. compound your
  clout."*).
- Education brands rendered as a **partner marquee** (Forge's signature strip).
- Stats band (1,450-style selective proof: reach, brands, revenue, 4X).
- Editorial process + creator list, minimal black footer.
- Scroll reveals, pinned hero, hover lifts, reduced-motion support.

## Files
- `forge/README.md` — this decode.
- `src/forge.css` — tokens, fonts, animations (runnable).
- `src/components/forge/LandingForge.tsx` — the dark/premium CloutSync draft.
- Toggle: append **`#forge`** to the local URL for this theme; **`#within`** (or no hash) for
  the warm revamp. A small switch is shown bottom-right in dev.
