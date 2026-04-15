'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import { CPS_TIMES } from '@/lib/tools'
import { useRouter } from 'next/navigation'

type Props = {
  seconds: number
  slug: string
  type: 'standard' | 'jitter' | 'kohi' | 'butterfly' | 'right-click'
}

type State = 'idle' | 'running' | 'done'

const SPECIAL_SLUGS = ['jitter', 'kohi', 'butterfly', 'right-click']
const TIME_BUTTONS = [1, 2, 5, 10, 15, 20, 30, 50, 60, 100]

function getRating(cps: number): { label: string; color: string } {
  if (cps < 3) return { label: 'Beginner', color: '#888' }
  if (cps < 6) return { label: 'Average', color: '#BA7517' }
  if (cps < 9) return { label: 'Good', color: '#1D9E75' }
  if (cps < 12) return { label: 'Fast', color: '#378ADD' }
  if (cps < 15) return { label: 'Very Fast', color: '#7F77DD' }
  return { label: 'Insane!', color: '#D85A30' }
}

export default function CpsWidget({ seconds, slug, type }: Props) {
  const router = useRouter()
  const [state, setState] = useState<State>('idle')
  const [clicks, setClicks] = useState(0)
  const [timeLeft, setTimeLeft] = useState(seconds)
  const [cps, setCps] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startRef = useRef<number>(0)

  useEffect(() => {
    setState('idle')
    setClicks(0)
    setTimeLeft(seconds)
    setCps(0)
  }, [seconds, slug])

  const startTest = useCallback(() => {
    if (state === 'running') return
    setState('running')
    setClicks(0)
    setCps(0)
    setTimeLeft(seconds)
    startRef.current = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / 1000
      const remaining = Math.max(0, seconds - elapsed)
      setTimeLeft(remaining)
      if (remaining <= 0) {
        clearInterval(intervalRef.current!)
        setState('done')
      }
    }, 50)
  }, [state, seconds])

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (type === 'right-click') return
    e.preventDefault()
    if (state === 'idle') { startTest(); setClicks(1); return }
    if (state !== 'running') return
    const newClicks = clicks + 1
    const elapsed = (Date.now() - startRef.current) / 1000 || 0.001
    setClicks(newClicks)
    setCps(parseFloat((newClicks / elapsed).toFixed(1)))
  }, [state, clicks, startTest, type])

  const handleRightClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    if (type !== 'right-click') return
    if (state === 'idle') { startTest(); setClicks(1); return }
    if (state !== 'running') return
    const newClicks = clicks + 1
    const elapsed = (Date.now() - startRef.current) / 1000 || 0.001
    setClicks(newClicks)
    setCps(parseFloat((newClicks / elapsed).toFixed(1)))
  }, [state, clicks, startTest, type])

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setState('idle')
    setClicks(0)
    setTimeLeft(seconds)
    setCps(0)
  }

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  const finalCps = state === 'done' ? parseFloat((clicks / seconds).toFixed(1)) : cps
  const rating = getRating(finalCps)
  const progress = state === 'running' ? ((seconds - timeLeft) / seconds) * 100 : state === 'done' ? 100 : 0

  return (
    <div className="tool-card">
      {/* Time selector buttons */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: '#888', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Select time
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {TIME_BUTTONS.map(t => (
            <button
              key={t}
              onClick={() => router.push(`/cps-test/${t}`)}
              style={{
                padding: '6px 14px',
                borderRadius: 99,
                border: `1.5px solid ${seconds === t && !SPECIAL_SLUGS.includes(slug) ? '#1D9E75' : '#E2E8F0'}`,
                background: seconds === t && !SPECIAL_SLUGS.includes(slug) ? '#1D9E75' : '#fff',
                color: seconds === t && !SPECIAL_SLUGS.includes(slug) ? '#fff' : '#555',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {t}s
            </button>
          ))}
          {/* Special technique buttons */}
          {[
            { slug: 'jitter', label: 'Jitter' },
            { slug: 'kohi', label: 'Kohi' },
            { slug: 'butterfly', label: 'Butterfly' },
          ].map(btn => (
            <button
              key={btn.slug}
              onClick={() => router.push(`/cps-test/${btn.slug}`)}
              style={{
                padding: '6px 14px',
                borderRadius: 99,
                border: `1.5px solid ${slug === btn.slug ? '#7F77DD' : '#E2E8F0'}`,
                background: slug === btn.slug ? '#7F77DD' : '#fff',
                color: slug === btn.slug ? '#fff' : '#555',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: '#F4F6F8', borderRadius: 99, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: state === 'done' ? '#1D9E75' : '#1D9E75',
          borderRadius: 99,
          transition: 'width 0.05s linear',
        }} />
      </div>

      {/* Click area */}
      <div
        onClick={handleClick}
        onContextMenu={handleRightClick}
        style={{
          background: state === 'running' ? '#E1F5EE' : state === 'done' ? '#F4F6F8' : '#F4F6F8',
          border: `2px dashed ${state === 'running' ? '#1D9E75' : '#E2E8F0'}`,
          borderRadius: 12,
          padding: '40px 20px',
          textAlign: 'center',
          cursor: state === 'done' ? 'default' : 'pointer',
          userSelect: 'none',
          transition: 'all 0.15s',
          marginBottom: 20,
          minHeight: 140,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {state === 'idle' && (
          <>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🖱️</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>
              {type === 'right-click' ? 'Right-click here to start' : 'Click here to start'}
            </div>
            <div style={{ fontSize: 14, color: '#888' }}>
              {seconds} second test • Click as fast as you can
            </div>
          </>
        )}
        {state === 'running' && (
          <>
            <div style={{ fontSize: 48, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>
              {timeLeft.toFixed(1)}s
            </div>
            <div style={{ fontSize: 16, color: '#555', marginTop: 8 }}>Keep clicking!</div>
          </>
        )}
        {state === 'done' && (
          <>
            <div style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>Your result</div>
            <div style={{ fontSize: 52, fontWeight: 800, color: rating.color, lineHeight: 1 }}>
              {finalCps}
            </div>
            <div style={{ fontSize: 16, color: '#555', marginTop: 4 }}>clicks per second</div>
            <div style={{
              marginTop: 10,
              display: 'inline-block',
              padding: '4px 16px',
              borderRadius: 99,
              background: rating.color + '22',
              color: rating.color,
              fontSize: 14,
              fontWeight: 600,
            }}>
              {rating.label}
            </div>
          </>
        )}
      </div>

      {/* Stats row */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Time</div>
          <div className="stat-value" style={{ fontSize: 22 }}>
            {state === 'idle' ? `${seconds}s` : state === 'running' ? `${timeLeft.toFixed(1)}s` : `${seconds}s`}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Clicks</div>
          <div className="stat-value" style={{ fontSize: 22 }}>{clicks}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">CPS</div>
          <div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{finalCps}</div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 10, marginTop: 16, justifyContent: 'center' }}>
        {state === 'done' && (
          <button className="btn-teal" onClick={reset}>Try Again</button>
        )}
        {state === 'idle' && (
          <button
            className="btn-teal"
            onClick={() => { startTest() }}
          >
            Start Test
          </button>
        )}
        {state !== 'idle' && (
          <button className="btn-outline" onClick={reset}>Reset</button>
        )}
      </div>
    </div>
  )
}
