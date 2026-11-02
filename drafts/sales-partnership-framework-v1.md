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

### 8.1 Discovery call (30 minutes)

1. Current process: who authenticates today, how many people, what turnaround, what it costs per item all-in.
2. Volume and shape: monthly items, peak weeks, batch or single-item, share of catalogue outside Nike and Jordan.
3. Failure cost: last counterfeit that reached a buyer; what it cost in refunds, time and reputation.
4. Coverage: top 20 models by volume (we check against current model-level coverage before the next call).
5. Data: where images are stored, which jurisdiction, whether seller identity is attached.
6. Decision: who signs, by when, what a pilot would need to show.

### 8.2 Objection handling

- "Our inspectors are better than any model." Agree on the hard cases; the system routes those to them. The value is the 80 to 90% of items that do not need an expert, and consistency on the rest.
- "What is your accuracy?" Do not quote a single number. Show the confidence score and verification breakdown, explain the threshold and review path, and propose a pilot measured on review rate and disputes against their own baseline.
- "Our data cannot leave the country." Offer the in-region or client-hosted path (section 5.4) and the Data Protection Framework.
- "We will build it ourselves." Walk through the build-vs-buy article: data acquisition (verified fakes), model maintenance per release cycle, and the time to usable confidence on a new model.
- "You are a small company." Cyberport incubation, named partners in three markets, published framework and pricing, and a pilot that costs them one month at STANDARD tier.

### 8.3 Pilot to contract

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
