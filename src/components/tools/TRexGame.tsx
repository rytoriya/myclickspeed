'use client'
import { useEffect, useRef, useState } from 'react'

const W = 700, H = 160, GROUND = 120
const DINO = { x: 60, w: 32, h: 40 }
const GRAVITY = 0.6, JUMP_FORCE = -13

type Obstacle = { x: number; w: number; h: number }

export default function TRexGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const state = useRef({
    running: false, dead: false,
    dinoY: GROUND - DINO.h, velY: 0, onGround: true,
    obstacles: [] as Obstacle[],
    score: 0, speed: 5, frame: 0,
    nextObstacle: 80, highScore: 0,
  })
  const rafRef = useRef(0)
  const [display, setDisplay] = useState({ score: 0, high: 0, dead: false, started: false })

  const jump = () => {
    const s = state.current
    if (!s.running && !s.dead) { s.running = true; setDisplay(d => ({ ...d, started: true })) }
    if (s.onGround) { s.velY = JUMP_FORCE; s.onGround = false }
  }

  const reset = () => {
    const s = state.current
    s.running = false; s.dead = false; s.dinoY = GROUND - DINO.h; s.velY = 0
    s.onGround = true; s.obstacles = []; s.score = 0; s.speed = 5; s.frame = 0; s.nextObstacle = 80
    setDisplay(d => ({ ...d, score: 0, dead: false, started: false }))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const draw = () => {
      const s = state.current
      ctx.clearRect(0, 0, W, H)

      // Sky
      ctx.fillStyle = '#F4F6F8'
      ctx.fillRect(0, 0, W, H)

      // Ground
      ctx.fillStyle = '#D1D5DB'
      ctx.fillRect(0, GROUND + 2, W, 2)

      // Dino body
      ctx.fillStyle = s.dead ? '#D85A30' : '#1a1a1a'
      ctx.fillRect(DINO.x, s.dinoY, DINO.w, DINO.h)
      // Dino eye
      ctx.fillStyle = '#fff'
      ctx.fillRect(DINO.x + DINO.w - 8, s.dinoY + 6, 6, 6)
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(DINO.x + DINO.w - 6, s.dinoY + 8, 3, 3)
      // Legs (animate)
      if (s.onGround && s.running) {
        const legOffset = Math.floor(s.frame / 6) % 2 === 0 ? 0 : 6
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(DINO.x + 4, s.dinoY + DINO.h, 8, 6 + legOffset)
        ctx.fillRect(DINO.x + 18, s.dinoY + DINO.h, 8, 6 + (6 - legOffset))
      }

      // Obstacles (cacti)
      ctx.fillStyle = '#1D9E75'
      s.obstacles.forEach(ob => {
        ctx.fillRect(ob.x, GROUND - ob.h, ob.w, ob.h)
        // cactus arms
        ctx.fillRect(ob.x - 6, GROUND - ob.h + 10, 6, ob.h * 0.4)
        ctx.fillRect(ob.x + ob.w, GROUND - ob.h + 14, 6, ob.h * 0.35)
      })

      // Score
      ctx.fillStyle = '#888'
      ctx.font = '14px monospace'
      ctx.textAlign = 'right'
      ctx.fillText(`HI ${String(s.highScore).padStart(5,'0')}  ${String(Math.floor(s.score)).padStart(5,'0')}`, W - 10, 24)
      ctx.textAlign = 'left'

      if (!s.running && !s.dead) {
        ctx.fillStyle = '#555'
        ctx.font = '16px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('Press Space or click to start', W / 2, H / 2 + 8)
        ctx.textAlign = 'left'
      }

      if (s.dead) {
        ctx.fillStyle = '#D85A30'
        ctx.font = 'bold 20px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('GAME OVER - Press Space to restart', W / 2, H / 2 + 8)
        ctx.textAlign = 'left'
      }
    }

    const loop = () => {
      const s = state.current
      if (s.running && !s.dead) {
        s.frame++
        s.score += 0.1
        s.speed = 5 + Math.floor(s.score / 100) * 0.5

        // Physics
        s.velY += GRAVITY
        s.dinoY += s.velY
        if (s.dinoY >= GROUND - DINO.h) { s.dinoY = GROUND - DINO.h; s.velY = 0; s.onGround = true }

        // Spawn obstacles
        s.nextObstacle--
        if (s.nextObstacle <= 0) {
          const h = 30 + Math.random() * 30
          s.obstacles.push({ x: W + 20, w: 16 + Math.random() * 12, h })
          s.nextObstacle = 50 + Math.random() * 80
        }

        // Move obstacles
        s.obstacles.forEach(ob => { ob.x -= s.speed })
        s.obstacles = s.obstacles.filter(ob => ob.x > -50)

        // Collision
        const pad = 4
        s.obstacles.forEach(ob => {
          if (DINO.x + DINO.w - pad > ob.x + pad &&
              DINO.x + pad < ob.x + ob.w - pad &&
              s.dinoY + DINO.h - pad > GROUND - ob.h) {
            s.dead = true
            s.running = false
            if (Math.floor(s.score) > s.highScore) s.highScore = Math.floor(s.score)
            setDisplay({ score: Math.floor(s.score), high: s.highScore, dead: true, started: true })
          }
        })

        setDisplay(d => ({ ...d, score: Math.floor(s.score) }))
      }
      draw()
      rafRef.current = requestAnimationFrame(loop)
    }

    draw()
    rafRef.current = requestAnimationFrame(loop)

    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') { e.preventDefault(); if (state.current.dead) reset(); else jump() }
    }
    window.addEventListener('keydown', onKey)
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('keydown', onKey) }
  }, [])

  return (
    <div className="tool-card" style={{ padding: '20px' }}>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        onClick={() => { if (state.current.dead) reset(); else jump() }}
        style={{ width: '100%', borderRadius: 8, cursor: 'pointer', display: 'block', background: '#F4F6F8' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
        <div style={{ fontSize: 13, color: '#888' }}>Press <strong>Space</strong> or <strong>click</strong> to jump</div>
        <div style={{ display: 'flex', gap: 16, fontSize: 14, fontWeight: 600 }}>
          <span style={{ color: '#888' }}>Score: <span style={{ color: '#1a1a1a' }}>{display.score}</span></span>
          <span style={{ color: '#888' }}>Best: <span style={{ color: '#1D9E75' }}>{display.high}</span></span>
        </div>
      </div>
    </div>
  )
}
