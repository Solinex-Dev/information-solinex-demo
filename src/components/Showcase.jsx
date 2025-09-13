import React, { useState } from 'react'

const Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: '🛒'
    },
    {
      id: 2,
      name: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard for business insights',
      image: '📊'
    },
    {
      id: 3,
      name: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric auth',
      image: '🏦'
    },
    {
      id: 4,
      name: 'IoT Monitoring System',
      description: 'Internet of Things monitoring and control platform',
      image: '🌐'
    },
    {
      id: 5,
      name: 'AI Chatbot Platform',
      description: 'Intelligent customer service chatbot solution',
      image: '🤖'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and solutions
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-solinex-blue/10 to-solinex-green/10 rounded-3xl p-8 mx-4">
                    <div className="text-center">
                      <div className="text-6xl mb-6">{project.image}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {project.name}
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md mx-auto">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-solinex-teal hover:text-solinex-blue p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-solinex-teal hover:text-solinex-blue p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-solinex-blue scale-125'
                  : 'bg-gray-300 hover:bg-solinex-green'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
