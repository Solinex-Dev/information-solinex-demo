import React, { Suspense, lazy } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar, Footer } from './features/layout'
import { Hero } from './features/sections'
import { ErrorBoundary } from './shared/common'

// Lazy load heavy components
const AboutUs = lazy(() => import('./features/sections/AboutUs'))
const Projects = lazy(() => import('./features/sections/Projects'))
const Solutions = lazy(() => import('./features/sections/Solutions'))
const TechStack = lazy(() => import('./features/sections/TechStack'))
const ContactForm = lazy(() => import('./features/sections/ContactForm'))

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-solinex-blue"></div>
  </div>
)

function App() {

  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<LoadingSpinner />}>
              <AboutUs />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Solutions />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <TechStack />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <ContactForm />
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  )
}

export default App
