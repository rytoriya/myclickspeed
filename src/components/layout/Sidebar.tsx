import Link from 'next/link'

const sidebarSections = [
  {
    title: '⚡ CPS Tests',
    links: [
      { label: '1 Second Test', href: '/cps-test/1' },
      { label: '5 Second Test', href: '/cps-test/5' },
      { label: '10 Second Test', href: '/cps-test/10' },
      { label: '30 Second Test', href: '/cps-test/30' },
      { label: '60 Second Test', href: '/cps-test/60' },
      { label: '100 Second Test', href: '/cps-test/100' },
      { label: 'Jitter Click Test', href: '/cps-test/jitter' },
      { label: 'Kohi Click Test', href: '/cps-test/kohi' },
      { label: 'Butterfly Click Test', href: '/cps-test/butterfly' },
    ],
  },
  {
    title: '🖱️ Mouse Tools',
    links: [
      { label: 'Mouse Tester', href: '/mouse-tester' },
      { label: 'DPI Calculator', href: '/mouse-dpi-calculator' },
      { label: 'Aim Trainer', href: '/aim-trainer' },
      { label: 'Accuracy Test', href: '/mouse-accuracy-test' },
      { label: 'Polling Rate', href: '/mouse-polling-rate-checker' },
      { label: 'Scroll Test', href: '/mouse-scroll-test' },
    ],
  },
  {
    title: '⌨️ Keyboard',
    links: [
      { label: 'Keyboard Tester', href: '/keyboard-tester' },
      { label: 'Typing Speed Test', href: '/typing-speed-test' },
      { label: 'Spacebar Clicker', href: '/spacebar-clicker' },
      { label: 'Keyboard Latency', href: '/keyboard-latency-test' },
      { label: 'Keyboard Polling Rate', href: '/keyboard-polling-rate-checker' },
    ],
  },
  {
    title: '🎮 Other Tools',
    links: [
      { label: '2048 Cupcakes', href: '/2048-cupcakes' },
      { label: 'Online Mirror', href: '/online-mirror' },
      { label: 'T-Rex Dino Game', href: '/t-rex-dino-game' },
      { label: 'Tally Counter', href: '/tally-counter' },
      { label: 'APM Test', href: '/apm-test' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside style={{
      width: 200,
      flexShrink: 0,
      position: 'sticky',
      top: 80,
      height: 'fit-content',
      maxHeight: 'calc(100vh - 100px)',
      overflowY: 'auto',
      paddingBottom: 24,
    }}>
      <style>{`
        .sidebar-link {
          display: block;
          padding: 5px 8px;
          font-size: 13px;
          color: #555;
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.1s, color 0.1s;
          line-height: 1.4;
        }
        .sidebar-link:hover {
          background: #E1F5EE;
          color: #1D9E75;
        }
        .sidebar-section-title {
          font-size: 12px;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 8px;
          margin-bottom: 4px;
          margin-top: 16px;
        }
        .sidebar-section-title:first-child {
          margin-top: 0;
        }
      `}</style>
      {sidebarSections.map(section => (
        <div key={section.title}>
          <div className="sidebar-section-title">{section.title}</div>
          {section.links.map(link => (
            <Link key={link.href} href={link.href} className="sidebar-link">
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  )
}