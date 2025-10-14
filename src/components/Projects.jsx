import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Clock, Star, Code2, Users } from 'lucide-react'
import { ScrollAnimatedSection, SectionHeader, TechBadge } from './common'

const Projects = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 4 : 3)
    }
    
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const projects = [
    {
      id: 1,
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.description'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      icon: '🛒',
      imageColor: 'bg-gradient-to-br from-solinex-blue/20 to-solinex-teal/20',
      link: 'https://example.com/ecommerce-project',
      client: 'Example Client',
      duration: '3 months',
      teamSize: '4 members',
      rating: 5,
      category: 'Web Development',
      featured: true
    },
    {
      id: 2,
      title: t('projects.items.dashboard.title'),
      description: t('projects.items.dashboard.description'),
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      icon: '📊',
      imageColor: 'bg-gradient-to-br from-solinex-teal/20 to-solinex-green/20',
      link: 'https://example.com/dashboard-project',
      client: 'Tech Startup',
      duration: '2 months',
      teamSize: '3 members',
      rating: 4,
      category: 'Data Visualization',
      featured: false
    },
    {
      id: 3,
      title: t('projects.items.banking.title'),
      description: t('projects.items.banking.description'),
      technologies: ['React Native', 'Node.js', 'JWT', 'AWS'],
      icon: '🏦',
      imageColor: 'bg-gradient-to-br from-solinex-green/20 to-solinex-blue/20',
      link: 'https://example.com/banking-app',
      client: 'Financial Corp',
      duration: '4 months',
      teamSize: '6 members',
      rating: 5,
      category: 'Mobile Development',
      featured: true
    },
    {
      id: 4,
      title: t('projects.items.iot.title'),
      description: t('projects.items.iot.description'),
      technologies: ['IoT', 'Python', 'MQTT', 'Docker'],
      icon: '🌐',
      imageColor: 'bg-gradient-to-br from-solinex-blue/20 to-solinex-green/20',
      link: 'https://example.com/iot-system',
      client: 'Smart Solutions',
      duration: '5 months',
      teamSize: '5 members',
      rating: 4,
      category: 'IoT Solutions',
      featured: false
    },
    {
      id: 5,
      title: t('projects.items.chatbot.title'),
      description: t('projects.items.chatbot.description'),
      technologies: ['AI/ML', 'Python', 'NLP', 'FastAPI'],
      icon: '🤖',
      imageColor: 'bg-gradient-to-br from-solinex-teal/20 to-solinex-blue/20',
      link: 'https://example.com/chatbot-platform',
      client: 'Enterprise Inc',
      duration: '3 months',
      teamSize: '3 members',
      rating: 5,
      category: 'AI/ML',
      featured: true
    },
    {
      id: 6,
      title: t('projects.items.crm.title'),
      description: t('projects.items.crm.description'),
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      icon: '📱',
      imageColor: 'bg-gradient-to-br from-solinex-green/20 to-solinex-teal/20',
      link: 'https://example.com/crm-system',
      client: 'Sales Pro',
      duration: '4 months',
      teamSize: '4 members',
      rating: 4,
      category: 'Web Development',
      featured: false
    }
  ]

  const maxIndex = Math.max(0, projects.length - itemsPerPage)

  const handlePrev = () => {
    if (isAnimating) return
    setDirection('prev')
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setDirection('next')
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Get visible projects with neighbors for preview
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < maxIndex ? projects[currentIndex + itemsPerPage] : projects[0]

  return (
    <ScrollAnimatedSection 
      id="projects" 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleKey="projects.title"
          subtitleKey="projects.subtitle"
        />

        {/* Slider Container */}
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 pb-8 sm:pb-12 md:pb-16">
          {/* Preview Card - Left */}
          <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-40 2xl:w-48 z-0 pointer-events-none">
            <div className="h-full flex items-center">
              <div
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out transform flex flex-col border border-gray-200 ${
                  direction === 'prev' && isAnimating 
                    ? 'opacity-50 blur-none scale-98 translate-x-4' 
                    : 'opacity-20 blur-sm scale-95 -translate-x-2'
                }`}
                style={{ minHeight: '600px', width: '100%' }}
              >
                <div className={`${prevProject.imageColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-5xl opacity-30 text-solinex-teal">{prevProject.icon}</div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-solinex-green/10 text-solinex-green border border-solinex-green/20">
                      <div className="w-1.5 h-1.5 rounded-full mr-1.5 bg-solinex-green"></div>
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-medium text-gray-700 mb-1 line-clamp-2">
                    {prevProject.title}
                  </h3>
                  <p className="text-xs text-gray-400">{prevProject.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Card - Right */}
          <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-40 2xl:w-48 z-0 pointer-events-none">
            <div className="h-full flex items-center">
              <div
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out transform flex flex-col border border-gray-200 ${
                  direction === 'next' && isAnimating 
                    ? 'opacity-50 blur-none scale-98 -translate-x-4' 
                    : 'opacity-20 blur-sm scale-95 translate-x-2'
                }`}
                style={{ minHeight: '600px', width: '100%' }}
              >
                <div className={`${nextProject.imageColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-5xl opacity-30 text-solinex-teal">{nextProject.icon}</div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-solinex-green/10 text-solinex-green border border-solinex-green/20">
                      <div className="w-1.5 h-1.5 rounded-full mr-1.5 bg-solinex-green"></div>
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-medium text-gray-700 mb-1 line-clamp-2">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs text-gray-400">{nextProject.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Projects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 relative z-10">
            {visibleProjects.map((project, index) => (
              <div
                key={`${project.id}-${currentIndex}`}
                className="bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full will-change-transform border border-gray-200 hover:border-gray-300 min-h-[450px] sm:min-h-[550px] md:min-h-[600px]"
                style={{
                  animation: direction === 'next' 
                    ? `slideInFromRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.06}s both`
                    : `slideInFromLeft 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.06}s both`,
                  overflow: 'hidden',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Image Placeholder - Brand Colors */}
                <div className={`${project.imageColor} h-24 sm:h-40 md:h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-3xl sm:text-5xl md:text-6xl opacity-40 text-solinex-teal">{project.icon}</div>
                  
                  {/* Completed Badge - Green */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-solinex-green/10 text-solinex-green border border-solinex-green/20">
                      <div className="w-1.5 h-1.5 rounded-full mr-1.5 bg-solinex-green"></div>
                      Completed
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-1">
                  {/* Title */}
                  <div className="mb-2 sm:mb-4">
                    <h3 className="text-sm sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-700 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">{project.category}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-3 sm:mb-6 leading-relaxed flex-grow text-xs sm:text-sm">
                    {project.description}
                  </p>

                  {/* Project Stats - Brand Colors */}
                  <div className="flex justify-between items-center mb-3 sm:mb-6 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-solinex-blue" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-solinex-teal" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Client & Link */}
                  {project.client && (
                    <div className="mb-3 sm:mb-6">
                      <p className="text-xs text-gray-500 mb-1 sm:mb-3">
                        <span className="font-medium">Client:</span> {project.client}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-solinex-blue to-solinex-teal text-white text-xs sm:text-sm font-medium rounded hover:from-solinex-teal hover:to-solinex-green transition-all duration-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span className="hidden sm:inline">View Project</span>
                          <span className="sm:hidden">View</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Technologies - Brand Colors */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-2 sm:pt-4 border-t border-gray-100">
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge
                        key={techIndex}
                        variant="blue"
                        size="xs"
                        className="px-1 sm:px-2 py-0.5 sm:py-1"
                      >
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Minimal */}
          <div className="flex justify-center items-center gap-4 sm:gap-6">
           <button
               onClick={handlePrev}
               disabled={isAnimating}
               className="p-1.5 sm:p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
               aria-label="Previous projects"
             >
               <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
             </button>

            {/* Dots Indicator - Minimal */}
            <div className="flex gap-1.5 sm:gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-200 ${
                    currentIndex === index
                      ? 'w-4 sm:w-6 bg-gray-900'
                      : 'w-1 sm:w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

             <button
               onClick={handleNext}
               disabled={isAnimating}
               className="p-1.5 sm:p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
               aria-label="Next projects"
             >
               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
             </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ScrollAnimatedSection>
  )
}

export default Projects
