import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import logo from '../assets/logo-solinex-512x512.png'

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="pt-[175px] pb-[100px] flex items-center justify-center bg-gradient-to-br from-solinex-blue/10 via-solinex-green/5 to-solinex-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Solinex Logo" 
              className="h-24 w-24 mx-auto mb-6 animate-bounce-slow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.welcome')}{' '}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-solinex-blue hover:border-solinex-teal bg-solinex-blue hover:bg-solinex-teal text-white font-semibold py-3 px-8 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('hero.exploreSolutions')}
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-solinex-blue text-solinex-blue hover:bg-solinex-blue hover:text-white font-semibold py-3 px-8 rounded-3xl transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
