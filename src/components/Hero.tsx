'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Mail, Terminal, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const [currentText, setCurrentText] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Tech for sustainability.',
    'Innovation with impact.',
    'Building the future.'
  ]

  useEffect(() => {
    const current = texts[currentText]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < current.length) {
          setDisplayedText(current.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentText((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentText, texts])

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center z-10">
        {/* Name Section - Right/Left Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <p className="text-lg md:text-xl text-blue-400 font-mono mb-2">// Full-Stack Developer</p>
              <p className="text-sm md:text-base text-white/80 font-mono">CEO • Innovator • Tech Leader</p>
            </motion.div>
            
            {/* Center dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            />
            
            {/* Right side - Name */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-center md:text-right"
            >
              <span className="text-white">UWAYO</span>
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ange Kevine</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Typewriter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6 h-12"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-400 mb-4">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-1 h-8 bg-blue-400 ml-1"
            />
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Frontend Engineer & UI/UX Designer building practical technology solutions. 
            CEO <span className="text-blue-400 font-semibold">AgroHaven</span>.
          </p>
        </motion.div>

        {/* Code-Shaped Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-8 justify-center mb-12"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg group-hover:blur-xl transition-all" />
            <div className="relative bg-black/50 border border-blue-500/50 p-5 rounded-none transform rotate-2 hover:rotate-0 transition-all">
              <div className="flex items-center gap-3 text-blue-400 font-mono">
                <Terminal size={20} />
                <span className="text-lg">{'<'}ViewProjects/{'>'}</span>
                <Sparkles size={16} className="animate-pulse" />
              </div>
            </div>
          </motion.button>
          
          <motion.button 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg group-hover:blur-xl transition-all" />
            <div className="relative bg-black/50 border border-blue-500/50 p-5 rounded-none transform -rotate-1 hover:rotate-0 transition-all">
              <div className="flex items-center gap-3 text-blue-400 font-mono">
                <Download size={20} />
                <span className="text-lg">{'{'}download_CV{'}'}</span>
              </div>
            </div>
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg group-hover:blur-xl transition-all" />
            <div className="relative bg-black/50 border border-blue-500/50 p-5 rounded-none transform rotate-1 hover:rotate-0 transition-all">
              <div className="flex items-center gap-3 text-blue-400 font-mono">
                <Mail size={20} />
                <span className="text-lg">[contact]</span>
              </div>
            </div>
          </motion.button>
        </motion.div>

        {/* Animated Design Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="w-12 h-12 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-cyan-400 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
