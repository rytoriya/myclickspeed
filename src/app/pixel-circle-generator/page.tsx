import { Metadata } from 'next'
import MinecraftSphereWidget from '@/components/tools/MinecraftSphereWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Pixel Circle Generator – Free Online Pixel Art Circle Tool',
  description: 'Generate pixel-perfect circles for Minecraft, pixel art, and other grid-based games. Enter your radius and get a ready-to-use pixel circle blueprint.',
  alternates: { canonical: 'https://myclickspeed.com/pixel-circle-generator' },
}

export default function PixelCirclePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Pixel Circle Generator</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Pixel Circle Generator</h1>
        <p className="section-subtitle">Generate a pixel-perfect circle blueprint. Adjust the radius and use the grid as your building guide.</p>
      </div>
      <MinecraftSphereWidget />
      <div className="content-section">
        <h2>What is a Pixel Circle?</h2>
        <p>A pixel circle is a circle drawn on a grid where each cell represents one pixel (or block). Because grids are made of squares, true circular curves cannot be drawn exactly - so pixel circles use the best approximation by marking cells whose center falls within the circle radius. This technique is used in Minecraft building, pixel art, and any grid-based design.</p>
      </div>
      <RelatedTools currentHref="/pixel-circle-generator" />
    </div>
  )
}
