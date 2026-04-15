import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Best Macro Recorders 2025 – Record & Replay Mouse and Keyboard',
  description: 'Download the best free macro recorder software. Record mouse movements and keyboard inputs and replay them automatically. Top picks for Windows and Mac.',
  alternates: { canonical: 'https://myclickspeed.com/best-macro-recorders' },
}

const tools = [
  { name: 'AutoHotkey', url: 'https://www.autohotkey.com/', badge: 'Most Powerful', badgeColor: '#1D9E75', price: 'Free', desc: 'The definitive macro tool for Windows. Script-based automation that can do anything - record macros, remap keys, build GUIs, automate complex sequences. Huge community library of ready-made scripts.' },
  { name: 'TinyTask', url: 'https://www.tinyautomation.com/', badge: 'Simplest', badgeColor: '#378ADD', price: 'Free', desc: 'The smallest macro recorder available (just 35KB). Record and replay mouse movements and clicks with one click. No installation needed. Perfect for simple repetitive task automation.' },
  { name: 'GS Auto Clicker', url: 'https://gs-auto-clicker.en.softonic.com/', badge: 'Best for Clicks', badgeColor: '#7F77DD', price: 'Free', desc: 'Record sequences of clicks at different screen positions and replay on loop. Multi-point click recording with millisecond precision. Great for gaming macros.' },
  { name: 'Macro Recorder by Macro Toolworks', url: 'https://www.macrotoolworks.com/', badge: 'Most Features', badgeColor: '#BA7517', price: 'Free / Paid', desc: 'Professional macro recording with scheduling, triggers, and conditional logic. Records mouse and keyboard. Free version covers most use cases.' },
]

export default function BestMacroRecordersPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/auto-clicker">Auto Clickers</a> › <span>Best Macro Recorders</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Best Macro Recorders 2025</h1>
        <p className="section-subtitle">Record mouse movements and keyboard inputs, then replay them automatically. Top free macro recorder picks for Windows and Mac.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
        {tools.map(t => (
          <div key={t.name} className="tool-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4, flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{t.name}</h2>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: t.badgeColor + '20', color: t.badgeColor, fontWeight: 600 }}>{t.badge}</span>
                <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 99, background: '#E1F5EE', color: '#085041' }}>{t.price}</span>
              </div>
              <p style={{ fontSize: 14, color: '#555', margin: 0, lineHeight: 1.7 }}>{t.desc}</p>
            </div>
            <a href={t.url} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ textDecoration: 'none', fontSize: 13 }}>Download ↗</a>
          </div>
        ))}
      </div>
      <div className="content-section">
        <h2>Macro Recorder vs Auto Clicker</h2>
        <p>An auto clicker only records and replays mouse clicks at a fixed location. A macro recorder captures the full sequence - mouse movement paths, multiple click locations, keyboard inputs, timing, and order. Use an auto clicker for simple repetitive single-location clicking. Use a macro recorder when you need to automate a multi-step workflow involving different actions across the screen.</p>
      </div>
      <RelatedTools currentHref="/best-macro-recorders" />
    </div>
  )
}
