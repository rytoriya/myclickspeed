import { Metadata } from 'next'
import KeyboardTesterWidget from '@/components/tools/KeyboardTesterWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Mechanical Keyboard Tester – Test Your Switches Online',
  description: 'Test your mechanical keyboard switches online. Check for stuck keys, double registration, and actuation issues. Free switch tester tool.',
  alternates: { canonical: 'https://myclickspeed.com/mechanical-keyboard-tester' },
}

export default function MechanicalKeyboardTesterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <a href="/keyboard-tester">Keyboard Tester</a> › <span>Mechanical Keyboard Tester</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Mechanical Keyboard Tester</h1>
        <p className="section-subtitle">Test your mechanical keyboard switches. Press each key to verify actuation, check for double-registration, and identify any issues with your switches.</p>
      </div>
      <KeyboardTesterWidget mechanical={true} />
      <div className="content-section">
        <h2>Common Mechanical Keyboard Switch Types</h2>
        <p><strong>Linear switches</strong> (e.g. Cherry MX Red) are smooth with no tactile bump - ideal for gaming due to their consistent actuation feel and low noise.</p>
        <p><strong>Tactile switches</strong> (e.g. Cherry MX Brown) have a noticeable bump at the actuation point, making them popular for typing since you feel when a keypress registers.</p>
        <p><strong>Clicky switches</strong> (e.g. Cherry MX Blue) produce an audible click at actuation - satisfying for typists but too loud for shared spaces.</p>
      </div>
      <div className="content-section">
        <h2>Switch Problems to Watch For</h2>
        <p><strong>Double registration</strong> (chattering) - a key registers twice from a single press. Usually caused by worn-out or faulty switch contacts. Can sometimes be fixed in firmware.</p>
        <p><strong>Key not registering</strong> - the switch may have dirt under the stem, a broken spring, or a damaged PCB contact. Try removing and cleaning the switch first.</p>
      </div>
      <RelatedTools currentHref="/mechanical-keyboard-tester" />
    </div>
  )
}
