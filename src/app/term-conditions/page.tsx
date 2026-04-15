import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions – My Click Speed',
  description: 'Terms and conditions for using My Click Speed tools and services.',
  alternates: { canonical: 'https://myclickspeed.com/term-conditions' },
}

export default function TermsPage() {
  return (
    <div className="page-wrapper" style={{ maxWidth: 760 }}>
      <div style={{ padding: '32px 0 8px' }}>
        <h1 className="section-title">Terms & Conditions</h1>
        <p style={{ color: '#888', fontSize: 13 }}>Last updated: January 2025</p>
      </div>
      {[
        { title: 'Acceptance of Terms', body: 'By accessing and using My Click Speed, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our website.' },
        { title: 'Use of Tools', body: 'All tools on My Click Speed are provided for personal, non-commercial use. You may use our CPS testers, mouse tools, and keyboard testers for personal testing and gaming purposes. Commercial use requires prior written permission.' },
        { title: 'Auto Clicker Disclaimer', body: 'Auto clicker tools listed on this site are provided for informational and download reference purposes. Using auto clickers in online games may violate the game\'s terms of service and result in account bans. My Click Speed is not responsible for any consequences of using auto clicker software in games.' },
        { title: 'Intellectual Property', body: 'All content on My Click Speed including tool code, design, and written content is the property of My Click Speed. You may not reproduce, distribute, or create derivative works without permission.' },
        { title: 'Disclaimer of Warranties', body: 'My Click Speed tools are provided "as is" without warranty of any kind. We do not guarantee that tools will be error-free or that results will be accurate for all devices and browsers.' },
        { title: 'Limitation of Liability', body: 'My Click Speed shall not be liable for any damages arising from your use of our tools or website, including but not limited to direct, indirect, incidental, or consequential damages.' },
        { title: 'Changes to Terms', body: 'We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.' },
      ].map(s => (
        <div key={s.title} className="content-section">
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  )
}
