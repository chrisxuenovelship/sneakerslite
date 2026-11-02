# SneakersLite — Claude Code Context

## Project Overview
B2B marketing website for SneakersLite by Prime Fleet — an AI-powered sneaker 
authentication service operating in Hong Kong, China, and Singapore. Primary 
audience is businesses and retailers. Site drives leads via contact form and 
content marketing via blog.

**Live domain:** https://sneakerslite.com
**GitHub:** git@github.com:chrisxuenovelship/sneakerslite.git (master = production)
**Server path:** /www/wwwroot/sneakerslite (Zeabur, used for Claude Code management only)

## Tech Stack
- Framework: Next.js 14 (App Router) + TypeScript
- Styling: Tailwind CSS
- CMS: Sanity.io (blog articles, GROQ queries, ISR 30s revalidation)
- Email: Resend. `app/api/contact/route.ts` delivers leads to `CONTACT_TO` (default chrisxue@novelship.com) from `CONTACT_FROM` (default `onboarding@resend.dev`, which Resend only delivers to the account owner). `sneakerslite.com` is NOT verified in Resend yet — once DNS is added, set `CONTACT_FROM="SneakersLite <noreply@sneakerslite.com>"` in Vercel. Route returns 502 (never fake success) if send fails.
- Deployment: Vercel (auto-deploys on push to master)

## Pages
- / — Home
- /about — About
- /security — Security & Privacy (PDPO, cross-border compliance, data ownership, AWS infrastructure, links to framework)
- /contact — Localized form: name, work email, company, monthly volume band, subject (authentication/partnership/integration/support/other), message → /api/contact → Resend email with reply-to set to the lead.
- /pricing — Public tiers ($2.00/$1.30/$0.80 per result), slider calculator vs $4 human benchmark, enterprise CTA, FAQ. Competitors publish pricing too (Entrupy $139–$1,049/mo ≈ $4.20–$5.60/auth; CheckCheck from $6/item), checked 02/11/2026.
- /blog — Language tabs derived from available Sanity content; defaults to UI locale when available, otherwise the first available language
- /blog/[slug] — Sanity article pages with translation links derived from a shared `translationKey`
- /data-protection-framework — Full 12-section data protection framework (v1)
- /data-protection-framework.pdf — Downloadable PDF version (generated via puppeteer from live page)
- Locales LIVE since 02/11/2026: pages live under `app/[locale]/`; English URLs remain unprefixed (`/en/*` 308→unprefixed), Chinese/Japanese/Korean use `/zh`, `/ja`, `/ko`. hreflang + x-default on every page. The framework body and PDF remain English originals.

## Components
Navigation, Footer, Hero, USPCards, Dashboard, ProductsGrid, Presence, BlogFilter, ContactForm. UI strings are typed from `messages/en/*.json`, with matching `zh`, `ja`, and `ko` namespaces.

## Blog — Sanity CMS
Sanity project: wl0eb4zu | Dataset: production
Read token: stored in .env.local as SANITY_API_TOKEN (viewer permissions only)
Editor token: provided ad-hoc for write operations — not stored in .env (request from user when needed)

6 articles live in Sanity:
- V1: "The Future is Digital: How AI-Powered Authentication Protects Sneaker Marketplaces" — LIVE ✅ Rewritten April 2026. Clean B2B version, 29 blocks, ~980 words. Slug: digital-authentication-marketplaces
- V2: "The Air Jordan 1 Problem: Why It's the Hardest Authentication Test in the Market" — LIVE ✅ Rewritten April 2026. B2B reframe, 29 blocks, ~870 words. Slug: air-jordan-1-authentication-guide
- V3: "From $150 to $2,500: Why Authentication Is Everything in Sneaker Resale" — LIVE ✅ Rewritten April 2026. Market intelligence piece, 26 blocks, ~870 words. Slug: authentication-sneaker-resale-value
- V4-EN: "Authentication Is No Longer Optional: What New Consumer Protection Laws Mean for Sneaker Platforms in Asia" — LIVE ✅ Published April 2026. Compliance/legal-tech angle, 35 blocks, ~950 words. Slug: authentication-compliance-asia
- V4-ZH: "合规逻辑的底层演变：亚太监管新形势下球鞋平台的必然选择" — LIVE ✅ Published April 2026. Native Chinese B2B thought leadership version of V4. 27 blocks, ~1050 words. Slug: authentication-compliance-asia-zh
- V5: "Build vs Buy: Why Smart Marketplace Operators Are Outsourcing Authentication" — LIVE ✅ Published April 2026. Build vs buy financial analysis, real unit economics ($4 vs $0.80, 80% saving), 37 blocks, ~1,050 words. Slug: build-vs-buy-authentication

