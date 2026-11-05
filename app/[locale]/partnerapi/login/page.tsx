import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Partner sign in — SneakersLite',
  robots: { index: false, follow: false },
}

const ERRORS: Record<string, string> = {
  invalid: 'That partner name and password do not match.',
  locked: 'Too many failed attempts. This login is paused — contact your SneakersLite account manager.',
  origin: 'The sign-in request was rejected. Reload the page and try again.',
  unavailable: 'Partner sign-in is not configured on this deployment.',
}

interface PageProps {
  searchParams: { error?: string; next?: string }
}

export default function PartnerLogin({ searchParams }: PageProps) {
  const error = searchParams.error ? ERRORS[searchParams.error] : null
  const next = searchParams.next && /^\/partnerapi(\/[A-Za-z0-9/_-]*)?$/.test(searchParams.next) ? searchParams.next : '/partnerapi'

  return (
    <main className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center text-2xl font-bold text-white mb-8">
          Sneakers<span className="text-brand-cyan">Lite</span>
        </Link>
        <form method="post" action="/api/partner/login" className="bg-white rounded-xl shadow-xl p-8 space-y-5">
          <div>
            <h1 className="text-xl font-bold text-brand-dark">Partner API documentation</h1>
            <p className="text-sm text-gray-500 mt-1">Sign in with the partner login issued by SneakersLite.</p>
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          <input type="hidden" name="next" value={next} />
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Partner name</span>
            <input
              name="partner"
              type="text"
              autoComplete="username"
              autoCapitalize="none"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-cyan focus:ring-brand-cyan"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-cyan focus:ring-brand-cyan"
            />
          </label>
          <button type="submit" className="w-full rounded-lg bg-brand-cyan px-4 py-2.5 text-sm font-semibold text-white hover:bg-cyan-600">
            Sign in
          </button>
          <p className="text-xs text-gray-400 text-center">
            Five failed attempts pause the login. Sessions last 8 hours.
          </p>
        </form>
        <p className="text-center text-xs text-slate-400 mt-6">
          Not a partner yet? <Link href="/contact" className="text-brand-cyan hover:underline">Contact us</Link>
        </p>
      </div>
    </main>
  )
}
