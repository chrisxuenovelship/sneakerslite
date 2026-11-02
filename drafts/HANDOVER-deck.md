# Handover — Cyberport Stage 2 deck and Sales & Partnership Framework Doc

Written 02/11/2026 ~18:45 SGT by the sneakerslite session for the host, who takes over editing of both Google files from this point. The sneakerslite session keeps the website (sneakerslite.com repo) and nothing else here.

## Files

| Item | ID / location |
|---|---|
| Slides (progress review deck) | `1cdqkFHIBU3-8dv_mz8KNPkw3rpc5cwnhL2IxJF5HrRU` — https://docs.google.com/presentation/d/1cdqkFHIBU3-8dv_mz8KNPkw3rpc5cwnhL2IxJF5HrRU/edit |
| Framework Doc | `1sshkU4vZUc9pnPBDaJz6IZB8Hj8S8_WS6NSCmNmtgc0` — https://docs.google.com/document/d/1sshkU4vZUc9pnPBDaJz6IZB8Hj8S8_WS6NSCmNmtgc0/edit |
| Shared drive | `0AN9_YLI39K7TUk9PVA` "Cyberport review deck" (`deck setup` already done) |
| Slack thread | Ops Improver DM `D0C4F2KGVP1`, root ts `1793614310.510929` (Chris's PPTX drop, 18:11) |
| Source PPTX | `inbox/202611021811-_Template_ Progress Review PPT_V2 (17).pptx` (git-ignored) |
| Framework markdown source | `drafts/sales-partnership-framework-v1.md` (committed, master `9e0d7d3`+; §8 rewrite committed after) |
| Pusher used for the Doc | `scripts/gdoc-push.py` (markdown → Docs API; **replaces the whole body**, so do not run it after manual edits in the Doc) |
| SA key used directly | `/www/wwwroot/jira-ticket-sentry/google-sa-key.json` (`cpo-bot-sheets-reader@novelship-product.iam.gserviceaccount.com`); venv `~/.venvs/gdocs` has google-api-python-client |
| Deck edit generators | were throwaway at `/tmp/deck-pass1.py` → `/tmp/deck-req1.json`, `/tmp/deck-req2.json` (may still exist; nothing depends on them) |

## What Chris asked (verbatim or near-verbatim)

1. Chat, ~17:50: "Sales & Partnership framework, as a senior B2B sales head, advice how we craft this document and how do we use this document? **70% is for showing Cyberport to pass criteria first, 30% is for actual use after review this week so we can optimise for B2B clients leads generation and closing.**"
2. Chat: "Legal entity name is 'Primefleet Digital Hong Kong Limited'." (Applied to the website footer and used in the Doc title block and deck title.)
3. Chat: "I'll also be sharing a PPT file which I expect us to be able to convert into a Google slide to make edits to at the end of our progress update. This slide is used for presentation to Cyberport to complete our semi annual review."
4. Chat: "craft this on google doc. Utilise fail-reason's google service account to make edits and give me the draft for Sales & Partnership Framework today. I'll share in this order: 1. A google doc with service account email added with edit access; then 2. Excel via slack bot that shows financials, and finally 3. PPTX doc … via an empty Google Slide doc. Do we need hubspot still?" (Answered: no HubSpot; Google Sheet register until >50 open opportunities or a second salesperson — this is written into Doc §10.)
5. Slack drop 18:11 (with the PPTX): "I need you to pass a file to /www/wwwroot/sneakerslite and upload it on shared folder 0AN9_YLI39K7TUk9PVA. The goal is to create a Google slide based on the PPTX template and make edits to it via the service account at direction and instruction of the sneakerslite session."
6. Slack reply 18:16: "Please go ahead and create a Google Doc also so the sneakerslite session can create Sales & Partnership Framework with **Documented sales playbook; finalized pricing matrix; partnership agreement templates**." (All three are in the Doc: §8, Appendix A, Appendix B.)
7. Chat, after the ELI12 explanation: "The actual sales process is very different, but we must understand that in their eyes as reviewer …" (cut off) — confirmed intent: the Doc is written for the reviewer; the real motion is founder-led relationship deals. He then asked: "for some parts like how do we take on call, I want you to **brainstorm and role play to come up with review-passing kind** for us." → Doc §8 rewritten with call types, discovery structure, question bank, scorecard, objection matrix, two role-plays (Singapore marketplace discovery; Guangzhou data-residency objection), closing rules. Pushed to the Doc at ~18:40 before the takeover notice.
8. Figures: "Traction figure will be shared at 6pm SGT, via fail-reason session slack bot. Revenue inside too." Not yet received as of this handover (no Excel in `inbox/`).

Standing constraints from Chris (apply to the deck as well as the site): never name partners Novelship / 潮盟 / Silver Star **on the public website or in articles** except the approved testimonial attributions; the Doc and the deck are internal/Cyberport-facing and **may** name them (the CIP presentation already did). Stats in old articles (96.9% etc.) are placeholders and must not be reused. Public contact is the form only.

## Slides — what is done (pass 1 + fix pass, 87 requests, template styling preserved)

| Slide | Object(s) | State |
|---|---|---|
| 1 (p1) | `p1_i129` | "Primefleet Digital Hong Kong Limited (SneakersLite) / Progress Review of Stage 2 / Date: **XX/11/2026**" — date placeholder |
| 2 (p2) | `p2_i134`, `p2_i135` | Business summary, 9 bullets. Contains `[PENDING — 6pm figures]` twice (traction line; cumulative revenue line) and `[model list — pending]` |
| 3 (p3) | `p3_i142`, `p3_i143` | Action plan for Stage 3, 7 bullets (commercial, GTM phase 2 Taiwan/China, coverage Puma/Vans/Saucony/HOKA/Salomon, product, R&D synthetic data, localisation, operations). No placeholders |
| 4 (p4) | table `p4_i149` row 2; table `p4_i150` cells (0,1) and (0,3) | Row 2: "SneakersLite / 2 / Oct 2026 / `[team size]` / `[HK team size]` / `[PENDING — 6pm figures]` / `[PENDING — 6pm figures]` / 0 / 0". Example row 1 left as in template. `[Hong Kong office address]`. Team list: "Chris Xue, CEO and Founder / `[Business Development Lead — name]` / Ma Ming, Product Advisor / Aron Leung, Corporate Advisor" |
| 5 (p5) | — | Untouched section divider |
| 6 (p6) | `p6_i160` title, `p6_i162` elaboration | QM1 "Onboard 2 new B2B clients (Weight: 30%)" — achieved 2 of 2; Client A mainland China (start of window), Client B South Korea platform (Sept 2026); supporting docs = agreements + invoices submitted to Cyberport mgmt 31 Oct–1 Nov. **Proof image box `p6_i163` still shows template stock photo** |
| 7 (p7) | `p7_i168`, `p7_i170` | QM2 "Expand to 3 new brands and 15 new models (Weight: 25%)" — `[third brand — confirm]`, `[list of 15+ models — pending]`. Only ASICS and Converse are confirmed by Chris; the milestone needs a third brand (YEEZY is listed separately from adidas in the CIP brand list — ask). **Proof image `p7_i171` = stock** |
| 8 (p8) | `p8_i176`, `p8_i178` | QM3 "HK$250,000 cumulative revenue by end of Stage 2 (Weight: 25%)" — `[PENDING — 6pm figures]`. **Proof image `p8_i179` = stock** |
| 9 (p9) | — | Template "Quantitative Milestone 4 / Elaboration of failure" **untouched**; all five real milestones are claimed as met, so probably delete — Chris not yet answered |
| 10 (p10) | `p10_i190`, `p10_i192` | Qual 1 "Establish Sales & Partnership Framework (Weight: 10%)" — elaboration summarises the Doc. **Proof image `p10_i193` = stock** (intended: screenshot of the Doc) |
| 11 (p11) | `p11_i198`, `p11_i200` | Qual 2 "Multilingual expansion assets: Japanese and Korean pages (Weight: 10%)" — elaboration done. **Proof image `p11_i201` = stock** (intended: /ja and /ko screenshots) |
| 12 (p12) | — | Untouched divider "Countable Marks under Tiered Assessment" |
| 13 (p13) | `p13_i211` | "Business Performance / Signed 2 business contracts with corporate customers (2 marks)". **Proof images `p13_i213`, `p13_i214` = stock** |
| 14 (p14) | — | Template "Industry Recognition" sample **untouched** — Chris not yet answered whether there is an award |
| 15 (p15) | — | Template "Cyberport Engagement" sample **untouched** — Chris not yet answered |

Title boxes on milestone slides were set to 26 pt to fit two lines; elaboration boxes 11–12 pt, one bullet per line (the template boxes carry a bullet style; blank lines render as stray bullets, so none are used).

Milestones and weights (from context.md, Stage 2 window 30/03/2026–29/09/2026, assessment Oct 2026): onboard 2 new B2B clients 30%; 3 new brands + 15 new models 25%; HKD 250,000 cumulative revenue 25%; Sales & Partnership Framework 10%; JA/KO landing pages 10%.

## Framework Doc — what is done

Full v1.0 pushed (title block, §1–11, Appendix A pricing matrix, Appendix B three term-sheet templates, §8 call playbook with two role-plays). Last push ~18:40 from the markdown source; Chris had not edited the Doc at that point (`deck links` showed last edit = SA). Verified: TITLE + 13 H1 + ~37 H2, 8 tables.

Placeholders in the Doc (all in §7 "Evidence of Operation"):

| Placeholder | Meaning | Fill from |
|---|---|---|
| `{{REVENUE_HKD}}` | Cumulative revenue in the Stage 2 window vs HKD 250,000 target | 6pm Excel |
| `{{REVENUE_AS_OF_DATE}}` | Date of the finance figure | 6pm Excel |
| `{{MONTHLY_VOLUME}}` | Authentications per month at window close | 6pm figures |
| `{{TOTAL_VERIFIED}}` | Items verified to date | 6pm figures |
| `{{RETENTION_60D}}` | 60-day retention | 6pm figures |
| `{{P01_DATE}}`, `{{P02_DATE}}` | Date the Singapore / Guangzhou partners went Live | Chris |
| `{{P03_SOURCE}}`, `{{P03_DATE}}` | Mainland China client (closed just before Stage 1 review) | Chris |
| `{{P05_*}}` (source, stage, date, next) | Hong Kong Segment C row (Silver Star assumed) | Chris |
| `{{P06_*}}` (segment, market, source, stage, date, next) | Any other open opportunity | Chris |

Terms in the Doc that are the session's proposals, not Chris's facts (he was told; adjust if he objects): pilot fee credited if signed within 30 days; 12-month launch-partner price lock; 10% first-year channel referral; review-path targets 24h/24h/12h by tier; ENTERPRISE above 10,000/month; ADVANCED affiliate minimum 500/month; 60/30-day termination notices; role-play numbers (2,800 items/month, SGD 4–5 baseline) are illustrative.

Chris's own framing to respect: the Doc describes a process for the reviewer; the real sales motion is founder-led relationship deals. He agreed §7.2 should be made truthful — if he supplies how the real deals moved, map them onto the six-stage vocabulary rather than inventing stages.

## Figures expected from the 6pm Excel and where each goes

Current values on the site and in the deck are the CIP-submission figures: 34,200+ items verified; 3,100+/month; 71% 60-day retention; monthly revenue HK$122K (context.md). Expected updates:

| Figure | Slides | Doc | Website (sneakerslite session will do) |
|---|---|---|---|
| Items verified to date | p2 traction bullet | §3 proof points; `{{TOTAL_VERIFIED}}` | `messages/*/home.json` → `metrics.items[0].value` |
| Authentications per month | p2 traction bullet | §3; `{{MONTHLY_VOLUME}}` | `metrics.items[1].value` |
| 60-day retention | p2 traction bullet | §3; `{{RETENTION_60D}}` | `metrics.items[2].value` |
| Monthly total revenue (HK$) | p4 table row 2 col 5 | — | — |
| Monthly local (HK) revenue (HK$) | p4 row 2 col 6 | — | — |
| Cumulative Stage 2 revenue (HK$) | p2 revenue bullet; p8 elaboration | `{{REVENUE_HKD}}`, `{{REVENUE_AS_OF_DATE}}` | — |
| Team size total / local | p4 row 2 cols 3–4 | — | — |
| Investment raised (US$) | p4 cols 7–8 currently "0" / "0" — confirm | — | — |

If the Excel changes the traction trio, please tell the sneakerslite session (or Chris will) so the website metrics strip matches the deck — consistency across deck, Doc, Excel and site is the main thing a reviewer can check.

## Promises made to Chris in the thread (all signed "SneakersLite · Cyberport deck")

1. 18:12 — Slides link; "will fill the Stage 2 content once the 6pm figures land and will not call anything final until you approve here."
2. 18:15 — Pass-1 status; listed every `[PENDING]`/placeholder; asked about slides 9/14/15; "Proof images come next once figures are in."
3. 18:18 — Doc link; "Section 7 has {{placeholders}} … I fill those from the 6pm sheet; the rest is ready for your review."

Open promises now transferred to the host: fill PENDING cells from the Excel; add proof screenshots to the "attach supporting proof" boxes (suggested assets: sneakerslite.com/ja and /ko, /pricing, home testimonials + metrics strip, blog listing with 20 articles, the Framework Doc first page, the contract/invoice scans Chris submitted to Cyberport); resolve slides 9/14/15; nothing is "approved" until Chris says so in the thread.

## Website items still with the sneakerslite session (for the host's awareness only)

Update the home metrics strip when figures arrive; patch brand articles §4 when Chris sends the per-brand model list; Resend DNS (records go in Vercel DNS, not Namecheap) then `CONTACT_FROM` env; JA/KO native copy review.

## UPDATE 18:58 SGT — Excel received (revenue only)

Chris dropped `inbox/202611021858-Cyberport Incubation Programme _ P_L Report of Incubatee_Primefleet.xlsx` (thread ts `1793617129.410629`) with: "Financials and Revenue for the sneakerslite session, **no need create in Google Drive. Pass to the session only.**" → not imported to Drive, by his instruction. Single sheet `P&L Report`, HK$:

| Line | Stage 1 forecast | Stage 1 actual (30/9/25–29/3/26) | Stage 2 forecast | **Stage 2 actual (30/3/26–29/9/26)** | Stage 3 forecast |
|---|---|---|---|---|---|
| Sales & Revenue | 246,000 | 125,615 | 141,321 | **185,784** | 250,000 |
| COGS | — | 11,556 | 9,963 | 11,756 | 15,000 |
| Gross profit | 246,000 | 114,059 | 131,358 | 174,028 | 235,000 |
| Promotion & marketing | — | 17,716 | 25,000 | 28,843 | 35,000 |
| Professional services | 5,500 | 2,750 | 4,000 | 3,290 | 4,000 |
| Staffing (full-time, excl. founder) | 48,000 | 72,000 | 96,000 | 100,800 | 100,800 |
| Cloud/data subscriptions | — | 8,571 | 6,830 | 16,398.14 | 23,000 |
| R&D hardware/software | — | 6,985 | 7,133 | 21,598.14 | 45,000 |
| Total expenses | 53,500 | 108,022 | 138,963 | 170,929.28 | 207,800 |
| Net profit | 192,500 | 6,037 | −7,605 | 3,098.72 | 27,200 |

Derived: cumulative revenue since commencement (Stage 1 + Stage 2 actual) = **311,399**; Stage 2 average monthly revenue = 185,784 / 6 ≈ **30,964**; Stage 2 actual beat its own forecast by 31% (185,784 vs 141,321).

Where it goes:
- p8 `p8_i178` and p2 revenue bullet, Doc `{{REVENUE_HKD}}` / `{{REVENUE_AS_OF_DATE}}` (as of 29/9/2026): **decide the reading of "HK$250,000 cumulative revenue by end of Stage 2" with Chris before filling.** Cumulative since incubation start = 311,399 (target met, 125%); Stage 2 window alone = 185,784 (74%, not met). The milestone text in context.md says "cumulative", which supports 311,399, and the P&L column headers show both periods so the reviewer can see the arithmetic. Recommend stating both numbers on p8.
- p4 `p4_i149` row 2 col 5 "Monthly total revenue": ~30,964 (Stage 2 average) — or the actual September 2026 month if Chris has it; col 6 "Monthly local (HK) revenue": not in the workbook, ask Chris.
- Note the earlier CIP figure "HK$122K monthly revenue" in context.md does not reconcile with this P&L (would be ~730k per stage); use the P&L, it is the audited-style document Cyberport receives.

Not in the workbook: items verified to date, monthly authentication volume, 60-day retention. Website metrics strip, p2 traction bullet, and Doc §3 / `{{TOTAL_VERIFIED}}` / `{{MONTHLY_VOLUME}}` / `{{RETENTION_60D}}` still wait on Chris.

## UPDATE 19:28 SGT — signed milestone form received; deconflicts for the deck

`inbox/202611021928-ENC.SF.080 Situation and Progress Review Form (Primefleet)_28Oct2025_Signed (002).docx` (thread ts `1793618939.098739`, "pass to sneakerslite session to deconflict understanding"; not uploaded). Signed by Xue YuYu (CEO) 10 Nov 2025, noted by Lou Chan (HKCMCL) 11 Nov 2025. Stage 2 wording and weights match the deck exactly; "cumulative" revenue is confirmed as since-commencement (Chris, 02/11). Changes the deck needs:

1. **p3 (action plan for next stage) must mirror the signed Stage 3 milestones**, not a generic plan: Digital Certificate Portal MVP (30%); ≥600 cumulative certificates delivered (25%); HK$500,000 cumulative revenue by 29/3/2027 (25%, i.e. +HK$188,601 on top of 311,399 — P&L Stage 3 forecast 250,000 covers it); Certificate Governance docs — T&Cs, brand usage guide, logo pack, anti-abuse policy (10%); Security Compliance Documentation — DPIA, vendor questionnaires, data-flow diagrams, checklist (10%). Current p3 bullets (Taiwan/China GTM, Puma/Vans/Saucony/HOKA/Salomon, synthetic data) can stay only as supporting lines under those five.
2. **p7 proof = "Testing reports showing support for additional brands and new models"**, not a model list. The proof box needs a testing-report excerpt per brand (ASICS, Converse, third brand) covering the 15 models.
3. **p6 proof = "Signed agreements with client services description and payment record"** — bank transaction records, not only invoices. Also: the mainland China client was described in the Stage 1 self-assessment (April 2026) as "just closed … before our Stage 2 review"; its agreement date must be on or after 30/3/2026 to count as onboarded "in Stage 2". Confirm the date with Chris before it goes on the slide.
4. **p8 proof = "Invoices, bank transaction records"**; show 125,615 + 185,784 = 311,399 vs 250,000 (125%).
5. **p11**: milestone text is "Localized landing pages or sales decks in Japanese or Korean" — both JA and KO landing pages exist, so state "exceeds: both languages, full site".
6. **p4 team**: the Stage 1 review already claimed "hired a Business Development Lead" (proof: signed employment contract). `[Business Development Lead — name]` must be filled with that person; P&L staffing shows one full-time non-founder employee at HK$16,000/month, so team size = founder + 1 FTE (advisors are not staff).
7. **p13–p15 (Tiered Assessment)**: Tier 2 = 5–10 marks, Tier 1 = 11+, each unlocking an additional HK$100,000 grant. Two contracts = 2 marks only. Do not delete p14 (industry recognition) / p15 (Cyberport engagement) until Chris confirms there is nothing to claim — mentor sessions, Cyberport events, press, awards all count.
8. **Stage 1 B-1 table in the form carries two stray template rows ("…… 10% / 100% / 10%")** that are not in the sub-total (55% = 25+30+0). When the Stage 2 B-1 is filled in, delete the "……" rows so the reviewer cannot read the sub-total as 75%.

Figures context from the form: Stage 1 clients were Dong Yi Hai Wai and Novelship (confirm whether Dong Yi Hai Wai is the legal entity of 潮盟 国际版 — the framework's P-02); Stage 1 result 75% (SMO 600-organic milestone scored 0%); "3,100+ monthly / 34,200+ total" were as of April 2026 and are stale for the Stage 2 review. Self-assessment unit economics: PRO USD 0.80/result, COGS USD 0.24/result → Stage 2 revenue implies ≈29,800 results (≈5,000/month) and COGS ≈HK$55,700, whereas the P&L books COGS of 11,756 (6.3%). The reviewer holds both documents; Chris's finance tabulation must reconcile volume × price = revenue and COGS before anything is filled.

## UPDATE 19:40 SGT — client mapping from Chris (supersedes earlier assumptions)

- 潮盟 国际版 = Dong Yi Hai Wai: closed **before** CIP started → pre-incubation client, not a Stage 2 count. (Earlier "Client A mainland China (start of window)" on p6 is wrong.)
- **佳超** (mainland China): closed last quarter (Q3 2026, inside the window) → Stage 2 new client #1.
- **Silver Star = the Korean partner** (closed September 2026) → Stage 2 new client #2. It is a **sneaker 3PL in South Korea** that processes and authenticates shoes for sellers exporting from Korea — Segment C (inspection / logistics / fulfilment), not a platform and not Hong Kong. Corrected in `drafts/sales-partnership-framework-v1.md` (§2.3 reference partner = Silver Star, South Korea 3PL; §6.1 launch-partner example; §7.1; §7.2 P-04 = C / South Korea). Deck p6 "Client B South Korea platform" → "Client B: Silver Star, South Korea sneaker 3PL (processing + authentication for cross-border sellers)".

Doc edits required (host; the Doc still has the old text): §2.3 "Who" bullet and "Reference partner" bullet → markdown lines 40 and 44 (Silver Star, South Korea sneaker 3PL); §6.1 "Who" bullet → line 125; §7.1 first bullet → line 149; §7.2 table rows → the five rows at lines 159–163 (P-04 = C / South Korea; P-06 dropped). Deck p6 elaboration: Client A = 佳超, mainland China, Q3 2026; Client B = Silver Star, South Korea sneaker 3PL, September 2026; both agreements dated inside 30/3–29/9/2026 — confirm 佳超's signature date is on or after 30/3/2026.

Site: the "Head of Operations, Silver Star" testimonial is segment-neutral and stays; Presence card for South Korea already links to the Korea article. No site change from this.

## UPDATE 19:55 SGT — live financials sheet replaces the xlsx

Google Sheet `1qLNyn4aIn_q4-svD5lgpi-5YI1RkiTRk98uSYv1g5ts` ("Cyberport Program", tab `P&L Report`), SA has read access; `deck sheet <id>` dumps it. Source of truth for all revenue figures from now on. Current values (HK$): Stage 2 actual revenue **185,784**, COGS 14,756, expenses 166,844.14, net 4,183.86; cumulative since commencement revenue **311,399**, net 10,220.86; Stage 3 forecast revenue 250,000, net 22,200. Remaining finance questions were posted to Chris in the thread (ts `1793619436.299189`): half-booked 6,580 professional invoice; 141,321 forecast; Stage 4 forecast empty (1M cumulative milestone); MPF treatment; COGS 7.9% vs the form's USD 0.24/0.80.

## UPDATE 20:02 SGT — finance reply (thread ts `1793619663.402709`) and session answer (`1793619758.845359`)

Resolved: column L, COGS reclass, G35, Stage 1 forecast as filed, Stage 3 forecast 250k is a real forecast, 141,321 forecast as filed. Team size = founder + 1 FTE (fill p4). Monthly revenue for p4 col 5 = **30,964** (185,784 ÷ 6); 122K must not appear anywhere. Open: real reason for the 6,580 ÷ 2 (and Stage 3 3,290 vs 4,000); real reason for no MPF in Stage 1 (compliance risk if the person was a contractor — affects which line 72,000 sits on); p4 col 6 HK-billed monthly revenue; Stage 4 forecast column empty; COGS USD 0.24 on the signed form vs 7.9% booked — one explanatory sentence needed in the Stage 2 self-assessment.

## UPDATE 20:16 SGT — second finance reply (ts `1793620550.489109`), answered (`1793620586.473909`)

Live sheet now: Stage 3 forecast R&D 40,000 (was 45,000), COGS 20,000, expenses 202,800, net 27,200. Stage 2 unchanged (185,784 / 14,756 / 166,844.14 / 4,183.86). Professional-services halving documented in a cell note (corporate secretarial annual fee). P&L is done except: MPF reason for Stage 1 (E30 note), slide-4 HK-billed revenue, Stage 4 forecast, COGS 0.24 vs 7.9% sentence in the self-assessment.

## UPDATE 20:55 SGT — Chris/finance decisions (ts `1793622803.673809`, `1793622823.741609`), answered (`1793622882.234469`)

- Stage 1 staffing 72,000 was a **contractor** (no MPF) → finance to move it off line 5 (line 4 if a service agreement exists, else line 7). Risk flagged: Stage 1 milestone "Hire BD Lead" was proven with a "signed employment contract" — if same person, contradiction.
- 122K: ignore. Stage 4 forecast: deferred to next reporting round (Chris's call; p3/Stage 3 unaffected).
- COGS 0.24 reference = signed form Part B-2 "Financial Planning" (quoted to Chris); finance to decide whether to keep 0.24 and add the reconciling sentence.
- "Monthly Local Revenue (HK$)" = header in the template's slide-4 table `p4_i149` (cols: Stage / Assessment Month / Total Team Size / Local Team Size / Monthly Total Revenue / Monthly Local Revenue / New Investment Total / New Investment by Local Entity). Chris to decide 0 vs 30,964 per Cyberport's definition of "local".

## UPDATE 21:45 SGT — Chris questions (ts `1793625936.488379`), answered (`1793626009.004269`)

- COGS: booked ≈ USD 0.06/result (7.9%) vs the form's USD 0.24 (30%) — booked is lower, not higher; gap ≈ HK$41k over Stage 2. No sheet change; reconciling sentence supplied for the Stage 2 self-assessment.
- Monthly Local Revenue: enquiry drafted for finance (billing entity, revenue by client billing country, receiving account, non-HK recognition). Value for p4 col 6 pending finance; may be 0.
- BD Lead: service agreement during notice period in Stage 1 (72,000 → line 4), employment from Stage 2 (100,800 incl. MPF, line 5). Dates to verify: contract signed inside Stage 1; start ≤ first Stage 2 salary month; MPF enrolment within 60 days.

## UPDATE 22:25 SGT — COGS explanation agreed (finance ts `1793628396.454159`, answered `1793628447.396229`)

No restatement to 30%. Self-assessment wording supplied: 0.24 was fully-loaded (inference + cloud/data + human review); booked direct COGS ≈ USD 0.06 (7.9%, from 9.2%); cloud under line 6, review in staffing; Stage 3 forecast holds 8% with cloud rising for certificate-portal and new-brand R&D. Finance's "economies of scale next 6 months" line dropped — contradicts the Stage 3 forecast.

## UPDATE 22:30 SGT — agreed PPT wording for revenue (thread ts `1793628744.429729`)

- p4 `p4_i149` row 2: Stage 2 · Oct 2026 · team 2 / HK [n] · monthly total revenue **30,964** · monthly local revenue [pending finance] · investment 0 / 0.
- p8 `p8_i178`: "Achieved — HK$311,399 cumulative revenue since commencement (Stage 1 HK$125,615 + Stage 2 HK$185,784) against the HK$250,000 target, 125%. Stage 2 revenue grew 48% on Stage 1 and 31% above forecast. Proof: invoices and bank records, P&L report."
- p2 revenue bullet: "Cumulative revenue HK$311,399 at 29/9/2026, 125% of the Stage 2 target; Stage 2 run-rate HK$30,964/month; direct COGS 7.9%."
- Sheet edits still due from finance: 72,000 line 5 → line 4 with E30 note; billing-locale answer.

## UPDATE 23:00 SGT — finance moved 72,000 (ts `1793630047.203529`); answered (`1793630135.304769`)

- Stage 1: 72,000 now under professional services (sub-total 74,750), staffing 0. Column L on that row has no formula → cumulative expenses show 202,866.14 / net 82,220.86 instead of 274,866.14 / 10,220.86. Finance told to fix.
- Finance: Stage 1+2 revenue is **100% Novelship (Singapore)**; Dongyi billed from Stage 3. → p4 monthly local revenue = **0**. Risk: milestone 1 proof requires a *payment record* from each new client; if 佳超 and Silver Star paid nothing before 29/9/2026, p6 proof is agreements + first invoices only. Asked Chris.

## UPDATE 00:55 SGT 03/11 — P&L closed (ts `1793637167.433819`, answered `1793637208.357789`)

Column L fixed and verified (professional 78,040 / expenses 274,866.14 / net 10,220.86). Chris: items 2–3 (contractor note, Novelship billing) handled verbally if asked; p4 monthly local revenue = 0. Milestone 1 proof: form's own proof list says "payment record"; if none from 佳超/Silver Star by 29/9, use agreement + first invoice + usage evidence (API key, first authentications, dated dashboard screenshot) and state payment terms fall in Stage 3. Finance re-checks the sheet in the morning; no further sheet edits expected.

## UPDATE 01:20 SGT 03/11 — Doc placeholders filled at Chris's request (targeted replaceAllText only, no body re-push)

Doc had been edited by someone else at 00:48 (REVENUE placeholders already filled there). Applied: P01 Q4 2024; P02 Q2 2025; P03 source "Direct (founder-led)", Q3 2026; P-04 source "Direct (founder-led)", segment A→C (cell edit), next action "KR export catalogue"; §2.3 Silver Star 3PL sentence; §6.1 "Korean 3PL"; §7.1 bullet with 佳超/Silver Star and pre-incubation clients. Remaining in Doc: `{{P05_*}}`, `{{P06_*}}` (fill one real open opportunity each or delete the rows), `{{MONTHLY_VOLUME}}`, `{{TOTAL_VERIFIED}}`, `{{RETENTION_60D}}`, and P-01/P-02 source cells still read "Existing partner" (markdown says "(pre-incubation)"; cosmetic).

## UPDATE 02:10 SGT 03/11 — traction figures from Chris; Doc + site updated

Authentications: Stage 1 22,530; Stage 2 33,773 (incl. 200 free/partner/month → 4,000 free in Stage 2); run-rate Oct 2026 6,800/month; 120,000+ since launch. All reconcile with the P&L at USD 0.80 (Stage 1 paid 20,130 × 6.24 = 125,611 vs 125,615 booked). Chris's confirmed commercial practice: every client on the PRO rate (USD 0.80) with 200 free/month — now written into framework §5.1/§6.1 as launch-partner terms. Doc edited by targeted API calls (not re-pushed): §3 proof points, §5.1, §6.1, §7.1 traction line, new §7.4 "Revenue path to the Stage 3 target" (needs 5,038 paid/month; flat run-rate gives HK$536k cumulative by 29/3/2027). Chris filled P-04 himself. Website metrics strip now 120,000+ / 6,800+ / 71% (commit 9991db9), note split: volumes Oct 2026, retention CIP submission.
Deck: p2 traction bullet → "120,000+ items authenticated since launch; 6,800/month (Oct 2026); 56,303 authentications in Stage 1+2 (22,530 + 33,773)". Caution: the Stage 1 self-assessment told Cyberport "34,200+ total verified items" (April 2026); 120,000+ seven months later implies a different definition — use the Stage-window counts on the deck and keep 120,000+ for the website.

## UPDATE 03/11 — Framework trimmed to requirements; Chris's final review
§7 "Evidence of Operation" removed (incl. revenue path, assets, countable §9 targets); §7 is now "Pipeline Register" only. Chris edited the Doc: P-03 (佳超) close = **Q2 2026** (corrects Q3 everywhere — context.md updated), next action Day-180 retention check; P-04 next action Day 30 onboarding review; added P-05 Taiwan and P-06 Japan. Stage names mapped to §4 (Demo→Qualified, Initial Pitch→Lead) with Chris's OK; both are stalled past §4 limits by design (weekly review catches it). Deck p6 still says "Client B South Korea resale platform, partner-led" and "Client A start of window" — correction posted to host in thread. Doc edits now via targeted API only; `gdoc-push.py` was last run before Chris's register edits and must not be run again without re-diffing.

## UPDATE 03/11 — proof images + milestone 2 given up (Chris, in chat)
Chris: finance was wrong — invoices exist for 东易, 佳超 and Novelship; Silver Star contracted Sept, integration done, live October 2026, first invoice after month one (Nov). Milestone 2 (3 brands/15 models) **strategically given up** — ASICS/Converse work but no testing reports. Session edited the deck at Chris's request: proof images replaced on p7 (home brand section), p8 (P&L income block), p10 (Doc page 1), p11 (/ja + /ko composite) — PNGs in the shared drive `proof-p*.png`; p6 text (佳超 Q2 2026; Silver Star 3PL, direct, live Oct), p8 ("Achieved: 125%…", partners SG/GZ/mainland only, proof = P&L extract + invoices + bank records), p10 last bullets, p7 rewritten "Partially achieved — not claimed", p9 repurposed as "Elaboration of failure" for milestone 2 (new text box `p9_elab`). Stage 2 self-score = 75%. Still host/Chris: p6 proof image (agreement/invoice scan), p13 contract scans, p4 team cells, p3 Stage 3 milestones, p14/p15. Doc: P-04 Live date → October 2026; §6.1 wording.
