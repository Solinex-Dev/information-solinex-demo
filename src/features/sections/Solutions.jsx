import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { ScrollAnimatedSection, SectionHeader, Card, TechBadge } from '../../shared/common'
import { createSolutionsData } from '../data'

const Solutions = () => {
  const { t } = useLanguage()
  const solutions = createSolutionsData(t)

  return (
    <ScrollAnimatedSection
      id="solutions"
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-[1350px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <SectionHeader
          titleKey="solutions.title"
          subtitleKey="solutions.subtitle"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              background="bg-gradient-to-br from-gray-50 to-gray-100"
              className="group flex flex-col"
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-10 h-10 sm:w-12 sm:h-12 text-solinex-blue" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-solinex-blue transition-colors duration-300 px-2">
                  {solution.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed px-2">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-2 flex-row justify-center mt-auto px-2">
                {solution.features.map((feature, featureIndex) => (
                  <TechBadge
                    key={featureIndex}
                    variant="green"
                    size="sm"
                    className="rounded-full bg-green-50 text-solinex-green border-green-200 hover:bg-green-100 text-xs"
                  >
                    {feature}
                  </TechBadge>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </ScrollAnimatedSection>
  )
}

export default Solutions
