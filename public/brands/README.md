# Brand logos — drop them here

The "trusted by leading education brands" marquee on the Forge landing page loads
logos from THIS folder (`public/brands/`). Until a file exists, the site gracefully
shows the brand name as text instead (so nothing looks broken).

## Requirements for each logo
- Format: **SVG preferred** (crispest), or transparent **PNG** (min ~400px wide).
- Color: **white / monochrome on transparent background** works best — the theme is
  dark and logos are auto-normalized to white. (Colored logos still work but may look
  flat once whitened; supplying white/mono versions gives the cleanest result.)
- Trim surrounding whitespace so all logos optically match in size.

## Exact filenames the code expects
Place files with these names (all lowercase, hyphenated):

| Brand | Filename |
|-------|----------|
| Physics Wallah | `physics-wallah.svg` |
| Newton School of Technology | `newton-school-of-technology.svg` |
| Masai School | `masai-school.svg` |
| College Vidya | `college-vidya.svg` |
| Rishihood University | `rishihood-university.svg` |
| Polaris School of Technology | `polaris-school-of-technology.svg` |
| Vedam School of Technology | `vedam-school-of-technology.svg` |
| Mirai School of Technology | `mirai-school-of-technology.svg` |
| CGC Mohali | `cgc-mohali.svg` |
| Zenith School of AI | `zenith-school-of-ai.svg` |

## Using PNG instead of SVG?
If a logo is only available as PNG, name it the same but with `.png` and tell me — I'll
switch that entry's extension in `src/components/forge/LandingForge.tsx` (the `brands`
array). Or just give me the folder of logos and I'll wire the exact filenames for you.
