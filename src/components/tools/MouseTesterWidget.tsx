'use client'
import { useState, useEffect, useRef } from 'react'

const BUTTONS = [
  { id: 0, label: 'Left Click', icon: '◧' },
  { id: 1, label: 'Middle Click', icon: '⬜' },
  { id: 2, label: 'Right Click', icon: '◨' },
  { id: 3, label: 'Back Button', icon: '◁' },
  { id: 4, label: 'Forward Button', icon: '▷' },
]

export default function MouseTesterWidget() {
  const [pressed, setPressed] = useState<Set<number>>(new Set())
  const [tested, setTested] = useState<Set<number>>(new Set())
  const [scrollDir, setScrollDir] = useState<'up'|'down'|null>(null)
  const [scrollCount, setScrollCount] = useState(0)
  const scrollTimer = useRef<ReturnType<typeof setTimeout>|null>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      e.preventDefault()
      setPressed(p => new Set([...p, e.button]))
      setTested(t => new Set([...t, e.button]))
    }
    const onUp = (e: MouseEvent) => {
      setPressed(p => { const n = new Set(p); n.delete(e.button); return n })
    }
    const onScroll = (e: WheelEvent) => {
      setScrollDir(e.deltaY > 0 ? 'down' : 'up')
      setScrollCount(c => c + 1)
      if (scrollTimer.current) clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => setScrollDir(null), 500)
    }
    const onCtx = (e: MouseEvent) => e.preventDefault()
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('wheel', onScroll)
    window.addEventListener('contextmenu', onCtx)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('wheel', onScroll)
      window.removeEventListener('contextmenu', onCtx)
    }
  }, [])

  const reset = () => { setPressed(new Set()); setTested(new Set()); setScrollCount(0); setScrollDir(null) }

  return (
    <div className="tool-card">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12, marginBottom: 24 }}>
        {BUTTONS.map(btn => {
          const isPressed = pressed.has(btn.id)
          const isTested = tested.has(btn.id)
          return (
            <div key={btn.id} style={{
              background: isPressed ? '#1D9E75' : isTested ? '#E1F5EE' : '#F4F6F8',
              border: `2px solid ${isPressed ? '#0F6E56' : isTested ? '#1D9E75' : '#E2E8F0'}`,
              borderRadius: 12,
              padding: '20px 12px',
              textAlign: 'center',
              transition: 'all 0.1s',
              userSelect: 'none',
            }}>
              <div style={{ fontSize: 28, marginBottom: 6, color: isPressed ? '#fff' : isTested ? '#085041' : '#aaa' }}>{btn.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: isPressed ? '#fff' : isTested ? '#085041' : '#555' }}>{btn.label}</div>
              <div style={{ fontSize: 11, marginTop: 4, color: isPressed ? '#E1F5EE' : isTested ? '#1D9E75' : '#aaa' }}>
                {isPressed ? 'Pressed' : isTested ? '✓ Working' : 'Not tested'}
              </div>
            </div>
          )
        })}
        {/* Scroll wheel */}
        <div style={{
          background: scrollDir ? '#1D9E75' : scrollCount > 0 ? '#E1F5EE' : '#F4F6F8',
          border: `2px solid ${scrollDir ? '#0F6E56' : scrollCount > 0 ? '#1D9E75' : '#E2E8F0'}`,
          borderRadius: 12,
          padding: '20px 12px',
          textAlign: 'center',
          transition: 'all 0.1s',
          userSelect: 'none',
        }}>
          <div style={{ fontSize: 28, marginBottom: 6, color: scrollDir ? '#fff' : scrollCount > 0 ? '#085041' : '#aaa' }}>
            {scrollDir === 'up' ? '↑' : scrollDir === 'down' ? '↓' : '↕'}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: scrollDir ? '#fff' : scrollCount > 0 ? '#085041' : '#555' }}>Scroll Wheel</div>
          <div style={{ fontSize: 11, marginTop: 4, color: scrollDir ? '#E1F5EE' : scrollCount > 0 ? '#1D9E75' : '#aaa' }}>
            {scrollCount > 0 ? `✓ ${scrollCount} scrolls` : 'Scroll to test'}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', background: '#F4F6F8', borderRadius: 10, padding: 16, marginBottom: 16, fontSize: 14, color: '#555' }}>
        {tested.size === 0 && scrollCount === 0 ? 'Click any mouse button or scroll to test it' :
         tested.size >= 3 ? `✓ ${tested.size} buttons tested + ${scrollCount} scrolls - mouse looks healthy!` :
         `${tested.size} button${tested.size !== 1 ? 's' : ''} tested - keep going`}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="btn-outline" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
