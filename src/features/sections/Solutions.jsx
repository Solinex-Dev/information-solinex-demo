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
      className="py-20 bg-white"
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleKey="solutions.title"
          subtitleKey="solutions.subtitle"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              background="bg-gradient-to-br from-gray-50 to-gray-100"
              className="group flex flex-col min-h-96"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-12 h-12 text-solinex-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-solinex-blue transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-2 flex-row justify-center mt-auto">
                {solution.features.map((feature, featureIndex) => (
                  <TechBadge
                    key={featureIndex}
                    variant="green"
                    size="sm"
                    className="rounded-full bg-green-50 text-solinex-green border-green-200 hover:bg-green-100"
                  >
                    {feature}
                  </TechBadge>
                ))}
              </div>

              {/* <div className="mt-6">
                <button className="w-full bg-solinex-blue hover:bg-solinex-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                  {t('solutions.learnMore')}
                </button>
              </div> */}
            </Card>
          ))}
        </div>

      </div>
    </ScrollAnimatedSection>
  )
}

export default Solutions
