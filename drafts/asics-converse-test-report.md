# SneakersLite — Authentication Test Report: ASICS and Converse

**Period:** May – October 2026 · **Prepared:** 5 November 2026 · **Status:** preliminary, for the Cyberport CIP Stage 2 review (6 November 2026)
**Entity:** Primefleet Digital Hong Kong Limited

> Every figure carries its source line. `[pending — authentication logs]` marks a cell whose query is running and is not yet answered; it must not be read as a number. `[Chris]` marks a decision only Chris can give.

## 1. Purpose and what this report is not

Quantitative Milestone 2 of Stage 2 asks for three brands with 15 models each, evidenced by testing reports. This report covers the two brands that went live in the period, **ASICS** and **Converse**, and says plainly where the evidence is complete and where it is not.

Two facts frame everything below:

1. **The AI photo check has run in production since 6 October 2026.** It reads the box label and both size tags from the photos and checks them against the order and the catalogue. Before 6 October, authentication was done by human authenticators with rule-based auto-pass on tag codes. So "AI figures for six months" do not exist; AI figures exist for 6 October onward, and the item-level set analysed so far is **6–23 October 2026**. Six-month figures in this report are human-authentication volumes.
2. **The per-model counterfeit catch rate that a full testing report carries is not in here**, for the reason in section 6: not enough confirmed fakes of these two brands to measure one honestly.

## 2. Coverage — models supported

| Catalogue measure (product tables, 5 Nov 2026) | ASICS | Converse |
|---|---|---|
| Product records (excl. deleted / duplicate) | 436 | 358 |
| Records with a built reference gallery | 427 | 304 |
| Confirmed (gallery and name approved) | 101 | 198 |
| Name check passed | 164 | 58 |
| Distinct models in the records | 363 | 224 |
| New records per month, May → Oct 2026 | 0 · 0 · 2 · 3 · 137 · 20 | 0 · 0 · 2 · 1 · 230 · 52 |

Onitsuka Tiger is held as a separate brand (99 records) and is not counted under ASICS.

Top 15 models by number of catalogue records:

| # | ASICS | records | Converse | records |
|---|---|---|---|---|
| 1 | GT-2000 13 | 11 | Chuck Taylor All Star | 12 |
| 2 | Kids listings (generic) | 11 | All Star Light | 5 |
| 3 | Glideride Max | 7 | All Star | 5 |
| 4 | Gel-Kahana TR V2 | 3 | All Star High | 5 |
| 5 | GEL-Nimbus 10.1 | 3 | Pro Leather Double Logo High Top | 4 |
| 6 | Gel-Terrain | 3 | All Star 2V | 4 |
| 7 | Contend | 3 | Kids listings (generic) | 4 |
| 8 | Gel-Dedicate 8 | 3 | Chuck Taylor 1970s (custom) | 3 |
| 9 | Gel-Venture 6 | 3 | Pro Leather Double Logo Low Top | 3 |
| 10 | Gel-Flux 4 | 3 | Chuck Taylor All Star Low | 3 |
| 11 | Dunkshot MB 9 | 3 | All Star 100 Chunk Hi | 2 |
| 12 | GEL-PULSE 17 | 2 | SHAI 001 Lace Up | 2 |
| 13 | Japan S Sneakers | 2 | All Star Light PLTS GE OX | 2 |
| 14 | GEL-CONTANA GS | 2 | Chuck Taylor All Star High Top | 2 |
| 15 | Pre-Venture 8 | 2 | All Star 100 GTX RF OX | 2 |

Top 15 models by **authentication volume** (items authenticated May–Oct): `[pending — authentication logs]`. Models seen by the AI check in 6–23 Oct among flagged items (not a volume ranking): ASICS 1203A951 (two colourways), 1203B053, 1203B031, 1011B858, 1041A532, 1201A019, 1203A830 and Onitsuka-style H7F5K / H43GK codes; Converse A08261C, 166800C, A09492C, A07308C, 566775C, A11640C, A24015C, A19715C, 168816C.

For comparison (records / built gallery / confirmed / new May→Oct): Nike 1,131 / 1,088 / 59 / 5·3·6·53·50·364 (Jordan separate, 313 records); adidas 351 / 331 / 62 / 0·3·4·34·93·102; New Balance 242 / 102 / 16 / 0·0·0·0·109·71.

Source: product catalogue working tables, pulled 5 Nov 2026. These tables feed the site; records leave or change status after publishing, so "confirmed" understates what is live.

## 3. Volume — items authenticated per month

| Month 2026 | ASICS | Converse | Total |
|---|---|---|---|
| May | `[pending]` | `[pending]` | |
| June | `[pending]` | `[pending]` | |
| July | `[pending]` | `[pending]` | |
| August | `[pending]` | `[pending]` | |
| September | `[pending]` | `[pending]` | |
| October | `[pending]` | `[pending]` | |
| **Six months** | | | |

Source: authentication logs, May–Oct 2026, aggregated — query requested 5 Nov, answer expected before the review. All brands, AI check, 6–23 Oct 2026: **1,685 items, 5,006 photos** (source: AI photo check, 6–23 Oct 2026, partner warehouses, all brands).

