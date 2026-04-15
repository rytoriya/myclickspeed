'use client'
import { useState, useMemo } from 'react'

function generateCircle(radius: number): boolean[][] {
  const size = radius * 2 + 1
  const grid: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false))
  const cx = radius, cy = radius
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x - cx, dy = y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist <= radius + 0.5 && dist >= radius - 0.5) {
        grid[y][x] = true
      }
    }
  }
  return grid
}

function generateFilledCircle(radius: number): boolean[][] {
  const size = radius * 2 + 1
  const grid: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false))
  const cx = radius, cy = radius
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x - cx, dy = y - cy
      if (Math.sqrt(dx * dx + dy * dy) <= radius + 0.5) grid[y][x] = true
    }
  }
  return grid
}

export default function MinecraftSphereWidget() {
  const [radius, setRadius] = useState(8)
  const [mode, setMode] = useState<'sphere' | 'circle'>('circle')
  const [layer, setLayer] = useState(0)

  const maxLayer = radius
  const layerRadius = useMemo(() => {
    if (mode === 'circle') return radius
    const dy = layer - radius
    const r2 = radius * radius - dy * dy
    return r2 > 0 ? Math.sqrt(r2) : 0
  }, [radius, layer, mode])

  const grid = useMemo(() => {
    const r = Math.round(layerRadius)
    if (r <= 0) return []
    return mode === 'circle' ? generateCircle(r) : generateFilledCircle(r)
  }, [layerRadius, mode])

  const blockCount = useMemo(() => grid.flat().filter(Boolean).length, [grid])
  const cellSize = radius > 20 ? 8 : radius > 12 ? 12 : 16

  return (
    <div className="tool-card">
      <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap', alignItems: 'end' }}>
        <div style={{ flex: 1, minWidth: 120 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Radius: {radius}</label>
          <input type="range" min={2} max={30} value={radius} onChange={e => { setRadius(Number(e.target.value)); setLayer(0) }} style={{ width: '100%' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#aaa' }}><span>2</span><span>30</span></div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => setMode('circle')} style={{ padding: '7px 14px', borderRadius: 8, border: `1.5px solid ${mode === 'circle' ? '#1D9E75' : '#E2E8F0'}`, background: mode === 'circle' ? '#1D9E75' : '#fff', color: mode === 'circle' ? '#fff' : '#555', fontSize: 13, cursor: 'pointer' }}>Circle</button>
          <button onClick={() => setMode('sphere')} style={{ padding: '7px 14px', borderRadius: 8, border: `1.5px solid ${mode === 'sphere' ? '#1D9E75' : '#E2E8F0'}`, background: mode === 'sphere' ? '#1D9E75' : '#fff', color: mode === 'sphere' ? '#fff' : '#555', fontSize: 13, cursor: 'pointer' }}>Sphere Layer</button>
        </div>
      </div>

      {mode === 'sphere' && (
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Layer Y: {layer} (radius at this layer: {Math.round(layerRadius)})</label>
          <input type="range" min={0} max={maxLayer * 2} value={layer} onChange={e => setLayer(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      )}

      <div style={{ display: 'flex', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
        <div className="stat-card" style={{ flex: 1 }}><div className="stat-label">Diameter</div><div className="stat-value" style={{ fontSize: 20 }}>{radius * 2 + 1} blocks</div></div>
        <div className="stat-card" style={{ flex: 1 }}><div className="stat-label">Blocks this layer</div><div className="stat-value" style={{ fontSize: 20, color: '#1D9E75' }}>{blockCount}</div></div>
      </div>

      <div style={{ overflowX: 'auto', background: '#1a1a2e', borderRadius: 10, padding: 12 }}>
        <div style={{ display: 'inline-block' }}>
          {grid.map((row, y) => (
            <div key={y} style={{ display: 'flex' }}>
              {row.map((cell, x) => (
                <div key={x} style={{ width: cellSize, height: cellSize, background: cell ? '#5DCAA5' : 'transparent', border: cell ? '0.5px solid #085041' : '0.5px solid #222', flexShrink: 0 }} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: 12, color: '#888', marginTop: 8 }}>Each cell = 1 Minecraft block · Radius {radius}</div>
    </div>
  )
}
