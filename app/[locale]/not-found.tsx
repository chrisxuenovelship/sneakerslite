import Link from 'next/link'
import { headers } from 'next/headers'
import { stripLocale, localePath } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

/**
 * `not-found` receives no route params, so the locale is recovered from the
 * `x-locale-path` header set by the middleware.
 */
export default function NotFound() {
  const { locale } = stripLocale(headers().get('x-locale-path') ?? '/')
  const t = getDictionary(locale)

  return (
    <main className="w-full">
      <Navigation locale={locale} t={t.common.nav} />
      <section className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl font-bold text-brand-dark mb-4">{t.common.notFound.title}</h1>
        <p className="text-gray-600 mb-8">{t.common.notFound.body}</p>
        <Link href={localePath(locale, '/')} className="btn-primary">
          {t.common.notFound.backHome}
        </Link>
      </section>
      <Footer locale={locale} t={t.common.footer} />
    </main>
  )
}
