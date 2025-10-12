import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import Solutions from './components/Solutions'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Projects />
          <Solutions />
          <TechStack />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
