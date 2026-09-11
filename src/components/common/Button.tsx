import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none group cursor-pointer'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  }

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/20 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] focus:ring-blue-500',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-[0.98] focus:ring-slate-400 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
    outline: 'border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-transparent active:scale-[0.98] focus:ring-blue-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400',
    ghost: 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/70 active:scale-[0.98] focus:ring-slate-300 dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:bg-slate-800/70',
    white: 'bg-white text-slate-900 shadow-md hover:bg-slate-50 active:scale-[0.98] focus:ring-white/80',
    dark: 'bg-slate-900 text-white shadow-md hover:bg-slate-800 active:scale-[0.98] focus:ring-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700',
  }

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && iconPosition === 'left' && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  )
}
