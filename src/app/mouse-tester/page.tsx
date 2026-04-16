import { Metadata } from 'next'
import Link from 'next/link'
import MouseTesterWidget from '@/components/tools/MouseTesterWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Tester – Test All Mouse Buttons & Scroll Wheel Online',
  description: 'Test every button on your mouse online for free. Detect double-click issues, verify side buttons, and check scroll wheel - no download needed.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-tester' },
}

export default function MouseTesterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Mouse Tester</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Tester</h1>
        <p className="section-subtitle">Click any mouse button to test it. Side buttons, scroll wheel - everything is detected in real time.</p>
      </div>
      <MouseTesterWidget />
      <div className="content-section">
        <h2>Why Test Your Mouse Buttons?</h2>
        <p>Mouse buttons wear out over time. The most common issue is double-clicking from a single click, caused by degraded micro-switches inside the buttons. Testing your mouse helps you catch these problems early and decide whether cleaning, repair, or replacement is needed.</p>
        <p>Side buttons (buttons 3 and 4) are frequently used in browsers and games for navigation. If they don&apos;t register in this test, they may need to be enabled or remapped in your mouse&apos;s software driver.</p>
        <p>
          For a complete mouse health check, also try the <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Polling Rate Checker</Link> to verify your mouse is reporting at 1000 Hz for optimal gaming performance.
        </p>
      </div>
      <RelatedTools currentHref="/mouse-tester" />
    </div>
  )
}
