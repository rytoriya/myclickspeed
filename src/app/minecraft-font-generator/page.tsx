import { Metadata } from 'next'
import MinecraftFontWidget from '@/components/tools/MinecraftFontWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Minecraft Font Generator – Stylish Minecraft Text',
  description: 'Generate stylish Minecraft font text online. Convert your text to Minecraft&apos;s iconic pixel font style with color codes. Free online Minecraft text generator.',
  alternates: { canonical: 'https://myclickspeed.com/minecraft-font-generator' },
}

export default function MinecraftFontPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Minecraft Font Generator</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Minecraft Font Generator</h1>
        <p className="section-subtitle">Type your text and apply Minecraft color codes and formatting. Copy the result for use in chat, signs, or command blocks.</p>
      </div>
      <MinecraftFontWidget />
      <RelatedTools currentHref="/minecraft-font-generator" />
    </div>
  )
}
