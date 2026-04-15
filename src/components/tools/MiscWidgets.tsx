'use client'
import { useState, useEffect, useRef } from 'react'

// --- Mouse Double Click Test ---
export function MouseDoubleClickWidget() {
  const [clicks, setClicks] = useState<{ time: number; gap: number | null }[]>([])
  const lastClick = useRef<number>(0)

  const handleClick = () => {
    const now = Date.now()
    const gap = lastClick.current ? now - lastClick.current : null
    setClicks(c => [...c.slice(-9), { time: now, gap }])
    lastClick.current = now
  }

  const reset = () => { setClicks([]); lastClick.current = 0 }

  const doubleClicks = clicks.filter(c => c.gap !== null && c.gap < 500).length

  return (
    <div className="tool-card">
      <div
        onClick={handleClick}
        style={{ background: '#F4F6F8', border: '2px dashed #E2E8F0', borderRadius: 12, padding: '40px 20px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', marginBottom: 20 }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>🖱️</div>
        <div style={{ fontSize: 18, fontWeight: 700 }}>Click here to test double-click</div>
        <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Click rapidly to detect double-click registration</div>
      </div>
      <div style={{ marginBottom: 16 }}>
        {clicks.length === 0 && <div style={{ textAlign: 'center', color: '#888', fontSize: 14 }}>No clicks yet</div>}
        {clicks.map((c, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #F4F6F8', fontSize: 13 }}>
            <span style={{ color: '#555' }}>Click {i + 1}</span>
            <span style={{ color: c.gap !== null && c.gap < 500 ? '#D85A30' : '#1D9E75', fontWeight: 600 }}>
              {c.gap !== null ? `${c.gap}ms ${c.gap < 500 ? '⚠ Double-click detected' : '✓ Normal'}` : 'First click'}
            </span>
          </div>
        ))}
      </div>
      {clicks.length > 0 && (
        <div style={{ background: doubleClicks > 0 ? '#FAECE7' : '#E1F5EE', borderRadius: 10, padding: '12px 16px', marginBottom: 12, textAlign: 'center' }}>
          <span style={{ fontWeight: 600, color: doubleClicks > 0 ? '#993C1D' : '#085041' }}>
            {doubleClicks > 0 ? `⚠ ${doubleClicks} double-click issue${doubleClicks > 1 ? 's' : ''} detected` : '✓ No double-click issues detected'}
          </span>
        </div>
      )}
      <div style={{ textAlign: 'center' }}><button className="btn-outline" onClick={reset}>Reset</button></div>
    </div>
  )
}

// --- Mouse Scroll Test ---
export function MouseScrollWidget() {
  const [scrolls, setScrolls] = useState<{ dir: string; time: number }[]>([])
  const [active, setActive] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      const dir = e.deltaY > 0 ? 'Down ↓' : e.deltaY < 0 ? 'Up ↑' : e.deltaX > 0 ? 'Right →' : 'Left ←'
      setActive(dir)
      setScrolls(s => [...s.slice(-19), { dir, time: Date.now() }])
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setActive(null), 400)
    }
    window.addEventListener('wheel', onScroll, { passive: true })
    return () => window.removeEventListener('wheel', onScroll)
  }, [])

  return (
    <div className="tool-card">
      <div style={{ background: active ? '#E1F5EE' : '#F4F6F8', border: `2px dashed ${active ? '#1D9E75' : '#E2E8F0'}`, borderRadius: 12, padding: '48px 20px', textAlign: 'center', marginBottom: 20, transition: 'all 0.15s', userSelect: 'none' }}>
        {active
          ? <><div style={{ fontSize: 48, fontWeight: 800, color: '#1D9E75' }}>{active}</div><div style={{ fontSize: 14, color: '#0F6E56', marginTop: 4 }}>Scroll detected!</div></>
          : <><div style={{ fontSize: 36, marginBottom: 8 }}>🖱️</div><div style={{ fontSize: 18, fontWeight: 700 }}>Scroll your mouse wheel here</div><div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Up, down, and horizontal scroll all detected</div></>
        }
      </div>
      <div style={{ maxHeight: 200, overflowY: 'auto' }}>
        {scrolls.slice().reverse().map((s, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #F4F6F8', fontSize: 13 }}>
            <span style={{ color: '#1D9E75', fontWeight: 600 }}>{s.dir}</span>
            <span style={{ color: '#aaa' }}>registered</span>
          </div>
        ))}
        {scrolls.length === 0 && <div style={{ textAlign: 'center', color: '#888', fontSize: 14, padding: 16 }}>No scrolls yet</div>}
      </div>
      <div style={{ textAlign: 'center', marginTop: 12 }}><button className="btn-outline" onClick={() => setScrolls([])}>Clear</button></div>
    </div>
  )
}

