'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, ArrowRight } from 'lucide-react'

export default function CVDownload() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const handleDownload = () => {
    // Download the actual CV file
    const link = document.createElement('a')
    link.href = '/Ange_Kevine_Uwayo_CV.pdf'
    link.download = 'Ange_Kevine_Uwayo_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="cv-download" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="gradient-text">Download My CV</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            Get a comprehensive overview of my experience, skills, and projects. 
            My CV showcases my journey in frontend engineering, UI/UX design, 
            and sustainable technology development.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center gap-3 text-lg shadow-lg"
            >
              <Download size={24} />
              <span>Download CV</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-foreground/60"
            >
              <FileText size={20} />
              <span>PDF Format • Updated 2026</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-black/30 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Experience</h3>
              <p className="text-white/80">2+ years in frontend development and design</p>
            </div>
            <div className="bg-black/30 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Projects</h3>
              <p className="text-white/80">10+ successful projects in sustainability tech</p>
            </div>
            <div className="bg-black/30 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Recognition</h3>
              <p className="text-white/80">Multiple awards for innovation and impact</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
