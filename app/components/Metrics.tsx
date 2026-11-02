import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface MetricsProps {
  locale: Locale
  t: Dictionary['home']['metrics']
}

export default function Metrics({ t }: MetricsProps) {
  return (
    <section className="w-full bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {t.items.map((item) => (
            <div key={item.label}>
              <dd className="text-4xl md:text-5xl font-bold text-brand-cyan mb-2">{item.value}</dd>
              <dt className="text-sm md:text-base text-gray-600">{item.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-center text-xs text-gray-500">{t.note}</p>
      </div>
    </section>
  )
}
