import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface HeroProps {
  locale: Locale
  t: Dictionary['home']['hero']
}


export default function Hero({ locale, t }: HeroProps) {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-brand-dark">{t.authenticate}</span>
            <span className="text-brand-cyan">{t.faster}</span>
            <br />
            <span className="text-brand-dark">{t.cheaper}</span>
            <span className="text-brand-cyan">{t.consistently}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={localePath(locale, '/contact')} className="btn-primary text-center">
              {t.getStarted}
            </Link>
            <Link href={localePath(locale, '/about')} className="btn-outline text-center">
              {t.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
