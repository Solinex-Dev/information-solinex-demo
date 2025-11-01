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

const CAROUSEL_NAVIGATION_CLASSES = "flex bg-white/80 sm:bg-white/90 backdrop-blur-md border border-solinex-blue/40 text-solinex-teal hover:bg-white hover:text-solinex-blue hover:border-solinex-blue shadow-md hover:shadow-lg transition-all duration-200 z-30"

// Carousel Dots Indicator Component
const CarouselDots = ({ currentSlide, totalSlides, onDotClick, api }) => {
  // Only show dots if there are multiple pages to navigate
  if (totalSlides <= 1) return null

  return (
    <div className="flex justify-center mb-4 sm:mb-6 gap-1.5 sm:gap-2">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => {
            if (api) {
              api.scrollTo(index)
            }
            onDotClick(index)
          }}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
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
const ProjectCard = React.memo(({ project, isActive = false }) => {
  const { t } = useLanguage()
  const [imageError, setImageError] = React.useState(false)

  return (
    <div className={`relative overflow-hidden w-full group cursor-pointer rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out pt-[75%] ${
      isActive ? 'shadow-lg z-10' : 'shadow-md'
    }`}>
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col p-4 sm:p-5 md:p-6 text-white">
        {/* Top Section - Title and Category */}
        <div className="flex-1">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 leading-tight">
              {project.title}
            </h3>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-90">
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
              className="group border border-white/60 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-200 inline-flex items-center after:content-['→'] after:ml-1"
              aria-label={t('projects.viewProject')}
              onClick={(e) => e.stopPropagation()}
            >
              {t('projects.viewProject')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
})

const Projects = () => {
  const { t } = useLanguage()
  const projects = createProjectsData(t)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [carouselApi, setCarouselApi] = useState()
  const [totalSlides, setTotalSlides] = useState(0)
  const [centerIndex, setCenterIndex] = useState(0)

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
      const selectedIndex = api.selectedScrollSnap()
      setCenterIndex(Math.min(selectedIndex, projects.length - 1))
    }
  }, [projects.length])

  // Handle dot click
  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  // Set initial center index based on screen size
  useEffect(() => {
    setCenterIndex(0)
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
        setCenterIndex(Math.min(selectedIndex, projects.length - 1))
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [carouselApi, projects.length])

  return (
    <ScrollAnimatedSection
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <SectionHeader
          titleKey="projects.title"
          subtitleKey="projects.subtitle"
        />

        {/* Projects Carousel */}
        <div className="relative pt-8 pb-4">
          <Carousel
            setApi={setCarouselApi}
            opts={CAROUSEL_OPTIONS}
            className="w-full px-2 sm:px-4 md:px-8"
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4 flex items-stretch">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-1 sm:pl-2 md:pl-4 basis-full flex w-full">
                  <div className="w-full h-full flex items-center justify-center py-4 sm:py-6 px-2 sm:px-3 md:px-4">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                    <ProjectCard
                      project={project}
                      isActive={index === centerIndex}
                    />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="pointer-events-none absolute inset-0">
              <div className="relative w-full h-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                {/* Previous Arrow - Left Side */}
                <div className="hidden sm:block pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 md:-translate-x-6 z-40">
                  <CarouselPrevious aria-label={t('projects.carousel.prev')} className={`${CAROUSEL_NAVIGATION_CLASSES} h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 active:scale-95`} />
                </div>
                {/* Next Arrow - Right Side */}
                <div className="hidden sm:block pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 md:translate-x-6 z-40">
                  <CarouselNext aria-label={t('projects.carousel.next')} className={`${CAROUSEL_NAVIGATION_CLASSES} h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 active:scale-95`} />
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Carousel Dots Indicator - Below Cards */}
        {totalSlides > 0 && (
          <div className="mt-6 sm:mt-8">
            <CarouselDots
              currentSlide={currentSlide}
              totalSlides={totalSlides}
              onDotClick={handleDotClick}
              api={carouselApi}
            />
          </div>
        )}
      </div>
    </ScrollAnimatedSection>
  )
}

export default Projects
