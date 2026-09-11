import React from 'react'
import { LinkedinIcon, FacebookIcon } from '../common/SocialIcons'
import { CONTACT_DETAILS } from '../../data/siteData'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: DONDE ESTAMOS */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              DONDE ESTAMOS
            </h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-medium text-slate-900">Dirección:</span> {CONTACT_DETAILS.address}
              </p>
              <p className="text-slate-900 font-medium">
                {CONTACT_DETAILS.city}
              </p>
              <p>
                <span className="font-medium text-slate-900">Fono:</span>{' '}
                <a href={`tel:${CONTACT_DETAILS.phoneClean}`} className="hover:text-slate-950 hover:underline">
                  {CONTACT_DETAILS.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-900">Mail:</span>{' '}
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-slate-950 hover:underline">
                  {CONTACT_DETAILS.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={CONTACT_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold text-slate-950 hover:underline"
                >
                  Ver el Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: SERVICIOS */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              SERVICIOS
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#seleccion" className="hover:text-slate-950 transition-colors">
                  • Selección de Profesionales
                </a>
              </li>
              <li>
                <a href="#desarrollo" className="hover:text-slate-950 transition-colors">
                  • Desarrollo de Personas
                </a>
              </li>
              <li>
                <a href="#gestion" className="hover:text-slate-950 transition-colors">
                  • Gestión Organizacional
                </a>
              </li>
              <li>
                <a href="#reinsercion" className="hover:text-slate-950 transition-colors">
                  • Reinserción Laboral
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SIGUENOS */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              SIGUENOS
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_DETAILS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 flex items-center justify-center transition-all"
                aria-label="Facebook de Jogglar"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn de Jogglar"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 4: MAPA DEL SITIO */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              MAPA DEL SITIO
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#empresa" className="hover:text-slate-950 transition-colors">
                  • Soy Empresa
                </a>
              </li>
              <li>
                <a href="#postulante" className="hover:text-slate-950 transition-colors">
                  • Soy Postulante
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-slate-950 transition-colors">
                  • Somos Jogglar
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-slate-950 transition-colors">
                  • Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-slate-950 transition-colors">
                  • Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jogglar. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#privacidad" className="hover:text-slate-900">Privacidad</a>
            <a href="#terminos" className="hover:text-slate-900">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