**Note on stats:** Accuracy figures in articles (96.9%, 99.6%, 100K+ pairs, etc.) 
are placeholders — not validated data. Do not treat as factual. Replace with 
real data before final publish.

## Current Status (as of 02/11/2026)
- Stage 1 closed. Unmet Stage 1 items (600 organic SMO) are irrelevant going forward.
- User-reported client wins: 1 Chinese client (closed just before Stage 1 review) + 1 Korean partner (closed September 2026). Supporting documents are planned for Cyberport management over 31 October–1 November. Eligibility against the Stage 2 reporting window remains for management to confirm.
- Stage 2 (semi-annual) evaluation due October 2026 — in progress.
- 02/11/2026: A6/A7/A8 published to Sanity (9 articles live). Backfill applied. Locale cutover pushed as c58ea05 → Vercel auto-deployed in ~140s (push→deploy mechanism now verified). Sitemap is ISR (30s), 30 URLs. JA/KO/ZH copy shipped WITHOUT native review — post-launch copy fixes are the open item for milestone 5.
- Pending from user: Stage 2 #2 brand/model list (beyond ASICS/Converse, already confirmed), #3 revenue figure, #4 Sales & Partnership Framework doc.
- 02/11/2026 site work shipped (5612073…ed6ddea): contact form delivers leads (was console.log only since April); /pricing; How-it-works section on home; article CTA card + related articles; blog hero restyled; legacy article authors normalised to "SneakersLite by Prime Fleet" (were "Novelship…"); About milestones corrected to CCMF (May 2025) + CIP — the previous "2025 Series A Funding" was FALSE (user-confirmed); footer legal line "operated by Prime Fleet, a company incorporated in Hong Kong" + Privacy link → /data-protection-framework + Pricing link. Not done: social proof section (audit #3 — needs partner-approved quote and user OK on publishing CIP traction figures).
- 02/11/2026 later (a7cbbdd, f9d4d59): home gained a metrics strip (34,200+ / 3,100+ per month / 71% 60-day retention — CIP submission figures, user to supply updated ones), two partner testimonials in partner voice (Operations Lead, Novelship — approved by Novelship COO; Head of Operations, Silver Star), Presence rebuilt with South Korea and one linked article per country, brand cards now link to per-brand guides. 11 further articles PUBLISHED to Sanity (20 live), all backdated inside the Stage 2 window: country series C1 Hong Kong (09 Apr), C3 Singapore (04 Jun — names Novelship as partner, user-approved), C2 China EN+ZH pair (16 Jul, translationKey `china-b2b-sneaker-authentication`), C4 South Korea (06 Aug); brand series Nike (23 Apr), Air Jordan (28 May), adidas (02 Jul), New Balance (30 Jul), ASICS (03 Sep), Converse (17 Sep). Brand articles state coverage is model-level and "disclosed on request" — section 4 of each is to be firmed up once the user supplies the per-brand model list (Stage 2 #2); user will also add "for operators" comments. Drafts in `drafts/B*-*.md` and `drafts/C*-*.md`.
- Resend: `sneakerslite.com` DNS is on Vercel nameservers (ns1/ns2.vercel-dns.com), not Namecheap — Resend DKIM/SPF/MX records must be added in Vercel → Domains → sneakerslite.com → DNS Records. Domain still unverified; sender remains onboarding@resend.dev until `CONTACT_FROM` is set in Vercel env after verification.
- 02/11/2026 18:43 SGT: HOST TOOK OVER editing of the Slides and the Framework Doc (do not push to either from this session). Handover: `drafts/HANDOVER-deck.md`. Earlier: Chris's PPTX template imported via `deck import` → Slides id `1cdqkFHIBU3-8dv_mz8KNPkw3rpc5cwnhL2IxJF5HrRU` in shared drive `0AN9_YLI39K7TUk9PVA` ("Cyberport review deck"; `deck setup` done). Thread ts `1793614310.510929`. Pass 1 applied (87 requests): slides p1–p4, p6–p8, p10–p11, p13 drafted; `[PENDING — 6pm figures]` markers for traction/revenue; placeholders for team size, HK office address, BD Lead name, third brand + model list. Untouched sample slides: p9 (failure), p14 (recognition), p15 (Cyberport engagement). Proof images not yet added. Generator scripts were throwaway (/tmp). Sales & Partnership Framework Doc created by the SA in the shared drive: id `1sshkU4vZUc9pnPBDaJz6IZB8Hj8S8_WS6NSCmNmtgc0` (Chris asked for it in-thread 18:16; includes Appendix A pricing matrix, Appendix B term-sheet templates). Source `drafts/sales-partnership-framework-v1.md`; re-push with `~/.venvs/gdocs/bin/python scripts/gdoc-push.py <docId> <md>` once Chris shares a Doc with the SA as Editor (SA cannot own files: Drive quota 0).

## Workstream (started 30/10/2026)
1. Three more articles, dated May / June / August 2026, each proposed → approved → published:
   - A6 (14 May 2026): "Beyond Jordan and Nike: What It Actually Takes to Authenticate a New Brand" — `drafts/A6-authenticating-new-sneaker-brands.md`, 37 blocks. Dry-run clean. Publish approved 02/11/2026 (user reviews live).
   - A7 (18 Jun 2026): "From Contract to First Result: An Integration Playbook for Marketplace Authentication" — `drafts/A7-integration-onboarding-playbook.md`, 47 blocks. Dry-run clean. Publish approved 02/11/2026.
   - A8 (20 Aug 2026): "Korea and Japan: Why Asia's Most Demanding Resale Markets Need Authentication Infrastructure, Not Just Inspectors" — `drafts/A8-korea-japan-resale-authentication.md`, 30 blocks. Dry-run clean. Publish approved 02/11/2026. Deliberately contains no market-size figures; does not mention the Korean partner (closed after the editorial date).
   - All three PUBLISHED 02/11/2026 and live. Editor token now parked in `.env.local` as `SANITY_EDITOR_TOKEN`.
2. Multilingual — SHIPPED 02/11/2026. JA/KO/ZH copy is assistant-drafted; native review still owed, applied as post-launch edits to `messages/<locale>/*.json`. No JA/KO article bodies exist; blog language tabs show only EN/中文 until one is published.
3. CMS migration: backfill applied 02/11/2026 (6 docs patched). Script retained for future legacy docs; `--dry-run` previews.
4. Publishing: `node --env-file=.env.local scripts/sanity-publish.mjs publish drafts/<file>.md --dry-run` previews Portable Text. Drop `--dry-run` to write. Token lives only in `.env.local` (gitignored) as `SANITY_EDITOR_TOKEN`. Articles appear on the site within 30s, no deploy needed.
5. Deployment: `git push origin master` → Vercel builds and goes live in ~2–3 min (verified 02/11/2026). GitHub SSH auth works from this server. Vercel CLI has no auth and is not needed.
6. Cyberport review deck (host-built, 02/11/2026): Chris drops PPT/Excel in his Slack DM with Ops Improver → lands in `inbox/` within a minute (a line is typed on this screen) → `deck import` makes Google Slides/Sheets in the shared drive "Cyberport review deck" → edit via `deck slides <id> --batch req.json` → when Chris approves in the thread, `deck export` + `deck send`. Full guide: `docs/DECK-PIPELINE.md`. Replies to Chris only via `deck say` (signed, through the desk).

## Environment Variables
All set correctly in Vercel as of 04/04/2026:
- NEXT_PUBLIC_SANITY_PROJECT_ID = wl0eb4zu
- NEXT_PUBLIC_SANITY_DATASET = production
- SANITY_API_TOKEN (read-only viewer token — set on Production + Development)
- RESEND_API_KEY (fixed 04/04 — was previously stored as variable name instead of value)

## Google Analytics & Search Console
- GA4 live: measurement ID G-JJPC6FYVNM, installed 05/04/2026 via Next.js Script component (afterInteractive)
- Google Search Console: verification code 8IqWKXmUdiw8fmv6HjnGXv3_RvaRp6-jXTqNIIIixOs added to layout.tsx metadata
- Sitemap: app/sitemap.ts generates dynamic sitemap at sneakerslite.com/sitemap.xml (static pages + Sanity blog slugs)
- Next step: submit sitemap URL in Google Search Console UI

## Previous Agent (Openclaw) — Fully Revoked
All access removed: GitHub classic token deleted, Sanity token revoked, Vercel 
token revoked. Ignore any path references to /root/.openclaw/ in legacy .md files. 
The 19 legacy .md files in repo root are documentation bloat — treat INDEX.md as 
the most reliable reference if needed, otherwise rely on this context.md.

## Completed Session 1 (04/04/2026)
- Deleted "draft-next-article" stub from Sanity via Mutations API
- Fixed RESEND_API_KEY misconfiguration in Vercel
- Created V4-EN + V4-ZH articles in Sanity (compliance/legal-tech, EN + native Chinese)
- Created V5 article in Sanity (build vs buy, real unit economics)
- Built language toggle on article pages (V4 EN↔ZH, pill-style button)
- Built EN/ZH filter tabs on blog listing page (BlogFilter client component)
- Added GA4 + Search Console placeholders to layout.tsx
- Rewrote /security page: cross-border compliance, data ownership, standards-aligned framing
- Created /data-protection-framework page (12-section framework)
- Generated PDF via puppeteer from live page, with nav/footer hidden via print CSS
- Updated context.md with verified company data and CIP milestones

## Completed Session 2 (05/04/2026)
- Replaced GA4 placeholder with real measurement ID G-JJPC6FYVNM in layout.tsx
- Replaced Google Search Console verification placeholder with real code 8IqWKXmUdiw8fmv6HjnGXv3_RvaRp6-jXTqNIIIixOs
- Created app/sitemap.ts — dynamic sitemap covering all static pages + all Sanity blog slugs
- Deployed all changes to production (3 deploys total)
- Sitemap live at sneakerslite.com/sitemap.xml — ready for Google Search Console submission

## Immediate Priorities
See "Workstream (started 30/10/2026)" above.

## SneakersLite — Verified Company Data (from CIP Presentation)

### Real Traction Metrics (as of CIP submission)
- Revenue: HK$122K was CUMULATIVE as of CIP submission (April 2026), not monthly — Stage 1 actual per the P&L is HK$125,615 for 30/9/2025–29/3/2026. Stage 2 actual HK$185,784; cumulative HK$311,399 (P&L received 02/11/2026). Pricing is USD; Stage 2 revenue ÷ USD 0.80 implies ≈5,000 authentications/month average.
- Monthly Authentication Volume: 6,800+ (Oct 2026); Stage 1 22,530 / Stage 2 33,773 authentications; 200 free per partner per month; all clients at USD 0.80
- Total items authenticated since launch: 120,000+ (Chris, 03/11/2026); site metrics strip updated
- 60-Day Retention Rate: 71%

### Pricing Model
B2B Authentication (pay-per-result):
- STANDARD: $2.00/result (below 1,000/month)
- PLUS: $1.30/result (1,001–2,000/month)
- PRO: $0.80/result (above 2,000/month)
- Human authentication equivalent: $4.00/result
- SneakersLite saving vs human: 80% at PRO tier
- SneakersLite COGS: $0.24/result

B2C via Partners (affiliate):
- STANDARD: 15% on profit, min $15 USD
- ADVANCED: 10% on profit, min $12 USD

### Technology Stack (verified)
- Image Standardisation: OpenCV, TensorFlow, Google Vision API, CNN, AI Pose
- Visual Feature Analysis: PyTorch, Keras, Google Cloud AutoML Vision, scikit-image (Color, Texture, Shape/Ratio)
- Tag Label Authentication: Tesseract OCR (Barcode, QR, Typography)
- Cloud: AWS + Heroku
- Learning: Feedback and reinforcement learning loop

### Existing Partners
- Novelship — largest SEA B2C sneaker marketplace
- 潮盟 国际版 (legal entity Dong Yi Hai Wai) — Guangzhou B2B sneaker seller; pre-incubation client
- 佳超 — mainland China B2B client, closed Q2 2026 (Stage 2 new client #1; Chris corrected from Q3 on 03/11)
- Silver Star — South Korean sneaker 3PL (processes + authenticates shoes for sellers exporting from Korea), closed Sept 2026 (Stage 2 new client #2). Segment C, not a platform.

### Supported Brands
Current: Jordan, Nike, Adidas, YZY, New Balance, ASICS, Converse (ASICS + Converse confirmed by user 02/11/2026)
Upcoming: Puma, Vans, Saucony, HOKA, Salomon
Partner names (Novelship, 潮盟) MUST NOT appear on the site or in articles — no permission yet (user, 02/11/2026). Testimonial quote allowed once approved by the partner.

### Competitors
- Entrupy (machine-heavy, single-segment)
- POIZON (mixed, integrated)
- FakeEducation (human-based, single-segment)
- CheckCheck (human-based, integrated)
- SneakersLite white space: machine-heavy + fully integrated B2B & B2C

### GTM Phases
- Phase 1 (0–6m): HK$122K/month — HK B2B clients (CHAO MENG, MXC, XIE DUO DUO)
- Phase 2 (7–18m): HK$238K/month — Taiwan & China expansion, B2C activation
- Phase 3 (19–24m): HK$528K+/month — Full APAC scale, Western markets

### Team
- Chris Xue — CEO/Founder (built Novelship, raised $23M, 12 markets in 3 years)
- Ma Ming — Product Advisor (Meta, ByteDance)
- Aron Leung — Corporate Advisor (20+ years CPA, M&A, RSM Hong Kong)

### Cyberport Status
- CCMF (Creative Micro Fund): Completed May 2025
- CIP (Incubation Program): Active — Stage 2 semi-annual evaluation preparation
- CIP focus: Generative AI for synthetic fake image training data

## Cyberport CIP Milestones

### Stage 1 (30/09/2025 – 29/03/2026) — Closed; historical record only
- Launch joint announcement via eDM and in-app push (25%) — DONE ✅
- Launch standalone website with self-hosted blog, minimum 5 posts (30%) — DONE ✅ sneakerslite.com live, 5 published EN articles + 1 ZH article
- Achieve 600 combined cumulative organic SMO (25%) — not completed at Stage 1 close; no carry-forward action per user
- Hire Business Development Lead (10%) — recorded as completed in April
- Complete Data Protection Framework v1 (10%) — DONE ✅

### Data Protection Framework v1 — COMPLETE ✅
- Live page: sneakerslite.com/data-protection-framework
- Downloadable PDF: sneakerslite.com/data-protection-framework.pdf
- Security page updated with link to framework
- 12 sections covering: scope, PDPO/PIPL/DSL/PDPA compliance, data classification, data flows, retention schedule, security measures, cross-border transfer policy, data subject rights, breach notification, third-party processors, DSAR procedure, review schedule

### Stage 2 (30/03/2026 – 29/09/2026) — Q2 Evaluation due October 2026
- Onboard 2 new B2B clients (30%)
- Expand authentication to 3 new brands, 15 new models (25%)
- Achieve HKD 250,000 cumulative revenue by end of Stage 2 (25%)
- Establish Sales & Partnership Framework (10%)
- Develop multilingual expansion assets — Japanese or Korean landing pages (10%)

### Blog milestone status
Historical Stage 1 minimum-five-post requirement is closed. Published URLs retained for reference:
Current published articles:
1. sneakerslite.com/blog/digital-authentication-marketplaces
2. sneakerslite.com/blog/air-jordan-1-authentication-guide
3. sneakerslite.com/blog/authentication-sneaker-resale-value
4. sneakerslite.com/blog/authentication-compliance-asia
5. sneakerslite.com/blog/build-vs-buy-authentication
6. sneakerslite.com/blog/authentication-compliance-asia-zh (ZH version)
