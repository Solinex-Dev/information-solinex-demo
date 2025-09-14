import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Solutions = () => {
  const { t } = useLanguage()
  
  const solutions = [
    {
      title: t('solutions.items.development.title'),
      description: t('solutions.items.development.description'),
      image: '💻',
      features: t('solutions.items.development.features', [])
    },
    {
      title: t('solutions.items.business.title'),
      description: t('solutions.items.business.description'),
      image: '📈',
      features: t('solutions.items.business.features', [])
    },
    {
      title: t('solutions.items.approach.title'),
      description: t('solutions.items.approach.description'),
      image: '🎯',
      features: t('solutions.items.approach.features', [])
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.image}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-solinex-blue transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-solinex-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="w-full bg-solinex-blue hover:bg-solinex-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                  {t('solutions.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-solinex-blue to-solinex-green rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('solutions.cta.title')}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('solutions.cta.description')}
            </p>
            <button className="bg-white text-solinex-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300">
              {t('solutions.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
