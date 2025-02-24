import React from 'react'
import { Award, Star, Trophy } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const achievements = [
  {
    title: "Machine Learning Intern - Unified Mentor",
    description: "Developed ML models for Vehicle Price Prediction, ASL Detection, and Heart Disease Prediction, improving model accuracy.",
    icon: <Trophy className="text-yellow-400" size={32} />,
  },
  {
    title: "Geosynta Project Lead",
    description: "Led geospatial data analysis using Jupyter Notebook, implementing data processing and visualization techniques for GIS applications.",
    icon: <Star className="text-green-400" size={32} />,
  },
  {
    title: "ASL Detection System",
    description: "Implemented deep learning models using TensorFlow and OpenCV to classify ASL gestures.",
    icon: <Award className="text-blue-400" size={32} />,
  },
  {
    title: "Kidney Disease Classification",
    description: "Developed a deep learning model for medical diagnosis, improving disease prediction accuracy.",
    icon: <Trophy className="text-yellow-400" size={32} />,
  },
  {
    title: "AI/ML Certifications",
    description: "Completed ISRO-IIRS Geodata Analysis, NPTEL Cloud Computing (Elite), and University of Michigan's Applied ML certifications.",
    icon: <Star className="text-green-400" size={32} />,
  },
  {
    title: "Competitive Programming",
    description: "Active on LeetCode, GeeksforGeeks, and Code360, showcasing strong problem-solving skills in DSA and algorithms.",
    icon: <Award className="text-blue-400" size={32} />,
  },
]

const Achievements: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <motion.div 
      style={{ y }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-orbitron mb-8 neon-text neon-line">Achievements</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </motion.div>
  )
}

const AchievementCard: React.FC<{
  title: string
  description: string
  icon: React.ReactNode
}> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="neon-border bg-gray-800 bg-opacity-50 p-6 rounded-lg flex items-start space-x-4 transition-all duration-300 h-full"
      whileHover={{ scale: 1.03 }}
      layout
    >
      <div className="flex-shrink-0 neon-pulse">{icon}</div>
      <div>
        <h3 className="text-xl font-orbitron mb-2 neon-text">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export default Achievements