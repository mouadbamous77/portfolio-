import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiLaravel, SiMysql, SiHtml5, SiCss3, 
  SiJavascript, SiGithub, SiTailwindcss, SiRedux, 
  SiDocker, SiPhp, SiJira, SiMongodb 
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import './Techstack.css';

const Techstack = () => {
  return (
    <section id="techstack" className="techstack section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Les outils et technologies que j'utilise au quotidien</p>
        </motion.div>
        
        <motion.div 
          className="tech-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ height: '100px', position: 'relative', marginTop: '3rem' }}
        >
          <LogoLoop
            logos={[
              { node: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
              { node: <SiReact />, label: 'React', color: '#61DAFB' },
              { node: <SiLaravel />, label: 'Laravel', color: '#FF2D20' },
              { node: <SiMysql />, label: 'MySQL', color: '#4479A1' },
              { node: <SiCss3 />, label: 'CSS3', color: '#1572B6' },
              { node: <SiGithub />, label: 'GitHub', color: '#181717' },
              { node: <SiTailwindcss />, label: 'Tailwind', color: '#06B6D4' },
              { node: <SiRedux />, label: 'Redux', color: '#764ABC' },
              { node: <SiJavascript />, label: 'JavaScript', color: '#F7DF1E' },
              { node: <SiHtml5 />, label: 'HTML5', color: '#E34F26' },
              { node: <SiDocker />, label: 'Docker', color: '#2496ED' },
              { node: <SiPhp />, label: 'PHP', color: '#777BB4' },
              { node: <SiJira />, label: 'Jira', color: '#0052CC' },
            ]}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            pauseOnHover={true}
            renderItem={(item) => (
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '3rem',
                  color: item.color
                }}
              >
                {item.node}
              </div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;
