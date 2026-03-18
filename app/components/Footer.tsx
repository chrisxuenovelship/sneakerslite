import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-dark">Sneakers</span>
              <span className="text-brand-cyan">Lite</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Authenticate faster, cheaper, and consistently. The future of sneaker verification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-cyan text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-cyan text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-brand-cyan text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-cyan text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Presence */}
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">Our Presence</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">🇭🇰 Hong Kong</li>
              <li className="text-gray-600">🇨🇳 China</li>
              <li className="text-gray-600">🇸🇬 Singapore</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2026 SneakersLite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
