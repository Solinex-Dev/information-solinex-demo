import React from 'react'

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'p-8',
  rounded = 'rounded-3xl',
  background = 'bg-white',
  shadow = 'shadow-lg',
  ...props 
}) => {
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 transform hover:scale-105' : ''
  
  return (
    <div
      className={`${background} ${rounded} ${padding} ${shadow} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
