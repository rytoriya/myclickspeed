'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

type RateLabel = '125 Hz' | '250 Hz' | '500 Hz' | '1000 Hz' | '2000 Hz' | '4000 Hz' | 'Measuring...' | '-'

function detectRate(hz: number): { label: RateLabel; color: string; tip: string } {
  if (hz === 0) return { label: '-', color: '#aaa', tip: 'Move your mouse to start' }
  if (hz < 150) return { label: '125 Hz', color: '#D97706', tip: 'Basic - standard office mouse' }
  if (hz < 350) return { label: '250 Hz', color: '#D97706', tip: 'Below average for gaming' }
  if (hz < 700) return { label: '500 Hz', color: '#2563EB', tip: 'Good - common gaming standard' }
  if (hz < 1400) return { label: '1000 Hz', color: '#1D9E75', tip: 'Excellent - recommended for gaming' }
  if (hz < 2800) return { label: '2000 Hz', color: '#7C3AED', tip: 'High-end gaming mouse' }
  return { label: '4000 Hz', color: '#7C3AED', tip: 'Ultra high-end gaming mouse' }
}

export default function PollingRateClient() {
  const [running, setRunning] = useState(false)
  const [hz, setHz] = useState(0)
  const [history, setHistory] = useState<number[]>([])
  const [stable, setStable] = useState(false)
  const events = useRef<number[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = useCallback(() => {
    events.current = []
    setHz(0)
    setHistory([])
    setStable(false)
    setRunning(true)
  }, [])

  const stop = useCallback(() => {
    setRunning(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    if (!running) return

    const onMove = () => events.current.push(performance.now())
    window.addEventListener('mousemove', onMove)

    timerRef.current = setInterval(() => {
      const now = performance.now()
      const recent = events.current.filter(t => t > now - 1000)
      events.current = recent
      const count = recent.length
      setHz(count)
      setHistory(prev => {
        const next = [...prev, count].slice(-20)
        // stable if last 5 readings are within 15% of each other
        if (next.length >= 5) {
          const last5 = next.slice(-5).filter(v => v > 0)
          if (last5.length === 5) {
            const avg = last5.reduce((a, b) => a + b, 0) / 5
            const allClose = last5.every(v => Math.abs(v - avg) / avg < 0.15)
            setStable(allClose)
          }
        }
        return next
      })
    }, 250)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [running])

  const detected = detectRate(hz)
  const maxBar = Math.max(...history, 1000)

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Main reading */}
      <div style={{
        background: '#F4F6F8',
        borderRadius: 14,
        padding: '36px 24px 28px',
        marginBottom: 16,
      }}>
        {/* Big Hz number */}
        <div style={{ fontSize: 88, fontWeight: 800, color: running && hz > 0 ? detected.color : '#ccc', lineHeight: 1, marginBottom: 4 }}>
          {running && hz > 0 ? hz : '-'}
        </div>
        <div style={{ fontSize: 16, color: '#888', marginBottom: 20 }}>events / second</div>

        {/* Detected rate badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <div style={{
            background: running && hz > 0 ? detected.color + '18' : '#F0F0F0',
            border: `2px solid ${running && hz > 0 ? detected.color : '#E2E8F0'}`,
            borderRadius: 99,
            padding: '8px 28px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: running && hz > 0 ? detected.color : '#aaa' }}>
              {running && hz > 0 ? detected.label : 'Not started'}
            </span>
            {stable && running && hz > 0 && (
              <span style={{ fontSize: 11, fontWeight: 700, background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '2px 8px' }}>
                STABLE
              </span>
            )}
          </div>
        </div>

        <div style={{ fontSize: 13, color: '#888' }}>
          {running && hz > 0 ? detected.tip : 'Click Start Test, then move your mouse continuously in this area'}
        </div>
      </div>

      {/* History bars */}
      {history.length > 1 && (
        <div style={{ background: '#F4F6F8', borderRadius: 12, padding: '16px 20px', marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 10, textAlign: 'left' }}>Polling rate history</div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 56 }}>
            {history.map((val, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: val > 0 ? `${Math.max(8, (val / maxBar) * 56)}px` : 4,
                  background: val > 0 ? detected.color : '#E2E8F0',
                  borderRadius: 3,
                  opacity: 0.5 + (i / history.length) * 0.5,
                  transition: 'height 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Common rates reference */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 20 }}>
        {[
          { hz: 125, label: '125 Hz', color: '#D97706', note: 'Basic' },
          { hz: 500, label: '500 Hz', color: '#2563EB', note: 'Good' },
          { hz: 1000, label: '1000 Hz', color: '#1D9E75', note: 'Best' },
          { hz: 4000, label: '4000 Hz', color: '#7C3AED', note: 'Elite' },
        ].map(rate => {
          const isDetected = running && hz > 0 && detectRate(hz).label === rate.label
          return (
            <div key={rate.hz} style={{
              background: isDetected ? rate.color + '18' : '#F8FAFB',
              border: `1.5px solid ${isDetected ? rate.color : '#E2E8F0'}`,
              borderRadius: 10,
              padding: '10px 6px',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: isDetected ? rate.color : '#888' }}>{rate.label}</div>
              <div style={{ fontSize: 11, color: '#aaa', marginTop: 2 }}>{rate.note}</div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {!running ? (
          <button className="btn-teal" onClick={start}>Start Test</button>
        ) : (
          <>
            <button className="btn-outline" onClick={stop}>Stop</button>
            <button className="btn-teal" onClick={start}>Restart</button>
          </>
        )}
      </div>
    </div>
  )
}
