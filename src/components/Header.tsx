import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className="bg-gray-800 py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-orbitron neon-text">SNCK Kund</Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/achievements">Achievements</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800"
          >
            <nav className="flex flex-col items-center space-y-2 py-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/achievements">Achievements</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive ? 'text-neon-blue' : ''}`}
    >
      {children}
    </Link>
  )
}

export default Header