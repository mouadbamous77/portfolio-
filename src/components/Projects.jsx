import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Application gestion immobilière',
      category: 'Application Web',
      image: '/images/profile/immo.png',
      fallbackImage: 'https://immoblier-app.vercel.app/',
      summary: 'Plateforme complète pour la gestion de biens immobiliers, incluant la recherche, la réservation et la gestion des propriétés.',
      technologies: ['React', 'boostrap',],
      liveUrl: 'https://immoblier-app.vercel.app/',
      githubUrl: 'https://github.com/mouadbamous77/immoblier-app'
    },
    {
      id: 2,
      title: 'e-commerce de vêtements phone',
      category: 'Application Web',
      image: '/images/profile/e-co.png',
      fallbackImage: 'https://e-commerce-phone.vercel.app/',
      summary: 'Site e-commerce spécialisé dans la vente de vêtements pour téléphones, offrant une expérience d\'achat en ligne fluide et sécurisée.',
      technologies: ['React', 'tailwind'],
      liveUrl: 'https://e-commerce-phone.vercel.app/',
      githubUrl: 'https://github.com/mouadbamous77/e-commerce-phone'
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projets</h2>
          <p className="section-subtitle">Découvrez une sélection de mes réalisations</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  },
                },
              }}
              whileHover={{ y: -12 }}
            >
              <div className="project-image-container">
                <motion.div
                  className="project-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                    onError={(e) => {
                      if (e.target.src !== project.fallbackImage) {
                        e.target.src = project.fallbackImage
                      }
                    }}
                    loading="lazy"
                  />
                  <div className="project-image-badge">{project.category}</div>
                </motion.div>
                
                <motion.div
                  className="project-actions"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="action-buttons">
                    <motion.a
                      href={project.liveUrl}
                      className="action-btn live"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Voir le site"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="action-btn code"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Voir le code"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.summary}</p>
                

                <div className="project-footer">
                  <div className="tech-stack-mini">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="mini-tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="more-tech">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

