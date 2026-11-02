import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, localePath, pageAlternates } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const t = getDictionary(params.locale).security
  return { title: t.meta.title, description: t.meta.description, alternates: pageAlternates(params.locale, '/security') }
}

export default function Security({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale
  const t = getDictionary(locale)

  return (
    <main className="w-full">
      <Navigation locale={locale} t={t.common.nav} />

      <div className="pt-16 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              {t.security.hero.titlePrefix}<span className="text-brand-cyan">{t.security.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">{t.security.hero.description}</p>
            <Link href={localePath(locale, '/data-protection-framework')} className="inline-flex items-center gap-2 bg-brand-cyan text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition">
              {t.security.hero.frameworkLink}
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {t.security.privacy.items.map((item) => (
                <div key={item.title}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">{item.icon} {item.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-brand-cyan font-bold">✓</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {item.conclusion && <p className="text-gray-600 leading-relaxed mt-4">{item.conclusion}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">{t.security.infrastructure.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-brand-cyan">
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">{t.security.infrastructure.columns.component}</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">{t.security.infrastructure.columns.provider}</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">{t.security.infrastructure.columns.region}</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">{t.security.infrastructure.columns.encryption}</th>
                </tr>
              </thead>
              <tbody>
                {t.security.infrastructure.rows.map((row) => (
                  <tr key={row.component} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-4 px-4 text-brand-dark font-semibold">{row.component}</td>
                    <td className="py-4 px-4 text-gray-600">{row.provider}</td>
                    <td className="py-4 px-4 text-gray-600">{row.region}</td>
                    <td className="py-4 px-4 text-gray-600">{row.encryption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-dark">{t.security.standards.title}</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">{t.security.standards.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.security.standards.items.map((item) => (
                <div key={item.title} className="text-center bg-white rounded-lg p-8 shadow-sm">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-brand-dark">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-gradient-to-r from-brand-cyan to-cyan-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{t.security.contact.title}</h2>
            <p className="text-cyan-100 mb-8 text-lg">{t.security.contact.description}</p>
            <button className="bg-white text-brand-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">{t.security.contact.button}</button>
          </div>
        </section>
      </div>

      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
