import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveNav(sectionId === 'hero' ? 'home' : sectionId)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', section: 'hero' },
    { id: 'about', label: 'About', section: 'about' },
    { id: 'skills', label: 'Skills', section: 'techstack' },
    { id: 'projects', label: 'Projects', section: 'projects' },
    { id: 'contact', label: 'Contact', section: 'contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.div
          className="nav-logo"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-letters">MB</span>
        </motion.div>

        {/* Navigation Links */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.section}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.section)
                }}
                className={activeNav === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="nav-social">
          <motion.a
            href="https://github.com/mouadbamous77"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mouadbamous/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
