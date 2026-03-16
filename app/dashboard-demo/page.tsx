'use client';

export default function DashboardDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-0 m-0 overflow-x-hidden">
      {/* Clean Dashboard Container - Tight Fit */}
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
  );
}