## 4. Quality — outcome shares and turnaround

AI photo check, 6–23 Oct 2026, all brands (1,685 items):

| Measure | Value |
|---|---|
| AI result: match | 88.8% |
| AI result: caution | 4.5% |
| AI result: red | 5.9% |
| AI result: unreadable | 0.8% |
| Human verdict on the same items: pass | 93.0% |
| Human verdict: fail | 4.6% |
| Still open at pull time | 2.4% |
| Turnaround, median per photo | 4.7 s (daily medians 3.5–5.8 s) |
| Turnaround, 95th percentile per photo | under 8.6 s |
| Turnaround per item (three photos read in parallel) | usually under 10 s |
| Processing cost per photo at trial resolution | about US$0.0024 |

ASICS and Converse, flagged items only (the brand split of unflagged items is in the pending query):

| | ASICS | Converse |
|---|---|---|
| Items flagged by the AI (caution / red / unreadable) | 10 (2 caution, 1 red, 7 cleared on a retake) | 11 (6 red, 2 caution, 1 unreadable, 2 cleared on a retake) |
| Human verdict on the flagged items | 10 pass, 0 fail | 9 pass, 1 fail, 1 open |

Reading these: a *match* is an item whose label and tags agree with the order; *caution* and *red* send the item to an authenticator with the mismatch highlighted; *unreadable* asks the desk for a retake. The fail share across all inbound items is **not** a counterfeit catch rate — it is the share of what arrived that was rejected, for any reason.

Six-month pass / fail shares per brand: `[pending — authentication logs]`.

Source: AI photo check, 6–23 Oct 2026, partner warehouses (HK, SG), all brands unless stated.

## 5. What is specific to ASICS and Converse

- **Both brands print a DataMatrix code on the size tag that identifies one physical shoe** (as Nike's and adidas's QR codes do). That lets the check prove both shoes of the pair were photographed, which cannot be done for Puma or New Balance, whose tags carry only a product code.
- **Converse is unisex-sized.** One tag prints the men's and the women's size and the order may be in either scale; this produced most of Converse's red flags in the trial and needs a scale-aware size rule. Converse also re-numbers styles (159623C and 168510C are one shoe), so the check keeps a list of confirmed style pairs.
- **ASICS box labels print small, dense codes** (1203A951-100 style) that the reader often could not read at the trial's 640×480 camera setting; label legibility, not the model, was the limiting factor for ASICS in the trial.

Source: AI photo check owner, 5 Nov 2026.

## 6. Why the full QM2 testing report is not met, and what we did instead

The milestone's testing report calls for a measured catch rate per model: run known counterfeits through the system and count how many are caught. That needs a confirmed-counterfeit set per model large enough for the rate to mean something; we hold ourselves to at least 30 confirmed fakes per model before publishing a catch rate.

- **Genuine items are plentiful.** Every pair that passes through a partner warehouse is a genuine-side test, so false-flag behaviour on genuine ASICS and Converse pairs is measurable: in 6–23 Oct, all 10 flagged ASICS items and 9 of 11 flagged Converse items were passed by the authenticator, i.e. the flags were retakes and size-scale questions, not counterfeits.
- **Confirmed fakes for these two brands are not.** Confirmed-fail ASICS and Converse items across all models in May–Oct: `[pending — authentication logs]`. ASICS and Converse carry far less counterfeit pressure in our partners' flow than Nike or adidas, so the fakes needed for a per-model test did not arrive in six months; one confirmed Converse fail in the 6–23 Oct flagged set is the scale of it.
- **We chose not to publish a catch rate built on single-digit samples.** "100% of 1 fake caught" reads well and means nothing; a reviewer checking the deck against the site must find the same discipline on both.
- **The AI check itself is five weeks old in production** (6 Oct). The six months before it are human-authentication records, which prove volume and outcome shares but not AI performance.
- **Third brand.** `[Chris: brand name and status]`.

What was done inside the period: ASICS and Converse catalogues were built out (427 and 304 reference galleries, almost all created in September–October), both brands ran at production volume through the same desk, the AI check went live on 6 October and its first three weeks were measured item by item. That is the operational half of a testing report; the counterfeit half is the gap.

## 7. Next — closing the gap in Stage 3

1. **Build the counterfeit reference set.** Source confirmed fakes per brand through partner returns and the Korean 3PL channel; target 30 per model for the top 15 models by volume; log provenance for each item. Owner and date: `[Chris]`.
2. **Run the per-model test** once a model reaches the threshold and publish catch rate and false-flag rate side by side.
3. **Fix the two known brand-specific gaps:** scale-aware size rule for Converse; higher capture resolution for ASICS box labels.
4. **Third brand** `[Chris]`, with the same discipline from day one.
5. Report sections 3–4 monthly in the partner report.

---
*Prepared by SneakersLite (Primefleet Digital Hong Kong Limited) for the Cyberport Incubation Programme Stage 2 review. Figures are aggregated operational data; no customer, order or item-level data is included.*
