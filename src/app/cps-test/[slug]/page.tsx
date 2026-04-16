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
    intro: 'Jitter clicking uses rapid muscle vibrations in your arm to achieve high CPS scores. Click the area below for ten seconds to measure your jitter clicking speed.',
  }
  if (slug === 'kohi') return {
    seconds: 10, type: 'kohi' as const,
    title: 'Kohi Click Test – Minecraft PvP CPS Speed Test',
    description: 'The Kohi click test measures your CPS over ten seconds, the standard for Minecraft PvP players. Test and improve your clicking speed.',
    h1: 'Kohi Click Speed Test',
    intro: 'The Kohi Click Test is the standard benchmark for Minecraft PvP players. Click for ten seconds and see your sustained CPS performance.',
  }
  if (slug === 'butterfly') return {
    seconds: 10, type: 'butterfly' as const,
    title: 'Butterfly Click Test – Two Finger CPS Speed Test',
    description: 'Test your butterfly clicking speed. Butterfly clicking uses two fingers alternating on one mouse button to achieve 15 to 25 CPS.',
    h1: 'Butterfly Click Test',
    intro: 'Butterfly clicking alternates two fingers on one mouse button to double your click rate. Test your technique here over ten seconds.',
  }
  if (slug === 'right-click') return {
    seconds: 10, type: 'right-click' as const,
    title: 'Right Click CPS Test – Test Your Right Click Speed',
    description: 'Test your right click speed with our free CPS tester. Measure how many right clicks per second you can achieve.',
    h1: 'Right Click CPS Test',
    intro: 'How fast is your right click? Use this test to measure your right click speed over ten seconds.',
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
          Jitter clicking is a technique where you tense the muscles in your forearm and wrist to create involuntary vibrations that rapidly actuate the mouse button. The result is a significantly higher clicks per second rate than regular finger clicking. Most players who have mastered jitter clicking can achieve between nine and fourteen CPS consistently, with some reaching above fifteen CPS during short bursts.
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
          For players just learning the technique, seven to nine CPS is a solid starting point. Intermediate jitter clickers typically land between ten and thirteen CPS. Anything above fourteen CPS sustained over a ten second test puts you in the advanced category.
        </p>
        <p>
          The world record for jitter clicking exceeds twenty CPS in short bursts, but sustaining above sixteen CPS for a full ten seconds requires significant practice and physical conditioning. For Minecraft PvP purposes, consistently hitting twelve to fourteen CPS gives you a meaningful advantage without excessive strain on your wrist.
        </p>
        <p>
          Do not compare your one second burst score to your ten second average. Short bursts inflate your numbers because you can sustain peak muscle tension for only a moment. Use our{' '}
          <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>ten second CPS test</Link>
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
          Jitter clicking is the most physically demanding but requires no special mouse surface. Butterfly clicking can reach twenty to twenty five CPS but some game servers detect and ban it. Drag clicking can exceed thirty CPS but requires a mouse with the right surface texture and is banned on most competitive servers.
        </p>
        <p>
          For general Minecraft PvP, jitter clicking is the most widely accepted technique. You can also compare your score using the{' '}
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
          To reduce risk, limit continuous jitter clicking to sessions of two to three minutes with rest in between. Stretch your forearm and wrist before and after practice. If you feel sharp pain or tingling in your fingers or wrist, stop immediately.
        </p>
      </div>

      <div className="content-section">
        <h2>Best Mouse for Jitter Clicking</h2>
        <p>
          Not every mouse jitter clicks equally well. The ideal mouse for jitter clicking has light buttons with low actuation force, a shape that supports claw grip, and a durable switch rated for millions of clicks. Heavy mice dampen the vibration transfer and make the technique harder to execute consistently.
        </p>
        <p>
          See our full guide on the{' '}
          <Link href="/best-gaming-mouse-review-for-fast-clicking" style={{ color: '#1D9E75' }}>best gaming mice for fast clicking</Link>
          {' '}for detailed recommendations at every budget.
        </p>
      </div>

      <div className="content-section">
        <h2>Jitter Click Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>What is the average jitter click CPS?</h3>
        <p>Most players learning jitter clicking average between eight and twelve CPS. Players who have practiced consistently for several weeks typically reach twelve to fourteen CPS on a sustained ten second test.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is jitter clicking allowed in Minecraft?</h3>
        <p>It depends on the server. Jitter clicking is generally permitted on most servers since it produces click patterns that resemble fast manual clicking. Always check the specific rules of the server you play on.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Does jitter clicking cause arthritis?</h3>
        <p>There is no direct evidence that jitter clicking causes arthritis. However, repetitive strain from excessive jitter clicking without rest can cause inflammation in tendons and joints. Practicing with proper rest intervals significantly reduces this risk.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is the ten second test better than the one second test for jitter clicking?</h3>
        <p>Yes. The ten second test gives a more accurate measure of your sustained jitter clicking ability. Try our <Link href="/cps-test/1" style={{ color: '#1D9E75' }}>one second CPS test</Link> alongside this test to compare your burst versus sustained speed.</p>
      </div>
    </>
  )
}

