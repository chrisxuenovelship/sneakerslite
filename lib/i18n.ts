import type { Metadata } from 'next'

export const locales = ['en', 'zh', 'ja', 'ko'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const siteUrl = 'https://sneakerslite.com'

export function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? '')
}

/** Native-script label used in the language switcher and blog tabs. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
}

/** BCP 47 tag: `<html lang>`, hreflang, Intl formatting, and the Sanity `language` field. */
export const langTag: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja',
  ko: 'ko',
}

/** Sanity articles created before the language field existed have no value — treat as English. */
export function localeFromLangTag(tag: string | null | undefined): Locale {
  const match = locales.find((l) => langTag[l] === tag)
  return match ?? defaultLocale
}

/** Build a locale-aware href. English is served unprefixed; other locales get a path prefix. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === defaultLocale) return clean
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`
}

/** Split a pathname into its locale and the locale-less path (`/ja/blog` → `{ ja, /blog }`). */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split('/')
  if (isLocale(first)) {
    return { locale: first, path: `/${rest.join('/')}` }
  }
  return { locale: defaultLocale, path: pathname || '/' }
}

/** Canonical + hreflang alternates for a page that exists in every locale. */
export function pageAlternates(locale: Locale, path: string): Metadata['alternates'] {
  const languages: Record<string, string> = {}
  for (const l of locales) languages[langTag[l]] = `${siteUrl}${localePath(l, path)}`
  languages['x-default'] = `${siteUrl}${localePath(defaultLocale, path)}`
  return {
    canonical: `${siteUrl}${localePath(locale, path)}`,
    languages,
  }
}
