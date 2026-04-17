import { Metadata } from 'next'
import Link from 'next/link'
import KeyboardPollingWidget from '@/components/tools/KeyboardPollingWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Keyboard Polling Rate Checker – Test Your Keyboard Hz Online | My Click Speed',
  description: 'Check your keyboard polling rate online for free. Find out if your keyboard runs at 125Hz, 250Hz, 500Hz or 1000Hz and what it means for gaming performance.',
  alternates: { canonical: 'https://myclickspeed.com/keyboard-polling-rate-checker' },
  openGraph: {
    title: 'Keyboard Polling Rate Checker – Test Your Keyboard Hz Online | My Click Speed',
    description: 'Check your keyboard polling rate online for free. Find out if your keyboard runs at 125Hz, 250Hz, 500Hz or 1000Hz and what it means for gaming performance.',
    url: 'https://myclickspeed.com/keyboard-polling-rate-checker',
  },
}

export default function KeyboardPollingPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/keyboard-tester">Keyboard</a> › <span>Keyboard Polling Rate Checker</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Keyboard Polling Rate Checker</h1>
        <p className="section-subtitle">Press any key repeatedly for 5 seconds to detect your keyboard polling rate. Find out if your keyboard is running at 125Hz, 250Hz, 500Hz or 1000Hz.</p>
      </div>

      <KeyboardPollingWidget />

      <div className="content-section">
        <h2>What is Keyboard Polling Rate?</h2>
        <p>Keyboard polling rate is how many times per second your keyboard reports its state to your computer. A polling rate of 1000Hz means your keyboard sends data to the computer 1000 times every second, resulting in a maximum input delay of just 1 millisecond. A polling rate of 125Hz means data is sent 125 times per second, giving a maximum delay of 8 milliseconds.</p>
        <p>For most everyday typing and office use, the difference between polling rates is completely imperceptible. For competitive gaming, a higher polling rate means your key inputs reach the game faster, which can make a real difference in fast-paced scenarios. Check your <Link href="/keyboard-latency-test" style={{ color: '#1D9E75' }}>keyboard latency</Link> alongside your polling rate for a full picture of your keyboard responsiveness.</p>
      </div>

      <div className="content-section">
        <h2>Keyboard Polling Rate vs Mouse Polling Rate</h2>
        <p>Mouse polling rate and keyboard polling rate work the same way but affect different types of input. Your <Link href="/mouse-polling-rate-checker" style={{ color: '#1D9E75' }}>mouse polling rate</Link> affects how smoothly cursor movement is tracked. Your keyboard polling rate affects how quickly key presses register. Both matter for competitive gaming but mouse polling rate typically has a more noticeable effect on aim and movement precision.</p>
        <p>Most gaming keyboards run at 1000Hz by default. Most gaming mice also run at 1000Hz but some high-end models now support 4000Hz or 8000Hz for even lower input latency.</p>
      </div>

      <div className="content-section">
        <h2>What Polling Rate Does Your Keyboard Need?</h2>
        <p>For general use and office typing, 125Hz is perfectly adequate. For casual gaming, 250Hz or 500Hz is more than sufficient. For competitive gaming where every millisecond matters, 1000Hz is the standard and most modern gaming keyboards support it out of the box.</p>
        <p>If your keyboard polling rate checker shows 125Hz on a keyboard you use for gaming, checking your keyboard software or firmware for a polling rate setting is worth doing. Some keyboards default to 125Hz and require manual adjustment to reach 1000Hz.</p>
      </div>

      <div className="content-section">
        <h2>Frequently Asked Questions</h2>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>How accurate is this keyboard polling rate checker?</h3>
        <p>The checker measures the average time between key events reported by your browser. Browser timing has some variance so results should be treated as an approximation rather than a precise measurement. Results of around 125, 250, 500 or 1000 indicate those standard polling rates.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>My keyboard shows 125Hz but it is a gaming keyboard. Why?</h3>
        <p>Some gaming keyboards default to 125Hz and can be changed in their companion software. Check the keyboard manufacturer software or firmware settings. Some keyboards also have a physical DIP switch or button combination to change polling rate.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Does a higher keyboard polling rate use more CPU?</h3>
        <p>Technically yes, but the difference is negligible on any modern computer. 1000Hz polling rate adds an unmeasurably small CPU overhead compared to 125Hz and should never be a reason to avoid using a higher polling rate.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>Is keyboard polling rate the same as keyboard latency?</h3>
        <p>They are related but different. Polling rate determines how often the keyboard checks and reports its state. Latency is the total delay from key press to input registration, which includes polling rate delay plus switch response time and system processing. Use our <Link href="/keyboard-latency-test" style={{ color: '#1D9E75' }}>keyboard latency test</Link> to measure actual input delay.</p>
      </div>

      <RelatedTools currentHref="/keyboard-polling-rate-checker" />
    </div>
  )
}