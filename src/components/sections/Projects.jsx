import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { ExternalLink, Clock, Users } from 'lucide-react'
import { ScrollAnimatedSection, SectionHeader, TechBadge } from '../common'
import { createProjectsData } from '../data'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

// Constants
const CAROUSEL_OPTIONS = {
  align: "start",
  loop: true,
}

const CAROUSEL_NAVIGATION_CLASSES = "hidden sm:flex bg-white/80 backdrop-blur-sm border-solinex-blue/30 text-solinex-teal hover:bg-white hover:text-solinex-blue"

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full border border-gray-200 hover:border-gray-300 min-h-[450px] sm:min-h-[550px] md:min-h-[600px]">
    {/* Header with Icon */}
    <div className={`${project.imageColor} h-24 sm:h-40 md:h-48 flex items-center justify-center relative overflow-hidden`}>
      <div className="text-3xl sm:text-5xl md:text-6xl opacity-40 text-solinex-teal">
        {project.icon}
      </div>
    </div>

    {/* Card Content */}
    <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-1">
      {/* Title Section */}
      <div className="mb-2 sm:mb-4">
        <h3 className="text-sm sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-700 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {project.category}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-3 sm:mb-6 leading-relaxed flex-grow text-xs sm:text-sm">
        {project.description}
      </p>

      {/* Project Stats */}
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

      {/* Client & Link Section */}
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

      {/* Technologies */}
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
)

const Projects = () => {
  const { t } = useLanguage()
  const projects = createProjectsData(t)

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

        {/* Projects Carousel */}
        <Carousel opts={CAROUSEL_OPTIONS} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`${CAROUSEL_NAVIGATION_CLASSES} -left-12`} />
          <CarouselNext className={`${CAROUSEL_NAVIGATION_CLASSES} -right-12`} />
        </Carousel>
      </div>

    </ScrollAnimatedSection>
  )
}

export default Projects
