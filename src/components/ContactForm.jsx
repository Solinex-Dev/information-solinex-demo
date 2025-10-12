import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ChevronDown, Send, Mail, Phone, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Service validation
    if (!formData.service.trim()) {
      newErrors.service = t('contactForm.errors.serviceRequired')
    }
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.errors.nameRequired')
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = t('contactForm.errors.companyRequired')
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t('contactForm.errors.phoneRequired')
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.errors.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contactForm.errors.emailInvalid')
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t('contactForm.errors.messageRequired')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      console.log('📧 Sending form via EmailJS...')
      
      // EmailJS configuration
      const serviceId = 'service_g1sdxan'
      const templateId = 'template_vw90k8i'
      const publicKey = '12GR5rWh2izw0QlTy'
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        service: formData.service,
        from_name: formData.name,
        company: formData.company,
        phone: formData.phone,
        from_email: formData.email,
        message: formData.message,
        to_email: 'admin@solinex.dev'
      }
      
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('✅ Form sent successfully via EmailJS')
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        service: '',
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('❌ Error submitting form:', error)
      console.error('Error details:', error.message || error)
      setSubmitStatus('error')
      
      // Clear error message after 7 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 7000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 bg-gradient-to-br from-gray-50 to-white relative scroll-animate ${isVisible ? 'scroll-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Form Card */}
        <div className="w-full mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-solinex-teal mb-2">
                {t('contactForm.title')}
              </h2>
              <p className="text-lg text-solinex-teal/80 max-w-2xl mx-auto leading-relaxed">
                {t('contactForm.subtitle')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Service Selection + Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Selection */}
                <div className="relative group/select">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 pr-12 rounded-full border bg-white/80 backdrop-blur-sm ${
                      errors.service ? 'border-red-500' : 'border-solinex-blue/30'
                    } focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-300 ease-in-out appearance-none cursor-pointer text-solinex-teal placeholder-solinex-teal/60 hover:shadow-md hover:bg-white hover:border-solinex-blue/50 transform hover:scale-[1.02]`}
                  >
                    <option value="">{t('contactForm.fields.service.placeholder')}</option>
                    <option value="web-development">{t('contactForm.fields.service.options.web')}</option>
                    <option value="mobile-app">{t('contactForm.fields.service.options.mobile')}</option>
                    <option value="api-development">{t('contactForm.fields.service.options.api')}</option>
                    <option value="database-design">{t('contactForm.fields.service.options.database')}</option>
                    <option value="consultation">{t('contactForm.fields.service.options.consultation')}</option>
                    <option value="other">{t('contactForm.fields.service.options.other')}</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-solinex-teal/60 transition-transform duration-300 group-hover/select:text-solinex-blue group-hover/select:translate-y-0.5" />
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                  )}
                </div>

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contactForm.fields.name.placeholder')}
                    className={`w-full px-4 py-4 rounded-xl border bg-white/80 backdrop-blur-sm ${
                      errors.name ? 'border-red-500' : 'border-solinex-blue/30'
                    } focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-200 text-solinex-teal placeholder-solinex-teal/60`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Company + Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Company */}
                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('contactForm.fields.company.placeholder')}
                    className={`w-full px-4 py-4 rounded-xl border bg-white/80 backdrop-blur-sm ${
                      errors.company ? 'border-red-500' : 'border-solinex-blue/30'
                    } focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-200 text-solinex-teal placeholder-solinex-teal/60`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contactForm.fields.phone.placeholder')}
                    className={`w-full px-4 py-4 rounded-xl border bg-white/80 backdrop-blur-sm ${
                      errors.phone ? 'border-red-500' : 'border-solinex-blue/30'
                    } focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-200 text-solinex-teal placeholder-solinex-teal/60`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contactForm.fields.email.placeholder')}
                    className={`w-full px-4 py-4 rounded-xl border bg-white/80 backdrop-blur-sm ${
                      errors.email ? 'border-red-500' : 'border-solinex-blue/30'
                    } focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-200 text-solinex-teal placeholder-solinex-teal/60`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contactForm.fields.message.placeholder')}
                  rows="4"
                  className={`w-full px-4 py-4 rounded-xl border bg-white/80 backdrop-blur-sm ${
                    errors.message ? 'border-red-500' : 'border-solinex-blue/30'
                  } focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-200 resize-none text-solinex-teal placeholder-solinex-teal/60`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-solinex-blue to-solinex-green hover:from-solinex-blue/90 hover:to-solinex-green/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contactForm.submitting')}
                    </>
                  ) : (
                    <>
                      <span>{t('contactForm.submitButton')}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded-lg animate-fade-in">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <p className="font-semibold">{t('contactForm.successMessage')}</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg animate-fade-in">
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    <p className="font-semibold">{t('contactForm.errorMessage')}</p>
                  </div>
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-solinex-blue/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <a href="mailto:admin@solinex.dev" className="flex items-center space-x-2 text-solinex-blue hover:text-solinex-teal transition-colors duration-200 font-medium">
                  <Mail className="w-5 h-5" />
                  <span>admin@solinex.dev</span>
                </a>
                <a href="tel:+66621292126" className="flex items-center space-x-2 text-solinex-blue hover:text-solinex-teal transition-colors duration-200 font-medium">
                  <Phone className="w-5 h-5" />
                  <span>+66 62-129-2126</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

