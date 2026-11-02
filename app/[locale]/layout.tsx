import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { isLocale, langTag, locales, pageAlternates, siteUrl, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import '../globals.css'

const GA_MEASUREMENT_ID = 'G-JJPC6FYVNM'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  if (!isLocale(params.locale)) return {}
  const { site } = getDictionary(params.locale).common
  return {
    metadataBase: new URL(siteUrl),
    title: site.title,
    description: site.description,
    icons: { icon: '/favicon.ico' },
    verification: { google: '8IqWKXmUdiw8fmv6HjnGXv3_RvaRp6-jXTqNIIIixOs' },
    alternates: pageAlternates(params.locale, '/'),
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) notFound()
  const locale: Locale = params.locale

  return (
    <html lang={langTag[locale]}>
      <body className="bg-white text-brand-dark">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
