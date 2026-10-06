import React from 'react'
import { Mail, Map, MapPin, Phone } from 'lucide-react'
import { LinkedinIcon, FacebookIcon } from '../common/SocialIcons'
import { CONTACT_DETAILS } from '../../data/siteData'

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="site-footer">
      <svg className="footer-wave" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 92 C330 10 520 155 860 82 C1110 28 1280 55 1440 4" fill="none" stroke="white" strokeOpacity=".45" strokeWidth="2" />
      </svg>
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Col 1: DONDE ESTAMOS */}
          <div className="footer-column">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              DONDE ESTAMOS
            </h3>
            <div className="footer-contact">
              <div className="footer-contact-row">
                <MapPin aria-hidden="true" />
                <p>Dirección: {CONTACT_DETAILS.address}<br />{CONTACT_DETAILS.city}</p>
              </div>
              <div className="footer-contact-row">
                <Phone aria-hidden="true" />
                <p>Fono: <a href={`tel:${CONTACT_DETAILS.phoneClean}`}>{CONTACT_DETAILS.phone}</a></p>
              </div>
              <div className="footer-contact-row">
                <Mail aria-hidden="true" />
                <p>Mail: <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a></p>
              </div>
              <a href={CONTACT_DETAILS.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-row footer-map">
                <Map aria-hidden="true" />
                <span className="footer-link-label">Ver en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 2: SERVICIOS */}
          <div className="footer-column">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              SERVICIOS
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#seleccion" className="footer-text-link">
                  Selección de Profesionales
                </a>
              </li>
              <li>
                <a href="#desarrollo" className="footer-text-link">
                  Desarrollo de Personas
                </a>
              </li>
              <li>
                <a href="#gestion" className="footer-text-link">
                  Gestión Organizacional
                </a>
              </li>
              <li>
                <a href="#reinsercion" className="footer-text-link">
                  Reinserción Laboral
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SIGUENOS */}
          <div className="footer-column">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              SIGUENOS
            </h3>
            <div className="footer-social-links">
              <a
                href={CONTACT_DETAILS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook de Jogglar"
              >
                <FacebookIcon className="footer-social-icon" />
              </a>
              <a
                href={CONTACT_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn de Jogglar"
              >
                <LinkedinIcon className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Col 4: MAPA DEL SITIO */}
          <div className="footer-column">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans">
              MAPA DEL SITIO
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#empresa" className="footer-text-link">
                  Soy Empresa
                </a>
              </li>
              <li>
                <a href="#postulante" className="footer-text-link">
                  Soy Postulante
                </a>
              </li>
              <li>
                <a href="#nosotros" className="footer-text-link">
                  Somos Jogglar
                </a>
              </li>
              <li>
                <a href="#blog" className="footer-text-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="footer-text-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jogglar. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#privacidad" className="hover:text-slate-900">Privacidad</a>
            <a href="#terminos" className="hover:text-slate-900">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
