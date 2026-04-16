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
      title: `${num} Second CPS Test – Click Speed Test in ${num}s | My Click Speed`,
      description: `Test how many times you can click in ${num} second${num > 1 ? 's' : ''}. Free online CPS test — measure your clicks per second and improve your gaming performance.`,
      h1: `${num} Second Click Speed Test`,
      intro: `How fast can you click in ${num} second${num > 1 ? 's' : ''}? Click the button below as fast as you can and find out your CPS score.`,
    }
  }
  if (slug === 'jitter') return {
    seconds: 10, type: 'jitter' as const,
    title: 'Jitter Click Test – Test Your Jitter Clicking Speed Online | My Click Speed',
    description: 'Take the free jitter click test and measure your CPS using arm muscle vibrations. Find out your jitter clicking speed and how to improve it for Minecraft PvP.',
    h1: 'Jitter Click Test',
    intro: 'Jitter clicking uses rapid muscle vibrations in your arm to achieve high CPS scores. Click the area below for 10 seconds to measure your jitter clicking speed.',
  }
  if (slug === 'kohi') return {
    seconds: 10, type: 'kohi' as const,
    title: 'Kohi Click Test – Minecraft PvP CPS Speed Test | My Click Speed',
    description: 'Take the Kohi click test and measure your sustained CPS over 10 seconds. The standard benchmark for Minecraft PvP players worldwide.',
    h1: 'Kohi Click Speed Test',
    intro: 'The Kohi Click Test is the standard benchmark for Minecraft PvP players. Click for 10 seconds and see your sustained CPS performance.',
  }
  if (slug === 'butterfly') return {
    seconds: 10, type: 'butterfly' as const,
    title: 'Butterfly Click Test – Two Finger CPS Speed Test | My Click Speed',
    description: 'Test your butterfly clicking speed online. Butterfly clicking uses two fingers alternating on one mouse button to achieve 15 to 25 CPS. Try it free.',
    h1: 'Butterfly Click Test',
    intro: 'Butterfly clicking alternates two fingers on one mouse button to double your click rate. Test your technique here over 10 seconds.',
  }
  if (slug === 'right-click') return {
    seconds: 10, type: 'right-click' as const,
    title: 'Right Click CPS Test – Test Your Right Click Speed | My Click Speed',
    description: 'Test your right click speed with our free online CPS tester. Measure how many right clicks per second you can achieve and track your progress.',
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
          Jitter clicking is a technique where you tense the muscles in your forearm and wrist to create involuntary vibrations that rapidly actuate the mouse button. The result is a significantly higher clicks per second rate than regular finger clicking. Most players who master jitter clicking achieve between 9 and 14 CPS consistently, with some reaching above 15 CPS during short bursts.
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
          The world record for jitter clicking exceeds 20 CPS in short bursts, but sustaining above 16 CPS for a full ten seconds requires significant practice and physical conditioning. For Minecraft PvP, consistently hitting 12 to 14 CPS gives you a meaningful advantage without excessive wrist strain.
        </p>
        <p>
          Do not compare your 1 second burst score to your ten second average. Short bursts inflate your numbers because you can sustain peak muscle tension for only a moment. Use our{' '}
          <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>10 second CPS test</Link>
          {' '}for an accurate picture of your sustained jitter clicking ability.
        </p>
      </div>

      <div className="content-section">
        <h2>Jitter Clicking vs Butterfly Clicking vs Drag Clicking</h2>
        <p>
          These three techniques each have different mechanics and use cases. Jitter clicking uses arm muscle tension to generate vibrations.{' '}
          <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>Butterfly clicking</Link>
          {' '}uses two fingers alternating on the same button to double the click rate. Drag clicking involves dragging the finger across the button surface to register multiple clicks from friction.
        </p>
        <p>
          Jitter clicking is the most physically demanding but requires no special mouse surface. Butterfly clicking can reach 20 to 25 CPS but some servers detect and ban it. For general Minecraft PvP, jitter clicking is the most widely accepted technique. Compare your score using the{' '}
          <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link>
          , the standard benchmark in the Minecraft PvP community.
        </p>
      </div>

      <div className="content-section">
        <h2>Does Jitter Clicking Damage Your Hand?</h2>
        <p>
          Jitter clicking does put strain on the forearm muscles, tendons, and wrist. Short sessions of a few minutes are unlikely to cause lasting harm for most people. Extended sessions without breaks are associated with wrist fatigue and in some cases repetitive strain injury.
        </p>
        <p>
          Limit continuous jitter clicking to 2 to 3 minute sessions with rest in between. Stretch your forearm and wrist before and after practice. If you feel sharp pain or tingling in your fingers, stop immediately. The technique is meant for gaming performance, not marathon sessions.
        </p>
      </div>

      <div className="content-section">
        <h2>Best Mouse for Jitter Clicking</h2>
        <p>
          The ideal mouse for jitter clicking has light buttons with low actuation force and a shape that supports claw grip. Heavy mice dampen vibration transfer and make the technique harder to execute consistently. See our full guide on the{' '}
          <Link href="/best-gaming-mouse-review-for-fast-clicking" style={{ color: '#1D9E75' }}>best gaming mice for fast clicking</Link>
          {' '}for detailed recommendations at every budget.
        </p>
      </div>

      <div className="content-section">
        <h2>Jitter Click Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>What is the average jitter click CPS?</h3>
        <p>Most players learning jitter clicking average between 8 and 12 CPS. Players who have practiced consistently for several weeks typically reach 12 to 14 CPS on a sustained 10 second test.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is jitter clicking allowed in Minecraft?</h3>
        <p>It depends on the server. Jitter clicking is generally permitted on most servers since it produces click patterns that resemble fast manual clicking. Always check the specific rules of the server you play on.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Does jitter clicking cause arthritis?</h3>
        <p>There is no direct evidence that jitter clicking causes arthritis. However, repetitive strain from excessive sessions without rest can cause inflammation in tendons and joints. Practicing with proper rest intervals significantly reduces this risk.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is the 10 second test better than the 1 second test for jitter clicking?</h3>
        <p>Yes. The ten second test gives a more accurate measure of sustained jitter clicking ability. Try our <Link href="/cps-test/1" style={{ color: '#1D9E75' }}>1 second CPS test</Link> alongside this test to compare your burst versus sustained speed.</p>
      </div>
    </>
  )
}

