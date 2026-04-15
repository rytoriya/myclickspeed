import { Metadata } from 'next'
import TallyWidget from '@/components/tools/TallyWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Clicker Counter – Free Online Manual Counter Tool',
  description: 'Free online clicker counter. Click to increment, set step size, undo, and reset. Perfect for counting anything online.',
  alternates: { canonical: 'https://myclickspeed.com/clicker-counter' },
}

export default function ClickerCounterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Clicker Counter</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Clicker Counter</h1>
        <p className="section-subtitle">A simple online counter. Click to count up, adjust the step size, and use keyboard shortcuts for hands-free counting.</p>
      </div>
      <TallyWidget />
      <RelatedTools currentHref="/clicker-counter" />
    </div>
  )
}
