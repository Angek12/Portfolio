'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Cpu, Database, Globe } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  skills: string[]
  icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'Foundation',
    skills: ['HTML', 'CSS', 'JavaScript'],
    icon: <Code size={20} />
  },
  {
    year: '2024',
    title: 'Frontend & Robotics',
    skills: ['React', 'Next.js', 'Robotics'],
    icon: <Cpu size={20} />
  },
  {
    year: '2025',
    title: 'Advanced Development',
    skills: ['Python', 'Machine Learning', 'Databases', 'Docker'],
    icon: <Database size={20} />
  },
  {
    year: '2026',
    title: 'Full-Stack Leadership',
    skills: ['Full-stack Systems', 'AI', 'IoT', 'Leadership'],
    icon: <Globe size={20} />
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="timeline" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Growth Journey</span>
          </motion.h2>

          {/* Timeline Layout - Matching Image Design */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const isLeft = index % 2 === 0
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`relative flex items-center ${
                      isLeft ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative w-5/12 ${
                        isLeft ? 'text-right pr-8' : 'text-left pl-8'
                      }`}
                    >
                      <div className="bg-black/40 backdrop-blur-md border border-blue-500/50 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            animate={{ 
                              rotate: isLeft ? [0, 360] : [0, -360],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                              scale: { duration: 2, repeat: Infinity }
                            }}
                            className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
                          >
                            <div className="text-black">{item.icon}</div>
                          </motion.div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {item.year}
                          </h3>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h4>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + skillIndex * 0.1 }}
                              className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-mono"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black/40"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
