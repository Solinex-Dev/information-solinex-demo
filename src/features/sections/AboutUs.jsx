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
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      threshold={0.2}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleKey="about.title"
        />

        {/* Main Content - Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Side - Logo & Brand */}
          <div className="relative">
            <div className="bg-gradient-to-br from-solinex-blue/10 via-solinex-teal/10 to-solinex-green/10 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-solinex-blue/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-solinex-green/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <img 
                  src={logo} 
                  alt="Solinex Logo" 
                  className="h-32 w-32 mx-auto mb-6 drop-shadow-lg animate-bounce-slow"
                />
                <h3 className="text-4xl font-bold text-solinex-teal mb-4">
                  Solinex
                </h3>
                <p className="text-lg text-solinex-blue font-semibold mb-6">
                  Develop Ideas, Deliver Solutions
                </p>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-solinex-blue">2</div>
                    <div className="text-xs text-gray-600 mt-1">Projects</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-solinex-teal">2</div>
                    <div className="text-xs text-gray-600 mt-1">Clients</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-solinex-green">100%</div>
                    <div className="text-xs text-gray-600 mt-1">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.description1')}
              </p>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovation */}
          <Card className="group relative bg-gradient-to-br from-blue-50 to-blue-100 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl font-bold text-blue-200 opacity-20 -translate-y-4 translate-x-4">01</div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-solinex-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{t('about.values.innovation.title')}</h4>
              <p className="text-gray-700 leading-relaxed">{t('about.values.innovation.description')}</p>
            </div>
          </Card>

          {/* Collaboration */}
          <Card className="group relative bg-gradient-to-br from-teal-50 to-teal-100 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl font-bold text-teal-200 opacity-20 -translate-y-4 translate-x-4">02</div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-solinex-teal to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{t('about.values.collaboration.title')}</h4>
              <p className="text-gray-700 leading-relaxed">{t('about.values.collaboration.description')}</p>
            </div>
          </Card>

          {/* Excellence */}
          <Card className="group relative bg-gradient-to-br from-green-50 to-green-100 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl font-bold text-green-200 opacity-20 -translate-y-4 translate-x-4">03</div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-solinex-green to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{t('about.values.excellence.title')}</h4>
              <p className="text-gray-700 leading-relaxed">{t('about.values.excellence.description')}</p>
            </div>
          </Card>
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default AboutUs
