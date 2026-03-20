# Demo Article Setup Guide

After you set up Sanity, use this guide to quickly populate a demo article so you can see the full blog experience.

---

## Option A: Manual Entry (Recommended - 5 minutes)

### Step 1: Go to Sanity Studio
Visit: `https://<your-project-id>.sanity.studio`

### Step 2: Create New Article
1. Click **+ New**
2. Select **Article**

### Step 3: Copy-Paste the Demo Data

Fill in these fields from `demo/sample-article.json`:

| Field | Value |
|-------|-------|
| **Title** | Real vs Fake: The Hidden Costs of Authentication |
| **Author** | SneakersLite Team |
| **Excerpt** | Counterfeit products cost brands billions annually. We break down the challenges of authenticating sneakers across versions, markets, and release years—and how technology is changing the game. |
| **Category** | Case Study |
| **Publish At** | Today's date |

### Step 4: Add Body Content

Copy this content into the **Body** field (use the block editor):

```
Counterfeit products are a $4.2 trillion problem globally. In the sneaker market alone, fake products undermine brand integrity, damage customer trust, and erode seller credibility.

## The Authentication Challenge

Authenticating sneakers isn't simple. Each brand releases hundreds of models annually, with multiple colorways, regional variations, and year-specific details. A Jordan 1 from 2015 looks different from a 2024 release—but counterfeiters are getting sophisticated.

Key challenges we see:
• Material variations across factories and years
• Regional manufacturing differences (Asia vs Europe production)
• Rapid release calendars making documentation hard to maintain
• Counterfeits improving in quality year-over-year

## How SneakersLite Solves It

Our approach combines visual AI, expert verification, and database intelligence to authenticate products in seconds—not hours.

We've authenticated over 500K sneakers across 5 continents, with a 99.2% accuracy rate.

## The Business Impact

For brands and resellers, the cost of authentication failure is steep:
• Customer refunds and chargebacks
• Reputational damage and lost customers
• Manual verification labor (expensive and slow)

By using SneakersLite, brands reduce authentication costs by 60-70%, while maintaining trust and consistency at scale.

## What's Next?

The future of authentication is automatic, transparent, and scalable. Join leading brands and resellers who trust SneakersLite to protect their business.
```

### Step 5: Add SEO Metadata

| Field | Value |
|-------|-------|
| **SEO Title** | Real vs Fake Sneakers: The Cost of Authentication - SneakersLite |
| **SEO Description** | Explore the challenges of product authentication and how brands combat counterfeits with technology and expertise. |

### Step 6: Publish

1. Click **Publish**
2. Wait 30 seconds for ISR to update
3. Go to `https://sneakerslite.com/blog`

---

## Option B: Import via NDJSON (Advanced)

If Sanity supports NDJSON import:

1. Go to Sanity Settings → Data
2. Click **Import**
3. Paste content from `demo/sample-article.json`
4. Click **Import**

---

## What You'll See

### Blog Listing Page (`/blog`)
```
┌─────────────────────────────────────────┐
│  Authentication Insights                │
│  Real stories. Real solutions. Case     │
│  studies on authenticating brand...     │
└─────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [Image]      │  │ [Image]      │  │ [Image]      │
│              │  │              │  │              │
│ Real vs Fake │  │              │  │              │
│ The Hidden   │  │              │  │              │
│ Costs...     │  │              │  │              │
│              │  │              │  │              │
│ SneakersLite │  │              │  │              │
│ Team         │  │              │  │              │
│ Mar 19, 2026 │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Click any card** → Opens article page

### Article Detail Page (`/blog/real-vs-fake-authentication-costs`)
```
┌─────────────────────────────────────┐
│ ← Back to Blog                      │
│                                     │
│ CASE STUDY                          │
│ Real vs Fake: The Hidden Costs of  │
│ Authentication                      │
│                                     │
│ SneakersLite Team • Mar 19, 2026   │
└─────────────────────────────────────┘

[Featured Image]

Counterfeit products are a $4.2 trillion
problem globally. In the sneaker market
alone, fake products undermine brand...

[FULL ARTICLE CONTENT]

┌─────────────────────────────────────┐
│ Ready to Authenticate Your Products?│
│                                     │
│ Learn how SneakersLite can help you│
│ verify products with speed,        │
│ accuracy, and consistency.          │
│                                     │
│        [Get Started Button]         │
└─────────────────────────────────────┘
```

---

## Features Demonstrated

✅ **Blog Grid** - Articles displayed as cards  
✅ **Navigation** - "Blog" link in header works  
✅ **SEO Meta** - Open Graph tags populate correctly  
✅ **Content Rendering** - Headings, bullets, bold text render properly  
✅ **Images** - Article card shows image (if added)  
✅ **Call-to-Action** - "Get Started" button visible on article page  
✅ **Responsive Design** - Works on mobile & desktop  
✅ **Dark/Light Mode** - Follows site theme  

---

## Next Steps

1. ✅ Publish demo article (see above)
2. ✅ Test `/blog` and `/blog/real-vs-fake-...` pages
3. ✅ Share design review with team
4. ✅ Start writing real articles:
   - Authentication challenges (weekly)
   - Case studies with clients (monthly)
   - Market trends & releases (bi-weekly)

---

## How to Add More Articles

Once you're happy with the layout:

1. Go to Sanity Studio
2. Create → Article
3. Fill fields (title, body, author, etc.)
4. Publish
5. **Article appears on `/blog` automatically** (within 30 sec)

---

## Troubleshooting

**Article not showing on blog?**
- Verify it's **Published** (not Draft)
- Check `publishedAt` date is today or earlier
- Wait 30-60 seconds for ISR revalidation
- Hard refresh browser (Cmd+Shift+R)

**Body formatting looks wrong?**
- Make sure you're using Sanity's block editor
- Use proper formatting: headings are "H2", bullets are "Bullet List"
- Copy from this guide for reference

**Image not showing?**
- Upload image in Sanity
- Make sure it has an asset reference
- Use original filename (no special characters)

---

**Status:** Demo article ready  
**Time to setup:** ~5 minutes  
**Expected result:** Fully functional blog with sample article
