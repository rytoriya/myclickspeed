import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Wireless Trackball Mouse for Gaming & CPS 2025',
  description: 'Find the best wireless trackball mouse for gaming and CPS testing. Reviews of top trackball mice for high-precision clicking and ergonomic gaming.',
  alternates: { canonical: 'https://myclickspeed.com/best-wireless-trackball-mouse-for-gaming-cps' },
}

const mice = [
  { name: 'Logitech MX ERGO Plus', price: '~$100', badge: 'Best Overall', badgeColor: '#1D9E75', desc: 'The top-rated wireless trackball mouse. 20-degree adjustable tilt, precision sensor, and 4-month battery life. Connects to two devices simultaneously via Bluetooth or USB receiver.', url: 'https://www.amazon.com/s?k=Logitech+MX+ERGO+Plus' },
  { name: 'Kensington Expert Wireless Trackball', price: '~$80', badge: 'Best Scroll Ring', badgeColor: '#378ADD', desc: 'Unique 360-degree scroll ring around the ball. 5-button design with customizable buttons. Works with Windows and Mac. Ergonomic design reduces wrist strain.', url: 'https://www.amazon.com/s?k=Kensington+Expert+Wireless+Trackball' },
  { name: 'Logitech M575 ERGO', price: '~$50', badge: 'Best Budget', badgeColor: '#7F77DD', desc: 'The most affordable quality trackball. 24-month battery life, Bluetooth + USB, and a comfortable thumb-operated ball. Best entry-level option for trackball beginners.', url: 'https://www.amazon.com/s?k=Logitech+M575+ERGO' },
]

export default function TrackballMousePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Best Wireless Trackball Mouse</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Best Wireless Trackball Mouse for Gaming (2025)</h1>
        <p className="section-subtitle">Top trackball mice reviewed for precision, ergonomics, and gaming performance.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
        {mice.map(m => (
          <div key={m.name} className="tool-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{m.name}</h2>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: m.badgeColor + '20', color: m.badgeColor, fontWeight: 600 }}>{m.badge}</span>
                <span style={{ fontSize: 13, color: '#888' }}>{m.price}</span>
              </div>
              <p style={{ fontSize: 14, color: '#555', margin: 0, lineHeight: 1.7 }}>{m.desc}</p>
            </div>
            <a href={m.url} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ textDecoration: 'none', fontSize: 13 }}>Check Price ↗</a>
          </div>
        ))}
      </div>
      <div className="content-section">
        <h2>Are Trackball Mice Good for Gaming?</h2>
        <p>Trackball mice excel in precision tasks and ergonomics but are less common in competitive gaming. They are excellent for CPS testing since you move the ball independently of the mouse body - many users find they can achieve higher sustained CPS with a trackball because their wrist stays stable. For FPS gaming, the learning curve is steep but some players swear by them for the precision they offer once mastered.</p>
      </div>
      <RelatedTools currentHref="/best-wireless-trackball-mouse-for-gaming-cps" />
    </div>
  )
}