function OneSecondContent() {
  return (
    <>
      <div className="content-section">
        <h2>What is the 1 Second CPS Test?</h2>
        <p>
          The one second CPS test measures your peak clicking speed in a single burst. Unlike longer formats, this test is purely about how fast your finger can move at maximum effort with no endurance component. It is the most popular format for comparing personal records because everyone can attempt it repeatedly without fatigue affecting results.
        </p>
        <p>
          When competitive gamers talk about their CPS score, they are almost always referring to their 1 second result. It captures your absolute ceiling rather than your average, making it the most exciting format to practice and improve.
        </p>
      </div>

      <div className="content-section">
        <h2>What Score Should You Aim For?</h2>
        <p>
          Beginners typically score between 4 and 7 CPS on their first attempts. Casual gamers with no technique training usually land between 7 and 10 CPS. Competitive players who practice regularly reach 11 to 14 CPS. Players using techniques like <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter clicking</Link> or <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>butterfly clicking</Link> regularly exceed 15 CPS on the one second test.
        </p>
        <p>
          For Minecraft PvP, reaching 10 CPS consistently gives you a real combat advantage. The <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link> is the standard benchmark used in that community if you want to test your sustained performance beyond a single second.
        </p>
      </div>

      <div className="content-section">
        <h2>How to Improve Your 1 Second CPS</h2>
        <p>
          Warm up before attempting your best score. Run a few <Link href="/cps-test/5" style={{ color: '#1D9E75' }}>5 second tests</Link> first to get your clicking muscles active, then switch to one second bursts for record attempts. Most players hit their best scores after several warmup rounds rather than cold starts.
        </p>
        <p>
          Your hardware matters. A mouse with low actuation force and a 1000Hz polling rate registers every click without missing rapid inputs. Use our <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75' }}>mouse polling rate checker</Link> to confirm your setup is running correctly. A hard mousepad surface also improves consistency compared to soft surfaces.
        </p>
      </div>

      <div className="content-section">
        <h2>1 Second vs 5 Second vs 10 Second Tests</h2>
        <p>
          The length of the test significantly affects your score. Your one second score will almost always be higher than your <Link href="/cps-test/5" style={{ color: '#1D9E75' }}>5 second CPS test</Link> average, which will in turn be higher than your <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>10 second CPS test</Link> score. This is completely normal and expected.
        </p>
        <p>
          Think of it like sprinting versus a longer run. You can sprint at full speed for one second easily, but that pace is unsustainable over longer intervals. Your 1 second score reflects your maximum burst capacity while your ten second score reflects real usable CPS in an extended gaming scenario.
        </p>
      </div>

      <div className="content-section">
        <h2>1 Second CPS Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is my one second score my real CPS?</h3>
        <p>Your 1 second score is your peak burst CPS, not your sustained average. Compare it to your <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>10 second score</Link> to understand the difference between your maximum and endurance level.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>What techniques improve 1 second scores the most?</h3>
        <p>Butterfly clicking and jitter clicking produce the highest burst scores. Check our <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> and <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>butterfly click test</Link> to practice both techniques.</p>
      </div>
    </>
  )
}

