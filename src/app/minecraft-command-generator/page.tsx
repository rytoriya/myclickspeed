import { Metadata } from 'next'
import MinecraftCommandWidget from '@/components/tools/MinecraftCommandWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Minecraft Command Generator – Easy Command Block Commands',
  description: 'Generate Minecraft commands easily with our free command generator. Create give, summon, effect, and title commands without memorizing syntax.',
  alternates: { canonical: 'https://myclickspeed.com/minecraft-command-generator' },
}

export default function MinecraftCommandPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Minecraft Command Generator</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Minecraft Command Generator</h1>
        <p className="section-subtitle">Generate Minecraft commands using a simple form. No need to memorize syntax — just fill in the options and copy your command.</p>
      </div>
      <MinecraftCommandWidget />
      <RelatedTools currentHref="/minecraft-command-generator" />
    </div>
  )
}
