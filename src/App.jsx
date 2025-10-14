import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar, Footer } from './features/layout'
import { Hero, AboutUs, Projects, Solutions, TechStack, ContactForm } from './features/sections'

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
