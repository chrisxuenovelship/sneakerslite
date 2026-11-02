import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, pageAlternates } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Navigation from '@/app/components/Navigation'
import Hero from '@/app/components/Hero'
import USPCards from '@/app/components/USPCards'
import HowItWorks from '@/app/components/HowItWorks'
import Dashboard from '@/app/components/Dashboard'
import ProductsGrid from '@/app/components/ProductsGrid'
import Presence from '@/app/components/Presence'
import Footer from '@/app/components/Footer'

interface PageProps { params: { locale: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const t = getDictionary(params.locale).home
  return { title: t.meta.title, description: t.meta.description, alternates: pageAlternates(params.locale, '/') }
}

export default function Home({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale
  const t = getDictionary(locale)

  return (
    <main className="w-full">
      <Navigation locale={locale} t={t.common.nav} />
      <Hero locale={locale} t={t.home.hero} />
      <USPCards locale={locale} t={t.home.usp} />
      <HowItWorks locale={locale} t={t.home.howItWorks} />
      <Dashboard locale={locale} t={t.home.dashboard} />
      <ProductsGrid locale={locale} t={t.home.products} />
      <Presence locale={locale} t={t.home.presence} />
      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
