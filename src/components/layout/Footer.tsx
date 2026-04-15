import Link from 'next/link'

const footerLinks = {
  'CPS Tests': [
    { label: '1 Second Test', href: '/cps-test/1' },
    { label: '5 Second Test', href: '/cps-test/5' },
    { label: '10 Second Test', href: '/cps-test/10' },
    { label: '30 Second Test', href: '/cps-test/30' },
    { label: 'Jitter Click Test', href: '/cps-test/jitter' },
    { label: 'Kohi Click Test', href: '/cps-test/kohi' },
  ],
  'Mouse Tools': [
    { label: 'Mouse Tester', href: '/mouse-tester' },
    { label: 'Accuracy Test', href: '/mouse-accuracy-test' },
    { label: 'DPI Calculator', href: '/mouse-dpi-calculator' },
    { label: 'Aim Trainer', href: '/aim-trainer' },
    { label: 'Scroll Test', href: '/mouse-scroll-test' },
    { label: 'APM Test', href: '/apm-test' },
  ],
  'Keyboard': [
    { label: 'Keyboard Tester', href: '/keyboard-tester' },
    { label: 'Typing Speed Test', href: '/typing-speed-test' },
    { label: 'Spacebar Clicker', href: '/spacebar-clicker' },
    { label: 'Mechanical Tester', href: '/mechanical-keyboard-tester' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/term-conditions' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#ccc', marginTop: 60 }}>
      <style>{`
        .footer-link { color: #999; text-decoration: none; font-size: 13px; }
        .footer-link:hover { color: #1D9E75; }
        .footer-bottom-link { color: #666; text-decoration: none; font-size: 12px; }
        .footer-bottom-link:hover { color: #999; }
      `}</style>
      <div className="page-wrapper" style={{ padding: '48px 20px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1D9E75' }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>My Click Speed</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#999', maxWidth: 220 }}>
              Free professional CPS testers, mouse diagnostics, and gaming tools trusted by gamers worldwide.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.href} style={{ marginBottom: 6 }}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #2a2a3e', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#666', margin: 0 }}>
            © {new Date().getFullYear()} My Click Speed. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[{label:'Privacy',href:'/privacy-policy'},{label:'Terms',href:'/term-conditions'},{label:'Contact',href:'/contact-us'}].map(l => (
              <Link key={l.href} href={l.href} className="footer-bottom-link">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
