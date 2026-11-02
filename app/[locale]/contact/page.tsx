import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, pageAlternates } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ContactForm from '@/app/components/ContactForm'

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const t = getDictionary(params.locale).contact
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: pageAlternates(params.locale, '/contact'),
  }
}

export default function Contact({ params }: PageProps) {
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
              {t.contact.hero.headingStart}<span className="text-brand-cyan">{t.contact.hero.headingHighlight}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.contact.hero.description}
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <ContactForm locale={locale} t={t.contact.form} />
            </div>
          </div>
        </section>
      </div>

      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