function OneSecondContent() {
  return (
    <>
      <div className="content-section">
        <h2>What is the One Second CPS Test?</h2>
        <p>
          The one second CPS test measures your peak clicking speed in a single burst. Unlike longer formats, this test is purely about how fast your finger can move at maximum effort without any endurance component. It is the most popular format for comparing personal records between players because everyone can attempt it repeatedly without fatigue affecting results.
        </p>
        <p>
          When competitive gamers talk about their CPS score, they are almost always referring to their one second result. It captures your absolute ceiling rather than your average, making it the most exciting format to practice and improve.
        </p>
      </div>

      <div className="content-section">
        <h2>What Score Should You Aim For?</h2>
        <p>
          Beginners typically score between four and seven CPS on their first attempts. Casual gamers with no technique training usually land between seven and ten CPS. Competitive players who practice regularly reach eleven to fourteen CPS. Players using techniques like <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter clicking</Link> or <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>butterfly clicking</Link> regularly exceed fifteen CPS on the one second test.
        </p>
        <p>
          For Minecraft PvP, reaching ten CPS consistently gives you a real combat advantage. The <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link> is the standard benchmark used in that community if you want to test your sustained performance beyond a single second.
        </p>
      </div>

      <div className="content-section">
        <h2>How to Improve Your One Second CPS</h2>
        <p>
          Warm up before attempting your best score. Run a few <Link href="/cps-test/5" style={{ color: '#1D9E75' }}>five second tests</Link> first to get your clicking muscles active, then switch to one second bursts for record attempts. Most players hit their best scores after several warmup rounds rather than cold starts.
        </p>
        <p>
          Your hardware matters. A mouse with low actuation force and a 1000Hz polling rate will register every click without missing rapid inputs. Use our <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75' }}>mouse polling rate checker</Link> to confirm your setup is running correctly. A hard mousepad surface also improves consistency compared to soft surfaces.
        </p>
      </div>

      <div className="content-section">
        <h2>One Second vs Five Second vs Ten Second Tests</h2>
        <p>
          The length of the test significantly affects your score. Your one second score will almost always be higher than your <Link href="/cps-test/5" style={{ color: '#1D9E75' }}>five second CPS test</Link> average, which will in turn be higher than your <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>ten second CPS test</Link> score. This is completely normal and expected.
        </p>
        <p>
          Think of it like sprinting versus running a longer distance. You can sprint at full speed for one second easily, but that pace is unsustainable over longer intervals. Your one second score reflects your maximum burst capacity. Your ten second score reflects your real usable CPS in an extended gaming scenario.
        </p>
      </div>

      <div className="content-section">
        <h2>One Second Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is my one second score my real CPS?</h3>
        <p>Your one second score is your peak burst CPS, not your sustained average. Compare it to your <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>ten second score</Link> to understand the difference between your maximum and your endurance level.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>What techniques improve one second scores the most?</h3>
        <p>Butterfly clicking and jitter clicking produce the highest burst scores. Both require practice but can significantly increase your score compared to standard finger clicking. Check our <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> and <Link href="/cps-test/butterfly" style={{ color: '#1D9E75' }}>butterfly click test</Link> to practice both techniques.</p>
      </div>
    </>
  )
}

