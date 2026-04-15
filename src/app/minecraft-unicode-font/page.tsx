import { Metadata } from 'next'
import MinecraftFontWidget from '@/components/tools/MinecraftFontWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Minecraft Unicode Font – Special Characters for Minecraft',
  description: 'Generate Minecraft Unicode font text with special symbols and characters. Free online tool for Minecraft chat, signs, and commands.',
  alternates: { canonical: 'https://myclickspeed.com/minecraft-unicode-font' },
}

export default function MinecraftUnicodePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Minecraft Unicode Font</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Minecraft Unicode Font</h1>
        <p className="section-subtitle">Apply Minecraft color codes and formatting to your text for use in-game.</p>
      </div>
      <MinecraftFontWidget />
      <div className="content-section">
        <h2>Minecraft Unicode Characters</h2>
        <p>Minecraft supports a range of Unicode characters in text. You can use these in chat, signs, books, and certain command block outputs. The most common are symbols like ♥ (U+2665), ★ (U+2605), and ✦ (U+2726). To use them, copy the character directly into the Minecraft text field.</p>
      </div>
      <RelatedTools currentHref="/minecraft-unicode-font" />
    </div>
  )
}
