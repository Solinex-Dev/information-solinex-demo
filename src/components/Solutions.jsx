import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight, Code, TrendingUp, Users, Zap } from 'lucide-react'

const Solutions = () => {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 })

  const solutions = [
    {
      title: t('solutions.items.development.title'),
      description: t('solutions.items.development.description'),
      icon: Code,
      features: t('solutions.items.development.features', [])
    },
    {
      title: t('solutions.items.business.title'),
      description: t('solutions.items.business.description'),
      icon: TrendingUp,
      features: t('solutions.items.business.features', [])
    },
    {
      title: t('solutions.items.approach.title'),
      description: t('solutions.items.approach.description'),
      icon: Zap,
      features: t('solutions.items.approach.features', [])
    }
  ]

  return (
    <section 
      id="solutions" 
      ref={ref}
      className={`py-20 bg-white scroll-animate ${isVisible ? 'scroll-visible' : ''}`}
    >
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
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group flex flex-col"
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
                  <span
                    key={featureIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-solinex-green border border-green-200 hover:bg-green-100 transition-colors duration-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* <div className="mt-6">
                <button className="w-full bg-solinex-blue hover:bg-solinex-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                  {t('solutions.learnMore')}
                </button>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Solutions
