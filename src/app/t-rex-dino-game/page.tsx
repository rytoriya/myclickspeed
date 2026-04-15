import { Metadata } from 'next'
import TRexGame from '@/components/tools/TRexGame'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'T-Rex Dino Game – Play the Offline Chrome Dinosaur Game',
  description: 'Play the classic Chrome offline T-Rex dinosaur game for free online. Jump over cacti and test your reaction time. No download needed.',
  alternates: { canonical: 'https://myclickspeed.com/t-rex-dino-game' },
}

export default function TRexPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>T-Rex Dino Game</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">T-Rex Dino Game</h1>
        <p className="section-subtitle">The classic Chrome offline dinosaur game. Press Space or click to jump. How far can you run?</p>
      </div>
      <TRexGame />
      <div className="content-section">
        <h2>About the T-Rex Game</h2>
        <p>The T-Rex game (also called the Chrome Dino game or Dinosaur Game) is an Easter egg built into Google Chrome that appears when you have no internet connection. Press Space or click the dinosaur to make it jump over cacti. The game gets progressively faster as your score increases. It was first added to Chrome in 2014 and has become one of the most played browser games in the world.</p>
      </div>
      <RelatedTools currentHref="/t-rex-dino-game" />
    </div>
  )
}
