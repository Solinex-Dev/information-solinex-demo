import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Lightbulb, Users, Award, Zap, Code, Target } from 'lucide-react'
import logo from '../../assets/logo-solinex-512x512.png'
import { ScrollAnimatedSection, SectionHeader, Card } from '../../shared/common'

const AboutUs = () => {
  const { t } = useLanguage()
  
  return (
    <ScrollAnimatedSection
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white"
      threshold={0.2}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <SectionHeader 
          titleKey="about.title"
        />

        {/* Main Content - Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16 items-center">
          {/* Left Side - Logo & Brand */}
          <div className="relative">
            <div className="bg-gradient-to-br from-solinex-blue/10 via-solinex-teal/10 to-solinex-green/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-solinex-blue/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-solinex-green/10 rounded-full translate-y-12 -translate-x-12 sm:translate-y-16 sm:-translate-x-16"></div>

              <div className="relative z-10">
                <img
                  src={logo}
                  alt="Solinex Logo"
                  className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mx-auto mb-4 sm:mb-6 drop-shadow-lg animate-bounce-slow"
                />
                <h3 className="text-3xl sm:text-4xl font-bold text-solinex-teal mb-3 sm:mb-4">
                  Solinex
                </h3>
                <p className="text-base sm:text-lg text-solinex-blue font-semibold mb-4 sm:mb-6">
                  {t('hero.welcome')}
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-bold text-solinex-blue">2</div>
                    <div className="text-xs text-gray-600 mt-1">{t('about.stats.projects')}</div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-bold text-solinex-teal">2</div>
                    <div className="text-xs text-gray-600 mt-1">{t('about.stats.clients')}</div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-bold text-solinex-green">100%</div>
                    <div className="text-xs text-gray-600 mt-1">{t('about.stats.quality')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-4 sm:space-y-6">
            <div className="prose prose-base sm:prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {t('about.description1')}
              </p>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code className="w-6 h-6 text-solinex-blue" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('about.quickFeatures.modernTech.title')}</div>
                  <div className="text-xs text-gray-600">{t('about.quickFeatures.modernTech.subtitle')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-6 h-6 text-solinex-green" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('about.quickFeatures.fastDelivery.title')}</div>
                  <div className="text-xs text-gray-600">{t('about.quickFeatures.fastDelivery.subtitle')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Users className="w-6 h-6 text-solinex-teal" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('about.quickFeatures.teamWork.title')}</div>
                  <div className="text-xs text-gray-600">{t('about.quickFeatures.teamWork.subtitle')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('about.quickFeatures.goalFocused.title')}</div>
                  <div className="text-xs text-gray-600">{t('about.quickFeatures.goalFocused.subtitle')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Enhanced Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Innovation */}
          <Card className="group relative bg-gradient-to-br from-blue-50 to-blue-100 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 text-7xl sm:text-9xl font-bold text-blue-200 opacity-20 -translate-y-4 translate-x-4">01</div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-solinex-blue to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('about.values.innovation.title')}</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{t('about.values.innovation.description')}</p>
            </div>
          </Card>

          {/* Collaboration */}
          <Card className="group relative bg-gradient-to-br from-teal-50 to-teal-100 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 text-7xl sm:text-9xl font-bold text-teal-200 opacity-20 -translate-y-4 translate-x-4">02</div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-solinex-teal to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('about.values.collaboration.title')}</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{t('about.values.collaboration.description')}</p>
            </div>
          </Card>

          {/* Excellence */}
          <Card className="group relative bg-gradient-to-br from-green-50 to-green-100 hover:-translate-y-2 overflow-hidden sm:col-span-2 md:col-span-1">
            <div className="absolute top-0 right-0 text-7xl sm:text-9xl font-bold text-green-200 opacity-20 -translate-y-4 translate-x-4">03</div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-solinex-green to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('about.values.excellence.title')}</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{t('about.values.excellence.description')}</p>
            </div>
          </Card>
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default AboutUs
