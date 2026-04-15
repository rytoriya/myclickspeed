import { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Free Auto Clicker for Android 2025 – No Root Required',
  description: 'Download the best free auto clicker apps for Android. No root required. Works with Roblox, idle games, and any app. Safe Play Store downloads.',
  alternates: { canonical: 'https://myclickspeed.com/auto-clicker/android' },
}

const androidClickers = [
  {
    name: 'Auto Clicker – Automatic Tap',
    badge: 'Most Downloaded',
    badgeColor: '#1D9E75',
    developer: 'Simple Design Ltd.',
    desc: 'The most popular Android auto clicker on the Play Store with millions of downloads. Supports multiple tap points, swipe automation, floating control panel, and timed sessions. No root access required.',
    pros: ['No root required', 'Multiple tap points', 'Floating control panel', 'Import/export scripts', 'Free to use'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.truedevelopersstudio.automatictap.autoclicker',
    downloadLabel: 'Download on Google Play',
  },
  {
    name: 'Auto Clicker: Auto Tapper App',
    badge: 'Best for Scripts',
    badgeColor: '#378ADD',
    developer: 'Auto Clicker Studio',
    desc: 'Record and replay complex tap sequences. Supports cloud sync for scripts, multi-point clicking, swipe routes, and no root access. Great for idle games and Roblox farming.',
    pros: ['Record & replay taps', 'Cloud script sync', 'Swipe support', 'No root', 'Android 7.0+'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=autoclicker.clicker.autoclickerapp.autoclickerforgames',
    downloadLabel: 'Download on Google Play',
  },
  {
    name: 'Smart AutoClicker (Open Source)',
    badge: 'Open Source',
    badgeColor: '#7F77DD',
    developer: 'Nain57 (GitHub)',
    desc: 'Advanced open-source Android auto clicker that uses image detection to trigger taps. Clicks when a specific image appears on screen - perfect for event-based game automation.',
    pros: ['Open source on GitHub', 'Image-based detection', 'No root', 'Privacy-focused', 'Free forever'],
    downloadUrl: 'https://github.com/Nain57/Smart-AutoClicker',
    downloadLabel: 'View on GitHub',
  },
  {
    name: 'Auto Clicker by Autoclicker.io',
    badge: 'Feature Rich',
    badgeColor: '#BA7517',
    developer: 'Autoclicker.io',
    desc: 'Cross-platform auto clicker available on Android, iOS, Mac and Windows. Anti-detection mode, floating panel, customizable click patterns, and reward system for free pro features.',
    pros: ['Anti-detection mode', 'Cross-platform', 'Floating panel', 'Customizable patterns', 'Free tier available'],
    downloadUrl: 'https://autoclicker.io/android/',
    downloadLabel: 'Download for Android',
  },
]

export default function AndroidAutoClickerPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/auto-clicker">Auto Clickers</a> › <span>Android Auto Clicker</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Best Free Auto Clicker for Android (2025)</h1>
        <p className="section-subtitle">No root required. All apps below are available on the Google Play Store or trusted open-source repositories.</p>
      </div>

      <div style={{ background: '#E6F1FB', border: '1px solid #85B7EB', borderRadius: 10, padding: '12px 16px', marginBottom: 24, fontSize: 14, color: '#0C447C' }}>
        ℹ️ All Android auto clickers require <strong>Accessibility Service</strong> permission to simulate taps. This is normal - it is how Android allows apps to automate screen interactions without root access.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
        {androidClickers.map(tool => (
          <div key={tool.name} className="tool-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>{tool.name}</h2>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: tool.badgeColor + '20', color: tool.badgeColor, fontWeight: 600 }}>{tool.badge}</span>
              </div>
              <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>by {tool.developer}</div>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: '0 0 10px' }}>{tool.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tool.pros.map(p => <span key={p} style={{ fontSize: 12, padding: '3px 10px', background: '#F4F6F8', borderRadius: 99, color: '#555' }}>✓ {p}</span>)}
              </div>
            </div>
            <div style={{ minWidth: 160 }}>
              <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: 12, padding: '10px 14px' }}>
                ↓ {tool.downloadLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>How to Set Up an Android Auto Clicker</h2>
        <p>After installing, open the app and follow the prompt to enable Accessibility Service in your Android settings. Go to Settings → Accessibility → find the auto clicker app and toggle it on. This permission is required for the app to simulate taps on other apps.</p>
        <p>Once enabled, open your target game or app, then switch back to the auto clicker to configure your tap points, interval, and repeat settings. Most apps have a floating button so you can start and stop tapping without leaving your game.</p>
      </div>

      <div className="content-section">
        <h2>Other Platforms</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[{ label: 'Mac Auto Clicker', href: '/auto-clicker/mac' }, { label: 'All Auto Clickers', href: '/auto-clicker' }, { label: 'Roblox Auto Clicker', href: '/roblox-auto-clicker' }].map(l => (
            <Link key={l.href} href={l.href} style={{ padding: '6px 14px', borderRadius: 99, background: '#E1F5EE', color: '#085041', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>{l.label}</Link>
          ))}
        </div>
      </div>
      <RelatedTools currentHref="/auto-clicker/android" />
    </div>
  )
}
