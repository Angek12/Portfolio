'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, Briefcase, User, GraduationCap } from 'lucide-react'

interface Recommendation {
  id: number
  name: string
  role: string
  organization: string
  content: string
  rating: number
  icon: React.ReactNode
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    organization: "JA Africa",
    content: "Ange demonstrates exceptional leadership and technical innovation. Her ability to combine cutting-edge technology with social impact is truly remarkable.",
    rating: 5,
    icon: <Briefcase size={20} />
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Software Engineer & Friend",
    organization: "Tech Innovations Lab",
    content: "Working with Ange has been inspiring. Her creativity and problem-solving skills are unmatched. She's destined for great things in tech.",
    rating: 5,
    icon: <User size={20} />
  },
  {
    id: 3,
    name: "Dr. Michael Roberts",
    role: "Computer Science Professor",
    organization: "University of Technology",
    content: "Ange is one of the most dedicated and innovative students I've taught. Her passion for using technology to solve real-world problems is exceptional.",
    rating: 5,
    icon: <GraduationCap size={20} />
  }
]

export default function Recommendations() {
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  }

  return (
    <section id="recommendations" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Recommendations</span>
          </motion.h2>

          {/* Testimonials Grid - Matching Image Design */}
          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-lg p-6 h-full">
                  {/* Quote Icon */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="mb-4"
                  >
                    <Quote className="text-blue-400" size={24} />
                  </motion.div>

                  {/* Content */}
                  <motion.p 
                    variants={textVariants}
                    className="text-white/80 mb-6 leading-relaxed text-sm"
                  >
                    {rec.content}
                  </motion.p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(rec.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 + index * 0.2 }}
                      >
                        <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author */}
                  <motion.div 
                    variants={textVariants}
                    className="flex items-center gap-3 pt-4 border-t border-blue-500/30"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
                    >
                      <div className="text-black">{rec.icon}</div>
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">{rec.name}</h4>
                      <p className="text-blue-400 text-sm">{rec.role}, {rec.organization}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple Bottom Indicator */}
          <motion.div
            variants={textVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
              <span className="text-blue-400 text-sm font-mono">Trusted by industry leaders</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
