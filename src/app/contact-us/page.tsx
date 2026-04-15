import { Metadata } from 'next'
import ContactForm from '@/components/tools/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us – My Click Speed',
  description: 'Get in touch with the My Click Speed team. Send us your feedback, bug reports, or suggestions.',
  alternates: { canonical: 'https://myclickspeed.com/contact-us' },
}

export default function ContactPage() {
  return (
    <div className="page-wrapper" style={{ maxWidth: 640 }}>
      <div style={{ padding: '32px 0 8px' }}>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Have a question, suggestion, or found a bug? We would love to hear from you.</p>
      </div>
      <ContactForm />
    </div>
  )
}
