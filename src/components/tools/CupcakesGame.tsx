'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

const CUPCAKES: Record<number, { emoji: string; name: string; bg: string; color: string }> = {
  2:    { emoji: '🧁', name: 'Vanilla',    bg: '#FFF9C4', color: '#5D4037' },
  4:    { emoji: '🍫', name: 'Chocolate',  bg: '#D7CCC8', color: '#3E2723' },
  8:    { emoji: '🍓', name: 'Strawberry', bg: '#FFCDD2', color: '#B71C1C' },
  16:   { emoji: '🍋', name: 'Lemon',      bg: '#FFF9C4', color: '#F57F17' },
  32:   { emoji: '🌿', name: 'Mint',       bg: '#C8E6C9', color: '#1B5E20' },
  64:   { emoji: '🫐', name: 'Blueberry',  bg: '#C5CAE9', color: '#1A237E' },
  128:  { emoji: '🍒', name: 'Cherry',     bg: '#F8BBD9', color: '#880E4F' },
  256:  { emoji: '🍪', name: 'Oreo',       bg: '#424242', color: '#ffffff' },
  512:  { emoji: '🍮', name: 'Caramel',    bg: '#FFE0B2', color: '#E65100' },
  1024: { emoji: '🎂', name: 'Red Velvet', bg: '#FFCDD2', color: '#B71C1C' },
  2048: { emoji: '🎉', name: 'Birthday',   bg: '#F3E5F5', color: '#4A148C' },
  4096: { emoji: '🌌', name: 'Galaxy',     bg: '#1A1A2E', color: '#E040FB' },
  8192: { emoji: '🌈', name: 'Rainbow',    bg: 'linear-gradient(135deg,#FF6B6B,#FFE66D,#4ECDC4,#45B7D1)', color: '#fff' },
}

type Grid = (number | null)[][]

function newGrid(): Grid {
  const g: Grid = Array(4).fill(null).map(() => Array(4).fill(null))
  return addTile(addTile(g))
}

function emptySpots(g: Grid): [number, number][] {
  const spots: [number, number][] = []
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (!g[r][c]) spots.push([r, c])
  return spots
}

function addTile(g: Grid): Grid {
  const spots = emptySpots(g)
  if (!spots.length) return g
  const [r, c] = spots[Math.floor(Math.random() * spots.length)]
  const ng = g.map(row => [...row])
  ng[r][c] = Math.random() < 0.9 ? 2 : 4
  return ng
}

function slideRow(row: (number | null)[]): { row: (number | null)[]; score: number } {
  const vals = row.filter(Boolean) as number[]
  let score = 0
  const merged: number[] = []
  let i = 0
  while (i < vals.length) {
    if (i + 1 < vals.length && vals[i] === vals[i + 1]) {
      const v = vals[i] * 2
      merged.push(v)
      score += v
      i += 2
    } else {
      merged.push(vals[i])
      i++
    }
  }
  while (merged.length < 4) merged.push(0)
  return { row: merged.map(v => v || null), score }
}

function moveLeft(g: Grid): { grid: Grid; score: number; moved: boolean } {
  let score = 0
  let moved = false
  const ng = g.map(row => {
    const { row: nr, score: s } = slideRow(row)
    score += s
    if (nr.some((v, i) => v !== row[i])) moved = true
    return nr
  })
  return { grid: ng, score, moved }
}

function rotate90(g: Grid): Grid {
  return g[0].map((_, c) => g.map(row => row[c]).reverse())
}

function move(g: Grid, dir: 'left' | 'right' | 'up' | 'down'): { grid: Grid; score: number; moved: boolean } {
  let rotations = { left: 0, down: 1, right: 2, up: 3 }[dir]
  let curr = g
  for (let i = 0; i < rotations; i++) curr = rotate90(curr)
  const result = moveLeft(curr)
  let res = result.grid
  for (let i = 0; i < (4 - rotations) % 4; i++) res = rotate90(res)
  return { grid: res, score: result.score, moved: result.moved }
}

function hasValidMoves(g: Grid): boolean {
  if (emptySpots(g).length) return true
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (c < 3 && g[r][c] === g[r][c + 1]) return true
      if (r < 3 && g[r][c] === g[r + 1][c]) return true
    }
  }
  return false
}

