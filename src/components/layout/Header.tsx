import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '../common/Logo'

interface HeaderProps {
  currentPage?: string
  onNavigate?: (page: string) => void
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'inicio',
  onNavigate = () => {},
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'empresa', label: 'Soy Empresa', href: '#empresa' },
    { id: 'postulante', label: 'Soy Postulante', href: '#postulante' },
    { id: 'nosotros', label: 'Somos Jogglar', href: '#nosotros' },
    { id: 'blog', label: 'Blog', href: '#blog' },
    { id: 'contacto', label: 'Contacto', href: '#contacto' },
  ]

  const handleLinkClick = (id: string) => {
    onNavigate(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo */}
          <Logo size="lg" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors duration-150 ${
                  currentPage === link.id
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`text-base font-medium py-1 transition-colors ${
                  currentPage === link.id
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
