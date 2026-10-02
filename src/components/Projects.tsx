'use client'

import { ExternalLink, Github, Globe, Sparkles, Sprout } from 'lucide-react'
import { projects, site, type Project } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons: Record<Project['id'], React.ReactNode> = {
  agrohaven: <Sprout size={26} />,
  'opportunity-finder': <Sparkles size={26} />,
  'church-website': <Globe size={26} />,
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="projects"
          title="Projects"
          subtitle="Real products built end to end: backend, APIs, databases, frontends and AI."
        />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.id} className={i === projects.length - 1 && projects.length % 2 === 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <Reveal delay={i * 0.1} className="h-full">
                <article className="glass-card glass-card-hover flex h-full flex-col overflow-hidden">
                  <div className="relative flex h-28 items-center justify-center bg-gradient-to-br from-blue-600/25 to-cyan-600/20">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-black">
                      {icons[p.id]}
                    </span>
                    {p.featured && (
                      <span className="absolute right-3 top-3 rounded-full bg-cyan-400 px-2.5 py-1 text-xs font-bold text-black">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-xs text-cyan-300">
                      {p.role} · {p.period}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{p.description}</p>

                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                      {p.tech.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>

                    {(p.githubUrl || p.liveUrl) && (
                      <div className="mt-auto flex flex-wrap gap-4 pt-5">
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1.5 font-mono text-sm text-blue-300 hover:text-cyan-300"
                          >
                            <Github size={16} /> Source code
                          </a>
                        )}
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1.5 font-mono text-sm text-blue-300 hover:text-cyan-300"
                          >
                            <ExternalLink size={16} /> Live demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 text-center">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={18} />
            More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
