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
- Email: Resend (contact form)
- Deployment: Vercel (auto-deploys on push to master)

## Pages
- / — Home
- /about — About
- /security — Security & Privacy (PDPO, cross-border compliance, data ownership, AWS infrastructure, links to framework)
- /contact — Contact form → chrisxue@novelship.com via Resend
- /blog — Blog listing with EN/ZH filter tabs (default: EN)
- /blog/[slug] — Dynamic article pages (fetched from Sanity, language toggle on V4 EN↔ZH)
- /data-protection-framework — Full 12-section data protection framework (v1)
- /data-protection-framework.pdf — Downloadable PDF version (generated via puppeteer from live page)

## Components
Navigation, Footer, Hero, USPCards, Dashboard, ProductsGrid, Presence, BlogFilter (client component — EN/ZH tabs)

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

## Current Issues (as of April 2026)
None — all resolved.

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

## Immediate Priorities (next session — 06/04/2026 afternoon)
1. Submit sitemap.xml in Google Search Console (manual step in GSC UI)
2. Verify GA4 is collecting data — check Realtime report in GA4 dashboard
3. Confirm 600 organic SMO metric — review GA4 data once sufficient collection period
4. Consider Article 6 for Stage 2 content pipeline
5. Stage 2 planning: multilingual assets (JP/KR landing pages), new B2B client onboarding

## SneakersLite — Verified Company Data (from CIP Presentation)

### Real Traction Metrics (as of CIP submission)
- Monthly Revenue: HK$122K (grew from 0 since May 2025)
- Monthly Authentication Volume: 3,100+
- Total Verified Items: 34,200+
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
- 潮盟 国际版 — Guangzhou's largest B2B sneaker seller

### Supported Brands
Current: Jordan, Nike, Adidas, YZY, New Balance
Upcoming: Puma, Vans, Converse, Saucony, HOKA, Salomon

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
- CIP (Incubation Program): Active — current Q1 evaluation period
- CIP focus: Generative AI for synthetic fake image training data

## Cyberport CIP Milestones

### Stage 1 (30/09/2025 – 29/03/2026) — Q1 Evaluation due next Wednesday
- Launch joint announcement via eDM and in-app push (25%) — DONE ✅
- Launch standalone website with self-hosted blog, minimum 5 posts (30%) — DONE ✅ sneakerslite.com live, 5 published EN articles + 1 ZH article
- Achieve 600 combined cumulative organic SMO (25%) — PENDING ⚠️ — GA4 installed 05/04/2026 (G-JJPC6FYVNM), awaiting data collection
- Hire Business Development Lead (10%) — DONE ✅ — contract location to confirm tomorrow
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
Stage 1 requires minimum 5 blog post URLs as supporting proof.
Current published articles:
1. sneakerslite.com/blog/digital-authentication-marketplaces
2. sneakerslite.com/blog/air-jordan-1-authentication-guide
3. sneakerslite.com/blog/authentication-sneaker-resale-value
4. sneakerslite.com/blog/authentication-compliance-asia
5. sneakerslite.com/blog/build-vs-buy-authentication
6. sneakerslite.com/blog/authentication-compliance-asia-zh (ZH version)
