import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – My Click Speed',
  description: 'Privacy policy for My Click Speed. Learn how we collect, use, and protect your data.',
  alternates: { canonical: 'https://myclickspeed.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper" style={{ maxWidth: 760 }}>
      <div style={{ padding: '32px 0 8px' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p style={{ color: '#888', fontSize: 13 }}>Last updated: January 2025</p>
      </div>
      {[
        { title: 'Information We Collect', body: 'My Click Speed collects minimal data to operate the website. We use Google Analytics to collect anonymous usage statistics including page views, session duration, and device type. We do not collect personally identifiable information unless you voluntarily provide it via our contact form.' },
        { title: 'Google AdSense', body: 'We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting Google\'s Ads Settings.' },
        { title: 'Cookies', body: 'This site uses cookies for analytics (Google Analytics) and advertising (Google AdSense). You can disable cookies in your browser settings, though some features may not work correctly.' },
        { title: 'Data Sharing', body: 'We do not sell, trade, or share your personal information with third parties except as required by law or as described in this policy (analytics and advertising providers).' },
        { title: 'Children\'s Privacy', body: 'My Click Speed is not directed at children under the age of 13. We do not knowingly collect personal information from children.' },
        { title: 'Changes to This Policy', body: 'We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.' },
        { title: 'Contact', body: 'If you have questions about this privacy policy, please contact us through our contact page.' },
      ].map(s => (
        <div key={s.title} className="content-section">
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  )
}
