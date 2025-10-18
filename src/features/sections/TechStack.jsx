import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { ScrollAnimatedSection, SectionHeader, Card } from '../../shared/common'
import { techGroups } from '../data'

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
          {techGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col">
              {/* Group Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {t(group.titleKey) || group.title}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-solinex-blue to-blue-600 mx-auto rounded-full"></div>
              </div>

              {/* Tech Items in Vertical Layout */}
              <div className="flex flex-col gap-3 flex-grow">
                {group.items.map((tech, techIndex) => (
                  <Card
                    key={`${groupIndex}-${techIndex}`}
                    padding="p-4"
                    shadow="shadow-sm"
                    hover={true}
                    className="group transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={tech.icon} 
                          alt={`${tech.name} icon`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-solinex-blue transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default TechStack
