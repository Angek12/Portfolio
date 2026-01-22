'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Code2 } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AgroHaven',
    description: 'Sustainable farming platform using accessible technology to support agricultural resilience and food security.',
    techStack: ['Next.js', 'TypeScript', 'IoT', 'MongoDB', 'AWS'],
    githubUrl: 'https://github.com/angekevine/agrohaven',
    liveUrl: 'https://agrohaven.com',
    featured: true,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Climate Dashboard',
    description: 'Real-time climate monitoring system with predictive analytics for decision-making and risk assessment.',
    techStack: ['React', 'Python', 'Machine Learning', 'PostgreSQL'],
    githubUrl: 'https://github.com/angekevine/climate-dashboard',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Youth Innovation Hub',
    description: 'Digital platform connecting young innovators with resources, mentors, and opportunities.',
    techStack: ['Vue.js', 'Node.js', 'Express', 'Docker'],
    githubUrl: 'https://github.com/angekevine/youth-hub',
    liveUrl: 'https://youthinnovation.org',
    featured: false,
    image: '/api/placeholder/400/300'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const codeVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      rotateY: -10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={codeVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Projects</span>
          </motion.h2>

          {/* Disorganized Layout Container */}
          <div className="relative h-[800px] md:h-[600px]">
            {projects.map((project, index) => {
              const positions = [
                { top: '8%', left: '5%', rotate: -12 },
                { top: '3%', right: '8%', rotate: 8 },
                { bottom: '12%', left: '35%', rotate: -5 }
              ]
              const pos = positions[index]
              
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial={{ opacity: 0, scale: 0.8, rotate: pos.rotate }}
                  animate={{ opacity: 1, scale: 1, rotate: pos.rotate }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 0,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute w-72 md:w-80"
                  style={{
                    top: pos.top,
                    [pos.left ? 'left' : 'right']: pos.left || pos.right,
                  }}
                >
                  {/* Layered Frame */}
                  <div className="relative">
                    {/* Background layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg transform rotate-3 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg transform -rotate-2 scale-102" />
                    
                    {/* Main card */}
                    <div className="relative bg-black/40 backdrop-blur-md border border-blue-500/50 rounded-lg overflow-hidden">
                      {/* Project Image */}
                      <div className="h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <Code2 size={24} className="text-black" />
                          </div>
                        </div>
                        {project.featured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                            className="absolute top-2 right-2"
                          >
                            <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-black text-xs font-bold rounded-full">
                              FEATURED
                            </span>
                          </motion.div>
                        )}
                      </div>

                      <div className="p-4">
                        <motion.h3 
                          variants={codeVariants}
                          className="text-lg font-bold text-blue-400 mb-2 font-mono"
                        >
                          {'<'}{project.title}{'/>'}
                        </motion.h3>

                        <motion.p 
                          variants={codeVariants}
                          className="text-white/70 text-sm mb-3 leading-relaxed font-mono"
                        >
                          {project.description}
                        </motion.p>

                        {/* Tech stack */}
                        <motion.div 
                          variants={codeVariants}
                          className="mb-4"
                        >
                          <div className="text-xs text-blue-400/60 mb-1 font-mono">// tech</div>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Links */}
                        <motion.div 
                          variants={codeVariants}
                          className="flex gap-3"
                        >
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-400 hover:text-cyan-400 transition-colors text-xs font-mono"
                            >
                              <Github size={14} />
                              <span>src</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-400 hover:text-cyan-400 transition-colors text-xs font-mono"
                            >
                              <ExternalLink size={14} />
                              <span>live</span>
                            </a>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Code decoration */}
          <motion.div
            variants={codeVariants}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-black/50 border border-blue-500/30 rounded-lg p-4 font-mono text-sm backdrop-blur-sm">
              <div className="text-blue-400">const</div>
              <div className="text-white"> passion = "Building technology for real impact";</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
