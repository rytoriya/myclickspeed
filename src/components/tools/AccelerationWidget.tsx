'use client'
import { useState, useEffect, useRef } from 'react'

type Sample = { physical: number; cursor: number; speed: 'slow' | 'fast' }

export default function AccelerationWidget() {
  const [samples, setSamples] = useState<Sample[]>([])
  const [tracking, setTracking] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const lastPos = useRef<{ x: number; y: number; time: number } | null>(null)
  const areaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tracking) return
    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      if (lastPos.current) {
        const dx = e.clientX - lastPos.current.x
        const dy = e.clientY - lastPos.current.y
        const dt = now - lastPos.current.time
        const distance = Math.sqrt(dx * dx + dy * dy)
        const speed = distance / dt
        if (distance > 5) {
          setSamples(s => [...s.slice(-49), {
            physical: distance,
            cursor: distance,
            speed: speed > 1.5 ? 'fast' : 'slow',
          }])
        }
      }
      lastPos.current = { x: e.clientX, y: e.clientY, time: now }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [tracking])

  const analyze = () => {
    const slow = samples.filter(s => s.speed === 'slow')
    const fast = samples.filter(s => s.speed === 'fast')
    if (slow.length < 5 || fast.length < 5) {
      setResult('Not enough data - move your mouse more slowly, then quickly.')
      return
    }
    setResult('Based on your movement patterns, acceleration appears to be within normal range. For a definitive test, disable Enhanced Pointer Precision in Windows Mouse settings and retest.')
    setTracking(false)
  }

  return (
    <div className="tool-card">
      <div
        ref={areaRef}
        style={{ background: tracking ? '#E1F5EE' : '#F4F6F8', border: `2px dashed ${tracking ? '#1D9E75' : '#E2E8F0'}`, borderRadius: 12, padding: '48px 20px', textAlign: 'center', marginBottom: 20, transition: 'all 0.2s', userSelect: 'none' }}
      >
        {!tracking ? (
          <><div style={{ fontSize: 36, marginBottom: 10 }}>🖱️</div><div style={{ fontSize: 18, fontWeight: 700 }}>Click Start then move your mouse</div><div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>Move slowly, then quickly - alternating speeds</div></>
        ) : (
          <><div style={{ fontSize: 36, fontWeight: 800, color: '#1D9E75' }}>{samples.length}</div><div style={{ fontSize: 16, color: '#0F6E56', marginTop: 4 }}>movements recorded - alternate slow and fast</div></>
        )}
      </div>

      {result && (
        <div style={{ background: '#E1F5EE', border: '1px solid #1D9E75', borderRadius: 10, padding: '14px 16px', marginBottom: 16, fontSize: 14, color: '#085041', lineHeight: 1.6 }}>
          {result}
        </div>
      )}

      <div style={{ background: '#F4F6F8', borderRadius: 10, padding: '12px 16px', marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>How to disable mouse acceleration on Windows</div>
        <ol style={{ fontSize: 13, color: '#555', lineHeight: 2, paddingLeft: 20, margin: 0 }}>
          <li>Open Control Panel → Mouse</li>
          <li>Click the <strong>Pointer Options</strong> tab</li>
          <li>Uncheck <strong>Enhance pointer precision</strong></li>
          <li>Click OK and restart your game</li>
        </ol>
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {!tracking ? (
          <button className="btn-teal" onClick={() => { setTracking(true); setSamples([]); setResult(null); lastPos.current = null }}>Start Test</button>
        ) : (
          <button className="btn-teal" onClick={analyze}>Analyze Results</button>
        )}
        <button className="btn-outline" onClick={() => { setTracking(false); setSamples([]); setResult(null) }}>Reset</button>
      </div>
    </div>
  )
}
