import { Metadata } from 'next'
import CupcakesGame from '@/components/tools/CupcakesGame'

export const metadata: Metadata = {
  title: '2048 Cupcakes – Free Online Cupcake Puzzle Game | My Click Speed',
  description: 'Play 2048 Cupcakes free online. Merge cupcake tiles from Vanilla to Rainbow Cupcake. Features undo, swap, shuffle and best score tracking. No download required.',
  alternates: { canonical: 'https://myclickspeed.com/2048-cupcakes' },
}

export default function CupcakesPage() {
  return (
    <div className="page-wrapper">
      <div style={{ padding: '24px 0 8px' }}>
        <h1 className="section-title">2048 Cupcakes</h1>
        <p className="section-subtitle">Merge cupcake tiles and reach the Rainbow Cupcake. Use arrow keys or swipe to play.</p>
      </div>
      <CupcakesGame />
      <div className="content-section" style={{ marginTop: 32 }}>
        <h2>How to Play 2048 Cupcakes</h2>
        <p>Use the arrow keys on your keyboard or swipe on mobile to slide all tiles in one direction. When two identical cupcakes collide they merge into the next cupcake flavor. A new tile appears after every move. The game ends when no valid moves remain. Your goal is to reach the Rainbow Cupcake (8192 tile).</p>
      </div>
      <div className="content-section">
        <h2>Cupcake Tile Progression</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: '#1D9E75', color: '#fff' }}>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Tile Value</th>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Cupcake Flavor</th>
              </tr>
            </thead>
            <tbody>
              {[
                [2,'Vanilla Cupcake'],[4,'Chocolate Cupcake'],[8,'Strawberry Cupcake'],
                [16,'Lemon Cupcake'],[32,'Mint Cupcake'],[64,'Blueberry Cupcake'],
                [128,'Cherry Cupcake'],[256,'Oreo Cupcake'],[512,'Caramel Cupcake'],
                [1024,'Red Velvet Cupcake'],[2048,'Birthday Cupcake'],[4096,'Galaxy Cupcake'],
                [8192,'Rainbow Cupcake (final tile)'],
              ].map(([val, name], i) => (
                <tr key={val} style={{ background: i % 2 === 0 ? '#fff' : '#F4F6F8' }}>
                  <td style={{ padding: '10px 16px', fontWeight: 600 }}>{val}</td>
                  <td style={{ padding: '10px 16px' }}>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="content-section">
        <h2>Winning Strategies for 2048 Cupcakes</h2>
        <p><strong>Use the corner strategy.</strong> Keep your highest-value cupcake locked in one corner, usually bottom-right. Build smaller cupcakes around it to maintain order and avoid breaking your chain.</p>
        <p><strong>Stick to two directions.</strong> Focus on only two swipe directions such as left and down. This prevents the grid from scattering and creates consistent merge opportunities in a predictable pattern.</p>
        <p><strong>Plan every move.</strong> Think ahead before sliding. A careless swipe can block the grid and waste merging chances that took many moves to set up.</p>
        <p><strong>Keep one row or column free.</strong> Always try to maintain at least one open lane to move cupcakes. This gives flexibility and prevents dead ends when the board fills up.</p>
        <p><strong>Use shuffle as a last resort.</strong> The shuffle feature should only be used when you are close to losing. Using it too early can disrupt carefully built patterns and make things worse.</p>
      </div>
    </div>
  )
}
