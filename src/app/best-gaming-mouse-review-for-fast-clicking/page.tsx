import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Gaming Mouse for Fast Clicking 2025 – Top Picks',
  description: 'Find the best gaming mouse for fast clicking, drag clicking, and high CPS. Expert picks for every budget including Logitech, Razer, and ROCCAT.',
  alternates: { canonical: 'https://myclickspeed.com/best-gaming-mouse-review-for-fast-clicking' },
}

const mice = [
  {
    name: 'Logitech G PRO X2 SUPERSTRIKE',
    price: '~$160',
    badge: 'Best Overall',
    badgeColor: '#1D9E75',
    rating: 5,
    desc: 'The best gaming mouse tested by RTINGS.com. Features LIGHTFORCE hybrid switches that allow incredibly fast clicking with no pre-travel and ultra-low latency. 60g ultra-lightweight design. 2.4GHz wireless with near-zero latency.',
    pros: ['LIGHTFORCE hybrid switches', 'Ultra-light 60g', 'Best-in-class sensor', 'Wireless with no lag'],
    url: 'https://www.amazon.com/s?k=Logitech+G+PRO+X2+SUPERSTRIKE',
  },
  {
    name: 'Logitech G502 HERO',
    price: '~$40–60',
    badge: 'Best Value',
    badgeColor: '#378ADD',
    rating: 5,
    desc: 'The most recommended mouse for drag clicking. Durable Omron switches, adjustable weight system, and grippy surface texture help achieve consistent high CPS. 11 programmable buttons and onboard memory.',
    pros: ['Great for drag clicking', 'Adjustable weights', '11 programmable buttons', 'Proven durability'],
    url: 'https://www.amazon.com/s?k=Logitech+G502+HERO',
  },
  {
    name: 'ROCCAT Kone AIMO Remastered',
    price: '~$60',
    badge: 'Best for Drag Clicking',
    badgeColor: '#7F77DD',
    desc: 'Large shell for excellent control during drag clicking. Grippy surface registers up to 60 CPS with drag clicking technique. 16,000 DPI Owl-Eye sensor with 1 DPI increments. Highly durable switches.',
    pros: ['60+ CPS drag clicking', 'Grippy textured surface', 'Durable switches', 'Precise 16K DPI sensor'],
    url: 'https://www.amazon.com/s?k=ROCCAT+Kone+AIMO',
  },
  {
    name: 'Razer DeathAdder V3 Pro',
    price: '~$130',
    badge: 'Best Wireless',
    badgeColor: '#BA7517',
    desc: 'Ultra-light 63g wireless mouse with Razer Focus Pro 30K optical sensor. Co-manufactured Omron switches rated for 90 million clicks. Ergonomic right-handed shape perfect for claw and fingertip grips.',
    pros: ['63g ultra lightweight', '90M click switches', '2.4GHz + HyperPolling', 'Ergonomic for all grips'],
    url: 'https://www.amazon.com/s?k=Razer+DeathAdder+V3+Pro',
  },
]

function Stars({ n }: { n: number }) {
  return <span style={{ color: '#FFAA00', fontSize: 14 }}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

export default function BestGamingMousePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Best Gaming Mouse for Fast Clicking</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Best Gaming Mouse for Fast Clicking (2025)</h1>
        <p className="section-subtitle">Tested picks for CPS testing, drag clicking, and competitive gaming. Every mouse below has been researched for switch quality, durability, and click performance.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
        {mice.map(mouse => (
          <div key={mouse.name} className="tool-card">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>{mouse.name}</h2>
                  <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: mouse.badgeColor + '20', color: mouse.badgeColor, fontWeight: 600 }}>{mouse.badge}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Stars n={mouse.rating ?? 5} />
                  <span style={{ fontSize: 13, color: '#888' }}>{mouse.price}</span>
                </div>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: '0 0 10px' }}>{mouse.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {mouse.pros.map(p => <span key={p} style={{ fontSize: 12, padding: '3px 10px', background: '#F4F6F8', borderRadius: 99, color: '#555' }}>✓ {p}</span>)}
                </div>
              </div>
              <a href={mouse.url} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ textDecoration: 'none', whiteSpace: 'nowrap', fontSize: 13 }}>
                Check Price ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>What Makes a Mouse Good for Fast Clicking?</h2>
        <p>Drag clicking performs best on mice with low debounce, textured surfaces, and firm switches. The switch type is the most important factor - optical switches like Logitech&apos;s LIGHTFORCE register at the speed of light with no physical contact, while durable mechanical switches from Omron or Huano handle millions of clicks before wearing out.</p>
        <p>Weight also matters - lighter mice (under 70g) reduce fatigue during long gaming sessions and allow faster micro-adjustments. A mouse with 1000Hz polling rate ensures every click registers without delay.</p>
      </div>

      <div className="content-section">
        <h2>Test Your Current Mouse</h2>
        <p>Before buying a new mouse, test how your current one performs with our free tools.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {[{l:'CPS Test',h:'/cps-test/5'},{l:'Mouse Tester',h:'/mouse-tester'},{l:'Double Click Test',h:'/mouse-double-click-test'},{l:'Mouse Accuracy',h:'/mouse-accuracy-test'}].map(b => (
            <a key={b.h} href={b.h} style={{ padding: '7px 14px', borderRadius: 99, background: '#E1F5EE', color: '#085041', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>{b.l}</a>
          ))}
        </div>
      </div>
      <RelatedTools currentHref="/best-gaming-mouse-review-for-fast-clicking" />
    </div>
  )
}
