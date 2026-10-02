'use client'

import { Award, Cpu, GraduationCap, Rocket } from 'lucide-react'
import { site } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const focusAreas = [site.experienceYears, 'AI engineering', 'Full-stack development', 'Backend & APIs', 'React frontends']

const codeLines: { k: string; v: string }[] = [
  { k: 'role', v: '"Software Engineer"' },
  { k: 'focus', v: '["AI engineering", "Full-stack"]' },
  { k: 'languages', v: '["Java", "TypeScript", "Python"]' },
  { k: 'education', v: '"Rwanda Coding Academy (Graduated)"' },
  { k: 'building', v: '"AgroHaven"' },
]

const highlights = [
  {
    icon: <Rocket size={20} />,
    title: 'AgroHaven',
    text: "Prototype demoed to Rwanda's Ministry of Agriculture and a bank; won 3 competitions.",
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI integration',
    text: 'Working with the OpenAI API, Gemini and Claude, and building AI-assisted matching systems.',
  },
  {
    icon: <Award size={20} />,
    title: 'Production work',
    text: 'Shipped a church website that is now in active production use.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="about" title="About Me" />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="min-w-0 space-y-6">
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">{site.summary}</p>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              I am increasingly focused on <span className="font-semibold text-cyan-300">AI engineering</span> — while
              keeping the software, frontend and full-stack foundations that let me ship complete products.
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
              {focusAreas.map((f) => (
                <li key={f} className="chip">
                  {f}
                </li>
              ))}
            </ul>

            <div className="glass-card flex items-start gap-4 border-cyan-400/40 bg-cyan-400/5 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-black">
                <GraduationCap size={22} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-300">Graduated · {site.graduation.date}</p>
                <h3 className="text-lg font-semibold text-white">{site.graduation.school}</h3>
                <p className="text-sm text-white/70">{site.graduation.programme}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="min-w-0 space-y-6">
            <div className="glass-card p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-sm text-gray-400">profile.ts</span>
              </div>
              <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-white sm:text-sm">
                <code>
                  <span className="text-blue-400">const</span> <span className="text-green-400">ange</span> = {'{'}
                  {'\n'}
                  {codeLines.map((l) => (
                    <span key={l.k}>
                      {'  '}
                      <span className="text-red-400">{l.k}</span>: <span className="text-yellow-400">{l.v}</span>,{'\n'}
                    </span>
                  ))}
                  {'}'};
                </code>
              </pre>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((h) => (
                <li key={h.title} className="glass-card glass-card-hover flex items-start gap-3 p-4">
                  <span className="mt-0.5 text-cyan-300">{h.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{h.title}</h3>
                    <p className="text-sm text-white/70">{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
