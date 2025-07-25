import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Glass Effects Gallery - Open Source Glass Morphism Collection',
    template: '%s | Glass Effects Gallery'
  },
  description: 'A curated open-source collection of glass morphism effects for developers and designers. Browse, copy, and contribute glass effects with Tailwind CSS, React components, and AI prompts. Perfect for modern web design.',
  keywords: [
    'glass morphism',
    'glassmorphism',
    'glass effects',
    'backdrop blur',
    'tailwind css',
    'react components',
    'web design',
    'css effects',
    'frosted glass',
    'transparent design',
    'modern ui',
    'open source'
  ],
  authors: [{ name: 'Opengate Labs' }],
  creator: 'Opengate Labs',
  publisher: 'Opengate Labs',
  metadataBase: new URL('https://glass-effects-gallery.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glass-effects-gallery.vercel.app',
    title: 'Glass Effects Gallery - Open Source Glass Morphism Collection',
    description: 'A curated open-source collection of glass morphism effects for developers and designers. Browse, copy, and contribute glass effects with Tailwind CSS and React.',
    siteName: 'Glass Effects Gallery',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Glass Effects Gallery - Glass Morphism Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Effects Gallery - Open Source Glass Morphism Collection',
    description: 'A curated open-source collection of glass morphism effects for developers and designers.',
    images: ['/og-image.png'],
    creator: '@opengate_labs',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Glass Effects Gallery',
              description: 'A curated open-source collection of glass morphism effects for developers and designers.',
              url: 'https://glass-effects-gallery.vercel.app',
              author: {
                '@type': 'Organization',
                name: 'Opengate Labs',
              },
              keywords: 'glass morphism, glassmorphism, glass effects, backdrop blur, tailwind css, react components, web design',
              inLanguage: 'en-US',
            }),
          }}
        />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
