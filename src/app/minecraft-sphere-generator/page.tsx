import { Metadata } from 'next'
import MinecraftSphereWidget from '@/components/tools/MinecraftSphereWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Minecraft Sphere Generator – Build Pixel Spheres',
  description: 'Generate Minecraft sphere and circle blueprints. Enter your radius and get a pixel-perfect building guide for spheres in Minecraft.',
  alternates: { canonical: 'https://myclickspeed.com/minecraft-sphere-generator' },
}

export default function MinecraftSpherePage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Minecraft Sphere Generator</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Minecraft Sphere Generator</h1>
        <p className="section-subtitle">Enter a radius to generate a pixel sphere blueprint for Minecraft building. Each grid cell represents one block.</p>
      </div>
      <MinecraftSphereWidget />
      <div className="content-section">
        <h2>How to Build a Sphere in Minecraft</h2>
        <p>Building a sphere in Minecraft requires planning each layer. This generator shows you the cross-section of each layer of the sphere. Build from bottom to top, placing blocks according to the pattern shown for each Y level. The number of filled cells shows how many blocks you need per layer.</p>
      </div>
      <RelatedTools currentHref="/minecraft-sphere-generator" />
    </div>
  )
}
