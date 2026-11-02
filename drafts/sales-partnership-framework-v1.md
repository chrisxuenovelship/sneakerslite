# SneakersLite Sales & Partnership Framework

Primefleet Digital Hong Kong Limited | Version 1.0 | Effective November 2026 | Internal — not for publication

Document owner: Chris Xue, CEO, Primefleet Digital Hong Kong Limited
Next review date: May 2027 (semi-annual, aligned to Cyberport Incubation Programme reporting)

## 1. Purpose and Scope

This document establishes the first version of SneakersLite's Sales & Partnership Framework. It defines who SneakersLite sells to, how an opportunity moves from first contact to a live integration, the commercial terms the company offers, the forms of partnership it enters into, and the operating cadence that keeps the pipeline honest.

The framework applies to all commercial activity of Primefleet Digital Hong Kong Limited under the SneakersLite brand: direct B2B sales of AI sneaker authentication, partner-led market entry, and affiliate or referral arrangements. It is maintained by the CEO and used by the Business Development Lead and any contractor or advisor acting on the company's behalf.

It was produced as a Stage 2 deliverable of the Cyberport Incubation Programme (milestone: "Establish Sales & Partnership Framework") and is the working document the team runs the pipeline from.

## 2. Ideal Customer Profile

SneakersLite sells to organisations that authenticate sneakers at volume as part of their own service to buyers. Three segments qualify. Each is defined by the buyer of record, the trigger that makes authentication cost visible, and the disqualifiers that end a conversation early.

### 2.1 Segment A — Consumer resale marketplaces

- Who: platforms where a buyer guarantee is part of the product (Southeast Asia, Hong Kong, Korea, Japan, Taiwan).
- Buyer of record: COO or Head of Operations; finance signs off above a volume threshold.
- Volume band: 1,000 to 20,000 authentications per month.
- Trigger: authentication headcount is the largest fixed cost in operations; review backlog is delaying shipment; catalogue is widening faster than inspector expertise.
- Reference partner: Novelship (Singapore), the largest B2C sneaker marketplace in Southeast Asia.
- Disqualifiers: fewer than 300 items per month; no buyer guarantee (authentication is optional to the seller); no engineering capacity and no willingness to use the dashboard.

### 2.2 Segment B — B2B wholesale, consignment and aggregation

- Who: wholesalers and consignment aggregators moving goods in lots, concentrated in Guangzhou and the mainland supply chain.
- Buyer of record: owner or general manager; purchasing lead influences.
- Volume band: 500 to 10,000 items per month, batch-shaped.
- Trigger: a downstream platform has started rejecting goods or demanding per-item evidence; a counterfeit incident has reached a buyer; a sampling-only process has been challenged.
- Reference partner: 潮盟 国际版 (Guangzhou), the largest B2B sneaker seller in the city.
- Disqualifiers: unwilling to submit per-item images; expects a batch verdict to stand in for item-level results; no acceptable data-handling path for mainland image data.

### 2.3 Segment C — Inspection, logistics and fulfilment houses

- Who: third parties that inspect, grade or fulfil on behalf of platforms and retailers.
- Buyer of record: Head of Operations; the platform client is often the sponsor.
- Volume band: 1,000 to 15,000 items per month across several end clients.
- Trigger: a client contract requires a defined authentication process; staff turnover in the inspection team; need to add brands without adding specialists.
- Reference partner: Silver Star.
- Disqualifiers: inspection is a loss-leader with no budget line; the house cannot agree data-sharing terms with its end clients.

### 2.4 Qualification gate

A lead is Qualified only when all four are confirmed in writing (email or call notes):

1. Monthly authentication volume of 500 or more, or a credible plan to reach it within six months.
2. A named buyer of record with budget authority.
3. A trigger event in the last twelve months or a dated one in the next six.
4. A data-handling path the company can deliver (see section 5.4).

The contact form on sneakerslite.com collects name, work email, company, monthly volume band and subject. Volume band below 1,000 with subject "support" or "other" is routed to a template reply, not the pipeline.

