import { Metadata } from 'next'
import KeyboardLatencyWidget from '@/components/tools/KeyboardLatencyWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Keyboard Latency Test – Measure Your Keyboard Input Lag',
  description: 'Test your keyboard input latency online. Measure the delay between pressing a key and it registering. Lower latency means faster response in games.',
  alternates: { canonical: 'https://myclickspeed.com/keyboard-latency-test' },
}

export default function KeyboardLatencyPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/keyboard-tester">Keyboard</a> › <span>Keyboard Latency Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Keyboard Latency Test</h1>
        <p className="section-subtitle">Press any key when the signal appears to measure your keyboard input lag and reaction time.</p>
      </div>
      <KeyboardLatencyWidget />
      <div className="content-section">
        <h2>What is Keyboard Latency?</h2>
        <p>Keyboard latency is the time between a physical key press and the computer registering the input. For gaming keyboards, this is typically 1–5ms - essentially imperceptible. USB keyboards typically have 1ms latency at 1000Hz polling rate. Wireless keyboards can add 1–3ms of additional latency, though modern wireless technology has made this gap negligible for most users.</p>
      </div>
      <RelatedTools currentHref="/keyboard-latency-test" />
    </div>
  )
}
