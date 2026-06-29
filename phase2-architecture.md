# phase2-architecture.md — Paid Online Classes (future)

Reference for when the class structure + lesson videos are ready. **Do not build this in
Phase 1.** The job in Phase 1 is only to not block it (see CLAUDE.md "Future-proofing").

## What Phase 2 adds
Students pick the **topics** they want, **pay by region** (India + West), and watch **gated
video lessons**. Four new capabilities on top of the same Next.js app:
1. **Accounts / auth** — so a purchase unlocks the right content.
2. **Payments / checkout** — per-topic, region-aware, tax-compliant.
3. **Gated video playback** — paid lessons only play for buyers.
4. **Course/topic data model** — topics, prices, purchases, entitlements.

## Target architecture (all additive to today's stack)
| Layer | Choice | Notes |
| --- | --- | --- |
| Framework / host | **Next.js (App Router) on Vercel** | Same as Phase 1. Must NOT be `output:'export'`. |
| Auth | **Clerk** or **Auth.js** | Add when accounts are needed. |
| Database | **Postgres** (Supabase or Neon) | Stores topics, prices, purchases, entitlements. |
| Payments | **Merchant of Record** (Paddle, or Stripe Managed Payments / Lemon Squeezy) | Region-based methods + global tax handled for you. |
| Video | **Mux**, **Cloudflare Stream**, or **Bunny Stream** | Signed, expiring URLs + domain lock. |

Keep auth/payment/video behind thin wrappers in `lib/` so any provider can be swapped.

## Payments: region-based options (India + West)
The requirement "show payment options based on user region" is solved cleanly two ways:

**Recommended — Merchant of Record (MoR).** Paddle / Lemon Squeezy (now Stripe Managed
Payments) become the legal seller: they auto-display local payment methods by region AND
collect/remit tax (EU VAT, US sales tax, India GST), absorbing chargeback + compliance burden.
Best for a solo creator selling worldwide. Cost ≈ **5% + 50¢** per sale.

**Alternative — direct dual integration.** **Stripe** for international cards + **Razorpay**
for India (UPI/netbanking/INR). Lower fees (~2.9% + 30¢ / Razorpay domestic), but two payment
flows to build and you handle tax filing in each region yourself. Graduate to this only if
volume makes the fee savings worth the engineering + compliance.

Start with MoR; revisit direct integration at scale.

## Video: why not YouTube for paid lessons
- YouTube **Private** can't be embedded on a site at all.
- YouTube **Unlisted** is just a hidden link — shareable, so no protection for paid content.
- Use **signed, expiring URLs + domain restriction** so each buyer gets a temporary token tied
  to their purchase. Mux has a generous free tier; Bunny ≈ $5–15/mo; Cloudflare Stream is
  cheapest at scale. Free *teaser* clips can stay on the site or unlisted YouTube.

## Suggested sequence
1. **Now:** ship Phase 1 marketing page (standard Next.js, no DB). Validate demand via DM.
2. Lock the class **offer** (topics, format, per-topic price, regions).
3. Add **auth + DB** (Clerk + Supabase) and a simple topic/purchase model.
4. Wire **MoR checkout**; gate content by entitlement.
5. Move paid lessons to a **signed-URL video host**; keep teasers as-is.
6. Optimize later (direct Stripe+Razorpay) only if volume justifies it.

## Sources (verified Jun 2026 — confirm current pricing before committing)
- Paddle vs Lemon Squeezy (MoR 2026): https://contracollective.com/blog/paddle-vs-lemon-squeezy-merchant-of-record-digital-commerce-2026
- Stripe vs Paddle vs Lemon Squeezy fees (2026): https://www.globalsolo.global/blog/stripe-vs-paddle-vs-lemon-squeezy-2026
- Razorpay vs Stripe India (2026): https://triggerall.com/blog/razorpay-vs-stripe-india/
- Video hosting for courses (DRM + signed URLs): https://swarmify.com/blog/video-hosting-for-online-courses/
