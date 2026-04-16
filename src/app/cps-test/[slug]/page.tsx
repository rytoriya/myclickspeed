import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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
      description: `Test how many times you can click in ${num} second${num > 1 ? 's' : ''}. Free online CPS test — measure your clicks per second and improve your gaming performance.`,
      h1: `${num} Second Click Speed Test`,
      intro: `How fast can you click in ${num} second${num > 1 ? 's' : ''}? Click the button below as fast as you can and find out your CPS score.`,
    }
  }
  if (slug === 'jitter') return {
    seconds: 10, type: 'jitter' as const,
    title: 'Jitter Click Test – Test Your Jitter Clicking Speed Online Free',
    description: 'Test your jitter clicking speed with our free online CPS tester. Jitter clicking uses rapid arm muscle vibrations to achieve high CPS in Minecraft PvP and competitive gaming.',
    h1: 'Jitter Click Test',
    intro: 'Jitter clicking uses rapid muscle vibrations in your arm to achieve high CPS scores. Click the area below for 10 seconds to measure your jitter clicking speed.',
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

function JitterContent() {
  return (
    <>
      <div className="content-section">
        <h2>What is Jitter Clicking?</h2>
        <p>
          Jitter clicking is a technique where you tense the muscles in your forearm and wrist to create involuntary vibrations that rapidly actuate the mouse button. The result is a significantly higher clicks per second rate than regular finger clicking. Most players who have mastered jitter clicking can achieve between 9 and 14 CPS consistently, with some reaching above 15 CPS during short bursts.
        </p>
        <p>
          The technique originated in Minecraft PvP communities where higher CPS directly translates to more hits in combat. Players discovered that by tensing their arm rather than consciously tapping each click, they could sustain click rates that would be physically impossible through deliberate clicking alone.
        </p>
      </div>

      <div className="content-section">
        <h2>How to Jitter Click</h2>
        <p>
          Learning to jitter click takes consistent practice. Start by placing your index finger lightly on the mouse button without pressing it. Tense the muscles in your forearm while keeping your wrist relatively stable on the mousepad. The tension creates a natural vibration that causes your finger to repeatedly actuate the button.
        </p>
        <p>
          Keep your arm muscles tight but not completely rigid. Too much tension leads to fatigue quickly and too little produces inconsistent clicks. Most players find that a moderate tension level in the lower forearm, combined with a relaxed shoulder, gives the best balance of speed and endurance.
        </p>
        <p>
          Your grip matters too. A claw grip works best for jitter clicking because it positions the finger at a slight angle over the button, which amplifies the vibration transfer. Palm grip players often struggle to generate consistent vibrations because too much of the hand rests on the mouse, dampening the movement.
        </p>
      </div>

      <div className="content-section">
        <h2>What is a Good Jitter Click CPS Score?</h2>
        <p>
          For players just learning the technique, 7 to 9 CPS is a solid starting point. Intermediate jitter clickers typically land between 10 and 13 CPS. Anything above 14 CPS sustained over a 10 second test puts you in the advanced category.
        </p>
        <p>
          The world record for jitter clicking exceeds 20 CPS in short bursts, but sustaining above 16 CPS for a full 10 seconds requires significant practice and physical conditioning. For Minecraft PvP purposes, consistently hitting 12 to 14 CPS gives you a meaningful advantage without excessive strain on your wrist.
        </p>
        <p>
          Do not compare your 1 second burst score to your 10 second average. Short bursts inflate your numbers because you can sustain peak muscle tension for only a moment. Use our{' '}
          <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>10 second CPS test</Link>
          {' '}for an accurate picture of your sustained jitter clicking ability.
        </p>
      </div>

      <div className="content-section">
        <h2>Jitter Clicking vs Butterfly Clicking vs Drag Clicking</h2>
        <p>
          These three techniques each have different mechanics and use cases. Jitter clicking uses arm muscle tension to generate vibrations.{' '}
          <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>Butterfly clicking</Link>
          {' '}uses two fingers alternating on the same button to double the click rate mechanically. Drag clicking involves dragging the finger across the button surface to register multiple clicks from friction.
        </p>
        <p>
          Jitter clicking is the most physically demanding but requires no special mouse surface. Butterfly clicking can reach 20 to 25 CPS but some game servers detect and ban it. Drag clicking can exceed 30 CPS but requires a mouse with the right surface texture and is banned on most competitive servers.
        </p>
        <p>
          For general Minecraft PvP, jitter clicking is the most widely accepted technique. It produces natural looking click patterns that are harder for anti-cheat systems to flag. You can also compare your score using the{' '}
          <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link>
          , the standard benchmark used in the Minecraft PvP community.
        </p>
      </div>

      <div className="content-section">
        <h2>Does Jitter Clicking Damage Your Hand?</h2>
        <p>
          Jitter clicking does put strain on the forearm muscles, tendons, and wrist. Short sessions of a few minutes at a time are unlikely to cause lasting harm for most people. Extended jitter clicking sessions without breaks are associated with wrist fatigue, forearm soreness, and in some cases repetitive strain injury.
        </p>
        <p>
          To reduce risk, limit continuous jitter clicking to sessions of 2 to 3 minutes with rest in between. Stretch your forearm and wrist before and after practice. If you feel sharp pain or tingling in your fingers or wrist, stop immediately. Carpal tunnel symptoms have been reported by players who jitter click for hours daily without proper rest.
        </p>
        <p>
          The technique is meant for gaming performance, not marathon sessions. Use it strategically during PvP encounters rather than holding the mouse button down continuously.
        </p>
      </div>

      <div className="content-section">
        <h2>Best Mouse for Jitter Clicking</h2>
        <p>
          Not every mouse jitter clicks equally well. The ideal mouse for jitter clicking has light buttons with low actuation force, a shape that supports claw grip, and a durable switch rated for millions of clicks. Heavy mice dampen the vibration transfer and make the technique harder to execute consistently.
        </p>
        <p>
          Popular choices include the Logitech G Pro X Superlight for its ultra-light 61g frame, the Razer DeathAdder V3 for its ergonomic shape and low actuation optical switches, and the Glorious Model O for its honeycomb shell that reduces weight. Avoid mice with stiff heavy buttons that require significant force to actuate. See our full guide on the{' '}
          <Link href="/best-gaming-mouse-review-for-fast-clicking" style={{ color: '#1D9E75' }}>best gaming mice for fast clicking</Link>
          {' '}for detailed recommendations.
        </p>
      </div>

      <div className="content-section">
        <h2>Jitter Click Test FAQ</h2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>What is the average jitter click CPS?</h3>
        <p>Most players learning jitter clicking average between 8 and 12 CPS. Players who have practiced the technique consistently for several weeks typically reach 12 to 14 CPS on a sustained 10 second test.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>How do I improve my jitter click CPS?</h3>
        <p>Practice in short focused sessions daily. Focus on maintaining consistent tension rather than maximum tension. Record your scores after each session to track progress over time. You can also improve your general clicking speed using our <Link href="/cps-test/5" style={{ color: '#1D9E75' }}>5 second CPS test</Link> as a warm-up.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is jitter clicking allowed in Minecraft?</h3>
        <p>It depends on the server. Jitter clicking is generally permitted on most servers since it produces click patterns that resemble fast manual clicking. However, some servers with strict anti-cheat systems may flag unusually high CPS. Always check the specific rules of the server you play on.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Does jitter clicking cause arthritis?</h3>
        <p>There is no direct evidence that jitter clicking causes arthritis. However, repetitive strain from excessive jitter clicking without rest can cause inflammation in tendons and joints. Practicing with proper rest intervals significantly reduces this risk.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>What is the highest jitter click CPS ever recorded?</h3>
        <p>Verified jitter click records exceed 20 CPS in burst tests. Sustained records over 10 seconds are generally lower, with top performers reaching 16 to 18 CPS consistently.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is the 10 second test better than the 1 second test for jitter clicking?</h3>
        <p>Yes. The 10 second test gives a more accurate measure of your sustained jitter clicking ability. The 1 second test captures only your peak burst speed, which is significantly higher than what you can maintain in an actual game. Try our <Link href="/cps-test/1" style={{ color: '#1D9E75' }}>1 second CPS test</Link> alongside this test to compare your burst vs sustained speed.</p>
      </div>
    </>
  )
}

function StandardContent({ seconds, type }: { seconds: number; type: string }) {
  return (
    <>
      <div className="content-section">
        <h2>What is a CPS Test?</h2>
        <p>
          A CPS (Clicks Per Second) test measures how many times you can click your mouse button within a given time frame.
          {seconds <= 5
            ? ` The ${seconds}-second test is perfect for measuring your peak burst clicking speed.`
            : ` The ${seconds}-second test gives a more accurate picture of your sustained clicking rate.`}
        </p>
        <p>
          The average person clicks between 5 and 7 CPS in a relaxed state. Gamers who practice regularly often reach 8 to 10 CPS.
          Scores above 12 CPS are considered exceptional, and anything above 14 CPS in a sustained test reflects elite technique.
        </p>
        {type === 'butterfly' && (
          <p>
            Butterfly clicking uses two fingers alternating on the same mouse button, effectively doubling your click rate.
            Scores of 15 to 25 CPS are common with this method. Note that some game servers ban butterfly clicking — check the rules before using it competitively. Compare your score with the <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> to see which technique works better for you.
          </p>
        )}
        {type === 'kohi' && (
          <p>
            The <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi Click Test</Link> originated on the Minecraft server Kohi, where PvP combat heavily depends on clicking speed.
            A sustained 8+ CPS over 10 seconds is considered competitive for Minecraft PvP. Try the <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> if you want to push your CPS higher.
          </p>
        )}
      </div>

      <div className="content-section">
        <h2>How to Improve Your CPS</h2>
        <p>
          Use a gaming mouse with a low actuation force — this reduces the effort per click and allows faster clicking.
          Practice daily with short sessions rather than long exhausting ones. Try different techniques like <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter clicking</Link>,{' '}
          <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>butterfly clicking</Link>, or drag clicking to find what works best for you.
        </p>
        <p>
          Make sure your mouse polling rate is set to 1000Hz for the most accurate registration of fast clicks.
          A hard mousepad surface also helps with consistent clicking compared to a soft surface. Check our <Link href="/mouse-dpi-calculator" style={{ color: '#1D9E75' }}>mouse DPI calculator</Link> to make sure your settings are optimized for gaming.
        </p>
      </div>
    </>
  )
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

        {config.type === 'jitter'
          ? <JitterContent />
          : <StandardContent seconds={config.seconds} type={config.type} />
        }

        <RelatedTools currentHref={`/cps-test/${slug}`} />
      </div>
    </>
  )
}