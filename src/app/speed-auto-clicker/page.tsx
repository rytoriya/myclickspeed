import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Speed Auto Clicker – Fastest Auto Clicker for Mouse',
  description: 'Download the fastest auto clicker for your mouse. Speed auto clickers can achieve thousands of clicks per second for maximum automation.',
  alternates: { canonical: 'https://myclickspeed.com/speed-auto-clicker' },
}

export default function SpeedAutoClickerPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/auto-clicker">Auto Clickers</a> › <span>Speed Auto Clicker</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Speed Auto Clicker</h1>
        <p className="section-subtitle">The fastest auto clickers for maximum clicks per second. Use for idle games, stress testing, and automation tasks.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
        {[
          { name: 'OP Auto Clicker', url: 'https://www.opautoclicker.com/', desc: 'Set interval to 0ms for maximum click speed. Open-source, portable, no install. The most trusted fast auto clicker.', badge: 'Recommended' },
          { name: 'Speed Auto Clicker', url: 'https://speedautoclicker.com/', desc: 'Designed specifically for high-speed clicking. Can achieve thousands of clicks per second. Lightweight Windows app.', badge: 'Fastest' },
          { name: 'GS Auto Clicker', url: 'https://gs-auto-clicker.en.softonic.com/', desc: 'Record click sequences and replay at high speed. Great for complex multi-point automation patterns.', badge: 'Multi-point' },
        ].map(t => (
          <div key={t.name} className="tool-card" style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{t.name}</h2>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: '#E1F5EE', color: '#085041', fontWeight: 600 }}>{t.badge}</span>
              </div>
              <p style={{ fontSize: 14, color: '#555', margin: 0 }}>{t.desc}</p>
            </div>
            <a href={t.url} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ textDecoration: 'none', fontSize: 13 }}>Download ↗</a>
          </div>
        ))}
      </div>
      <div className="content-section">
        <h2>How Fast Can Auto Clickers Click?</h2>
        <p>Modern auto clickers operating at 0ms intervals can technically achieve thousands of clicks per second, but this is limited by your computer&apos;s processing speed and the target application&apos;s ability to register inputs. Most applications cap out at 100–500 clicks per second in practice. Games often have server-side rate limiting that ignores inputs above a certain threshold.</p>
      </div>
      <RelatedTools currentHref="/speed-auto-clicker" />
    </div>
  )
}
