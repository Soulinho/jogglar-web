import React from 'react'
import { ArrowRight } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda / Textos Principales */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
                Te ayudamos en la búsqueda de los mejores{' '}
                <span className="text-slate-950 font-bold underline decoration-amber-400/80 decoration-2 underline-offset-8">
                  profesionales
                </span>{' '}
                que tu Empresa necesita
              </h1>
              
              <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl pt-2">
                Asesoramos de manera especializada en la totalidad del proceso de reclutamiento.
              </p>
            </div>

            {/* Acciones directas */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all duration-150 shadow-sm"
              >
                <span>CONTÁCTANOS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#nosotros"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-medium text-sm hover:bg-slate-200 transition-all duration-150"
              >
                <span>CONÓCENOS</span>
              </a>
            </div>

          </div>

          {/* Columna Derecha / Imagen y Tarjeta Editorial limpia */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-lg bg-slate-100 border border-slate-200/80">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                  alt="Equipo profesional Jogglar"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              
              {/* Badge destacado */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 p-4 rounded-xl shadow-md">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  ENFOQUE ESTRATÉGICO
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">
                  PARA POTENCIAR A TU NEGOCIO
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
