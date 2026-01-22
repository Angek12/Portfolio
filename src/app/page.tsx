'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Recommendations from '@/components/Recommendations'
import CVDownload from '@/components/CVDownload'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Recommendations />
        <CVDownload />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  )
}