function TwoSecondContent() {
  return (
    <>
      <div className="content-section">
        <h2>Why the 2 Second Test Matters</h2>
        <p>
          The two second CPS test is more reliable than the <Link href="/cps-test/1" style={{ color: '#1D9E75' }}>1 second test</Link> for tracking real improvement over time. A single second result can occasionally spike due to timing, but consistently hitting a high score over 2 seconds shows genuine clicking ability. If you want to track your progress week over week, the two second test is an underrated benchmark.
        </p>
        <p>
          It is short enough to stay at full intensity throughout, but long enough to filter out lucky outliers from your score history.
        </p>
      </div>

      <div className="content-section">
        <h2>Understanding Your 2 Second Score</h2>
        <p>
          Scores on the two second test typically run 5 to 10 percent lower than your 1 second score because sustaining peak effort for two seconds is harder than a single burst. A player scoring 12 CPS over one second usually averages 10 to 11 CPS over 2 seconds.
        </p>
        <p>
          Beginners score between 4 and 6 CPS. Casual players land between 6 and 9 CPS. Competitive players with technique training consistently reach 10 to 13 CPS. If your 2 second score drops significantly below your one second score, your clicking technique is inconsistent and fading under sustained effort.
        </p>
      </div>

      <div className="content-section">
        <h2>Using the 2 Second Test to Improve Consistency</h2>
        <p>
          The best use of the two second test is as a consistency check. Compare your results across 10 attempts. If the range between your lowest and highest score is wide, focus on technique stability before chasing higher numbers.
        </p>
        <p>
          Players training for the <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link> or longer formats like the <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>10 second test</Link> benefit from using the 2 second test as a stepping stone. Build consistency here before moving to longer durations.
        </p>
        <p>
          Make sure your mouse is registering all clicks accurately with our <Link href="/mouse-double-click-test" style={{ color: '#1D9E75' }}>mouse double click test</Link> and verify your sensitivity with the <Link href="/mouse-dpi-calculator" style={{ color: '#1D9E75' }}>mouse DPI calculator</Link>.
        </p>
      </div>

      <div className="content-section">
        <h2>2 Second CPS Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Why does my score vary so much between attempts?</h3>
        <p>Inconsistency usually means your clicking technique relies on bursts of effort rather than a steady rhythm. Practice at a target CPS slightly below your maximum and focus on holding it evenly across both seconds.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Should I use jitter clicking for the 2 second test?</h3>
        <p><Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>Jitter clicking</Link> works well for two second tests because the technique can be sustained for short bursts without significant fatigue. Most players see an immediate CPS improvement when switching to jitter technique.</p>
      </div>
    </>
  )
}

