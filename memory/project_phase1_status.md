---
name: project-phase1-status
description: Orpu Art House Phase 1 landing page — build status and key decisions
metadata:
  type: project
---

Phase 1 landing page is built and running locally at localhost:3001. All 12 sections complete.

**Key decisions made:**
- Hero video: `grey-gown-process-full.mp4` — hand drawing gown, sunlit paper, `objectPosition: center 25%` to frame bodice + pencil. Chosen over full-figure clips because those had ghost-like mid-sketch faces.
- Brand red: `#aa3536` — sampled from `render-red-cape-01.jpg`, not hardcoded.
- Fonts: Cormorant Garamond (headings) + DM Sans (body). Inter banned.
- Before→After: side-by-side blur-reveal on hover, NOT a drag/wipe slider (assets have different crops/framing).
- Gallery: single grid, no bucket filter.
- FinalCTA: charcoal background with red button — NOT solid red section (accent restraint rule).

**Why:** Phase 1 goal is DM conversion. Every CTA → https://ig.me/m/orpuarthouse, prompt "CLASSES".

**How to apply:** Phase 2 adds auth + payments + gated video. lib/video.ts, lib/auth.ts, lib/payments.ts are stub wrappers ready to fill in.
