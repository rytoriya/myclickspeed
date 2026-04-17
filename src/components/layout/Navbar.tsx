'use client'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  {
    label: 'CPS Test',
    href: '/cps-test/5',
    children: [
      { label: '1 Second', href: '/cps-test/1' },
      { label: '5 Seconds', href: '/cps-test/5' },
      { label: '10 Seconds', href: '/cps-test/10' },
      { label: '30 Seconds', href: '/cps-test/30' },
      { label: '60 Seconds', href: '/cps-test/60' },
      { label: '100 Seconds', href: '/cps-test/100' },
      { label: 'Jitter Click', href: '/cps-test/jitter' },
      { label: 'Kohi Click', href: '/cps-test/kohi' },
      { label: 'Butterfly Click', href: '/cps-test/butterfly' },
    ],
  },
  {
    label: 'Mouse Tests',
    href: '/mouse-tester',
    children: [
      { label: 'Mouse Tester', href: '/mouse-tester' },
      { label: 'Accuracy Test', href: '/mouse-accuracy-test' },
      { label: 'DPI Calculator', href: '/mouse-dpi-calculator' },
      { label: 'Sensitivity Converter', href: '/mouse-sensitivity-converter' },
      { label: 'Scroll Test', href: '/mouse-scroll-test' },
      { label: 'Drift Test', href: '/mouse-drift-test' },
      { label: 'Aim Trainer', href: '/aim-trainer' },
      { label: 'APM Test', href: '/apm-test' },
      { label: 'Polling Rate Checker', href: '/mouse-polling-rate-checker' },
    ],
  },
  {
    label: 'Keyboard',
    href: '/keyboard-tester',
    children: [
      { label: 'Keyboard Tester', href: '/keyboard-tester' },
      { label: 'Typing Speed Test', href: '/typing-speed-test' },
      { label: 'Spacebar Clicker', href: '/spacebar-clicker' },
      { label: 'Mechanical Tester', href: '/mechanical-keyboard-tester' },
      { label: 'Keyboard Polling Rate', href: '/keyboard-polling-rate-checker' },
      { label: 'Keyboard Latency Test', href: '/keyboard-latency-test' },

    ],
  },
  {
    label: 'Auto Clickers',
    href: '/auto-clicker',
    children: [
      { label: 'All Auto Clickers', href: '/auto-clicker' },
      { label: 'Mac Auto Clicker', href: '/auto-clicker/mac' },
      { label: 'Android Auto Clicker', href: '/auto-clicker/android' },
      { label: 'Roblox Auto Clicker', href: '/roblox-auto-clicker' },
      { label: 'Auto Key Presser', href: '/auto-key-presser' },
    ],
  },
  {
    label: 'Other Tools',
    href: '/other-tools',
    children: [
      { label: 'All Other Tools', href: '/other-tools' },
      { label: '2048 Cupcakes', href: '/2048-cupcakes' },
      { label: 'Online Mirror', href: '/online-mirror' },
    ],
  },
  { label: 'Blog', href: '/blogs' },
]

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #E2E8F0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1D9E75' }} />
          <span style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a' }}>My Click Speed</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hide-mobile">
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                href={item.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#444',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: 8,
                  display: 'block',
                  transition: 'background 0.1s',
                  background: open === item.label ? '#F4F6F8' : 'transparent',
                }}
              >
                {item.label} {item.children ? '▾' : ''}
              </Link>
              {item.children && open === item.label && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                  padding: '8px 0',
                  minWidth: 200,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  zIndex: 200,
                }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        fontSize: 13,
                        color: '#444',
                        textDecoration: 'none',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#F4F6F8')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#444' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid #E2E8F0', padding: '12px 20px 20px', background: '#fff' }}>
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '10px 0', fontSize: 15, fontWeight: 600, color: '#1a1a1a', textDecoration: 'none' }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div style={{ paddingLeft: 12 }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ display: 'block', padding: '7px 0', fontSize: 13, color: '#555', textDecoration: 'none' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
