'use client'
import { useState } from 'react'

type CommandType = 'give' | 'effect' | 'summon' | 'tp' | 'gamemode' | 'time' | 'weather'

const ITEMS = ['diamond_sword','diamond_pickaxe','diamond_axe','iron_sword','bow','crossbow','shield','elytra','totem_of_undying','golden_apple','enchanted_golden_apple','netherite_sword','netherite_pickaxe','chest','trapped_chest','shulker_box','beacon','conduit']
const EFFECTS = ['speed','slowness','haste','mining_fatigue','strength','instant_health','instant_damage','jump_boost','nausea','regeneration','resistance','fire_resistance','water_breathing','invisibility','blindness','night_vision','hunger','weakness','poison','wither','health_boost','absorption','saturation','glowing','levitation','luck','bad_luck']
const MOBS = ['zombie','skeleton','creeper','enderman','spider','witch','blaze','ghast','wither','ender_dragon','iron_golem','villager','wandering_trader','pillager','ravager','guardian','elder_guardian','shulker','phantom','drowned']
const GAMEMODES = ['survival','creative','adventure','spectator']

export default function MinecraftCommandWidget() {
  const [cmdType, setCmdType] = useState<CommandType>('give')
  const [player, setPlayer] = useState('@p')
  const [item, setItem] = useState('diamond_sword')
  const [amount, setAmount] = useState(1)
  const [effect, setEffect] = useState('speed')
  const [duration, setDuration] = useState(30)
  const [amplifier, setAmplifier] = useState(1)
  const [mob, setMob] = useState('zombie')
  const [gamemode, setGamemode] = useState('creative')
  const [timeVal, setTimeVal] = useState('day')
  const [weather, setWeather] = useState('clear')
  const [x, setX] = useState('~')
  const [y, setY] = useState('~')
  const [z, setZ] = useState('~')
  const [copied, setCopied] = useState(false)

  const buildCommand = () => {
    switch (cmdType) {
      case 'give': return `/give ${player} ${item} ${amount}`
      case 'effect': return `/effect give ${player} ${effect} ${duration} ${amplifier - 1}`
      case 'summon': return `/summon ${mob} ${x} ${y} ${z}`
      case 'tp': return `/tp ${player} ${x} ${y} ${z}`
      case 'gamemode': return `/gamemode ${gamemode} ${player}`
      case 'time': return `/time set ${timeVal}`
      case 'weather': return `/weather ${weather}`
      default: return ''
    }
  }

  const command = buildCommand()

  const copy = () => {
    navigator.clipboard.writeText(command).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="tool-card">
      {/* Command type selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {(['give','effect','summon','tp','gamemode','time','weather'] as CommandType[]).map(t => (
          <button key={t} onClick={() => setCmdType(t)} style={{ padding: '6px 14px', borderRadius: 8, border: `1.5px solid ${cmdType === t ? '#1D9E75' : '#E2E8F0'}`, background: cmdType === t ? '#1D9E75' : '#fff', color: cmdType === t ? '#fff' : '#555', fontSize: 13, fontWeight: 500, cursor: 'pointer', textTransform: 'capitalize' }}>
            /{t}
          </button>
        ))}
      </div>

      {/* Options */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 20 }}>
        {['give','effect','tp','gamemode'].includes(cmdType) && (
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Player</label>
            <select value={player} onChange={e => setPlayer(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#1a1a1a', background: '#fff' }}>
              {['@p','@a','@r','@e','@s'].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
        )}
        {cmdType === 'give' && (<>
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Item</label>
            <select value={item} onChange={e => setItem(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, color: '#1a1a1a', background: '#fff' }}>
              {ITEMS.map(i => <option key={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Amount: {amount}</label>
            <input type="range" min={1} max={64} value={amount} onChange={e => setAmount(Number(e.target.value))} style={{ width: '100%' }} />
          </div>
        </>)}
        {cmdType === 'effect' && (<>
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Effect</label>
            <select value={effect} onChange={e => setEffect(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, color: '#1a1a1a', background: '#fff' }}>
              {EFFECTS.map(e => <option key={e}>{e}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Duration: {duration}s</label>
            <input type="range" min={1} max={300} value={duration} onChange={e => setDuration(Number(e.target.value))} style={{ width: '100%' }} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Level: {amplifier}</label>
            <input type="range" min={1} max={5} value={amplifier} onChange={e => setAmplifier(Number(e.target.value))} style={{ width: '100%' }} />
          </div>
        </>)}
        {cmdType === 'summon' && (
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Entity</label>
            <select value={mob} onChange={e => setMob(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 13, color: '#1a1a1a', background: '#fff' }}>
              {MOBS.map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
        )}
        {['summon','tp'].includes(cmdType) && (<>
          {[['X',x,setX],['Y',y,setY],['Z',z,setZ]].map(([label, val, setter]) => (
            <div key={label as string}>
              <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>{label as string} coordinate</label>
              <input value={val as string} onChange={e => (setter as (v: string) => void)(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#1a1a1a', outline: 'none' }} />
            </div>
          ))}
        </>)}
        {cmdType === 'gamemode' && (
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Mode</label>
            <select value={gamemode} onChange={e => setGamemode(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#1a1a1a', background: '#fff' }}>
              {GAMEMODES.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
        )}
        {cmdType === 'time' && (
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Time</label>
            <select value={timeVal} onChange={e => setTimeVal(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#1a1a1a', background: '#fff' }}>
              {['day','night','noon','midnight'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
        )}
        {cmdType === 'weather' && (
          <div>
            <label style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 4 }}>Weather</label>
            <select value={weather} onChange={e => setWeather(e.target.value)} style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#1a1a1a', background: '#fff' }}>
              {['clear','rain','thunder'].map(w => <option key={w}>{w}</option>)}
            </select>
          </div>
        )}
      </div>

      {/* Output */}
      <div style={{ background: '#1a1a2e', borderRadius: 10, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <code style={{ fontSize: 15, color: '#55FF55', fontFamily: 'monospace', flex: 1, wordBreak: 'break-all' }}>{command}</code>
        <button onClick={copy} className="btn-teal" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '8px 16px', flexShrink: 0 }}>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
