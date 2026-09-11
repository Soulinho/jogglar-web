import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO } from '../../data/content'
import { LinkedinIcon, FacebookIcon, InstagramIcon } from '../common/SocialIcons'

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Información de contacto rápida" className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Direct Contact Information */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-1">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{CONTACT_INFO.address}, {CONTACT_INFO.city}</span>
            </span>
          </div>

          {/* Right: Working Hours & Socials */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[11px]">
              <Clock className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>{CONTACT_INFO.schedule}</span>
            </div>

            <div className="h-3 w-px bg-slate-700 hidden lg:block" />

            <div className="flex items-center gap-2.5">
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                aria-label="LinkedIn de Jogglar"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                aria-label="Facebook de Jogglar"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                aria-label="Instagram de Jogglar"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
