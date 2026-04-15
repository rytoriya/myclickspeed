'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

const WORD_BANK = [
  'the','be','to','of','and','a','in','that','have','it','for','not','on','with','he',
  'as','you','do','at','this','but','his','by','from','they','we','say','her','she','or',
  'an','will','my','one','all','would','there','their','what','so','up','out','if','about',
  'who','get','which','go','me','when','make','can','like','time','no','just','him','know',
  'take','people','into','year','your','good','some','could','them','see','other','than',
  'then','now','look','only','come','its','over','think','also','back','after','use','two',
  'how','our','work','first','well','way','even','new','want','because','any','these','give',
  'day','most','us','great','between','need','large','often','hand','high','place','hold',
]

function generateWords(count = 60): string[] {
  return Array.from({ length: count }, () => WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)])
}

type Props = { mode: 'standard' | '1min' }

export default function TypingWidget({ mode }: Props) {
  const duration = mode === '1min' ? 60 : 30
  const [words] = useState(() => generateWords(80))
  const [input, setInput] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [errors, setErrors] = useState(0)
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(duration)
  const [currentWpm, setCurrentWpm] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)

  const finish = useCallback(() => {
    setFinished(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (started && !finished) {
      startTimeRef.current = Date.now()
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000
        const remaining = Math.max(0, duration - elapsed)
        setTimeLeft(remaining)
        const mins = elapsed / 60
        if (mins > 0) setCurrentWpm(Math.round(correctWords / mins))
        if (remaining <= 0) finish()
      }, 100)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [started, finished, correctWords, duration, finish])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (!started && val.length > 0) setStarted(true)
    if (finished) return
    if (val.endsWith(' ')) {
      const typed = val.trim()
      if (typed === words[wordIndex]) {
        setCorrectWords(c => c + 1)
      } else {
        setErrors(er => er + 1)
      }
      setWordIndex(i => i + 1)
      setInput('')
    } else {
      setInput(val)
    }
  }

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setInput('')
    setWordIndex(0)
    setCorrectWords(0)
    setErrors(0)
    setStarted(false)
    setFinished(false)
    setTimeLeft(duration)
    setCurrentWpm(0)
    inputRef.current?.focus()
  }

  const totalTyped = correctWords + errors
  const accuracy = totalTyped > 0 ? Math.round((correctWords / totalTyped) * 100) : 100
  const finalWpm = finished ? Math.round(correctWords / (duration / 60)) : currentWpm

  return (
    <div className="tool-card">
      {/* Stats row */}
      <div className="stat-grid" style={{ marginBottom: 20, marginTop: 0 }}>
        <div className="stat-card">
          <div className="stat-label">Time</div>
          <div className="stat-value" style={{ fontSize: 24, color: timeLeft < 10 ? '#D85A30' : undefined }}>
            {Math.ceil(timeLeft)}s
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">WPM</div>
          <div className="stat-value" style={{ fontSize: 24, color: '#1D9E75' }}>{finalWpm}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Accuracy</div>
          <div className="stat-value" style={{ fontSize: 24 }}>{accuracy}%</div>
        </div>
      </div>

      {/* Word display */}
      {!finished ? (
        <>
          <div style={{
            background: '#F4F6F8',
            borderRadius: 10,
            padding: '20px',
            fontSize: 18,
            lineHeight: 2,
            marginBottom: 16,
            userSelect: 'none',
            minHeight: 100,
            wordBreak: 'break-word',
          }}>
            {words.slice(0, wordIndex + 20).map((word, i) => {
              let color = '#888'
              if (i < wordIndex) color = '#1D9E75'
              if (i === wordIndex) color = '#1a1a1a'
              return (
                <span key={i} style={{
                  marginRight: 8,
                  color,
                  fontWeight: i === wordIndex ? 700 : 400,
                  textDecoration: i === wordIndex ? 'underline' : 'none',
                  textDecorationColor: '#1D9E75',
                }}>
                  {word}
                </span>
              )
            })}
          </div>
          <input
            ref={inputRef}
            value={input}
            onChange={handleInput}
            disabled={finished}
            placeholder={started ? '' : 'Start typing to begin…'}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: 16,
              border: '2px solid',
              borderColor: started ? '#1D9E75' : '#E2E8F0',
              borderRadius: 8,
              outline: 'none',
              background: '#fff',
              color: '#1a1a1a',
              marginBottom: 12,
            }}
          />
          <div style={{ fontSize: 13, color: '#888', textAlign: 'center' }}>
            Press <strong>Space</strong> after each word
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>Final Result</div>
          <div style={{ fontSize: 64, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{finalWpm}</div>
          <div style={{ fontSize: 18, color: '#555', marginTop: 4, marginBottom: 20 }}>words per minute</div>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 24 }}>
            <div><div style={{ fontSize: 12, color: '#888' }}>Accuracy</div><div style={{ fontSize: 22, fontWeight: 700 }}>{accuracy}%</div></div>
            <div><div style={{ fontSize: 12, color: '#888' }}>Correct words</div><div style={{ fontSize: 22, fontWeight: 700, color: '#1D9E75' }}>{correctWords}</div></div>
            <div><div style={{ fontSize: 12, color: '#888' }}>Errors</div><div style={{ fontSize: 22, fontWeight: 700, color: '#D85A30' }}>{errors}</div></div>
          </div>
          <button className="btn-teal" onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  )
}