function TwoSecondContent() {
  return (
    <>
      <div className="content-section">
        <h2>Why the Two Second Test Matters</h2>
        <p>
          The two second CPS test is more reliable than the <Link href="/cps-test/1" style={{ color: '#1D9E75' }}>one second test</Link> for tracking real improvement over time. A single second result can occasionally spike due to timing, but consistently hitting a high score over two seconds shows genuine clicking ability. If you want to track your progress week over week, the two second test is an underrated benchmark.
        </p>
        <p>
          It is short enough to stay at full intensity throughout, but long enough to filter out lucky outliers from your score history.
        </p>
      </div>

      <div className="content-section">
        <h2>Understanding Your Two Second Score</h2>
        <p>
          Scores on the two second test typically run five to ten percent lower than your one second score because sustaining peak effort for two seconds is harder than a single burst. A player scoring twelve CPS over one second usually averages ten to eleven CPS over two seconds.
        </p>
        <p>
          Beginners score between four and six CPS. Casual players land between six and nine CPS. Competitive players with technique training consistently reach ten to thirteen CPS. If your two second score drops significantly below your one second score, your clicking technique is inconsistent and fading under sustained effort.
        </p>
      </div>

      <div className="content-section">
        <h2>Using the Two Second Test to Improve Consistency</h2>
        <p>
          The best use of the two second test is as a consistency check. Compare your results across ten attempts. If the range between your lowest and highest score is wide, focus on technique stability before chasing higher numbers.
        </p>
        <p>
          Players training for the <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link> or longer formats like the <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>ten second test</Link> benefit from using the two second test as a stepping stone. Build consistency here before moving to longer durations.
        </p>
        <p>
          Make sure your mouse is registering all clicks accurately with our <Link href="/mouse-double-click-test" style={{ color: '#1D9E75' }}>mouse double click test</Link> and verify your sensitivity with the <Link href="/mouse-dpi-calculator" style={{ color: '#1D9E75' }}>mouse DPI calculator</Link>.
        </p>
      </div>

      <div className="content-section">
        <h2>Two Second Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Why does my score vary so much between attempts?</h3>
        <p>Inconsistency usually means your clicking technique relies on bursts of effort rather than a steady rhythm. Practice at a target CPS slightly below your maximum and focus on holding it evenly across both seconds.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Should I use jitter clicking for the two second test?</h3>
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
          The five second CPS test is the standard format used across gaming communities, leaderboards, and skill comparisons. It is long enough to measure real technique and consistency but short enough to maintain full intensity throughout. When someone asks how fast you can click, your five second score is the most meaningful answer.
        </p>
        <p>
          This format directly reflects what you can sustain during a real Minecraft PvP encounter or a competitive gaming moment, making it one of the most practical tests on this site.
        </p>
      </div>

      <div className="content-section">
        <h2>What Your Five Second Score Means</h2>
        <p>
          Under five CPS is a completely relaxed clicking pace. Between five and seven CPS is average for adults with no practice. Between seven and ten CPS covers most casual gamers. Between ten and thirteen CPS is competitive territory for Minecraft PvP and similar games. Above thirteen CPS sustained over five seconds is exceptional and almost always requires a dedicated clicking technique.
        </p>
        <p>
          If your score seems low despite fast clicking, check your mouse hardware first. Use our <Link href="/mouse-tester" style={{ color: '#1D9E75' }}>mouse tester</Link> to confirm all buttons are registering correctly and our <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75' }}>mouse polling rate checker</Link> to verify you are running at 1000Hz.
        </p>
      </div>

      <div className="content-section">
        <h2>Improving Your Five Second Score</h2>
        <p>
          Consistency beats peak speed on the five second test. Many players click fast for the first two seconds then slow down as their finger fatigues. Practice at a target slightly below your maximum and focus on holding it steady from start to finish.
        </p>
        <p>
          Learning <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter clicking</Link> is the most effective way to break past the ten CPS ceiling. With two to three weeks of daily practice most players increase their five second score by three to five CPS. Once you are comfortable at five seconds, challenge yourself with the <Link href="/cps-test/10" style={{ color: '#1D9E75' }}>ten second test</Link> or the <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi click test</Link> to build real gaming endurance.
        </p>
        <p>
          For a complete performance check, combine your CPS practice with our <Link href="/aim-trainer" style={{ color: '#1D9E75' }}>aim trainer</Link> and <Link href="/apm-test" style={{ color: '#1D9E75' }}>APM test</Link> to build well-rounded competitive skills.
        </p>
      </div>

      <div className="content-section">
        <h2>Five Second Test FAQ</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is the five second test good for Minecraft PvP?</h3>
        <p>Yes. Most Minecraft PvP encounters last three to eight seconds, making the five second test directly relevant to in-game performance. A score of nine to twelve CPS over five seconds gives you a real advantage in combat.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>How do I stop slowing down mid-test?</h3>
        <p>Finger fatigue is the main cause. Practice at a lower target CPS and build up gradually. Short daily sessions are more effective than occasional long ones for building consistent clicking stamina. Try the <Link href="/cps-test/2" style={{ color: '#1D9E75' }}>two second test</Link> to isolate and fix your consistency first.</p>
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
          The average person clicks between five and seven CPS in a relaxed state. Gamers who practice regularly often reach eight to ten CPS.
          Scores above twelve CPS are considered exceptional, and anything above fourteen CPS in a sustained test reflects elite technique.
        </p>
        {type === 'butterfly' && (
          <p>
            Butterfly clicking uses two fingers alternating on the same mouse button, effectively doubling your click rate.
            Scores of fifteen to twenty five CPS are common with this method. Note that some game servers ban butterfly clicking. Compare your score with the <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> to see which technique works better for you.
          </p>
        )}
        {type === 'kohi' && (
          <p>
            The <Link href="/cps-test/kohi" style={{ color: '#1D9E75' }}>Kohi Click Test</Link> originated on the Minecraft server Kohi, where PvP combat heavily depends on clicking speed.
            A sustained eight or more CPS over ten seconds is considered competitive for Minecraft PvP. Try the <Link href="/cps-test/jitter" style={{ color: '#1D9E75' }}>jitter click test</Link> if you want to push your CPS higher.
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