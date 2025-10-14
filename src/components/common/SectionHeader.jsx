import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const SectionHeader = ({ 
  titleKey, 
  subtitleKey, 
  title, 
  subtitle, 
  className = '',
  titleClassName = 'text-3xl md:text-4xl font-bold text-gray-900 mb-4',
  subtitleClassName = 'text-lg text-gray-600 max-w-2xl mx-auto',
  showGradientLine = true,
  gradientLineClassName = 'w-24 h-1 bg-gradient-to-r from-solinex-blue to-solinex-green mx-auto rounded-full mb-6'
}) => {
  const { t } = useLanguage()

  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className={titleClassName}>
        {titleKey ? t(titleKey, title) : title}
      </h2>
      {showGradientLine && (
        <div className={gradientLineClassName}></div>
      )}
      {(subtitleKey || subtitle) && (
        <p className={subtitleClassName}>
          {subtitleKey ? t(subtitleKey, subtitle) : subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
