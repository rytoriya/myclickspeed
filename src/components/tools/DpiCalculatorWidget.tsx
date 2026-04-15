'use client'
import { useState } from 'react'

export default function DpiCalculatorWidget() {
  const [dpi, setDpi] = useState(800)
  const [sens, setSens] = useState(2.5)
  const [targetEdpi, setTargetEdpi] = useState(2000)
  const [newDpi, setNewDpi] = useState(400)

  const edpi = Math.round(dpi * sens)
  const convertedSens = (targetEdpi / newDpi).toFixed(2)

  return (
    <div className="tool-card">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* eDPI calculator */}
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#1a1a1a' }}>eDPI Calculator</h3>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 13, color: '#555', display: 'block', marginBottom: 4 }}>Mouse DPI</label>
            <input type="number" value={dpi} onChange={e => setDpi(Number(e.target.value))} min={100} max={25600} style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none' }} />
            <input type="range" min={100} max={3200} step={50} value={dpi} onChange={e => setDpi(Number(e.target.value))} style={{ width: '100%', marginTop: 6 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#aaa' }}><span>100</span><span>3200</span></div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, color: '#555', display: 'block', marginBottom: 4 }}>In-game Sensitivity</label>
            <input type="number" value={sens} onChange={e => setSens(Number(e.target.value))} min={0.1} max={20} step={0.1} style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none' }} />
            <input type="range" min={0.1} max={10} step={0.1} value={sens} onChange={e => setSens(Number(e.target.value))} style={{ width: '100%', marginTop: 6 }} />
          </div>
          <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#0F6E56', marginBottom: 4 }}>Your eDPI</div>
            <div style={{ fontSize: 40, fontWeight: 800, color: '#085041' }}>{edpi}</div>
            <div style={{ fontSize: 12, color: '#0F6E56', marginTop: 4 }}>
              {edpi < 1000 ? 'Very low - precise, needs large movements' :
               edpi < 2000 ? 'Low - good for FPS games' :
               edpi < 4000 ? 'Medium - balanced sensitivity' :
               'High - fast but less precise'}
            </div>
          </div>
        </div>

        {/* Sensitivity converter */}
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#1a1a1a' }}>Sensitivity Converter</h3>
          <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>Keep the same eDPI on a different DPI setting</p>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 13, color: '#555', display: 'block', marginBottom: 4 }}>Target eDPI</label>
            <input type="number" value={targetEdpi} onChange={e => setTargetEdpi(Number(e.target.value))} style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none' }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, color: '#555', display: 'block', marginBottom: 4 }}>New Mouse DPI</label>
            <input type="number" value={newDpi} onChange={e => setNewDpi(Number(e.target.value))} style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none' }} />
            <input type="range" min={100} max={3200} step={50} value={newDpi} onChange={e => setNewDpi(Number(e.target.value))} style={{ width: '100%', marginTop: 6 }} />
          </div>
          <div style={{ background: '#E6F1FB', borderRadius: 10, padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#185FA5', marginBottom: 4 }}>Required In-game Sensitivity</div>
            <div style={{ fontSize: 40, fontWeight: 800, color: '#0C447C' }}>{convertedSens}</div>
            <div style={{ fontSize: 12, color: '#185FA5', marginTop: 4 }}>at {newDpi} DPI = {targetEdpi} eDPI</div>
          </div>
        </div>
      </div>

      {/* Common DPI reference */}
      <div style={{ marginTop: 20, borderTop: '1px solid #E2E8F0', paddingTop: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#555', marginBottom: 10 }}>Common pro gamer eDPI ranges</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            { game: 'CS2 / Valorant', range: '200–800 eDPI' },
            { game: 'Overwatch 2', range: '1000–2500 eDPI' },
            { game: 'Fortnite', range: '40–80 eDPI' },
            { game: 'Apex Legends', range: '1000–2000 eDPI' },
          ].map(g => (
            <div key={g.game} style={{ background: '#F4F6F8', padding: '8px 12px', borderRadius: 8, fontSize: 12 }}>
              <div style={{ fontWeight: 600, color: '#1a1a1a' }}>{g.game}</div>
              <div style={{ color: '#1D9E75' }}>{g.range}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
