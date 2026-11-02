import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, localePath, pageAlternates } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import PricingCalculator from '@/app/components/PricingCalculator'

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const t = getDictionary(params.locale).pricing
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: pageAlternates(params.locale, '/pricing'),
  }
}

export default function Pricing({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale
  const t = getDictionary(locale)
  const tiers = [t.pricing.tiers.standard, t.pricing.tiers.plus, t.pricing.tiers.pro]

  return (
    <main className="w-full">
      <Navigation locale={locale} t={t.common.nav} />

      <div className="pt-16 pb-20">
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              {t.pricing.hero.headingStart}<span className="text-brand-cyan">{t.pricing.hero.headingHighlight}</span>{t.pricing.hero.headingEnd}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.pricing.hero.description}</p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={tier.name} className={`bg-white rounded-lg border shadow-sm p-8 flex flex-col ${index === 2 ? 'border-brand-cyan' : 'border-gray-200'}`}>
                  <div className="min-h-8 mb-3">
                    {index === 2 && <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-brand-cyan">{t.pricing.tiers.badge}</span>}
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark">{tier.name}</h2>
                  <p className="mt-4 text-brand-dark">
                    <span className="text-4xl font-bold">{tier.price}</span><span className="text-gray-600"> {t.pricing.tiers.perResult}</span>
                  </p>
                  <p className="mt-3 text-gray-600">{tier.volume}</p>
                  <ul className="space-y-3 mt-8 mb-8 flex-1">
                    {t.pricing.tiers.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-600">
                        <span aria-hidden="true" className="text-brand-cyan font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={localePath(locale, '/contact')} className={`text-center ${index === 2 ? 'btn-primary' : 'btn-outline'}`}>
                    {t.pricing.tiers.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">{t.pricing.calculator.title}</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t.pricing.calculator.description}</p>
            <PricingCalculator locale={locale} t={t.pricing} />
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-3">{t.pricing.enterprise.title}</h2>
              <p className="text-gray-600 max-w-3xl">{t.pricing.enterprise.description}</p>
            </div>
            <Link href={localePath(locale, '/contact')} className="btn-primary shrink-0 text-center">{t.pricing.enterprise.cta}</Link>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">{t.pricing.faq.title}</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {t.pricing.faq.items.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="cursor-pointer font-semibold text-brand-dark">{item.question}</summary>
                  <p className="mt-3 text-gray-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
