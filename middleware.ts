import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, isLocale } from '@/lib/i18n'

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
 * `/partnerapi/**` is English-only and unlisted: locale-prefixed forms redirect to the bare path,
 * responses carry noindex / no-store headers, and `app/robots.ts` disallows the prefix.
 */
function partnerArea(request: NextRequest, sub: string): NextResponse {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/partnerapi')) {
    const url = request.nextUrl.clone()
    url.pathname = `/partnerapi${sub}`
    return withPartnerHeaders(NextResponse.redirect(url, 308))
  }
  const headers = new Headers(request.headers)
  headers.set('x-locale-path', `/${defaultLocale}${pathname}`)
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
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const partner = PARTNER_RE.exec(pathname)
  if (partner) return partnerArea(request, partner[1])
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
