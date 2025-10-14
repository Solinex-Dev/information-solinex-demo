import React from 'react'

const GradientButton = ({ 
  children, 
  onClick,
  className = '',
  variant = 'primary', // 'primary', 'secondary', 'outline'
  size = 'md', // 'sm', 'md', 'lg'
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-3xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  }
  
  const variantClasses = {
    primary: 'border-2 border-solinex-blue hover:border-solinex-teal bg-solinex-blue hover:bg-solinex-teal text-white shadow-lg hover:shadow-xl focus:ring-solinex-blue',
    secondary: 'border-2 border-solinex-blue text-solinex-blue hover:bg-solinex-blue hover:text-white focus:ring-solinex-blue',
    outline: 'border-2 border-solinex-teal text-solinex-teal hover:bg-solinex-teal hover:text-white focus:ring-solinex-teal'
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default GradientButton
