import { Metadata } from 'next'
import AccelerationWidget from '@/components/tools/AccelerationWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Acceleration Test – Check if Mouse Acceleration is On',
  description: 'Test whether mouse acceleration is affecting your cursor movement. Move your mouse at different speeds to detect acceleration and improve aiming consistency.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-acceleration-tool' },
}

export default function MouseAccelerationPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Mouse Acceleration Tool</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Acceleration Tool</h1>
        <p className="section-subtitle">Move your mouse at different speeds to detect whether acceleration is changing your cursor movement. Most gamers prefer acceleration off for consistent aim.</p>
      </div>
      <AccelerationWidget />
      <div className="content-section">
        <h2>What is Mouse Acceleration?</h2>
        <p>Mouse acceleration changes how far your cursor moves based on how fast you move the mouse - not just how far you physically move it. When acceleration is on, a fast flick moves the cursor further than a slow deliberate movement of the same physical distance. This inconsistency makes aim training harder since the same physical movement produces different results depending on your speed.</p>
        <p>Most competitive FPS players disable mouse acceleration in Windows (Enhanced Pointer Precision) and in-game settings. To disable it on Windows: Control Panel → Mouse → Pointer Options → uncheck &quot;Enhance pointer precision&quot;.</p>
      </div>
      <RelatedTools currentHref="/mouse-acceleration-tool" />
    </div>
  )
}
