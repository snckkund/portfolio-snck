import React from 'react'
import { Code, Database, Globe } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "Java", "C++"] },
  { category: "Machine Learning", items: ["TensorFlow", "Scikit-learn", "PyTorch", "Keras"] },
  { category: "Geospatial Technologies", items: ["ArcGIS", "QGIS", "Google Earth Engine", "GeoPandas"] },
  { category: "Web Development", items: ["React", "Node.js", "HTML/CSS", "Flask", "FastApi"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Jupyter Notebooks"] },
]

const Skills: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <motion.div 
      style={{ y }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-orbitron mb-8 neon-text neon-line">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <SkillCard key={index} {...skillGroup} />
        ))}
      </div>
    </motion.div>
  )
}

const SkillCard: React.FC<{ category: string; items: string[] }> = ({ category, items }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code className="text-neon-blue" size={32} />
      case "Databases":
        return <Database className="text-neon-pink" size={32} />
      case "Geospatial Technologies":
        return <Globe className="text-neon-green" size={32} />
      default:
        return null
    }
  }

  return (
    <div className="neon-border bg-gray-800 bg-opacity-50 p-6 rounded-lg h-full">
      <div className="flex items-center mb-4">
        {getIcon(category)}
        <h3 className="text-2xl font-orbitron ml-4 neon-text">{category}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-neon-blue rounded-full mr-2 neon-pulse"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills