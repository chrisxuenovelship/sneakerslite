import { notFound } from 'next/navigation'
import { getAllArticles } from '@/lib/sanity'
import { isLocale, pageAlternates } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import BlogFilter from '@/app/components/BlogFilter'

// Force dynamic rendering for fresh data on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const t = getDictionary(params.locale).blog.meta
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(params.locale, '/blog'),
    openGraph: {
      title: t.openGraphTitle,
      description: t.openGraphDescription,
    },
  }
}

export default async function BlogPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale
  const t = getDictionary(locale)
  const articles = await getAllArticles()

  // Filter out empty/draft articles for display
  const displayArticles = articles.filter((a) =>
    a.title && !a.title.includes('[Empty') && !a.title.includes('[Draft')
  )

  return (
    <main className="w-full">
      <Navigation locale={locale} t={t.common.nav} />

      <section className="bg-gradient-to-r from-brand-dark to-brand-cyan text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{t.blog.header.title}</h1>
          <p className="text-xl text-gray-200">{t.blog.header.description}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <BlogFilter articles={displayArticles} locale={locale} t={t.blog.filter} />
      </section>

      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
