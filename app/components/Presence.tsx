import Link from 'next/link'
import { isLocale, localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface PresenceProps {
  locale: Locale
  t: Dictionary['home']['presence']
}

export default function Presence({ locale, t }: PresenceProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.locations.map((location) => {
            // Articles live in one language; link to that language's URL regardless of UI locale.
            const articleLocale = isLocale(location.articleLocale) ? location.articleLocale : locale
            return (
              <Link
                key={location.name}
                href={localePath(articleLocale, `/blog/${location.articleSlug}`)}
                className="group flex flex-col p-8 rounded-lg border border-gray-200 hover:border-brand-cyan bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{location.flag}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{location.name}</h3>
                <p className="text-gray-600 text-sm flex-1">{location.description}</p>
                <p className="mt-6 text-sm font-semibold text-brand-cyan">
                  {t.readMore} <span className="font-normal text-gray-600 group-hover:text-brand-cyan transition">{location.articleTitle}</span> →
                </p>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            {t.ctaTitle}
          </h3>
          <Link href={localePath(locale, '/contact')} className="btn-primary inline-block">
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  )
}
