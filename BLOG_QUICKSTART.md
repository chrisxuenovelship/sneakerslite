# Blog Setup Quickstart

## ⚡ 5-Minute Setup

### ✅ Step 1: Create Sanity Project (5 min)
```bash
1. Go to sanity.io → Sign up (free)
2. Create project: "sneakerslite-blog"
3. Copy Project ID and create API token
```

### ✅ Step 2: Add Environment Variables
Create `.env.local` in project root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=YOUR_TOKEN
```

### ✅ Step 3: Install Packages
```bash
npm install
npm install @sanity/client next-sanity
```

### ✅ Step 4: Create Article Schema in Sanity Studio
Log into `https://<your-project-id>.sanity.studio`

Create Document Type: **article** with fields:
- `title` (string, required)
- `slug` (slug from title, required)
- `author` (string, required)
- `excerpt` (text, required)
- `body` (block content, required)
- `mainImage` (image)
- `publishedAt` (datetime, required)
- `category` (string, enum)
- `seoTitle` (string)
- `seoDescription` (text)

**Full schema:** See `/docs/BLOG_SETUP.md` (Option B)

### ✅ Step 5: Publish First Article
1. Go to Sanity Studio
2. Create new Article
3. Fill fields (use dummy content for testing)
4. Publish
5. Check `/blog` on your site → Should see article in grid

### ✅ Step 6: Deploy to Vercel
```bash
git add .
git commit -m "feat: Add Sanity.io blog infrastructure"
git push origin main
```

Add env vars to Vercel dashboard → Auto-deploys

---

## 🎯 Result

✅ Blog page at `/blog`  
✅ Individual articles at `/blog/article-slug`  
✅ "Blog" button in header (between Security & Get Started)  
✅ SEO-optimized (meta tags, OpenGraph)  
✅ Zero hosting cost  
✅ Production-ready  

---

## 📝 Post Publishing Workflow

1. Go to Sanity Studio
2. Create → Article
3. Fill fields
4. Publish
5. Wait 30 sec
6. Check `/blog` → Done

---

## 📚 Full Docs
See `/docs/BLOG_SETUP.md` for detailed setup, schemas, and advanced features.

---

**Status:** Ready to publish case studies on authentication & trends
**Next articles:** Recommend authentication challenges, SNKRs releases, market trends
