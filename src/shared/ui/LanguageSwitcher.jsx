import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { US, TH } from 'country-flag-icons/react/3x2'

const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flagCode: 'US', Flag: US },
    { code: 'th', name: 'ไทย', flagCode: 'TH', Flag: TH }
  ]

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-solinex-blue/20 border border-transparent hover:border-gray-200"
        aria-label={t('language.switch')}
        aria-expanded={isOpen}
      >
        <currentLanguage.Flag 
          className="w-5 h-4 rounded-sm"
          title={currentLanguage.flagCode}
        />
        <span className="text-xs font-medium text-gray-600 hidden sm:block leading-none">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-3 h-3 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-[60] transition-all duration-200 ${
          isOpen
            ? 'opacity-100 visible transform translate-y-0'
            : 'opacity-0 invisible transform -translate-y-2'
        }`}
      >
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                language === lang.code
                  ? 'bg-solinex-blue/5 text-solinex-blue'
                  : 'text-gray-700'
              }`}
            >
               <lang.Flag 
                 className="w-5 h-4 rounded-sm"
                 title={lang.flagCode}
               />
              <span className="text-sm font-medium leading-none">{lang.name}</span>
              {language === lang.code && (
                <svg
                  className="w-3 h-3 ml-auto text-solinex-blue flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher
