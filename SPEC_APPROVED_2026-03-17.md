# SneakersLite Website Build — Requirements Digest

**Date Captured:** 2026-03-17  
**Source:** Conversation with Claude + Wix/Aria build handover  
**Status:** Requirements locked for Next.js implementation

---

## Business Context

- **Company:** SneakersLite by Prime Fleet
- **Business Model:** B2B and B2B2C AI-powered digital sneaker authentication
- **USP (Core):** Faster, Cheaper, and More Consistent than human authentication + hardware photo-box authentication
- **Geographic Presence:** Hong Kong, China, Singapore
- **Target Market:** APAC retailers, brands, marketplaces, logistics providers
- **Domain:** sneakerslite.com (not yet connected)

---

## Site Structure — 4 Pages

### Page 1: Home (PRIMARY FOCUS)

**Hero Section** (must render FIRST on page load)
- Headline: "Authenticate Faster. Cheaper. Consistently."
- Subheadline: "AI-powered digital sneaker authentication for B2B partners — no photo-boxes, no human error."
- CTA Button: "Request a Demo" → Links to Contact page

**USP Section** (3 cards in row, responsive)
- Card 1: `01 FASTER`
  - Copy: "Real-time AI results in seconds"
- Card 2: `02 CHEAPER`
  - Copy: "Fraction of the cost of hardware or human authentication"
- Card 3: `03 CONSISTENT`
  - Copy: "Zero fatigue, zero subjectivity — same standard every time"
- **Font constraint:** Headings ~32–40px max (to prevent word-wrap on desktop)

**Authentication Dashboard Section**
- Image placeholder (with caption underneath)
- Caption: "Live dashboard used by our partners to manage and track authentication requests at scale."
- This is a visual/lifestyle section showing the product in action

**Products Authenticated Section**
- Visual grid or carousel showing sneaker brands/logos authenticated by SneakersLite
- (Design TBD: how many brands to show, static grid vs carousel)

**Our Presence Section**
- Display: Hong Kong | China | Singapore
- Format: TBD (flags, text, map, etc.)

---

### Page 2: About Us ✅ (Complete, no changes)

**Sections:**
- Hero/Intro with Vision & Mission statements:
  - **Slogan:** "Verify Every Sneaker. Scale Businesses. Empower Consumers."
  - **Vision:** "To become the most trusted and innovative digital authentication provider in APAC — setting the standard for how businesses and consumers verify the products they buy and sell."
  - **Mission:** "We build AI-powered authentication infrastructure that gives businesses the confidence to scale and consumers the certainty to buy — one verified sneaker at a time."

- Milestones (2 cards):
  - **Card 1 — CyberPort Creative Micro Fund (2024):** "Authenticated over 34,200 items in 3 months, achieved 71% purchase conversion rate over a 2-month pilot with an anonymous B2B partner."
  - **Card 2 — CyberPort Incubation Program:** "Expanded authenticated brand coverage from 3 to 8 brands."

- Design: Minimal, milestone headings in cyan accent, CyberPort logo placeholders (to be replaced pre-launch)

---

### Page 3: Security ✅ (Complete, no changes)

**Navigation Label:** "Security" (not "Security & Data Protection")

**Section A — Privacy Policy & Terms of Service**
- PDPO (Hong Kong) compliant
- 6 collapsible accordion blocks:
  1. Data We Collect
  2. How We Use Your Data
  3. Data Retention & Deletion
  4. Third-Party Sharing
  5. Your Rights Under PDPO
  6. Data Enquiries (directs to Get Started/Contact page — no public email)

**Section B — Data Inventory & Flow Map**
- 3-column table (Data Type | Storage Location | Access Level):
  - Authentication Images → AWS S3 → Internal AI System Only
  - Business Contact Details → Encrypted CRM → Sales Team Only
  - Authentication Hash/Keys → AWS RDS (AES-256 Encrypted) → System + Authorized Partners Only
  - Usage & Analytics Data → AWS CloudWatch → Internal Team Only
- Paragraph below table explaining cryptographic hashing + AES-256 storage

