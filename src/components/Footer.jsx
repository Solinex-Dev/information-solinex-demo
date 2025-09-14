import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import logoText from '../assets/logo-solinex-txt-light.png'

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyClosing, setIsPrivacyClosing] = useState(false)
  const [isTermsClosing, setIsTermsClosing] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openPrivacy = () => {
    setIsPrivacyClosing(false)
    setIsPrivacyOpen(true)
  }
  
  const closePrivacy = () => {
    setIsPrivacyClosing(true)
    setTimeout(() => {
      setIsPrivacyOpen(false)
      setIsPrivacyClosing(false)
    }, 300) // Match animation duration
  }
  
  const openTerms = () => {
    setIsTermsClosing(false)
    setIsTermsOpen(true)
  }
  
  const closeTerms = () => {
    setIsTermsClosing(true)
    setTimeout(() => {
      setIsTermsOpen(false)
      setIsTermsClosing(false)
    }, 300) // Match animation duration
  }

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children, isClosing }) => {
    
    // Don't render if not open and not closing
    if (!isOpen && !isClosing) return null

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop with smooth fade-in/out */}
        <div 
          className={`fixed inset-0 bg-black transition-all duration-300 ease-out ${
            isClosing ? 'bg-opacity-0' : 'bg-opacity-50'
          }`}
          onClick={onClose}
        ></div>
        
        {/* Modal with smooth scale and slide animation */}
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className={`modal-content-container relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] transform transition-all duration-300 ease-out ${
              isClosing 
                ? 'opacity-0 scale-95 translate-y-4' 
                : 'opacity-100 scale-100 translate-y-0'
            }`}
            style={{
              // Force initial state for animation
              transform: isClosing ? 'scale(0.95) translateY(16px)' : 'scale(1) translateY(0)',
              opacity: isClosing ? 0 : 1
            }}
          >
            {/* Header - Fixed */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 rounded-t-3xl">
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 transform hover:bg-gray-100 rounded-full p-1"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable Content Area */}
            <div className="modal-scroll-area modal-scrollable">
              <div className={`p-6 transition-all duration-300 ${
                isClosing ? 'opacity-0' : 'opacity-100'
              }`}>
                {children}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

  // Privacy Policy Content
  const PrivacyPolicyContent = () => (
    <div className="prose prose-gray max-w-none">
      <p className="text-sm text-gray-500 mb-6">
        <strong>{t('modals.privacyPolicy.effectiveDate')}</strong> January 1, 2025<br />
        <strong>{t('modals.privacyPolicy.lastUpdated')}</strong> January 1, 2025
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.privacyPolicy.sections.informationWeCollect.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.privacyPolicy.sections.informationWeCollect.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.privacyPolicy.sections.howWeUseInformation.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.privacyPolicy.sections.howWeUseInformation.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.privacyPolicy.sections.informationSharing.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.privacyPolicy.sections.informationSharing.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.privacyPolicy.sections.dataSecurity.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.privacyPolicy.sections.dataSecurity.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.privacyPolicy.sections.yourRights.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.privacyPolicy.sections.yourRights.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.privacyPolicy.sections.contactUs.title')}</h4>
      <p className="text-gray-700">
        {t('modals.privacyPolicy.sections.contactUs.content')}
        <br />
        <strong>{t('modals.privacyPolicy.sections.contactUs.email')}</strong> privacy@solinex.dev<br />
        <strong>{t('modals.privacyPolicy.sections.contactUs.phone')}</strong> +66 62-129-2126
      </p>
    </div>
  )

  // Terms of Service Content
  const TermsOfServiceContent = () => (
    <div className="prose prose-gray max-w-none">
      <p className="text-sm text-gray-500 mb-6">
        <strong>{t('modals.termsOfService.effectiveDate')}</strong> January 1, 2025<br />
        <strong>{t('modals.termsOfService.lastUpdated')}</strong> January 1, 2025
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.acceptanceOfTerms.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.acceptanceOfTerms.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.useLicense.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.useLicense.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.serviceAvailability.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.serviceAvailability.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.userResponsibilities.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.userResponsibilities.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.intellectualProperty.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.intellectualProperty.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.limitationOfLiability.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.limitationOfLiability.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.governingLaw.title')}</h4>
      <p className="text-gray-700 mb-4">
        {t('modals.termsOfService.sections.governingLaw.content')}
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('modals.termsOfService.sections.contactInformation.title')}</h4>
      <p className="text-gray-700">
        {t('modals.termsOfService.sections.contactInformation.content')}
        <br />
        <strong>{t('modals.termsOfService.sections.contactInformation.email')}</strong> legal@solinex.dev<br />
        <strong>{t('modals.termsOfService.sections.contactInformation.phone')}</strong> +66 62-129-2126
      </p>
    </div>
  )

  return (
    <footer className="bg-solinex-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Company name + tagline */}
          <div className="space-y-4">
            <img src={logoText} alt="Solinex Logo" className="h-12" /> 
            {/* <h3 className="text-2xl font-bold text-white">Solinex</h3> */}
            <p className="text-solinex-green text-bold text-lg">
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-gray-300 max-w-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Middle: Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-solinex-green hover:text-white transition-colors duration-300 text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-solinex-green hover:text-white transition-colors duration-300 text-left"
              >
                {t('nav.solutions')}
              </button>
              <button
                onClick={() => scrollToSection('home')}
                className="block text-solinex-green hover:text-white transition-colors duration-300 text-left"
              >
                {t('nav.home')}
              </button>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-solinex-green">admin@solinex.dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-solinex-green">+66 62-129-2126</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-solinex-green">123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-solinex-green/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-solinex-green text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={openPrivacy}
                className="text-solinex-green hover:text-white transition-all duration-300 cursor-pointer px-2 py-1 rounded"
              >
                {t('footer.privacyPolicy')}
              </button>
              <button 
                onClick={openTerms}
                className="text-solinex-green hover:text-white transition-all duration-300 cursor-pointer px-2 py-1 rounded"
              >
                {t('footer.termsOfService')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <Modal 
        isOpen={isPrivacyOpen || isPrivacyClosing} 
        onClose={closePrivacy} 
        title={t('footer.privacyPolicy')}
        isClosing={isPrivacyClosing}
      >
        <PrivacyPolicyContent />
      </Modal>
      <Modal 
        isOpen={isTermsOpen || isTermsClosing} 
        onClose={closeTerms} 
        title={t('footer.termsOfService')}
        isClosing={isTermsClosing}
      >
        <TermsOfServiceContent />
      </Modal>
    </footer>
  )
}

export default Footer
