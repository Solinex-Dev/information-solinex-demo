import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Showcase = () => {
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: '🛒'
    },
    {
      id: 2,
      name: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard for business insights',
      image: '📊'
    },
    {
      id: 3,
      name: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric auth',
      image: '🏦'
    },
    {
      id: 4,
      name: 'IoT Monitoring System',
      description: 'Internet of Things monitoring and control platform',
      image: '🌐'
    },
    {
      id: 5,
      name: 'AI Chatbot Platform',
      description: 'Intelligent customer service chatbot solution',
      image: '🤖'
    }
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and solutions
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-3xl overflow-visible"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gradient-to-br from-solinex-blue/10 to-solinex-green/10 rounded-3xl p-20 mx-4 h-full">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-6xl mb-6">{project.image}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.name}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-solinex-teal hover:text-solinex-blue p-3 rounded-full shadow-lg transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-solinex-teal hover:text-solinex-blue p-3 rounded-full shadow-lg transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
