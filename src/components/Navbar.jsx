import React, { useState } from 'react'
import logo from '../assets/logo-solinex-512x512.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl flex gap-2 items-center font-bold text-solinex-teal hover:text-solinex-blue transition-colors duration-300"
            >
              <img
                src={logo}
                alt="Solinex Logo"
                className="h-10 w-10 "
              />
              Solinex
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-solinex-blue px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-solinex-blue px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-solinex-blue px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Solutions
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-solinex-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-solinex-blue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-solinex-blue block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-solinex-blue block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection('solutions')}
            className="text-gray-700 hover:text-solinex-blue block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
          >
            Solutions
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
