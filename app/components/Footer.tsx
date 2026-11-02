import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionary'

interface FooterProps {
  locale: Locale
  t: Dictionary['common']['footer']
}

export default function Footer({ locale, t }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-dark">Sneakers</span>
              <span className="text-brand-cyan">Lite</span>
            </h3>
            <p className="text-gray-600 text-sm">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localePath(locale, '/')} className="text-gray-600 hover:text-brand-cyan text-sm">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, '/about')} className="text-gray-600 hover:text-brand-cyan text-sm">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, '/security')} className="text-gray-600 hover:text-brand-cyan text-sm">
                  {t.security}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, '/contact')} className="text-gray-600 hover:text-brand-cyan text-sm">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Presence */}
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">{t.presence}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">🇭🇰 {t.hongKong}</li>
              <li className="text-gray-600">🇨🇳 {t.china}</li>
              <li className="text-gray-600">🇸🇬 {t.singapore}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
