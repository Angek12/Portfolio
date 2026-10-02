import { ArrowUp, Code, Github, Linkedin, Mail } from 'lucide-react'
import { site } from '@/data/site'

export default function Footer() {
  const icon =
    'flex h-11 w-11 items-center justify-center rounded-full text-blue-300 transition-colors hover:bg-white/10 hover:text-cyan-300'

  return (
    <footer className="relative z-10 border-t border-blue-500/20 bg-black/40 px-4 py-8 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
            <Code size={18} className="text-black" />
          </span>
          <div>
            <p className="font-bold text-white">{site.name}</p>
            <p className="text-sm text-cyan-300/90">{site.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={icon}>
            <Github size={20} />
          </a>
          {site.links.linkedin && (
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={icon}>
              <Linkedin size={20} />
            </a>
          )}
          <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className={icon}>
            <Mail size={20} />
          </a>
          <a href="#home" aria-label="Back to top" className={`${icon} border border-blue-500/40`}>
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl border-t border-blue-500/20 pt-6 text-center font-mono text-xs text-white/55">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
