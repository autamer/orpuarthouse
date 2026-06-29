# Orpu Art House — Landing Page Asset Manifest

Account: @orpuarthouse — Poojitha, fashion illustrator
Goal: convert visitors into students. v1 CTA = Instagram DM (https://ig.me/m/orpuarthouse)
Inventory: 31 images + 19 videos. Medium: graphite + colored pencil.

All media lives in **`media/`** (move/copy to `public/media/` when the Next.js app is scaffolded).
Filenames are descriptive — use them directly in components.

> **These 19 videos are FREE marketing/teaser clips** (process time-lapses), not paid course
> content. They may live on the site or on unlisted YouTube (teasers only). **Paid Phase-2
> lesson videos are separate and NOT in this manifest** — they go to a signed-URL host
> (Mux / Cloudflare Stream / Bunny). See `phase2-architecture.md`.

---

## SECTION → FILE MAP (this is the one Claude Code should follow)

### 1. Hero (muted autoplay loop, <15s, poster = first frame)
- `media/red-gown-hero-loop.mp4` (9s) — primary
- fallback: `media/red-cape-loop.mp4` (6s)

### 2. Signature "watch it come alive" (click-to-play, NOT autoplay)
- `media/red-gown-process-full.mp4` (85s) — flagship
- alt: `media/red-gown-figure-full.mp4` (75s) or `media/ethnic-yellow-process-full.mp4` (91s)

### 3. Before → After (sketch/process → finished)
- Pair A (Ethnic):  `media/ethnic-yellow-process-full.mp4` → `media/ethnic-yellow-kurta-final.jpg`
- Pair B (Red cape):`media/red-cape-process-01.mp4` → `media/render-red-cape-01.jpg`
- Pair C (Red gown):`media/red-gown-sketch-to-color.mp4` → `media/red-gown-reveal-01.mp4`
- Pair D (Grey gown):`media/grey-gown-process-full.mp4` → `media/render-grey-gown-wip.jpg`
- Pair E (Black fit):`media/render-black-outfit-loop.mp4` → `media/render-black-outfit-01.jpg`

### 4. What you'll learn — 3 track tiles (short muted clips)
- Figure / croquis:      `media/croquis-sketching-process.mp4` (43s)
- Garment rendering/drape:`media/grey-gown-process-full.mp4` (82s)  [or red-gown-process-02.mp4, 18s]
- Ethnic-wear illustration:`media/ethnic-yellow-process-01.mp4` (26s)
- (bonus technique) texture:`media/texture-coloring-process.mp4` (43s)

### 5. Portfolio gallery (finished stills; hi-res first)
- `media/render-red-cape-01.jpg`, `media/render-red-cape-02.jpg`, `media/render-red-cape-03.jpg`
- `media/render-offshoulder-gown.jpg`  (showpiece, 3000px+)
- `media/ethnic-yellow-kurta-final.jpg`
- `media/render-black-outfit-01.jpg`, `media/render-black-jumpsuit.jpg`, `media/render-cream-gown.jpg`
- select croquis: `media/croquis-lineup-01.jpg`, `media/croquis-lineup-02.jpg`,
  `media/croquis-pose-studies.jpg`, `media/croquis-gown-pair.jpg`, `media/croquis-flowing-skirt.jpg`

### 6. About Poojitha
- working/portrait shot: `media/portrait-sunglasses.jpg` (or a real photo of her when available)

### 7. Beyond fashion (small range strip — keep minor)
- `media/portrait-sunglasses.jpg`, `media/stilllife-lamp-01.jpg`

### 8. Reveal/accent loops (optional, scattered)
- `media/red-cape-reveal-loop.mp4` (15s), `media/red-gown-reveal-02.mp4` (24s),
  `media/render-skin-detail-loop.mp4` (13s)

### Every CTA → `https://ig.me/m/orpuarthouse`  ("send CLASSES to start")

---

## BY BUCKET (full inventory)

**A — Croquis / figure sketching (graphite):**
croquis-coat-figure, croquis-figure-01, croquis-figure-notes, croquis-lineup-01, croquis-lineup-02,
croquis-trench-dress, croquis-trousers-figure, croquis-draped-dress, croquis-draped-figure,
croquis-couple, croquis-menswear-pair, croquis-gown-pair, croquis-silhouette, croquis-flowing-skirt,
croquis-cape-skirt, croquis-pose-studies, croquis-jumpsuit-figure, croquis-peplum-figure,
croquis-sketches-desk  | video: croquis-sketching-process, croquis-linework-process

**B — Garment rendering (colored pencil) — HERO material:**
render-red-cape-01/02/03, render-offshoulder-gown, render-black-outfit-01, render-black-jumpsuit,
render-cream-gown, render-grey-gown-wip  | video: red-gown-process-full, red-gown-figure-full,
red-gown-cape-process-full, red-cape-process-01, red-gown-process-02, red-gown-sketch-to-color,
red-gown-reveal-01, red-gown-reveal-02, red-gown-hero-loop, red-cape-loop, red-cape-reveal-loop,
grey-gown-process-full, render-black-outfit-loop, render-skin-detail-loop

**C — Ethnic / Indian wear — differentiator:**
ethnic-yellow-kurta-final  | video: ethnic-yellow-process-full, ethnic-yellow-process-01,
texture-coloring-process

**Off-core — Beyond fashion:** portrait-sunglasses, stilllife-lamp-01, stilllife-lamp-02

---

## TECH NOTES
- Autoplay loops: short (<15s), `muted playsInline loop`, lazy-load, poster image (first frame).
- Long clips (any *-process-full.mp4): click-to-play, NOT autoplay. Muted by default; optional unmute.
- All video muted by default. No music required for v1.
- Hi-res stills (render-red-cape-01/02/03, render-offshoulder-gown, render-grey-gown-wip) are
  3000px+ → safe for large/full-bleed. Most croquis are 960×1280 → grid only, not full-bleed.
