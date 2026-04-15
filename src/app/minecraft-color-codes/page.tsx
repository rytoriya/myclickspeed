import { Metadata } from 'next'
import MinecraftColorWidget from '@/components/tools/MinecraftColorWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Minecraft Color Codes – Full List of Chat & Text Colors',
  description: 'Complete reference of all Minecraft color codes and formatting codes. Copy any color code for chat, signs, books, and command blocks.',
  alternates: { canonical: 'https://myclickspeed.com/minecraft-color-codes' },
}

export default function MinecraftColorCodesPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Minecraft Color Codes</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Minecraft Color Codes</h1>
        <p className="section-subtitle">All Minecraft color and formatting codes. Click any code to copy it instantly.</p>
      </div>
      <MinecraftColorWidget />
      <div className="content-section">
        <h2>How to Use Minecraft Color Codes</h2>
        <p>In Minecraft Java Edition, use the § (section) symbol followed by the color code. For example, §c gives red text. In most server plugins you can use &amp; instead of § - for example &amp;c for red. In Bedrock Edition, use the § symbol directly in signs and books.</p>
        <p>Formatting codes work the same way: §l for bold, §o for italic, §n for underline, §m for strikethrough, and §r to reset all formatting back to default.</p>
      </div>
      <RelatedTools currentHref="/minecraft-color-codes" />
    </div>
  )
}
