export interface NavItem {
  label: string
  href: string
  isAction?: boolean
}

export interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  badge: string
  features: string[]
  audience: 'empresa' | 'postulante' | 'ambos'
}

export interface BlogPost {
  id: string
  title: string
  category: string
  readTime: string
  date: string
  excerpt: string
  image: string
  slug: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface StatMetric {
  value: string
  label: string
  sublabel: string
}
