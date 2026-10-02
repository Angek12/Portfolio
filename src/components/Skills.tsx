'use client'

import { Award, Cpu, Code, Monitor, Server, Wrench } from 'lucide-react'
import { skillGroups } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons: Record<string, React.ReactNode> = {
  ai: <Cpu size={22} />,
  languages: <Code size={22} />,
  frontend: <Monitor size={22} />,
  backend: <Server size={22} />,
  tools: <Wrench size={22} />,
  certs: <Award size={22} />,
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="skills" title="Skills & Expertise" />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const isFocus = 'focus' in g && g.focus
            return (
              <li key={g.id}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <div className={`glass-card glass-card-hover h-full p-5 ${isFocus ? 'border-cyan-400/50 bg-cyan-400/5' : ''}`}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-black">
                        {icons[g.id]}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                      {isFocus && (
                        <span className="ml-auto rounded-full bg-cyan-400 px-2 py-0.5 text-[10px] font-bold text-black">FOCUS</span>
                      )}
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
