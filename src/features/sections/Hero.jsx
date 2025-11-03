import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import logo from '../../assets/logo-solinex-512x512.png'
import { ScrollAnimatedSection, GradientButton } from '../../shared/common'

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <ScrollAnimatedSection
      id="home"
      className="pt-32 sm:pt-40 md:pt-44 lg:pt-[175px] pb-16 sm:pb-20 md:pb-24 lg:pb-[100px] flex items-center justify-center bg-gradient-to-br from-solinex-blue/10 via-solinex-green/5 to-solinex-teal/10"
      threshold={0.1}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <img
              src={logo}
              alt="Solinex Logo"
              className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-4 sm:mb-6 animate-bounce-slow"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            {t('hero.welcome')}{' '}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <GradientButton
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
            >
              {t('hero.exploreSolutions')}
            </GradientButton>
            <GradientButton
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="secondary"
            >
              {t('hero.learnMore')}
            </GradientButton>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default Hero
