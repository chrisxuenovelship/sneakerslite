'use client'

import Link from 'next/link'

export default function Dashboard() {
  // 8 Metrics - Alternating left/right layout
  const metrics = [
    { label: 'Size Tag ID', value: 'Verified', type: 'badge' },
    { label: 'Size Tag Font & Spacing', value: 98.2, type: 'progress' },
    { label: 'Color Accuracy', value: 97.6, type: 'progress' },
    { label: 'Outer Stitching', value: 96.1, type: 'progress' },
    { label: 'Logo Precision', value: 92.4, type: 'progress' },
    { label: 'Insoles', value: 93.9, type: 'progress' },
    { label: 'Midsole Stitching', value: 97.7, type: 'progress' },
    { label: 'Box/Packaging', value: 93, type: 'progress' },
  ]

  // Verification checks (6 items)
  const verificationChecks = [
    'Authentic Materials Detected',
    'Logo Shape Alignment Pass',
    'Stitching Pattern and Count Verified',
    'Serial Number Checks Verified',
    'Font and Spacing with Tolerance',
    'Counterfeit Markers: None',
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Advanced Authentication Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Live dashboard used by our partners to manage and track authentication requests at scale
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
                    <img 
                      src="/sneaker-placeholder.jpg" 
                      alt="Jordan 12s" 
                      className="w-full h-full object-cover rounded-lg mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling?.style.display = 'block'
                      }}
                    />
                    <div style={{ display: 'none' }} className="text-6xl">👟</div>
                    <p className="text-gray-400 mt-4 font-medium">Jordan 12 Retro</p>
                    <p className="text-gray-600 text-sm mt-1">Black/White Colorway</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL (60% width) - Stacked Sections */}
              <div className="lg:col-span-3 space-y-6">
                {/* SECTION 1: Product Details (4 Cards) */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Product Name */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 col-span-2 md:col-span-1">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Product Name</p>
                      <p className="text-white text-base font-bold mt-2">Jordan 1 Retro High OG</p>
                    </div>

                    {/* Model ID */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 col-span-2 md:col-span-1">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Model ID</p>
                      <p className="text-cyan-400 text-base font-bold mt-2">153265-006</p>
                    </div>

                    {/* GTIN */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 col-span-2 md:col-span-1">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">GTIN</p>
                      <p className="text-white text-base font-bold mt-2">0195866361881</p>
                    </div>

                    {/* Request ID */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 col-span-2 md:col-span-1">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Request ID</p>
                      <p className="text-cyan-400 text-base font-bold mt-2">AUTH-2026-001945</p>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Authentication Metrics (8 Metrics, Alternating Layout) */}
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider text-gray-400">Authentication Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-cyan-500/50 transition">
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                          {metric.label}
                        </p>
                        
                        {metric.type === 'badge' ? (
                          // Verified Badge (Size Tag ID)
                          <div className="inline-block bg-cyan-500/20 text-cyan-400 text-sm font-bold px-3 py-1 rounded border border-cyan-500/50">
                            ✓ VERIFIED
                          </div>
                        ) : (
                          // Progress Bar (all other metrics)
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
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider text-gray-400">Verification Checks</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {verificationChecks.map((check, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-start gap-3">
                        <span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
                        <span className="text-gray-300 text-sm">{check}</span>
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
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Confidence Score</p>
                <p className="text-5xl md:text-6xl font-bold text-cyan-400">96.9%</p>
              </div>

              {/* Verdict */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Verdict</p>
                <div className="inline-flex items-center gap-3 bg-green-900/30 border border-green-500/50 rounded-lg px-6 py-3 w-fit">
                  <span className="text-green-400 text-3xl font-bold">✓</span>
                  <span className="text-green-400 text-2xl md:text-3xl font-bold">AUTHENTIC</span>
                </div>
              </div>
            </div>

            {/* CTA FOOTER */}
            <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center">
              <Link
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
