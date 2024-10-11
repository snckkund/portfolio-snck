import React from 'react'
import { Github, Linkedin, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; 2024 SNCK Kund. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/snckkund" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/snck-kund/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/only.chandu_06/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors duration-300">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer