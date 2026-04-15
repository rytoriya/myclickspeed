import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer – My Click Speed',
  description: 'Disclaimer for My Click Speed. Information about tool accuracy, affiliate links, and third-party software recommendations.',
  alternates: { canonical: 'https://myclickspeed.com/disclaimer' },
}

export default function DisclaimerPage() {
  return (
    <div className="page-wrapper" style={{ maxWidth: 760 }}>
      <div style={{ padding: '32px 0 8px' }}>
        <h1 className="section-title">Disclaimer</h1>
      </div>
      {[
        { title: 'Tool Accuracy', body: 'The CPS tests, mouse tools, and keyboard tools on My Click Speed are designed to be as accurate as possible within the limitations of browser-based JavaScript. Results may vary depending on your browser, hardware, and system performance. Results from our tools should not be used for professional hardware certification.' },
        { title: 'Third-Party Software', body: 'My Click Speed recommends various third-party auto clicker and gaming tools. We research these tools and link to official sources only. However, we are not responsible for the content, safety, or accuracy of third-party websites or software. Always scan downloaded files with antivirus software.' },
        { title: 'Affiliate Disclosure', body: 'Some links on My Click Speed may be affiliate links. If you click an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. This does not influence our recommendations — we only recommend tools we believe are genuinely useful.' },
        { title: 'Gaming Use', body: 'Using auto clickers or other automation tools in online games may violate those games\' terms of service. My Click Speed is not responsible for any bans, penalties, or consequences that result from using automation tools in games.' },
      ].map(s => (
        <div key={s.title} className="content-section">
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  )
}
