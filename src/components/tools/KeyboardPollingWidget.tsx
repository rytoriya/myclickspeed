'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function KeyboardPollingWidget() {
  const [pollingRate, setPollingRate] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'testing' | 'done'>('idle')
  const [progress, setProgress] = useState(0)
  const [keyPresses, setKeyPresses] = useState(0)
  const [rating, setRating] = useState('')
  const timestamps = useRef<number[]>([])
  const startTime = useRef<number>(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const TEST_DURATION = 5000

  const getRating = (hz: number) => {
    if (hz >= 950) return { label: 'Excellent (1000Hz)', color: '#1D9E75' }
    if (hz >= 450) return { label: 'Good (500Hz)', color: '#3B82F6' }
    if (hz >= 220) return { label: 'Standard (250Hz)', color: '#F59E0B' }
    return { label: 'Low (125Hz or below)', color: '#EF4444' }
  }

  const startTest = useCallback(() => {
    timestamps.current = []
    startTime.current = Date.now()
    setStatus('testing')
    setProgress(0)
    setKeyPresses(0)
    setPollingRate(null)
    setRating('')

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime.current
      const pct = Math.min((elapsed / TEST_DURATION) * 100, 100)
      setProgress(pct)
      if (elapsed >= TEST_DURATION) {
        clearInterval(timerRef.current!)
        finishTest()
      }
    }, 50)
  }, [])

  const finishTest = useCallback(() => {
    const ts = timestamps.current
    if (ts.length < 10) {
      setStatus('done')
      setPollingRate(0)
      setRating('Not enough data — press a key repeatedly during the test')
      return
    }
    const intervals: number[] = []
    for (let i = 1; i < ts.length; i++) {
      const diff = ts[i] - ts[i - 1]
      if (diff > 0 && diff < 100) intervals.push(diff)
    }
    if (!intervals.length) {
      setStatus('done')
      setPollingRate(0)
      setRating('Not enough repeated presses detected')
      return
    }
    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length
    const hz = Math.round(1000 / avgInterval)
    const capped = Math.min(hz, 1100)
    const r = getRating(capped)
    setPollingRate(capped)
    setRating(r.label)
    setStatus('done')
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (status !== 'testing') return
      e.preventDefault()
      timestamps.current.push(Date.now())
      setKeyPresses(p => p + 1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [status])

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const r = pollingRate ? getRating(pollingRate) : null

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16, padding: 32, marginBottom: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        {status === 'idle' && (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⌨️</div>
            <p style={{ color: '#666', fontSize: 15, marginBottom: 20 }}>
              Click Start, then press any key repeatedly as fast as you can for 5 seconds.
              The tool measures how frequently your keyboard reports key events to detect its polling rate.
            </p>
            <button
              onClick={startTest}
              style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 10, padding: '14px 40px', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
            >
              Start Test
            </button>
          </>
        )}

        {status === 'testing' && (
          <>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#1D9E75' }}>
              Press any key repeatedly!
            </div>
            <div style={{ background: '#F4F6F8', borderRadius: 99, height: 12, marginBottom: 16, overflow: 'hidden' }}>
              <div style={{ background: '#1D9E75', height: '100%', width: `${progress}%`, transition: 'width 0.05s', borderRadius: 99 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#1a1a1a' }}>{keyPresses}</div>
                <div style={{ fontSize: 13, color: '#888' }}>Key Presses</div>
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#1a1a1a' }}>{Math.round(progress / 100 * 5)}s</div>
                <div style={{ fontSize: 13, color: '#888' }}>Elapsed</div>
              </div>
            </div>
          </>
        )}

        {status === 'done' && (
          <>
            <div style={{ fontSize: 48, marginBottom: 8 }}>📡</div>
            {pollingRate && pollingRate > 0 ? (
              <>
                <div style={{ fontSize: 56, fontWeight: 800, color: r?.color, marginBottom: 4 }}>
                  ~{pollingRate}Hz
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: r?.color, marginBottom: 8 }}>
                  {r?.label}
                </div>
                <div style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>
                  Based on {keyPresses} key presses detected
                </div>
              </>
            ) : (
              <div style={{ fontSize: 16, color: '#888', marginBottom: 20 }}>{rating}</div>
            )}
            <button
              onClick={startTest}
              style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 32px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
            >
              Test Again
            </button>
          </>
        )}
      </div>

      {status === 'done' && pollingRate && pollingRate > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginTop: 16 }}>
          {[
            { hz: '125Hz', desc: 'Budget keyboards', color: '#EF4444' },
            { hz: '250Hz', desc: 'Standard keyboards', color: '#F59E0B' },
            { hz: '500Hz', desc: 'Gaming keyboards', color: '#3B82F6' },
            { hz: '1000Hz', desc: 'High-end gaming', color: '#1D9E75' },
          ].map(tier => (
            <div key={tier.hz} style={{ background: '#F4F6F8', borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: tier.color }}>{tier.hz}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{tier.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}