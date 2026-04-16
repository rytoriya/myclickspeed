import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Tools – Free Online Utilities | My Click Speed',
  description: 'Free online tools including webcam mirror and more utilities. All tools run in your browser with no download required.',
  alternates: { canonical: 'https://myclickspeed.com/other-tools' },
}

const tools = [
  {
    icon: '🪞',
    name: 'Online Mirror',
    desc: 'Use your webcam as a free online mirror. Flip horizontally, go fullscreen, and switch cameras.',
    href: '/online-mirror',
    badge: 'New',
  },
  {
    icon: '🔢',
    name: 'Tally Counter',
    desc: 'Simple online tally counter. Click to count, set custom step sizes, and undo mistakes.',
    href: '/tally-counter',
    badge: null,
  },
  {
    icon: '🦕',
    name: 'T-Rex Dino Game',
    desc: 'Play the classic Chrome offline dinosaur game for free online. Jump over cacti and beat your high score.',
    href: '/t-rex-dino-game',
    badge: null,
  },
  {
    icon: '🎯',
    name: 'Pixel Circle Generator',
    desc: 'Generate pixel-perfect circles for Minecraft, pixel art, and grid-based games.',
    href: '/pixel-circle-generator',
    badge: null,
  },
]

export default function OtherToolsPage() {
  return (
    <div className="page-wrapper">
      <style>{`
        .other-tool-card { 
          background: #fff; 
          border: 1px solid #E2E8F0; 
          border-radius: 12px; 
          padding: 20px; 
          text-decoration: none; 
          display: block; 
          transition: border-color 0.15s, transform 0.1s; 
        }
        .other-tool-card:hover { 
          border-color: #1D9E75; 
          transform: translateY(-2px); 
        }
      `}</style>

      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Other Tools</h1>
        <p className="section-subtitle">Free online utilities that run directly in your browser. No download required.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
        {tools.map(tool => (
          <Link key={tool.href} href={tool.href} className="other-tool-card">
            <div style={{ fontSize: 32, marginBottom: 12 }}>{tool.icon}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>{tool.name}</span>
              {tool.badge && (
                <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 99, background: '#E1F5EE', color: '#085041', fontWeight: 600 }}>
                  {tool.badge}
                </span>
              )}
            </div>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>{tool.desc}</p>
          </Link>
        ))}
      </div>

      <div className="content-section">
        <h2>More Tools Coming Soon</h2>
        <p>We are constantly adding new free online tools to My Click Speed. Check back regularly for new utilities including reaction time testers, screen rulers, color pickers, and more gaming and productivity tools.</p>
      </div>
    </div>
  )
}