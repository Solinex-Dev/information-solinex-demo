import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import logo from '../assets/logo-solinex-512x512.png'

const AboutUs = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <img 
                src={logo} 
                alt="Solinex Logo" 
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-3xl font-bold text-solinex-teal mb-4">
                Solinex
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-solinex-blue to-solinex-green mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                {t('about.description1')}
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('about.values.innovation.title')}</h4>
                  <p className="text-gray-600">{t('about.values.innovation.description')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('about.values.collaboration.title')}</h4>
                  <p className="text-gray-600">{t('about.values.collaboration.description')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('about.values.excellence.title')}</h4>
                  <p className="text-gray-600">{t('about.values.excellence.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
