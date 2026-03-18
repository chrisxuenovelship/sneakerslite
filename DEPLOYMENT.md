# SneakersLite Deployment Guide

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Server will start on http://localhost:3000 (or 3001 if 3000 is busy)
```

### Production Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Vercel Deployment

### Option 1: Via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Option 2: Via Git Push

1. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial SneakersLite website commit"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/sneakerslite.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Visit https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Option 3: Direct Vercel Integration

```bash
# Using Vercel.json configuration
vercel --prod --env RESEND_API_KEY=your_key_here
```

## Environment Variables

### Required for Email
- `RESEND_API_KEY` - Get from https://resend.com

### Optional
- `CONTACT_EMAIL` - Defaults to chrisxue@novelship.com

### In Vercel Dashboard
1. Go to Project Settings → Environment Variables
2. Add `RESEND_API_KEY`
3. Click "Save"
4. Redeploy

## Configuration Files

### next.config.js
```javascript
// Configured for:
// - React Strict Mode (development debugging)
// - Image optimization disabled for Vercel
```

### tailwind.config.ts
```typescript
// Custom colors:
// - brand-cyan: #06b6d4
// - brand-dark: #1a1a1a
// - brand-white: #FFFFFF

// Custom fonts:
// - heading: DM Sans, Montserrat
// - body: Inter, DM Sans
```

### vercel.json
```json
// Auto-configured for:
// - Environment variables
// - Build settings
// - Function configurations
```

## Performance Optimization

### Already Configured
- ✅ Static generation (SSG) for all pages
- ✅ CSS minification via Tailwind
- ✅ JavaScript code splitting
- ✅ Image optimization ready
- ✅ Automatic compression

### Optional Enhancements
```bash
# Enable image optimization in next.config.js:
// images: {
//   unoptimized: false,  // Enable optimization
// }
```

## Monitoring & Analytics

### Vercel Analytics
1. Go to Project Analytics in Vercel Dashboard
2. Monitor Core Web Vitals
3. Check deployment frequency

### Real User Monitoring
```bash
# Add to layout.tsx (optional)
import { Suspense } from 'react'
// Vercel Analytics automatically tracked
```

## Domain Configuration

### Custom Domain
1. In Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., sneakerslite.com)
3. Update DNS records pointing to Vercel
4. Verify domain ownership

### SSL/TLS
- ✅ Automatically configured by Vercel (free)
- HSTS headers enabled by default

## Troubleshooting

### Build Failures

**Error: "Cannot find module 'tailwindcss'"**
```bash
npm install --legacy-peer-deps
npm run build
```

**Error: "Port 3000 in use"**
```bash
npm run dev -- -p 3001
```

**Error: "TypeScript errors"**
```bash
npm run build  # Shows detailed errors
```

### Contact Form Issues

**Emails not sending?**
1. Verify `RESEND_API_KEY` is set
2. Check Resend dashboard for errors
3. Confirm `chrisxue@novelship.com` is valid

**Form not working locally?**
1. Uncomment Resend code in `app/api/contact/route.ts`
2. Set `RESEND_API_KEY` in `.env.local`
3. Restart dev server: `npm run dev`

### Performance Issues

**Slow build time?**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Large bundle size?**
```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer
# Update next.config.js to use it
```

## Scaling Considerations

### CDN & Caching
- ✅ Vercel CDN automatically configured
- ✅ Static pages cached globally
- ✅ 24-hour default cache for assets

### Database Integration (Future)
When adding a database:
```bash
# Example with Prisma
npm install @prisma/client
npm install -D prisma

# Initialize
npx prisma init
```

### API Scaling
Current contact form uses serverless functions:
- ✅ Auto-scales with demand
- ✅ Cold start < 100ms
- ✅ No server management needed

## Maintenance

### Weekly Checklist
- [ ] Check Vercel analytics
- [ ] Review error logs
- [ ] Test contact form
- [ ] Verify all pages load

### Monthly Tasks
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Performance review
- [ ] Backup configuration

### Quarterly Review
- [ ] Update Next.js if major version
- [ ] Review design trends
- [ ] Check competitor sites
- [ ] Plan feature updates

## Rollback Procedure

If something breaks in production:

1. **Via Vercel Dashboard**
   - Go to Deployments
   - Click previous successful deployment
   - Click "Promote to Production"

2. **Via Git**
   ```bash
   git revert HEAD
   git push origin main
   # Vercel auto-deploys
   ```

## Cost Estimation

### Vercel Hosting
- **Free Plan**: Perfect for this site
  - Unlimited requests
  - 12GB bandwidth per month
  - Automatic HTTPS
  - Serverless functions

- **Pro Plan** (if scaling):
  - $20/month
  - Additional bandwidth
  - Advanced analytics

### Optional Services
- **Resend Email**: Free tier (100 emails/day)
  - $20/month for higher volume

## Support

### Vercel Documentation
- https://vercel.com/docs
- https://nextjs.org/docs

### Community
- GitHub Issues
- Discord: https://vercel.com/support
- Twitter: @vercel

---

**Last Updated**: 2026-03-17
**Maintained By**: SneakersLite Team
