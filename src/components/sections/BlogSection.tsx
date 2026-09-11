import React from 'react'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../../data/siteData'

export const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            De nuestro Blog
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-normal">
            Perspectivas, consejos y tendencias sobre el mercado laboral y la gestión de personas.
          </p>
        </div>

        {/* Grid de 3 artículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-slate-800 border border-slate-200/60 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-slate-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-800 group-hover:text-slate-950 transition-colors">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón Ver Más Artículos */}
        <div className="mt-14 text-center">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 hover:text-slate-600 uppercase transition-colors"
          >
            <span>VER MÁS ARTÍCULOS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
