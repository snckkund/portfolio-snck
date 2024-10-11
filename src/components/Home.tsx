import React from 'react'
import { Github, Linkedin, FileText, Instagram } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"
        style={{ y }}
      ></motion.div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: Math.random() * 0.5 + 0.5, scale: 1 }}
            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          ></motion.div>
        ))}
      </div>
      <motion.div 
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-orbitron mb-4 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SN Chandra Kanta Kund
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Student at VIT Bhopal | Machine Learning & Geospatial Analysis Enthusiast
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SocialButton href="https://www.linkedin.com/in/snck-kund/" icon={<Linkedin />} />
          <SocialButton href="https://github.com/snckkund" icon={<Github />} />
          <SocialButton href="https://www.instagram.com/only.chandu_06/" icon={<Instagram />} />
          <SocialButton href="/resume.pdf" icon={<FileText />} text="Resume" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to="/contact" className="neon-button">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

const SocialButton: React.FC<{ href: string; icon: React.ReactNode; text?: string }> = ({ href, icon, text }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="neon-button flex items-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
    {text && <span className="ml-2">{text}</span>}
  </motion.a>
)

export default Home