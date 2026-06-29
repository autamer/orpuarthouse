# CLAUDE.md — Orpu Art House

Operating manual for this project. Read `orpuarthouse.md` for brand/content context,
`landing-page-asset-manifest.md` for which asset goes where, and `phase2-architecture.md`
for the future paid-classes architecture (don't build it yet — just don't block it).

## What this is
**Phase 1:** a single-page marketing site for **Poojitha / Orpu Art House** (fashion
illustrator). Goal: convert visitors into students. v1 action = message her on Instagram.
**Phase 2 (later):** the same site grows into a paid online class platform — students pick
topics, pay by region, and watch gated video lessons. Build Phase 1 so Phase 2 bolts on
without a rebuild.

## Stack & deploy
- **Next.js (App Router)** deployed as a **standard app on Vercel**.
- **Do NOT use `output: 'export'` (locked static export).** Static export can't run server
  code, so it would block the future login/checkout/gated-video layer. Use normal Next.js —
  pages are still statically rendered for speed, but server routes stay available.
- **No database / no auth in v1** (nothing to store yet). The app should be structured so
  these are additive later (see `phase2-architecture.md`).

## Commands
- `npm run dev` — local dev
- `npm run build` — production build
- `npm run lint` — lint
- Deploy: push to the connected Vercel project (or `vercel --prod`).

## Design skills to use
- **Impeccable** (`/impeccable`) — primary design system. Use the **brand register**
  (landing/marketing = distinctiveness is the bar). Run `critique` + `polish` before shipping.
- **Emil Kowalski (emil-design-eng)** — motion: hero loop, gallery hovers, before→after
  transitions, reveals. Respect Impeccable's anti-slop rules. No generic SaaS look.

## Project structure (target)
```
app/                # Next.js App Router pages (server-capable, not static-export)
components/         # Hero, SignatureVideo, BeforeAfter, Tracks, Gallery, About, FinalCTA, Footer
lib/                # thin wrappers for future auth/payments/video (keep providers swappable)
public/media/       # her images + videos (copy from /media), per the manifest
CLAUDE.md  orpuarthouse.md  landing-page-asset-manifest.md  phase2-architecture.md
```

## Asset & video rules (important)
- **All on-page video is MUTED by default.** `muted playsInline loop` for autoplay loops.
- Autoplay loops: **short (<15s), lazy-loaded, with a poster image** (first frame).
- Long `*-process-full.mp4` clips = **click-to-play only**, never autoplay.
- The 19 videos in `/media` are **marketing/teaser clips** (process footage), NOT paid lessons.
  Host these on the site (or unlisted YouTube is acceptable for free teasers only).
- **Paid lesson videos (Phase 2) must NOT use YouTube private/unlisted.** They go to a
  signed-URL host (Mux / Cloudflare Stream / Bunny) — see `phase2-architecture.md`.
- File → section mapping lives in `landing-page-asset-manifest.md` (single source of truth).

## Conversion rule (v1)
- **Every CTA links to `https://ig.me/m/orpuarthouse`.** No forms, no DB in v1.
- Encourage the script: visitor sends **"CLASSES"** to start.

## Future-proofing — don't paint into a corner
- Standard Next.js on Vercel (above), so auth/DB/payments are additive.
- Keep any future auth/payment/video access behind thin wrappers in `lib/` so providers
  can be swapped (e.g., Merchant-of-Record for global region-based payments).
- Don't hardcode a single payment provider or currency into UI.
- Don't embed paid videos from unlisted YouTube.

## Don'ts
- Don't let the UI compete with the artwork — the art is the only loud element.
- Don't add localStorage/sessionStorage of personal data.
- Don't autoplay long videos or anything with sound.
- Don't ship the generic Inter-font / purple-gradient / card-in-card look.
- Don't lock the build to `output: 'export'`.

## Status / open items
- Class **offer** (topics, format, level, price, regions) is TBD — leave clearly marked
  placeholders in "What you'll learn" / Offer so it slots in later without a redesign.
