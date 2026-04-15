import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    const cpsSeconds = [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
      21,22,23,24,25,26,27,28,29,30,50,100
    ]

    const cpsRedirects = cpsSeconds.map((s) => ({
      source: `/clicks-in-${s}-second`,
      destination: `/cps-test/${s}`,
      permanent: true,
    }))

    const extraRedirects = [
      { source: '/click-in-60-seconds', destination: '/cps-test/60', permanent: true },
      { source: '/clicks-in-60-second', destination: '/cps-test/60', permanent: true },
      { source: '/jitter-click-test', destination: '/cps-test/jitter', permanent: true },
      { source: '/kohi-click-speed-test', destination: '/cps-test/kohi', permanent: true },
      { source: '/butterfly-click-test', destination: '/cps-test/butterfly', permanent: true },
      { source: '/right-click-cps-test', destination: '/cps-test/right-click', permanent: true },
      { source: '/dwarf-name-generator-dnd', destination: '/name-generator/dwarf', permanent: true },
      { source: '/dnd-name-generator', destination: '/name-generator/dnd', permanent: true },
      { source: '/fantasy-name-generator', destination: '/name-generator/fantasy', permanent: true },
      { source: '/male-name-generator', destination: '/name-generator/male', permanent: true },
      { source: '/female-name-generator', destination: '/name-generator/female', permanent: true },
      { source: '/pet-name-generator', destination: '/name-generator/pet', permanent: true },
      { source: '/baby-name-generator', destination: '/name-generator/baby', permanent: true },
      { source: '/random-name-generator', destination: '/name-generator/random', permanent: true },
      { source: '/auto-clickers', destination: '/auto-clicker', permanent: true },
      { source: '/free-download-auto-keyboard-presser-2-1-1-8', destination: '/auto-key-presser', permanent: true },
      { source: '/private-click-measurement', destination: '/', permanent: true },
    ]

    return [...cpsRedirects, ...extraRedirects]
  },
}

export default nextConfig
