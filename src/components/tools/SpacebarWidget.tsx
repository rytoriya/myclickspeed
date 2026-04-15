'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const DURATION = 10

export default function SpacebarWidget() {
  const [state, setState] = useState<'idle'|'running'|'done'>('idle')
  const [count, setCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const intervalRef = useRef<ReturnType<typeof setInterval>|null>(null)
  const startRef = useRef(0)

  const start = useCallback(() => {
    setState('running')
    setCount(0)
    setTimeLeft(DURATION)
    startRef.current = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / 1000
      const rem = Math.max(0, DURATION - elapsed)
      setTimeLeft(rem)
      if (rem <= 0) { clearInterval(intervalRef.current!); setState('done') }
    }, 50)
  }, [])

  const tap = useCallback(() => {
    if (state === 'idle') { start(); setCount(1); return }
    if (state !== 'running') return
    setCount(c => c + 1)
  }, [state, start])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.code === 'Space') { e.preventDefault(); tap() } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tap])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setState('idle'); setCount(0); setTimeLeft(DURATION)
  }

  const sps = state === 'done' ? (count / DURATION).toFixed(2) : state === 'running' ? ((count / Math.max(0.1, DURATION - timeLeft))).toFixed(1) : '0'

  return (
    <div className="tool-card">
      <div
        onClick={tap}
        style={{
          background: state === 'running' ? '#E1F5EE' : '#F4F6F8',
          border: `2px dashed ${state === 'running' ? '#1D9E75' : '#E2E8F0'}`,
          borderRadius: 12,
          padding: '48px 20px',
          textAlign: 'center',
          cursor: state === 'done' ? 'default' : 'pointer',
          userSelect: 'none',
          marginBottom: 20,
        }}
      >
        {state === 'idle' && <><div style={{ fontSize: 48, marginBottom: 8 }}>⬜</div><div style={{ fontSize: 20, fontWeight: 700 }}>Press Space or click here to start</div><div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>10 second test</div></>}
        {state === 'running' && <><div style={{ fontSize: 56, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{timeLeft.toFixed(1)}s</div><div style={{ fontSize: 18, color: '#555', marginTop: 8 }}>Keep tapping!</div></>}
        {state === 'done' && <><div style={{ fontSize: 14, color: '#888' }}>Your result</div><div style={{ fontSize: 56, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{sps}</div><div style={{ fontSize: 16, color: '#555', marginTop: 4 }}>taps per second</div></>}
      </div>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-label">Time</div><div className="stat-value" style={{ fontSize: 22 }}>{timeLeft.toFixed(1)}s</div></div>
        <div className="stat-card"><div className="stat-label">Taps</div><div className="stat-value" style={{ fontSize: 22 }}>{count}</div></div>
        <div className="stat-card"><div className="stat-label">TPS</div><div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{sps}</div></div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 16, justifyContent: 'center' }}>
        {state === 'done' && <button className="btn-teal" onClick={reset}>Try Again</button>}
        {state !== 'done' && <button className="btn-outline" onClick={reset}>Reset</button>}
      </div>
    </div>
  )
}