export default function CupcakesGame() {
  const [grid, setGrid] = useState<Grid>(newGrid)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [history, setHistory] = useState<{ grid: Grid; score: number }[]>([])
  const [swapMode, setSwapMode] = useState(false)
  const [swapFirst, setSwapFirst] = useState<[number, number] | null>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('cupcake2048best')
    if (saved) setBest(parseInt(saved))
  }, [])

  const updateBest = useCallback((s: number) => {
    if (s > best) {
      setBest(s)
      localStorage.setItem('cupcake2048best', String(s))
    }
  }, [best])

  const doMove = useCallback((dir: 'left' | 'right' | 'up' | 'down') => {
    if (gameOver || swapMode) return
    setGrid(prev => {
      const { grid: ng, score: s, moved } = move(prev, dir)
      if (!moved) return prev
      setHistory(h => [...h.slice(-20), { grid: prev, score }])
      const withTile = addTile(ng)
      const newScore = score + s
      setScore(newScore)
      updateBest(newScore)
      if (!hasValidMoves(withTile)) setGameOver(true)
      if (!won && withTile.flat().some(v => v === 8192)) setWon(true)
      return withTile
    })
  }, [gameOver, swapMode, score, won, updateBest])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const map: Record<string, 'left' | 'right' | 'up' | 'down'> = {
        ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down'
      }
      if (map[e.key]) { e.preventDefault(); doMove(map[e.key]) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [doMove])

  const restart = () => {
    setGrid(newGrid())
    setScore(0)
    setGameOver(false)
    setWon(false)
    setHistory([])
    setSwapMode(false)
    setSwapFirst(null)
  }

  const undo = () => {
    if (!history.length) return
    const last = history[history.length - 1]
    setGrid(last.grid)
    setScore(last.score)
    setHistory(h => h.slice(0, -1))
    setGameOver(false)
  }

  const shuffle = () => {
    const tiles = grid.flat().filter(Boolean) as number[]
    const shuffled = [...tiles].sort(() => Math.random() - 0.5)
    const ng: Grid = Array(4).fill(null).map(() => Array(4).fill(null))
    let i = 0
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (i < shuffled.length) { ng[r][c] = shuffled[i++] }
    setGrid(ng)
    setSwapMode(false)
    setSwapFirst(null)
  }

  const handleCellClick = (r: number, c: number) => {
    if (!swapMode) return
    if (!grid[r][c]) return
    if (!swapFirst) {
      setSwapFirst([r, c])
    } else {
      const [r1, c1] = swapFirst
      if (r1 === r && c1 === c) { setSwapFirst(null); return }
      const ng = grid.map(row => [...row])
      ng[r][c] = grid[r1][c1]
      ng[r1][c1] = grid[r][c]
      setGrid(ng)
      setSwapMode(false)
      setSwapFirst(null)
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    const adx = Math.abs(dx), ady = Math.abs(dy)
    if (Math.max(adx, ady) < 30) return
    if (adx > ady) doMove(dx > 0 ? 'right' : 'left')
    else doMove(dy > 0 ? 'down' : 'up')
    touchStart.current = null
  }

  const cellSize = 'min(18vw, 80px)'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      {/* Scores */}
      <div style={{ display: 'flex', gap: 12, width: '100%', maxWidth: 400 }}>
        {[['Score', score], ['Best', best]].map(([label, val]) => (
          <div key={label} style={{ flex: 1, background: label === 'Score' ? '#7C6FCD' : '#1D9E75', borderRadius: 12, padding: '10px 16px', textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>{label}</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>{val}</div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{ background: '#BBADA0', borderRadius: 12, padding: 8, position: 'relative', userSelect: 'none', touchAction: 'none' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {(gameOver || won) && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, gap: 12 }}>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{won ? '🌈 You Win!' : '😢 Game Over'}</div>
            <div style={{ fontSize: 16, color: '#555' }}>Score: {score}</div>
            <button onClick={restart} style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>Play Again</button>
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
          {grid.map((row, r) => row.map((val, c) => {
            const cupcake = val ? CUPCAKES[val] : null
            const isFirst = swapFirst && swapFirst[0] === r && swapFirst[1] === c
            return (
              <div
                key={`${r}-${c}`}
                onClick={() => handleCellClick(r, c)}
                style={{
                  width: cellSize, height: cellSize,
                  background: cupcake ? (cupcake.bg.includes('gradient') ? cupcake.bg : cupcake.bg) : '#CDC1B4',
                  borderRadius: 8,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'min(8vw,32px)',
                  cursor: swapMode && val ? 'pointer' : 'default',
                  outline: isFirst ? '3px solid #1D9E75' : swapMode && val ? '2px dashed #1D9E75' : 'none',
                  transition: 'background 0.1s',
                  boxShadow: isFirst ? '0 0 0 3px #1D9E75' : 'none',
                }}
              >
                {cupcake && (
                  <>
                    <span>{cupcake.emoji}</span>
                    <span style={{ fontSize: 'min(2.5vw,10px)', fontWeight: 700, color: cupcake.color, lineHeight: 1 }}>{val}</span>
                  </>
                )}
              </div>
            )
          }))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 10 }}>
        {[
          { icon: '↺', label: 'Restart', action: restart },
          { icon: '⇄', label: 'Swap', action: () => { setSwapMode(s => !s); setSwapFirst(null) } },
          { icon: '↩', label: 'Undo', action: undo },
          { icon: '⇀', label: 'Shuffle', action: shuffle },
        ].map(btn => (
          <button
            key={btn.label}
            onClick={btn.action}
            title={btn.label}
            style={{
              background: btn.label === 'Swap' && swapMode ? '#1D9E75' : '#F4F6F8',
              border: '1px solid #E2E8F0',
              borderRadius: 10, padding: '10px 16px',
              fontSize: 20, cursor: 'pointer',
              color: btn.label === 'Swap' && swapMode ? '#fff' : '#333',
            }}
          >
            {btn.icon}
          </button>
        ))}
      </div>
      {swapMode && (
        <p style={{ fontSize: 13, color: '#1D9E75', margin: 0 }}>
          {swapFirst ? 'Now click the second cupcake to swap' : 'Click a cupcake to swap'}
        </p>
      )}
    </div>
  )
}
