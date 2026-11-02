'use client'

import { useState } from 'react'
import Link from 'next/link'
import { langTag, localeFromLangTag, localeNames, localePath, locales, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'
import type { ArticleSummary } from '@/lib/sanity'

interface BlogFilterProps {
  articles: ArticleSummary[]
  locale: Locale
  t: Dictionary['blog']['filter']
}

export default function BlogFilter({ articles, locale, t }: BlogFilterProps) {
  const availableLocales = locales.filter((l) =>
    articles.some((article) => localeFromLangTag(article.language) === l)
  )
  const [selectedLocale, setSelectedLocale] = useState<Locale>(
    availableLocales.includes(locale) ? locale : availableLocales[0] ?? locale
  )
  const tabLocale = availableLocales.includes(selectedLocale)
    ? selectedLocale
    : availableLocales[0] ?? locale
  const filtered = articles.filter((article) => localeFromLangTag(article.language) === tabLocale)

  return (
    <>
      <div className="flex justify-center gap-2 mb-12">
        {availableLocales.map((l) => (
          <button
            key={l}
            type="button"
            lang={langTag[l]}
            onClick={() => setSelectedLocale(l)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              tabLocale === l
                ? 'bg-brand-cyan text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {localeNames[l]}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <Link
              key={article._id}
              href={localePath(locale, `/blog/${article.slug.current}`)}
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
                    {new Date(article.publishedAt).toLocaleDateString(langTag[tabLocale], {
                      year: 'numeric',
                      month: 'long',
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
          <p className="text-gray-600 text-lg mb-4">{t.emptyTitle}</p>
          <p className="text-gray-500">{t.emptyDescription}</p>
        </div>
      )}
    </>
  )
}
