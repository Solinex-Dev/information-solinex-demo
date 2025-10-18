import React, { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { ScrollAnimatedSection, SectionHeader } from '../../shared/common'
import { createProjectsData } from '../data'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../shared/ui/carousel'

// Constants
const CAROUSEL_OPTIONS = {
  align: "center",
  loop: false,
  slidesToScroll: 1,
}

const CAROUSEL_NAVIGATION_CLASSES = "hidden sm:flex bg-white/90 backdrop-blur-sm border-2 border-solinex-blue/40 text-solinex-teal hover:bg-white hover:text-solinex-blue hover:border-solinex-blue shadow-lg hover:shadow-xl transition-all duration-200"

// Carousel Dots Indicator Component
const CarouselDots = ({ currentSlide, totalSlides, onDotClick, api }) => {
  // Only show dots if there are multiple pages to navigate
  if (totalSlides <= 1) return null

  return (
    <div className="flex justify-center mb-6 gap-1.5">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => {
            if (api) {
              api.scrollTo(index)
            }
            onDotClick(index)
          }}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            currentSlide === index
              ? 'bg-solinex-blue scale-125'
              : 'bg-gray-400 hover:bg-gray-500'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project, isActive = false }) => {
  const [imageError, setImageError] = React.useState(false)
  
  return (
    <div className={`relative overflow-hidden h-80 w-full flex flex-col group cursor-pointer rounded-3xl transition-all duration-500 ease-out transform ${
      isActive ? 'scale-105 shadow-lg z-10' : 'scale-100 shadow-md'
    }`}>
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        {!imageError ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full ${project.imageColor}`}></div>
        )}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col h-full p-6 text-white">
        {/* Top Section - Title and Category */}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 leading-tight">
              {project.title}
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider opacity-90">
              {project.category}
            </span>
          </div>
        </div>

        {/* Bottom Section - View Project Button */}
        <div className="flex justify-end">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const { t } = useLanguage()
  const projects = createProjectsData(t)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [carouselApi, setCarouselApi] = useState()
  const [totalSlides, setTotalSlides] = useState(0)
  const [centerIndex, setCenterIndex] = useState(1) // Start with middle card as center on desktop

  // Calculate total slides based on actual pages
  const calculateTotalSlides = useCallback(() => {
    if (!carouselApi) return 0
    // Get the actual number of scroll snaps (pages), not individual items
    return carouselApi.scrollSnapList().length
  }, [carouselApi])

  // Handle slide change
  const handleSlideChange = useCallback((api) => {
    if (api) {
      setCurrentSlide(api.selectedScrollSnap())
      
      // Calculate which card is actually in the center of the viewport
      const selectedIndex = api.selectedScrollSnap()
      
      // For different screen sizes, determine the center card index
      let centerCardIndex = selectedIndex
      
      if (window.innerWidth >= 1024) {
        // Desktop: 3 cards visible, center card is the middle one
        centerCardIndex = selectedIndex + 1
      } else if (window.innerWidth >= 768) {
        // Tablet: 2 cards visible, center card is the first one
        centerCardIndex = selectedIndex
      } else {
        // Mobile: 1 card visible, that card is center
        centerCardIndex = selectedIndex
      }
      
      setCenterIndex(Math.min(centerCardIndex, projects.length - 1))
    }
  }, [projects.length])

  // Handle dot click
  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  // Set initial center index based on screen size
  useEffect(() => {
    let initialCenterIndex = 0
    
    if (window.innerWidth >= 1024) {
      // Desktop: 3 cards visible, center card is the middle one (index 1)
      initialCenterIndex = 1
    } else if (window.innerWidth >= 768) {
      // Tablet: 2 cards visible, center card is the first one (index 0)
      initialCenterIndex = 0
    } else {
      // Mobile: 1 card visible, that card is center (index 0)
      initialCenterIndex = 0
    }
    
    setCenterIndex(initialCenterIndex)
  }, [])

  // Set up carousel API
  useEffect(() => {
    if (!carouselApi) return

    setTotalSlides(calculateTotalSlides())
    
    carouselApi.on('select', handleSlideChange)
    
    return () => {
      carouselApi.off('select', handleSlideChange)
    }
  }, [carouselApi, calculateTotalSlides, handleSlideChange])

  // Handle window resize to recalculate center index
  useEffect(() => {
    const handleResize = () => {
      if (carouselApi) {
        const selectedIndex = carouselApi.selectedScrollSnap()
        let centerCardIndex = selectedIndex
        
        if (window.innerWidth >= 1024) {
          // Desktop: 3 cards visible, center card is the middle one
          centerCardIndex = selectedIndex + 1
        } else if (window.innerWidth >= 768) {
          // Tablet: 2 cards visible, center card is the first one
          centerCardIndex = selectedIndex
        } else {
          // Mobile: 1 card visible, that card is center
          centerCardIndex = selectedIndex
        }
        
        setCenterIndex(Math.min(centerCardIndex, projects.length - 1))
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [carouselApi, projects.length])

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

        {/* Carousel Dots Indicator */}
        {totalSlides > 0 && (
          <CarouselDots 
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onDotClick={handleDotClick}
            api={carouselApi}
          />
        )}

        {/* Projects Carousel */}
        <div className="relative pt-8 pb-16">
          <Carousel 
            setApi={setCarouselApi}
            opts={CAROUSEL_OPTIONS}
            className="w-full px-8"
          >
            <CarouselContent className="-ml-2 md:-ml-4 flex items-stretch">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 flex w-full">
                  <div className="w-full h-full flex items-center justify-center py-6">
                    <ProjectCard 
                      project={project} 
                      isActive={index === centerIndex}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={`${CAROUSEL_NAVIGATION_CLASSES} -left-4`} />
            <CarouselNext className={`${CAROUSEL_NAVIGATION_CLASSES} -right-4`} />
          </Carousel>
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default Projects
