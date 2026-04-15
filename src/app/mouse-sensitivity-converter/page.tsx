import { Metadata } from 'next'
import SensitivityConverterWidget from '@/components/tools/SensitivityConverterWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mouse Sensitivity Converter – Convert Between Games',
  description: 'Convert your mouse sensitivity between CS2, Valorant, Overwatch 2, Apex Legends, Fortnite and more. Keep the same feel across every game.',
  alternates: { canonical: 'https://myclickspeed.com/mouse-sensitivity-converter' },
}

export default function SensitivityConverterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Sensitivity Converter</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mouse Sensitivity Converter</h1>
        <p className="section-subtitle">Convert your mouse sensitivity between games. Matches the 360° rotation distance so your muscle memory transfers across titles.</p>
      </div>
      <SensitivityConverterWidget />
      <div className="content-section">
        <h2>Why Convert Sensitivity?</h2>
        <p>Different games use completely different sensitivity scales — a sensitivity of 2.0 in CS2 feels nothing like 2.0 in Valorant. Converting lets you maintain the same physical mouse movement for a 360° turn across all games, so your muscle memory transfers directly.</p>
        <p>The conversion is based on matching the distance your mouse needs to travel to make a full 360° rotation in-game. Once you find a comfortable 360° distance, converting that across games keeps your aim training consistent regardless of what you play.</p>
      </div>
      <RelatedTools currentHref="/mouse-sensitivity-converter" />
    </div>
  )
}
