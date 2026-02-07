import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import './About.css'

const About = () => {
  const ref = useRef(null)


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">À propos</h2>
          <p className="section-subtitle">Découvrez mon parcours et mes compétences</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <motion.div
              className="image-wrapper"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/profile/profile-photo.jpg"
                alt="Mouad Bamous"
                className="profile-image"
                onError={(e) => {
                  // Fallback vers placeholder si l'image n'existe pas
                  e.target.style.display = 'none'
                  const placeholder = e.target.nextElementSibling
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Photo professionnelle
                </motion.span>
              </div>
              <motion.div
                className="image-decoration"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <motion.h3
              className="about-name"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Mouad Bamous
            </motion.h3>
            <motion.p
              className="about-role"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Étudiant en Développement Digital
            </motion.p>
            
            <motion.div
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p>
                Étudiant passionné en développement digital, je me spécialise dans la création 
                de solutions web modernes et performantes. Mon parcours académique me permet 
                d'allier théorie et pratique pour développer des applications à la fois 
                esthétiques et fonctionnelles.
              </p>
              <p>
                Je maîtrise les technologies front-end et back-end, avec une expertise particulière 
                en React, JavaScript et PHP. Mon approche se base sur l'apprentissage continu, 
                la collaboration et l'écoute active pour créer des solutions adaptées aux besoins 
                réels des utilisateurs.
              </p>
            </motion.div>
            <motion.div
              className="about-cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a href="/cv.pdf" download className="btn-outline">
                <FaDownload /> Télécharger mon CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
export default About ;


