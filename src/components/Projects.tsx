import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    title: "Sentiment Analysis",
    description: "A machine learning project for sentiment analysis of movie reviews using Python and scikit-learn.",
    techStack: ["Python", "scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/snckkund/Sentiment-Analysis",
  },
  {
    title: "Handwritten Digit Recognition",
    description: "An AI project using Convolutional Neural Networks (CNN) to recognize handwritten digits from the MNIST dataset.",
    techStack: ["Python", "TensorFlow", "Keras", "NumPy"],
    github: "https://github.com/snckkund/Handwritten-Digit-Recognition",
  },
  {
    title: "Tic Tac Toe AI",
    description: "An implementation of the Tic Tac Toe game with an AI opponent using the Minimax algorithm.",
    techStack: ["Python", "Pygame"],
    github: "https://github.com/snckkund/Tic-Tac-Toe-AI",
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