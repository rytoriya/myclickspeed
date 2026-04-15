import { Metadata } from 'next'
import MinecraftFontWidget from '@/components/tools/MinecraftFontWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Minecraft Title Generator – Create Title Commands',
  description: 'Generate Minecraft /title commands with color codes and formatting. Display custom titles on screen for players using command blocks.',
  alternates: { canonical: 'https://myclickspeed.com/minecraft-title-generator' },
}

export default function MinecraftTitlePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Minecraft Title Generator</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Minecraft Title Generator</h1>
        <p className="section-subtitle">Create colorful title text for Minecraft /title commands. Style your text and copy the color-coded output.</p>
      </div>
      <MinecraftFontWidget />
      <div className="content-section">
        <h2>How to Use /title in Minecraft</h2>
        <p>The /title command displays text on the player&apos;s screen. Syntax: /title &lt;player&gt; title &quot;&lt;text&gt;&quot;. You can include color codes in the text using the § symbol followed by the code. For example: /title @a title &quot;§6§lWelcome!&quot; displays bold gold text.</p>
        <p>Use /title @a subtitle for smaller text below the main title. Use /title @a times &lt;fadeIn&gt; &lt;stay&gt; &lt;fadeOut&gt; to control display duration in ticks (20 ticks = 1 second).</p>
      </div>
      <RelatedTools currentHref="/minecraft-title-generator" />
    </div>
  )
}