---

### Page 4: Contact ✅ (Complete, no changes)

**Heading:** "Get In Touch"  
**Subheading:** "Interested in partnering with SneakersLite? We'd love to hear from you."

**Form Fields:**
- Full Name (text, required)
- Email Address (email, required)
- Business Nature (dropdown, required): Retailer | Brand / Manufacturer | Marketplace / Platform | Logistics & Fulfilment | Investor | Media | Other
- Message / Enquiry (text area, required, placeholder: "Tell us about your business and how we can help...")
- Submit Button: "Send Message" (cyan accent color)

**Important:** No public email displayed — form is sole contact method

---

## Navigation Header ✅ (Complete, no changes)

**Link Order:** Home | About Us | Security | Get Started

**Link Styles:**
- Home, About Us, Security → plain text links
- Get Started → cyan filled CTA button, aligned right with 20px margin, links to Contact page

**Mobile:** Hamburger menu (≡) on right

---

## Design System

- **Theme:** Dark/black background throughout entire site
- **Accent Color:** Cyan (#00FFFF range) — used for CTA buttons, highlights, headings
- **Typography:**
  - Headings: DM Sans or Montserrat Bold (enterprise SaaS feel)
  - Body: Inter or DM Sans Regular
  - Inspiration: Stripe, Vercel, Notion (clean, intelligent, trusted)
- **Tone:** Enterprise, trusted, intelligent — NO casual or playful elements
- **Logo Placement:** "SneakersLite" text + icon in top left header

---

## Key Public Stats (Approved for Website)

- 34,200 items authenticated in 3 months (CyberPort Creative Micro Fund 2024)
- 71% purchase conversion rate (2-month pilot, anonymous partner)
- Brand coverage expanded from 3 → 8 brands

---

## Technical Infrastructure (For Reference)

- **Cloud:** AWS (S3, RDS, CloudWatch)
- **Data Compliance:** PDPO Hong Kong
- **Domain:** sneakerslite.com (to be connected after site is polished)

---

## Known Issues from Wix Build (to avoid in Next.js)

1. ❌ Hero section renders below USP cards instead of first
2. ❌ USP card headings (CHEAPER, CONSISTENT) word-wrap mid-word on desktop
3. ❌ Mobile "GET STARTED" button too large, crowds logo
4. ❌ CyberPort logo placeholders (need real logos before launch)

---

## Clarifications — ANSWERED (2026-03-17)

✓ **1. Products Authenticated Section:** Static grid, NO hyperlinks, color/hue hover effect for responsiveness

✓ **2. Our Presence Section:** Text-based with flag icons, each region in button-like containers

✓ **3. Authentication Dashboard:** Custom-coded dashboard referencing the Authenticator View design
  - Design inspiration: Dark background, yellow/gold labels, teal/cyan data fields
  - Color scheme: Navy/charcoal bg, gold (#FFD700 range) labels, cyan/turquoise values
  - Components: Product UUID, Product Name, SKU, Size, Material, Storage, Monetless $$$, Photo By, Processing Office, Sell Code, Sell Issues, Unique Codes, Check Details
  - Right sidebar: Product image preview
  - Bottom: Action buttons (RELAX, OK, Photo Request, To Deliver, QCF, LCF style)
  - Reference image: `SneakersLite_Dashboard_Reference.jpg`

---

## Build Status

**Status:** Ready to build Next.js implementation

**Confirmed Components:**
- ✓ 4-page structure (Home, About, Security, Contact)
- ✓ Dark theme with cyan accent (#00FFFF range)
- ✓ Enterprise SaaS tone (Stripe/Vercel style)
- ✓ Products grid (static, hover effects)
- ✓ Presence section (flags + button-like containers)
- ✓ Custom dashboard (matching Authenticator View design)
- ✓ Responsive mobile/desktop

**Awaiting:** Final confirmation before build begins

---

**Captured by:** Jarvis (Chief Engineer)  
**Date:** 2026-03-17 04:15 UTC  
**Updated:** 2026-03-17 with dashboard reference image and clarification answers
