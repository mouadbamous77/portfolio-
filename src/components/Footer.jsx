import React from 'react';

const Footer = () => {
  return (
    <footer className="footer fa-inverse" style={{ background: '#060707', padding: '2rem 0', color: '#fff' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="footer-left">
          <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700' }}>MOUAD BAMOUS</h4>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>© 2026 MB</span>
        </div>
        
        <div className="footer-right" style={{ display: 'flex', gap: '1.5rem' }}>
           <a href="https://github.com/mouadbamous77" style={{ color: '#fff', fontSize: '1.2rem' }}>GITHUB</a>
           <a href="https://www.linkedin.com/in/mouadbamous/" style={{ color: '#fff', fontSize: '1.2rem' }}>LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
