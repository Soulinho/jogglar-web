import type { BlogPost, NavItem, ServiceItem, StatMetric } from '../types'

export const CONTACT_INFO = {
  phone: '+56 9 4441 0731',
  phoneClean: '+56944410731',
  email: 'contacto@jogglar.com',
  address: 'Av. Argentina 3283, Piso 3',
  city: 'Antofagasta, Chile',
  googleMapsUrl: 'https://maps.google.com/?q=Av.+Argentina+3283,+Antofagasta',
  schedule: 'Lun - Vie: 09:00 - 18:30 hrs',
  social: {
    linkedin: 'https://www.linkedin.com/company/jogglar',
    facebook: 'https://www.facebook.com/jogglar',
    instagram: 'https://www.instagram.com/jogglar',
  },
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soy Empresa', href: '#empresas' },
  { label: 'Soy Postulante', href: '#postulantes' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Somos Jogglar', href: '#nosotros' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto', isAction: true },
]

export const STATS: StatMetric[] = [
  {
    value: '+12',
    label: 'Años de Experiencia',
    sublabel: 'Liderando atracción de talento en el norte y todo Chile',
  },
  {
    value: '96%',
    label: 'Tasa de Éxito',
    sublabel: 'Garantía y efectividad en procesos de headhunting',
  },
  {
    value: '+1.8k',
    label: 'Profesionales Colocados',
    sublabel: 'En posiciones estratégicas, técnicas y gerenciales',
  },
  {
    value: '< 18d',
    label: 'Tiempo Promedio de Terna',
    sublabel: 'Agilidad y rigurosidad metodológica comprobada',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'seleccion',
    title: 'Selección de Profesionales & Headhunting',
    shortDesc: 'Atracción rigurosa de perfiles estratégicos, directivos y especialistas técnicos con fit cultural exacto.',
    description: 'Búsqueda especializada y exhaustiva que combina inteligencia de mercado, evaluación por competencias y validación técnica para posiciones clave.',
    icon: 'UserCheck',
    badge: 'Servicio Principal',
    audience: 'empresa',
    features: [
      'Headhunting ejecutivo y mandos medios',
      'Evaluación por competencias y pruebas proyectivas',
      'Garantía extendida de reemplazo y acompañamiento',
      'Cobertura especializada en minería, industria y energía',
    ],
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo de Personas & Liderazgo',
    shortDesc: 'Programas de coaching, evaluación de potencial y fortalecimiento de habilidades directivas.',
    description: 'Impulsamos el crecimiento de equipos y líderes a través de metodologías personalizadas que maximizan el rendimiento y la cohesión.',
    icon: 'TrendingUp',
    badge: 'Crecimiento',
    audience: 'ambos',
    features: [
      'Evaluaciones de desempeño 360°',
      'Coaching ejecutivo personalizado',
      'Talleres de liderazgo y cultura organizacional',
      'Mapeo de talento y planes de sucesión',
    ],
  },
  {
    id: 'gestion',
    title: 'Gestión & Diagnóstico Organizacional',
    shortDesc: 'Optimización de estructuras, clima laboral y modelos de gestión del capital humano.',
    description: 'Diagnóstico certero para diseñar estructuras ágiles, perfiles de cargo alineados a la estrategia y planes de mejora en el clima laboral.',
    icon: 'Building2',
    badge: 'Estrategia',
    audience: 'empresa',
    features: [
      'Estudios de clima y cultura organizacional',
      'Levantamiento y descripción de cargos',
      'Bandas salariales y compensaciones de mercado',
      'Gestión del cambio y optimización de procesos RRHH',
    ],
  },
  {
    id: 'reinsercion',
    title: 'Reinserción Laboral & Outplacement',
    shortDesc: 'Acompañamiento integral para profesionales en transición y reconversión de carrera.',
    description: 'Asesoría estratégica en empleabilidad, posicionamiento en LinkedIn y preparación para entrevistas de alto impacto.',
    icon: 'Compass',
    badge: 'Transición',
    audience: 'postulante',
    features: [
      'Optimización de CV y perfil de LinkedIn de alto impacto',
      'Simulaciones de entrevistas ejecutivas',
      'Estrategias de networking y mercado oculto',
      'Plan de carrera y propuesta de valor personal',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Trabajo Profundo: Cómo potenciar el enfoque en entornos corporativos de alta demanda',
    category: 'Productividad & Liderazgo',
    readTime: '5 min de lectura',
    date: '10 Septiembre 2026',
    excerpt: 'Claves para estructurar jornadas libres de distracciones y potenciar el rendimiento cognitivo de los equipos estratégicos.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    slug: 'trabajo-profundo-entornos-corporativos',
  },
  {
    id: '2',
    title: '¡Mejora tu perfil de LinkedIn! Guía definitiva para destacar ante reclutadores',
    category: 'Empleabilidad',
    readTime: '6 min de lectura',
    date: '04 Septiembre 2026',
    excerpt: 'Estrategias accionables de posicionamiento orgánico, palabras clave del sector industrial y cómo presentar tus logros cuantificables.',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80',
    slug: 'mejora-tu-perfil-de-linkedin',
  },
  {
    id: '3',
    title: '¿Obsoleto a los 57? El valor insustituible del talento senior y la experiencia',
    category: 'Tendencias Laborales',
    readTime: '4 min de lectura',
    date: '28 Agosto 2026',
    excerpt: 'Por qué las organizaciones líderes están revalorizando el criterio estratégico, la gestión de crisis y el mentoring de profesionales con trayectoria.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    slug: 'obsoleto-a-los-57-talento-senior',
  },
]

export const VALUE_PILLARS = [
  {
    title: 'Conocimiento Local e Industrial',
    description: 'Expertos en las dinámicas laborales de la Región de Antofagasta, minería, faenas industriales y sector de servicios.',
    icon: 'MapPin',
  },
  {
    title: 'Metodología Rigurosa y Personalizada',
    description: 'No somos un repositorio pasivo de currículums. Diseñamos búsquedas a la medida evaluando capacidades técnicas y calce cultural.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Acompañamiento Integral y Post-Colocación',
    description: 'Monitoreamos la integración del profesional durante su periodo de adaptación para asegurar resultados sostenibles.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Confidencialidad y Ética Profesional',
    description: 'Manejo impecable y discreto de información sensible tanto para empresas contratantes como para ejecutivos en búsqueda activa.',
    icon: 'Lock',
  },
]
