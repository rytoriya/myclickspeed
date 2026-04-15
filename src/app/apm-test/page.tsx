import { Metadata } from 'next'
import { ApmWidget } from '@/components/tools/MiscWidgets'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'APM Test – Measure Your Actions Per Minute Online',
  description: 'Test your APM (Actions Per Minute) with our free online tool. Measure combined keyboard and mouse actions per minute like a pro gamer.',
  alternates: { canonical: 'https://myclickspeed.com/apm-test' },
}

export default function ApmTestPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>APM Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">APM Test</h1>
        <p className="section-subtitle">Actions Per Minute measures how fast you perform combined keyboard and mouse inputs. Start the test and go as fast as you can.</p>
      </div>
      <ApmWidget />
      <div className="content-section">
        <h2>What is a Good APM?</h2>
        <p>In RTS games like StarCraft, professional players average 300–500 APM, with peaks above 600. Casual gamers typically average 50–150 APM. In MOBAs like League of Legends, 200+ APM is considered competitive. For FPS games APM is less relevant — aim and reaction time matter more.</p>
      </div>
      <RelatedTools currentHref="/apm-test" />
    </div>
  )
}
