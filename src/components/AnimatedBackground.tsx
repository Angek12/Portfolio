const SYMBOLS = ['{ }', '</>', 'const', 'async', '=>', 'import', 'return', 'AI', 'API', 'SQL', 'git', 'py', 'ts', ';']

// Deterministic pseudo-random so server and client render the same markup.
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

const rand = seeded(42)
const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  symbol: SYMBOLS[i % SYMBOLS.length],
  left: Math.round(rand() * 96),
  size: 12 + Math.round(rand() * 8),
  opacity: 0.1 + rand() * 0.18,
  duration: 28 + Math.round(rand() * 30),
  delay: -Math.round(rand() * 50),
}))

/** Decorative floating code symbols. CSS-only animation, hidden for reduced motion. */
export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-black" />
      {particles.map((p) => (
        <span
          key={p.id}
          className={`bg-particle absolute top-full font-mono text-blue-400 ${p.id > 8 ? 'hidden sm:block' : ''}`}
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
            willChange: 'transform',
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
