'use client'
import { useState, useEffect, useRef } from 'react'

export default function PollingRateClient() {
  const [hz, setHz] = useState(0)
  const [running, setRunning] = useState(false)
  const events = useRef<number[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!running) return
    const onMove = () => events.current.push(performance.now())
    window.addEventListener('mousemove', onMove)
    timerRef.current = setInterval(() => {
      const now = performance.now()
      const recent = events.current.filter(t => t > now - 1000)
      setHz(recent.length)
      events.current = recent
    }, 200)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [running])

  const rounded = hz >= 3500 ? 4000 : hz >= 1800 ? 2000 : hz >= 900 ? 1000 : hz >= 450 ? 500 : hz >= 200 ? 250 : 125

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ background: '#F4F6F8', borderRadius: 12, padding: '40px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 80, fontWeight: 800, color: running && hz > 0 ? '#1D9E75' : '#aaa', lineHeight: 1 }}>
          {running && hz > 0 ? rounded : '-'}
        </div>
        <div style={{ fontSize: 18, color: '#555', marginTop: 8 }}>Hz polling rate</div>
        {running && hz > 0 && <div style={{ fontSize: 13, color: '#888', marginTop: 6 }}>Raw: {hz} events/sec - move mouse continuously</div>}
        {!running && <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>Click start then move your mouse continuously</div>}
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {!running ? (
          <button className="btn-teal" onClick={() => { events.current = []; setRunning(true) }}>Start Test</button>
        ) : (
          <button className="btn-outline" onClick={() => { setRunning(false); setHz(0) }}>Stop</button>
        )}
      </div>
    </div>
  )
}
