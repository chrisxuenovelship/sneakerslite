import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticles, getArticleTranslations } from '@/lib/sanity'
import { isLocale, langTag, localeFromLangTag, localeNames, localePath, locales, siteUrl } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export const revalidate = 30

interface ArticlePageProps {
  params: {
    locale: string
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: getDictionary(params.locale).blog.article.notFoundMetaTitle }

  const translations = await getArticleTranslations(article.translationKey, params.slug)
  const articleLocale = localeFromLangTag(article.language)
  const languages: Record<string, string> = {
    [langTag[articleLocale]]: `${siteUrl}${localePath(articleLocale, `/blog/${params.slug}`)}`,
  }
  for (const translation of translations) {
    const translationLocale = localeFromLangTag(translation.language)
    languages[langTag[translationLocale]] = `${siteUrl}${localePath(translationLocale, `/blog/${translation.slug.current}`)}`
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    alternates: {
      canonical: `${siteUrl}${localePath(articleLocale, `/blog/${params.slug}`)}`,
      languages,
    },
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
    return articles.filter((article) => article.slug?.current).flatMap((article) =>
      locales.map((locale) => ({ locale, slug: article.slug.current }))
    )
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale
  const t = getDictionary(locale)
  const article = await getArticleBySlug(params.slug)

  if (!article) notFound()

  const translations = await getArticleTranslations(article.translationKey, params.slug)
  return (
    <main className="w-full">
      <Navigation locale={locale} t={t.common.nav} />

      <article lang={article.language ?? 'en'} className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <Link href={localePath(locale, '/blog')} className="hover:text-brand-cyan transition">
              ← {t.blog.article.backToBlog}
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {translations.map((translation) => {
              const translationLocale = localeFromLangTag(translation.language)
              return (
                <Link
                  key={translation.slug.current}
                  href={localePath(translationLocale, `/blog/${translation.slug.current}`)}
                  hrefLang={langTag[translationLocale]}
                  lang={langTag[translationLocale]}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan border border-brand-cyan rounded-full px-4 py-1.5 hover:bg-brand-cyan hover:text-white transition"
                >
                  {localeNames[translationLocale]}
                </Link>
              )
            })}
          </div>
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
              {new Date(article.publishedAt).toLocaleDateString(langTag[localeFromLangTag(article.language)], {
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
            <p className="text-gray-700">{t.blog.article.bodyUnavailable}</p>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-brand-dark bg-opacity-5 border border-brand-cyan rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">
            {t.blog.article.cta.title}
          </h3>
          <p className="text-gray-700 mb-6">
            {t.blog.article.cta.description}
          </p>
          <Link href={localePath(locale, '/contact')} className="btn-primary">
            {t.blog.article.cta.button}
          </Link>
        </div>
      </article>

      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
