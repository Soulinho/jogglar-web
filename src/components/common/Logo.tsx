import React from 'react'
import logoImg from '../../assets/logo-jogglar-transparent.png'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
  }

  return (
    <a
      href="#inicio"
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <img
        src={logoImg}
        alt="Jogglar"
        className={`${heightClasses[size]} w-auto object-contain`}
      />
    </a>
  )
}
