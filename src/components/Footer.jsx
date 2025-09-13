import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-solinex-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Company name + tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Solinex</h3>
            <p className="text-solinex-green/80 text-lg">
              Technology Solutions for Tomorrow
            </p>
            <p className="text-sm text-gray-300 max-w-sm">
              We deliver innovative technology solutions that drive business growth and digital transformation.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-solinex-green/80 hover:text-white transition-colors duration-300 text-left"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-solinex-green/80 hover:text-white transition-colors duration-300 text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('home')}
                className="block text-solinex-green/80 hover:text-white transition-colors duration-300 text-left"
              >
                Home
              </button>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-solinex-green/80">info@solinex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-solinex-green/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-solinex-green/80">123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-solinex-green/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-solinex-green/80 text-sm">
              © 2025 Solinex. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-solinex-green/80 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-solinex-green/80 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
