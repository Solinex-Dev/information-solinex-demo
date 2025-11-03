import React, { memo } from 'react'

const TechBadge = ({ 
  children, 
  className = '',
  variant = 'blue', // 'blue', 'green', 'teal'
  size = 'sm', // 'xs', 'sm', 'md'
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-bold border transition-colors duration-200'
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm'
  }
  
  const variantClasses = {
    blue: 'bg-solinex-blue/10 text-solinex-blue border-solinex-blue/20 hover:bg-solinex-blue/20',
    green: 'bg-solinex-green/10 text-solinex-green border-solinex-green/20 hover:bg-solinex-green/20',
    teal: 'bg-solinex-teal/10 text-solinex-teal border-solinex-teal/20 hover:bg-solinex-teal/20'
  }
  
  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default memo(TechBadge)
