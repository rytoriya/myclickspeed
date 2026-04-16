import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CpsWidget from '@/components/tools/CpsWidget'
import RelatedTools from '@/components/tools/RelatedTools'
import { CPS_TIMES } from '@/lib/tools'

type Params = { slug: string }
type Section = { h2: string; paras: string[] }

const SPECIAL = ['jitter', 'kohi', 'butterfly', 'right-click']

// Unique content for specific pages
const UNIQUE_CONTENT: Record<string, { title: string; description: string; h1: string; intro: string; sections: Section[] }> = {
  '1': {
    title: '1 Second CPS Test - My Click Speed',
    description: 'Take the 1 second CPS test to find your peak burst click speed. Free click speed tester with instant results. No download required.',
    h1: '1 Second CPS Test',
    intro: 'One second is all you get. Click as fast as you possibly can and discover your true peak CPS score.',
    sections: [
      {
        h2: 'What the 1 Second Click Speed Test Measures',
        paras: [
          'The 1 second CPS test is the purest burst speed test available. Because the window is so short, your score reflects your absolute maximum click rate with no fatigue involved. Unlike longer tests where stamina and rhythm both matter, the 1 second click speed test captures raw instinct and hand speed only. There is no room to pace yourself or recover from a slow start.',
          'Most people score between 6 and 9 CPS on a 1 second test. Gamers who have trained regularly can reach 10 to 13 CPS. Anything above 13 in a 1 second window shows genuinely elite hand speed. Scores above 15 CPS typically involve a specific technique such as jitter clicking or butterfly clicking rather than standard single-finger pressing.',
          'Use this click speed tester as a quick warm-up check before longer gaming sessions. A few 1 second attempts gets your clicking muscles active and helps you gauge how responsive your hand feels that day before committing to a 10 or 30 second endurance test.',
        ],
      },
      {
        h2: 'How to Improve Your 1 Second Score',
        paras: [
          'The most important factor in a 1 second test is your starting reaction. Many players hesitate for a fraction of a second before making their first click after the timer starts, which wastes a meaningful portion of the available window. Focus on landing your very first click as early as possible - that alone can raise your score noticeably.',
          'Equipment plays a direct role in short burst tests. A gaming mouse with low actuation force lets you click faster with less physical effort per press. Switches rated at 45 to 50 grams are noticeably easier to click rapidly than heavier office mouse buttons. If your mouse has stiff buttons, you may already be leaving CPS points behind.',
          'Keep your index finger resting lightly on the button between attempts rather than lifting it away completely. Reducing the travel distance each click requires means your finger stays in position and fires more efficiently. Practice this contact resting position consistently, then test CPS again after a week to compare the results.',
        ],
      },
    ],
  },

  '2': {
    title: '2 Second CPS Test - My Click Speed',
    description: 'Measure your short-burst click speed with the 2 second CPS test. Free online click speed tester - see how many clicks per second you can hit in just 2 seconds.',
    h1: '2 Second CPS Test',
    intro: 'Two seconds goes fast. Click hard from the very first moment and see your burst CPS before fatigue has any chance to factor in.',
    sections: [
      {
        h2: 'About the 2 Second Click Speed Test',
        paras: [
          'The 2 second CPS test sits between a pure reflex burst and a short endurance window. Two seconds is long enough for your clicking rhythm to settle briefly, but short enough that physical fatigue is not a meaningful factor. This makes it a reliable indicator of your comfortable burst speed rather than a single lucky moment captured in one second.',
          'Scores on a 2 second test tend to run slightly lower than 1 second scores for most people. Any hesitation or rhythm break is harder to compensate for over two seconds compared to longer tests where you can recover. Most gamers land between 6 and 10 CPS, with trained players consistently reaching 11 to 13. The 2 second test is a useful daily benchmark because small improvements are easy to notice.',
          'This format is also excellent for comparing different clicking techniques head to head. Run a few attempts using standard single-finger clicking, then try jitter clicking or butterfly clicking. Seeing which method produces a higher score for your specific hand and mouse setup helps you decide where to focus your training effort.',
        ],
      },
      {
        h2: 'Building Click Speed for the 2 Second Format',
        paras: [
          'Muscle memory is the most effective long-term driver of improvement in any short click speed test. Daily practice sessions of 10 to 15 minutes, clicking to a steady rhythm and gradually raising your target CPS over weeks, builds fast-twitch hand speed more reliably than occasional all-out sessions. Prioritize consistency first and let the speed follow naturally.',
          'Check that your mouse DPI is not working against you. Very high DPI settings can make cursor movement feel jittery during clicking sequences, which disrupts rhythm and lowers your score. Most players find that 800 to 1600 DPI offers the best balance between cursor control and smooth, comfortable rapid clicking.',
          'Give your finger a few seconds of rest between consecutive test attempts. Back-to-back runs without any recovery introduce fatigue that skews your scores downward and, over time, reinforces slower clicking patterns in your muscle memory. Brief recovery between attempts ensures each run accurately reflects your rested capability rather than your tired rate.',
        ],
      },
    ],
  },

  '10': {
    title: '10 Second CPS Test - My Click Speed',
    description: 'The 10 second CPS test is the Minecraft PvP standard for sustained clicking. Use our free CPS tester to measure your click speed over 10 seconds and see how you rank.',
    h1: '10 Second CPS Test',
    intro: 'Ten seconds tests both speed and stamina. Find out how your click speed holds up under real game conditions.',
    sections: [
      {
        h2: 'Why the 10 Second Test is the Practical Gaming Benchmark',
        paras: [
          'The 10 second CPS test is widely considered the most practical click speed benchmark for competitive gaming. While the 5 second test shows burst capability, 10 seconds reveals how well you sustain that speed when it actually counts. In-game combat rarely lasts under a few seconds, so your 10 second rate is far closer to your real performance during a match than any shorter format.',
          'Minecraft PvP players rely on this test as their primary measure of competitive readiness. The Kohi Click Test format, which uses a 10 second window, became the standard for the Minecraft PvP community because it accurately reflects the clicking demands of actual combat. Competitive players target a sustained 8 to 11 CPS to hold a clear advantage in fights where every extra click lands damage.',
          'The gap between your 5 second and 10 second scores tells you something useful about your clicking fitness. A large drop between the two suggests your burst technique is solid but endurance needs work. A small drop signals well-conditioned clicking that holds up under sustained effort rather than only performing well in brief windows.',
        ],
      },
      {
        h2: 'How to Raise Your 10 Second CPS',
        paras: [
          'Endurance conditioning is what separates strong 10 second performers from burst-only clickers. Practicing at a steady, comfortable rate for the full 10 second window rather than maxing out on every attempt builds the muscle conditioning needed to sustain a high CPS without your score declining noticeably in the second half.',
          'Pay close attention to where your score starts to drop. If your CPS is strong in the first 5 seconds but falls off in the last 5, that second-half decline is your clearest training target. Focused sessions specifically on maintaining a consistent rate through the entire 10 second window will close that gap faster than general click speed practice.',
          'Rest adequately between maximum-effort attempts. Clicking hard for 10 seconds produces real finger fatigue. Waiting at least 30 seconds between attempts ensures each run reflects your rested capability and gives you accurate, comparable data to track whether your sustained CPS is genuinely improving over time.',
        ],
      },
    ],
  },
}

