import { Metadata } from 'next'
import TypingWidget from '@/components/tools/TypingWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Typing Speed Test – Free WPM Test Online',
  description: 'Test your typing speed with our free online WPM test. Measure words per minute, accuracy, and improve your typing with practice. No download required.',
  alternates: { canonical: 'https://myclickspeed.com/typing-speed-test' },
  openGraph: { title: 'Typing Speed Test – Free WPM Test Online', description: 'Measure your words per minute and accuracy. Free online typing speed test.' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Typing Speed Test',
  description: 'Free online typing speed test measuring WPM and accuracy.',
  url: 'https://myclickspeed.com/typing-speed-test',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function TypingSpeedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-wrapper">
        <nav className="breadcrumb"><a href="/">Home</a> › <a href="/keyboard-tester">Keyboard</a> › <span>Typing Speed Test</span></nav>
        <div style={{ padding: '24px 0 8px' }}>
          <h1 className="section-title">Typing Speed Test</h1>
          <p className="section-subtitle">How fast can you type? Start typing to begin - your WPM and accuracy are calculated in real time.</p>
        </div>
        <TypingWidget mode="standard" />
        <div className="content-section">
          <h2>What is a Good Typing Speed?</h2>
          <p>The average person types at 40–50 WPM. Professional typists typically reach 70–100 WPM. Touch typists who have practiced regularly often exceed 80 WPM with high accuracy. If you type above 100 WPM you are in the top tier of typists worldwide.</p>
          <p>Accuracy matters as much as speed. A 95%+ accuracy rate is the target to aim for - typing faster but making constant errors actually slows you down due to backspacing time.</p>
        </div>
        <div className="content-section">
          <h2>How to Improve Your Typing Speed</h2>
          <p>Learn proper touch typing technique - all 10 fingers on the home row (ASDF JKL;). Stop looking at the keyboard. Short daily practice sessions of 15–20 minutes are more effective than occasional long sessions. Focus on accuracy first, then let speed follow naturally.</p>
        </div>
        <RelatedTools currentHref="/typing-speed-test" />
      </div>
    </>
  )
}
