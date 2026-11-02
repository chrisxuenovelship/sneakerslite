import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/sanity'
import { langTag, localeFromLangTag, localePath, locales, siteUrl } from '@/lib/i18n'

export const revalidate = 30

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    { path: '/', changeFrequency: 'monthly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/security', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
  ] as const

  const staticPages: MetadataRoute.Sitemap = pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages: Record<string, string> = {}
    for (const locale of locales) {
      languages[langTag[locale]] = `${siteUrl}${localePath(locale, path)}`
    }
    languages['x-default'] = `${siteUrl}${localePath('en', path)}`
    return locales.map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages },
    }))
  })
  staticPages.push({
    url: `${siteUrl}${localePath('en', '/data-protection-framework')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  })

  const articles = await getAllArticles()
  const translationGroups: Record<string, Record<string, string>> = {}
  for (const article of articles) {
    if (!article.slug?.current) continue
    const key = article.translationKey || article._id
    const locale = localeFromLangTag(article.language)
    translationGroups[key] ??= {}
    translationGroups[key][langTag[locale]] = `${siteUrl}${localePath(locale, `/blog/${article.slug.current}`)}`
  }
  const blogPages: MetadataRoute.Sitemap = articles.filter((article) => article.slug?.current).map((article) => ({
    url: `${siteUrl}${localePath(localeFromLangTag(article.language), `/blog/${article.slug.current}`)}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: { languages: translationGroups[article.translationKey || article._id] },
  }))

  return [...staticPages, ...blogPages]
}
