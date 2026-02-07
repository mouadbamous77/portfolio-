import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Techstack from './components/Techstack'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

