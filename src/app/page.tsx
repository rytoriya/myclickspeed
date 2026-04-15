import { Metadata } from 'next'
import Link from 'next/link'
import ToolCategoryGrid from '@/components/tools/ToolCategoryGrid'

export const metadata: Metadata = {
  title: 'My Click Speed – Free CPS Test, Mouse & Keyboard Tools',
  description: 'Free online CPS tester, mouse accuracy test, keyboard tester, aim trainer and more. Professional gaming tools trusted by thousands of gamers. No download required.',
  alternates: { canonical: 'https://myclickspeed.com' },
  openGraph: {
    title: 'My Click Speed – Free CPS Test & Gaming Tools',
    description: 'Free online CPS tester, mouse accuracy test, keyboard tester, aim trainer and more.',
    url: 'https://myclickspeed.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My Click Speed',
  url: 'https://myclickspeed.com',
  description: 'Free online CPS test, mouse tools, keyboard testers and gaming utilities.',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: 'linear-gradient(135deg, #0F6E56 0%, #1D9E75 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: 99, padding: '4px 16px', fontSize: 13, color: '#fff', marginBottom: 16 }}>
            100% Free · No Download Required
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 16px' }}>
            Test Your Click Speed<br />Like a Pro
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginBottom: 28, lineHeight: 1.6 }}>
            Professional CPS testers, mouse diagnostics, and keyboard tools — built for gamers who want the edge.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/cps-test/5" style={{ background: '#fff', color: '#0F6E56', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Start CPS Test
            </Link>
            <Link href="/mouse-tester" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.3)' }}>
              Mouse Tools
            </Link>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '14px 20px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: 8, maxWidth: 1100, margin: '0 auto', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#888', marginRight: 4, whiteSpace: 'nowrap' }}>Quick CPS:</span>
          {[1, 2, 5, 10, 15, 20, 30, 60, 100].map(s => (
            <Link key={s} href={`/cps-test/${s}`} style={{ fontSize: 13, color: '#1D9E75', textDecoration: 'none', padding: '3px 10px', borderRadius: 99, border: '1px solid #E1F5EE', background: '#E1F5EE', whiteSpace: 'nowrap' }}>
              {s}s
            </Link>
          ))}
        </div>
      </div>

      <div className="page-wrapper" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <ToolCategoryGrid />
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16, padding: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Why Use My Click Speed?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { icon: '⚡', title: '100% Free', desc: 'Every tool is completely free with no hidden charges or paywalls.' },
              { icon: '🌐', title: 'No Download', desc: 'All tools run directly in your browser — nothing to install.' },
              { icon: '🎮', title: 'Built for Gamers', desc: 'Precision-tested tools designed to give you a competitive edge.' },
              { icon: '📱', title: 'Works Everywhere', desc: 'Fully responsive — works on desktop, tablet, and mobile.' },
            ].map(f => (
              <div key={f.title}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
