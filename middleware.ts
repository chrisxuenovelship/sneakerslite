import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, isLocale } from '@/lib/i18n'
import { SESSION_COOKIE, verifySession } from '@/lib/partner-session'

const PARTNER_RE = /^\/(?:(?:zh|ja|ko)\/)?partnerapi(?=\/|$)(.*)$/

const PARTNER_HEADERS: Record<string, string> = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'DENY',
}

function withPartnerHeaders(res: NextResponse): NextResponse {
  for (const [k, v] of Object.entries(PARTNER_HEADERS)) res.headers.set(k, v)
  return res
}

/**
 * `/partnerapi/**` is English-only and gated by the signed `partner_session` cookie
 * (`lib/partner-session.ts`). Locale-prefixed forms redirect to the bare path so the
 * cookie's `Path=/partnerapi` always applies. Only `/partnerapi/login` is open.
 */
async function partnerGate(request: NextRequest, sub: string): Promise<NextResponse> {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/partnerapi')) {
    const url = request.nextUrl.clone()
    url.pathname = `/partnerapi${sub}`
    return withPartnerHeaders(NextResponse.redirect(url, 308))
  }
  const session = await verifySession(process.env.PARTNER_SESSION_SECRET, request.cookies.get(SESSION_COOKIE)?.value)
  const headers = new Headers(request.headers)
  headers.set('x-locale-path', `/${defaultLocale}${pathname}`)
  if (sub === '/login') {
    if (session) {
      const url = request.nextUrl.clone()
      url.pathname = '/partnerapi'
      url.search = ''
      return withPartnerHeaders(NextResponse.redirect(url))
    }
  } else if (!session) {
    const url = request.nextUrl.clone()
    url.pathname = '/partnerapi/login'
    url.search = sub && sub !== '/' ? `?next=${encodeURIComponent(pathname)}` : ''
    return withPartnerHeaders(NextResponse.redirect(url))
  }
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return withPartnerHeaders(NextResponse.rewrite(url, { request: { headers } }))
}

/**
 * English is served at unprefixed URLs (`/`, `/blog`), other locales under a prefix (`/ja/blog`).
 * Internally every page lives under `app/[locale]`, so unprefixed requests are rewritten to `/en/...`.
 * An explicit `/en/...` URL is redirected to its unprefixed form so each page has one canonical URL.
 *
 * The internal (locale-prefixed) path is forwarded as `x-locale-path` because `not-found.tsx`
 * receives no route params and needs the locale to render localized chrome.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const partner = PARTNER_RE.exec(pathname)
  if (partner) return partnerGate(request, partner[1])
  const first = pathname.split('/')[1]

  if (first === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }

  const internalPath = isLocale(first) ? pathname : `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  const headers = new Headers(request.headers)
  headers.set('x-locale-path', internalPath)

  if (internalPath === pathname) return NextResponse.next({ request: { headers } })

  const url = request.nextUrl.clone()
  url.pathname = internalPath
  return NextResponse.rewrite(url, { request: { headers } })
}

export const config = {
  // Skip API routes, Next internals, and any path with a file extension (sitemap.xml, favicon.ico, *.pdf).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
