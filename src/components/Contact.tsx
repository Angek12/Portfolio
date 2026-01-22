'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, Twitter, Globe, Send } from 'lucide-react'

export default function Contact() {
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

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/angeekevine',
      color: 'hover:text-white hover:bg-gray-800'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/angekevine',
      color: 'hover:text-white hover:bg-blue-600'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      url: 'https://twitter.com/angekevine',
      color: 'hover:text-white hover:bg-sky-500'
    },
    {
      icon: <Globe size={24} />,
      label: 'Website',
      url: 'https://angekevine.com',
      color: 'hover:text-white hover:bg-accent'
    }
  ]

  const handleEmailClick = () => {
    window.location.href = 'mailto:angeekevinee@gmail.com'
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-black/30 border border-blue-500/30 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Let's collaborate on something amazing..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">Let's Connect</h3>
                
                <p className="text-white/80 mb-8 leading-relaxed">
                  I'm always excited to collaborate on innovative projects, especially those focused on 
                  sustainability, agriculture technology, and empowering young innovators. 
                  Feel free to reach out!
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmailClick}
                  className="px-6 py-3 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all w-full flex items-center justify-center gap-3 mb-8"
                >
                  <Mail size={20} />
                  angeekevinee@gmail.com
                </motion.button>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow My Journey</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 p-3 bg-black/50 border border-blue-500/30 rounded-lg transition-all ${link.color}`}
                      >
                        {link.icon}
                        <span className="text-sm font-medium">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6 text-center"
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Open to Opportunities</h4>
                <p className="text-white/80">
                  Available for freelance projects, collaborations, and speaking engagements
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
