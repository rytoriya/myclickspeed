'use client'
import { useState } from 'react'

const GAMES = [
  { name: 'CS2 / CS:GO', multiplier: 1 },
  { name: 'Valorant', multiplier: 3.18 },
  { name: 'Overwatch 2', multiplier: 10.6 },
  { name: 'Apex Legends', multiplier: 1.65 },
  { name: 'Fortnite', multiplier: 5.0 },
  { name: 'Rainbow Six Siege', multiplier: 1.0 },
  { name: 'Battlefield 2042', multiplier: 2.54 },
  { name: 'Warzone', multiplier: 0.022 },
]

export default function SensitivityConverterWidget() {
  const [fromGame, setFromGame] = useState(0)
  const [toGame, setToGame] = useState(1)
  const [sens, setSens] = useState('2.0')

  const fromMultiplier = GAMES[fromGame].multiplier
  const toMultiplier = GAMES[toGame].multiplier
  const inputSens = parseFloat(sens) || 0
  const converted = inputSens > 0 ? ((inputSens * fromMultiplier) / toMultiplier).toFixed(4) : '-'

  return (
    <div className="tool-card">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'end', marginBottom: 24 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>From game</label>
          <select value={fromGame} onChange={e => setFromGame(Number(e.target.value))} style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, background: '#fff', color: '#1a1a1a', outline: 'none' }}>
            {GAMES.map((g, i) => <option key={i} value={i}>{g.name}</option>)}
          </select>
          <div style={{ marginTop: 8 }}>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Sensitivity in {GAMES[fromGame].name}</label>
            <input
              type="number"
              value={sens}
              onChange={e => setSens(e.target.value)}
              step="0.01"
              min="0"
              placeholder="e.g. 2.0"
              style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #1D9E75', borderRadius: 8, fontSize: 18, fontWeight: 700, color: '#1a1a1a', outline: 'none', textAlign: 'center' }}
            />
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingBottom: 10, fontSize: 24, color: '#aaa', fontWeight: 300 }}>→</div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>To game</label>
          <select value={toGame} onChange={e => setToGame(Number(e.target.value))} style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, background: '#fff', color: '#1a1a1a', outline: 'none' }}>
            {GAMES.map((g, i) => <option key={i} value={i}>{g.name}</option>)}
          </select>
          <div style={{ marginTop: 8 }}>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Equivalent sensitivity</label>
            <div style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 18, fontWeight: 700, color: '#1D9E75', background: '#E1F5EE', textAlign: 'center' }}>
              {converted}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#F4F6F8', borderRadius: 10, padding: '14px 16px', textAlign: 'center', fontSize: 14, color: '#555' }}>
        {inputSens > 0
          ? <><strong>{sens}</strong> in {GAMES[fromGame].name} = <strong style={{ color: '#1D9E75' }}>{converted}</strong> in {GAMES[toGame].name}</>
          : 'Enter your sensitivity above to convert'}
      </div>

      <div style={{ marginTop: 16, fontSize: 12, color: '#888', textAlign: 'center' }}>
        Conversion is based on matching the 360° rotation distance across games. Results are approximate - fine-tune in-game.
      </div>
    </div>
  )
}
