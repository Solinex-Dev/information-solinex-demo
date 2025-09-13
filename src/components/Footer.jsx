import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyClosing, setIsPrivacyClosing] = useState(false)
  const [isTermsClosing, setIsTermsClosing] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openPrivacy = () => {
    console.log('Opening Privacy Modal')
    setIsPrivacyClosing(false)
    setIsPrivacyOpen(true)
  }
  
  const closePrivacy = () => {
    console.log('Closing Privacy Modal')
    setIsPrivacyClosing(true)
    setTimeout(() => {
      console.log('Privacy Modal closed')
      setIsPrivacyOpen(false)
      setIsPrivacyClosing(false)
    }, 300) // Match animation duration
  }
  
  const openTerms = () => {
    console.log('Opening Terms Modal')
    setIsTermsClosing(false)
    setIsTermsOpen(true)
  }
  
  const closeTerms = () => {
    console.log('Closing Terms Modal')
    setIsTermsClosing(true)
    setTimeout(() => {
      console.log('Terms Modal closed')
      setIsTermsOpen(false)
      setIsTermsClosing(false)
    }, 300) // Match animation duration
  }

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children, isClosing }) => {
    console.log(`Modal ${title}: isOpen=${isOpen}, isClosing=${isClosing}`)
    
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
        <strong>Effective Date:</strong> January 1, 2025<br />
        <strong>Last Updated:</strong> January 1, 2025
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h4>
      <p className="text-gray-700 mb-4">
        We collect information you provide directly to us, such as when you create an account, 
        contact us, or use our services. This may include your name, email address, phone number, 
        and any other information you choose to provide.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h4>
      <p className="text-gray-700 mb-4">
        We use the information we collect to provide, maintain, and improve our services, 
        communicate with you, and ensure the security of our platform.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Information Sharing</h4>
      <p className="text-gray-700 mb-4">
        We do not sell, trade, or otherwise transfer your personal information to third parties 
        without your consent, except as described in this privacy policy.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Data Security</h4>
      <p className="text-gray-700 mb-4">
        We implement appropriate security measures to protect your personal information against 
        unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Your Rights</h4>
      <p className="text-gray-700 mb-4">
        You have the right to access, update, or delete your personal information. You may also 
        opt out of certain communications from us.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Contact Us</h4>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at:
        <br />
        <strong>Email:</strong> privacy@solinex.com<br />
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>
    </div>
  )

  // Terms of Service Content
  const TermsOfServiceContent = () => (
    <div className="prose prose-gray max-w-none">
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> January 1, 2025<br />
        <strong>Last Updated:</strong> January 1, 2025
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h4>
      <p className="text-gray-700 mb-4">
        By accessing and using Solinex's services, you accept and agree to be bound by the 
        terms and provision of this agreement.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Use License</h4>
      <p className="text-gray-700 mb-4">
        Permission is granted to temporarily download one copy of Solinex's materials for 
        personal, non-commercial transitory viewing only. This is the grant of a license, 
        not a transfer of title.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Service Availability</h4>
      <p className="text-gray-700 mb-4">
        We strive to maintain the availability of our services, but we do not guarantee 
        uninterrupted access. We reserve the right to modify or discontinue services at any time.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">4. User Responsibilities</h4>
      <p className="text-gray-700 mb-4">
        Users are responsible for maintaining the confidentiality of their account information 
        and for all activities that occur under their account.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Intellectual Property</h4>
      <p className="text-gray-700 mb-4">
        All content, trademarks, and other intellectual property on our website are owned by 
        Solinex or our licensors and are protected by copyright and other intellectual property laws.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Limitation of Liability</h4>
      <p className="text-gray-700 mb-4">
        In no event shall Solinex, nor its directors, employees, partners, agents, suppliers, 
        or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
        damages arising out of your use of our services.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">7. Governing Law</h4>
      <p className="text-gray-700 mb-4">
        These terms shall be governed by and construed in accordance with the laws of the 
        jurisdiction in which Solinex operates, without regard to its conflict of law provisions.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">8. Contact Information</h4>
      <p className="text-gray-700">
        If you have any questions about these Terms of Service, please contact us at:
        <br />
        <strong>Email:</strong> legal@solinex.com<br />
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>
    </div>
  )

  return (
    <footer className="bg-solinex-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Company name + tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Solinex</h3>
            <p className="text-solinex-green/80 text-lg">
              Technology Solutions for Tomorrow
            </p>
            <p className="text-sm text-gray-300 max-w-sm">
              We deliver innovative technology solutions that drive business growth and digital transformation.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-solinex-green/80 hover:text-white transition-colors duration-300 text-left"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-solinex-green/80 hover:text-white transition-colors duration-300 text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('home')}
                className="block text-solinex-green/80 hover:text-white transition-colors duration-300 text-left"
              >
                Home
              </button>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-solinex-green/80">info@solinex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-solinex-green/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-solinex-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-solinex-green/80">123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-solinex-green/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-solinex-green/80 text-sm">
              © 2025 Solinex. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={openPrivacy}
                className="text-solinex-green/80 hover:text-white transition-all duration-300 cursor-pointer px-2 py-1 rounded"
              >
                Privacy Policy
              </button>
              <button 
                onClick={openTerms}
                className="text-solinex-green/80 hover:text-white transition-all duration-300 cursor-pointer px-2 py-1 rounded"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <Modal 
        isOpen={isPrivacyOpen || isPrivacyClosing} 
        onClose={closePrivacy} 
        title="Privacy Policy"
        isClosing={isPrivacyClosing}
      >
        <PrivacyPolicyContent />
      </Modal>
      <Modal 
        isOpen={isTermsOpen || isTermsClosing} 
        onClose={closeTerms} 
        title="Terms of Service"
        isClosing={isTermsClosing}
      >
        <TermsOfServiceContent />
      </Modal>
    </footer>
  )
}

export default Footer
