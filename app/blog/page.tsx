import { getAllArticles } from '@/lib/sanity'
import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import BlogFilter from '../components/BlogFilter'

// Force dynamic rendering for fresh data on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Blog | SneakersLite - Authentication Insights',
  description: 'Discover insights on sneaker authentication, authentication technology, and industry trends. Case studies and best practices for product authentication.',
  openGraph: {
    title: 'Blog | SneakersLite',
    description: 'Insights on sneaker authentication and verification',
  },
}

export default async function BlogPage() {
  const articles = await getAllArticles()
  
  console.log(`[Blog Page] Fetched ${articles?.length || 0} articles from Sanity`)
  if (articles && articles.length > 0) {
    articles.forEach((a: any, i: number) => {
      console.log(`  [${i}] ${a.title}`)
    })
  }

  // Filter out empty/draft articles for display
  const displayArticles = articles?.filter((a: any) => 
    a.title && !a.title.includes('[Empty') && !a.title.includes('[Draft')
  ) || []

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Blog Header */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-cyan text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Authentication Insights</h1>
          <p className="text-xl text-gray-200">
            Real stories. Real solutions. Case studies on authenticating brand products.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <BlogFilter articles={displayArticles} />
      </section>

      <Footer />
    </main>
  )
}
