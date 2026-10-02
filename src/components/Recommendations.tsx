'use client'

import { Briefcase, GraduationCap, Quote, User } from 'lucide-react'
import { recommendations, site, type Recommendation } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons: Record<string, React.ReactNode> = {
  'sarah-johnson': <Briefcase size={20} />,
  'emily-chen': <User size={20} />,
  'awet-fessah': <GraduationCap size={20} />,
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

function Card({ rec }: { rec: Recommendation }) {
  return (
    <div className="glass-card glass-card-hover flex h-full flex-col p-6">
      {rec.kind === 'quote' ? (
        <>
          <Quote className="mb-4 text-cyan-300" size={24} aria-hidden="true" />
          <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-white/80">{rec.quote}</blockquote>
        </>
      ) : (
        <div className="mb-6 flex-1">
          <span className="chip">Reference & recommender</span>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {rec.role} at {rec.organization}, where Ange completed the {site.graduation.programme} programme (graduated {site.graduation.date}).
          </p>
        </div>
      )}

      <div className="flex items-center gap-3 border-t border-blue-500/30 pt-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-black"
          aria-hidden="true"
        >
          {icons[rec.id] ?? initials(rec.name)}
        </span>
        <div>
          <h3 className="font-semibold text-white">{rec.name}</h3>
          <p className="text-sm text-blue-300">
            {rec.role}, {rec.organization}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Recommendations() {
  return (
    <section id="recommendations" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="recommendations" title="Recommendations" />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, i) => (
            <li key={rec.id} className={i === recommendations.length - 1 && recommendations.length % 2 === 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <Reveal delay={i * 0.1} className="h-full">
                <Card rec={rec} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
