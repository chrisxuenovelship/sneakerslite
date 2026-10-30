import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Data Protection Framework v1 | SneakersLite',
  description: 'SneakersLite Data Protection Framework — how we collect, process, store, transfer, and protect personal data and client data.',
}

export default function DataProtectionFramework() {
  const retentionData = [
    { type: 'Authentication images (raw)', period: '90 days post-authentication', method: 'Secure deletion from AWS S3' },
    { type: 'Authentication results and confidence scores', period: 'Duration of client contract + 1 year', method: 'Secure deletion' },
    { type: 'Client PII (contact, billing)', period: 'Duration of contract + 7 years (statutory)', method: 'Secure deletion' },
    { type: 'API call logs', period: '12 months', method: 'Automated log rotation' },
    { type: 'Website enquiry data', period: '24 months', method: 'Manual deletion on request' },
    { type: 'Anonymised training data', period: 'Indefinite (no PII retained)', method: 'N/A' },
  ]

  const processorData = [
    { processor: 'Amazon Web Services', purpose: 'Cloud infrastructure', data: 'All platform data', location: 'APAC' },
    { processor: 'Vercel', purpose: 'Website hosting and deployment', data: 'Website traffic data', location: 'Global CDN' },
    { processor: 'Sanity.io', purpose: 'Blog content management', data: 'Public content only', location: 'Global' },
    { processor: 'Resend', purpose: 'Transactional email', data: 'Contact form enquiries', location: 'Global' },
  ]

  return (
    <main className="w-full">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back link + Download */}
        <div className="flex items-center justify-between mb-12 no-print">
          <Link href="/security" className="text-sm text-gray-600 hover:text-brand-cyan transition">
            ← Back to Security
          </Link>
          <a
            href="/data-protection-framework.pdf"
            className="inline-flex items-center gap-2 bg-brand-cyan text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-cyan-700 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Title */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Data Protection Framework v1
          </h1>
          <p className="text-gray-600 text-lg">
            Primefleet Digital Hong Kong Limited | Effective April 2026 | Version 1.0
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Section 1 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">1. Purpose and Scope</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This document establishes the first version of SneakersLite's Data Protection Framework. It defines how Primefleet Digital Hong Kong Limited ("SneakersLite") collects, processes, stores, transfers, and protects personal data and client data in the course of delivering AI-powered sneaker authentication services.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This framework applies to all data processed via the SneakersLite platform, API, and website, including data submitted by B2B clients, end consumers accessing authentication services via partner platforms, and visitors to sneakerslite.com.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">2. Regulatory Compliance Commitments</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SneakersLite operates as a Hong Kong-registered entity with clients and data subjects across multiple APAC jurisdictions. This framework aligns with the following regulatory requirements:
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">Hong Kong — Personal Data (Privacy) Ordinance (PDPO)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As the primary jurisdiction of registration, SneakersLite fully complies with PDPO requirements including data collection transparency, purpose limitation, data accuracy, data security, openness of policies, and data subject access rights.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">China — Personal Information Protection Law (PIPL)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For clients and data subjects in mainland China, SneakersLite aligns data handling practices with PIPL requirements, including lawful basis for processing, cross-border transfer compliance, and data minimisation principles.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">China — Data Security Law (DSL)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SneakersLite aligns with DSL requirements governing the classification, protection, and cross-border transfer of data generated or processed in connection with activities in mainland China.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">Singapore — Personal Data Protection Act (PDPA)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For clients and data subjects in Singapore, data handling practices align with PDPA requirements including purpose limitation, consent, and data protection obligations.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">3. Data Classification Policy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SneakersLite classifies all data into four categories:
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">Category A — Personal Identifiable Information (PII)</h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
            <strong>Includes:</strong> client contact details, billing information, authorised representative names, email addresses.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Handling:</strong> encrypted at rest and in transit, access restricted to authorised personnel, retained only for the duration of the contractual relationship plus applicable statutory periods.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">Category B — Client Business Data</h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
            <strong>Includes:</strong> API keys, authentication volume data, cost structures, client lists, commercial terms.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Handling:</strong> treated as commercial confidential information per service agreements, not disclosed to third parties, access restricted on a need-to-know basis.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">Category C — Authentication Image Data</h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
            <strong>Includes:</strong> sneaker images submitted via API for authentication.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Handling:</strong> processed solely for delivering authentication results, used for anonymised model training only with client consent per service agreement, ownership retained by the submitting client, not sold or disclosed to third parties.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-3">Category D — Public Data</h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
            <strong>Includes:</strong> anonymised authentication statistics, aggregated platform metrics, published content.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Handling:</strong> no restrictions on access or use.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">4. Data Flow Summary</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-brand-dark mb-3">Authentication API Flow</h3>
            <p className="text-gray-700 leading-relaxed">
              Client submits sneaker images via API → Images received by SneakersLite API Gateway (AWS, APAC region) → Pre-processing and standardisation → Visual feature analysis and tag authentication → Authentication confidence score generated → Result returned to client via API → Images stored temporarily for quality assurance → Anonymised data retained for model training (with consent) → Raw images deleted per retention schedule.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-brand-dark mb-3">Website Contact Form Flow</h3>
            <p className="text-gray-700 leading-relaxed">
              Personal data collected via sneakerslite.com contact form → Transmitted via Resend email API → Received by SneakersLite team → Used solely for responding to the enquiry → Not added to marketing lists without explicit consent.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">5. Data Retention Schedule</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-cyan">
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Data Type</th>
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Retention Period</th>
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Deletion Method</th>
                </tr>
              </thead>
              <tbody>
                {retentionData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-brand-dark font-medium">{row.type}</td>
                    <td className="py-3 px-4 text-gray-600">{row.period}</td>
                    <td className="py-3 px-4 text-gray-600">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">6. Data Security Measures</h2>

          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">Infrastructure</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            All data is hosted on AWS infrastructure in the APAC region. Components include EC2 (compute), RDS (database), S3 (storage), CloudFront (CDN), Shield (DDoS protection), and ACM (SSL/TLS certificates).
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">Encryption</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            All data encrypted at rest using AES-256. All data in transit encrypted using TLS 1.3 minimum.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">Access Control</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Role-based access control (RBAC) applied to all internal systems. API authentication required for all client-facing endpoints. Access logs maintained and reviewed.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">Security Monitoring</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Continuous monitoring via AWS CloudWatch. Incident response plan maintained and reviewed quarterly.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">API Security</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            All API endpoints require authenticated requests. Rate limiting applied to prevent abuse. Requests validated for format and integrity before processing.
          </p>

          {/* Section 7 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">7. Cross-Border Data Transfer Policy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SneakersLite processes data on behalf of clients in Hong Kong, mainland China, and Singapore. Cross-border data transfers are conducted under the following conditions:
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Transfers from mainland China comply with PIPL cross-border transfer requirements including applicable security assessments where required by law. Clients are responsible for ensuring that data submitted to SneakersLite's API has been collected lawfully in their jurisdiction and that cross-border transfer to SneakersLite's Hong Kong infrastructure is permitted under applicable local law. SneakersLite does not transfer client data to jurisdictions outside of its contracted cloud infrastructure providers (AWS APAC) without client consent.
          </p>

          {/* Section 8 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">8. Data Subject Rights</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SneakersLite respects and supports the exercise of data subject rights under applicable law. Data subjects may request:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700"><strong>Access:</strong> A copy of personal data held about them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700"><strong>Correction:</strong> Amendment of inaccurate personal data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700"><strong>Deletion:</strong> Erasure of personal data where no legal basis for retention exists</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700"><strong>Objection:</strong> Objection to specific processing activities</span>
            </li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Requests should be submitted to: <a href="mailto:chrisxue@novelship.com" className="text-brand-cyan hover:underline">chrisxue@novelship.com</a>. SneakersLite will respond within 30 days of receiving a valid request.
          </p>

          {/* Section 9 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">9. Data Breach Notification Procedure</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In the event of a confirmed data breach affecting personal data:
          </p>
          <ol className="space-y-3 mb-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">1.</span>
              <span className="text-gray-700">Internal escalation to CEO within 2 hours of detection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">2.</span>
              <span className="text-gray-700">Containment measures implemented immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">3.</span>
              <span className="text-gray-700">Scope and impact assessment completed within 24 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">4.</span>
              <span className="text-gray-700">Affected clients notified within 72 hours of confirmed breach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">5.</span>
              <span className="text-gray-700">Regulatory notification to the Office of the Privacy Commissioner for Personal Data (PCPD) in Hong Kong where required by law</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">6.</span>
              <span className="text-gray-700">Post-incident review completed within 14 days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">7.</span>
              <span className="text-gray-700">Remediation plan documented and implemented</span>
            </li>
          </ol>

          {/* Section 10 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">10. Third-Party Data Processors</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-cyan">
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Processor</th>
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Purpose</th>
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Data Processed</th>
                  <th className="text-left py-3 px-4 font-bold text-brand-dark">Location</th>
                </tr>
              </thead>
              <tbody>
                {processorData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-brand-dark font-medium">{row.processor}</td>
                    <td className="py-3 px-4 text-gray-600">{row.purpose}</td>
                    <td className="py-3 px-4 text-gray-600">{row.data}</td>
                    <td className="py-3 px-4 text-gray-600">{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 11 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">11. Data Subject Access Request (DSAR) Procedure</h2>
          <ol className="space-y-3 mb-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">1.</span>
              <span className="text-gray-700">Request received via <a href="mailto:chrisxue@novelship.com" className="text-brand-cyan hover:underline">chrisxue@novelship.com</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">2.</span>
              <span className="text-gray-700">Identity of requestor verified within 5 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">3.</span>
              <span className="text-gray-700">Data retrieval completed within 20 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">4.</span>
              <span className="text-gray-700">Response provided in writing within 30 days of verified request</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">5.</span>
              <span className="text-gray-700">Complex requests may be extended by up to 30 additional days with notification to requestor</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold min-w-[24px]">6.</span>
              <span className="text-gray-700">Requests that cannot be fulfilled responded to with explanation</span>
            </li>
          </ol>

          {/* Section 12 */}
          <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-4">12. Framework Review and Updates</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This framework will be reviewed and updated:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700">Annually as a minimum</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700">Following any material change to data processing activities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700">Following any regulatory change affecting applicable data protection laws</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-cyan font-bold">•</span>
              <span className="text-gray-700">Following any data breach or security incident</span>
            </li>
          </ul>

          {/* Footer */}
          <div className="border-t-2 border-brand-cyan pt-8 mt-12">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div><strong className="text-brand-dark">Document version:</strong> 1.0</div>
              <div><strong className="text-brand-dark">Effective date:</strong> April 2026</div>
              <div><strong className="text-brand-dark">Next review date:</strong> April 2027</div>
              <div><strong className="text-brand-dark">Document owner:</strong> Chris Xue, CEO, Primefleet Digital Hong Kong Limited</div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
