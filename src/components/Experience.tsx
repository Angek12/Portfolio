'use client'

import { Briefcase, GraduationCap } from 'lucide-react'
import { education, experience } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="experience" title="Experience & Education" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Experience */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
              <Briefcase size={20} className="text-cyan-300" /> Experience
            </h3>
            <ol className="relative space-y-6 border-l border-blue-500/30 pl-6">
              {experience.map((job, i) => (
                <li key={job.role + job.org} className="relative">
                  <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-black bg-cyan-400" />
                  <Reveal delay={i * 0.08}>
                    <div className="glass-card glass-card-hover p-5">
                      <p className="font-mono text-xs text-cyan-300">{job.period}</p>
                      <h4 className="mt-1 text-lg font-semibold text-white">{job.role}</h4>
                      <p className="text-sm text-blue-300">{job.org}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/75">
                        {job.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
              <GraduationCap size={20} className="text-cyan-300" /> Education
            </h3>
            <ol className="relative space-y-6 border-l border-blue-500/30 pl-6">
              {education.map((ed, i) => (
                <li key={ed.school} className="relative">
                  <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-black bg-cyan-400" />
                  <Reveal delay={i * 0.08}>
                    <div
                      className={`glass-card glass-card-hover p-5 ${
                        ed.highlight ? 'border-cyan-400/50 bg-cyan-400/5' : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-mono text-xs text-cyan-300">{ed.period}</p>
                        {ed.status && (
                          <span className="rounded-full bg-cyan-400 px-2.5 py-0.5 text-xs font-bold text-black">
                            {ed.status.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <h4 className="mt-1 text-lg font-semibold text-white">{ed.school}</h4>
                      <p className="text-sm text-blue-300">{ed.programme}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
