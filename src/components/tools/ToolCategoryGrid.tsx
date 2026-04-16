'use client'
import Link from 'next/link'
import { allTools, Tool } from '@/lib/tools'

const categoryGroups = [
  {
    title: 'CPS & Click Speed Tests',
    color: '#E1F5EE',
    accent: '#1D9E75',
    tools: ['CPS Test (5s)', 'Jitter Click', 'Kohi Click', 'Butterfly Click', 'Right-Click CPS'],
  },
  {
    title: 'Mouse Tests & Tools',
    color: '#E6F1FB',
    accent: '#378ADD',
    tools: ['Mouse Tester', 'Accuracy Test', 'DPI Calculator', 'Sensitivity', 'Aim Trainer', 'APM Test'],
  },
  {
    title: 'Keyboard & Typing',
    color: '#EEEDFE',
    accent: '#7F77DD',
    tools: ['Keyboard Tester', 'Typing Speed', 'Spacebar Clicker', 'Mechanical Tester'],
  },
  {
    title: 'Minecraft Tools',
    color: '#FAEEDA',
    accent: '#BA7517',
    tools: ['Color Codes', 'Font Generator', 'Sphere Generator', 'Command Generator'],
  },{
  title: 'Other Tools & Games',
  color: '#FEF3C7',
  accent: '#D97706',
  tools: ['2048 Cupcakes', 'Online Mirror', 'Tally Counter', 'T-Rex Game'],
},
]

function ToolCard({ tool, color, accent }: { tool: Tool; color: string; accent: string }) {
  return (
    <Link
      href={tool.href}
      style={{
        background: '#fff',
        border: `1px solid ${color}`,
        borderRadius: 12,
        padding: '16px',
        textDecoration: 'none',
        display: 'block',
        transition: 'border-color 0.15s, transform 0.1s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = accent
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = color
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ fontSize: 22, marginBottom: 8 }}>{tool.icon}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>{tool.name}</div>
      <div style={{ fontSize: 12, color: '#888' }}>{tool.desc}</div>
    </Link>
  )
}

export default function ToolCategoryGrid() {
  const toolMap = Object.fromEntries(allTools.map(t => [t.name, t]))

  return (
    <>
      {categoryGroups.map((group) => {
        const groupTools = group.tools.map(n => toolMap[n]).filter(Boolean)
        return (
          <div key={group.title} style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 4, height: 20, background: group.accent, borderRadius: 99 }} />
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{group.title}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 10 }}>
              {groupTools.map(tool => (
                <ToolCard key={tool.href} tool={tool} color={group.color} accent={group.accent} />
              ))}
              
            </div>
          </div>
        )
      })}
    </>
  )
}
