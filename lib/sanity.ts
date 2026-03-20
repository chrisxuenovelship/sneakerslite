import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

// GROQ Queries
export const articleQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage,
    body,
    seoTitle,
    seoDescription,
    category
  }
`

export const singleArticleQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage,
    body,
    seoTitle,
    seoDescription,
    category
  }
`

export const categoriesQuery = `
  array::unique(*[_type == "article"].category)
`

// Fetch all articles
export async function getAllArticles() {
  try {
    return await sanityClient.fetch(articleQuery)
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return []
  }
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string) {
  try {
    return await sanityClient.fetch(singleArticleQuery, { slug })
  } catch (error) {
    console.error('Failed to fetch article:', error)
    return null
  }
}

// Fetch categories
export async function getCategories() {
  try {
    return await sanityClient.fetch(categoriesQuery)
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}
