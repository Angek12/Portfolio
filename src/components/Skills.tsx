'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
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

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-lg p-6 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}
                >
                  <div className="text-black text-2xl">{category.icon}</div>
                </motion.div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">{category.title}</h3>
                <div className="space-y-1">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <div key={skill} className="text-sm text-white/80">{skill}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={categoryVariants}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg px-8 py-4">
              <p className="text-xl font-semibold text-blue-400">
                2+ years of experience
              </p>
              <p className="text-white/80">
                Building innovative digital solutions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
