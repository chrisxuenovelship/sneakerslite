'use client'

import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface DashboardProps {
  locale: Locale
  t: Dictionary['home']['dashboard']
}

export default function Dashboard({ locale, t }: DashboardProps) {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Dashboard Container - Dark Background */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
          <div className="p-8 md:p-12">
            {/* Two-Panel Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
              {/* LEFT PANEL (40% width) - Sneaker Image */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 aspect-square flex items-center justify-center border border-gray-800">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl mb-4">👟</div>
                    <p className="text-gray-300 mt-4 font-medium">{t.sneaker}</p>
                    <p className="text-gray-600 text-sm mt-1">{t.colorway}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL (60% width) - Stacked Sections */}
              <div className="lg:col-span-3 space-y-6">
                {/* SECTION 1: Product Details (4 Cards) */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {t.productDetails.map((detail, index) => (
                      <div key={detail.label} className="bg-gray-900 rounded-lg p-4 border border-gray-800 col-span-2 md:col-span-1">
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{detail.label}</p>
                        <p className={`${index % 2 ? 'text-cyan-400' : 'text-white'} text-base font-bold mt-2`}>{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 2: Authentication Metrics (8 Metrics, Alternating Layout) */}
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider text-gray-400">{t.metricsTitle}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {t.metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-cyan-500/50 transition">
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                          {metric.label}
                        </p>
                        
                        {metric.type === 'badge' ? (
                          <div className="inline-block bg-cyan-500/20 text-cyan-400 text-sm font-bold px-3 py-1 rounded border border-cyan-500/50">
                            ✓ {metric.value}
                          </div>
                        ) : (
                          // Progress Bar
                          <>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-cyan-400 font-bold text-lg">{metric.value}%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-cyan-500 h-full rounded-full transition-all duration-300"
                                style={{ width: `${metric.value}%` }}
                              ></div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 3: Verification Checks (2-Column Grid, 6 Items) */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider text-gray-400">{t.checksTitle}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {t.checks.map((check, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-start gap-3">
                        <span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
                        <span className="text-gray-300 text-sm">{check.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER SECTION: Confidence Score + Verdict */}
            <div className="mt-8 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Confidence Score */}
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">{t.confidenceLabel}</p>
                <p className="text-5xl md:text-6xl font-bold text-cyan-400">{t.confidenceValue}</p>
              </div>

              {/* Verdict */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">{t.verdictLabel}</p>
                <div className="inline-flex items-center gap-3 bg-green-900/30 border border-green-500/50 rounded-lg px-6 py-3 w-fit">
                  <span className="text-green-400 text-3xl font-bold">✓</span>
                  <span className="text-green-400 text-2xl md:text-3xl font-bold">{t.verdictValue}</span>
                </div>
              </div>
            </div>

            {/* CTA FOOTER */}
            <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center">
              <Link
                href={localePath(locale, '/contact')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                {t.requestDemo}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