function FiveSecondContent() {
  return (
    <>
      <div className="content-section">
        <h2>The Most Balanced CPS Test Format</h2>
        <p>
          The 5 second CPS test is the standard format used across gaming communities, leaderboards, and skill comparisons. It is long enough to measure real technique and consistency but short enough to maintain full intensity throughout. When someone asks how fast you can click, your five second score is the most meaningful answer.
        </p>
        <p>
          This format directly reflects what you can sustain during a real Minecraft PvP encounter, making it one of the most practical tests on this site.
        </p>
      </div>

      <div className="content-section">
        <h2>What Your 5 Second Score Means</h2>
        <p>
          Under 5 CPS is a completely relaxed clicking pace. Between 5 and 7 CPS is average for adults with no practice. Between 7 and 10 CPS covers most casual gamers. Between 10 and 13 CPS is competitive territory for Minecraft PvP. Above 13 CPS sustained over five seconds is exceptional and almost always requires a dedicated clicking technique.
        </p>
        <p>
          If your score seems low despite fast clicking, check your mouse hardware first. Use our <Link href="/mouse-tester" style={{ color: '#1D9E75' }}>mouse tester</Link> to confirm all buttons are registering correctly and our <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75' }}>mouse polling rate checker</Link> to verify you are running at 1000Hz.
        </p>
      </div>

      <div className="content-section">
        <h2>Improving Your 5 Second Score</h2>
        <p>
          Consistency beats peak speed on the five second test. Many players click fast for the first 2 seconds then slow down as their finger fatigues. Practice at a target slightly below your maximum and focus on holding it steady from start to finish.
        </p>
        <p>
          Learning <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter clicking</Link> is the most effective way to break past the 10 CPS ceiling. With 2 to 3 weeks of daily practice most players increase their five second score by 3 to 5 CPS. Once comfortable at 5 seconds, challenge yourself with the <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>10 second test</Link> or the <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link> to build real gaming endurance.
        </p>
        <p>
          For a complete performance check, combine your CPS practice with our <Link href="/aim-trainer" style={{ color: '#1D9E75' }}>aim trainer</Link> and <Link href="/apm-test" style={{ color: '#1D9E75' }}>APM test</Link> to build well-rounded competitive skills.
        </p>
      </div>

      <div className="content-section">
        <h2>5 Second CPS Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is the 5 second test good for Minecraft PvP?</h3>
        <p>Yes. Most Minecraft PvP encounters last 3 to 8 seconds, making the five second test directly relevant to in-game performance. A score of 9 to 12 CPS over 5 seconds gives you a real advantage in combat.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>How do I stop slowing down mid-test?</h3>
        <p>Finger fatigue is the main cause. Practice at a lower target CPS and build up gradually. Short daily sessions are more effective than occasional long ones. Try the <Link href="/cps-test/2" style={{ color: '#1D9E75' }}>2 second test</Link> to isolate and fix your consistency first.</p>
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
            ? ` The ${seconds} second test is perfect for measuring your peak burst clicking speed.`
            : ` The ${seconds} second test gives a more accurate picture of your sustained clicking rate.`}
        </p>
        <p>
          The average person clicks between 5 and 7 CPS in a relaxed state. Gamers who practice regularly often reach 8 to 10 CPS.
          Scores above 12 CPS are considered exceptional, and anything above 14 CPS in a sustained test reflects elite technique.
        </p>
        {type === 'butterfly' && (
          <p>
            Butterfly clicking uses two fingers alternating on the same mouse button, effectively doubling your click rate.
            Scores of 15 to 25 CPS are common with this method. Note that some game servers ban butterfly clicking. Compare your score with the <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> to see which technique works better for you.
          </p>
        )}
        {type === 'kohi' && (
          <p>
            The Kohi Click Test originated on the Minecraft server Kohi, where PvP combat heavily depends on clicking speed.
            A sustained 8 or more CPS over 10 seconds is considered competitive for Minecraft PvP. Try the <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> if you want to push your CPS higher.
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
          Check our <Link href="/mouse-dpi-calculator" style={{ color: '#1D9E75' }}>mouse DPI calculator</Link> to make sure your settings are optimized for gaming.
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

  function getContent() {
    if (slug === 'jitter') return <JitterContent />
    if (slug === '1') return <OneSecondContent />
    if (slug === '2') return <TwoSecondContent />
    if (slug === '5') return <FiveSecondContent />
    return <StandardContent seconds={config!.seconds} type={config!.type} />
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

        {getContent()}

        <RelatedTools currentHref={`/cps-test/${slug}`} />
      </div>
    </>
  )
}