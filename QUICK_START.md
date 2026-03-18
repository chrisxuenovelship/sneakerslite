# SneakersLite - Quick Start Guide 🚀

## ⚡ Get Running in 3 Minutes

### 1️⃣ Install Dependencies
```bash
cd /root/.openclaw/workspace/sneakerslite
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

Open **http://localhost:3001** (or 3000)

### 3️⃣ Make Changes
Edit files in `app/` folder and see hot-reload in action!

---

## 📍 File Locations

### Pages
- **Home**: `app/page.tsx` (includes all components)
- **About**: `app/about/page.tsx`
- **Contact**: `app/contact/page.tsx`
- **Security**: `app/security/page.tsx`

### Components (Reusable)
```
app/components/
├── Navigation.tsx    # Top navigation
├── Footer.tsx        # Bottom footer
├── Hero.tsx          # Main headline
├── USPCards.tsx      # 3 value cards
├── Dashboard.tsx     # Auth dashboard
├── ProductsGrid.tsx  # 6 products
└── Presence.tsx      # Regional buttons
```

### Styles
- **Global**: `app/globals.css`
- **Config**: `tailwind.config.ts`

### API
- **Contact Form**: `app/api/contact/route.ts`

---

## 🎨 Common Changes

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'brand-cyan': '#06b6d4',      // Primary accent
  'brand-dark': '#1a1a1a',      // Text color
}
```

### Change Text Content
- Hero: `app/components/Hero.tsx`
- About: `app/about/page.tsx`
- Security: `app/security/page.tsx`
- Contact: `app/contact/page.tsx`

### Change Products
Edit `app/components/ProductsGrid.tsx`:
```typescript
const products = [
  {
    name: 'Your Product',
    model: 'Model Name',
    price: '$999',
    icon: '👟',
    color: 'from-red-100 to-red-50',
  },
  // Add more...
]
```

### Add Contact Email
Edit `.env.local`:
```
CONTACT_EMAIL=your@email.com
```

---

## 🔧 Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Check code quality |

---

## 🌐 Deployment

### To Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### To Production Vercel
```bash
vercel --prod
```

---

## 📱 Test Responsive Design

| Device | Size |
|--------|------|
| Mobile | Open DevTools: Ctrl+Shift+I → Toggle device |
| Tablet | ~768px width |
| Desktop | >1024px width |

All pages are mobile-first responsive ✅

---

## 🐛 Troubleshooting

**Port 3000 busy?**
```bash
npm run dev -- -p 3001
```

**Build fails?**
```bash
rm -rf .next
npm run build
```

**Styles not updating?**
```bash
# Clear cache
rm -rf .next
npm run dev
```

---

## 📧 Contact Form Setup

### Option A: Dev Mode (Console Only)
Works by default - messages logged to console.

### Option B: Email Integration
1. Get API key: https://resend.com
2. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
3. Uncomment code in `app/api/contact/route.ts`
4. Run `npm install resend`
5. Restart: `npm run dev`

---

## 📊 Page Structure

### Home Page Flow
```
Navigation (sticky)
  ↓
Hero (headline + CTA)
  ↓
USP Cards (3 features)
  ↓
Dashboard (auth showcase)
  ↓
Products Grid (6 items)
  ↓
Presence (3 locations)
  ↓
Footer (links + info)
```

### Component Nesting
```tsx
// Home page structure:
<Navigation />
<Hero />
<USPCards />
<Dashboard />
<ProductsGrid />
<Presence />
<Footer />
```

---

## 🎯 Customization Examples

### Change Hero Headline
**File**: `app/components/Hero.tsx`
```typescript
<h1>
  Your New
  <span className="text-brand-cyan">Headline</span>
</h1>
```

### Add New Product
**File**: `app/components/ProductsGrid.tsx`
```typescript
{
  name: 'New Product Name',
  model: 'Model',
  price: '$Price',
  icon: '👟',
  color: 'from-blue-100 to-blue-50',
}
```

### Change Dashboard Metrics
**File**: `app/components/Dashboard.tsx`
```typescript
const metrics = [
  { label: 'Your Metric', value: 'Your Value' },
  // ...
]
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Full project overview |
| `BUILD_SUMMARY.md` | Complete build details |
| `DEPLOYMENT.md` | Deployment guide |
| `QUICK_START.md` | This file |

---

## 💡 Tips & Tricks

✅ **Hot Reload Works**: Save file → see changes instantly
✅ **Mobile Preview**: Use browser DevTools (F12)
✅ **Type Safety**: TypeScript catches errors early
✅ **Tailwind IntelliSense**: Install VS Code extension
✅ **Git Ready**: Run `git init` to start version control

---

## 🚀 Next Level

### Want to Add Features?
1. Pages: Create `app/feature/page.tsx`
2. Components: Add to `app/components/`
3. API Routes: Add to `app/api/`
4. Database: Use Prisma (optional)

### Want to Deploy?
See `DEPLOYMENT.md` for:
- Vercel setup
- Custom domains
- Environment variables
- Monitoring

---

## ✨ Current Features

✅ 4 fully responsive pages
✅ 7 reusable components
✅ Contact form with validation
✅ Dark dashboard showcase
✅ Mobile hamburger menu
✅ Global location buttons
✅ Security/Privacy info
✅ Production-ready code

---

## 🎓 Learning Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 📞 Quick Help

**Something broken?**
1. Check console errors (F12)
2. Restart dev server (Ctrl+C, then `npm run dev`)
3. Check `BUILD_SUMMARY.md` for known issues
4. Clear cache: `rm -rf .next`

**Want to change something?**
1. Find the file in the list above
2. Edit the content
3. Save (hot reload!)
4. Test on mobile (DevTools)

---

**Ready? Start coding!** 🎉

```bash
npm run dev
```

Visit http://localhost:3001 🚀
