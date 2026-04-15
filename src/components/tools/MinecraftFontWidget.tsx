'use client'
import { useState } from 'react'

const COLORS = [
  { code: '§0', hex: '#000000', name: 'Black' },
  { code: '§1', hex: '#0000AA', name: 'Dark Blue' },
  { code: '§2', hex: '#00AA00', name: 'Dark Green' },
  { code: '§3', hex: '#00AAAA', name: 'Dark Aqua' },
  { code: '§4', hex: '#AA0000', name: 'Dark Red' },
  { code: '§5', hex: '#AA00AA', name: 'Purple' },
  { code: '§6', hex: '#FFAA00', name: 'Gold' },
  { code: '§7', hex: '#AAAAAA', name: 'Gray' },
  { code: '§8', hex: '#555555', name: 'Dark Gray' },
  { code: '§9', hex: '#5555FF', name: 'Blue' },
  { code: '§a', hex: '#55FF55', name: 'Green' },
  { code: '§b', hex: '#55FFFF', name: 'Aqua' },
  { code: '§c', hex: '#FF5555', name: 'Red' },
  { code: '§d', hex: '#FF55FF', name: 'Pink' },
  { code: '§e', hex: '#FFFF55', name: 'Yellow' },
  { code: '§f', hex: '#FFFFFF', name: 'White' },
]

export default function MinecraftFontWidget() {
  const [text, setText] = useState('My Click Speed')
  const [color, setColor] = useState('§a')
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [copied, setCopied] = useState(false)

  const formatCode = `${color}${bold ? '§l' : ''}${italic ? '§o' : ''}${underline ? '§n' : ''}${text}`
  const hexColor = COLORS.find(c => c.code === color)?.hex || '#55FF55'

  const copy = () => {
    navigator.clipboard.writeText(formatCode).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="tool-card">
      {/* Preview */}
      <div style={{ background: '#1a1a2e', borderRadius: 10, padding: '28px 20px', marginBottom: 20, textAlign: 'center', minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{
          color: hexColor,
          fontFamily: '"Courier New", monospace',
          fontSize: 24,
          fontWeight: bold ? 800 : 400,
          fontStyle: italic ? 'italic' : 'normal',
          textDecoration: underline ? 'underline' : 'none',
          letterSpacing: 1,
          textShadow: `2px 2px 0px ${hexColor}44`,
          wordBreak: 'break-all',
        }}>
          {text || 'Type something...'}
        </span>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Your text</label>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type your Minecraft text..."
          maxLength={100}
          style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none', color: '#1a1a1a' }}
        />
      </div>

      {/* Color picker */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 8 }}>Color</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {COLORS.map(c => (
            <div
              key={c.code}
              onClick={() => setColor(c.code)}
              title={c.name}
              style={{ width: 28, height: 28, borderRadius: 6, background: c.hex, cursor: 'pointer', border: `3px solid ${color === c.code ? '#1a1a1a' : 'transparent'}`, transition: 'transform 0.1s', transform: color === c.code ? 'scale(1.15)' : 'scale(1)' }}
            />
          ))}
        </div>
      </div>

      {/* Formatting */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {[
          { label: 'Bold', active: bold, toggle: () => setBold(b => !b) },
          { label: 'Italic', active: italic, toggle: () => setItalic(i => !i) },
          { label: 'Underline', active: underline, toggle: () => setUnderline(u => !u) },
        ].map(f => (
          <button key={f.label} onClick={f.toggle} style={{ padding: '6px 16px', borderRadius: 8, border: `1.5px solid ${f.active ? '#1D9E75' : '#E2E8F0'}`, background: f.active ? '#E1F5EE' : '#fff', color: f.active ? '#085041' : '#555', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Output code */}
      <div style={{ background: '#1a1a2e', borderRadius: 8, padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <code style={{ fontSize: 14, color: '#aaa', fontFamily: 'monospace', wordBreak: 'break-all' }}>{formatCode}</code>
        <button onClick={copy} className="btn-teal" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '8px 16px', flexShrink: 0 }}>
          {copied ? '✓ Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  )
}
