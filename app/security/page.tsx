import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Security() {
  const infrastructureData = [
    { component: 'Servers', provider: 'AWS EC2', region: 'APAC', encryption: 'AES-256' },
    { component: 'Database', provider: 'AWS RDS', region: 'APAC', encryption: 'AES-256' },
    { component: 'Storage', provider: 'AWS S3', region: 'APAC', encryption: 'AES-256' },
    { component: 'CDN', provider: 'AWS CloudFront', region: 'Global', encryption: 'TLS 1.3' },
    { component: 'DDoS Protection', provider: 'AWS Shield', region: 'Global', encryption: 'N/A' },
    { component: 'SSL/TLS', provider: 'AWS ACM', region: 'Global', encryption: 'TLS 1.3' },
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              Security & <span className="text-brand-cyan">Privacy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your data security and privacy are our top priorities. We adhere to international standards and regional regulations.
            </p>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* PDPO Compliance */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">
                  🇭🇰 PDPO Compliance
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We fully comply with the Personal Data (Privacy) Ordinance (PDPO) of Hong Kong, which governs how personal data is handled.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Data collection transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">User consent management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Data retention policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Right to access and correction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Data subject rights protection</span>
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">
                  🔐 Data Protection
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Enterprise-grade security measures protect your authentication data and personal information.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">End-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Regular security audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Secure API endpoints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Access control & monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <span className="text-gray-600">Incident response plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">
            AWS Infrastructure
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-brand-cyan">
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">Component</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">Provider</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">Region</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-dark">Encryption</th>
                </tr>
              </thead>
              <tbody>
                {infrastructureData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-4 px-4 text-brand-dark font-semibold">{row.component}</td>
                    <td className="py-4 px-4 text-gray-600">{row.provider}</td>
                    <td className="py-4 px-4 text-gray-600">{row.region}</td>
                    <td className="py-4 px-4 text-gray-600">{row.encryption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">
              Security Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">ISO 27001</h3>
                <p className="text-gray-600 text-sm">
                  Information Security Management System certification
                </p>
              </div>
              <div className="text-center bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">
                  Service Organization Control compliant
                </p>
              </div>
              <div className="text-center bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">PCI DSS</h3>
                <p className="text-gray-600 text-sm">
                  Payment Card Industry Data Security Standard
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-gradient-to-r from-brand-cyan to-cyan-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Security Questions?
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              Contact our security team for any inquiries about our privacy practices and security measures.
            </p>
            <button className="bg-white text-brand-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
