'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

const DURATION = 30
const TARGET_COUNT = 20
const TARGET_SIZE = 48

type Target = { id: number; x: number; y: number }

function randomTarget(w: number, h: number): Target {
  const pad = TARGET_SIZE
  return {
    id: Math.random(),
    x: pad + Math.random() * (w - pad * 2),
    y: pad + Math.random() * (h - pad * 2),
  }
}

export default function MouseAccuracyWidget() {
  const [state, setState] = useState<'idle'|'running'|'done'>('idle')
  const [targets, setTargets] = useState<Target[]>([])
  const [hits, setHits] = useState(0)
  const [misses, setMisses] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const areaRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval>|null>(null)
  const startRef = useRef(0)

  const spawnTarget = useCallback(() => {
    const el = areaRef.current
    if (!el) return
    const { width, height } = el.getBoundingClientRect()
    setTargets([randomTarget(width, height)])
  }, [])

  const startGame = useCallback(() => {
    setState('running')
    setHits(0); setMisses(0); setTimeLeft(DURATION)
    startRef.current = Date.now()
    spawnTarget()
    intervalRef.current = setInterval(() => {
      const rem = Math.max(0, DURATION - (Date.now() - startRef.current) / 1000)
      setTimeLeft(rem)
      if (rem <= 0) { clearInterval(intervalRef.current!); setState('done'); setTargets([]) }
    }, 50)
  }, [spawnTarget])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  const hitTarget = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (state !== 'running') return
    setHits(h => h + 1)
    spawnTarget()
  }

  const missClick = () => {
    if (state !== 'running') return
    setMisses(m => m + 1)
  }

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setState('idle'); setTargets([]); setHits(0); setMisses(0); setTimeLeft(DURATION)
  }

  const total = hits + misses
  const accuracy = total > 0 ? Math.round((hits / total) * 100) : 100

  return (
    <div className="tool-card">
      <div className="stat-grid" style={{ marginBottom: 16, marginTop: 0 }}>
        <div className="stat-card"><div className="stat-label">Time</div><div className="stat-value" style={{ fontSize: 22, color: timeLeft < 10 ? '#D85A30' : undefined }}>{timeLeft.toFixed(1)}s</div></div>
        <div className="stat-card"><div className="stat-label">Hits</div><div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{hits}</div></div>
        <div className="stat-card"><div className="stat-label">Accuracy</div><div className="stat-value" style={{ fontSize: 22 }}>{accuracy}%</div></div>
      </div>

      <div
        ref={areaRef}
        onClick={state === 'idle' ? startGame : missClick}
        style={{
          background: '#F4F6F8',
          borderRadius: 12,
          height: 320,
          position: 'relative',
          cursor: state === 'idle' ? 'pointer' : 'crosshair',
          overflow: 'hidden',
          marginBottom: 12,
          userSelect: 'none',
        }}
      >
        {state === 'idle' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🎯</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a' }}>Click to Start</div>
            <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>30 second accuracy test</div>
          </div>
        )}
        {state === 'done' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 14, color: '#888' }}>Final accuracy</div>
            <div style={{ fontSize: 64, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{accuracy}%</div>
            <div style={{ fontSize: 14, color: '#555', marginTop: 4 }}>{hits} hits · {misses} misses</div>
          </div>
        )}
        {targets.map(t => (
          <div
            key={t.id}
            onClick={hitTarget}
            style={{
              position: 'absolute',
              left: t.x - TARGET_SIZE / 2,
              top: t.y - TARGET_SIZE / 2,
              width: TARGET_SIZE,
              height: TARGET_SIZE,
              borderRadius: '50%',
              background: '#1D9E75',
              border: '3px solid #085041',
              cursor: 'crosshair',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'popIn 0.1s ease-out',
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff' }} />
          </div>
        ))}
      </div>

      <style>{`@keyframes popIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {state === 'done' && <button className="btn-teal" onClick={reset}>Play Again</button>}
        {state !== 'idle' && <button className="btn-outline" onClick={reset}>Reset</button>}
      </div>
    </div>
  )
}
