import { Metadata } from 'next'
import KeyboardTesterWidget from '@/components/tools/KeyboardTesterWidget'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Keyboard Tester – Test Every Key Online Free',
  description: 'Test every key on your keyboard online for free. Check for stuck keys, broken keys, or ghosting issues instantly. No download required.',
  alternates: { canonical: 'https://myclickspeed.com/keyboard-tester' },
}

export default function KeyboardTesterPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Keyboard Tester</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Keyboard Tester</h1>
        <p className="section-subtitle">Press any key to test it. Keys light up green when detected. Works for all keyboard types including mechanical, membrane, and laptop keyboards.</p>
      </div>
      <KeyboardTesterWidget mechanical={false} />
      <div className="content-section">
        <h2>How to Use the Keyboard Tester</h2>
        <p>Simply press any key on your keyboard and watch it light up on the screen. If a key does not light up, it may be stuck, broken, or not registering properly. Test all keys including function keys, modifiers (Shift, Ctrl, Alt), and special keys.</p>
        <p>This tool is useful for checking a new keyboard before purchase, diagnosing issues with an existing keyboard, or verifying that no keys are stuck or ghosting during gaming.</p>
      </div>
      <div className="content-section">
        <h2>What is Key Ghosting?</h2>
        <p>Ghosting happens when pressing multiple keys simultaneously causes some keypresses to not register. Gaming keyboards are designed to avoid ghosting - they use N-key rollover (NKRO) which allows every key to be detected no matter how many others are pressed at the same time.</p>
      </div>
      <RelatedTools currentHref="/keyboard-tester" />
    </div>
  )
}
