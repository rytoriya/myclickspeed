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

        {/* Why Use */}
        <div className="content-section">
          <h2>Why Use My Click Speed?</h2>
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

        {/* What is a CPS Test */}
        <div className="content-section">
          <h2>What is a CPS Test?</h2>
          <p>
            A CPS (Clicks Per Second) test measures how many times you can click your mouse button within a set time period.
            It&apos;s one of the most widely used benchmarks in competitive gaming — particularly in Minecraft PvP, where raw clicking speed
            directly determines your hit rate in combat.
          </p>
          <p>
            My Click Speed offers CPS tests from 1 second up to 100 seconds, letting you measure both peak burst speed and sustained
            clicking endurance. Alongside CPS tests, the site includes mouse accuracy tests, keyboard testers, aim trainers, and a
            full suite of gaming utilities — all free, all browser-based.
          </p>
          <p>
            Whether you&apos;re a casual gamer curious about your baseline or a competitive player grinding toward a higher CPS,
            these tools give you precise, real-time feedback so you know exactly where you stand and what to work on.
          </p>
        </div>

        {/* CPS Score Guide */}
        <div className="content-section">
          <h2>CPS Score Benchmarks — Where Do You Rank?</h2>
          <p>
            Not sure if your score is good? Here&apos;s how the community ranks CPS performance in a standard 5-second test:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginTop: 16 }}>
            {[
              { range: '1 – 4 CPS', label: 'Beginner', color: '#FEF3C7', accent: '#D97706', note: 'Normal everyday clicking speed.' },
              { range: '5 – 7 CPS', label: 'Average', color: '#DBEAFE', accent: '#2563EB', note: 'Typical for most casual gamers.' },
              { range: '8 – 10 CPS', label: 'Good', color: '#D1FAE5', accent: '#059669', note: 'Competitive level for most games.' },
              { range: '11 – 13 CPS', label: 'Pro', color: '#E1F5EE', accent: '#1D9E75', note: 'Requires regular practice and technique.' },
              { range: '14+ CPS', label: 'Elite', color: '#F3E8FF', accent: '#7C3AED', note: 'Top-tier — often involves jitter or butterfly clicking.' },
            ].map(tier => (
              <div key={tier.label} style={{ background: tier.color, border: `1.5px solid ${tier.accent}30`, borderRadius: 12, padding: '16px 14px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: tier.accent, marginBottom: 4 }}>{tier.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#1a1a1a', marginBottom: 6 }}>{tier.range}</div>
                <div style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>{tier.note}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16 }}>
            These ranges are based on standard left-click tests. Techniques like butterfly clicking and drag clicking can push scores
            significantly higher, though some game servers disallow these methods.
          </p>
        </div>

        {/* Clicking Techniques */}
        <div className="content-section">
          <h2>Popular Clicking Techniques Explained</h2>
          <p>
            There are several clicking techniques used by gamers to maximise their CPS. Each has different trade-offs in speed,
            consistency, and physical strain.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 16 }}>
            {[
              {
                title: 'Regular Clicking',
                href: '/cps-test/5',
                desc: 'Standard one-finger clicking. Reliable and consistent. Most players hover between 5–9 CPS with this method. The baseline for all clicking tests.',
              },
              {
                title: 'Jitter Clicking',
                href: '/cps-test/jitter',
                desc: 'Tensing your arm and wrist to produce rapid involuntary muscle vibrations. Can reach 12–14 CPS but puts strain on the wrist — use sparingly.',
              },
              {
                title: 'Butterfly Clicking',
                href: '/cps-test/butterfly',
                desc: 'Two fingers alternating rapidly on one mouse button. Commonly achieves 15–25 CPS. Banned on some game servers due to the high click rate it produces.',
              },
              {
                title: 'Drag Clicking',
                href: '/cps-test/5',
                desc: 'Dragging a finger across the mouse button to register multiple clicks in one motion. Highly dependent on mouse surface and button design.',
              },
            ].map(t => (
              <div key={t.title} style={{ background: '#F8FAFB', border: '1px solid #E2E8F0', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                  <Link href={t.href} style={{ color: '#1D9E75', textDecoration: 'none' }}>{t.title}</Link>
                </div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="content-section">
          <h2>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                q: 'What is a good CPS score?',
                a: 'A CPS of 6–8 is considered good for casual gaming. Competitive players typically aim for 8–12 CPS. Anything above 12 is exceptional and usually requires a specific clicking technique.',
              },
              {
                q: 'Does a higher CPS make you better at gaming?',
                a: 'In games like Minecraft PvP, a higher CPS gives you more hits per second which is a direct advantage. In FPS games, accuracy matters more than raw speed — but a fast click reaction still helps. Use the Aim Trainer and Mouse Accuracy Test to work on both.',
              },
              {
                q: 'How do I improve my CPS?',
                a: 'Practice regularly with short, focused sessions using the CPS test. A gaming mouse with low actuation force makes clicking easier. Experiment with jitter or butterfly clicking if you want to push your score higher. Make sure your mouse polling rate is set to 1000 Hz.',
              },
              {
                q: 'Is jitter clicking bad for your wrist?',
                a: 'Prolonged jitter clicking can cause wrist strain or repetitive stress injury. Take regular breaks and stop if you feel any pain or discomfort. Regular clicking is far gentler on your hand and still delivers solid CPS.',
              },
              {
                q: 'Do I need to install anything to use these tools?',
                a: 'No. Every tool on My Click Speed runs entirely in your browser. There is nothing to download or install, and all tools are completely free.',
              },
              {
                q: 'What devices are supported?',
                a: 'All tools work on desktop and laptop computers. The CPS test and keyboard tools are designed for mouse and keyboard use. Mobile support varies by tool — mouse and keyboard tests naturally require physical hardware.',
              },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: i < 5 ? '1px solid #F0F0F0' : 'none', paddingBottom: i < 5 ? 20 : 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>{item.q}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.75 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
