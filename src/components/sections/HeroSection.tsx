import React from 'react'
import { UsersRound, ShieldCheck, ChartNoAxesColumnIncreasing } from 'lucide-react'
import { FadeIn } from '../common/FadeIn'
import { Button } from '../common/Button'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="soft-wave relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      <div className="botanical-blur" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="hero-grid">
          <FadeIn delay={0.1} direction="up" className="hero-copy space-y-8 relative z-10">
            <div className="space-y-5">
              <h1 className="hero-title">
                Te ayudamos en la búsqueda de los mejores{' '}
                <span className="text-slate-950 font-bold underline decoration-[#159fe3] decoration-[3px] underline-offset-8">
                  profesionales
                </span>{' '}
                que tu Empresa necesita
              </h1>
              <p className="hero-description">
                Asesoramos de manera especializada en la totalidad del proceso de reclutamiento.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button href="#contacto" variant="primary" size="lg">
                Contáctanos
              </Button>
              <Button href="#nosotros" variant="secondary" size="lg">
                Conócenos
              </Button>
            </div>
            <div className="trust-features">
              <div><UsersRound aria-hidden="true" /><span>Talento<br />de calidad</span></div>
              <div><ShieldCheck aria-hidden="true" /><span>Procesos<br />confiables</span></div>
              <div><ChartNoAxesColumnIncreasing aria-hidden="true" /><span>Resultados<br />para tu negocio</span></div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left" className="hero-art flex justify-center">
            <div className="hero-visual">
              <div className="hero-blob" aria-hidden="true" />
              <div className="hero-note" aria-hidden="true">Personas<br />que hacen<br />crecer tu<br />negocio<svg viewBox="0 0 65 65"><path d="M50 5 Q52 40 10 55 M10 55 l10 -1 M10 55 l5 -9" /></svg></div>
              {/* Texto curvo flotante pasando por encima de la imagen */}
              <div className="hero-arc">
                <svg viewBox="0 0 400 120" className="w-full h-auto overflow-visible">
                  <path id="hero-curve" d="M -10,100 Q 200,-10 410,100" fill="transparent" />
                  <text className="font-['Outfit',sans-serif] font-black uppercase tracking-[0.12em] text-slate-900 text-[18px]">
                    <textPath href="#hero-curve" startOffset="50%" textAnchor="middle">
                      Conectamos <tspan fill="#0560b8">talento y empresas</tspan>
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=88"
                  alt="Profesionales trabajando en equipo"
                />

                {/* Texto inferior dentro de la fotografía */}
                <div className="floating-card">
                  <div className="flex flex-col">
                    <span className="font-['Outfit',sans-serif] text-[10.5px] font-black tracking-[0.16em] text-[#159fe3] uppercase mb-0.5">
                      ENFOQUE ESTRATÉGICO
                    </span>
                    <span className="font-['Poppins',sans-serif] text-[14px] sm:text-[14.5px] font-extrabold text-white tracking-tight leading-tight">
                      PARA POTENCIAR A TU NEGOCIO
                    </span>
                    <Button
                      href="#servicios"
                      variant="link"
                      size="sm"
                      className="hero-card-link"
                    >
                      Descubrir más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 140 C340 30 530 200 850 130 C1110 75 1240 30 1440 0 L1440 180 L0 180 Z" fill="#ffffff" fillOpacity=".65" /><path d="M0 140 C340 30 530 200 850 130 C1110 75 1240 30 1440 0" fill="none" stroke="white" strokeWidth="12" strokeOpacity=".8" /></svg>
    </section>
  )
}
