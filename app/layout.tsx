import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SneakersLite - Authenticate Faster. Cheaper. Consistently.',
  description: 'Fast, affordable, and consistent sneaker authentication with cutting-edge verification technology.',
  icons: {
    icon: '/favicon.ico',
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
      </body>
    </html>
  )
}
