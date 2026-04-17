import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://myclickspeed.com'),
  title: {
    default: 'My Click Speed – Free CPS Test & Gaming Tools',
    template: '%s | My Click Speed',
  },
  description: 'Free online CPS test, mouse tools, keyboard testers and gaming utilities. Test your click speed, mouse accuracy, typing speed and more.',
  verification: {
    google: 'tfIPRDPgahEIUH5rBrfkuqeQcbAIT2yDPjHZwZhOHc0',
  },
  openGraph: {
    siteName: 'My Click Speed',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1207209367017000"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SEPR63EF9Q"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SEPR63EF9Q');
          `}
        </Script>
        {/* Google Analytics Universal (legacy) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-190582056-1"
          strategy="afterInteractive"
        />
        <Script id="ua" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-190582056-1');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <div style={{
          display: 'flex',
          maxWidth: 1300,
          margin: '0 auto',
          padding: '0 16px',
          gap: 24,
          alignItems: 'flex-start',
        }}>
          <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  )
}