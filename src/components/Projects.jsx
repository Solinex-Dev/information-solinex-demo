import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)

  const projects = [
    {
      id: 1,
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.description'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      icon: '🛒',
      imageColor: 'bg-gradient-to-br from-blue-100 to-blue-200'
    },
    {
      id: 2,
      title: t('projects.items.dashboard.title'),
      description: t('projects.items.dashboard.description'),
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      icon: '📊',
      imageColor: 'bg-gradient-to-br from-purple-100 to-purple-200'
    },
    {
      id: 3,
      title: t('projects.items.banking.title'),
      description: t('projects.items.banking.description'),
      technologies: ['React Native', 'Node.js', 'JWT', 'AWS'],
      icon: '🏦',
      imageColor: 'bg-gradient-to-br from-green-100 to-green-200'
    },
    {
      id: 4,
      title: t('projects.items.iot.title'),
      description: t('projects.items.iot.description'),
      technologies: ['IoT', 'Python', 'MQTT', 'Docker'],
      icon: '🌐',
      imageColor: 'bg-gradient-to-br from-orange-100 to-orange-200'
    },
    {
      id: 5,
      title: t('projects.items.chatbot.title'),
      description: t('projects.items.chatbot.description'),
      technologies: ['AI/ML', 'Python', 'NLP', 'FastAPI'],
      icon: '🤖',
      imageColor: 'bg-gradient-to-br from-indigo-100 to-indigo-200'
    },
    {
      id: 6,
      title: t('projects.items.crm.title'),
      description: t('projects.items.crm.description'),
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      icon: '📱',
      imageColor: 'bg-gradient-to-br from-teal-100 to-teal-200'
    }
  ]

  const itemsPerPage = 3
  const maxIndex = Math.max(0, projects.length - itemsPerPage)

  const handlePrev = () => {
    if (isAnimating) return
    setDirection('prev')
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleNext = () => {
    if (isAnimating) return
    setDirection('next')
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    setTimeout(() => setIsAnimating(false), 600)
  }

  // Get visible projects with neighbors for preview
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < maxIndex ? projects[currentIndex + itemsPerPage] : projects[0]

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 bg-white scroll-animate ${isVisible ? 'scroll-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden px-8 md:px-16">
          {/* Preview Card - Left */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 z-0 pointer-events-none">
            <div className="h-full flex items-center">
              <div
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden transition-all duration-700 ease-out transform flex flex-col ${
                  direction === 'prev' && isAnimating 
                    ? 'opacity-60 blur-none scale-95 translate-x-8' 
                    : 'opacity-30 blur-sm scale-90 -translate-x-4'
                }`}
                style={{ minHeight: '550px', width: '100%' }}
              >
                <div className={`${prevProject.imageColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-30">{prevProject.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center line-clamp-2">
                    {prevProject.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Card - Right */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-48 z-0 pointer-events-none">
            <div className="h-full flex items-center">
              <div
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden transition-all duration-700 ease-out transform flex flex-col ${
                  direction === 'next' && isAnimating 
                    ? 'opacity-60 blur-none scale-95 -translate-x-8' 
                    : 'opacity-30 blur-sm scale-90 translate-x-4'
                }`}
                style={{ minHeight: '550px', width: '100%' }}
              >
                <div className={`${nextProject.imageColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-30">{nextProject.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center line-clamp-2">
                    {nextProject.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Main Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 relative z-10">
            {visibleProjects.map((project, index) => (
              <div
                key={`${project.id}-${currentIndex}`}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group flex flex-col h-full"
                style={{
                  animation: direction === 'next' 
                    ? `slideInFromRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`
                    : `slideInFromLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`,
                  minHeight: '550px'
                }}
              >
                {/* Image Placeholder */}
                <div className={`${project.imageColor} h-48 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  {/* You can replace this with <img src={project.image} alt={project.title} /> when you have real images */}
                  <div className="text-8xl opacity-30">{project.icon}</div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    Preview
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Icon and Title */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-solinex-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-center flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-solinex-blue border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
           <button
               onClick={handlePrev}
               disabled={isAnimating}
               className="p-3 bg-white hover:bg-solinex-blue text-solinex-blue hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
               aria-label="Previous projects"
             >
               <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
             </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-solinex-blue'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

             <button
               onClick={handleNext}
               disabled={isAnimating}
               className="p-3 bg-white hover:bg-solinex-blue text-solinex-blue hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
               aria-label="Next projects"
             >
               <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
             </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.9) rotateY(10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.9) rotateY(-10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
