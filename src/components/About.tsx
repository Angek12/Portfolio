'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code, Database, Cpu, Palette } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: string
}

const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code size={24} />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
    color: 'from-accent to-cyan-500'
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Cpu size={24} />,
    skills: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tools & Platforms',
    icon: <Database size={24} />,
    skills: ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'AWS'],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Additional Roles',
    icon: <Palette size={24} />,
    skills: ['UI/UX Designer (Figma)', 'Frontend Developer', 'Project Manager'],
    color: 'from-green-500 to-teal-500'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentText, setCurrentText] = useState(0)

  const texts = [
    'Full-Stack Developer',
    'UI/UX Designer', 
    'Innovation Enthusiast',
    'Problem Solver'
  ]

  useEffect(() => {
    const text = texts[currentText]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText === text) {
          setTimeout(() => setIsDeleting(true), 1500)
        } else {
          setDisplayedText(text.slice(0, displayedText.length + 1))
        }
      } else {
        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentText((prev) => (prev + 1) % texts.length)
        } else {
          setDisplayedText(text.slice(0, displayedText.length - 1))
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentText, texts])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Name and Code Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">UWAYO</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ange Kevine</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a href="#projects" className="px-6 py-3 bg-black/50 border border-blue-500/50 text-blue-400 font-mono rounded hover:bg-blue-600 hover:text-white transition-all">
                {'<'}ViewProjects/{'>'}
              </a>
              <a href="#cv-download" className="px-6 py-3 bg-black/50 border border-blue-500/50 text-blue-400 font-mono rounded hover:bg-blue-600 hover:text-white transition-all">
                {'{'}download_CV{'}'}
              </a>
              <a href="#contact" className="px-6 py-3 bg-black/50 border border-blue-500/50 text-blue-400 font-mono rounded hover:bg-blue-600 hover:text-white transition-all">
                [contact]
              </a>
            </div>
            
            {/* Animated Typewriter Text */}
            <div className="text-center md:text-left">
              <span className="text-xl text-blue-400 font-mono">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>

          {/* Right Side - Content from First Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-lg p-6 relative overflow-hidden">
              {/* Animated background effect */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
                    "linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)",
                    "linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0"
              />
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg font-semibold text-blue-400 mb-4 font-mono"
                >
                  // About Me
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/80 leading-relaxed"
                >
                  <span className="text-blue-400 font-semibold">Software developer</span> creating 
                  <span className="text-cyan-400 font-semibold"> exceptional digital experiences</span>. 
                  Passionate about combining 
                  <span className="text-blue-400 font-semibold"> cutting-edge technology</span> with 
                  <span className="text-cyan-400 font-semibold"> innovative design</span> to solve 
                  <span className="text-blue-400 font-semibold"> real-world problems</span>.
                </motion.p>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 text-blue-500/30"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 text-cyan-500/30"
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                </motion.div>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-400 ml-2 font-mono text-sm">mission.js</span>
              </div>
              
              <pre className="text-white font-mono text-sm leading-relaxed overflow-x-auto">
                <span className="text-blue-400">const</span> <span className="text-green-400">mission</span> <span className="text-blue-400">=</span> {'{'}
                {'  '}<span className="text-red-400">build</span>: <span className="text-yellow-400">"innovative solutions"</span>,
                {'  '}<span className="text-red-400">bridge</span>: <span className="text-yellow-400">"technology and human needs"</span>,
                {'  '}<span className="text-red-400">create</span>: <span className="text-yellow-400">"meaningful impact"</span>,
                {'  '}<span className="text-red-400">approach</span>: <span className="text-yellow-400">"thoughtful design + clean code"</span>
                {'}'};
                {'  '}
                <span className="text-blue-400">function</span> <span className="text-green-400">executeMission</span>() {'{'}
                {'  '}<span className="text-purple-400">return</span> mission.build <span className="text-blue-400">+</span> mission.bridge;
                {'}'}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
