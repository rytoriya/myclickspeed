import { Metadata } from 'next'
import { MouseDriftWidget } from '@/components/tools/MiscWidgets'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Drift Test – Check Your Mouse Sensor for Drift',
  description: 'Test your mouse for drift and sensor issues. Move your mouse and track its path to detect angle snapping, prediction, or drift problems.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-drift-test' },
}

export default function MouseDriftTestPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Drift Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Drift Test</h1>
        <p className="section-subtitle">Move your mouse to track its path. Detects unwanted drift, angle snapping, and sensor prediction issues.</p>
      </div>
      <MouseDriftWidget />
      <div className="content-section">
        <h2>What is Mouse Drift?</h2>
        <p>Mouse drift happens when your cursor moves slightly even when you are not touching the mouse. It is usually caused by a dirty sensor, vibrations on the desk, or a faulty mouse. Angle snapping is a firmware feature that artificially straightens your mouse movements - it can feel like drift in some games.</p>
        <p>To fix drift: clean the sensor lens with a cotton swab, use a flat hard mousepad, and disable angle snapping in your mouse software if available.</p>
      </div>
      <RelatedTools currentHref="/mouse-drift-test" />
    </div>
  )
}
