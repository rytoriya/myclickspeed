'use client'
import { useState } from 'react'

const COLORS = [
  { code: '§0', amp: '&0', name: 'Black', hex: '#000000', bg: '#fff' },
  { code: '§1', amp: '&1', name: 'Dark Blue', hex: '#0000AA', bg: '#fff' },
  { code: '§2', amp: '&2', name: 'Dark Green', hex: '#00AA00', bg: '#fff' },
  { code: '§3', amp: '&3', name: 'Dark Aqua', hex: '#00AAAA', bg: '#fff' },
  { code: '§4', amp: '&4', name: 'Dark Red', hex: '#AA0000', bg: '#fff' },
  { code: '§5', amp: '&5', name: 'Dark Purple', hex: '#AA00AA', bg: '#fff' },
  { code: '§6', amp: '&6', name: 'Gold', hex: '#FFAA00', bg: '#222' },
  { code: '§7', amp: '&7', name: 'Gray', hex: '#AAAAAA', bg: '#222' },
  { code: '§8', amp: '&8', name: 'Dark Gray', hex: '#555555', bg: '#fff' },
  { code: '§9', amp: '&9', name: 'Blue', hex: '#5555FF', bg: '#fff' },
  { code: '§a', amp: '&a', name: 'Green', hex: '#55FF55', bg: '#222' },
  { code: '§b', amp: '&b', name: 'Aqua', hex: '#55FFFF', bg: '#222' },
  { code: '§c', amp: '&c', name: 'Red', hex: '#FF5555', bg: '#fff' },
  { code: '§d', amp: '&d', name: 'Light Purple', hex: '#FF55FF', bg: '#222' },
  { code: '§e', amp: '&e', name: 'Yellow', hex: '#FFFF55', bg: '#222' },
  { code: '§f', amp: '&f', name: 'White', hex: '#FFFFFF', bg: '#222' },
]

const FORMATS = [
  { code: '§k', amp: '&k', name: 'Obfuscated', desc: 'Random characters' },
  { code: '§l', amp: '&l', name: 'Bold', desc: 'Bold text' },
  { code: '§m', amp: '&m', name: 'Strikethrough', desc: '~~Strikethrough~~' },
  { code: '§n', amp: '&n', name: 'Underline', desc: 'Underlined text' },
  { code: '§o', amp: '&o', name: 'Italic', desc: 'Italic text' },
  { code: '§r', amp: '&r', name: 'Reset', desc: 'Reset all formatting' },
]

export default function MinecraftColorWidget() {
  const [copied, setCopied] = useState('')
  const [useAmp, setUseAmp] = useState(false)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopied(text)
    setTimeout(() => setCopied(''), 1500)
  }

  return (
    <div className="tool-card">
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: '#555' }}>Format:</span>
        <button onClick={() => setUseAmp(false)} style={{ padding: '5px 14px', borderRadius: 99, border: `1.5px solid ${!useAmp ? '#1D9E75' : '#E2E8F0'}`, background: !useAmp ? '#1D9E75' : '#fff', color: !useAmp ? '#fff' : '#555', fontSize: 13, cursor: 'pointer' }}>§ (Java)</button>
        <button onClick={() => setUseAmp(true)} style={{ padding: '5px 14px', borderRadius: 99, border: `1.5px solid ${useAmp ? '#1D9E75' : '#E2E8F0'}`, background: useAmp ? '#1D9E75' : '#fff', color: useAmp ? '#fff' : '#555', fontSize: 13, cursor: 'pointer' }}>& (Plugins)</button>
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Color Codes</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8, marginBottom: 24 }}>
        {COLORS.map(c => {
          const code = useAmp ? c.amp : c.code
          return (
            <div key={c.code} onClick={() => copy(code)} style={{ background: c.bg === '#222' ? '#1a1a2e' : '#fff', border: '1px solid #E2E8F0', borderRadius: 8, padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, transition: 'transform 0.1s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ width: 28, height: 28, borderRadius: 6, background: c.hex, border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: c.bg === '#222' ? '#fff' : '#1a1a1a' }}>{c.name}</div>
                <div style={{ fontSize: 12, fontFamily: 'monospace', color: copied === code ? '#1D9E75' : c.bg === '#222' ? '#aaa' : '#888' }}>{copied === code ? '✓ Copied!' : code}</div>
              </div>
            </div>
          )
        })}
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Formatting Codes</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
        {FORMATS.map(f => {
          const code = useAmp ? f.amp : f.code
          return (
            <div key={f.code} onClick={() => copy(code)} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 8, padding: '10px 12px', cursor: 'pointer', transition: 'transform 0.1s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{f.name}</div>
              <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{f.desc}</div>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: copied === code ? '#1D9E75' : '#aaa', marginTop: 4 }}>{copied === code ? '✓ Copied!' : code}</div>
            </div>
          )
        })}
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: '#888', marginTop: 16 }}>Click any code to copy it</div>
    </div>
  )
}
