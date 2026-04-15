import Link from 'next/link'
import { getRelatedTools } from '@/lib/tools'

export default function RelatedTools({ currentHref }: { currentHref: string }) {
  const tools = getRelatedTools(currentHref, 6)
  return (
    <div className="content-section">
      <h2>Related Tools</h2>
      <div className="related-grid">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="related-card">
            <div className="related-card-icon">{tool.icon}</div>
            <div className="related-card-name">{tool.name}</div>
            <div className="related-card-desc">{tool.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
