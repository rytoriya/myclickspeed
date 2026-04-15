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
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16, padding: 32, marginBottom: 32 }}>
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

        {/* SEO Content Section */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16, padding: '40px 36px', lineHeight: 1.8, color: '#333' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, color: '#111' }}>
            The Ultimate Free CPS Test &amp; Gaming Tools Hub
          </h2>
          <p style={{ fontSize: 15, marginBottom: 20 }}>
            Welcome to <strong>My Click Speed</strong> — your one-stop destination for free online click speed tests, mouse diagnostics, keyboard testers, typing speed tools, and much more. Whether you are a competitive gamer trying to max out your clicks per second, a casual player curious about your mouse performance, or a typist benchmarking your words per minute, we have every tool you need — all running directly in your browser with zero downloads required.
          </p>

          <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: '#111' }}>What Is a CPS Test?</h3>
          <p style={{ fontSize: 15, marginBottom: 20 }}>
            A <strong>CPS test</strong> (Clicks Per Second test) measures how many times you can click your mouse within a set time interval. Our tests range from a quick <Link href="/cps-test/1" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>1-second CPS test</Link> to a challenging <Link href="/cps-test/60" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>60-second endurance test</Link>. The average person clicks at around 6–8 CPS, while skilled gamers using techniques like <strong>jitter clicking</strong> or <strong>butterfly clicking</strong> can regularly exceed 14–20 CPS. Our tools support all major clicking styles so you can find your true peak speed and track improvement over time.
          </p>

          <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: '#111' }}>Mouse Tools for Every Gamer</h3>
          <p style={{ fontSize: 15, marginBottom: 20 }}>
            A fast click rate means nothing without a properly calibrated mouse. That is why we offer a full suite of <strong>mouse testing tools</strong>. Use our <Link href="/mouse-accuracy-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Accuracy Test</Link> to sharpen your aim, the <Link href="/mouse-dpi-calculator" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>DPI Calculator</Link> to find your perfect sensitivity, and the <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Polling Rate Checker</Link> to verify your mouse is reporting at its rated Hz. For troubleshooting, the <Link href="/mouse-drift-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Drift Test</Link> quickly identifies hardware drift before it costs you a ranked match.
          </p>

          <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: '#111' }}>Keyboard &amp; Typing Speed Tests</h3>
          <p style={{ fontSize: 15, marginBottom: 20 }}>
            Your keyboard is just as important as your mouse. Our <Link href="/keyboard-tester" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Keyboard Tester</Link> visually confirms every key registers correctly — essential after installing a new mechanical switch or remapping a layout. Want to know how fast you type? The <Link href="/typing-speed-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Typing Speed Test</Link> calculates your WPM and accuracy in real time, while the <Link href="/1-minute-typing-speed-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>1-Minute Typing Test</Link> gives you a standardised benchmark you can compare against global averages.
          </p>

          <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: '#111' }}>Aim Training &amp; APM Tools</h3>
          <p style={{ fontSize: 15, marginBottom: 20 }}>
            Reaction time and precision separate good players from great ones. Our browser-based <Link href="/aim-trainer" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Aim Trainer</Link> lets you warm up before jumping into competitive matches, while the <Link href="/apm-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>APM Test</Link> measures your Actions Per Minute — a key metric in strategy and RTS games. You can also use the <Link href="/mouse-sensitivity-converter" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Mouse Sensitivity Converter</Link> to carry your preferred sensitivity across different games without losing muscle memory.
          </p>

          <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: '#111' }}>Minecraft &amp; Specialty Tools</h3>
          <p style={{ fontSize: 15, marginBottom: 20 }}>
            Beyond performance testing, My Click Speed offers a growing library of creator tools. Minecraft players can generate custom <Link href="/minecraft-color-codes" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Color Codes</Link>, design 3D sphere schematics with the <Link href="/minecraft-sphere-generator" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Sphere Generator</Link>, and craft commands with the <Link href="/minecraft-command-generator" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Command Generator</Link>. We also provide tools like the <Link href="/tally-counter" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Tally Counter</Link>, <Link href="/fps-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>FPS Test</Link>, and <Link href="/refresh-rate-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Refresh Rate Test</Link> — utilities that any PC gamer will find immediately useful.
          </p>

          <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: '#111' }}>Start Testing — It Only Takes Seconds</h3>
          <p style={{ fontSize: 15, marginBottom: 0 }}>
            Every tool on My Click Speed is free, instant, and built with accuracy in mind. No account sign-ups, no ads interrupting your test, and no software to install. Simply pick a tool above and start in seconds. Whether you are chasing a personal best click speed or diagnosing a faulty mouse button, My Click Speed gives you the data you need to play — and perform — at your best.
          </p>
        </div>
      </div>
    </>
  )
}
