import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar, Footer } from './components/layout'
import { Hero, AboutUs, Projects, Solutions, TechStack, ContactForm } from './components/sections'

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
