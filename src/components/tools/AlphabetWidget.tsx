'use client'
import { useState, useRef, useCallback } from 'react'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

export default function AlphabetWidget() {
  const [typed, setTyped] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [errors, setErrors] = useState(0)
  const startRef = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase()
    if (done) return
    if (!started && val.length > 0) { setStarted(true); startRef.current = performance.now() }
    const expected = ALPHABET[val.length - 1]
    const lastChar = val[val.length - 1]
    if (lastChar !== expected) setErrors(er => er + 1)
    setTyped(val)
    if (val === ALPHABET) {
      const t = performance.now() - startRef.current
      setElapsed(t)
      setDone(true)
    }
  }, [done, started])

  const reset = () => { setTyped(''); setStarted(false); setDone(false); setElapsed(0); setErrors(0); inputRef.current?.focus() }

  const nextExpected = ALPHABET[typed.length] || ''

  return (
    <div className="tool-card">
      {/* Alphabet display */}
      <div style={{ background: '#F4F6F8', borderRadius: 12, padding: '24px 20px', marginBottom: 20, fontFamily: 'monospace', fontSize: 22, letterSpacing: 6, textAlign: 'center', lineHeight: 1.8 }}>
        {ALPHABET.split('').map((letter, i) => {
          const isTyped = i < typed.length
          const isCurrent = i === typed.length
          const isCorrect = isTyped && typed[i] === letter
          const isWrong = isTyped && typed[i] !== letter
          return (
            <span key={letter} style={{
              color: isWrong ? '#D85A30' : isTyped ? '#1D9E75' : isCurrent ? '#1a1a1a' : '#ccc',
              fontWeight: isCurrent ? 800 : isTyped ? 600 : 400,
              textDecoration: isCurrent ? 'underline' : 'none',
              textDecorationColor: '#1D9E75',
            }}>
              {letter}
            </span>
          )
        })}
      </div>

      {!done ? (
        <>
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 18, color: '#888' }}>Next: </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: '#1D9E75', fontFamily: 'monospace' }}>{nextExpected.toUpperCase()}</span>
          </div>
          <input
            ref={inputRef}
            value={typed}
            onChange={handleChange}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="Start typing a, b, c..."
            style={{ width: '100%', padding: '12px 16px', border: '2px solid', borderColor: started ? '#1D9E75' : '#E2E8F0', borderRadius: 8, fontSize: 16, outline: 'none', textAlign: 'center', fontFamily: 'monospace', color: '#1a1a1a', marginBottom: 12 }}
          />
          <div className="stat-grid">
            <div className="stat-card"><div className="stat-label">Progress</div><div className="stat-value" style={{ fontSize: 22 }}>{typed.length}/26</div></div>
            <div className="stat-card"><div className="stat-label">Time</div><div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{started ? ((performance.now() - startRef.current) / 1000).toFixed(2) + 's' : '—'}</div></div>
            <div className="stat-card"><div className="stat-label">Errors</div><div className="stat-value" style={{ fontSize: 22, color: errors > 0 ? '#D85A30' : undefined }}>{errors}</div></div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: 14, color: '#888', marginBottom: 6 }}>Your time</div>
          <div style={{ fontSize: 64, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{(elapsed / 1000).toFixed(3)}s</div>
          <div style={{ fontSize: 14, color: '#555', marginTop: 6, marginBottom: 20 }}>
            {errors === 0 ? '✓ Perfect — no errors!' : `${errors} error${errors > 1 ? 's' : ''} made`}
          </div>
          <button className="btn-teal" onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  )
}
