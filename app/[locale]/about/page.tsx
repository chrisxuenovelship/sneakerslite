import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, pageAlternates } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const t = getDictionary(params.locale).about
  return { title: t.meta.title, description: t.meta.description, alternates: pageAlternates(params.locale, '/about') }
}

export default function About({ params }: PageProps) {
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
              {t.about.hero.titlePrefix}<span className="text-brand-cyan">{t.about.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.about.hero.description}</p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[t.about.purpose.vision, t.about.purpose.mission].map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">{section.title}</h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className={`text-gray-600 leading-relaxed${index === 0 ? ' mb-4' : ''}`}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">{t.about.milestones.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.about.milestones.items.map((milestone) => (
              <div key={milestone.year} className="bg-white border-l-4 border-brand-cyan rounded-lg p-8 shadow-sm hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-2xl font-bold text-brand-cyan">{milestone.year}</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">{t.about.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.about.values.items.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-brand-dark">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
