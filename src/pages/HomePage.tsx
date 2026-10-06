import React from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import { BlogSection } from '../components/sections/BlogSection'

export const HomePage: React.FC = () => {
  return (
    <main className="flex-1">
      {/* 1. Hero Principal */}
      <HeroSection />

      {/* 2. Sección De nuestro Blog */}
      <BlogSection />
    </main>
  )
}
