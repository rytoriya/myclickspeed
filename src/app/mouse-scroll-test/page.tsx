import { Metadata } from 'next'
import { MouseScrollWidget } from '@/components/tools/MiscWidgets'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Scroll Test – Test Your Scroll Wheel Online Free',
  description: 'Test your mouse scroll wheel online. Detect scroll direction, speed, and horizontal scrolling. Check for scroll wheel issues instantly.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-scroll-test' },
}

export default function MouseScrollTestPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Scroll Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Scroll Test</h1>
        <p className="section-subtitle">Scroll your mouse wheel to test it. Up, down, and horizontal scroll are all detected in real time.</p>
      </div>
      <MouseScrollWidget />
      <div className="content-section">
        <h2>Common Scroll Wheel Issues</h2>
        <p>If your scroll wheel skips or jumps in the wrong direction, it likely has a dirty or worn encoder inside. Compressed air can sometimes fix this. Erratic scrolling that goes up when you scroll down is called scroll wheel reversal — a common hardware fault in older mice.</p>
      </div>
      <RelatedTools currentHref="/mouse-scroll-test" />
    </div>
  )
}
