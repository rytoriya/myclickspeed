import { Metadata } from 'next'
import AimTrainerWidget from '@/components/tools/AimTrainerWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Aim Booster – Advanced Online Aim Training Tool',
  description: 'Boost your mouse aim with our free online aim trainer. Progressive difficulty targets help you improve accuracy and reaction time for FPS gaming.',
  alternates: { canonical: 'https://myclickspeed.com/aim-booster' },
}

export default function AimBoosterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/mouse-accuracy-test">Mouse Tests</a> › <span>Aim Booster</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Aim Booster</h1>
        <p className="section-subtitle">Advanced aim training with varied target sizes to challenge your precision. Train daily to see real improvement in your gaming accuracy.</p>
      </div>
      <AimTrainerWidget />
      <div className="content-section">
        <h2>How Aim Training Works</h2>
        <p>Aim training builds the neural pathways responsible for hand-eye coordination. The more you practice clicking targets, the more automatic and precise your movements become — a process called muscle memory. Unlike raw reaction speed which is mostly fixed, aiming precision can be significantly improved with consistent training.</p>
        <p>Focus on maintaining 80%+ accuracy rather than chasing speed. Speed naturally follows as your accuracy improves. A 10-minute daily warm-up session before competitive games is more effective than occasional hour-long training sessions.</p>
      </div>
      <div className="content-section">
        <h2>Aim Training Tips</h2>
        <p>Keep your elbow on the desk and move primarily from your elbow and shoulder rather than your wrist for large movements. Use wrist movements only for fine adjustments. This reduces fatigue and improves consistency over long sessions.</p>
        <p>Match your in-game sensitivity to your aim trainer. If your settings are different, you are training different muscle memory and will not see improvement carry over into games.</p>
      </div>
      <RelatedTools currentHref="/aim-booster" />
    </div>
  )
}
