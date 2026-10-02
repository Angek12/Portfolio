import Providers from '@/components/Providers'
import AnimatedBackground from '@/components/AnimatedBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Recommendations from '@/components/Recommendations'
import CVDownload from '@/components/CVDownload'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Providers>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <AnimatedBackground />
      <Navigation />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recommendations />
        <CVDownload />
        <Contact />
      </main>
      <Footer />
    </Providers>
  )
}
