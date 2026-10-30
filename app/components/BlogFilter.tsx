'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Article {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  excerpt: string
  mainImage?: { asset?: { url?: string } }
  category?: string
  language?: string
}

export default function BlogFilter({ articles }: { articles: Article[] }) {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  const filtered = articles.filter((a) => {
    if (lang === 'zh') return a.language === 'zh-CN'
    // EN tab: articles with language "en" or no language field set
    return !a.language || a.language === 'en'
  })

  return (
    <>
      {/* Language Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        <button
          onClick={() => setLang('en')}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            lang === 'en'
              ? 'bg-brand-cyan text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang('zh')}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            lang === 'zh'
              ? 'bg-brand-cyan text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          中文
        </button>
      </div>

      {/* Articles Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <Link
              key={article._id}
              href={`/blog/${article.slug?.current || ''}`}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {article.mainImage?.asset?.url && (
                <div className="w-full h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={`${article.mainImage.asset.url}?w=600&h=400&fit=crop`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}
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
          <p className="text-gray-600 text-lg mb-4">No articles in this language yet.</p>
          <p className="text-gray-500">Check back soon for new content.</p>
        </div>
      )}
    </>
  )
}
