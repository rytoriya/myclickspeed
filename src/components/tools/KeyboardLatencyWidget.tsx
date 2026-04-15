'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function KeyboardLatencyWidget() {
  const [state, setState] = useState<'idle' | 'waiting' | 'ready' | 'done'>('idle')
  const [times, setTimes] = useState<number[]>([])
  const [last, setLast] = useState(0)
  const [early, setEarly] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const readyRef = useRef(0)

  const startRound = useCallback(() => {
    setState('waiting')
    setEarly(false)
    const delay = 1500 + Math.random() * 2500
    timerRef.current = setTimeout(() => {
      setState('ready')
      readyRef.current = performance.now()
    }, delay)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      e.preventDefault()
      if (state === 'idle') { startRound(); return }
      if (state === 'waiting') { setEarly(true); setState('idle'); if (timerRef.current) clearTimeout(timerRef.current); return }
      if (state === 'ready') {
        const rt = Math.round(performance.now() - readyRef.current)
        setLast(rt)
        setTimes(t => [...t, rt])
        setState('done')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state, startRound])

  const avg = times.length > 0 ? Math.round(times.reduce((a, b) => a + b) / times.length) : 0
  const best = times.length > 0 ? Math.min(...times) : 0

  const bgColor = state === 'ready' ? '#1D9E75' : state === 'waiting' ? '#F4F6F8' : '#F4F6F8'
  const textColor = state === 'ready' ? '#fff' : '#1a1a1a'

  return (
    <div className="tool-card">
      <div className="stat-grid" style={{ marginBottom: 20, marginTop: 0 }}>
        <div className="stat-card"><div className="stat-label">Last</div><div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{last > 0 ? `${last}ms` : '-'}</div></div>
        <div className="stat-card"><div className="stat-label">Average</div><div className="stat-value" style={{ fontSize: 22 }}>{avg > 0 ? `${avg}ms` : '-'}</div></div>
        <div className="stat-card"><div className="stat-label">Best</div><div className="stat-value" style={{ fontSize: 22, color: '#378ADD' }}>{best > 0 ? `${best}ms` : '-'}</div></div>
      </div>

      <div style={{ background: bgColor, borderRadius: 12, padding: '52px 20px', textAlign: 'center', marginBottom: 16, transition: 'background 0.1s', cursor: 'default', border: `2px dashed ${state === 'ready' ? '#085041' : '#E2E8F0'}` }}>
        {state === 'idle' && <><div style={{ fontSize: 32, marginBottom: 10 }}>⌨️</div><div style={{ fontSize: 18, fontWeight: 700 }}>Press any key to start</div><div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Wait for the green signal, then press any key</div></>}
        {state === 'waiting' && <><div style={{ fontSize: 40, marginBottom: 8 }}>⏳</div><div style={{ fontSize: 20, fontWeight: 700 }}>Wait for it…</div><div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Don&apos;t press yet!</div></>}
        {state === 'ready' && <><div style={{ fontSize: 40, marginBottom: 8 }}>⚡</div><div style={{ fontSize: 28, fontWeight: 800, color: textColor }}>PRESS NOW!</div></>}
        {state === 'done' && <><div style={{ fontSize: 52, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{last}ms</div><div style={{ fontSize: 16, color: '#555', marginTop: 6 }}>Press any key to test again</div></>}
        {early && <div style={{ fontSize: 16, color: '#D85A30', fontWeight: 600 }}>Too early! Wait for the green signal.</div>}
      </div>

      {times.length > 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          {times.map((t, i) => (
            <span key={i} style={{ fontSize: 12, padding: '3px 10px', borderRadius: 99, background: t === best ? '#E1F5EE' : '#F4F6F8', color: t === best ? '#085041' : '#555', fontWeight: t === best ? 700 : 400 }}>
              {t}ms{t === best ? ' 🏆' : ''}
            </span>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center' }}>
        <button className="btn-outline" onClick={() => { setTimes([]); setLast(0); setState('idle') }}>Reset</button>
      </div>
    </div>
  )
}