// --- Mouse Drift Test ---
export function MouseDriftWidget() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([])
  const [tracking, setTracking] = useState(false)
  const [maxDrift, setMaxDrift] = useState(0)
  const basePos = useRef<{ x: number; y: number } | null>(null)
  const areaRef = useRef<HTMLDivElement>(null)

  const startTracking = () => {
    setPositions([])
    setMaxDrift(0)
    setTracking(true)
    basePos.current = null
  }

  useEffect(() => {
    if (!tracking) return
    const onMove = (e: MouseEvent) => {
      if (!areaRef.current) return
      const rect = areaRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (!basePos.current) basePos.current = { x, y }
      const drift = Math.sqrt(Math.pow(x - basePos.current.x, 2) + Math.pow(y - basePos.current.y, 2))
      setMaxDrift(d => Math.max(d, Math.round(drift)))
      setPositions(p => [...p.slice(-100), { x, y }])
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [tracking])

  const latest = positions[positions.length - 1]

  return (
    <div className="tool-card">
      <div className="stat-grid" style={{ marginBottom: 20, marginTop: 0 }}>
        <div className="stat-card"><div className="stat-label">Max Drift</div><div className="stat-value" style={{ fontSize: 22, color: maxDrift > 20 ? '#D85A30' : '#1D9E75' }}>{maxDrift}px</div></div>
        <div className="stat-card"><div className="stat-label">X Position</div><div className="stat-value" style={{ fontSize: 22 }}>{latest ? Math.round(latest.x) : 0}</div></div>
        <div className="stat-card"><div className="stat-label">Y Position</div><div className="stat-value" style={{ fontSize: 22 }}>{latest ? Math.round(latest.y) : 0}</div></div>
      </div>
      <div ref={areaRef} style={{ background: '#F4F6F8', borderRadius: 12, height: 240, position: 'relative', overflow: 'hidden', marginBottom: 16, cursor: tracking ? 'crosshair' : 'default' }}>
        {!tracking && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📍</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Click Start to begin drift test</div>
          </div>
        )}
        {positions.map((p, i) => (
          <div key={i} style={{ position: 'absolute', left: p.x - 2, top: p.y - 2, width: 4, height: 4, borderRadius: '50%', background: `rgba(29,158,117,${0.3 + (i / positions.length) * 0.7})` }} />
        ))}
        {latest && tracking && (
          <div style={{ position: 'absolute', left: latest.x - 6, top: latest.y - 6, width: 12, height: 12, borderRadius: '50%', background: '#1D9E75', border: '2px solid #085041' }} />
        )}
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        <button className="btn-teal" onClick={startTracking}>{tracking ? 'Restart' : 'Start Test'}</button>
        {tracking && <button className="btn-outline" onClick={() => setTracking(false)}>Stop</button>}
      </div>
    </div>
  )
}

