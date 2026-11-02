import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, isLocale } from '@/lib/i18n'

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