function getConfig(slug: string) {
  // Return unique content for specific slugs
  if (UNIQUE_CONTENT[slug]) {
    const u = UNIQUE_CONTENT[slug]
    const num = parseInt(slug)
    return { seconds: num, type: 'standard' as const, ...u }
  }

  const num = parseInt(slug)
  if (!isNaN(num) && CPS_TIMES.includes(num)) {
    return {
      seconds: num,
      type: 'standard' as const,
      title: `${num} Second CPS Test - My Click Speed`,
      description: `Test how many times you can click in ${num} second${num > 1 ? 's' : ''}. Free online CPS tester - measure your clicks per second and improve your gaming performance.`,
      h1: `${num} Second Click Speed Test`,
      intro: `How fast can you click in ${num} second${num > 1 ? 's' : ''}? Click the button below as fast as you can and find out your CPS score.`,
      sections: null,
    }
  }
  if (slug === 'jitter') return {
    seconds: 10, type: 'jitter' as const,
    title: 'Jitter Click Test - My Click Speed',
    description: 'Test your jitter clicking speed with our free online CPS tester. Jitter clicking uses rapid arm vibrations to achieve high CPS scores in gaming.',
    h1: 'Jitter Click Test',
    intro: 'Jitter clicking uses rapid muscle vibrations in your arm to achieve high CPS. Click the area below for 10 seconds to test your jitter click speed.',
    sections: null,
  }
  if (slug === 'kohi') return {
    seconds: 10, type: 'kohi' as const,
    title: 'Kohi Click Test - My Click Speed',
    description: 'The Kohi click test measures your CPS over 10 seconds, the standard for Minecraft PvP players. Test and improve your clicking speed.',
    h1: 'Kohi Click Speed Test',
    intro: 'The Kohi Click Test is the standard benchmark for Minecraft PvP players. Click for 10 seconds and see your sustained CPS performance.',
    sections: null,
  }
  if (slug === 'butterfly') return {
    seconds: 10, type: 'butterfly' as const,
    title: 'Butterfly Click Test - My Click Speed',
    description: 'Test your butterfly clicking speed. Butterfly clicking uses two fingers alternating on one mouse button to achieve 15-25+ CPS.',
    h1: 'Butterfly Click Test',
    intro: 'Butterfly clicking alternates two fingers on one mouse button to double your click rate. Test your technique here over 10 seconds.',
    sections: null,
  }
  if (slug === 'right-click') return {
    seconds: 10, type: 'right-click' as const,
    title: 'Right Click CPS Test - My Click Speed',
    description: 'Test your right click speed with our free CPS tester. Measure how many right clicks per second you can achieve.',
    h1: 'Right Click CPS Test',
    intro: 'How fast is your right click? Use this test to measure your right click speed over 10 seconds.',
    sections: null,
  }
  return null
}

