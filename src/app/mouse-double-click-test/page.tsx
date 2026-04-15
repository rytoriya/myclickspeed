import { Metadata } from 'next'
import { MouseDoubleClickWidget } from '@/components/tools/MiscWidgets'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Double Click Test – Detect Double Click Issues',
  description: 'Test your mouse for double-click problems. Detect if your mouse registers two clicks from a single click - a common micro-switch issue.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-double-click-test' },
}

export default function MouseDoubleClickTestPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Double Click Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Double Click Test</h1>
        <p className="section-subtitle">Click the area below at your normal speed. The tool detects if your mouse is registering double clicks from single clicks.</p>
      </div>
      <MouseDoubleClickWidget />
      <div className="content-section">
        <h2>Why Does My Mouse Double Click?</h2>
        <p>Double-clicking from a single click is caused by worn or faulty micro-switches inside the mouse buttons. When the switch contact degrades it bounces, registering two clicks instead of one. This is called switch chattering and is extremely common in mice after 1–2 years of heavy use.</p>
        <p>Fixes range from adjusting the double-click speed in Windows settings (a temporary workaround) to replacing the micro-switch inside the mouse (permanent fix). Popular replacement switches include Omron D2FC-F-7N and Huano Blue Shell.</p>
      </div>
      <RelatedTools currentHref="/mouse-double-click-test" />
    </div>
  )
}
