import { Metadata } from 'next'
import DpiCalculatorWidget from '@/components/tools/DpiCalculatorWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse DPI Calculator – Find Your True DPI & eDPI',
  description: 'Calculate your mouse DPI, eDPI, and sensitivity. Convert between game sensitivities and find the perfect mouse settings for gaming.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-dpi-calculator' },
}

export default function DpiCalculatorPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>DPI Calculator</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse DPI Calculator</h1>
        <p className="section-subtitle">Calculate your effective DPI (eDPI), convert between sensitivities, and find the ideal settings for competitive gaming.</p>
      </div>
      <DpiCalculatorWidget />
      <div className="content-section">
        <h2>What is DPI?</h2>
        <p>DPI (Dots Per Inch) measures how sensitive your mouse is - specifically how many pixels the cursor moves per inch of physical mouse movement. A higher DPI means your cursor moves further with less physical movement.</p>
        <p>Most professional FPS gamers use 400–800 DPI combined with low in-game sensitivity. This gives more precise control because small cursor movements require deliberate physical movement.</p>
      </div>
      <div className="content-section">
        <h2>What is eDPI?</h2>
        <p>eDPI (effective DPI) is your mouse DPI multiplied by your in-game sensitivity. It lets you compare sensitivity settings across different games or players regardless of their hardware settings. eDPI = DPI × In-game Sensitivity.</p>
      </div>
      <RelatedTools currentHref="/mouse-dpi-calculator" />
    </div>
  )
}
