'use client'
import { useState, useEffect } from 'react'

export default function TallyWidget() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [history, setHistory] = useState<number[]>([])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '+' || e.key === '=') inc()
      if (e.key === '-') dec()
      if (e.key === 'r' || e.key === 'R') reset()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const inc = () => { setHistory(h => [...h.slice(-19), count]); setCount(c => c + step) }
  const dec = () => { setHistory(h => [...h.slice(-19), count]); setCount(c => c - step) }
  const reset = () => { setHistory([]); setCount(0) }
  const undo = () => { if (history.length === 0) return; setCount(history[history.length - 1]); setHistory(h => h.slice(0, -1)) }

  return (
    <div className="tool-card" style={{ textAlign: 'center' }}>
      {/* Count display */}
      <div
        onClick={inc}
        style={{
          background: '#F4F6F8',
          borderRadius: 16,
          padding: '40px 20px',
          cursor: 'pointer',
          userSelect: 'none',
          marginBottom: 20,
          transition: 'background 0.1s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#E1F5EE')}
        onMouseLeave={e => (e.currentTarget.style.background = '#F4F6F8')}
      >
        <div style={{ fontSize: 80, fontWeight: 800, color: '#1D9E75', lineHeight: 1 }}>{count}</div>
        <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>Click to count up</div>
      </div>

      {/* Step selector */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, color: '#888', alignSelf: 'center' }}>Step:</span>
        {[1, 2, 5, 10, 100].map(s => (
          <button key={s} onClick={() => setStep(s)} style={{
            padding: '5px 14px', borderRadius: 99, border: `1.5px solid ${step === s ? '#1D9E75' : '#E2E8F0'}`,
            background: step === s ? '#1D9E75' : '#fff', color: step === s ? '#fff' : '#555',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>+{s}</button>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn-teal" onClick={inc}>+ Add {step}</button>
        <button className="btn-outline" onClick={dec}>− Subtract {step}</button>
        <button className="btn-outline" onClick={undo} disabled={history.length === 0} style={{ opacity: history.length === 0 ? 0.4 : 1 }}>↩ Undo</button>
        <button className="btn-outline" onClick={reset}>Reset</button>
      </div>

      <div style={{ fontSize: 12, color: '#aaa', marginTop: 16 }}>
        Keyboard: <strong>+</strong> to add · <strong>-</strong> to subtract · <strong>R</strong> to reset
      </div>
    </div>
  )
}
