import React from 'react'
import { MapPin, ShieldCheck, HeartHandshake, Lock, CheckCircle2 } from 'lucide-react'
import { VALUE_PILLARS } from '../../data/content'

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      case 'Lock':
        return <Lock className="w-6 h-6 text-sky-600 dark:text-sky-400" />
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
    }
  }

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              Somos Jogglar
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Conectamos el talento clave con las oportunidades que impulsan el desarrollo.
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              En Jogglar entendemos que el capital humano es el verdadero motor de competitividad. Ubicados estratégicamente en Antofagasta, combinamos cercanía territorial con estándares internacionales de evaluación psicológica, técnica y de liderazgo.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Compromiso de Calce Cultural
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                No nos limitamos a validar habilidades técnicas: nos aseguramos de que los valores, estilo de trabajo y visión del candidato se alineen con la cultura de tu empresa.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center group-hover:scale-108 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-4">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
