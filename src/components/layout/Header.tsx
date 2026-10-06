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
    <header className="site-header w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo */}
          <Logo size="lg" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`desktop-nav-link text-sm font-medium ${
                  currentPage === link.id
                    ? 'is-active'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="mobile-menu lg:hidden">
          <div className="mobile-menu__inner">
            <nav className="mobile-nav" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`mobile-nav-link ${currentPage === link.id ? 'is-active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
