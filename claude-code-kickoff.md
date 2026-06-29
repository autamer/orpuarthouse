# Claude Code Kickoff — Orpu Art House Landing Page

## Prerequisites (do these first)

1. **Node.js 20 LTS + npm** installed. Check: `node -v` (want v20.x).
2. **Open this folder in Claude Code.** `cd` into the project root so Claude Code auto-loads
   `CLAUDE.md`.
3. **Files already in place** (✓): `CLAUDE.md`, `orpuarthouse.md`,
   `landing-page-asset-manifest.md`, `phase2-architecture.md`, and `media/` (50 renamed assets).
4. **Install the design skills** into the project's `.claude/skills/`:
   - Impeccable: download the Claude Code bundle from https://impeccable.style and extract,
     **or** `npx skills add https://github.com/pbakaus/impeccable`
   - Emil Kowalski (motion): `npx skills add https://github.com/emilkowalski/skills`
   - Restart Claude Code; confirm with `/skills`.
5. **(Optional, for deploy)** A free **Vercel** account + `npm i -g vercel`.
6. **(Optional)** A real **photo of Poojitha** for the About section → `media/poojitha-portrait.jpg`.

## The prompt to paste into Claude Code

```
Read CLAUDE.md, orpuarthouse.md, landing-page-asset-manifest.md, and phase2-architecture.md
in full before doing anything — they are the source of truth for this project.

Build Phase 1: a single-page marketing site for Orpu Art House (Poojitha, fashion illustrator).
Goal: convert visitors into students; every CTA links to https://ig.me/m/orpuarthouse and
prompts the visitor to send "CLASSES". No forms, no database in v1.

Stack: Next.js (App Router) deployed as a STANDARD app on Vercel. Do NOT use
output: 'export' (locked static export) — keep the app server-capable so the Phase-2 paid-class
layer (auth, payments, gated video) can be added later without a rebuild. Pages should still be
statically rendered for speed. Keep any future auth/payment/video access behind thin wrappers in
lib/ so providers stay swappable. Do not build Phase 2 now — just don't block it.

Use the Impeccable skill (brand register — landing page, distinctiveness is the bar) for the
design system, and Emil Kowalski (emil-design-eng) for motion (hero loop, gallery hovers,
before→after transitions, reveals). Follow Impeccable's anti-slop rules.

Build the sections in the order in orpuarthouse.md, using the exact files from the
SECTION → FILE MAP in landing-page-asset-manifest.md. Copy media/ into public/media/.

Hard rules (from CLAUDE.md):
- The 19 videos are free teaser/marketing clips, not paid lessons. Muted by default:
  muted, playsInline, loop, lazy-loaded, with a poster image. Long *-process-full.mp4 clips
  are click-to-play only, never autoplay.
- Do NOT wire any paid-video or YouTube-private embedding — paid lessons are Phase 2.
- Artwork is the only loud element. Editorial/gallery look: white space, charcoal text, the
  red from her work as the single accent, elegant serif headers.
- Leave the class offer (topics/format/level/price/regions) as clearly marked placeholders.

Plan first: scaffold the Next.js app (standard, not static export), generate poster images
(first frame) for every video, then build section components one at a time. After building,
run Impeccable critique and polish, then give me npm run dev to preview.
```

## After it builds
- Preview: `npm run dev` → open the local URL.
- Ship: `npm run build`, then `vercel --prod` (or push to the connected Vercel project).
- Fill in the class offer placeholders once Poojitha confirms them.
- When classes are ready, follow `phase2-architecture.md` to add auth, payments (MoR), and
  signed-URL video — all additive to this same app.
