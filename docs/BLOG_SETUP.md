# SneakersLite Blog Setup Guide

## Overview

The SneakersLite blog is powered by **Sanity.io** (free tier) + **Next.js** + **Vercel**. This configuration provides:
- ✅ Zero hosting costs (free tier)
- ✅ Seamless Next.js integration
- ✅ SEO-first architecture
- ✅ ISR (Incremental Static Regeneration) for fast updates
- ✅ Full content control (authentication, case studies, trends)

---

## Phase 1: Sanity.io Setup (15 minutes)

### 1. Create Sanity Account & Project

1. Go to [sanity.io](https://www.sanity.io)
2. Sign up (free tier available)
3. Create a new project:
   - **Project name:** `sneakerslite-blog`
   - **Template:** Blank
   - **Dataset:** `production`

### 2. Get Project Credentials

After creating the project, grab these values:
- **Project ID:** Found in Sanity dashboard (Settings → Project)
- **Dataset:** `production`
- **API Token:** Settings → API Tokens → Add new token
  - Permissions: `Editor` scope (for Sanity studio)
  - Save this token securely

### 3. Deploy Sanity Studio (Optional but Recommended)

Sanity Studio is the CMS interface for writing articles:

```bash
npm install -g @sanity/cli
sanity init

# Follow prompts to connect your Sanity project
# Then deploy:
sanity deploy

# Your studio will be available at: https://<your-project-id>.sanity.studio
```

---

## Phase 2: Integrate with Next.js (10 minutes)

### 1. Set Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID_HERE
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=YOUR_API_TOKEN_HERE
```

### 2. Install Dependencies

```bash
npm install @sanity/client next-sanity
```

### 3. Verify Integration

The blog infrastructure is already in place:
- `/app/blog/page.tsx` - Blog listing page
- `/app/blog/[slug]/page.tsx` - Individual article pages
- `/lib/sanity.ts` - Sanity client + GROQ queries
- `/app/components/Navigation.tsx` - Updated with Blog link

---

## Phase 3: Create Sanity Schema (15 minutes)

You'll need to define the **Article** content type in Sanity.

### Option A: Use Sanity Studio UI (Easiest)

1. Go to your Sanity Studio: `https://<project-id>.sanity.studio`
2. Create a new **Document Type** called "article" with these fields:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | String | ✅ | Article headline |
| `slug` | Slug | ✅ | Auto-generate from title |
| `author` | String | ✅ | Author name |
| `excerpt` | Text | ✅ | Summary for card preview |
| `body` | Block Content | ✅ | Main article content |
| `mainImage` | Image | | Featured image (recommended) |
| `publishedAt` | DateTime | ✅ | Publication date (default: now) |
| `category` | String | | E.g., "Authentication", "Trends", "Case Study" |
| `seoTitle` | String | | Override title for meta tags (max 60 chars) |
| `seoDescription` | String | | Meta description (max 160 chars) |

### Option B: Use Schema Code (Advanced)

Create `schemas/article.ts` in your Sanity project directory:

```typescript
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Authentication', value: 'Authentication' },
          { title: 'Case Study', value: 'Case Study' },
          { title: 'Trends', value: 'Trends' },
          { title: 'Technology', value: 'Technology' },
        ],
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'SEO Title (optional)',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description (optional)',
      type: 'text',
    },
  ],
}
```

---

## Phase 4: Publish Your First Article (10 minutes)

### 1. Go to Sanity Studio

Visit: `https://<project-id>.sanity.studio`

### 2. Create New Article

1. Click **+ New**
2. Select **Article**
3. Fill in the fields:
   - **Title:** "Real vs Fake: The Cost of Authentication"
   - **Author:** "SneakersLite Team"
   - **Excerpt:** "A deep dive into product verification challenges..."
   - **Body:** Write your content
   - **Category:** "Authentication"
   - **Publish At:** Today
4. Click **Publish**

### 3. View on Frontend

After ~30 seconds, visit: `https://sneakerslite.com/blog`

Your article should appear in the grid. Click it to see the full article page.

---

## Phase 5: Deploy to Vercel (5 minutes)

### 1. Add Environment Variables to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Select the SneakersLite project
3. Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `SANITY_API_TOKEN` = your API token

### 2. Deploy

```bash
git add .
git commit -m "feat: Add Sanity.io blog infrastructure with header navigation"
git push origin main
```

Vercel will auto-deploy. Check deployment status in the Vercel dashboard.

### 3. Enable ISR (On-Demand Revalidation)

Add this API route to handle Sanity publish events:

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const secret = request.headers.get('x-sanity-webhook-secret')

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]', 'page')
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return Response.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
```

Then set up a webhook in Sanity:
1. Sanity Settings → Webhooks
2. Add Webhook:
   - **URL:** `https://sneakerslite.com/api/revalidate`
   - **Trigger on:** Publish
   - **Header:** `x-sanity-webhook-secret: <your-secret-value>`

---

## FAQ

### Q: Does Sanity's free tier have limitations?
**A:** Yes, but generous for small projects:
- Up to 1 project
- 500K API calls/month (plenty for 1-2 posts/month)
- 5GB asset storage
- No custom roles

For 1-2 posts/month, you'll use ~10K API calls. Upgrade if you go beyond 5+ posts/month.

### Q: How do I update an article?
**A:** 
1. Go to Sanity Studio
2. Open the article
3. Edit fields
4. Click **Publish**
5. Frontend updates within 30 seconds (ISR)

### Q: Can I schedule articles?
**A:** Yes! Set `publishedAt` to a future date. Articles will publish automatically at that time.

### Q: How do I add images to the body?
**A:** In Sanity's block editor, add image blocks. Images are hosted on Sanity's CDN at no cost.

### Q: What's the SEO setup?
**A:** 
- Open Graph tags auto-generated from `seoTitle` and `seoDescription`
- Dynamic meta tags in `generateMetadata()` (Next.js 13+)
- Sitemap auto-generated at `/sitemap.xml` (requires setup)
- Structured data for "Article" schema included

---

## Next Steps

1. **Add Categories Page:** Create `/blog/[category]/page.tsx` to filter articles by category
2. **Add Search:** Implement full-text search in blog listing
3. **Add Related Articles:** Show 3 related articles at the bottom
4. **Analytics:** Connect Google Analytics or Vercel Analytics
5. **Subscribe Form:** Add email signup for new articles (use Resend for transactional emails)

---

## Support

- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **next-sanity:** https://github.com/sanity-io/next-sanity

---

**Status:** ✅ Ready for article publishing
**Last Updated:** 2026-03-19
