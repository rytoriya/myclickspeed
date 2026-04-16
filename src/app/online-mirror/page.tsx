import { Metadata } from 'next'
import Link from 'next/link'
import MirrorWidget from '@/components/tools/MirrorWidget'

export const metadata: Metadata = {
  title: 'Online Mirror - Use Your Camera as a Mirror Free | My Click Speed',
  description: 'Use your webcam as a free online mirror. No app download needed - just allow camera access and see yourself in real time. Flip, fullscreen, and switch cameras instantly.',
  alternates: { canonical: 'https://myclickspeed.com/online-mirror' },
  openGraph: {
    title: 'Online Mirror - Use Your Camera as a Mirror Free | My Click Speed',
    description: 'Use your webcam as a free online mirror. No app download needed - just allow camera access and see yourself in real time.',
    url: 'https://myclickspeed.com/online-mirror',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Online Mirror',
  description: 'Use your webcam as a free online mirror directly in your browser. No download required.',
  url: 'https://myclickspeed.com/online-mirror',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function OnlineMirrorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-wrapper">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> › <a href="/other-tools">Other Tools</a> › <span>Online Mirror</span>
        </nav>

        <div style={{ padding: '24px 0 8px' }}>
          <h1 className="section-title">Online Mirror</h1>
          <p className="section-subtitle">
            Use your webcam as a free online mirror. Allow camera access below - nothing is recorded or uploaded.
          </p>
        </div>

        <MirrorWidget />

        <div className="content-section">
          <h2>What is an Online Mirror?</h2>
          <p>
            An online mirror uses your device camera to show you a live reflection of yourself, just like a real mirror. This tool accesses your webcam directly through your browser and displays the feed flipped horizontally so the image appears natural, the same way a bathroom mirror works. No app, no download, and no account required.
          </p>
          <p>
            The most common reason people use an online mirror is convenience - checking their appearance quickly when a physical mirror is not nearby. Whether you are on a laptop at a desk, a tablet at the kitchen table, or a phone propped up anywhere, this tool turns any camera-equipped device into an instant mirror.
          </p>
          <p>
            Your camera feed never leaves your device. Everything runs locally inside your browser using the standard Web API. No video is recorded, stored, or transmitted to any server at any point.
          </p>
        </div>

        <div className="content-section">
          <h2>How to Use the Webcam Mirror</h2>
          <p>
            Click the Enable Camera button and allow the browser permission prompt. The camera starts immediately and displays your live feed as a mirrored image. The Mirror On/Off toggle lets you switch between the flipped mirror view and the normal unflipped view at any time.
          </p>
          <p>
            The Fullscreen button expands the mirror to fill your entire screen - useful if you want a larger view for checking your appearance, adjusting lighting, or getting ready. Press Escape or click the button again to exit fullscreen.
          </p>
          <p>
            On mobile devices, the Flip Camera button switches between the front-facing and rear cameras. The front camera is selected by default since it gives the most natural mirror experience. Use the Stop Camera button when you are done to release the camera resource back to your device.
          </p>
        </div>

        <div className="content-section">
          <h2>Privacy and Camera Safety</h2>
          <p>
            This online mirror tool does not record, capture, or upload any part of your camera feed. The video stream is processed entirely within your browser tab using the browser&apos;s built-in media API. When you close the tab or click Stop Camera, the stream ends immediately.
          </p>
          <p>
            Camera access requires an explicit permission grant from you on first use. Your browser will show a permission dialog before any video is captured. You can revoke this permission at any time from your browser settings. No data from this tool is stored on any server.
          </p>
        </div>

        <div className="content-section">
          <h2>More Free Tools</h2>
          <p>
            My Click Speed offers a wide range of free browser-based tools beyond the online mirror. Test your <Link href="/cps-test/5" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>click speed</Link> with the CPS tester, check your <Link href="/typing-speed-test" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>typing speed</Link>, or use the <Link href="/keyboard-tester" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>keyboard tester</Link> to verify every key on your keyboard works correctly.
          </p>
          <p>
            Browse all available utilities on the <Link href="/other-tools" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>Other Tools</Link> page, or explore the full collection of <Link href="/mouse-tester" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>mouse testing tools</Link> for DPI calculation, accuracy testing, and sensitivity conversion.
          </p>
        </div>
      </div>
    </>
  )
}
