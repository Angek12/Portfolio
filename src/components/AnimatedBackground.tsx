'use client'

import { useEffect, useState } from 'react'

const symbols = ['{', '}', '<', '>', '/', ';', 'const', 'async', 'function', 'return', 'import', 'export']
const techIcons = ['⚛️', '🚀', '💻', '🔧', '📱', '🌐', '⚡', '🎯']

interface Particle {
  id: number
  x: number
  y: number
  symbol: string
  speed: number
  opacity: number
  size: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          symbol: Math.random() > 0.5 ? symbols[Math.floor(Math.random() * symbols.length)] : techIcons[Math.floor(Math.random() * techIcons.length)],
          speed: 0.1 + Math.random() * 0.3,
          opacity: 0.1 + Math.random() * 0.3,
          size: 12 + Math.random() * 8,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed < -5 ? 105 : particle.y - particle.speed,
          x: particle.x + (Math.random() - 0.5) * 0.2,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-black" />
      
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono text-blue-400 transition-all duration-300"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            fontSize: `${particle.size}px`,
            transform: `translate(-50%, -50%)`,
            animation: `float ${20 / particle.speed}s infinite linear`,
          }}
        >
          {particle.symbol}
        </div>
      ))}

      <style>{`
        @keyframes float {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
