import { Metadata } from 'next'
import RelatedTools from '@/components/tools/RelatedTools'
import AimTrainerWidget from '@/components/tools/AimTrainerWidget'

export const metadata: Metadata = {
  title: 'Aim Trainer – Free Online Mouse Aim Training Tool',
  description: 'Improve your mouse aim with our free online aim trainer. Practice clicking moving targets to boost your accuracy in FPS games like Valorant, CS2, and Fortnite.',
  alternates: { canonical: 'https://myclickspeed.com/aim-trainer' },
}

export default function AimTrainerPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-tester">Mouse Tests</a> › <span>Aim Trainer</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Aim Trainer</h1>
        <p className="section-subtitle">Click the targets as fast as you can. Tracks accuracy, reaction time, and score. Perfect warm-up before competitive gaming.</p>
      </div>
      <AimTrainerWidget />
      <div className="content-section">
        <h2>How to Improve Your Aim</h2>
        <p>Consistent daily practice with an aim trainer is the fastest way to improve. Even 10–15 minutes before your gaming session can noticeably improve your performance. Focus on accuracy first - speed follows naturally once your muscle memory is trained.</p>
        <p>Lower your mouse sensitivity. Most pro FPS players use 400–800 DPI with low in-game sensitivity. This forces deliberate, precise movements and builds better muscle memory than high sensitivity flicking.</p>
      </div>
      <RelatedTools currentHref="/aim-trainer" />
    </div>
  )
}
