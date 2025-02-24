import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    title: "Geosynta",
    description: "A Jupyter Notebook project focused on geospatial data analysis. It includes various data processing techniques and visualizations related to geographic information systems.",
    techStack: ["Python", "Jupyter Notebook", "GIS", "Data Analysis"],
    github: "https://github.com/snckkund/capstone-geosynta",
  },
  {
    title: "American Sign Language Detection",
    description: "A project focused on recognizing and classifying American Sign Language gestures. It utilizes deep learning frameworks like TensorFlow and OpenCV for hand gesture recognition.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    github: "https://github.com/snckkund/ASL-Detection",
  },
  {
    title: "Heart Disease Prediction",
    description: "A project that utilizes machine learning techniques to predict heart disease from medical data. This project implements various ML models to analyze patient data and predict the likelihood of heart disease.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Healthcare"],
    github: "https://github.com/snckkund/Heart-Disease-Prediction",
  },
  {
    title: "Facial Reconstruction from CCTV Footage",
    description: "A project focused on reconstructing facial images from low-resolution CCTV footage using advanced algorithms. This project explores methods in computer vision and image processing to enhance facial recognition capabilities in surveillance systems.",
    techStack: ["Computer Vision", "Image Processing", "Deep Learning", "OpenCV"],
    github: "https://github.com/shivangichaudhary/Facial-reconstruction-from-CCTV-footage",
  },
]

const Projects: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <motion.div 
      style={{ y }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-orbitron mb-8 neon-text neon-line">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

const ProjectCard: React.FC<{
  title: string
  description: string
  techStack: string[]
  github: string
  live?: string
  index: number
}> = ({ title, description, techStack, github, live, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="neon-border bg-gray-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:scale-105 h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-orbitron mb-4 neon-text">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="bg-gray-700 px-2 py-1 rounded-md text-sm"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="neon-button flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="mr-2" size={16} />
          GitHub
        </motion.a>
        {live && (
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="mr-2" size={16} />
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default Projects