## 3. Value Proposition by Segment

The product is the same for every segment: image standardisation (pose estimation, OpenCV normalisation), visual feature analysis (colour, texture, shape ratio), tag and label authentication (OCR over barcodes, QR codes and typography), combined into a confidence score with a verification breakdown, with sub-threshold cases routed to human review and fed back into training. What changes is which property is sold first.

- Segment A (marketplaces): per-result cost against roughly USD 4 per human authentication; review-rate curve that falls month on month; model-level coverage that grows without hiring; buyers see only "arrived verified".
- Segment B (wholesale): item-level evidence that survives resale and disputes; batch submission with per-SKU confidence; mainland data handling under PIPL and DSL designed before go-live.
- Segment C (inspection houses): consistency across inspectors and shifts; a documented process their end clients can audit; coverage added at model level on request.

Proof points available for use in any conversation: 34,200+ items verified to date, 3,100+ per month, 71% 60-day retention (CIP submission figures; update from the current finance sheet before each use). Two partner testimonials are live on sneakerslite.com (Operations Lead, Novelship; Head of Operations, Silver Star).

Positioning against alternatives: machine-heavy and fully integrated for both B2B and B2C flows. Entrupy is machine-heavy but single-segment; CheckCheck and FakeEducation are human-based; POIZON is integrated but captive to its own marketplace. SneakersLite does not disparage competitors in writing; it states public pricing and lets the operator compare.

## 4. Pipeline Stages and Exit Criteria

Every opportunity sits in exactly one stage. A stage is left only when its exit evidence exists. Dwell time beyond the limit triggers a decision at the weekly review: advance, hold with a dated reason, or close-lost.

1. Lead. Source recorded (inbound form, article, outbound, referral, Cyberport network). Owner assigned within one working day. Exit: discovery call booked. Limit: 10 working days.
2. Qualified. Section 2.4 gate confirmed. Segment, volume band, buyer of record and trigger logged. Exit: pilot scope agreed in writing. Limit: 15 working days.
3. Pilot scoped. Pilot terms (section 5.2) sent; model list for the client's catalogue reviewed against current coverage; data-handling path chosen. Exit: pilot agreement signed and API key or dashboard access issued. Limit: 20 working days.
4. Pilot live. Submissions flowing. Weekly check-in on review rate, turnaround and coverage gaps. Exit: pilot report delivered (volume, review rate curve, disputes, cost versus baseline). Limit: 45 calendar days.
5. Commercial. Tier proposal sent; partnership tier (section 6) proposed where applicable; legal and data terms agreed. Exit: signed agreement. Limit: 20 working days.
6. Live. Production integration; monthly volume tracked; success metrics reviewed at day 60 (retention checkpoint) and quarterly thereafter.

Close-lost reasons are recorded from a fixed list: volume too low, no budget, in-house build, competitor chosen, data-handling blocker, no response. The list is reviewed quarterly to adjust the ICP.

## 5. Pricing and Commercial Terms

### 5.1 Public B2B pricing (pay-per-result)

- STANDARD: USD 2.00 per result, below 1,000 results per month.
- PLUS: USD 1.30 per result, 1,001 to 2,000 results per month.
- PRO: USD 0.80 per result, above 2,000 results per month.
- Benchmark: approximately USD 4.00 per human authentication. PRO represents an 80% saving.

Pricing is published at sneakerslite.com/pricing. Discounts below the published tier are not offered; volume commitments move a client to the next tier, not to a custom rate. Enterprise terms apply above 10,000 results per month and are quoted case by case.

### 5.2 Pilot terms

