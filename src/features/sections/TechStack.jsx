import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { techGroups } from '../data'

const TechStack = () => {
  const { t } = useLanguage()

  // Flatten all tech items from groups into a single array
  const techItems = techGroups.flatMap(group => group.items)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('techStack.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('techStack.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-center">
                <div className="mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {tech.icon ? (
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-500">{tech.name[0]}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-solinex-blue transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
