import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us – My Click Speed',
  description: 'Learn about My Click Speed - free online gaming tools for CPS testing, mouse diagnostics, and keyboard testing trusted by gamers worldwide.',
  alternates: { canonical: 'https://myclickspeed.com/about' },
}

export default function AboutPage() {
  return (
    <div className="page-wrapper" style={{ maxWidth: 760 }}>
      <div style={{ padding: '32px 0 8px' }}>
        <h1 className="section-title">About My Click Speed</h1>
      </div>
      <div className="content-section">
        <h2>Who We Are</h2>
        <p>My Click Speed is a free online platform providing professional-grade gaming tools for players worldwide. We build CPS testers, mouse diagnostics, keyboard tools, and gaming utilities - all free, all browser-based, no download required.</p>
        <p>Our tools are used by casual gamers, competitive players, and professionals who need to test and optimize their hardware performance. From measuring your clicks per second to diagnosing mouse issues, we cover everything a gamer needs.</p>
      </div>
      <div className="content-section">
        <h2>Our Mission</h2>
        <p>We believe every gamer should have access to professional-grade testing tools without paywalls or downloads. Our mission is to make hardware testing simple, fast, and accessible to everyone - whether you are testing a new mouse, training your click speed, or diagnosing a keyboard issue.</p>
      </div>
      <div className="content-section">
        <h2>Our Tools</h2>
        <p>We offer over 50 free tools including CPS tests for every duration from 1 to 100 seconds, mouse tests for accuracy, drift, scroll, DPI and polling rate, keyboard testers, typing speed tests, Minecraft utilities, and much more. Every tool runs directly in your browser with no installation needed.</p>
      </div>
      <div className="content-section">
        <h2>Contact Us</h2>
        <p>Have a suggestion, found a bug, or want to get in touch? Visit our <a href="/contact-us" style={{ color: '#1D9E75' }}>Contact page</a> and we will get back to you as soon as possible.</p>
      </div>
    </div>
  )
}
