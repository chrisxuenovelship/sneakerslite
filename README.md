# SneakersLite 🔐

**Authenticate Faster. Cheaper. Consistently.**

A modern, responsive web application for sneaker authentication built with Next.js 14, featuring advanced authentication dashboards, real-time verification metrics, and a global presence across Hong Kong, China, and Singapore.

## 🚀 Features

- **Fast Authentication**: Get results in minutes, not days
- **Competitive Pricing**: Premium service at affordable rates
- **Consistent Accuracy**: 96.9%+ confidence scores with industry-leading expertise
- **Responsive Design**: Mobile-first approach with Vercel-style light theme
- **Advanced Dashboard**: Real-time metrics with 8 comprehensive verification checks
- **Global Presence**: Operating in HK 🇭🇰, China 🇨🇳, Singapore 🇸🇬
- **Security First**: PDPO compliance, AWS infrastructure, enterprise-grade encryption
- **Contact Form**: Integrated with Resend for email notifications

## 📋 Pages

1. **Home** (`/`)
   - Hero section with key value proposition
   - 3 USP cards (FASTER, CHEAPER, CONSISTENT)
   - Advanced authentication dashboard component
   - Products grid with hover effects
   - Global presence section with flag icons

2. **About** (`/about`)
   - Vision & Mission statements
   - Key milestones (CyberPort, Series A funding)
   - Core values section

3. **Security** (`/security`)
   - PDPO compliance information
   - Data protection measures
   - AWS infrastructure table
   - Security certifications

4. **Contact** (`/contact`)
   - Contact form (name, email, subject, message)
   - Email integration ready (Resend)
   - Contact information display

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4.2
- **Language**: TypeScript
- **Forms**: React hooks + Next.js API routes
- **Email**: Resend (optional)
- **Deployment**: Vercel-ready
- **Infrastructure**: AWS (RDS, S3, EC2, CloudFront, Shield, ACM)

## 🎨 Design System

### Colors
- **Primary Background**: `#FFFFFF` (white)
- **Accent Cyan**: `#06b6d4` (brand cyan)
- **Dark Text**: `#1a1a1a` (dark)
- **Secondary**: Gray scale (50-900)

### Typography
- **Headings**: DM Sans, Montserrat (600-800 weight)
- **Body**: Inter, DM Sans (400-600 weight)

### Components
- `.btn-primary` - Cyan CTA button
- `.btn-outline` - Outline button style
- `.text-gradient` - Gradient text effect
- Responsive grid layouts
- Hover animations and transitions

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone and navigate**
```bash
cd /root/.openclaw/workspace/sneakerslite
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment (optional)**
```bash
cp .env.example .env.local
# Add your RESEND_API_KEY if using email integration
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📝 Environment Variables

**Optional** - Only needed for email functionality:

```
RESEND_API_KEY=your_api_key_here
```

Get a free API key from [Resend.com](https://resend.com)

## 📧 Contact Form Integration

The contact form is fully functional with two modes:

1. **Development Mode**: Messages logged to console
2. **Production Mode**: With Resend API key, emails sent to `chrisxue@novelship.com`

To enable email functionality:
1. Get API key from [Resend.com](https://resend.com)
2. Add `RESEND_API_KEY` to `.env.local`
3. Uncomment the Resend code in `app/api/contact/route.ts`
4. Run `npm install resend`

## 🎯 Responsive Design

- **Mobile**: Hamburger menu, stacked layout, touch-optimized
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: Full 3-column grids, sticky navigation

## 🔒 Security Features

- ✓ PDPO compliance (Hong Kong)
- ✓ End-to-end encryption
- ✓ AWS infrastructure (AES-256)
- ✓ TLS 1.3 support
- ✓ DDoS protection via AWS Shield
- ✓ ISO 27001, SOC 2 Type II, PCI DSS ready

## 📊 Dashboard Component

Features:
- Dark theme with gradient backgrounds
- 40% left side: Sneaker image display
- 60% right side: Product details + 8 metrics
- Real-time confidence score (96.9%)
- Verification checks with color coding
- Final verdict with status indicators

## 🌍 Deployment to Vercel

1. **Connect repository**
```bash
git init
git add .
git commit -m "Initial commit: SneakersLite website"
```

2. **Push to GitHub** and connect to Vercel

3. **Automatic deployment** on push to main branch

**Vercel CLI** (optional):
```bash
npm i -g vercel
vercel
```

## 📱 Mobile Optimization

- Touch-friendly navigation (56px min tap target)
- Responsive typography scaling
- Optimized images via Next.js Image component
- Mobile hamburger menu
- Flexible grid layouts

## 🔧 Development

### File Structure
```
sneakerslite/
├── app/
│   ├── api/contact/route.ts      # Contact form endpoint
│   ├── about/page.tsx             # About page
│   ├── contact/page.tsx           # Contact page
│   ├── security/page.tsx          # Security page
│   ├── components/                # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── USPCards.tsx
│   │   ├── Dashboard.tsx
│   │   ├── ProductsGrid.tsx
│   │   └── Presence.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/                        # Static assets
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🐛 Troubleshooting

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Styles not loading?**
- Clear browser cache: `Ctrl+Shift+Del`
- Rebuild: `npm run build`

## 📄 License

ISC

## 👥 Contributors

SneakersLite Team @ Novelship

---

**Ready to authenticate?** [Get Started](http://localhost:3000/contact) 🚀
