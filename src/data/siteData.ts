export interface BlogPostItem {
  id: string
  title: string
  category: string
  image: string
  slug: string
}

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: '1',
    title: 'Trabajo Profundo',
    category: 'Productividad',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    slug: 'trabajo-profundo',
  },
  {
    id: '2',
    title: '¡Mejora tu perfil de Linkedin!',
    category: 'Empleabilidad',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80',
    slug: 'mejora-tu-perfil-de-linkedin',
  },
  {
    id: '3',
    title: '¿Obsoleto a los 57?',
    category: 'Tendencias',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    slug: 'obsoleto-a-los-57',
  },
]

export const CONTACT_DETAILS = {
  address: 'Av. Argentina 3283, Piso 3',
  city: 'Antofagasta',
  phone: '+56 9 4441 0731',
  phoneClean: '+56944410731',
  email: 'contacto@jogglar.com',
  mapsUrl: 'https://maps.google.com/?q=Av.+Argentina+3283,+Antofagasta',
  facebookUrl: 'https://www.facebook.com/jogglar',
  linkedinUrl: 'https://www.linkedin.com/company/jogglar',
}
