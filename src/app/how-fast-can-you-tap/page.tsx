import { Metadata } from 'next'
import SpacebarWidget from '@/components/tools/SpacebarWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'How Fast Can You Tap? – Free Tap Speed Test',
  description: 'Test how fast you can tap your finger or click a button. Measure your taps per second over 10 seconds with our free online tap speed test.',
  alternates: { canonical: 'https://myclickspeed.com/how-fast-can-you-tap' },
}

export default function HowFastTapPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>How Fast Can You Tap?</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">How Fast Can You Tap?</h1>
        <p className="section-subtitle">Press the Space key or click the area below as fast as you can. Measures your taps per second over 10 seconds.</p>
      </div>
      <SpacebarWidget />
      <div className="content-section">
        <h2>Tapping Speed Facts</h2>
        <p>The average person can tap around 4–7 times per second. Musicians and gamers who regularly use their fingers can often reach 8–10 taps per second. The world record for tapping speed exceeds 20 taps per second using specialized finger techniques. On a touchscreen, tap rates are typically lower than keyboard/mouse tapping due to the larger contact area and screen sensitivity limits.</p>
      </div>
      <RelatedTools currentHref="/how-fast-can-you-tap" />
    </div>
  )
}
