import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface HowItWorksProps {
  locale: Locale
  t: Dictionary['home']['howItWorks']
}

export default function HowItWorks({ locale, t }: HowItWorksProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600">{t.description}</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5">
          {t.steps.map((step, index) => (
            <li key={index} className="min-w-0">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-cyan text-white font-bold text-lg mb-5">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-brand-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:mt-16 bg-gray-50 rounded-lg border border-gray-200 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {t.facts.map((fact, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-brand-dark">
                <svg className="w-6 h-6 shrink-0 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
                </svg>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
          <Link href={localePath(locale, '/contact')} className="btn-primary inline-flex justify-center text-center shrink-0">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
