import Link from 'next/link'
import { getArticleBySlug, getAllArticles } from '@/lib/sanity'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found | SneakersLite',
    }
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: article.mainImage?.asset?.url ? [article.mainImage.asset.url] : [],
    },
  }
}

// Generate static paths for articles (ISR)
export async function generateStaticParams() {
  try {
    const articles = await getAllArticles()
    if (!articles || !Array.isArray(articles)) {
      return []
    }
    return articles.map((article: any) => ({
      slug: article?.slug?.current || '',
    })).filter((item: any) => item.slug)
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return (
      <main className="w-full">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find that article.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full">
      <Navigation />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-brand-cyan transition">
            ← Back to Blog
          </Link>
        </div>

        {/* Meta */}
        <header className="mb-8">
          {article.category && (
            <span className="inline-block text-sm font-semibold text-brand-cyan mb-3">
              {article.category}
            </span>
          )}
          <h1 className="text-5xl font-bold text-brand-dark mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>{article.author}</span>
            <span>•</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        {article.mainImage?.asset?.url && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={`${article.mainImage.asset.url}?w=1200&h=600&fit=crop`}
              alt={article.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-xl text-gray-700 mb-8 font-medium">{article.excerpt}</p>
        )}

        {/* Body - Portable Text Rendering */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.body && Array.isArray(article.body) && article.body.length > 0 ? (
            article.body.map((block: any) => {
              if (!block || block._type !== 'block') return null
              
              if (block.style === 'h2') {
                return (
                  <h2 key={block._key} className="text-3xl font-bold text-brand-dark mt-8 mb-4">
                    {block.children?.map((child: any) => child.text || '').join('') || ''}
                  </h2>
                )
              }
              if (block.style === 'h3') {
                return (
                  <h3 key={block._key} className="text-2xl font-bold text-brand-dark mt-6 mb-3">
                    {block.children?.map((child: any) => child.text || '').join('') || ''}
                  </h3>
                )
              }
              if (block.style === 'h1') {
                return (
                  <h1 key={block._key} className="text-4xl font-bold text-brand-dark mt-10 mb-6">
                    {block.children?.map((child: any) => child.text || '').join('') || ''}
                  </h1>
                )
              }
              // List items
              if (block.listItem) {
                const isOrdered = block.listItem === 'number'
                return (
                  <li key={block._key} className="text-gray-700 ml-4 mb-2">
                    {block.children?.map((child: any) => {
                      let text = child.text || ''
                      if (child.marks?.includes('strong')) {
                        return <strong key={child._key}>{text}</strong>
                      }
                      if (child.marks?.includes('em')) {
                        return <em key={child._key}>{text}</em>
                      }
                      return text
                    })}
                  </li>
                )
              }
              // Regular paragraphs
              return (
                <p key={block._key} className="text-gray-700 mb-4 leading-relaxed">
                  {block.children?.map((child: any, idx: number) => {
                    if (!child) return null
                    let text = child.text || ''
                    if (child.marks?.includes('strong')) {
                      return <strong key={`${block._key}-${idx}`}>{text}</strong>
                    }
                    if (child.marks?.includes('em')) {
                      return <em key={`${block._key}-${idx}`}>{text}</em>
                    }
                    return <span key={`${block._key}-${idx}`}>{text}</span>
                  })}
                </p>
              )
            })
          ) : (
            <p className="text-gray-700">Article body is loading or not available. Check Sanity CMS.</p>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-brand-dark bg-opacity-5 border border-brand-cyan rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">
            Ready to Authenticate Your Products?
          </h3>
          <p className="text-gray-700 mb-6">
            Learn how SneakersLite can help you verify products with speed, accuracy, and consistency.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
