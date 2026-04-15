'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire to a form service like Formspree or Resend
    setSent(true)
  }

  if (sent) {
    return (
      <div className="tool-card" style={{ textAlign: 'center', padding: '40px 32px' }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#1D9E75', marginBottom: 8 }}>Message sent!</div>
        <div style={{ fontSize: 14, color: '#888' }}>Thank you for reaching out. We&apos;ll get back to you as soon as possible.</div>
      </div>
    )
  }

  return (
    <div className="tool-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none', color: '#1a1a1a' }}
          />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com"
            style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none', color: '#1a1a1a' }}
          />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>Message</label>
          <textarea
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            placeholder="Your message, feedback, or bug report..."
            rows={5}
            style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, outline: 'none', resize: 'vertical', color: '#1a1a1a', fontFamily: 'inherit' }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn-teal"
          disabled={!form.name || !form.email || !form.message}
          style={{ opacity: !form.name || !form.email || !form.message ? 0.5 : 1 }}
        >
          Send Message
        </button>
      </div>
    </div>
  )
}
