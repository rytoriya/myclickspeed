import { Metadata } from 'next'
import AlphabetWidget from '@/components/tools/AlphabetWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Type the Alphabet – How Fast Can You Type A to Z?',
  description: 'Test how fast you can type the full alphabet from A to Z. Measure your time and compete for the best score. Free online alphabet typing test.',
  alternates: { canonical: 'https://myclickspeed.com/type-the-alphabet' },
}

export default function TypeAlphabetPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/typing-speed-test">Keyboard</a> › <span>Type the Alphabet</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Type the Alphabet</h1>
        <p className="section-subtitle">How fast can you type A to Z? Start typing to begin the timer and see your time.</p>
      </div>
      <AlphabetWidget />
      <div className="content-section">
        <h2>What is a Good Alphabet Typing Time?</h2>
        <p>The average person types the alphabet in around 3–5 seconds. Touch typists who know the keyboard layout well can complete it in under 2 seconds. The world record for typing the alphabet is under 1 second, achieved by exceptional typists using optimized techniques.</p>
      </div>
      <RelatedTools currentHref="/type-the-alphabet" />
    </div>
  )
}
