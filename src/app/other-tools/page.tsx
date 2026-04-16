import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Tools - Free Online Utilities | My Click Speed',
  description: 'Free online tools including webcam mirror, and more utilities coming soon. All tools run in your browser with no download required.',
  alternates: { canonical: 'https://myclickspeed.com/other-tools' },
  openGraph: {
    title: 'Other Tools - Free Online Utilities | My Click Speed',
    description: 'Free online tools including webcam mirror, and more utilities coming soon. No download required.',
    url: 'https://myclickspeed.com/other-tools',
  },
}

const tools = [
  {
    icon: '🪞',
    name: 'Online Mirror',
    desc: 'Use your webcam as a free online mirror. Flip horizontally, go fullscreen, and switch cameras.',
    href: '/online-mirror',
    badge: 'New',
  },
]

export default function OtherToolsPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> › <span>Other Tools</span>
      </nav>

      <div style={{ padding: '24px 0 16px' }}>
        <h1 className="section-title">Other Tools</h1>
        <p className="section-subtitle">
          Free browser-based utilities that do not fit neatly into one category. No download, no account, no cost.
        </p>
      </div>

      {/* Tools grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 48 }}>
        {tools.map(tool => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              background: '#fff',
              border: '1px solid #E2E8F0',
              borderRadius: 14,
              padding: 24,
              textDecoration: 'none',
              display: 'block',
              transition: 'border-color 0.15s, transform 0.1s',
              position: 'relative',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#1D9E75'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#E2E8F0'
              el.style.transform = 'translateY(0)'
            }}
          >
            {tool.badge && (
              <span style={{
                position: 'absolute',
                top: 14,
                right: 14,
                background: '#E1F5EE',
                color: '#1D9E75',
                fontSize: 11,
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 99,
              }}>
                {tool.badge}
              </span>
            )}
            <div style={{ fontSize: 32, marginBottom: 12 }}>{tool.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>{tool.name}</div>
            <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{tool.desc}</div>
          </Link>
        ))}

        {/* Placeholder coming soon card */}
        <div style={{
          background: '#F8FAFB',
          border: '1px dashed #D0D7DE',
          borderRadius: 14,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 140,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 28, marginBottom: 8, opacity: 0.4 }}>+</div>
          <div style={{ fontSize: 13, color: '#999' }}>More tools coming soon</div>
        </div>
      </div>

      {/* Internal links section */}
      <div className="content-section">
        <h2>Looking for More Tools?</h2>
        <p>
          My Click Speed has a full suite of gaming and productivity tools organized by category. Test your clicking speed with the <Link href="/cps-test/5" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>CPS tester</Link>, diagnose your mouse with the <Link href="/mouse-tester" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>mouse tester</Link>, or check your <Link href="/typing-speed-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>typing speed</Link>. All tools are free and run entirely in your browser.
        </p>
        <p>
          Explore the <Link href="/keyboard-tester" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>keyboard tester</Link> to verify every key registers correctly, use the <Link href="/aim-trainer" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>aim trainer</Link> to sharpen your mouse accuracy, or try the <Link href="/online-mirror" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>online mirror</Link> to use your webcam as a quick mirror from any device.
        </p>
      </div>
    </div>
  )
}
