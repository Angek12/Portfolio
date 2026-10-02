'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { site } from '@/data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const field =
  'w-full rounded-lg border border-blue-500/30 bg-black/50 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-cyan-400 focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // No backend needed: opens the visitor's email app with the message pre-filled,
  // addressed to the email in src/data/site.ts.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio message from ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const socials = [
    { label: 'GitHub', href: site.links.github, icon: <Github size={22} /> },
    ...(site.links.linkedin ? [{ label: 'LinkedIn', href: site.links.linkedin, icon: <Linkedin size={22} /> }] : []),
  ]

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="contact"
          title="Get In Touch"
          subtitle="Open to software and AI engineering opportunities, including internships."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-card space-y-5 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-cyan-300">Send a Message</h3>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={update('name')} className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update('email')} className={field} placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} required value={form.message} onChange={update('message')} className={`${field} resize-none`} placeholder="How can I help?" />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full space-y-6 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-cyan-300">Let&apos;s Connect</h3>
              <p className="leading-relaxed text-white/75">
                I&apos;d love to talk about AI engineering, full-stack projects, or opportunities to work together.
              </p>

              <a href={`mailto:${site.email}`} className="btn-outline w-full break-all">
                <Mail size={20} className="shrink-0" />
                {site.email}
              </a>

              <p className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={16} className="text-cyan-300" /> {site.location}
              </p>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">Find me online</h4>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] items-center gap-3 rounded-lg border border-blue-500/30 bg-black/50 px-4 py-2 text-white/85 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300"
                      >
                        {s.icon}
                        <span className="text-sm font-medium">{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
