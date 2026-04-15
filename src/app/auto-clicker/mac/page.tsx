import { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Free Auto Clicker for Mac 2025 – Top 5 Picks',
  description: 'Download the best free auto clicker for Mac. Tested and safe options for macOS including Intel and Apple Silicon M1/M2/M3 Macs. No malware.',
  alternates: { canonical: 'https://myclickspeed.com/auto-clicker/mac' },
}

const macClickers = [
  {
    name: 'MurGaa Auto Clicker',
    badge: 'Best Overall',
    badgeColor: '#1D9E75',
    desc: 'The most established choice for Mac users. Supports both Intel and Apple Silicon (M1/M2/M3). Two independent clickers, millisecond timing control, hotkey start/stop, and cursor or random-area targeting.',
    pros: ['Intel + Apple Silicon support', 'Two independent clickers', 'Millisecond precision', 'Hotkey support', 'Try before buy'],
    price: 'Free trial · $6.54 to unlock',
    downloadUrl: 'https://www.murgaa.com/auto-clicker-mac/',
    downloadLabel: 'Download MurGaa Auto Clicker',
  },
  {
    name: 'Free Auto Clicker for Mac (SourceForge)',
    badge: 'Completely Free',
    badgeColor: '#378ADD',
    desc: 'Open-source auto clicker for macOS. Works on all Mac OS X versions. Supports infinite clicks, configurable intervals, and hotkeys. Completely free with no trial limitations.',
    pros: ['100% free & open source', 'All macOS versions', 'Infinite click mode', 'No registration needed'],
    price: 'Free',
    downloadUrl: 'https://sourceforge.net/projects/mac-autoclick-master/',
    downloadLabel: 'Download Free (SourceForge)',
  },
  {
    name: 'Autoclicker.io for Mac',
    badge: 'Feature Rich',
    badgeColor: '#7F77DD',
    desc: 'Cross-platform auto clicker available for Mac, Windows, Android and iPhone. Record and save click sequences, dark mode support, and background hotkey operation.',
    pros: ['Cross-platform', 'Record & replay clicks', 'Dark mode', 'Background hotkeys'],
    price: 'Free · Premium available',
    downloadUrl: 'https://autoclicker.io/auto-clicker-mac/',
    downloadLabel: 'Download for Mac',
  },
  {
    name: 'Autoclick by inket (GitHub)',
    badge: 'Open Source',
    badgeColor: '#BA7517',
    desc: 'Simple, lightweight open-source Mac app for simulating mouse clicks. Available directly from GitHub. No bloatware, no tracking, just clean mouse automation.',
    pros: ['Open source on GitHub', 'Lightweight & fast', 'No bloatware', 'Free forever'],
    price: 'Free',
    downloadUrl: 'https://github.com/inket/autoclick',
    downloadLabel: 'View on GitHub',
  },
]

export default function MacAutoClickerPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/auto-clicker">Auto Clickers</a> › <span>Mac Auto Clicker</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Best Free Auto Clicker for Mac (2025)</h1>
        <p className="section-subtitle">Tested and verified auto clickers for macOS. All options below work on modern Macs including Apple Silicon (M1/M2/M3) and Intel models.</p>
      </div>

      <div style={{ background: '#FAEEDA', border: '1px solid #EF9F27', borderRadius: 10, padding: '12px 16px', marginBottom: 24, fontSize: 14, color: '#633806' }}>
        ⚠️ macOS requires you to grant Accessibility permissions for auto clickers to work. Go to System Settings → Privacy & Security → Accessibility and enable the app after downloading.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
        {macClickers.map((tool) => (
          <div key={tool.name} className="tool-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{tool.name}</h2>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: tool.badgeColor + '20', color: tool.badgeColor, fontWeight: 600 }}>{tool.badge}</span>
                <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 99, background: '#E1F5EE', color: '#0F6E56' }}>🍎 macOS</span>
              </div>
              <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>{tool.price}</div>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: '0 0 12px' }}>{tool.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tool.pros.map(p => (
                  <span key={p} style={{ fontSize: 12, padding: '3px 10px', background: '#F4F6F8', borderRadius: 99, color: '#555' }}>✓ {p}</span>
                ))}
              </div>
            </div>
            <div style={{ minWidth: 160 }}>
              <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', whiteSpace: 'nowrap', fontSize: 13 }}>
                ↓ {tool.downloadLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>How to Use an Auto Clicker on Mac</h2>
        <p>After downloading, open the app and right-click → Open (macOS Gatekeeper may block it on first launch if it&apos;s not from the App Store). Go to System Settings → Privacy & Security → Accessibility and toggle on the auto clicker app. Without this permission, the app cannot simulate clicks.</p>
        <p>Set your click interval (how fast to click), choose left or right button, and set a hotkey to start and stop. Move your cursor to the target position and press the hotkey - the auto clicker will click continuously until you press the stop hotkey.</p>
      </div>

      <div className="content-section">
        <h2>Other Auto Clicker Platforms</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { label: 'Android Auto Clicker', href: '/auto-clicker/android' },
            { label: 'All Auto Clickers', href: '/auto-clicker' },
            { label: 'Roblox Auto Clicker', href: '/roblox-auto-clicker' },
            { label: 'Auto Key Presser', href: '/auto-key-presser' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ padding: '6px 14px', borderRadius: 99, background: '#E1F5EE', color: '#085041', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <RelatedTools currentHref="/auto-clicker/mac" />
    </div>
  )
}
