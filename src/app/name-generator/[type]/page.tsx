import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import NameGeneratorWidget from '@/components/tools/NameGeneratorWidget'
import RelatedTools from '@/components/tools/RelatedTools'

type Params = { type: string }

const NAME_CONFIGS: Record<string, {
  title: string
  description: string
  h1: string
  intro: string
  prefixes: string[]
  suffixes: string[]
  middles?: string[]
}> = {
  dwarf: {
    title: 'Dwarf Name Generator – DnD & Fantasy Dwarf Names',
    description: 'Generate authentic dwarf names for DnD, Pathfinder, and fantasy games. Hundreds of unique dwarf name combinations.',
    h1: 'Dwarf Name Generator',
    intro: 'Generate unique dwarf names for your DnD character, Pathfinder campaign, or any fantasy world.',
    prefixes: ['Thor','Dur','Brom','Grim','Dag','Bal','Orm','Bryn','Dwar','Hag','Kel','Mor'],
    middles: ['in','ar','um','al','or','an','im','ur','om'],
    suffixes: ['in','ar','dim','bur','gar','dor','rim','ful','din','bar','gur','mor'],
  },
  dnd: {
    title: 'DnD Name Generator – Random D&D Character Names',
    description: 'Generate random DnD character names for all races. Perfect for Dungeons & Dragons 5e campaigns and character creation.',
    h1: 'DnD Name Generator',
    intro: 'Generate random Dungeons & Dragons character names for any race or class.',
    prefixes: ['Aer','Bel','Cor','Dal','Eld','Fal','Gar','Hel','Ith','Jal','Kal','Lor'],
    suffixes: ['ion','ara','ith','orn','ael','iel','oth','ans','eos','ira','wyn','eth'],
  },
  fantasy: {
    title: 'Fantasy Name Generator – Random Fantasy Character Names',
    description: 'Generate unique fantasy names for characters, places, and worlds. Perfect for writers, gamers, and worldbuilders.',
    h1: 'Fantasy Name Generator',
    intro: 'Generate unique fantasy names for heroes, villains, kingdoms, and more.',
    prefixes: ['Aer','Zeph','Vel','Mor','Thal','Eld','Syl','Vor','Cael','Ryn','Ith','Dra'],
    suffixes: ['ius','ara','ith','orn','ael','ion','oth','wyn','eos','ira','elis','and'],
  },
  male: {
    title: 'Male Name Generator – Random Male Names',
    description: 'Generate random male names. Get unique male character names for games, stories, or any creative project.',
    h1: 'Male Name Generator',
    intro: 'Generate unique male names for characters, usernames, or any creative project.',
    prefixes: ['Al','Br','Ch','Da','Ed','Fr','Gr','Ha','Ja','Ka','La','Ma'],
    suffixes: ['ex','an','en','on','us','ik','in','or','ar','ent','and','ard'],
  },
  female: {
    title: 'Female Name Generator – Random Female Names',
    description: 'Generate random female names. Get unique female character names for games, stories, or any creative project.',
    h1: 'Female Name Generator',
    intro: 'Generate unique female names for characters, usernames, or any creative project.',
    prefixes: ['Al','Bel','Car','Di','El','Fi','Gi','Ha','Is','Ja','Ka','Li'],
    suffixes: ['a','ia','ina','ella','ara','isa','ena','ira','ana','lia','ora','wyn'],
  },
  pet: {
    title: 'Pet Name Generator – Cute & Creative Pet Names',
    description: 'Generate cute and creative pet names for dogs, cats, and other animals. Find the perfect name for your new pet.',
    h1: 'Pet Name Generator',
    intro: 'Find the perfect name for your pet. Generate cute, funny, or creative names for any animal.',
    prefixes: ['Buf','Coco','Daisy','Fuzz','Gizmo','Hazel','Jazz','Kiwi','Luna','Mochi','Nala','Oreo'],
    suffixes: ['ball','paws','face','tail','fluff','kins','bean','boo','bug','doo','pie','pop'],
  },
  baby: {
    title: 'Baby Name Generator – Unique Baby Names for Boys & Girls',
    description: 'Generate unique baby names for boys and girls. Find beautiful, meaningful names for your newborn.',
    h1: 'Baby Name Generator',
    intro: 'Generate beautiful baby names. Browse hundreds of unique name combinations.',
    prefixes: ['Ava','Blake','Caden','Delilah','Ethan','Fiona','Grace','Harper','Isla','Jace','Kai','Lila'],
    suffixes: ['lyn','ton','leigh','an','rose','jay','belle','den','ley','rae','brook','marie'],
  },
  random: {
    title: 'Random Name Generator – Generate Random Names Instantly',
    description: 'Generate completely random names instantly. Perfect for usernames, game characters, or any creative project.',
    h1: 'Random Name Generator',
    intro: 'Generate random names for any purpose — characters, usernames, projects, or just for fun.',
    prefixes: ['Ax','Brix','Clov','Dex','Evo','Flux','Gryn','Hux','Iox','Jex','Krix','Lox'],
    suffixes: ['on','ar','ix','en','or','ax','ex','us','an','yx','ez','oz'],
  },
}

export async function generateStaticParams() {
  return Object.keys(NAME_CONFIGS).map(type => ({ type }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { type } = await params
  const config = NAME_CONFIGS[type]
  if (!config) return {}
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: `https://myclickspeed.com/name-generator/${type}` },
  }
}

export default async function NameGeneratorPage({ params }: { params: Promise<Params> }) {
  const { type } = await params
  const config = NAME_CONFIGS[type]
  if (!config) notFound()

  return (
    <div className="page-wrapper">
      <nav className="breadcrumb"><a href="/">Home</a> › <span>{config.h1}</span></nav>
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">{config.h1}</h1>
        <p className="section-subtitle">{config.intro}</p>
      </div>
      <NameGeneratorWidget config={config} type={type} />
      <div className="content-section">
        <h2>Other Name Generators</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {Object.entries(NAME_CONFIGS).filter(([t]) => t !== type).map(([t, c]) => (
            <a key={t} href={`/name-generator/${t}`} style={{ padding: '6px 14px', borderRadius: 99, background: '#E1F5EE', color: '#085041', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
              {c.h1}
            </a>
          ))}
        </div>
      </div>
      <RelatedTools currentHref={`/name-generator/${type}`} />
    </div>
  )
}
