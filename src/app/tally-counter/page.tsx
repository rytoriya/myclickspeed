import { Metadata } from 'next'
import TallyWidget from '@/components/tools/TallyWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Tally Counter – Free Online Click Counter',
  description: 'Free online tally counter. Click to count, set custom increments, and keep track of anything. No download required.',
  alternates: { canonical: 'https://myclickspeed.com/tally-counter' },
}

export default function TallyCounterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Tally Counter</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Tally Counter</h1>
        <p className="section-subtitle">Click the counter to add, subtract, or reset. Use the keyboard shortcut (+/-) or tap on mobile.</p>
      </div>
      <TallyWidget />
      <RelatedTools currentHref="/tally-counter" />
    </div>
  )
}
