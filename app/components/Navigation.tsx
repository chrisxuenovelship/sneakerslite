'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { localeNames, localePath, locales, stripLocale, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface NavigationProps {
  locale: Locale
  t: Dictionary['common']['nav']
}

export default function Navigation({ locale, t }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { path } = stripLocale(usePathname())

  const links = [
    { href: '/', label: t.home },
    { href: '/about', label: t.about },
    { href: '/security', label: t.security },
    { href: '/pricing', label: t.pricing },
    { href: '/blog', label: t.blog },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={localePath(locale, '/')} className="text-2xl font-bold shrink-0 whitespace-nowrap">
            <span className="text-brand-dark">Sneakers</span>
            <span className="text-brand-cyan">Lite</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8 whitespace-nowrap">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localePath(locale, link.href)}
                className="text-brand-dark hover:text-brand-cyan font-medium transition"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} path={path} label={t.language} />
            <Link href={localePath(locale, '/contact')} className="btn-primary">
              {t.getStarted}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.toggleMenu}
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="xl:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localePath(locale, link.href)}
                className="block text-brand-dark hover:text-brand-cyan font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher locale={locale} path={path} label={t.language} />
            </div>
            <Link
              href={localePath(locale, '/contact')}
              className="block btn-primary mt-2 inline-block"
              onClick={() => setMenuOpen(false)}
            >
              {t.getStarted}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

/** Article translations have their own links; the global switcher opens the target-language listing. */
function LanguageSwitcher({ locale, path, label }: { locale: Locale; path: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm" aria-label={label}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-gray-300">|</span>}
          {l === locale ? (
            <span className="font-semibold text-brand-cyan" aria-current="true" lang={l}>
              {localeNames[l]}
            </span>
          ) : (
            <Link
              href={localePath(l, path.startsWith('/blog/') ? '/blog' : path)}
              hrefLang={l === 'zh' ? 'zh-CN' : l}
              lang={l === 'zh' ? 'zh-CN' : l}
              className="text-gray-500 hover:text-brand-cyan transition"
            >
              {localeNames[l]}
            </Link>
          )}
        </span>
      ))}
    </div>
  )
}
