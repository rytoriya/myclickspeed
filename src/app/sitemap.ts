import { MetadataRoute } from 'next'

const BASE = 'https://myclickspeed.com'

const cpsSeconds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,50,60,100]
const cpsSpecial = ['jitter','kohi','butterfly','right-click']
const nameTypes = ['dwarf','dnd','fantasy','male','female','pet','baby','random']

export default function sitemap(): MetadataRoute.Sitemap {
  const cpsPages = [
    ...cpsSeconds.map(s => ({
      url: `${BASE}/cps-test/${s}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...cpsSpecial.map(s => ({
      url: `${BASE}/cps-test/${s}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const namePages = nameTypes.map(t => ({
    url: `${BASE}/name-generator/${t}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const staticPages = [
    '/',
    '/typing-speed-test',
    '/1-minute-typing-speed-test',
    '/mechanical-keyboard-tester',
    '/keyboard-tester',
    '/keyboard-latency-test',
    '/spacebar-clicker',
    '/type-the-alphabet',
    '/how-fast-can-you-tap',
    '/tally-counter',
    '/clicker-counter',
    '/aim-trainer',
    '/aim-booster',
    '/apm-test',
    '/mouse-accuracy-test',
    '/mouse-double-click-test',
    '/mouse-drift-test',
    '/mouse-scroll-test',
    '/mouse-tester',
    '/mouse-dpi-calculator',
    '/mouse-sensitivity-converter',
    '/mouse-acceleration-tool',
    '/mouse-polling-rate-checker',
    '/fps-test',
    '/refresh-rate-test',
    '/minecraft-color-codes',
    '/minecraft-font-generator',
    '/minecraft-unicode-font',
    '/minecraft-sphere-generator',
    '/minecraft-command-generator',
    '/minecraft-title-generator',
    '/pixel-circle-generator',
    '/t-rex-dino-game',
    '/auto-clicker',
    '/auto-clicker/mac',
    '/auto-clicker/android',
    '/roblox-auto-clicker',
    '/auto-key-presser',
    '/speed-auto-clicker',
    '/best-macro-recorders',
    '/best-gaming-mouse-review-for-fast-clicking',
    '/best-wireless-trackball-mouse-for-gaming-cps',
    '/best-gaming-keyboards-review',
    '/mouse-grip-tape',
    '/online-mirror',
    '/other-tools',
    '/blogs',
    '/about',
    '/contact-us',
    '/privacy-policy',
    '/term-conditions',
    '/disclaimer',
  ].map(path => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.6,
  }))

  return [...staticPages, ...cpsPages, ...namePages]
}
