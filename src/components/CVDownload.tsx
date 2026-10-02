'use client'

import { Download, ExternalLink, FileText } from 'lucide-react'
import { site } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function CVDownload() {
  return (
    <section id="cv-download" className="section">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="resume" title="Download My CV" />
        <Reveal>
          <div className="glass-card glass-card-hover flex flex-col items-center gap-6 p-6 text-center sm:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-black">
              <FileText size={30} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">{site.name}</h3>
              <p className="mt-1 text-cyan-300">{site.title}</p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                My latest CV: experience, projects, technical skills and education, including my graduation from{' '}
                {site.graduation.school}.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <a href={site.cv.path} download={site.cv.fileName} className="btn-primary">
                <Download size={18} />
                Download CV
              </a>
              <a href={site.cv.path} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <ExternalLink size={18} />
                View in browser
              </a>
            </div>
            <p className="font-mono text-xs text-white/50">PDF</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
