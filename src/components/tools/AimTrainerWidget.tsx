'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

const DURATION = 30
const TARGET_SIZE = 52

type Target = { id: number; x: number; y: number; size: number }

function randTarget(w: number, h: number): Target {
  const s = TARGET_SIZE - Math.random() * 20
  const pad = s
  return { id: Math.random(), x: pad + Math.random() * (w - pad * 2), y: pad + Math.random() * (h - pad * 2), size: s }
}

export default function AimTrainerWidget() {
  const [state, setState] = useState<'idle' | 'running' | 'done'>('idle')
  const [targets, setTargets] = useState<Target[]>([])
  const [score, setScore] = useState(0)
  const [misses, setMisses] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const [reactionTimes, setReactionTimes] = useState<number[]>([])
  const areaRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startRef = useRef(0)
  const targetSpawnRef = useRef(0)

  const spawnTarget = useCallback(() => {
    if (!areaRef.current) return
    const { width, height } = areaRef.current.getBoundingClientRect()
    targetSpawnRef.current = Date.now()
    setTargets([randTarget(width, height)])
  }, [])

  const startGame = useCallback(() => {
    setState('running')
    setScore(0); setMisses(0); setTimeLeft(DURATION); setReactionTimes([])
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
    const rt = Date.now() - targetSpawnRef.current
    setScore(s => s + 1)
    setReactionTimes(r => [...r, rt])
    spawnTarget()
  }

  const missClick = () => {
    if (state !== 'running') return
    setMisses(m => m + 1)
  }

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setState('idle'); setTargets([]); setScore(0); setMisses(0); setTimeLeft(DURATION); setReactionTimes([])
  }

  const total = score + misses
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 100
  const avgReaction = reactionTimes.length > 0 ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0

  return (
    <div className="tool-card">
      <div className="stat-grid" style={{ marginBottom: 16, marginTop: 0 }}>
        <div className="stat-card"><div className="stat-label">Time</div><div className="stat-value" style={{ fontSize: 22, color: timeLeft < 10 ? '#D85A30' : undefined }}>{timeLeft.toFixed(1)}s</div></div>
        <div className="stat-card"><div className="stat-label">Score</div><div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{score}</div></div>
        <div className="stat-card"><div className="stat-label">Accuracy</div><div className="stat-value" style={{ fontSize: 22 }}>{accuracy}%</div></div>
      </div>

      <div
        ref={areaRef}
        onClick={state === 'idle' ? startGame : missClick}
        style={{ background: '#F4F6F8', borderRadius: 12, height: 340, position: 'relative', cursor: state === 'idle' ? 'pointer' : 'crosshair', overflow: 'hidden', marginBottom: 12, userSelect: 'none' }}
      >
        {state === 'idle' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🎯</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>Click to Start</div>
            <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>30 second aim training session</div>
          </div>
        )}
        {state === 'done' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ fontSize: 14, color: '#888' }}>Session complete</div>
            <div style={{ fontSize: 52, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: 16, color: '#555' }}>hits · {accuracy}% accuracy</div>
            {avgReaction > 0 && <div style={{ fontSize: 13, color: '#888' }}>Avg reaction: {avgReaction}ms</div>}
          </div>
        )}
        {targets.map(t => (
          <div
            key={t.id}
            onClick={hitTarget}
            style={{
              position: 'absolute',
              left: t.x - t.size / 2,
              top: t.y - t.size / 2,
              width: t.size,
              height: t.size,
              borderRadius: '50%',
              background: '#1D9E75',
              border: '3px solid #085041',
              cursor: 'crosshair',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'aimPop 0.12s ease-out',
            }}
          >
            <div style={{ width: t.size * 0.25, height: t.size * 0.25, borderRadius: '50%', background: '#fff' }} />
          </div>
        ))}
      </div>
      <style>{`@keyframes aimPop { from { transform: scale(0.3); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {state === 'done' && <button className="btn-teal" onClick={reset}>Play Again</button>}
        {state === 'running' && <button className="btn-outline" onClick={reset}>Reset</button>}
      </div>
    </div>
  )
}
