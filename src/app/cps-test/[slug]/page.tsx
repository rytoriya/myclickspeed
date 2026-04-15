import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CpsWidget from '@/components/tools/CpsWidget'
import RelatedTools from '@/components/tools/RelatedTools'
import { CPS_TIMES } from '@/lib/tools'

type Params = { slug: string }

const SPECIAL = ['jitter', 'kohi', 'butterfly', 'right-click']

function getConfig(slug: string) {
  const num = parseInt(slug)
  if (!isNaN(num) && CPS_TIMES.includes(num)) {
    return {
      seconds: num,
      type: 'standard' as const,
      title: `${num} Second CPS Test – Click Speed Test in ${num}s`,
      description: `Test how many times you can click in ${num} second${num > 1 ? 's' : ''}. Free online CPS test - measure your clicks per second and improve your gaming performance.`,
      h1: `${num} Second Click Speed Test`,
      intro: `How fast can you click in ${num} second${num > 1 ? 's' : ''}? Click the button below as fast as you can and find out your CPS score.`,
    }
  }
  if (slug === 'jitter') return {
    seconds: 10, type: 'jitter' as const,
    title: 'Jitter Click Test – Measure Your Jitter Clicking Speed',
    description: 'Test your jitter clicking speed with our free online CPS tester. Jitter clicking uses rapid arm vibrations to achieve high CPS scores in gaming.',
    h1: 'Jitter Click Test',
    intro: 'Jitter clicking uses rapid muscle vibrations in your arm to achieve high CPS. Click the area below for 10 seconds to test your jitter click speed.',
  }
  if (slug === 'kohi') return {
    seconds: 10, type: 'kohi' as const,
    title: 'Kohi Click Test – Minecraft PvP CPS Speed Test',
    description: 'The Kohi click test measures your CPS over 10 seconds, the standard for Minecraft PvP players. Test and improve your clicking speed.',
    h1: 'Kohi Click Speed Test',
    intro: 'The Kohi Click Test is the standard benchmark for Minecraft PvP players. Click for 10 seconds and see your sustained CPS performance.',
  }
  if (slug === 'butterfly') return {
    seconds: 10, type: 'butterfly' as const,
    title: 'Butterfly Click Test – Two Finger CPS Speed Test',
    description: 'Test your butterfly clicking speed. Butterfly clicking uses two fingers alternating on one mouse button to achieve 15-25+ CPS.',
    h1: 'Butterfly Click Test',
    intro: 'Butterfly clicking alternates two fingers on one mouse button to double your click rate. Test your technique here over 10 seconds.',
  }
  if (slug === 'right-click') return {
    seconds: 10, type: 'right-click' as const,
    title: 'Right Click CPS Test – Test Your Right Click Speed',
    description: 'Test your right click speed with our free CPS tester. Measure how many right clicks per second you can achieve.',
    h1: 'Right Click CPS Test',
    intro: 'How fast is your right click? Use this test to measure your right click speed over 10 seconds.',
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
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> › <a href="/cps-test/5">CPS Test</a> › <span>{config.h1}</span>
        </nav>

        {/* Hero */}
        <div style={{ padding: '24px 0 8px' }}>
          <h1 className="section-title">{config.h1}</h1>
          <p className="section-subtitle">{config.intro}</p>
        </div>

        {/* CPS Widget - white card on gray bg */}
        <CpsWidget seconds={config.seconds} slug={slug} type={config.type} />

        {/* SEO Content */}
        <div className="content-section">
          <h2>What is a CPS Test?</h2>
          <p>
            A CPS (Clicks Per Second) test measures how many times you can click your mouse button within a given time frame.
            {config.seconds <= 5
              ? ` The ${config.seconds}-second test is perfect for measuring your peak burst clicking speed.`
              : ` The ${config.seconds}-second test gives a more accurate picture of your sustained clicking rate.`}
          </p>
          <p>
            The average person clicks between 5–7 CPS in a relaxed state. Gamers who practice regularly often reach 8–10 CPS.
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
              Scores of 15–25 CPS are common with this method. Note that some game servers ban butterfly clicking.
            </p>
          )}
          {config.type === 'kohi' && (
            <p>
              The Kohi Click Test originated on the Minecraft server Kohi, where PvP combat heavily depends on clicking speed.
              A sustained 8+ CPS over 10 seconds is considered competitive for Minecraft PvP.
            </p>
          )}
        </div>

        {/* How to improve */}
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

        {/* Related tools */}
        <RelatedTools currentHref={`/cps-test/${slug}`} />
      </div>
    </>
  )
}
