import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface TestimonialsProps {
  locale: Locale
  t: Dictionary['home']['testimonials']
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item) => (
            <figure key={item.company} className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 md:p-10 flex flex-col">
              <svg aria-hidden="true" className="w-8 h-8 text-brand-cyan mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.25a2.42 2.42 0 0 1 2.42-2.42V6Zm9.33 0a5.17 5.17 0 0 0-5.17 5.17V18h6.5v-6.5h-3.25a2.42 2.42 0 0 1 2.42-2.42V6Z" />
              </svg>
              <blockquote className="text-lg text-brand-dark leading-relaxed flex-1">{item.quote}</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-semibold text-brand-dark">{item.role}</div>
                <div className="text-sm text-gray-600">{item.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
