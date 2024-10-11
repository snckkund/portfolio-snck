import React from 'react'
import { Award, Star, Trophy } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const achievements = [
  {
    title: "First Place - National AI Hackathon",
    description: "Developed an AI-powered solution for optimizing urban waste management.",
    icon: <Trophy className="text-yellow-400" size={32} />,
  },
  {
    title: "Best Paper Award - International Geospatial Conference",
    description: "Presented research on using machine learning for predicting natural disasters.",
    icon: <Award className="text-blue-400" size={32} />,
  },
  {
    title: "Dean's List - 4 Consecutive Semesters",
    description: "Maintained a GPA of 3.8 or higher for four semesters in a row.",
    icon: <Star className="text-green-400" size={32} />,
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