import React from 'react'
import { UserCheck, TrendingUp, Building2, Compass, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '../../data/content'
import { Button } from '../common/Button'

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      case 'Building2':
        return <Building2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-600 dark:text-sky-400" />
      default:
        return <UserCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
    }
  }

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Nuestros Servicios Estratégicos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Soluciones integrales de atracción, evaluación y gestión del talento
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Acompañamos a organizaciones en la conformación de equipos de alto desempeño y a profesionales en su evolución laboral.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Feature Bullets */}
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 dark:border-slate-700/60 pt-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <span>Solicitar este servicio</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Audience Focus Cards (Empresa vs Postulante) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card: Soy Empresa */}
          <div id="empresas" className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 border border-slate-700 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Para Organizaciones
              </span>
              <h3 className="text-2xl font-bold text-white">
                ¿Buscas talento calificado para tu empresa?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                Agilizamos tus procesos de selección con garantías de fit cultural y evaluación rigurosa adaptada al entorno productivo del norte de Chile.
              </p>
              <div className="pt-4">
                <Button
                  href="#contacto"
                  variant="primary"
                  size="md"
                >
                  Contactar Asesoría Empresas
                </Button>
              </div>
            </div>
          </div>

          {/* Card: Soy Postulante */}
          <div id="postulantes" className="rounded-3xl bg-gradient-to-br from-cyan-900/40 via-slate-800 to-blue-950/40 text-white p-8 sm:p-10 border border-cyan-800/40 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Para Profesionales
              </span>
              <h3 className="text-2xl font-bold text-white">
                ¿Quieres dar el siguiente paso en tu carrera?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                Sube tu currículum a nuestra base de talentos, accede a oportunidades confidenciales y recibe orientación de empleabilidad.
              </p>
              <div className="pt-4">
                <Button
                  href="#contacto"
                  variant="white"
                  size="md"
                >
                  Registrar mi CV
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
