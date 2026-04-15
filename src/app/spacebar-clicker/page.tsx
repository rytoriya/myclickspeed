import { Metadata } from 'next'
import SpacebarWidget from '@/components/tools/SpacebarWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Spacebar Clicker – Test Your Spacebar Speed Online',
  description: 'Test how fast you can press the spacebar with our free spacebar speed test. Measure spacebar clicks per second and compete for the best score.',
  alternates: { canonical: 'https://myclickspeed.com/spacebar-clicker' },
}

export default function SpacebarClickerPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/keyboard-tester">Keyboard</a> › <span>Spacebar Clicker</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Spacebar Speed Test</h1>
        <p className="section-subtitle">How fast can you tap the spacebar? Press Space or click the area below to start the test and find your spacebar CPS.</p>
      </div>
      <SpacebarWidget />
      <div className="content-section">
        <h2>Spacebar Speed in Gaming</h2>
        <p>Spacebar speed matters in many games - jumping in platformers, dodging in action games, and confirming actions in strategy games all depend on quick spacebar reactions. The average spacebar press speed is around 4–6 taps per second. Elite players can reach 10+ taps per second.</p>
      </div>
      <RelatedTools currentHref="/spacebar-clicker" />
    </div>
  )
}
