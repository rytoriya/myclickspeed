import { Metadata } from 'next'
import Link from 'next/link'
import PollingRateClient from '@/components/tools/PollingRateClient'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Polling Rate Checker - Test Your Mouse Hz Online | My Click Speed',
  description: 'Check your mouse polling rate (Hz) instantly online. Find out if your mouse runs at 125Hz, 500Hz, 1000Hz or higher. Free tool - no download needed.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-polling-rate-checker' },
  openGraph: {
    title: 'Mouse Polling Rate Checker - Test Your Mouse Hz Online | My Click Speed',
    description: 'Check your mouse polling rate (Hz) instantly online. Free tool - no download needed.',
    url: 'https://myclickspeed.com/mouse-polling-rate-checker',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mouse Polling Rate Checker',
  description: 'Check your mouse polling rate in Hz online. Free browser-based tool, no download required.',
  url: 'https://myclickspeed.com/mouse-polling-rate-checker',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PollingRatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-wrapper">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Polling Rate Checker</span>
        </nav>

        <div style={{ padding: '24px 0 8px' }}>
          <h1 className="section-title">Mouse Polling Rate Checker</h1>
          <p className="section-subtitle">
            Click Start Test then move your mouse continuously to measure its polling rate in Hz - how many times per second your mouse reports its position.
          </p>
        </div>

        <div className="tool-card" suppressHydrationWarning>
          <PollingRateClient />
        </div>

        <div className="content-section">
          <h2>What is Mouse Polling Rate?</h2>
          <p>
            Mouse polling rate is how frequently your mouse sends position updates to your computer, measured in Hz (times per second). At 125 Hz, your mouse reports its position every 8 milliseconds. At 1000 Hz, it reports every 1 millisecond - eight times more often. The higher the polling rate, the smoother and more responsive your cursor feels, especially during fast movements.
          </p>
          <p>
            For competitive gaming, 1000 Hz is the current standard. It provides 1 ms input latency from mouse movement to cursor update, which is important in fast-paced games where fractions of a second matter. Some high-end gaming mice now support 2000 Hz or 4000 Hz, though the practical benefit above 1000 Hz is minimal for most players.
          </p>
          <p>
            Basic office mice typically run at 125 Hz. Budget gaming mice often default to 500 Hz. Most mid-range and high-end gaming mice can be set to 1000 Hz through their software. If your mouse supports higher rates, it is worth enabling 1000 Hz for the best cursor feel during games.
          </p>
        </div>

        <div className="content-section">
          <h2>How to Use the Polling Rate Checker</h2>
          <p>
            Click the Start Test button, then move your mouse smoothly and continuously in any direction. Within one to two seconds you will see your polling rate reading stabilize. The tool counts how many mousemove events your browser receives per second, which directly corresponds to your mouse polling rate.
          </p>
          <p>
            Move your mouse at a steady, moderate speed for the most accurate reading. Moving too slowly may produce fewer events than your actual polling rate. The STABLE indicator appears once the reading has been consistent for several consecutive measurements, confirming your result is reliable.
          </p>
          <p>
            The detected rate card highlights which standard polling rate your mouse matches: 125 Hz, 500 Hz, 1000 Hz, or higher. The history graph shows how consistent your polling rate has been over the last several seconds - a flat, consistent graph means your mouse is delivering stable performance.
          </p>
        </div>

        <div className="content-section">
          <h2>How to Change Your Mouse Polling Rate</h2>
          <p>
            Most gaming mice let you change the polling rate through manufacturer software such as Razer Synapse, Logitech G Hub, SteelSeries Engine, or Corsair iCUE. Open your mouse software, look for a polling rate or report rate setting, and select 1000 Hz for the best gaming performance.
          </p>
          <p>
            Some mice have a dedicated polling rate button on the underside that cycles through available rates when held. Check your mouse manual if you cannot find the setting in software. After changing, run this checker again to confirm the new rate is being applied correctly.
          </p>
          <p>
            If your mouse is capped at 125 Hz and cannot be changed, the hardware may not support higher rates, or you may need a different USB port. Connecting your mouse to a USB 2.0 or 3.0 port directly on your motherboard rather than a hub sometimes resolves polling rate limitations.
          </p>
        </div>

        <div className="content-section">
          <h2>Related Mouse Tools</h2>
          <p>
            Once you have checked your polling rate, explore the other mouse testing tools on My Click Speed. The <Link href="/mouse-tester" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Tester</Link> verifies every button on your mouse works correctly. The <Link href="/mouse-dpi-calculator" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>DPI Calculator</Link> helps you find your true mouse sensitivity. The <Link href="/mouse-drift-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Drift Test</Link> checks whether your mouse sensor drifts when the mouse is stationary.
          </p>
          <p>
            For gaming performance, pair your polling rate check with a <Link href="/cps-test/5" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>CPS test</Link> to measure your clicking speed, and use the <Link href="/mouse-sensitivity-converter" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Sensitivity Converter</Link> to carry your sensitivity settings across different games.
          </p>
        </div>

        <RelatedTools currentHref="/mouse-polling-rate-checker" />
      </div>
    </>
  )
}
