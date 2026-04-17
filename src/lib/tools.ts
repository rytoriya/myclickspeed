export type Tool = {
  name: string
  href: string
  icon: string
  desc: string
  category: 'cps' | 'mouse' | 'keyboard' | 'minecraft' | 'generator' | 'other'
}

export const allTools: Tool[] = [
  // CPS
  { name: 'CPS Test (5s)', href: '/cps-test/5', icon: '🖱️', desc: 'Clicks per second', category: 'cps' },
  { name: 'Jitter Click', href: '/cps-test/jitter', icon: '⚡', desc: 'Jitter technique', category: 'cps' },
  { name: 'Kohi Click', href: '/cps-test/kohi', icon: '🎮', desc: 'Minecraft standard', category: 'cps' },
  { name: 'Butterfly Click', href: '/cps-test/butterfly', icon: '🦋', desc: 'Two-finger method', category: 'cps' },
  { name: 'Right-Click CPS', href: '/cps-test/right-click', icon: '🖱️', desc: 'Right button speed', category: 'cps' },
  // Mouse
  { name: 'Mouse Tester', href: '/mouse-tester', icon: '🖱️', desc: 'Test all buttons', category: 'mouse' },
  { name: 'Accuracy Test', href: '/mouse-accuracy-test', icon: '🎯', desc: 'Hit moving targets', category: 'mouse' },
  { name: 'DPI Calculator', href: '/mouse-dpi-calculator', icon: '📐', desc: 'Find true DPI', category: 'mouse' },
  { name: 'Sensitivity', href: '/mouse-sensitivity-converter', icon: '🔧', desc: 'Convert across games', category: 'mouse' },
  { name: 'Scroll Test', href: '/mouse-scroll-test', icon: '📜', desc: 'Scroll wheel health', category: 'mouse' },
  { name: 'Drift Test', href: '/mouse-drift-test', icon: '📍', desc: 'Sensor accuracy', category: 'mouse' },
  { name: 'Double Click', href: '/mouse-double-click-test', icon: '⚡', desc: 'Double click speed', category: 'mouse' },
  { name: 'Aim Trainer', href: '/aim-trainer', icon: '🎯', desc: 'Improve your aim', category: 'mouse' },
  { name: 'Aim Booster', href: '/aim-booster', icon: '🚀', desc: 'Advanced training', category: 'mouse' },
  { name: 'APM Test', href: '/apm-test', icon: '⚡', desc: 'Actions per minute', category: 'mouse' },
  { name: 'FPS Test', href: '/fps-test', icon: '🖥️', desc: 'Frame rate counter', category: 'mouse' },
  { name: 'Refresh Rate', href: '/refresh-rate-test', icon: '🔄', desc: 'Monitor Hz test', category: 'mouse' },
  { name: 'Polling Rate', href: '/mouse-polling-rate-checker', icon: '📡', desc: 'Mouse polling Hz', category: 'mouse' },
  { name: 'Acceleration', href: '/mouse-acceleration-tool', icon: '📈', desc: 'Acceleration check', category: 'mouse' },
  // Keyboard
  { name: 'Keyboard Tester', href: '/keyboard-tester', icon: '⌨️', desc: 'Test every key', category: 'keyboard' },
  { name: 'Mechanical Tester', href: '/mechanical-keyboard-tester', icon: '🔩', desc: 'Switch diagnostics', category: 'keyboard' },
  { name: 'Typing Speed', href: '/typing-speed-test', icon: '📝', desc: 'WPM + accuracy', category: 'keyboard' },
  { name: '1 Min Typing', href: '/1-minute-typing-speed-test', icon: '⏱️', desc: '60 second WPM test', category: 'keyboard' },
  { name: 'Spacebar Clicker', href: '/spacebar-clicker', icon: '⬜', desc: 'Spacebar speed', category: 'keyboard' },
  { name: 'Type Alphabet', href: '/type-the-alphabet', icon: '🔤', desc: 'A-Z speed test', category: 'keyboard' },
  { name: 'Keyboard Latency', href: '/keyboard-latency-test', icon: '⏱️', desc: 'Input lag test', category: 'keyboard' },
  { name: 'Keyboard Polling Rate', href: '/keyboard-polling-rate-checker', icon: '📡', desc: 'Keyboard polling Hz', category: 'keyboard' },
  { name: 'How Fast Tap', href: '/how-fast-can-you-tap', icon: '👆', desc: 'Tap speed test', category: 'keyboard' },
  // Minecraft
  { name: 'Color Codes', href: '/minecraft-color-codes', icon: '🎨', desc: 'MC color reference', category: 'minecraft' },
  { name: 'Font Generator', href: '/minecraft-font-generator', icon: '✏️', desc: 'Stylish MC text', category: 'minecraft' },
  { name: 'Unicode Font', href: '/minecraft-unicode-font', icon: '🔠', desc: 'Unicode characters', category: 'minecraft' },
  { name: 'Sphere Generator', href: '/minecraft-sphere-generator', icon: '⚪', desc: 'Build spheres', category: 'minecraft' },
  { name: 'Command Generator', href: '/minecraft-command-generator', icon: '💻', desc: 'MC commands', category: 'minecraft' },
  { name: 'Title Generator', href: '/minecraft-title-generator', icon: '📋', desc: 'Title commands', category: 'minecraft' },
  { name: 'Pixel Circle', href: '/pixel-circle-generator', icon: '🔵', desc: 'Pixel art circles', category: 'minecraft' },
  // Other
  { name: 'Tally Counter', href: '/tally-counter', icon: '🔢', desc: 'Click to count', category: 'other' },
  { name: 'Clicker Counter', href: '/clicker-counter', icon: '➕', desc: 'Manual counter', category: 'other' },
{ name: 'T-Rex Game', href: '/t-rex-dino-game', icon: '🦕', desc: 'Offline dino game', category: 'other' },
  { name: 'Online Mirror', href: '/online-mirror', icon: '🪞', desc: 'Webcam as mirror', category: 'other' },
  { name: '2048 Cupcakes', href: '/2048-cupcakes', icon: '🧁', desc: 'Cupcake puzzle game', category: 'other' },]

export function getRelatedTools(currentHref: string, count = 6): Tool[] {
  const current = allTools.find(t => t.href === currentHref)
  if (!current) return allTools.slice(0, count)
  return allTools
    .filter(t => t.href !== currentHref && t.category === current.category)
    .slice(0, count)
}

export const CPS_TIMES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,50,60,100]
