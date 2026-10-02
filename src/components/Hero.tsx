'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, Github, GraduationCap, Linkedin, Mail } from 'lucide-react'
import { site } from '@/data/site'

const PHRASES = ['AI-powered applications', 'Full-stack web platforms', 'Backend systems & REST APIs']

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(PHRASES[0])
      return
    }
    const full = PHRASES[index]
    let delay = deleting ? 35 : 75
    if (!deleting && displayed === full) delay = 1800
    else if (deleting && displayed === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && displayed === full) setDeleting(true)
      else if (deleting && displayed === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % PHRASES.length)
      } else {
        setDisplayed(deleting ? full.slice(0, displayed.length - 1) : full.slice(0, displayed.length + 1))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [displayed, deleting, index, reduceMotion])

  const iconLink =
    'flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/40 bg-black/40 text-blue-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300'

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center px-4 pb-16 pt-28 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.a
          href="#experience"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200 transition-colors hover:bg-cyan-400/20 sm:text-sm"
        >
          <GraduationCap size={16} className="shrink-0" />
          <span>
            Graduate of <strong className="font-semibold">{site.graduation.school}</strong> · {site.graduation.date}
          </span>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          <span className="gradient-text">{site.firstName}</span> <span className="text-white">{site.lastName}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 text-lg font-semibold text-white sm:text-2xl md:text-3xl"
        >
          {site.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p aria-hidden="true" className="mt-4 h-8 font-mono text-base text-cyan-300 sm:text-xl">
            {`> ${displayed}`}
            <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-cyan-300" />
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            I build AI-powered and full-stack applications end to end — from backend architecture and APIs to React
            frontends and AI integration. Founder & Lead Developer of{' '}
            <span className="font-semibold text-cyan-300">AgroHaven</span>.
          </p>
          <p className="mt-3 inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 font-mono text-sm text-blue-200">
            {site.experienceYears}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a href={site.cv.path} download={site.cv.fileName} className="btn-primary">
            <Download size={18} />
            Download CV
          </a>
          <a href="#projects" className="btn-outline">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={iconLink}>
            <Github size={20} />
          </a>
          {site.links.linkedin && (
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={iconLink}>
              <Linkedin size={20} />
            </a>
          )}
          <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className={iconLink}>
            <Mail size={20} />
          </a>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="mx-auto mt-10 hidden h-11 w-11 items-center justify-center rounded-full text-cyan-300/70 transition-colors hover:text-cyan-300 md:flex"
        >
          <ArrowDown size={22} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
