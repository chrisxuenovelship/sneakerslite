'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">SneakersLite</h1>
            <Link 
              href="/dashboard-demo" 
              className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition"
            >
              Try Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Authentic. Verified. Trusted.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            SneakersLite uses advanced AI authentication to verify the authenticity of sneakers with 94.8% confidence. Buy and sell with complete peace of mind.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/dashboard-demo"
              className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition font-semibold"
            >
              Verify Now
            </Link>
            <button className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Why Choose SneakersLite?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Advanced AI Detection</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Powered by computer vision and machine learning, our system analyzes 200+ authentication points in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Instant Results</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Get authentication results with 94.8% confidence in under 60 seconds. No waiting, no guessing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Peace of Mind</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Every transaction backed by our authenticity guarantee. Buyer and seller protection included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section - CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              See It In Action
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Experience our authentication dashboard. Upload a product photo and get instant verification results.
            </p>
          </div>

          {/* Embedded Dashboard Preview */}
          <div className="rounded-xl overflow-hidden shadow-2xl bg-slate-900">
            <div className="min-h-[600px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-0 m-0">
              <div className="w-full mx-auto px-4 py-8 sm:px-6 sm:py-12">
                <div className="max-w-6xl mx-auto">
                  {/* Authentication Result Title */}
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">Authentication Result</h1>
                  </div>

                  {/* Two-Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column: Product Image */}
                    <div className="flex items-center justify-center bg-white rounded-lg p-4 sm:p-8">
                      <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-md flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl sm:text-8xl mb-2">👟</div>
                          <p className="text-slate-600 font-semibold text-sm sm:text-base">Product Image</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Metrics */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Model ID Card */}
                      <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">Model ID</p>
                        <p className="text-slate-900 text-base sm:text-lg font-bold mt-2">Jordan 1 Retro High OG</p>
                        <p className="text-slate-500 text-xs sm:text-sm mt-1">SKU: DZ5485-010</p>
                      </div>

                      {/* Authentication Metrics */}
                      <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">Authentication Metrics</p>
                        <div className="mt-3 space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-slate-700 text-xs sm:text-sm">Material Analysis</span>
                              <span className="text-green-600 font-semibold text-sm">98%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-slate-700 text-xs sm:text-sm">Stitching Quality</span>
                              <span className="text-green-600 font-semibold text-sm">96%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Confidence Score & Badge */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 sm:p-6 border border-green-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-slate-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">Confidence Score</p>
                            <p className="text-3xl sm:text-4xl font-bold text-green-600 mt-2">94.8%</p>
                          </div>
                          <div className="bg-green-600 text-white rounded-lg px-4 py-3 sm:py-2 text-center min-w-fit">
                            <p className="text-xs font-semibold uppercase tracking-widest">Authentic</p>
                            <p className="text-2xl sm:text-3xl font-bold">✓</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification Checks Section */}
                  <div className="mt-8 sm:mt-12 pb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Verification Checks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {/* Check 1 */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-900 font-semibold text-sm sm:text-base">Logo Placement</p>
                            <p className="text-slate-600 text-xs sm:text-sm mt-1">Logo position and quality verified</p>
                          </div>
                        </div>
                      </div>

                      {/* Check 2 */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-900 font-semibold text-sm sm:text-base">Materials</p>
                            <p className="text-slate-600 text-xs sm:text-sm mt-1">Premium materials confirmed</p>
                          </div>
                        </div>
                      </div>

                      {/* Check 3 */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-900 font-semibold text-sm sm:text-base">Serial Number</p>
                            <p className="text-slate-600 text-xs sm:text-sm mt-1">Serial number is valid</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Below Dashboard */}
          <div className="text-center mt-12">
            <Link 
              href="/dashboard-demo"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition font-semibold text-lg inline-block"
            >
              Try Full Dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 SneakersLite. Advanced Authentication for Every Sneaker.</p>
        </div>
      </footer>
    </div>
  );
}