- Duration: 30 days, extendable once by 15 days.
- Volume: minimum 300 submissions, so the review-rate curve is observable.
- Price: STANDARD tier, invoiced at pilot end; pilot fees credited against the first commercial month if the client signs within 30 days of the pilot report.
- Deliverable: pilot report (volume, review rate by week, coverage gaps by model, dispute count, cost versus the client's stated baseline).
- Human review turnaround target during pilot: 24 hours.

### 5.3 B2C via partners (affiliate)

- STANDARD: 15% of profit, minimum USD 15 per transaction.
- ADVANCED: 10% of profit, minimum USD 12 per transaction.

Affiliate terms apply where a partner exposes SneakersLite authentication to its own consumers as a paid service.

### 5.4 Data-handling paths

Every agreement selects one of three paths before go-live:

- Hong Kong processing under the PDPO and the published Data Protection Framework (default for Segments A and C outside mainland China).
- In-region processing for mainland image data, with PIPL and DSL assessment documented by the client and SneakersLite.
- Client-hosted intake with transaction references only (no seller identity passed), for clients whose own privacy review requires it.

The Data Protection Framework (sneakerslite.com/data-protection-framework) is attached to every proposal.

## 6. Partnership Model

Partnerships are distinct from customer contracts: they carry obligations on both sides and are reviewed semi-annually. Three tiers.

### 6.1 Launch partner

- Who: the first marketplace or wholesaler in a new market (for example the Singapore and Guangzhou partners; the Korean platform onboarded in September 2026).
- SneakersLite provides: pricing locked at the agreed tier for 12 months regardless of volume dips; priority on model-coverage requests; a named integration contact; co-authored case study and testimonial rights, published only with written approval.
- Partner provides: a minimum monthly volume commitment; human-reviewed cases returned to training under the agreed data path; a reference call for one prospect per quarter; named testimonial or quote.

### 6.2 Integration partner

- Who: inspection, logistics or software providers that embed the SneakersLite API inside their own service to platforms.
- SneakersLite provides: wholesale pricing one tier below the partner's standalone volume; technical onboarding (see the integration playbook at sneakerslite.com/blog/authentication-integration-playbook); listing on the website as an integration partner once live.
- Partner provides: a referral fee arrangement or revenue share agreed per contract; first-line support to its own clients; joint go-to-market for at least one named end client per half year.

### 6.3 Channel partner

- Who: Cyberport and its network, regional accelerators, trade associations, and advisors who introduce qualified leads without integrating.
- SneakersLite provides: a referral fee of 10% of first-year net revenue on introduced clients that reach Live, paid quarterly; collateral (one-page overview, pricing sheet, brand and country articles).
- Partner provides: warm introductions with the buyer of record; no obligation on volume.

### 6.4 Partnership agreement checklist

Every partnership agreement records: tier; term and renewal; volume commitment; pricing and any lock; data-handling path; case-study and naming rights; referral or revenue-share mechanics; review date. The CEO signs; the BD Lead maintains the register.

## 7. Evidence of Operation — Stage 2 Window (30 March to 29 September 2026)

### 7.1 Commercial outcomes

- New B2B clients onboarded: 2 (one mainland Chinese client closed immediately before the Stage 1 review; one Korean platform partner closed September 2026). Milestone target: 2.
- Cumulative revenue against the HKD 250,000 Stage 2 target: {{REVENUE_HKD}} (source: finance sheet, {{REVENUE_AS_OF_DATE}}).
- Monthly authentication volume at window close: {{MONTHLY_VOLUME}}; items verified to date: {{TOTAL_VERIFIED}}; 60-day retention: {{RETENTION_60D}}.

### 7.2 Pipeline snapshot at window close

Each row is one organisation. Names are withheld in the Cyberport copy; the internal register holds them.

| Ref | Segment | Market | Source | Stage reached | Date of last stage change | Next action |
|---|---|---|---|---|---|---|
| P-01 | A | Singapore | Existing partner | Live | {{P01_DATE}} | Quarterly review |
| P-02 | B | Guangzhou | Existing partner | Live | {{P02_DATE}} | Quarterly review |
| P-03 | B | Mainland China | {{P03_SOURCE}} | Live | {{P03_DATE}} | Day-60 retention check |
| P-04 | A | South Korea | Partner-led | Live | September 2026 | Coverage expansion for KR catalogue |
| P-05 | C | Hong Kong | {{P05_SOURCE}} | {{P05_STAGE}} | {{P05_DATE}} | {{P05_NEXT}} |
| P-06 | {{P06_SEGMENT}} | {{P06_MARKET}} | {{P06_SOURCE}} | {{P06_STAGE}} | {{P06_DATE}} | {{P06_NEXT}} |

### 7.3 Assets built in the window

- Public pricing page with calculator (sneakerslite.com/pricing).
- Contact form delivering qualified leads with volume band and subject to the CEO inbox.
- Localised site in English, Simplified Chinese, Japanese and Korean.
- Twenty published articles, including four market pieces (Hong Kong, mainland China in English and Chinese, Singapore, South Korea) and six brand guides (Nike, Air Jordan, adidas, New Balance, ASICS, Converse), each mapped to a segment in section 9.
- Two partner testimonials and a metrics strip on the home page.
- Data Protection Framework v1 (Stage 1) attached to every proposal.

## 8. Sales Playbooks

Calls are the unit of selling. Every call has a type, a time budget, a purpose, and a dated next step. The BD Lead logs each call in the pipeline register within one working day using the scorecard in 8.4.

### 8.1 Call types

| Call | Length | Purpose | Exit |
|---|---|---|---|
| Intro | 15 min | Confirm fit against the ICP; earn a discovery call | Discovery booked, or close-lost with reason |
| Discovery | 30 min | Understand process, volume, failure cost, coverage, data, decision | Pilot scope drafted |
| Pilot kick-off | 30 min | Agree image standards, submission path, weekly check-in, success measures | Pilot live date |
| Pilot review | 30 min, weekly | Review-rate curve, coverage gaps, disputes | Actions logged |
| Commercial | 30 min | Walk the pilot report; present tier, partnership tier, data path | Signature date |

### 8.2 Discovery call structure (30 minutes)

1. Open (2 min). Confirm time, confirm who is on the call and their role, state the agenda: "how you authenticate today, what it costs you, and whether a pilot is worth your time."
2. Current process (6 min). Who authenticates, how many people, turnaround from receipt to release, all-in cost per item, what happens when the team is uncertain.
3. Volume and shape (5 min). Monthly items, peak weeks, batch or single-item intake, share of catalogue outside Nike and Jordan, top 20 models by volume.
4. Failure cost (5 min). The last counterfeit that reached a buyer; refund, support time, seller action, reputational effect; how often condition disputes are mislabelled as authenticity disputes.
5. Data and integration (5 min). Where images live, which jurisdiction, whether seller identity travels with the image, whether engineering time is available or the dashboard is the path.
6. Decision and next step (7 min). Who signs, by when, what a pilot has to show them to be a yes; propose pilot terms (section 5.2); book the kick-off date before ending the call.

### 8.3 Discovery question bank by segment

- Segment A (marketplaces): "What does your buyer guarantee promise, in words?" "What share of items wait more than 24 hours for an inspector?" "Which brands do you decline to list because you cannot authenticate them?" "How many inspectors would you need to hire for next year's volume?"
- Segment B (wholesale and consignment): "When a downstream platform rejects a lot, who absorbs it?" "Is your inspection tag per item or per batch?" "Which SKUs have caused a dispute in the last quarter?" "Where do your item photos physically sit, and who can access them?"
- Segment C (inspection houses): "How do you prove to a client that two inspectors would reach the same verdict?" "How long does a new inspector take to be trusted on a brand?" "What do your client contracts say about the authentication process?" "Which client is asking for brands you cannot cover yet?"

### 8.4 Post-call scorecard

Logged for every intro or discovery call. A lead advances to Qualified only when gates 1 to 4 are all Yes.

| Field | Entry |
|---|---|
| Gate 1 — Volume | Monthly items (number); 500+ now or within six months: Yes / No |
| Gate 2 — Buyer of record | Name, title, budget authority confirmed: Yes / No |
| Gate 3 — Trigger | Event and date (last 12 months or next 6): Yes / No |
| Gate 4 — Data path | Section 5.4 path selected: HK / in-region / client-hosted / blocked |
| Segment | A / B / C |
| Cost baseline | Client's stated all-in cost per item and turnaround |
| Top models | Top 20 by volume; coverage check result (covered / partial / gap) |
| Objections raised | From 8.5, with response given |
| Next step | Action, owner, date (mandatory) |

### 8.5 Objection matrix

| Objection | What it usually means | Response | Proof asset |
|---|---|---|---|
| "Our inspectors are better than any model." | Fear of being replaced; pride in the team | Agree on the hard cases; the system routes those to them. The value is the large share of items that do not need an expert, and consistency on the rest. The review path is theirs. | Home page dashboard; integration playbook article |
| "What is your accuracy?" | Looking for a single number to compare vendors | Do not quote one. Show the confidence score and verification breakdown, explain the threshold and review path, and propose a pilot measured on review rate and disputes against their own baseline. | Pilot report template; brand guides |
| "Our data cannot leave the country." | Legal or procurement block | Offer the in-region or client-hosted path and the Data Protection Framework; agree the path before the pilot, not after. | Data Protection Framework; Guangzhou article |
| "We will build it ourselves." | Engineering confidence; underestimates the data problem | Walk through verified-fake data acquisition, model maintenance per release cycle, and time to usable confidence on a new model; offer to run the pilot alongside their build. | Build vs buy article; adding new brands article |
| "You are a small company." | Continuity risk | Cyberport incubation, named partners in three markets, published framework and pricing, a pilot that costs one month at STANDARD tier, and a defined exit (their data returned). | Partner testimonials; pricing page |
| "The price is low; what is the catch?" | Suspicion of hidden fees | Pricing is public; no set-up fee; human review included; the only variable is volume tier. | Pricing page; Appendix A |
| "We only need Jordan and Nike." | Coverage concern inverted | Fine: start there, and the model list for the rest of their catalogue is disclosed on request so they can expand when ready. | Brand guides |

### 8.6 Role-play 1 — discovery call, Segment A (Singapore marketplace)

Participants: SneakersLite BD Lead (BD); Head of Operations at a Singapore sneaker marketplace (HO).

BD: Thanks for the time. Thirty minutes: how you authenticate today, what it costs you, and whether a pilot is worth your time. If it is not a fit I will say so.

HO: Fine. We have four inspectors in the warehouse. Everything is checked before it ships.

BD: Four people, every item. What is the turnaround from the item arriving to release?

HO: Same day if it is a Dunk or a Jordan. New Balance and ASICS can sit two or three days because only one person is confident on them.

BD: So the queue is really a coverage queue. How many items a month, and what share is outside Nike and Jordan now?

HO: About two thousand eight hundred a month. Maybe thirty percent outside Nike and Jordan, and rising.

BD: What does an item cost you all-in to authenticate, salary and space included?

HO: We have never worked it out per item. Roughly four to five Singapore dollars.

BD: That is in line with what we see. When did a counterfeit last reach a buyer?

HO: Two months ago. A Samba. Refund, apology credit, and the seller was banned. The support thread took a week.

BD: Was it an authenticity miss or a condition dispute that became one?

HO: Authenticity. Nobody on the team is strong on adidas terrace models.

BD: Two questions on data. Where do your item photos sit, and does the seller's identity travel with the photo?

HO: AWS Singapore. The photos are linked to the order, not to the seller directly.

BD: Good, that fits our client-hosted path with a transaction reference; nothing identifying needs to reach us. Last question: if a 30-day pilot showed the review rate on your top 20 models and the cost against your four to five dollars, who decides?

HO: Me, with the COO for the budget.

BD: Then I propose a pilot at the STANDARD rate on at least 300 items, your choice of models, with a weekly review-rate report and a written pilot report at the end. If you sign within 30 days the pilot fee is credited. Can we book the kick-off for next Tuesday and can you send the top 20 models by volume before then?

HO: Tuesday works. I will send the list tomorrow.

Scorecard: Gate 1 Yes (2,800); Gate 2 Yes (HO with COO); Gate 3 Yes (counterfeit reached buyer, two months ago); Gate 4 client-hosted. Segment A. Baseline SGD 4 to 5 per item, 1 to 3 days. Next step: kick-off Tuesday, model list due tomorrow. Stage: Qualified → Pilot scoped.

### 8.7 Role-play 2 — data objection, Segment B (Guangzhou wholesaler)

Participants: SneakersLite CEO (CEO); General Manager of a Guangzhou wholesaler (GM).

GM: We are interested, but our lawyer says item photos cannot go to a Hong Kong server. That ends it.

CEO: It does not end it; it decides which path we use. Three options exist, and we pick one before any pilot. First, in-region processing for mainland images, with the PIPL and DSL assessment documented on both sides. Second, your system keeps the photos and sends us only what the model needs with a transaction reference, no seller data. Third, Hong Kong processing, which your lawyer has already ruled out.

GM: What would your side need for the second option?

CEO: The item photos at the angles in our intake standard, a batch number and a per-item reference. No names, no order details. The result goes back against the reference. Our Data Protection Framework describes retention and access; we attach it to the agreement.

GM: And the batch question. We receive lots of two hundred pairs. We cannot photograph every pair.

CEO: Then you sample for receiving risk, and you only attach "verified" to the pairs that were actually submitted. The system reports per item, so your downstream buyer can check the exact pair. We would never report a batch verdict as if it were an item verdict; that is what causes disputes later.

GM: Send me the second option in writing with the retention terms.

CEO: You will have it tomorrow, with a 30-day pilot proposal on your top SKUs. If your lawyer confirms the path by Friday, we can start the following week.

Scorecard: Gate 4 client-hosted (pending legal confirmation Friday). Objection: data residency, answered with path 2 and the Data Protection Framework. Next step: written proposal tomorrow; legal confirmation Friday. Stage: Qualified, hold until Friday.

### 8.8 Closing every call

- Summarise what was heard in three sentences and ask for correction.
- Name the next step, the owner and the date; book it on the call.
- Send a written recap within one working day with the relevant proof assets linked.
- Update the pipeline register the same day; a call without a logged next step is treated as not having happened.

### 8.9 Pilot to contract

1. Week 1: integration live or dashboard in use; first 100 submissions; confirm image standards.
2. Weeks 2 to 4: weekly review-rate report; coverage gaps logged with model names; disputes tracked.
3. Pilot report delivered within five working days of pilot end.
4. Commercial proposal within the same week: tier based on their stated volume, partnership tier if applicable, data path, start date.
5. Signature target: within 30 days of the pilot report (pilot fee credit expires).

## 9. Lead Generation Engine

### 9.1 Inbound

- Website: pricing page and contact form are the conversion points; every article closes with a contact link.
- Content-to-segment map: brand guides and the Singapore and Korea articles feed Segment A; the Guangzhou article (English and Chinese) feeds Segment B; the integration playbook and build-vs-buy pieces feed Segment C and technical evaluators.
- Target: 4 qualified inbound leads per month by Q2 2027, measured in the pipeline register.

### 9.2 Outbound

- Target list: 25 named organisations per segment per market, refreshed quarterly. Priority markets for the next window: Singapore and Malaysia (Segment A), Guangzhou and Shenzhen (Segment B), Hong Kong and Korea (Segment C).
- Sequence: one article-led email, one follow-up with the pricing page, one call attempt; stop after three touches without reply.
- Target: 8 discovery calls per month.

### 9.3 Partner and network referrals

- Each launch partner provides one reference call per quarter.
- Cyberport network and channel partners (section 6.3) introduced to the referral terms with a one-page overview.
- Target: 2 referred qualified leads per quarter.

## 10. Governance and Cadence

- Weekly pipeline review (30 minutes, CEO and BD Lead): every open opportunity, stage, dwell time against limit, next action with a date. Register updated in the meeting, not after.
- Monthly: conversion by stage, pipeline value by tier, close-lost reasons, inbound volume by source.
- Quarterly: ICP and disqualifier review; pricing and pilot terms review; partner register review; outbound target list refresh.
- Semi-annually: this framework is reviewed and versioned alongside the Cyberport Incubation Programme report. Changes are logged in section 11.

The pipeline register is a Google Sheet owned by the CEO, with one row per opportunity and the fields in section 7.2 plus owner, buyer of record, volume band, tier and data path. A CRM is adopted only when the register exceeds 50 open opportunities or a second salesperson joins.

## 11. Version History

- Version 1.0, November 2026: initial framework. Established for Cyberport Incubation Programme Stage 2 and adopted as the operating document for the Stage 3 window.

## Appendix A. Pricing Matrix (finalised, effective November 2026)

### A.1 B2B pay-per-result

| Tier | Monthly volume | Price per result (USD) | Saving vs USD 4.00 human benchmark | Human review path | Integration | Support | Reporting |
|---|---|---|---|---|---|---|---|
| STANDARD | up to 1,000 | 2.00 | 50% | Included, 24h target | Dashboard + REST API | Email, next business day | Monthly summary |
| PLUS | 1,001 to 2,000 | 1.30 | 68% | Included, 24h target | Dashboard + REST API | Email, same business day | Monthly summary + review-rate curve |
| PRO | above 2,000 | 0.80 | 80% | Included, 12h target | Dashboard + REST API + batch submission | Named contact | Weekly report + coverage gap list |
| ENTERPRISE | above 10,000 | Quoted | Quoted | Agreed SLA | API + in-region or client-hosted data path | Named contact + quarterly review | Custom |

Rules: the tier is set by the trailing three-month average volume and reviewed quarterly; a client moving up a tier is re-rated from the next invoice; no discounts below the published price; pilot fees are credited per section 5.2; prices exclude taxes; invoicing monthly in arrears, 30-day terms.

### A.2 Pilot

| Item | Term |
|---|---|
| Duration | 30 days, one 15-day extension |
| Minimum volume | 300 submissions |
| Price | STANDARD tier, invoiced at pilot end |
| Credit | 100% of pilot fees credited against month one if signed within 30 days of the pilot report |
| Deliverable | Pilot report: volume, weekly review rate, coverage gaps by model, disputes, cost versus client baseline |

### A.3 B2C via partners (affiliate)

| Plan | Revenue share | Minimum per transaction (USD) | Partner obligation |
|---|---|---|---|
| STANDARD | 15% of profit | 15 | Expose SneakersLite authentication as a paid consumer service; monthly reconciliation |
| ADVANCED | 10% of profit | 12 | As STANDARD plus a minimum of 500 consumer authentications per month |

### A.4 Partner pricing adjustments

| Partner tier | Pricing effect |
|---|---|
| Launch partner | Agreed tier locked for 12 months regardless of volume dips |
| Integration partner | One tier below the partner's standalone volume on resold results |
| Channel partner | 10% of first-year net revenue on introduced clients that reach Live, paid quarterly |

## Appendix B. Partnership Agreement Templates

Each template is a term sheet. Square-bracketed fields are completed per deal; the CEO signs; the BD Lead files the signed copy in the partner register. Governing law Hong Kong unless agreed otherwise. The Data Protection Framework is annexed to every agreement.

### B.1 Launch Partner Term Sheet

1. Parties: Primefleet Digital Hong Kong Limited ("SneakersLite") and [Partner legal name] ("Partner"), [jurisdiction].
2. Purpose: Partner is SneakersLite's launch partner in [market] for AI sneaker authentication.
3. Term: 12 months from [start date], renewing annually unless either party gives 60 days' notice.
4. Volume commitment: Partner submits a minimum of [N] results per month from month [M].
5. Pricing: [tier] at USD [price] per result, locked for the term regardless of monthly volume; pilot credit of USD [amount] applied to month one.
6. Service: dashboard and REST API access; human review path with [24/12]-hour target; monthly report including review-rate curve and coverage gaps.
7. Coverage: priority on model-coverage requests for Partner's top [20] models; model list disclosed and updated monthly.
8. Data handling: [Hong Kong PDPO path / in-region path / client-hosted path]; human-reviewed cases returned to training under the agreed path; retention [period]; Data Protection Framework annexed.
9. Partner obligations: one reference call per quarter for a SneakersLite prospect; a named testimonial or quote; co-authored case study, each published only with Partner's written approval.
10. Naming rights: SneakersLite may name Partner publicly only after written approval; Partner may describe SneakersLite as its authentication provider.
11. Fees and invoicing: monthly in arrears, 30-day terms, USD.
12. Termination: either party on 60 days' notice; immediately for material breach uncured within 30 days or for a data-protection breach.
13. Contacts: SneakersLite [name, role]; Partner [name, role].

### B.2 Integration Partner Term Sheet

1. Parties: Primefleet Digital Hong Kong Limited ("SneakersLite") and [Partner legal name] ("Partner"), [jurisdiction].
2. Purpose: Partner embeds the SneakersLite API in its [inspection / logistics / software] service to its own clients ("End Clients").
3. Term: 12 months from [start date], renewing annually unless either party gives 60 days' notice.
4. Pricing: wholesale pricing one tier below Partner's standalone volume tier on all results resold to End Clients; Partner sets its own price to End Clients.
5. Revenue share or referral: [X]% of first-year net revenue on End Clients that contract directly with SneakersLite through Partner's introduction, paid quarterly.
6. Technical onboarding: integration per the SneakersLite integration playbook; sandbox access; go-live checklist signed by both parties.
7. Support: Partner provides first-line support to End Clients; SneakersLite provides second-line support with a [next business day] response target.
8. Joint go-to-market: at least one named End Client launched jointly per six months; SneakersLite lists Partner as an integration partner on sneakerslite.com once live.
9. Data handling: Partner is responsible for End Client consent and data path selection; SneakersLite processes under [path]; Data Protection Framework annexed.
10. Branding: Partner may state "authentication powered by SneakersLite"; no other use of marks without written approval.
11. Fees and invoicing: monthly in arrears, 30-day terms, USD; reconciliation statement of resold results each month.
12. Termination: either party on 60 days' notice; immediately for material breach uncured within 30 days or for a data-protection breach.
13. Contacts: SneakersLite [name, role]; Partner [name, role].

### B.3 Channel Partner (Referral) Term Sheet

1. Parties: Primefleet Digital Hong Kong Limited ("SneakersLite") and [Partner legal name or individual] ("Referrer").
2. Purpose: Referrer introduces qualified prospects to SneakersLite; no integration or volume obligation.
3. Term: 12 months from [start date], renewing annually unless either party gives 30 days' notice.
4. Qualified introduction: a warm introduction to the buyer of record at an organisation meeting the ideal customer profile in section 2, recorded in the pipeline register with Referrer named as source within 5 working days.
5. Referral fee: 10% of first-year net revenue received from an introduced client that reaches Live, paid quarterly against SneakersLite's statement; no fee on renewals or on clients already in the register.
6. Collateral: SneakersLite supplies a one-page overview, the pricing sheet and relevant articles; Referrer makes no pricing or service commitments on SneakersLite's behalf.
7. Conduct: no cold mass outreach in SneakersLite's name; compliance with applicable anti-bribery law; Referrer discloses the arrangement to the prospect.
8. Confidentiality: pipeline and pricing information shared under this agreement is confidential.
9. Termination: either party on 30 days' notice; fees on introductions made before termination remain payable for the first year of each client.
10. Contacts: SneakersLite [name, role]; Referrer [name, role].
