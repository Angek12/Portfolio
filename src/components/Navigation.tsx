'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Code, User, Briefcase, Mail, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { icon: <User size={18} />, label: 'About', href: '#about' },
    { icon: <Briefcase size={18} />, label: 'Projects', href: '#projects' },
    { icon: <Code size={18} />, label: 'Skills', href: '#skills' },
    { icon: <Mail size={18} />, label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.header 
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-blue-500/20' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code size={18} className="text-black" />
            </div>
            <span className="text-xl font-bold text-white">AK</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400"
                >
                  {item.icon}
                </motion.div>
                <span className="font-medium">{item.label}</span>
                <motion.div
                  className="h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform"
                  initial={false}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
        style={{ width: useTransform(scrollY, [0, 100], ['0%', '100%']) }}
      />
    </motion.header>
  )
}
