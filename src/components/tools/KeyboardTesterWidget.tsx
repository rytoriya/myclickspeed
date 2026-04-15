'use client'
import { useState, useEffect } from 'react'

const KEY_ROWS = [
  ['Escape','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'],
  ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],
  ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash'],
  ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],
  ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight'],
  ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','MetaRight','ContextMenu','ControlRight'],
]

const KEY_LABELS: Record<string, string> = {
  Escape:'Esc',Backspace:'⌫',Tab:'Tab',CapsLock:'Caps',Enter:'Enter',
  ShiftLeft:'Shift',ShiftRight:'Shift',ControlLeft:'Ctrl',ControlRight:'Ctrl',
  AltLeft:'Alt',AltRight:'Alt',MetaLeft:'Win',MetaRight:'Win',
  Space:'Space',ContextMenu:'Menu',Backquote:'`',Minus:'-',Equal:'=',
  BracketLeft:'[',BracketRight:']',Backslash:'\\',Semicolon:';',Quote:"'",
  Comma:',',Period:'.',Slash:'/',
  F1:'F1',F2:'F2',F3:'F3',F4:'F4',F5:'F5',F6:'F6',
  F7:'F7',F8:'F8',F9:'F9',F10:'F10',F11:'F11',F12:'F12',
  Digit1:'1',Digit2:'2',Digit3:'3',Digit4:'4',Digit5:'5',
  Digit6:'6',Digit7:'7',Digit8:'8',Digit9:'9',Digit0:'0',
}

function getLabel(code: string) {
  if (KEY_LABELS[code]) return KEY_LABELS[code]
  if (code.startsWith('Key')) return code.slice(3)
  return code
}

function getWidth(code: string) {
  if (['Backspace','Tab','CapsLock','Enter','ShiftLeft','ShiftRight','Space','ControlLeft','ControlRight','AltLeft','AltRight'].includes(code)) return 'auto'
  return 36
}

function getMinWidth(code: string) {
  if (code === 'Space') return 200
  if (code === 'Backspace') return 72
  if (code === 'Tab') return 60
  if (code === 'CapsLock') return 68
  if (code === 'Enter') return 80
  if (code === 'ShiftLeft') return 96
  if (code === 'ShiftRight') return 96
  if (['ControlLeft','ControlRight','AltLeft','AltRight','MetaLeft','MetaRight','ContextMenu'].includes(code)) return 52
  return 36
}

type Props = { mechanical: boolean }

export default function KeyboardTesterWidget({ mechanical }: Props) {
  const [pressed, setPressed] = useState<Set<string>>(new Set())
  const [tested, setTested] = useState<Set<string>>(new Set())
  const [lastKey, setLastKey] = useState<string>('')

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      e.preventDefault()
      setPressed(p => new Set([...p, e.code]))
      setTested(t => new Set([...t, e.code]))
      setLastKey(e.code)
    }
    const onUp = (e: KeyboardEvent) => {
      setPressed(p => { const n = new Set(p); n.delete(e.code); return n })
    }
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => { window.removeEventListener('keydown', onDown); window.removeEventListener('keyup', onUp) }
  }, [])

  const reset = () => { setPressed(new Set()); setTested(new Set()); setLastKey('') }

  const totalKeys = KEY_ROWS.flat().length
  const testedCount = [...tested].filter(k => KEY_ROWS.flat().includes(k)).length

  return (
    <div className="tool-card">
      {/* Stats */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="stat-card" style={{ flex: 1, minWidth: 100 }}>
          <div className="stat-label">Tested</div>
          <div className="stat-value" style={{ fontSize: 22, color: '#1D9E75' }}>{testedCount} / {totalKeys}</div>
        </div>
        <div className="stat-card" style={{ flex: 2, minWidth: 160 }}>
          <div className="stat-label">Last Key Pressed</div>
          <div className="stat-value" style={{ fontSize: 18 }}>{lastKey ? getLabel(lastKey) : '-'}</div>
        </div>
        <button className="btn-outline" onClick={reset}>Reset</button>
      </div>

      {/* Keyboard */}
      <div style={{ background: '#F4F6F8', borderRadius: 12, padding: '20px 16px', overflowX: 'auto' }}>
        {KEY_ROWS.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 4, marginBottom: 4, justifyContent: 'center', flexWrap: 'nowrap' }}>
            {row.map(code => {
              const isPressed = pressed.has(code)
              const isTested = tested.has(code)
              return (
                <div
                  key={code}
                  style={{
                    minWidth: getMinWidth(code),
                    width: getWidth(code) === 'auto' ? undefined : getWidth(code),
                    height: 36,
                    borderRadius: 6,
                    border: `1.5px solid ${isPressed ? '#0F6E56' : isTested ? '#1D9E75' : '#D1D5DB'}`,
                    background: isPressed ? '#1D9E75' : isTested ? '#E1F5EE' : '#fff',
                    color: isPressed ? '#fff' : isTested ? '#085041' : '#555',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 600,
                    transition: 'all 0.08s',
                    userSelect: 'none',
                    cursor: 'default',
                    flexShrink: 0,
                  }}
                >
                  {getLabel(code)}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: '#888' }}>
        {mechanical ? 'Switch type is identified by keypress behavior' : 'Press keys to test them - green = tested, teal = currently held'}
      </div>
    </div>
  )
}
