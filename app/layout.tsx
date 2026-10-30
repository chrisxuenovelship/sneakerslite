import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-JJPC6FYVNM'

export const metadata: Metadata = {
  title: 'SneakersLite - Authenticate Faster. Cheaper. Consistently.',
  description: 'Fast, affordable, and consistent sneaker authentication with cutting-edge verification technology.',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '8IqWKXmUdiw8fmv6HjnGXv3_RvaRp6-jXTqNIIIixOs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-dark">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
