import type { Metadata } from 'next'
import '../styles/globals.css'
import ConvexClientProvider from './ConvexClientProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://helpfulabssolutions.com'),
  title: 'Helpfulabs Solutions - Business Automation & Systemization',
  description: 'Practical automation and systems for local product & service businesses in Kenya and East Africa. Run smoother, reduce owner stress, and grow profitably.',
  keywords: ['business automation', 'systemization', 'Kenya', 'East Africa', 'small business', 'consulting'],
  authors: [{ name: 'Helpfulabs Solutions' }],
  creator: 'Helpfulabs Solutions',
  publisher: 'Helpfulabs Solutions',
  openGraph: {
    title: 'Helpfulabs Solutions - Business Automation & Systemization',
    description: 'Practical automation and systems for local product & service businesses in Kenya and East Africa.',
    url: 'https://helpfulabssolutions.com',
    siteName: 'Helpfulabs Solutions',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Helpfulabs Solutions - Business Automation & Systemization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helpfulabs Solutions - Business Automation & Systemization',
    description: 'Practical automation and systems for local product & service businesses in Kenya and East Africa.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-body text-gray-900 antialiased">
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  )
}
