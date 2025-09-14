import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Import icon images
import reactIcon from '../assets/icons/icon-react.png'
import nodejsIcon from '../assets/icons/icon-nodejs.png'
import javascriptIcon from '../assets/icons/icon-javascript.png'
import typescriptIcon from '../assets/icons/icon-typescript.png'
import mongodbIcon from '../assets/icons/icon-mongodb.png'
import postgresqlIcon from '../assets/icons/icon-postgresql.png'
import dockerIcon from '../assets/icons/icon-docker.png'
import awsIcon from '../assets/icons/icon-aws.png'
import gitIcon from '../assets/icons/icon-git.png'
import tailwindIcon from '../assets/icons/icon-tailwind-css.png'
import viteIcon from '../assets/icons/icon-vite.png'

const TechStack = () => {
  const { t } = useLanguage()
  
  // Tech stack data with actual icon files
  const techItems = [
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'AWS', icon: awsIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'TailwindCSS', icon: tailwindIcon },
    { name: 'Vite', icon: viteIcon }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('techStack.title', 'Tech Stack')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('techStack.subtitle', 'We use cutting-edge technologies to build modern, scalable solutions')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techItems.map((tech, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-center">
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`}
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-solinex-blue transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
