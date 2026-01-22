'use client'

import { motion } from 'framer-motion'
import { Code, ArrowUp, Sparkles } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-8 px-4 overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, #3b82f6 0%, #06b6d4 100%)",
            "linear-gradient(45deg, #06b6d4 0%, #8b5cf6 100%)",
            "linear-gradient(45deg, #8b5cf6 0%, #3b82f6 100%)",
            "linear-gradient(45deg, #3b82f6 0%, #06b6d4 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 opacity-10"
      />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
            >
              <Code size={18} className="text-black" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white">UWAYO Ange Kevine</h3>
              <p className="text-blue-400 text-sm font-mono">Building the future, one line at a time</p>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-blue-500/50 rounded-lg px-4 py-2 flex items-center gap-2">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp size={16} className="text-blue-400" />
              </motion.div>
              <span className="text-blue-400 font-mono text-sm">Back to Top</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={12} className="text-cyan-400" />
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 pt-6 border-t border-blue-500/30 text-center"
        >
          <p className="text-white/60 text-sm font-mono">
            © 2026 UWAYO Ange Kevine • Crafted with passion and code
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