export async function generateStaticParams() {
  const timeParams = CPS_TIMES.map(s => ({ slug: String(s) }))
  const specialParams = SPECIAL.map(s => ({ slug: s }))
  return [...timeParams, ...specialParams]
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const config = getConfig(slug)
  if (!config) return {}
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: `https://myclickspeed.com/cps-test/${slug}` },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://myclickspeed.com/cps-test/${slug}`,
    },
  }
}

export default async function CpsTestPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const config = getConfig(slug)
  if (!config) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.h1,
    description: config.description,
    url: `https://myclickspeed.com/cps-test/${slug}`,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-wrapper">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> › <a href="/cps-test/5">CPS Test</a> › <span>{config.h1}</span>
        </nav>

        <div style={{ padding: '24px 0 8px' }}>
          <h1 className="section-title">{config.h1}</h1>
          <p className="section-subtitle">{config.intro}</p>
        </div>

        <CpsWidget seconds={config.seconds} slug={slug} type={config.type} />

        {config.sections ? (
          // Unique per-page content
          config.sections.map((section) => (
            <div key={section.h2} className="content-section">
              <h2>{section.h2}</h2>
              {section.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ))
        ) : (
          // Generic fallback content for pages not yet updated
          <>
            <div className="content-section">
              <h2>What is a CPS Test?</h2>
              <p>
                A CPS (Clicks Per Second) test measures how many times you can click your mouse button within a given time frame.
                {config.seconds <= 5
                  ? ` The ${config.seconds}-second test is perfect for measuring your peak burst clicking speed.`
                  : ` The ${config.seconds}-second test gives a more accurate picture of your sustained clicking rate.`}
              </p>
              <p>
                The average person clicks between 5 and 7 CPS in a relaxed state. Gamers who practice regularly often reach 8 to 10 CPS.
                Scores above 12 CPS are considered exceptional, and anything above 14 CPS in a sustained test reflects elite technique.
              </p>
              {config.type === 'jitter' && (
                <p>
                  Jitter clicking involves tensing your arm and wrist muscles to create rapid involuntary vibrations. This technique can push CPS above 12 but
                  puts significant strain on the wrist - take breaks and don&apos;t overdo it.
                </p>
              )}
              {config.type === 'butterfly' && (
                <p>
                  Butterfly clicking uses two fingers alternating on the same mouse button, effectively doubling your click rate.
                  Scores of 15 to 25 CPS are common with this method. Note that some game servers ban butterfly clicking.
                </p>
              )}
              {config.type === 'kohi' && (
                <p>
                  The Kohi Click Test originated on the Minecraft server Kohi, where PvP combat heavily depends on clicking speed.
                  A sustained 8+ CPS over 10 seconds is considered competitive for Minecraft PvP.
                </p>
              )}
            </div>

            <div className="content-section">
              <h2>How to Improve Your CPS</h2>
              <p>
                Use a gaming mouse with a low actuation force - this reduces the effort per click and allows faster clicking.
                Practice daily with short sessions rather than long exhausting ones. Try different techniques like jitter clicking,
                butterfly clicking, or drag clicking to find what works best for you.
              </p>
              <p>
                Make sure your mouse polling rate is set to 1000Hz for the most accurate registration of fast clicks.
                A hard mousepad surface also helps with consistent clicking compared to a soft surface.
              </p>
            </div>
          </>
        )}

        <RelatedTools currentHref={`/cps-test/${slug}`} />
      </div>
    </>
  )
}
