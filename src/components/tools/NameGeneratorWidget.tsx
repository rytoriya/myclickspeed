'use client'
import { useState, useCallback } from 'react'

type Config = {
  prefixes: string[]
  suffixes: string[]
  middles?: string[]
}

function generateName(config: Config): string {
  const p = config.prefixes[Math.floor(Math.random() * config.prefixes.length)]
  const s = config.suffixes[Math.floor(Math.random() * config.suffixes.length)]
  if (config.middles && Math.random() > 0.5) {
    const m = config.middles[Math.floor(Math.random() * config.middles.length)]
    return p + m + s
  }
  return p + s
}

export default function NameGeneratorWidget({ config, type }: { config: Config; type: string }) {
  const [names, setNames] = useState<string[]>(() => Array.from({ length: 12 }, () => generateName(config)))
  const [saved, setSaved] = useState<string[]>([])
  const [copied, setCopied] = useState('')

  const generate = useCallback(() => {
    setNames(Array.from({ length: 12 }, () => generateName(config)))
  }, [config])

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name).catch(() => {})
    setCopied(name)
    setTimeout(() => setCopied(''), 1500)
  }

  const saveName = (name: string) => {
    setSaved(s => s.includes(name) ? s.filter(n => n !== name) : [...s, name])
  }

  return (
    <div className="tool-card">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 8, marginBottom: 20 }}>
        {names.map((name, i) => (
          <div key={i} style={{ background: '#F4F6F8', borderRadius: 10, padding: '14px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', flex: 1 }}>{name}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={() => copyName(name)}
                title="Copy"
                style={{ width: 28, height: 28, border: 'none', borderRadius: 6, background: copied === name ? '#1D9E75' : '#E2E8F0', color: copied === name ? '#fff' : '#555', cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {copied === name ? '✓' : '⎘'}
              </button>
              <button
                onClick={() => saveName(name)}
                title="Save"
                style={{ width: 28, height: 28, border: 'none', borderRadius: 6, background: saved.includes(name) ? '#FAEEDA' : '#E2E8F0', color: saved.includes(name) ? '#633806' : '#555', cursor: 'pointer', fontSize: 12 }}
              >
                {saved.includes(name) ? '★' : '☆'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: saved.length > 0 ? 20 : 0 }}>
        <button className="btn-teal" onClick={generate}>Generate More Names</button>
      </div>

      {saved.length > 0 && (
        <div style={{ marginTop: 20, borderTop: '1px solid #E2E8F0', paddingTop: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#555', marginBottom: 10 }}>★ Saved Names</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {saved.map(name => (
              <span key={name} onClick={() => saveName(name)} style={{ padding: '6px 14px', background: '#FAEEDA', borderRadius: 99, fontSize: 14, fontWeight: 500, color: '#633806', cursor: 'pointer' }}>
                {name} ×
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
