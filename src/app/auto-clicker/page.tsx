import { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Free Auto Clickers 2025 – Windows, Mac, Android & More',
  description: 'Download the best free auto clickers for Windows, Mac, Android, iOS and Chromebook. Safe, trusted auto clicker tools for gaming and productivity.',
  alternates: { canonical: 'https://myclickspeed.com/auto-clicker' },
}

const autoClickers = [
  {
    name: 'OP Auto Clicker',
    platform: 'Windows',
    badge: 'Most Popular',
    badgeColor: '#1D9E75',
    desc: 'The gold standard for Windows. Open-source, portable (no install needed), zero ads. Supports fixed and dynamic click locations, left/right buttons, and custom hotkeys.',
    pros: ['Open source & transparent', 'No installation required', 'Zero ads or bloatware', 'Hotkey support'],
    downloadUrl: 'https://www.opautoclicker.com/',
    downloadLabel: 'Download OP Auto Clicker',
    free: true,
  },
  {
    name: 'GS Auto Clicker',
    platform: 'Windows',
    badge: 'Best for Recording',
    badgeColor: '#378ADD',
    desc: 'Record sequences of clicks across multiple screen locations and replay them on a loop. Great for complex gaming macros or multi-step form automation.',
    pros: ['Record & playback feature', 'Multi-point clicking', 'Customizable intervals', 'Lightweight'],
    downloadUrl: 'https://gs-auto-clicker.en.softonic.com/',
    downloadLabel: 'Download GS Auto Clicker',
    free: true,
  },
  {
    name: 'Auto Clicker by Autoclicker.io',
    platform: 'Windows / Mac / Android',
    badge: 'Cross Platform',
    badgeColor: '#7F77DD',
    desc: 'Available for Windows, Mac, Android and iPhone. Feature-rich with customizable click patterns, adjustable speeds, and hotkey controls.',
    pros: ['Multi-platform support', 'Record & save actions', 'Fast & virus-free', 'Custom click patterns'],
    downloadUrl: 'https://autoclicker.io/',
    downloadLabel: 'Download Free',
    free: true,
  },
  {
    name: 'AutoClicker.com',
    platform: 'Windows',
    badge: 'Advanced Mode',
    badgeColor: '#BA7517',
    desc: 'Includes a simple mode for quick start and an advanced mode with click & scroll actions, repeat blocks, image/color detection, and macro recording.',
    pros: ['Simple + advanced modes', 'Image detection clicks', 'Macro recording', 'No setup required'],
    downloadUrl: 'https://autoclicker.com/',
    downloadLabel: 'Download Free',
    free: true,
  },
]

const platformLinks = [
  { label: 'Mac Auto Clicker', href: '/auto-clicker/mac', icon: '🍎', desc: 'Best auto clickers for macOS' },
  { label: 'Android Auto Clicker', href: '/auto-clicker/android', icon: '🤖', desc: 'No root required options' },
  { label: 'Roblox Auto Clicker', href: '/roblox-auto-clicker', icon: '🎮', desc: 'Safe for Roblox farming' },
  { label: 'Auto Key Presser', href: '/auto-key-presser', icon: '⌨️', desc: 'Automate keyboard inputs' },
  { label: 'Speed Auto Clicker', href: '/speed-auto-clicker', icon: '⚡', desc: 'Ultra-fast clicking' },
  { label: 'Macro Recorders', href: '/best-macro-recorders', icon: '🎬', desc: 'Record & replay sequences' },
]

export default function AutoClickerPage() {
  return (
    <>
      <div className="page-wrapper">
        <nav className="breadcrumb"><a href="/">Home</a> › <span>Auto Clickers</span></nav>

        <div style={{ padding: '24px 0 8px' }}>
          <h1 className="section-title">Best Free Auto Clickers (2025)</h1>
          <p className="section-subtitle">
            Download safe, trusted auto clicker tools for Windows, Mac, Android and more. All tools below are verified free and malware-free.
          </p>
        </div>

        {/* Platform quick links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10, marginBottom: 32 }}>
          {platformLinks.map(pl => (
            <Link key={pl.href} href={pl.href} style={{
              background: '#fff',
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              padding: '14px',
              textDecoration: 'none',
              display: 'block',
            }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{pl.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>{pl.label}</div>
              <div style={{ fontSize: 11, color: '#888' }}>{pl.desc}</div>
            </Link>
          ))}
        </div>

        {/* Auto clicker cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          {autoClickers.map((ac) => (
            <div key={ac.name} className="tool-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{ac.name}</h2>
                  <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: ac.badgeColor + '20', color: ac.badgeColor, fontWeight: 600 }}>
                    {ac.badge}
                  </span>
                  <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 99, background: '#E1F5EE', color: '#0F6E56' }}>
                    Free
                  </span>
                </div>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>Platform: {ac.platform}</div>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: '0 0 12px' }}>{ac.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ac.pros.map(p => (
                    <span key={p} style={{ fontSize: 12, padding: '3px 10px', background: '#F4F6F8', borderRadius: 99, color: '#555' }}>
                      ✓ {p}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ minWidth: 160 }}>
                <a
                  href={ac.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal"
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none', whiteSpace: 'nowrap' }}
                >
                  ↓ {ac.downloadLabel}
                </a>
                <div style={{ fontSize: 11, color: '#888', textAlign: 'center', marginTop: 6 }}>
                  Official website ↗
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety tips */}
        <div className="content-section">
          <h2>Auto Clicker Safety Tips</h2>
          <p>
            Always download auto clickers from the official developer website or a trusted platform like GitHub or SourceForge.
            Avoid third-party download sites, torrent links, or forum posts — these frequently bundle malware or adware with the installer.
          </p>
          <p>
            Many legitimate auto clickers trigger antivirus warnings because they use the same system APIs as malware to simulate mouse input.
            This is a false positive in most cases for the tools listed above. You can verify by scanning with{' '}
            <a href="https://www.virustotal.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1D9E75' }}>VirusTotal</a> before running.
          </p>
          <p>
            Note that using auto clickers in online games may violate the game&apos;s terms of service and result in a ban.
            Always check the rules of the specific game before using automation tools.
          </p>
        </div>

        <RelatedTools currentHref="/auto-clicker" />
      </div>
    </>
  )
}
