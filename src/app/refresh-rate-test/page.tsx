import { Metadata } from 'next'
import { RefreshRateWidget } from '@/components/tools/MiscWidgets'
import RelatedTools from '@/components/tools/RelatedTools'

export const metadata: Metadata = {
  title: 'Refresh Rate Test – Check Your Monitor Hz Online',
  description: 'Check your monitor refresh rate online for free. Detect whether your display is running at 60Hz, 144Hz, 165Hz, 240Hz, or higher.',
  alternates: { canonical: 'https://myclickspeed.com/refresh-rate-test' },
}

export default function RefreshRateTestPage() {
  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>Refresh Rate Test</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">Monitor Refresh Rate Test</h1>
        <p className="section-subtitle">Detect your monitor&apos;s actual refresh rate. Make sure your 144Hz or 240Hz monitor is actually running at its full speed.</p>
      </div>
      <RefreshRateWidget />
      <div className="content-section">
        <h2>Is My Monitor Running at Its Full Refresh Rate?</h2>
        <p>A common issue is having a high-refresh monitor but it is not actually enabled. Check: Windows Display Settings → Advanced display → Refresh rate. Make sure it matches your monitor&apos;s spec. Also verify your cable — HDMI 1.4 caps at 60Hz at 1080p, while DisplayPort or HDMI 2.0+ supports 144Hz and above.</p>
      </div>
      <RelatedTools currentHref="/refresh-rate-test" />
    </div>
  )
}
