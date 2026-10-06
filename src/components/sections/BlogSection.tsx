import React from 'react'
import { BLOG_POSTS } from '../../data/siteData'
import { FadeIn } from '../common/FadeIn'
import { Button } from '../common/Button'

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="section-wave w-full py-20 lg:py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header de la sección */}
        <FadeIn delay={0.1} direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="blog-title">
            De nuestro Blog
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-normal">
            Perspectivas, consejos y tendencias sobre el mercado laboral y la gestión de personas.
          </p>
        </FadeIn>

        {/* Grid de 3 artículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post, index) => (
            <FadeIn key={post.id} delay={0.2 + (index * 0.1)} direction="up" className="h-full flex">
              <article
                className="blog-card group flex flex-col overflow-hidden transition-all duration-200 w-full"
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
                    <h3 className="blog-card-title text-slate-900 group-hover:text-slate-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Button
                      href="#blog"
                      variant="link"
                      size="sm"
                    >
                      Leer artículo
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Botón Ver Más Artículos */}
        <FadeIn delay={0.5} direction="up" className="mt-14 text-center">
          <Button
            href="#blog"
            variant="outline"
            size="lg"
          >
            Ver más artículos
          </Button>
        </FadeIn>

      </div>
    </section>
  )
}
