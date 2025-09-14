import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Showcase from './components/Showcase'
import AboutUs from './components/AboutUs'
import Solutions from './components/Solutions'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Showcase />
          <AboutUs />
          <Solutions />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
