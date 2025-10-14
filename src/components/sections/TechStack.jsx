import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { ScrollAnimatedSection, SectionHeader, Card } from '../common'
import { techItems } from '../data'

const TechStack = () => {
  const { t } = useLanguage()

  return (
    <ScrollAnimatedSection className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleKey="techStack.title"
          title="Tech Stack"
          subtitleKey="techStack.subtitle"
          subtitle="We use cutting-edge technologies to build modern, scalable solutions"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {techItems.map((tech, index) => (
            <Card
              key={index}
              padding="p-6"
              shadow=""
              hover={true}
              className="group"
            >
              <div className="text-center">
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-solinex-blue transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default TechStack
