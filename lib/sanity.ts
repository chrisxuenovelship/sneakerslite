import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: !process.env.SANITY_API_TOKEN,
  token: process.env.SANITY_API_TOKEN,
})

export interface ArticleSummary {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  excerpt: string
  mainImage?: { asset?: { url?: string } }
  category?: string
  /** BCP 47 tag (`en`, `zh-CN`, `ja`, `ko`). Missing on articles created before the field existed → English. */
  language?: string | null
  /** Shared across language versions of one article. */
  translationKey?: string | null
}

export interface Article extends ArticleSummary {
  body: unknown[]
  seoTitle?: string
  seoDescription?: string
}

export interface ArticleTranslation {
  language: string
  slug: { current: string }
}

const articleFields = `
  _id,
  title,
  slug,
  author,
  publishedAt,
  excerpt,
  mainImage,
  seoTitle,
  seoDescription,
  category,
  language,
  translationKey
`

export const articleQuery = `
  *[_type == "article"] | order(publishedAt desc) { ${articleFields} }
`

export const singleArticleQuery = `
  *[_type == "article" && slug.current == $slug][0] { ${articleFields}, body }
`

export const translationsQuery = `
  *[_type == "article" && translationKey == $translationKey && slug.current != $slug] { language, slug }
`

export const relatedArticlesQuery = `
  *[_type == "article" && coalesce(language, "en") == $language && _id != $id && (!defined($translationKey) || coalesce(translationKey, "") != $translationKey)] | order(publishedAt desc) { ${articleFields} }
`


export async function getAllArticles(): Promise<ArticleSummary[]> {
  try {
    const articles = await sanityClient.fetch<ArticleSummary[]>(articleQuery)
    return articles || []
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const article = await sanityClient.fetch<Article | null>(singleArticleQuery, { slug })
    if (article) {
      console.log(`[Sanity] Fetched article "${article.title}" with ${article.body?.length || 0} body blocks`)
    }
    return article
  } catch (error) {
    console.error('Failed to fetch article:', error)
    return null
  }
}

/** Other language versions of an article, excluding the one identified by `slug`. */
export async function getArticleTranslations(
  translationKey: string | null | undefined,
  slug: string,
): Promise<ArticleTranslation[]> {
  if (!translationKey) return []
  try {
    return await sanityClient.fetch<ArticleTranslation[]>(translationsQuery, { translationKey, slug })
  } catch (error) {
    console.error('Failed to fetch article translations:', error)
    return []
  }
}

/** Same-language articles, prioritising the current category before recency. */
export async function getRelatedArticles(current: Article): Promise<ArticleSummary[]> {
  try {
    const candidates = await sanityClient.fetch<ArticleSummary[]>(relatedArticlesQuery, {
      language: current.language ?? 'en',
      id: current._id,
      translationKey: current.translationKey ?? null,
    })
    return (candidates || [])
      .filter((candidate) => candidate.slug?.current && candidate.slug.current !== current.slug.current)
      .sort((a, b) => Number(Boolean(current.category && b.category === current.category)) - Number(Boolean(current.category && a.category === current.category)))
      .slice(0, 3)
  } catch (error) {
    console.error('Failed to fetch related articles:', error)
    return []
  }
}

