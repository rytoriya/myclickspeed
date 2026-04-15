import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Gaming Tips, Mouse Guides & Click Speed Articles',
  description: 'Read the latest gaming tips, mouse guides, and click speed articles from My Click Speed.',
  alternates: { canonical: 'https://myclickspeed.com/blogs' },
}

const posts = [
  { title: 'How to Improve Your CPS: Complete Guide for 2025', slug: 'how-to-improve-cps', date: 'Jan 15, 2025', cat: 'CPS Tips', desc: 'Master jitter clicking, butterfly clicking, and drag clicking techniques to boost your clicks per second.' },
  { title: 'Best Mouse for Drag Clicking in 2025', slug: 'best-mouse-drag-clicking', date: 'Jan 10, 2025', cat: 'Mouse Reviews', desc: 'The top mice for drag clicking with textured surfaces and durable switches for high CPS gaming.' },
  { title: 'What is a Good CPS Score?', slug: 'what-is-good-cps-score', date: 'Dec 28, 2024', cat: 'CPS Tips', desc: 'Understand CPS benchmarks: what scores are average, competitive, and world-record level.' },
  { title: 'Mouse DPI Guide: What DPI Should You Use for Gaming?', slug: 'mouse-dpi-guide-gaming', date: 'Dec 20, 2024', cat: 'Mouse Guides', desc: 'Everything you need to know about DPI settings for FPS, RTS, and MOBA games.' },
  { title: 'Jitter Clicking vs Butterfly Clicking: Which is Better?', slug: 'jitter-vs-butterfly-clicking', date: 'Dec 12, 2024', cat: 'CPS Tips', desc: 'Compare the two most popular fast-clicking techniques and find out which one suits your style.' },
  { title: 'How to Fix Mouse Double Clicking Problem', slug: 'fix-mouse-double-clicking', date: 'Dec 5, 2024', cat: 'Mouse Guides', desc: 'Step-by-step guide to fixing the common double-click bug caused by worn micro-switches.' },
]

const catColors: Record<string, { bg: string; text: string }> = {
  'CPS Tips': { bg: '#E1F5EE', text: '#085041' },
  'Mouse Reviews': { bg: '#E6F1FB', text: '#0C447C' },
  'Mouse Guides': { bg: '#EEEDFE', text: '#3C3489' },
}

export default function BlogsPage() {
  return (
    <div className="page-wrapper">
      <style>{`
        .blog-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; transition: transform 0.15s; }
        .blog-card:hover { transform: translateY(-2px); }
      `}</style>
      <div style={{ padding: '32px 0 8px' }}>
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">Gaming tips, mouse guides, and click speed resources.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginBottom: 40 }}>
        {posts.map(post => {
          const cat = catColors[post.cat] || catColors['CPS Tips']
          return (
            <div key={post.slug} className="blog-card">
              <div style={{ background: '#F4F6F8', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>
                {post.cat === 'CPS Tips' ? '⚡' : post.cat === 'Mouse Reviews' ? '🖱️' : '📖'}
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 99, background: cat.bg, color: cat.text, fontWeight: 600 }}>{post.cat}</span>
                  <span style={{ fontSize: 12, color: '#aaa' }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 8, lineHeight: 1.4 }}>{post.title}</h2>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>{post.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