// --- APM Test ---
export function ApmWidget() {
  const [actions, setActions] = useState(0)
  const [running, setRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [apm, setApm] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startRef = useRef(0)
  const actionsRef = useRef(0)

  useEffect(() => {
    if (!running) return
    const onKey = () => { actionsRef.current++; setActions(a => a + 1) }
    const onClick = () => { actionsRef.current++; setActions(a => a + 1) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('mousedown', onClick) }
  }, [running])

  const start = () => {
    setRunning(true); setActions(0); setApm(0); setTimeLeft(60)
    actionsRef.current = 0
    startRef.current = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / 1000
      const rem = Math.max(0, 60 - elapsed)
      setTimeLeft(rem)
      setApm(Math.round((actionsRef.current / elapsed) * 60))
      if (rem <= 0) { clearInterval(intervalRef.current!); setRunning(false) }
    }, 100)
  }

  const reset = () => { if (intervalRef.current) clearInterval(intervalRef.current); setRunning(false); setActions(0); setApm(0); setTimeLeft(60) }

  return (
    <div className="tool-card">
      <div className="stat-grid" style={{ marginBottom: 20, marginTop: 0 }}>
        <div className="stat-card"><div className="stat-label">Time Left</div><div className="stat-value" style={{ fontSize: 22 }}>{Math.ceil(timeLeft)}s</div></div>
        <div className="stat-card"><div className="stat-label">Actions</div><div className="stat-value" style={{ fontSize: 22 }}>{actions}</div></div>
        <div className="stat-card"><div className="stat-label">APM</div><div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{apm}</div></div>
      </div>
      <div style={{ background: running ? '#E1F5EE' : '#F4F6F8', border: `2px dashed ${running ? '#1D9E75' : '#E2E8F0'}`, borderRadius: 12, padding: '32px 20px', textAlign: 'center', marginBottom: 16 }}>
        {running ? <><div style={{ fontSize: 48, fontWeight: 800, color: '#1D9E75' }}>{apm}</div><div style={{ fontSize: 16, color: '#0F6E56' }}>actions per minute — keep going!</div></> : <><div style={{ fontSize: 32, marginBottom: 8 }}>⚡</div><div style={{ fontSize: 18, fontWeight: 700 }}>Click Start then use keyboard + mouse</div><div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Every keypress and click counts</div></>}
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {!running && <button className="btn-teal" onClick={start}>Start APM Test</button>}
        <button className="btn-outline" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

// --- FPS Test ---
export function FpsWidget() {
  const [fps, setFps] = useState(0)
  const [running, setRunning] = useState(false)
  const frameRef = useRef(0)
  const lastRef = useRef(0)
  const rafRef = useRef(0)

  const measure = (ts: number) => {
    const delta = ts - lastRef.current
    lastRef.current = ts
    frameRef.current++
    if (frameRef.current % 10 === 0) setFps(Math.round(1000 / delta))
    rafRef.current = requestAnimationFrame(measure)
  }

  const start = () => { setRunning(true); lastRef.current = performance.now(); rafRef.current = requestAnimationFrame(measure) }
  const stop = () => { cancelAnimationFrame(rafRef.current); setRunning(false); setFps(0) }

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const color = fps >= 120 ? '#1D9E75' : fps >= 60 ? '#BA7517' : '#D85A30'

  return (
    <div className="tool-card" style={{ textAlign: 'center' }}>
      <div style={{ background: '#F4F6F8', borderRadius: 12, padding: '40px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 80, fontWeight: 800, color: running ? color : '#aaa', lineHeight: 1 }}>{running ? fps : '—'}</div>
        <div style={{ fontSize: 18, color: '#555', marginTop: 8 }}>frames per second</div>
        {running && fps > 0 && (
          <div style={{ marginTop: 10, fontSize: 14, color: fps >= 120 ? '#1D9E75' : fps >= 60 ? '#BA7517' : '#D85A30', fontWeight: 600 }}>
            {fps >= 144 ? 'Excellent — gaming grade' : fps >= 120 ? 'Great — very smooth' : fps >= 60 ? 'Good — playable' : fps >= 30 ? 'Low — choppy gaming' : 'Very low — performance issue'}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {!running ? <button className="btn-teal" onClick={start}>Start FPS Counter</button> : <button className="btn-outline" onClick={stop}>Stop</button>}
      </div>
    </div>
  )
}

// --- Refresh Rate Test ---
export function RefreshRateWidget() {
  const [rate, setRate] = useState(0)
  const [running, setRunning] = useState(false)
  const samples = useRef<number[]>([])
  const rafRef = useRef(0)
  const lastRef = useRef(0)

  const measure = (ts: number) => {
    if (lastRef.current) {
      const delta = ts - lastRef.current
      samples.current.push(1000 / delta)
      if (samples.current.length > 60) samples.current.shift()
      const avg = samples.current.reduce((a, b) => a + b, 0) / samples.current.length
      setRate(Math.round(avg))
    }
    lastRef.current = ts
    rafRef.current = requestAnimationFrame(measure)
  }

  const start = () => { setRunning(true); samples.current = []; lastRef.current = 0; rafRef.current = requestAnimationFrame(measure) }
  const stop = () => { cancelAnimationFrame(rafRef.current); setRunning(false) }
  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const rounded = rate >= 140 ? 144 : rate >= 115 ? 120 : rate >= 75 ? 75 : rate >= 55 ? 60 : rate

  return (
    <div className="tool-card" style={{ textAlign: 'center' }}>
      <div style={{ background: '#F4F6F8', borderRadius: 12, padding: '40px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 80, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{running && rate > 0 ? rounded : '—'}</div>
        <div style={{ fontSize: 18, color: '#555', marginTop: 8 }}>Hz — monitor refresh rate</div>
        {running && rate > 0 && <div style={{ fontSize: 13, color: '#888', marginTop: 6 }}>Raw reading: {rate} Hz</div>}
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {!running ? <button className="btn-teal" onClick={start}>Detect Refresh Rate</button> : <button className="btn-outline" onClick={stop}>Stop</button>}
      </div>
    </div>
  )
}
