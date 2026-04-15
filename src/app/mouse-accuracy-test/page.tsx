import { Metadata } from 'next'
import MouseAccuracyWidget from '@/components/tools/MouseAccuracyWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Accuracy Test – Free Online Aim Accuracy Tester',
  description: 'Test your mouse accuracy with our free online tool. Click moving and static targets to measure your aim precision and reaction time.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-accuracy-test' },
}

export default function MouseAccuracyPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Mouse Accuracy Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Accuracy Test</h1>
        <p className="section-subtitle">Click the targets as fast and accurately as you can. Your accuracy percentage and average reaction time are tracked in real time.</p>
      </div>
      <MouseAccuracyWidget />
      <div className="content-section">
        <h2>What Does Mouse Accuracy Mean?</h2>
        <p>Mouse accuracy measures how precisely you can click on a target. In FPS games, high accuracy translates directly to better headshot rates and fewer wasted shots. The average gamer has around 60–70% accuracy in fast-paced scenarios. Elite players consistently hit 80%+.</p>
        <p>Accuracy is affected by your mouse sensitivity, DPI settings, mousepad surface, and the steadiness of your hand. Lower DPI with a large mousepad generally allows more precise movements.</p>
      </div>
      <RelatedTools currentHref="/mouse-accuracy-test" />
    </div>
  )
}
