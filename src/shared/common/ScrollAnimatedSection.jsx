import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ScrollAnimatedSection = ({ 
  id,
  className = '',
  threshold = 0.15,
  children,
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold })

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-animate ${isVisible ? 'scroll-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

export default ScrollAnimatedSection
