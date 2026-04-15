import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Gaming Keyboards 2025 – Top Mechanical Keyboard Reviews',
  description: 'Reviews of the best gaming keyboards for 2025. Find the perfect mechanical keyboard for gaming, typing speed, and competitive play.',
  alternates: { canonical: 'https://myclickspeed.com/best-gaming-keyboards-review' },
}

const keyboards = [
  { name: 'SteelSeries Apex Pro', price: '~$180', badge: 'Best Overall', badgeColor: '#1D9E75', desc: 'Adjustable actuation OmniPoint switches (0.1–4mm). Per-key actuation customization lets you set different distances for gaming vs typing keys. OLED display, aluminum frame, magnetic wrist rest included.', url: 'https://www.amazon.com/s?k=SteelSeries+Apex+Pro' },
  { name: 'Logitech G Pro X TKL', price: '~$100', badge: 'Best for Esports', badgeColor: '#378ADD', desc: 'Swappable switch design - buy the keyboard once, try different switch types. Tenkeyless for more mousepad space. Used by professional esports players worldwide.', url: 'https://www.amazon.com/s?k=Logitech+G+Pro+X+TKL' },
  { name: 'Keychron Q1 Pro', price: '~$120', badge: 'Best Typing Feel', badgeColor: '#7F77DD', desc: 'Premium aluminium gasket-mount design. QMK/VIA compatible for full key remapping. Wireless Bluetooth + wired. Best typing feel at this price point - low wobble, satisfying sound.', url: 'https://www.amazon.com/s?k=Keychron+Q1+Pro' },
  { name: 'Razer BlackWidow V4 75%', price: '~$130', badge: 'Best Wireless', badgeColor: '#BA7517', desc: 'Compact 75% wireless gaming keyboard with Razer Orange tactile switches. Hot-swappable switches, RGB, 200-hour battery. Great balance of portability and gaming features.', url: 'https://www.amazon.com/s?k=Razer+BlackWidow+V4' },
]

export default function BestGamingKeyboardsPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Best Gaming Keyboards</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Best Gaming Keyboards 2025</h1>
        <p className="section-subtitle">Top mechanical keyboard picks for gaming, typing speed, and competitive play. Researched across price points.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
        {keyboards.map(kb => (
          <div key={kb.name} className="tool-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{kb.name}</h2>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: kb.badgeColor + '20', color: kb.badgeColor, fontWeight: 600 }}>{kb.badge}</span>
                <span style={{ fontSize: 13, color: '#888' }}>{kb.price}</span>
              </div>
              <p style={{ fontSize: 14, color: '#555', margin: 0, lineHeight: 1.7 }}>{kb.desc}</p>
            </div>
            <a href={kb.url} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ textDecoration: 'none', fontSize: 13 }}>Check Price ↗</a>
          </div>
        ))}
      </div>
      <div className="content-section">
        <h2>Which Switch Type is Best for Gaming?</h2>
        <p>Linear switches (Cherry MX Red, Gateron Yellow) are most popular for gaming - smooth, quiet, and fast actuation with no tactile bump to slow down key repeats. Tactile switches (Cherry MX Brown, Holy Pandas) are preferred by players who also type a lot, as the bump gives feedback without the noise of clicky switches. For typing speed tests specifically, any low-actuation linear switch will give the fastest results.</p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <a href="/keyboard-tester" style={{ padding: '10px 20px', background: '#E1F5EE', color: '#085041', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 500, display: 'inline-block' }}>
          → Test Your Keyboard Free
        </a>
      </div>
      <RelatedTools currentHref="/best-gaming-keyboards-review" />
    </div>
  )
}
