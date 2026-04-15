import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Polling Rate Checker – Test Your Mouse Hz Online',
  description: 'Check your mouse polling rate (Hz) online. Find out if your mouse is running at 125Hz, 500Hz, or 1000Hz for optimal gaming performance.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-polling-rate-checker' },
}

export default function PollingRatePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Polling Rate Checker</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Polling Rate Checker</h1>
        <p className="section-subtitle">Move your mouse to measure its polling rate in Hz - how many times per second it reports its position to your computer.</p>
      </div>
      <PollingRateWidget />
      <div className="content-section">
        <h2>What is Mouse Polling Rate?</h2>
        <p>Polling rate is how frequently your mouse reports its position to your computer. At 125Hz it updates every 8ms. At 1000Hz it updates every 1ms - 8x more often. Higher polling rate means smoother, more responsive cursor movement with lower input lag. Most gaming mice support 1000Hz polling rate.</p>
        <p>For competitive gaming, 1000Hz is the standard. Some high-end mice now support 4000Hz or 8000Hz, though the benefit at that level is minimal for most players.</p>
      </div>
      <RelatedTools currentHref="/mouse-polling-rate-checker" />
    </div>
  )
}

function PollingRateWidget() {
  return (
    <div className="tool-card" suppressHydrationWarning>
      <PollingRateClient />
    </div>
  )
}

import PollingRateClient from '@/components/tools/PollingRateClient'
