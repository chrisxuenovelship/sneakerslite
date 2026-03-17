# SneakersLite Dashboard Component — Detailed Specification

**Date:** 2026-03-17  
**Status:** AWAITING SNEAKER IMAGE - DO NOT BUILD YET  
**Build Trigger:** Image received + Chris says "Good and Ready"

---

## Dashboard Container

- **Background:** Dark (#000000)
- **Accent Color:** Cyan (#00FFFF)
- **Layout:** Two-panel responsive design
- **Aesthetic:** Enterprise SaaS (Stripe/Vercel level)
- **Animations:** Smooth transitions & hover effects
- **Responsive:** Fully mobile-friendly

---

## Panel Layout

### Left Panel (40% width)
- **Purpose:** Large sneaker image showcase
- **Content:** Attached sneaker image (AWAITING)
- **Styling:** Clean frame, centered, responsive scaling

---

### Right Panel (60% width) — Split into Three Sections

#### Section 1: Product Details (Top 20%)
**4 Information Cards:**
1. Product Name
2. Model ID: 153265-006
3. GTIN: 0195866361881
4. Request ID: (generated format, e.g., `AUTH-2026-SKU-001`)

- **Layout:** Clean, minimal cards
- **Text Color:** White/light gray
- **Background:** Slightly lighter than page bg (for card separation)

---

#### Section 2: Metrics (Bottom 60%, Split 2 Columns)

**8 Metrics displayed in alternating left-right layout:**

| # | Metric | Value/Type | Display |
|---|--------|-----------|---------|
| 1 | Size Tag ID | Status | "Verified" badge (no progress bar) |
| 2 | Size Tag Font & Spacing | % | 98.2% (progress bar) |
| 3 | Color Accuracy | % | 97.6% (progress bar) |
| 4 | Outer Stitching | % | 96.1% (progress bar) |
| 5 | Logo Precision | % | 92.4% (progress bar) |
| 6 | Insoles | % | 93.9% (progress bar) |
| 7 | Midsole Stitching | % | 97.7% (progress bar) |
| 8 | Box/Packaging | % | 93% (progress bar) |

**Layout Rules:**
- Display in alternating left/right columns
- Progress bars: Height and width aligned consistently
- First metric (Size Tag ID): Verified badge only, no progress bar
- Metrics 2-8: Progress bars with percentage values
- Colors: Cyan progress bars, white labels, light gray secondary text

---

#### Verification Checks Section (Below Metrics)

**Grid: 2-column layout, 6 items**

Each item has:
- Green ✓ PASS badge
- Descriptive text

**6 Verification Items:**
1. Authentic Materials Detected
2. Logo Shape Alignment Pass
3. Stitching Pattern and Count Verified
4. Serial Number Checks Verified
5. Font and Spacing with Tolerance
6. Counterfeit Markers: None

---

## Summary Section

- **Confidence Score:** 96.9%
  - Display as large, bold cyan text
  - Label above, percentage below

- **Verdict:** AUTHENTIC
  - Large, bold, cyan or green color
  - High visual prominence

---

## CTA Footer

- **Button:** "Request a Demo"
- **Action:** Links to Contact page
- **Style:** Cyan background, white text, hover effects
- **Positioning:** Bottom of dashboard, full width or centered

---

## Responsive Behavior

- **Desktop:** Left 40% | Right 60% (3 sections stacked)
- **Tablet:** Responsive scaling, columns adjust
- **Mobile:** Single column layout (image on top, right panel sections below)
- **Animations:** Smooth on scroll/load, hover state effects

---

## Color Scheme (Locked)

- **Background:** #000000 (pure black)
- **Accent:** #00FFFF (cyan) or #06b6d4 (secondary cyan)
- **Text:** #FFFFFF (white) / #e0e0e0 (light gray)
- **Progress Bars:** Cyan (#00FFFF)
- **Badge (Verified/Pass):** Green (#22c55e) or cyan
- **Card BG:** #111111 or #1a1a1a (slightly lighter than page)

---

## Status

✅ **IMAGE RECEIVED:** SneakersLite_Dashboard_Sneaker_Reference.webp (Jordan 12s, black/white colorway)  
✅ **READY TO BUILD** when Chris says "Good and Ready"  

---

**Captured by:** Jarvis (Chief Engineer)  
**Date:** 2026-03-17 04:45 UTC  
**Image Status:** ✅ LOCKED IN  
**Build Trigger:** Awaiting "Good and Ready" signal
