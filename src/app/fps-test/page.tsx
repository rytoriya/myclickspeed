import { Metadata } from 'next'
import { FpsWidget } from '@/components/tools/MiscWidgets'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'FPS Test – Check Your Browser Frame Rate Online',
  description: 'Check your browser FPS (Frames Per Second) online. See if your monitor and GPU can handle high frame rates for smooth gaming.',
  alternates: { canonical: 'https://myclickspeed.com/fps-test' },
}

export default function FpsTestPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>FPS Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">FPS Test</h1>
        <p className="section-subtitle">Check the current frame rate your browser is rendering. Limited by your monitor refresh rate and GPU performance.</p>
      </div>
      <FpsWidget />
      <div className="content-section">
        <h2>Why Does FPS Matter in Gaming?</h2>
        <p>Higher FPS means smoother gameplay and lower input lag. At 60 FPS each frame takes 16.7ms. At 144 FPS each frame takes just 6.9ms - cutting input lag by more than half. Competitive FPS players often target 144Hz or 240Hz monitors to gain a reaction time advantage.</p>
      </div>
      <RelatedTools currentHref="/fps-test" />
    </div>
  )
}
