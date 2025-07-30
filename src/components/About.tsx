import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      style={{ y }}
    >
      <h2 className="text-4xl font-orbitron mb-8 neon-text neon-line">About Me</h2>
      <div className="neon-border bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
        <p className="mb-4">
          I'm SN Chandra Kanta Kund, a passionate student at CHRIST (Deemed to be University) Bangalore Kengeri, deeply interested in the fields of machine learning and geospatial analysis. My journey in technology is driven by a curiosity to explore how data can be leveraged to solve real-world problems.
        </p>
        <p className="mb-4">
          Currently, I'm focusing on developing my skills in Python, TensorFlow, and various geospatial technologies. I believe in the power of continuous learning and am always excited to take on new challenges that push the boundaries of my knowledge.
        </p>
        <p>
          Outside of academics, I enjoy participating in hackathons, contributing to open-source projects, and exploring the latest advancements in AI and geospatial technologies.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-orbitron mb-4 neon-text">Education</h3>
        <div className="neon-border bg-gray-800 bg-opacity-50 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-semibold mb-2">M.Tech in Computer Science</h4>
          <p>CHRIST (Deemed to be University) Bangalore Kengeri</p>
          <p>JULY 2025 - Present</p>
        </div>
        <div className="neon-border bg-gray-800 bg-opacity-50 p-4 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h4>
          <p>VIT Bhopal University</p>
          <p>JULY 2021 - JULY 2025</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About