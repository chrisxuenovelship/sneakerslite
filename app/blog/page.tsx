import Link from 'next/link'
import { getAllArticles } from '@/lib/sanity'
import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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
  
  // Debug: Log to console
  console.log(`[Blog Page] Fetched ${articles?.length || 0} articles from Sanity`)
  if (articles && articles.length > 0) {
    articles.forEach((a: any, i: number) => {
      console.log(`  [${i}] ${a.title} (slug: ${a.slug?.current})`)
    })
  }

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
        {articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article: any) => (
              <Link
                key={article._id}
                href={`/blog/${article.slug?.current || ''}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                {/* Article Image */}
                {article.mainImage?.asset?.url && (
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={`${article.mainImage.asset.url}?w=600&h=400&fit=crop`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {article.category && (
                    <span className="inline-block text-sm font-semibold text-brand-cyan mb-2">
                      {article.category}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-cyan transition">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">No articles published yet.</p>
            <p className="text-gray-500">Check back soon for insights on authentication and case studies.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
